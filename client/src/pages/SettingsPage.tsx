import { useTheme } from "@/components/theme/theme-provider";
import { useAuthStore } from "@/features/auth/authStore";
import {
  AccountInformation,
  AppearanceSettings,
  DangerZone,
  NotificationSettings,
  PrivacySecuritySettings,
} from "@/features/settings/components";
import type { Theme } from "@/features/settings/components/AppearanceSettings";
import { useDeleteAccount } from "@/features/settings/useDeleteAccount";
import { paths } from "@/paths";
import { Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const SettingsPage = () => {
  const { user, logout } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { mutate: deleteAccount, isPending } = useDeleteAccount();

  // Notification Settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [postLikes, setPostLikes] = useState(true);
  const [postComments, setPostComments] = useState(true);
  const [newFollowers, setNewFollowers] = useState(true);

  // Privacy Settings
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [showEmail, setShowEmail] = useState(false);
  const [showActivity, setShowActivity] = useState(true);

  const handleDeleteAccount = () => {
    deleteAccount(undefined, {
      onSuccess: () => {
        logout();
        navigate(paths.root);
        toast.success("Your account has been deleted successfully.");
      },
    });
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Settings className="size-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="space-y-6">
        <AccountInformation username={user?.username} userId={user?.id} />

        <AppearanceSettings
          theme={theme as Theme}
          onThemeChange={(value) => setTheme(value as Theme)}
        />

        <NotificationSettings
          emailNotifications={emailNotifications}
          onEmailNotificationsChange={setEmailNotifications}
          pushNotifications={pushNotifications}
          onPushNotificationsChange={setPushNotifications}
          postLikes={postLikes}
          onPostLikesChange={setPostLikes}
          postComments={postComments}
          onPostCommentsChange={setPostComments}
          newFollowers={newFollowers}
          onNewFollowersChange={setNewFollowers}
        />

        <PrivacySecuritySettings
          profileVisibility={profileVisibility}
          onProfileVisibilityChange={setProfileVisibility}
          showEmail={showEmail}
          onShowEmailChange={setShowEmail}
          showActivity={showActivity}
          onShowActivityChange={setShowActivity}
        />

        <DangerZone onDeleteAccount={handleDeleteAccount} isDeleting={isPending} />
      </div>
    </div>
  );
};

export default SettingsPage;
