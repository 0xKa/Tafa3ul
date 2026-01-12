import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { AlertCircle, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required").max(100, "First name is too long"),
    lastName: z.string().min(1, "Last name is required").max(100, "Last name is too long"),
    username: z.string().min(3, "Username must be at least 3 characters").max(50, "Username is too long"),
    email: z.email("Invalid email address"),
    password: z.string().min(4, "Password must be at least 4 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation.mutate({
      username: data.username,
      password: data.password,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 1,
    });
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md md:max-w-2xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Join Tafa3ul and connect with developers</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    id="firstName"
                    type="text"
                    placeholder="Reda"
                    disabled={registerMutation.isPending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.firstName && <p className="text-sm text-red-400">{errors.firstName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    id="lastName"
                    type="text"
                    placeholder="Hilal"
                    disabled={registerMutation.isPending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.lastName && <p className="text-sm text-red-400">{errors.lastName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    disabled={registerMutation.isPending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Username</label>
                  <input
                    {...register("username")}
                    type="text"
                    placeholder="profile unique username"
                    disabled={registerMutation.isPending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.username && <p className="text-sm text-red-400">{errors.username.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    disabled={registerMutation.isPending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.password && <p className="text-sm text-red-400">{errors.password.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm Password</label>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    disabled={registerMutation.isPending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.confirmPassword && <p className="text-sm text-red-400">{errors.confirmPassword.message}</p>}
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full mt-6" disabled={registerMutation.isPending}>
              {registerMutation.isPending ? "Creating account..." : "Create Account"}
            </Button>

            {registerMutation.isError && (
              <Alert className="border-red-500 bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>
                  {axios.isAxiosError(registerMutation.error)
                    ? registerMutation.error.response?.data?.message ?? "Registration failed"
                    : "Something went wrong"}
                </AlertTitle>
                <AlertDescription className="inline">Please try again later.</AlertDescription>
              </Alert>
            )}

            {registerMutation.isSuccess && (
              <Alert className="border-green-500 bg-green-50 text-green-700 dark:bg-green-950/20 dark:text-green-400">
                <Check className="h-4 w-4 shrink-0" />
                <AlertTitle>Account created successfully!</AlertTitle>
                <AlertDescription className="inline">
                  You can now{" "}
                  <Link to="/login" className="font-medium underline">
                    login here
                  </Link>
                  .
                </AlertDescription>
              </Alert>
            )}
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="font-medium text-primary hover:underline">
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
