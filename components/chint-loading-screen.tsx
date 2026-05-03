"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function ChintLoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 3600)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
          role="status"
          aria-label="Loading CHINT Uganda"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,102,179,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f5fbff_100%)]" />
          <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 text-center">
            <div className="relative w-full max-w-[700px] aspect-[700/480]">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.28, 1],
                  opacity: [0, 1, 1, 0],
                  boxShadow: [
                    "0 0 0 rgba(236,28,36,0)",
                    "0 0 48px rgba(236,28,36,0.55)",
                    "0 0 28px rgba(236,28,36,0.35)",
                    "0 0 0 rgba(236,28,36,0)",
                  ],
                }}
                transition={{ duration: 1.55, times: [0, 0.45, 0.78, 1], ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-[43.14%] top-[15.8%] z-20 h-[8.2%] w-[6%] rounded-md bg-[#EC1C24]"
              />

              <motion.img
                src="/chint-uganda-logo.png"
                alt="CHINT Uganda - Switch to the best"
                initial={{ opacity: 0, scale: 0.94, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.88, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-contain drop-shadow-[0_24px_55px_rgba(0,102,179,0.16)]"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.22, 0] }}
                transition={{ delay: 1.05, duration: 1.3, ease: "easeInOut" }}
                className="absolute inset-x-[8%] top-[28%] h-16 rounded-full bg-[#29AEE4] blur-3xl"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="sr-only"
            >
              CHINT UGANDA Switch to the best
            </motion.div>

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.05, ease: "easeInOut" }}
              className="h-1 w-full max-w-md rounded-full bg-gradient-to-r from-[#0066B3] via-[#29AEE4] to-[#EC1C24]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
