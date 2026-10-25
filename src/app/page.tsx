import PortfolioShell from "@/components/PortfolioShell";
import Profile from "@/sections/Profile";
import { SECTIONS } from "@/lib/sections";

function Placeholder({ name }: { name: string }) {
  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <p className="font-display text-xl font-semibold">{name} content goes here</p>
      <p className="mt-2 text-muted">This is a placeholder. We replace it in the next steps.</p>
    </div>
  );
}

export default function Home() {
  const content = Object.fromEntries(
    SECTIONS.map((s) => [
      s.id,
      s.id === "profile" ? <Profile key={s.id} /> : <Placeholder key={s.id} name={s.label} />,
    ])
  );

  return <PortfolioShell content={content} />;
}