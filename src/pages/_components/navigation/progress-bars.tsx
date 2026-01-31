/**
 * Progress Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Steps, ProgressBar, ProgressCircle } from "../../../components/ui/Progress";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Progress",
  description: "Step indicators and progress bars",
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

export default function ProgressDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Progress Component</h1>
        <p class="mt-2 text-gray-600">
          Step indicators for multi-step processes and progress bars for showing completion.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Steps, ProgressBar, ProgressCircle } from "../components/ui/Progress";
        </code>
      </div>

      ${Section({
        title: "Simple Steps",
        description: "Basic step indicator with line borders.",
        children: Example({
          label: "Simple variant",
          children: Steps({
            variant: "simple",
            steps: [
              { id: "1", name: "Job details", status: "complete" },
              { id: "2", name: "Application form", status: "current" },
              { id: "3", name: "Preview", status: "upcoming" },
            ],
          }),
          code: `<Steps
  variant="simple"
  steps={[
    { id: "1", name: "Job details", status: "complete" },
    { id: "2", name: "Application form", status: "current" },
    { id: "3", name: "Preview", status: "upcoming" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Circle Steps",
        description: "Steps with circular indicators and connecting lines.",
        children: Example({
          label: "Circles variant with descriptions",
          children: Steps({
            variant: "circles",
            steps: [
              { id: "01", name: "Create account", description: "Basic information", status: "complete" },
              { id: "02", name: "Profile details", description: "Personal data", status: "current" },
              { id: "03", name: "Preferences", description: "Settings", status: "upcoming" },
            ],
          }),
          code: `<Steps
  variant="circles"
  steps={[
    { id: "01", name: "Create account", description: "Basic information", status: "complete" },
    { id: "02", name: "Profile details", description: "Personal data", status: "current" },
    { id: "03", name: "Preferences", description: "Settings", status: "upcoming" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Bullet Steps",
        description: "Minimal dot indicators for compact displays.",
        children: Example({
          label: "Bullets variant",
          children: Steps({
            variant: "bullets",
            steps: [
              { id: "1", name: "Step 1", status: "complete" },
              { id: "2", name: "Step 2", status: "complete" },
              { id: "3", name: "Step 3", status: "current" },
              { id: "4", name: "Step 4", status: "upcoming" },
              { id: "5", name: "Step 5", status: "upcoming" },
            ],
          }),
          code: `<Steps
  variant="bullets"
  steps={[
    { id: "1", name: "Step 1", status: "complete" },
    { id: "2", name: "Step 2", status: "complete" },
    { id: "3", name: "Step 3", status: "current" },
    { id: "4", name: "Step 4", status: "upcoming" },
    { id: "5", name: "Step 5", status: "upcoming" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Panel Steps",
        description: "Steps in bordered panels with arrow connectors.",
        children: Example({
          label: "Panels variant",
          children: Steps({
            variant: "panels",
            steps: [
              { id: "01", name: "Job details", status: "complete" },
              { id: "02", name: "Application form", status: "current" },
              { id: "03", name: "Preview", status: "upcoming" },
            ],
          }),
          code: `<Steps
  variant="panels"
  steps={[
    { id: "01", name: "Job details", status: "complete" },
    { id: "02", name: "Application form", status: "current" },
    { id: "03", name: "Preview", status: "upcoming" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Progress Bars",
        description: "Linear progress indicators.",
        children: `
          ${Example({
            label: "Basic progress bar",
            children: `
              <div class="space-y-4">
                ${ProgressBar({ value: 25, showLabel: true })}
                ${ProgressBar({ value: 50, showLabel: true })}
                ${ProgressBar({ value: 75, showLabel: true })}
                ${ProgressBar({ value: 100, showLabel: true })}
              </div>
            `,
            code: `<ProgressBar value={25} showLabel />
<ProgressBar value={50} showLabel />
<ProgressBar value={75} showLabel />
<ProgressBar value={100} showLabel />`,
          })}
          ${Example({
            label: "Sizes",
            children: `
              <div class="space-y-4">
                ${ProgressBar({ value: 60, size: "sm", showLabel: true })}
                ${ProgressBar({ value: 60, size: "md", showLabel: true })}
                ${ProgressBar({ value: 60, size: "lg", showLabel: true })}
              </div>
            `,
            code: `<ProgressBar value={60} size="sm" showLabel />
<ProgressBar value={60} size="md" showLabel />
<ProgressBar value={60} size="lg" showLabel />`,
          })}
          ${Example({
            label: "Colors",
            children: `
              <div class="space-y-4">
                ${ProgressBar({ value: 60, color: "primary", showLabel: true })}
                ${ProgressBar({ value: 60, color: "green", showLabel: true })}
                ${ProgressBar({ value: 60, color: "blue", showLabel: true })}
                ${ProgressBar({ value: 60, color: "red", showLabel: true })}
                ${ProgressBar({ value: 60, color: "yellow", showLabel: true })}
              </div>
            `,
            code: `<ProgressBar value={60} color="primary" showLabel />
<ProgressBar value={60} color="green" showLabel />
<ProgressBar value={60} color="blue" showLabel />`,
          })}
        `,
      })}

      ${Section({
        title: "Progress Bar with Header",
        description: "Progress bar with label above.",
        children: Example({
          label: "Label on top",
          children: `
            <div class="max-w-md">
              ${ProgressBar({ value: 65, labelPosition: "top" })}
            </div>
          `,
          code: `<ProgressBar value={65} labelPosition="top" />`,
        }),
      })}

      ${Section({
        title: "Circular Progress",
        description: "Circular progress indicators.",
        children: `
          ${Example({
            label: "Sizes",
            children: `
              <div class="flex items-center gap-8">
                ${ProgressCircle({ value: 75, size: "sm" })}
                ${ProgressCircle({ value: 75, size: "md" })}
                ${ProgressCircle({ value: 75, size: "lg" })}
              </div>
            `,
            code: `<ProgressCircle value={75} size="sm" />
<ProgressCircle value={75} size="md" />
<ProgressCircle value={75} size="lg" />`,
          })}
          ${Example({
            label: "Colors",
            children: `
              <div class="flex items-center gap-8">
                ${ProgressCircle({ value: 75, color: "primary" })}
                ${ProgressCircle({ value: 75, color: "green" })}
                ${ProgressCircle({ value: 75, color: "blue" })}
                ${ProgressCircle({ value: 75, color: "red" })}
              </div>
            `,
            code: `<ProgressCircle value={75} color="primary" />
<ProgressCircle value={75} color="green" />
<ProgressCircle value={75} color="blue" />`,
          })}
          ${Example({
            label: "Without label",
            children: `
              <div class="flex items-center gap-8">
                ${ProgressCircle({ value: 33, showLabel: false })}
                ${ProgressCircle({ value: 66, showLabel: false })}
                ${ProgressCircle({ value: 100, showLabel: false })}
              </div>
            `,
            code: `<ProgressCircle value={33} showLabel={false} />`,
          })}
        `,
      })}

      <!-- Props Reference -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Props Reference</h2>

        <h3 class="text-base font-semibold text-gray-900 mt-6 mb-4">Steps</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">steps</td><td class="px-4 py-3">Step[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Array of steps</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "circles" | "bullets" | "panels"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Visual style</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-base font-semibold text-gray-900 mt-8 mb-4">ProgressBar</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">number</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Current value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">max</td><td class="px-4 py-3">number</td><td class="px-4 py-3">100</td><td class="px-4 py-3">Maximum value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Bar height</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">color</td><td class="px-4 py-3">"primary" | "green" | "blue" | "red" | "yellow" | "gray"</td><td class="px-4 py-3">"primary"</td><td class="px-4 py-3">Bar color</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">showLabel</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show percentage</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">labelPosition</td><td class="px-4 py-3">"inside" | "outside" | "top"</td><td class="px-4 py-3">"outside"</td><td class="px-4 py-3">Label placement</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Progress",
    currentPath: "/_components/navigation/progress-bars",
    children: content,
    devMode,
  });
}
