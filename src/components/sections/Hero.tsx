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
  const isProduct = variant === "product";

  // Section classes
  const sectionClasses = isProduct
    ? "py-16 pb-[108px] bg-transparent overflow-hidden"
    : "py-20 bg-white overflow-hidden";

  // Inner container classes
  const innerClasses = isProduct
    ? "max-w-[1200px] mx-auto px-8 grid grid-cols-1 gap-8 text-center"
    : "max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center";

  // Content wrapper classes
  const contentClasses = isProduct
    ? "max-w-[800px] mx-auto"
    : "max-w-[560px] lg:text-left text-center";

  // Tag classes
  const tagClasses = isProduct
    ? "inline-flex items-center gap-2 font-mono text-[17px] leading-[23.8px] text-[rgb(53,59,80)] mb-6"
    : "inline-flex items-center gap-2 px-4 py-2 bg-[#fef2f0] rounded-[20px] font-mono text-sm text-primary mb-6";

  // Title classes
  const titleClasses = isProduct
    ? "text-[56px] font-bold leading-[64px] tracking-[-1.12px] text-[rgb(53,59,80)] mb-6"
    : "text-5xl font-black leading-[80px] mb-6";

  // Description classes
  const descriptionClasses = isProduct
    ? "font-sans text-lg leading-7 text-[rgb(53,59,80)] max-w-[610px] mx-auto mb-8"
    : "text-lg text-text-light mb-8 leading-[1.7]";

  // Actions classes
  const actionsClasses = isProduct
    ? "flex gap-4 flex-wrap justify-center"
    : "flex gap-4 flex-wrap lg:justify-start justify-center";

  // Media (image/video) wrapper classes
  const mediaClasses = isProduct
    ? "relative max-w-[900px] mx-auto mt-8"
    : "relative lg:order-none -order-1 max-w-[600px] lg:max-w-none mx-auto lg:mx-0";

  // Media element classes
  const mediaElementClasses = isProduct
    ? "w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
    : "w-full rounded-xl shadow-lg";

  return (
    <section className={sectionClasses}>
      <div className={innerClasses}>
        <div className={contentClasses}>
          {tag && (
            <div className={tagClasses}>
              <strong className="text-primary mr-2">&gt;_</strong> {tag}
            </div>
          )}
          {typedText ? (
            <h1 className={titleClasses}>
              {title} <span className="text-primary">{typedText}</span>
            </h1>
          ) : (
            <h1 className={titleClasses}>{title}</h1>
          )}
          <p className={descriptionClasses}>{description}</p>
          <div className={actionsClasses}>
            <Button href={primaryCta.href} variant="primary" size="lg">{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant={isProduct ? "outline" : "link"}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
        {video && (
          <div className={mediaClasses}>
            <video className={mediaElementClasses} playsinline loop autoplay muted aria-label="FHIR Server UI demonstration video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}
        {!video && image && (
          <div className={mediaClasses}>
            <img className={mediaElementClasses} src={image} alt="Aidbox FHIR Server" />
          </div>
        )}
      </div>
    </section>
  );
}
