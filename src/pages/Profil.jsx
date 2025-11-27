import { motion } from "motion/react";

export default function Profil() {
  return (
    <main className="Profil">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold mb-8">
        Profil
      </motion.h2>

      <div className="max-w-xl mx-auto flex flex-col gap-8 p-6 bg-base-100 rounded-2xl shadow-xl border border-base-200">
        <div className="flex items-center gap-6">
          <div className="avatar">
            <div className="w-24 rounded-full shadow">
              <img src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Nom d'utilisateur</h3>
            <p className="opacity-70 text-sm">Développeur - Membre CRAFTERS</p>
          </div>
        </div>

        <div className="grid gap-4">
          <ProfileField label="Email" value="email@example.com" />
          <ProfileField label="Rôle" value="Full Stack Dev" />
          <ProfileField label="Github" value="https://github.com/username" />
        </div>
      </div>
    </main>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className="font-semibold text-sm opacity-80">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}