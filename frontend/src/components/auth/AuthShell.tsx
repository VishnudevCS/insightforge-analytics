import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";

interface AuthShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

const metrics = [
  {
    label: "Revenue growth",
    value: "+24.8%",
  },
  {
    label: "Active datasets",
    value: "128",
  },
  {
    label: "Insight accuracy",
    value: "96.4%",
  },
];

const chartData = [
  { month: "Jan", value: 38 },
  { month: "Feb", value: 56 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 76 },
  { month: "May", value: 64 },
  { month: "Jun", value: 91 },
  { month: "Jul", value: 72 },
  { month: "Aug", value: 100 },
];

function AuthShell({
  eyebrow,
  title,
  description,
  children,
}: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050812] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-20, 40, -20],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-200px] top-[-200px] h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [40, -50, 40],
            y: [30, -35, 30],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-240px] right-[-160px] h-[540px] w-[540px] rounded-full bg-cyan-500/15 blur-[160px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(5,8,18,0.72)_78%)]" />
      </div>

      <div className="relative z-10 grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
        {/* Analytics presentation side */}
        <section className="relative hidden overflow-hidden border-r border-white/10 p-12 lg:flex lg:flex-col lg:justify-between xl:p-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link to="/" className="flex w-fit items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/15 shadow-[0_0_32px_rgba(139,92,246,0.22)]">
                <LineChart className="h-6 w-6 text-violet-200" />
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
          </motion.div>

          <div className="mx-auto w-full max-w-xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-4 py-2 text-xs uppercase tracking-[0.25em] text-violet-200"
            >
              <Sparkles className="h-4 w-4" />
              Intelligent workspace
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.85,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-lg text-5xl font-semibold leading-[1.07] tracking-[-0.045em]"
            >
              Your data deserves more than
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                ordinary dashboards.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 max-w-lg text-base leading-7 text-slate-400"
            >
              Build interactive reports, discover business trends and transform
              complex datasets into decisions through one secure analytics
              platform.
            </motion.p>

            {/* Business intelligence card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Performance overview
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    Business intelligence
                  </p>
                </div>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(34,211,238,0)",
                      "0 0 30px rgba(34,211,238,0.2)",
                      "0 0 0 rgba(34,211,238,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/10"
                >
                  <BarChart3 className="h-5 w-5 text-cyan-300" />
                </motion.div>
              </div>

              <div className="relative mt-7 h-44 overflow-hidden rounded-2xl border border-white/[0.04] bg-black/10 px-3 pb-7 pt-4">
                {/* Chart grid */}
                <div className="pointer-events-none absolute inset-x-3 bottom-7 top-4 flex flex-col justify-between">
                  {[0, 1, 2, 3].map((line) => (
                    <div
                      key={line}
                      className="w-full border-t border-dashed border-white/[0.06]"
                    />
                  ))}
                </div>

                {/* Bars */}
                <div className="absolute inset-x-3 bottom-7 top-4 flex items-end gap-3">
                  {chartData.map((item, index) => (
                    <div
                      key={item.month}
                      className="relative flex h-full flex-1 items-end"
                    >
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: `${item.value}%`,
                          opacity: 0.72 + index * 0.03,
                        }}
                        transition={{
                          duration: 1.15,
                          delay: 0.9 + index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{
                          scaleX: 1.08,
                          filter:
                            "drop-shadow(0 0 12px rgba(103,232,249,0.5))",
                        }}
                        className="relative w-full origin-bottom overflow-hidden rounded-t-lg bg-gradient-to-t from-violet-600 via-fuchsia-500 to-cyan-300"
                      >
                        <motion.div
                          animate={{
                            y: ["120%", "-120%"],
                          }}
                          transition={{
                            duration: 2.4,
                            delay: index * 0.12,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm"
                        />
                      </motion.div>

                      <motion.span
                        initial={{
                          opacity: 0,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 1.55 + index * 0.07,
                        }}
                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-slate-600"
                      >
                        {item.month}
                      </motion.span>
                    </div>
                  ))}
                </div>

                {/* Trend line */}
                <svg
                  viewBox="0 0 500 130"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-x-3 bottom-7 top-4 h-[calc(100%-44px)] w-[calc(100%-24px)] overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="trend-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#e879f9" />
                      <stop offset="100%" stopColor="#67e8f9" />
                    </linearGradient>

                    <filter id="trend-glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <motion.path
                    d="M 20 98 C 70 88, 92 78, 128 82 S 190 54, 225 63 S 286 35, 330 45 S 395 23, 480 14"
                    fill="none"
                    stroke="url(#trend-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#trend-glow)"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.8,
                      delay: 1.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />

                  <motion.circle
                    cx="480"
                    cy="14"
                    r="5"
                    fill="#67e8f9"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 3.1,
                      type: "spring",
                      stiffness: 220,
                    }}
                    style={{
                      filter: "drop-shadow(0 0 8px #67e8f9)",
                    }}
                  />
                </svg>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 2.5,
                    duration: 0.5,
                  }}
                  className="absolute right-4 top-3 flex items-center gap-1 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300"
                >
                  <TrendingUp className="h-3 w-3" />
                  18.6%
                </motion.div>
              </div>

              {/* Metric cards */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 2 + index * 0.14,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -4,
                      borderColor: "rgba(167,139,250,0.3)",
                      backgroundColor: "rgba(255,255,255,0.045)",
                    }}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-xs text-slate-500">
                      {metric.label}
                    </p>

                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 2.3 + index * 0.14,
                      }}
                      className="mt-2 font-semibold text-slate-100"
                    >
                      {metric.value}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.7,
            }}
            className="flex items-center gap-3 text-xs text-slate-600"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Secure authentication and protected analytics
          </motion.div>
        </section>

        {/* Authentication form side */}
        <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-14">
          <motion.div
            initial={{
              opacity: 0,
              x: 28,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full max-w-md"
          >
            <Link to="/" className="mb-12 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/15">
                <LineChart className="h-5 w-5 text-violet-200" />
              </div>

              <p className="font-semibold">InsightForge</p>
            </Link>

            <div className="mb-9">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
                {eyebrow}
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
                {title}
              </h1>

              <p className="mt-4 leading-7 text-slate-400">
                {description}
              </p>
            </div>

            {children}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default AuthShell;