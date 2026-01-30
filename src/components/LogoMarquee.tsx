// Shared animated logo marquee component
// Used for "Trusted by" sections with infinite scrolling logos

import { Component } from "../lib/component";

export type Logo = {
  src: string;
  alt: string;
  href?: string;
  width?: number;
};

export type LogoMarqueeConfig = {
  // Component identification
  componentName?: string;

  // Logos to display (will be duplicated for seamless loop)
  logos: Logo[];

  // Animation settings
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;

  // Styling
  className?: string;
  logoClassName?: string;
  gap?: number;
};

const speedMap = {
  slow: "40s",
  normal: "25s",
  fast: "15s",
};

function LogoItem({ logo, className }: { logo: Logo; className?: string }): string {
  const img = (
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      class={`h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 ${className || ""}`}
      style={logo.width ? `max-width: ${logo.width}px` : ""}
    />
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="nofollow noopener"
        class="flex-shrink-0"
      >
        {img}
      </a>
    );
  }

  return <div class="flex-shrink-0">{img}</div>;
}

export function LogoMarquee(config: LogoMarqueeConfig): string {
  const {
    componentName = "components/LogoMarquee",
    logos,
    speed = "normal",
    direction = "left",
    pauseOnHover = true,
    className = "",
    logoClassName = "",
    gap = 64,
  } = config;

  const duration = speedMap[speed];
  const animationDirection = direction === "right" ? "reverse" : "normal";
  const hoverPause = pauseOnHover ? "hover:[animation-play-state:paused]" : "";

  // Render logos twice for seamless infinite loop
  const logoElements = logos.map((logo) => LogoItem({ logo, className: logoClassName })).join("");

  return (
    <Component name={componentName} className={`overflow-hidden ${className}`}>
      <div
        class={`flex items-center ${hoverPause}`}
        style={`
          animation: marquee ${duration} linear infinite;
          animation-direction: ${animationDirection};
          gap: ${gap}px;
          width: max-content;
        `}
      >
        {/* First set of logos */}
        {logoElements}
        {/* Duplicate for seamless loop */}
        {logoElements}
      </div>
    </Component>
  );
}

export type TrustedBySectionConfig = LogoMarqueeConfig & {
  // Section header
  title?: string;
  subtitle?: string;

  // Section styling
  sectionClassName?: string;
  showTitle?: boolean;
};

/**
 * Complete "Trusted By" section with optional title and logo marquee
 */
export function TrustedBySection(config: TrustedBySectionConfig): string {
  const {
    title = "Trusted by innovative healthcare companies",
    subtitle,
    sectionClassName = "",
    showTitle = true,
    componentName = "components/TrustedBySection",
    ...marqueeConfig
  } = config;

  return (
    <Component name={componentName} className={`py-12 md:py-16 ${sectionClassName}`}>
      {showTitle && (
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-lg md:text-xl font-medium text-gray-500 uppercase tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p class="mt-2 text-sm text-gray-400">{subtitle}</p>
          )}
        </div>
      )}
      <LogoMarquee {...marqueeConfig} componentName={`${componentName}/Marquee`} />
    </Component>
  );
}

// Pre-configured client logos for Health Samurai
export const healthSamuraiClients: Logo[] = [
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/64ba99d2e3fe0c7e42265e5d_innovaccer-logo-black.svg",
    alt: "Innovaccer",
    href: "https://innovaccer.com/",
    width: 120,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6602b888409299ed4eef694b_Frame%20427319224%20(1).webp",
    alt: "Solutio",
    href: "https://www.solutio.de/",
    width: 100,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811f756ed6ce3acce94256a_Duodecim_idFuVC2K5H_1.png",
    alt: "Duodecim",
    href: "https://www.duodecim.fi/english/",
    width: 140,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4a2c54d0ea864cb16_Logo_PatientsCo%20HiRes%20(1)%202.webp",
    alt: "Patients Know Best",
    href: "https://patientsknowbest.com/",
    width: 180,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811ffa3bd8873ca1d79e495_firenote-logo-reverse%202.png",
    alt: "Firenote",
    href: "https://firenote.health/",
    width: 120,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4d9547ec7a6917d3c_Healthie-logo%201.webp",
    alt: "Healthie",
    href: "https://www.gethealthie.com/",
    width: 120,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb49aaba578b2bb7cf9_naruslucent-removebg-preview%201.webp",
    alt: "Lucent Health",
    href: "https://lucenthealth.com/",
    width: 150,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65426115ed1b936bef809059_prenosis-logo-color%202.webp",
    alt: "Prenosis",
    href: "https://prenosis.com/",
    width: 140,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb477c566d9cea62f52_BestNotes_Logo-to-use_1-768x168%201.webp",
    alt: "BestNotes",
    href: "https://www.bestnotes.com/",
    width: 130,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6542824da3496e9497e73349_Frame%20427319190(2).webp",
    alt: "Lucet",
    href: "https://lucethealth.com/",
    width: 100,
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68e3da6d6bb804a0e39fba1d_novellia.png",
    alt: "Novellia",
    href: "https://novellia.com/",
    width: 120,
  },
];
