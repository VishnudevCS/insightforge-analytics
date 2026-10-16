import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Database,
  LineChart,
  Sparkles,
} from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const TITLE = "INSIGHTFORGE";

const loadingStages = [
  {
    icon: Database,
    label: "Connecting data engines",
    start: 4.8,
  },
  {
    icon: BarChart3,
    label: "Preparing analytics workspace",
    start: 7.2,
  },
  {
    icon: Activity,
    label: "Activating intelligence layer",
    start: 9.6,
  },
  {
    icon: Sparkles,
    label: "Experience ready",
    start: 12,
  },
];

function SplashScreen({ onComplete }: SplashScreenProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 31) % 100}%`,
        top: `${(index * 47) % 100}%`,
        size: 2 + (index % 4),
        delay: (index % 10) * 0.18,
        duration: 3.8 + (index % 6) * 0.55,
      })),
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete();
    }, 15_000);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.main
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#03050b] text-white"
    >
      {/* Background gradient atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.55, 0.32],
            scale: [0.6, 1.2, 1],
          }}
          transition={{
            duration: 5,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/30 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [-80, 100, -80],
            y: [30, -100, 30],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [80, -100, 80],
            y: [-30, 90, -30],
            opacity: [0.08, 0.24, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[3%] right-[3%] h-[460px] w-[460px] rounded-full bg-fuchsia-600/20 blur-[150px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.2] }}
          transition={{ duration: 4 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#03050b_75%)]"
        />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.9, 0.2, 0],
              scale: [0, 1.4, 0.8, 0],
              y: [20, -35, -70],
            }}
            transition={{
              delay: particle.delay,
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.85)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* Decorative data lines */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: [0, 0.45, 0.15],
          scaleX: 1,
        }}
        transition={{
          duration: 2.5,
          delay: 0.8,
        }}
        className="absolute left-0 top-[22%] h-px w-full origin-center bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: [0, 0.35, 0.12],
          scaleX: 1,
        }}
        transition={{
          duration: 2.5,
          delay: 1.2,
        }}
        className="absolute bottom-[22%] left-0 h-px w-full origin-center bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
      />

      <section className="relative z-20 flex w-full max-w-6xl flex-col items-center px-6 text-center">
        {/* Orbit logo system */}
        <div className="relative mb-10 flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 270,
            }}
            transition={{
              opacity: { duration: 1.4 },
              scale: {
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              },
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute inset-0 rounded-full border border-dashed border-violet-300/30"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.55, rotate: 90 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -270,
            }}
            transition={{
              opacity: {
                duration: 1.5,
                delay: 0.25,
              },
              scale: {
                duration: 1.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              },
              rotate: {
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute inset-5 rounded-full border border-cyan-300/25"
          >
            <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,1)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 1.12, 1],
            }}
            transition={{
              duration: 1.6,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute flex h-24 w-24 items-center justify-center rounded-[30px] border border-white/20 bg-white/[0.07] shadow-[0_0_70px_rgba(139,92,246,0.45)] backdrop-blur-2xl sm:h-28 sm:w-28"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  "drop-shadow(0 0 6px rgba(196,181,253,0.5))",
                  "drop-shadow(0 0 22px rgba(103,232,249,0.9))",
                  "drop-shadow(0 0 6px rgba(196,181,253,0.5))",
                ],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LineChart className="h-11 w-11 text-violet-200 sm:h-13 sm:w-13" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.35, 1] }}
            transition={{
              duration: 3,
              delay: 1.4,
            }}
            className="absolute h-36 w-36 rounded-full bg-violet-500/15 blur-2xl"
          />
        </div>

        {/* Small introduction */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="mb-4 flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.35em] text-violet-200/80 backdrop-blur-xl"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Analytics intelligence platform
        </motion.div>

        {/* Animated premium title */}
        <div className="relative overflow-hidden px-3 py-2">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 2.25,
              times: [0, 0.35, 0.78, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0 z-20 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"
          />

          <h1
            aria-label={TITLE}
            className="relative flex justify-center text-4xl font-black tracking-[0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {TITLE.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{
                  opacity: 0,
                  y: 70,
                  rotateX: -90,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.75,
                  delay: 3.1 + index * 0.075,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gradient-to-b from-white via-violet-100 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(167,139,250,0.25)]"
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{
              opacity: 0,
              x: "-120%",
            }}
            animate={{
              opacity: [0, 1, 0],
              x: "160%",
            }}
            transition={{
              duration: 2,
              delay: 4.2,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 z-10 w-24 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md"
          />
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 4.7,
          }}
          className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
        >
          Transforming complex business data into clear, intelligent and
          actionable decisions.
        </motion.p>

        {/* Loading stages */}
        <div className="mt-10 grid min-h-10 place-items-center">
          {loadingStages.map(({ icon: Icon, label, start }, index) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                y: 10,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [10, 0, 0, -10],
                filter: [
                  "blur(6px)",
                  "blur(0px)",
                  "blur(0px)",
                  "blur(6px)",
                ],
              }}
              transition={{
                duration: index === loadingStages.length - 1 ? 2.5 : 2.4,
                delay: start,
                times: [0, 0.18, 0.78, 1],
              }}
              className="col-start-1 row-start-1 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-400 sm:text-sm"
            >
              <Icon className="h-4 w-4 text-cyan-300" />
              {label}
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
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
            duration: 0.8,
            delay: 4.5,
          }}
          className="mt-8 w-full max-w-md"
        >
          <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-600">
            <span>Initializing experience</span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 5,
              }}
            >
              Secure analytics environment
            </motion.span>
          </div>

          <div className="relative h-1 overflow-hidden rounded-full bg-white/[0.07]">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 10,
                delay: 4.5,
                ease: "linear",
              }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.65)]"
            />

            <motion.div
              animate={{
                x: ["-100%", "500%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
            />
          </div>
        </motion.div>

        <motion.button
          type="button"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 5.2,
            duration: 0.8,
          }}
          onClick={onComplete}
          className="mt-7 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500 transition hover:border-violet-300/30 hover:bg-white/[0.07] hover:text-white"
        >
          Skip introduction
        </motion.button>
      </section>

      {/* Bottom signature */}
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 5.5,
          duration: 1,
        }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-slate-700 sm:text-[10px]"
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-700" />
        Designed for intelligent decisions
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-slate-700" />
      </motion.div>
    </motion.main>
  );
}

export default SplashScreen;