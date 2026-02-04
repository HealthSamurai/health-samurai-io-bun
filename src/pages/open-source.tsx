import { Fragment } from "../lib/jsx-runtime";
import { Bento } from "../components/Bento";
import type { BentoItem } from "../components/Bento";

export const metadata = {
  title: "Open Source",
  description: "Health Samurai open source products and projects.",
};

const openSourceItems: BentoItem[] = [
  {
    title: "Open Source Project",
    subtitle: "Open Source",
    description: "Short description of the open source project and its purpose.",
    href: "#",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"/></svg>`,
  },
  {
    title: "Open Source Project",
    subtitle: "Open Source",
    description: "Short description of the open source project and its purpose.",
    href: "#",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" d="M5 7.5h14v9H5z"/></svg>`,
  },
  {
    title: "Open Source Project",
    subtitle: "Open Source",
    description: "Short description of the open source project and its purpose.",
    href: "#",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z"/></svg>`,
  },
  {
    title: "Open Source Project",
    subtitle: "Open Source",
    description: "Short description of the open source project and its purpose.",
    href: "#",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5 19.5 19.5H4.5L12 4.5Z"/></svg>`,
  },
  {
    title: "Open Source Project",
    subtitle: "Open Source",
    description: "Short description of the open source project and its purpose.",
    href: "#",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h12v12H6z"/></svg>`,
  },
  {
    title: "Open Source Project",
    subtitle: "Open Source",
    description: "Short description of the open source project and its purpose.",
    href: "#",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8m-4-4v8"/></svg>`,
  },
];

export default function OpenSourcePage(): string {
  return (
    <Fragment>
      <Bento
        tagline="Open Source"
        title="Our open source products"
        items={openSourceItems}
      />
    </Fragment>
  );
}
