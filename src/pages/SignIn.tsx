import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn } from "lucide-react";

const WEBHOOK_URL = "https://n8n-s73k.onrender.com/webhook-test/627cc33d-de66-4ea7-aed2-6fc5e2a27a08";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const sendWebhookEvent = async (eventType: string, data?: any) => {
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventType,
        timestamp: new Date().toISOString(),
        data,
      }),
    });
    console.log(`Webhook event sent: ${eventType}`, data);
  } catch (error) {
    console.error("Failed to send webhook event:", error);
  }
};

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  useEffect(() => {
    // Send page load event
    sendWebhookEvent("page_loaded", { page: "signin" });
  }, []);

  const onSubmit = async (data: SignInFormData) => {
    // Send form submission event (without actual password)
    await sendWebhookEvent("form_submitted", {
      email: data.email,
      // Never send actual passwords - this is just for testing
      hasPassword: !!data.password,
    });

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Sign in successful!",
      description: "Webhook event sent successfully.",
    });
  };

  const handleButtonClick = (buttonType: string) => {
    sendWebhookEvent("button_clicked", { button: buttonType });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
              <LogIn className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                  className={errors.password ? "border-destructive pr-10" : "pr-10"}
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                    handleButtonClick("toggle_password_visibility");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                onClick={() => handleButtonClick("forgot_password")}
                className="text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              onClick={() => handleButtonClick("sign_in_submit")}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <button
              type="button"
              onClick={() => handleButtonClick("create_account")}
              className="text-primary hover:underline font-medium"
            >
              Create one
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
