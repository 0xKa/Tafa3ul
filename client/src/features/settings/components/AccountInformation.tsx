import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";

interface AccountInformationProps {
  username?: string;
  userId?: string;
}

export const AccountInformation = ({ username, userId }: AccountInformationProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="size-5" />
          Account Information
        </CardTitle>
        <CardDescription>Your basic account details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label className="text-base">Username</Label>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <Label className="text-base">User ID</Label>
            <p className="text-sm text-muted-foreground font-mono">{userId}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
