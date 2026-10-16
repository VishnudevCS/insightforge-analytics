import {
  ArrowRight,
  BarChart3,
  Database,
  LineChart,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    icon: Database,
    title: "Connect your data",
    description:
      "Upload CSV and Excel files and prepare them for analysis.",
  },
  {
    icon: BarChart3,
    title: "Build dashboards",
    description:
      "Transform raw information into interactive visual reports.",
  },
  {
    icon: Sparkles,
    title: "Discover insights",
    description:
      "Identify trends, anomalies, growth patterns, and key metrics.",
  },
];

function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b14] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute bottom-[-300px] right-[-160px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(7,11,20,0.8)_78%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/15 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <LineChart className="h-6 w-6 text-violet-300" />
          </div>

          <div>
            <p className="text-lg font-semibold tracking-tight">
              InsightForge
            </p>

            <p className="text-xs text-slate-500">
              Analytics Intelligence
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a
            href="#features"
            className="transition duration-300 hover:text-white"
          >
            Platform
          </a>

          <a
            href="#workflow"
            className="transition duration-300 hover:text-white"
          >
            Solutions
          </a>

          <a
            href="#about"
            className="transition duration-300 hover:text-white"
          >
            About
          </a>
        </div>

        <Link
          to="/login"
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/10"
        >
          Sign in
        </Link>
      </nav>

      {/* Hero section */}
      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-20 text-center lg:px-10 lg:pt-28">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
          <Sparkles className="h-4 w-4" />
          Intelligent analytics for modern businesses
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Turn complex data into

          <span className="mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            confident decisions
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          Upload, clean, explore and visualize your business data through one
          powerful analytics workspace built for clarity, intelligence and
          speed.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/login"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 shadow-[0_15px_50px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Start analyzing

            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="#features"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/10"
          >
            Explore the platform
          </a>
        </div>

        {/* Feature cards */}
        <div
          id="features"
          className="mt-24 grid w-full max-w-5xl gap-4 text-left md:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.055]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:border-violet-400/25 group-hover:bg-violet-500/10">
                <Icon className="h-5 w-5 text-violet-300" />
              </div>

              <h2 className="text-lg font-semibold">
                {title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default LandingPage;