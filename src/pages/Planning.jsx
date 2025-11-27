import { motion } from "motion/react";

export default function PlanningPage() {
  return (
    <main className="Planning">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold mb-6">
        Planning — Google Agenda
      </motion.h2>

      <div className="rounded-xl overflow-hidden shadow-2xl border border-base-200">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID"
          className="w-full h-[80vh]"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </main>
  );
}