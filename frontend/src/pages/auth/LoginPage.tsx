import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import AuthShell from "../../components/auth/AuthShell";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Enter a valid email address."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must contain at least 8 characters."),
  remember: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const submitLogin = async (values: LoginFormValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 900));

    toast.success("Login form validated successfully.", {
      description: `Backend authentication will be connected next for ${values.email}.`,
    });
  };

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to your workspace"
      description="Access your dashboards, datasets and saved analytics projects."
    >
      <form
        onSubmit={handleSubmit(submitLogin)}
        className="space-y-5"
        noValidate
      >
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email address
          </label>

          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              {...register("email")}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.055] focus:ring-4 focus:ring-violet-500/10"
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-xs text-rose-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <button
              type="button"
              className="text-xs font-medium text-violet-300 transition hover:text-violet-200"
            >
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              {...register("password")}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.055] focus:ring-4 focus:ring-violet-500/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 transition hover:text-slate-300"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-xs text-rose-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
          <input
            type="checkbox"
            {...register("remember")}
            className="h-4 w-4 rounded border-white/20 bg-white/5 accent-violet-500"
          />

          Keep me signed in
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 font-semibold text-white shadow-[0_18px_50px_rgba(139,92,246,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(139,92,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Signing in..." : "Sign in securely"}
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/8" />

        <span className="text-xs uppercase tracking-[0.2em] text-slate-600">
          New to InsightForge?
        </span>

        <div className="h-px flex-1 bg-white/8" />
      </div>

      <Link
        to="/register"
        className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] font-medium text-slate-200 transition hover:border-violet-400/25 hover:bg-white/[0.065]"
      >
        Create an account
      </Link>

      <p className="mt-8 text-center text-xs leading-5 text-slate-600">
        By continuing, you agree to the Terms of Service and Privacy Policy.
      </p>
    </AuthShell>
  );
}

export default LoginPage;