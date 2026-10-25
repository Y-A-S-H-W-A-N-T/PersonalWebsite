"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { SocialIcon } from "@/lib/icons";
import type { Profile } from "@/types";

export default function ProfileHero({ profile }: { profile: Profile }) {
  const role = useTypewriter(profile.roles);

  const chips = [
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phone
      ? [{ icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }]
      : []),
    { icon: MapPin, text: profile.location, href: undefined },
  ];

  return (
    <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
      {/* Photo with gradient ring and glow */}
      <div className="relative mx-auto md:mx-0">
        <div
          aria-hidden
          className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-primary via-primary-2 to-secondary opacity-40 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-[2rem] bg-linear-to-br from-primary via-primary-2 to-secondary p-1"
        >
          <div className="relative size-44 overflow-hidden rounded-[1.8rem] bg-background sm:size-52 md:size-64 lg:size-72">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 208px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className="text-center md:text-left">
        <p className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">
          <span className="text-muted">I&apos;m a </span>
          <span className="text-gradient">{role}</span>
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-1 animate-pulse bg-primary"
          />
        </p>

        <p className="mt-4 text-lg font-medium text-foreground/90">{profile.tagline}</p>
        <p className="mt-3 max-w-2xl text-muted">{profile.description}</p>

        {/* Contact chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
          {chips.map(({ icon: Icon, text, href }) => {
            const inner = (
              <>
                <Icon className="size-4 text-primary" />
                <span>{text}</span>
              </>
            );
            const cls =
              "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition";
            return href ? (
              <a key={text} href={href} className={`${cls} hover:border-primary/60`}>
                {inner}
              </a>
            ) : (
              <span key={text} className={cls}>
                {inner}
              </span>
            );
          })}
        </div>

        {/* Social buttons */}
        <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-primary-2 px-6 py-3 font-medium text-white shadow-[0_8px_30px_-8px_var(--primary)] transition hover:scale-105 active:scale-95"
          >
            <Mail className="size-5" />
            Get in touch
          </a>

          {profile.socials
            .filter((s) => s.platform !== "email")
            .map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="glass flex size-12 items-center justify-center rounded-full transition hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
              >
                <SocialIcon platform={s.platform} className="size-5" />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}