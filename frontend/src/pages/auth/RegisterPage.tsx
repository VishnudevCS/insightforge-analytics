import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import AuthShell from "../../components/auth/AuthShell";

const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Enter your full name.")
      .max(80, "Name cannot exceed 80 characters."),
    email: z
      .string()
      .trim()
      .min(1, "Email address is required.")
      .email("Enter a valid email address."),
    password: z
      .string()
      .min(8, "Password must contain at least 8 characters.")
      .regex(/[A-Z]/, "Include at least one uppercase letter.")
      .regex(/[a-z]/, "Include at least one lowercase letter.")
      .regex(/[0-9]/, "Include at least one number.")
      .regex(
        /[^A-Za-z0-9]/,
        "Include at least one special character.",
      ),
    confirmPassword: z
      .string()
      .min(1, "Confirm your password."),
    acceptTerms: z.boolean().refine((value) => value, {
      message: "You must accept the terms and privacy policy.",
    }),
  })
  .refine(
    (values) => values.password === values.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match.",
    },
  );

type RegisterFormValues = z.infer<typeof registerSchema>;

const passwordChecks = [
  {
    label: "8+ characters",
    validate: (password: string) => password.length >= 8,
  },
  {
    label: "Uppercase",
    validate: (password: string) => /[A-Z]/.test(password),
  },
  {
    label: "Number",
    validate: (password: string) => /[0-9]/.test(password),
  },
  {
    label: "Special symbol",
    validate: (password: string) =>
      /[^A-Za-z0-9]/.test(password),
  },
];

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] =
    useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const password =
    useWatch({
      control,
      name: "password",
    }) ?? "";

  const passwordStrength = useMemo(() => {
    const completedChecks = passwordChecks.filter((check) =>
      check.validate(password),
    ).length;

    if (!password) {
      return {
        score: 0,
        label: "Enter a secure password",
      };
    }

    if (completedChecks <= 1) {
      return {
        score: 25,
        label: "Weak password",
      };
    }

    if (completedChecks === 2) {
      return {
        score: 50,
        label: "Fair password",
      };
    }

    if (completedChecks === 3) {
      return {
        score: 75,
        label: "Strong password",
      };
    }

    return {
      score: 100,
      label: "Excellent password",
    };
  }, [password]);

  const submitRegistration = async (
    values: RegisterFormValues,
  ) => {
    await new Promise((resolve) =>
      window.setTimeout(resolve, 1000),
    );

    toast.success("Account details validated.", {
      description: `Backend registration will be connected next for ${values.email}.`,
    });
  };

  return (
    <AuthShell
      eyebrow="Create your workspace"
      title="Start building better insights"
      description="Create your secure InsightForge account and transform raw data into interactive business intelligence."
    >
      <form
        onSubmit={handleSubmit(submitRegistration)}
        className="space-y-5"
        noValidate
      >
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Full name
          </label>

          <div className="relative">
            <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />

            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              {...register("fullName")}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.055] focus:ring-4 focus:ring-violet-500/10"
            />
          </div>

          {errors.fullName && (
            <p className="mt-2 text-xs text-rose-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="registerEmail"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email address
          </label>

          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />

            <input
              id="registerEmail"
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
          <label
            htmlFor="registerPassword"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Password
          </label>

          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />

            <input
              id="registerPassword"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a secure password"
              {...register("password")}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.055] focus:ring-4 focus:ring-violet-500/10"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((current) => !current)
              }
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
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

          <div className="mt-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-600">
                Password strength
              </span>

              <span className="text-[11px] font-medium text-violet-300">
                {passwordStrength.label}
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                animate={{
                  width: `${passwordStrength.score}%`,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-300"
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {passwordChecks.map((check) => {
                const isComplete = check.validate(password);

                return (
                  <div
                    key={check.label}
                    className={`flex items-center gap-2 text-[11px] transition ${
                      isComplete
                        ? "text-emerald-300"
                        : "text-slate-600"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        isComplete
                          ? "border-emerald-400/30 bg-emerald-400/10"
                          : "border-white/10 bg-white/[0.025]"
                      }`}
                    >
                      {isComplete && (
                        <Check className="h-2.5 w-2.5" />
                      )}
                    </span>

                    {check.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Confirm password
          </label>

          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />

            <input
              id="confirmPassword"
              type={showConfirmation ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Re-enter your password"
              {...register("confirmPassword")}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.055] focus:ring-4 focus:ring-violet-500/10"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmation((current) => !current)
              }
              aria-label={
                showConfirmation
                  ? "Hide password confirmation"
                  : "Show password confirmation"
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 transition hover:text-slate-300"
            >
              {showConfirmation ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="mt-2 text-xs text-rose-400">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-400">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-violet-500"
            />

            <span>
              I agree to the{" "}
              <button
                type="button"
                className="font-medium text-violet-300 transition hover:text-violet-200"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="font-medium text-violet-300 transition hover:text-violet-200"
              >
                Privacy Policy
              </button>
              .
            </span>
          </label>

          {errors.acceptTerms && (
            <p className="mt-2 text-xs text-rose-400">
              {errors.acceptTerms.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 font-semibold text-white shadow-[0_18px_50px_rgba(139,92,246,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(139,92,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Creating your workspace..."
            : "Create secure account"}
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/8" />

        <span className="text-xs uppercase tracking-[0.2em] text-slate-600">
          Already registered?
        </span>

        <div className="h-px flex-1 bg-white/8" />
      </div>

      <Link
        to="/login"
        className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] font-medium text-slate-200 transition hover:border-violet-400/25 hover:bg-white/[0.065]"
      >
        Sign in to your account
      </Link>

      <p className="mt-8 text-center text-xs leading-5 text-slate-600">
        Your account information will be encrypted and securely
        protected.
      </p>
    </AuthShell>
  );
}

export default RegisterPage;