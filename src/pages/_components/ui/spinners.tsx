/**
 * Spinner/Loading Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Spinner, DotsLoader, PulseLoader, Skeleton, CardSkeleton, TextSkeleton, LoadingOverlay } from "../../../components/ui/Spinner";
import { Button } from "../../../components/ui/Button";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Spinners",
  description: "Loading indicator component examples",
  fullPage: true,
};

function Section({ title, description, children }: { title: string; description?: string; children: string }): string {
  return `
    <div class="mb-12">
      <h2 class="text-lg font-semibold text-gray-900 mb-2">${title}</h2>
      ${description ? `<p class="text-sm text-gray-600 mb-4">${description}</p>` : ""}
      <div class="space-y-4">
        ${children}
      </div>
    </div>
  `;
}

function CodeBlock({ code }: { code: string }): string {
  return `<div class="mt-4 rounded-lg overflow-hidden">${highlightCode(code, "tsx")}</div>`;
}

function Example({ label, children, code }: { label: string; children: string; code: string }): string {
  return `
    <div class="mb-8 last:mb-0">
      <h3 class="text-sm font-medium text-gray-700 mb-3">${label}</h3>
      <div class="bg-white p-6 rounded-lg border border-gray-200">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function SpinnersDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Spinner & Loading Components</h1>
        <p class="mt-2 text-gray-600">
          Various loading indicators including spinners, skeleton loaders, and overlays.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Spinner, DotsLoader, PulseLoader, Skeleton, CardSkeleton, TextSkeleton } from "../components/ui/Spinner";
        </code>
      </div>

      ${Section({
        title: "Basic Spinner",
        description: "Animated spinning indicator.",
        children: Example({
          label: "Default spinner",
          children: `
            <div class="flex items-center gap-8">
              ${Spinner({ size: "sm" })}
              ${Spinner({ size: "md" })}
              ${Spinner({ size: "lg" })}
              ${Spinner({ size: "xl" })}
            </div>
          `,
          code: `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`,
        }),
      })}

      ${Section({
        title: "Colors",
        description: "Different spinner colors for various backgrounds.",
        children: Example({
          label: "Color variants",
          children: `
            <div class="flex items-center gap-8">
              ${Spinner({ color: "primary" })}
              ${Spinner({ color: "gray" })}
              <div class="bg-gray-900 p-4 rounded-lg">${Spinner({ color: "white" })}</div>
              <div class="text-blue-500">${Spinner({ color: "current" })}</div>
            </div>
          `,
          code: `<Spinner color="primary" />
<Spinner color="gray" />
<Spinner color="white" />  // For dark backgrounds
<Spinner color="current" />  // Inherits text color`,
        }),
      })}

      ${Section({
        title: "With Label",
        description: "Spinner with loading text.",
        children: Example({
          label: "Labeled spinners",
          children: `
            <div class="flex items-center gap-8">
              ${Spinner({ label: "Loading..." })}
              ${Spinner({ label: "Processing", labelPosition: "bottom", size: "lg" })}
            </div>
          `,
          code: `<Spinner label="Loading..." />
<Spinner label="Processing" labelPosition="bottom" size="lg" />`,
        }),
      })}

      ${Section({
        title: "Alternative Loaders",
        description: "Different loading animation styles.",
        children: `
          ${Example({
            label: "Dots loader",
            children: `
              <div class="flex items-center gap-8">
                ${DotsLoader({ size: "sm" })}
                ${DotsLoader({ size: "md" })}
                ${DotsLoader({ size: "lg", color: "primary" })}
              </div>
            `,
            code: `<DotsLoader size="sm" />
<DotsLoader size="md" />
<DotsLoader size="lg" color="primary" />`,
          })}
          ${Example({
            label: "Pulse loader",
            children: `
              <div class="flex items-center gap-8">
                ${PulseLoader({ size: "sm" })}
                ${PulseLoader({ size: "md" })}
                ${PulseLoader({ size: "lg", color: "primary" })}
              </div>
            `,
            code: `<PulseLoader size="sm" />
<PulseLoader size="md" />
<PulseLoader size="lg" color="primary" />`,
          })}
        `,
      })}

      ${Section({
        title: "Button Loading States",
        description: "Spinners inside buttons.",
        children: Example({
          label: "Loading buttons",
          children: `
            <div class="flex items-center gap-4">
              ${Button({ loading: true, children: "Saving..." })}
              ${Button({ variant: "secondary", loading: true, children: "Loading" })}
              ${Button({ variant: "soft", loading: true, children: "Processing" })}
            </div>
          `,
          code: `<Button loading>Saving...</Button>
<Button variant="secondary" loading>Loading</Button>`,
        }),
      })}

      ${Section({
        title: "Skeleton Loaders",
        description: "Placeholder content while loading.",
        children: `
          ${Example({
            label: "Basic skeleton",
            children: `
              <div class="space-y-2">
                ${Skeleton({ width: "full" })}
                ${Skeleton({ width: "3/4" })}
                ${Skeleton({ width: "1/2" })}
              </div>
            `,
            code: `<Skeleton width="full" />
<Skeleton width="3/4" />
<Skeleton width="1/2" />`,
          })}
          ${Example({
            label: "Different heights and shapes",
            children: `
              <div class="flex items-end gap-4">
                ${Skeleton({ width: "100px", height: "2" })}
                ${Skeleton({ width: "100px", height: "4" })}
                ${Skeleton({ width: "100px", height: "8", rounded: "lg" })}
                ${Skeleton({ width: "48px", height: "48px", rounded: "full" })}
              </div>
            `,
            code: `<Skeleton width="100px" height="2" />
<Skeleton width="100px" height="4" />
<Skeleton width="100px" height="8" rounded="lg" />
<Skeleton width="48px" height="48px" rounded="full" />`,
          })}
        `,
      })}

      ${Section({
        title: "Composite Skeletons",
        description: "Pre-built skeleton layouts.",
        children: `
          ${Example({
            label: "Card skeleton",
            children: `
              <div class="max-w-sm">
                ${CardSkeleton({})}
              </div>
            `,
            code: `<CardSkeleton />`,
          })}
          ${Example({
            label: "Text skeleton",
            children: `
              <div class="max-w-md">
                ${TextSkeleton({ lines: 4 })}
              </div>
            `,
            code: `<TextSkeleton lines={4} />`,
          })}
          ${Example({
            label: "User card skeleton",
            children: `
              <div class="flex items-center gap-4 p-4 border rounded-lg max-w-sm">
                ${Skeleton({ width: "48px", height: "48px", rounded: "full" })}
                <div class="flex-1 space-y-2">
                  ${Skeleton({ width: "3/4", height: "4" })}
                  ${Skeleton({ width: "1/2", height: "3" })}
                </div>
              </div>
            `,
            code: `<div class="flex items-center gap-4">
  <Skeleton width="48px" height="48px" rounded="full" />
  <div class="flex-1 space-y-2">
    <Skeleton width="3/4" height="4" />
    <Skeleton width="1/2" height="3" />
  </div>
</div>`,
          })}
        `,
      })}

      <!-- Props Reference -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Props Reference</h2>

        <h3 class="text-base font-semibold text-gray-900 mt-6 mb-4">Spinner</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prop</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Default</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"xs" | "sm" | "md" | "lg" | "xl"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Spinner size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">color</td><td class="px-4 py-3">"primary" | "white" | "gray" | "current"</td><td class="px-4 py-3">"primary"</td><td class="px-4 py-3">Spinner color</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Loading text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">labelPosition</td><td class="px-4 py-3">"right" | "bottom"</td><td class="px-4 py-3">"right"</td><td class="px-4 py-3">Label placement</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-base font-semibold text-gray-900 mt-8 mb-4">Skeleton</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prop</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Default</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">width</td><td class="px-4 py-3">"full" | "3/4" | "1/2" | "1/4" | string</td><td class="px-4 py-3">"full"</td><td class="px-4 py-3">Skeleton width</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">height</td><td class="px-4 py-3">"2" | "3" | "4" | "6" | "8" | string</td><td class="px-4 py-3">"4"</td><td class="px-4 py-3">Skeleton height</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">rounded</td><td class="px-4 py-3">"none" | "sm" | "md" | "lg" | "full"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Border radius</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Spinners",
    currentPath: "/_components/ui/spinners",
    children: content,
    devMode,
  });
}
