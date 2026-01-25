import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Lock, Eye } from "lucide-react";

interface PrivacySecuritySettingsProps {
  profileVisibility: string;
  onProfileVisibilityChange: (value: string) => void;
  showEmail: boolean;
  onShowEmailChange: (value: boolean) => void;
  showActivity: boolean;
  onShowActivityChange: (value: boolean) => void;
}

export const PrivacySecuritySettings = ({
  profileVisibility,
  onProfileVisibilityChange,
  showEmail,
  onShowEmailChange,
  showActivity,
  onShowActivityChange,
}: PrivacySecuritySettingsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="size-5" />
          Privacy & Security
        </CardTitle>
        <CardDescription>Control who can see your information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="profile-visibility">Profile Visibility</Label>
            <p className="text-sm text-muted-foreground">Who can view your profile</p>
          </div>
          <Select value={profileVisibility} onValueChange={onProfileVisibilityChange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">
                <div className="flex items-center gap-2">
                  <Eye className="size-4" />
                  Public
                </div>
              </SelectItem>
              <SelectItem value="private">
                <div className="flex items-center gap-2">
                  <Lock className="size-4" />
                  Private
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="show-email">Show Email</Label>
            <p className="text-sm text-muted-foreground">Display email on your profile</p>
          </div>
          <Switch id="show-email" checked={showEmail} onCheckedChange={onShowEmailChange} />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="show-activity">Show Activity Status</Label>
            <p className="text-sm text-muted-foreground">Let others see when you're active</p>
          </div>
          <Switch id="show-activity" checked={showActivity} onCheckedChange={onShowActivityChange} />
        </div>
      </CardContent>
    </Card>
  );
};
