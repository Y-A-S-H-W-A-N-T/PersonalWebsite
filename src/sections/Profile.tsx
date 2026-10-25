import { Globe2, Building2, GraduationCap, Languages, Heart, User } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import ProfileHero from "@/sections/ProfileHero";
import { profile } from "@/data/profile";
import { formatRange } from "@/lib/date";
import { getHobbyIcon } from "@/lib/icons";

const LEVELS = { Native: 4, Fluent: 3, Intermediate: 2, Basic: 1 } as const;

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-card-border bg-background/40 px-3 py-1 text-sm">
      {children}
    </span>
  );
}

export default function Profile() {
  return (
    <div className="space-y-10">
      <ProfileHero profile={profile} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <BentoCard title="About me" icon={User} className="lg:col-span-2">
          <p className="leading-relaxed text-muted">{profile.about}</p>
        </BentoCard>

        {/* Domains */}
        <BentoCard title="Domains" icon={Globe2}>
          <div className="flex flex-wrap gap-2">
            {profile.domains.map((d) => (
              <Tag key={d}>{d}</Tag>
            ))}
          </div>
        </BentoCard>

        {/* Industries */}
        <BentoCard title="Industries" icon={Building2}>
          <div className="flex flex-wrap gap-2">
            {profile.industries.map((d) => (
              <Tag key={d}>{d}</Tag>
            ))}
          </div>
        </BentoCard>

        {/* Education */}
        <BentoCard title="Education" icon={GraduationCap} className="lg:col-span-2">
          <ol className="relative space-y-5 border-l border-card-border pl-5">
            {profile.education.map((e) => (
              <li key={`${e.institution}-${e.degree}`} className="relative">
                <span className="absolute top-1.5 -left-[26px] size-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">{e.institution}</p>
                <p className="mt-1 text-xs text-muted">
                  {formatRange(e.startDate, e.endDate)}
                  {e.grade ? ` · ${e.grade}` : ""}
                </p>
              </li>
            ))}
          </ol>
        </BentoCard>

        {/* Languages */}
        <BentoCard title="Languages" icon={Languages}>
          <ul className="space-y-3">
            {profile.languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium">{l.name}</p>
                  <p className="text-xs text-muted">{l.proficiency}</p>
                </div>
                <div className="flex gap-1" aria-label={`${l.proficiency} proficiency`}>
                  {[1, 2, 3, 4].map((n) => (
                    <span
                      key={n}
                      className={`h-2 w-4 rounded-full ${
                        n <= LEVELS[l.proficiency] ? "bg-primary" : "bg-card-border"
                      }`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* Hobbies */}
        <BentoCard title="Hobbies" icon={Heart}>
          <div className="flex flex-wrap gap-2">
            {profile.hobbies.map((h) => {
              const Icon = getHobbyIcon(h.icon);
              return (
                <span
                  key={h.name}
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-background/40 px-3 py-1.5 text-sm"
                >
                  <Icon className="size-4 text-primary" />
                  {h.name}
                </span>
              );
            })}
          </div>
        </BentoCard>
      </div>
    </div>
  );
}