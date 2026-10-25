import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  title: string;
  icon: LucideIcon;
  className?: string;
  children: ReactNode;
}

export default function BentoCard({ title, icon: Icon, className = "", children }: Props) {
  return (
    <div
      className={`glass group rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_-12px_var(--primary)] md:p-6 ${className}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary-2 text-white shadow-lg">
          <Icon className="size-5" />
        </span>
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}