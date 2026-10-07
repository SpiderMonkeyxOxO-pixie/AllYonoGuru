import ComingSoonCard from "./ComingSoonCard";
import type { AppEntry } from "@/app/lib/types";

interface LaunchCountdownSectionProps {
  apps: AppEntry[];
}

/**
 * Pre-launch countdown band, placed directly under the hero so a scheduled
 * launch is the first thing a visitor sees. Renders nothing when no app is
 * marked comingSoon, so it disappears on its own once the entry is flipped.
 */
export default function LaunchCountdownSection({ apps }: LaunchCountdownSectionProps) {
  const upcoming = apps.filter((a) => a.comingSoon && a.releaseDate);
  if (upcoming.length === 0) return null;

  return (
    <section
      aria-labelledby="launch-countdown-heading"
      className="section-pad"
      style={{ background: "#020817", paddingBottom: 0 }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "11px", fontWeight: "700", color: "#f59e0b",
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px",
          }}
        >
          Launching Soon
        </p>
        <h2
          id="launch-countdown-heading"
          className="text-headline"
          style={{ color: "#f1f5f9", marginBottom: "8px" }}
        >
          Upcoming Yono Network Launches
        </h2>
        <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "520px", margin: "0 0 28px" }}>
          Announced apps that are not available yet. Details are added only after launch.
        </p>
        <div className="game-grid">
          {upcoming.map((app) => (
            <ComingSoonCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
