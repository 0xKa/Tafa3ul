import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";

interface NotificationSettingsProps {
  emailNotifications: boolean;
  onEmailNotificationsChange: (value: boolean) => void;
  pushNotifications: boolean;
  onPushNotificationsChange: (value: boolean) => void;
  postLikes: boolean;
  onPostLikesChange: (value: boolean) => void;
  postComments: boolean;
  onPostCommentsChange: (value: boolean) => void;
  newFollowers: boolean;
  onNewFollowersChange: (value: boolean) => void;
}

export const NotificationSettings = ({
  emailNotifications,
  onEmailNotificationsChange,
  pushNotifications,
  onPushNotificationsChange,
  postLikes,
  onPostLikesChange,
  postComments,
  onPostCommentsChange,
  newFollowers,
  onNewFollowersChange,
}: NotificationSettingsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="size-5" />
          Notifications
        </CardTitle>
        <CardDescription>Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
          </div>
          <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={onEmailNotificationsChange} />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive push notifications in your browser</p>
          </div>
          <Switch id="push-notifications" checked={pushNotifications} onCheckedChange={onPushNotificationsChange} />
        </div>
        <Separator />
        <div className="space-y-4 pt-2">
          <Label className="text-sm font-medium">Notify me about</Label>
          <div className="space-y-4 pl-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="post-likes" className="font-normal">
                Likes on my posts
              </Label>
              <Switch id="post-likes" checked={postLikes} onCheckedChange={onPostLikesChange} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="post-comments" className="font-normal">
                Comments on my posts
              </Label>
              <Switch id="post-comments" checked={postComments} onCheckedChange={onPostCommentsChange} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="new-followers" className="font-normal">
                New followers
              </Label>
              <Switch id="new-followers" checked={newFollowers} onCheckedChange={onNewFollowersChange} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
