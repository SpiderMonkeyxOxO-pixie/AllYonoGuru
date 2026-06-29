import { APPS_STATIC } from "../../lib/static-data";

export default function RunningBanner() {
  const names = APPS_STATIC
    .filter((a) => a.publishedAt !== null)
    .map((a) => a.name);

  const items = names.length > 0 ? names : ["Rummy Guru", "Teen Patti Guru"];

  return (
    <div className="running-banner" role="marquee" aria-label="Listed apps ticker">
      <div className="running-banner-track">
        <div className="running-banner-group">
          {items.map((name, i) => (
            <span className="running-banner-tag" key={`a-${i}`}>{name}</span>
          ))}
        </div>
        {/* Duplicate set purely for the seamless scroll loop — hidden from assistive tech */}
        <div className="running-banner-group" aria-hidden="true">
          {items.map((name, i) => (
            <span className="running-banner-tag" key={`b-${i}`}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
