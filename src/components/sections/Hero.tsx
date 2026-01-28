import { Button } from "../ui/Button";

type HeroProps = {
  tag?: string;
  title: string;
  typedText?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  video?: string;
  variant?: "default" | "product";
};

export function Hero({
  tag,
  title,
  typedText,
  description,
  primaryCta,
  secondaryCta,
  image,
  video,
  variant = "default",
}: HeroProps): string {
  const heroClass = variant === "product" ? "hero hero-product" : "hero";

  return (
    <section className={heroClass}>
      <div className="hero-inner">
        <div className="hero-content">
          {tag && (
            <div className="hero-tag">
              <strong>&gt;_</strong> {tag}
            </div>
          )}
          {typedText ? (
            <h1 className="hero-title">
              {title} <span className="hero-title-typed typewriter">{typedText}</span>
            </h1>
          ) : (
            <h1 className="hero-title">{title}</h1>
          )}
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <Button href={primaryCta.href} variant="primary" size="lg">{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant={variant === "product" ? "outline" : "link"}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
        {video && (
          <div className="hero-video">
            <video playsinline loop autoplay muted aria-label="FHIR Server UI demonstration video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}
        {!video && image && (
          <div className="hero-image">
            <img src={image} alt="Aidbox FHIR Server" />
          </div>
        )}
      </div>
    </section>
  );
}
