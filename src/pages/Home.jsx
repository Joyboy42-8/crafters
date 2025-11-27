import { motion } from "motion/react";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <main className="Home">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold mb-6">
        Forum
      </motion.h2>
      <Chat />
    </main>
  );
}
