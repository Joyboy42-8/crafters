import { motion } from "motion/react"

export default function Brand() {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="Brand"
    >
      CRAFTERS
    </motion.h1>
  )
}