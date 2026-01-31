/**
 * Progress Component
 * Step indicators and progress bars
 *
 * @example
 * // Step progress
 * <Steps steps={[
 *   { id: "1", name: "Cart", status: "complete" },
 *   { id: "2", name: "Shipping", status: "current" },
 *   { id: "3", name: "Payment", status: "upcoming" },
 * ]} />
 *
 * // Progress bar
 * <ProgressBar value={65} max={100} />
 *
 * // Circular progress
 * <ProgressCircle value={75} />
 */

export type StepStatus = "complete" | "current" | "upcoming";

export type Step = {
  /** Step identifier */
  id: string;
  /** Step name */
  name: string;
  /** Optional description */
  description?: string;
  /** Step status */
  status: StepStatus;
  /** Optional href for clickable steps */
  href?: string;
};

export type StepsProps = {
  /** Array of steps */
  steps: Step[];
  /** Visual variant */
  variant?: "simple" | "circles" | "bullets" | "panels";
  /** Additional CSS classes */
  className?: string;
};

// Check icon for completed steps
const checkIcon = `<svg class="size-5 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
</svg>`;

// Steps with simple style (vertical/horizontal lines)
export function Steps({
  steps,
  variant = "simple",
  className = "",
}: StepsProps): string {
  if (variant === "circles") {
    return StepsCircles({ steps, className });
  }
  if (variant === "bullets") {
    return StepsBullets({ steps, className });
  }
  if (variant === "panels") {
    return StepsPanels({ steps, className });
  }

  // Simple variant (default)
  return `
    <nav aria-label="Progress" class="${className}">
      <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
        ${steps.map(step => {
          const stepContent = `
            <span class="text-sm font-medium ${step.status === "complete" || step.status === "current" ? "text-primary group-hover:text-primary-dark" : "text-gray-500 group-hover:text-gray-700"}">${step.id ? `Step ${step.id}` : ""}</span>
            <span class="text-sm font-medium text-gray-900">${step.name}</span>
          `;

          const borderClass = step.status === "complete" || step.status === "current"
            ? "border-primary hover:border-primary-dark"
            : "border-gray-200 hover:border-gray-300";

          return `
            <li class="md:flex-1">
              ${step.href
                ? `<a href="${step.href}" class="group flex flex-col border-l-4 ${borderClass} py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0" ${step.status === "current" ? 'aria-current="step"' : ""}>
                    ${stepContent}
                  </a>`
                : `<div class="flex flex-col border-l-4 ${borderClass} py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0" ${step.status === "current" ? 'aria-current="step"' : ""}>
                    ${stepContent}
                  </div>`
              }
            </li>
          `;
        }).join("")}
      </ol>
    </nav>
  `;
}

// Steps with circles
function StepsCircles({ steps, className }: { steps: Step[]; className: string }): string {
  return `
    <nav aria-label="Progress" class="${className}">
      <ol role="list" class="flex items-center">
        ${steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          let circleContent: string;
          if (step.status === "complete") {
            circleContent = `<span class="flex size-10 items-center justify-center rounded-full bg-primary">${checkIcon}</span>`;
          } else if (step.status === "current") {
            circleContent = `<span class="flex size-10 items-center justify-center rounded-full border-2 border-primary bg-white">
              <span class="size-2.5 rounded-full bg-primary"></span>
            </span>`;
          } else {
            circleContent = `<span class="flex size-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
              <span class="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
            </span>`;
          }

          const lineClass = step.status === "complete" ? "bg-primary" : "bg-gray-200";

          return `
            <li class="${isLast ? "" : "flex-1"} relative ${isLast ? "" : "pr-8 sm:pr-20"}">
              ${!isLast ? `<div class="absolute top-5 left-5 -ml-px mt-0.5 h-0.5 w-full ${lineClass}" aria-hidden="true"></div>` : ""}
              ${step.href
                ? `<a href="${step.href}" class="group relative flex items-center" ${step.status === "current" ? 'aria-current="step"' : ""}>
                    ${circleContent}
                    <span class="ml-4 min-w-0 flex flex-col">
                      <span class="text-sm font-medium ${step.status === "complete" || step.status === "current" ? "text-primary" : "text-gray-500"}">${step.name}</span>
                      ${step.description ? `<span class="text-sm text-gray-500">${step.description}</span>` : ""}
                    </span>
                  </a>`
                : `<div class="group relative flex items-center" ${step.status === "current" ? 'aria-current="step"' : ""}>
                    ${circleContent}
                    <span class="ml-4 min-w-0 flex flex-col">
                      <span class="text-sm font-medium ${step.status === "complete" || step.status === "current" ? "text-primary" : "text-gray-500"}">${step.name}</span>
                      ${step.description ? `<span class="text-sm text-gray-500">${step.description}</span>` : ""}
                    </span>
                  </div>`
              }
            </li>
          `;
        }).join("")}
      </ol>
    </nav>
  `;
}

// Steps with bullets
function StepsBullets({ steps, className }: { steps: Step[]; className: string }): string {
  return `
    <nav aria-label="Progress" class="${className}">
      <ol role="list" class="flex items-center justify-center gap-2">
        ${steps.map(step => {
          const bulletClass = step.status === "complete"
            ? "bg-primary"
            : step.status === "current"
              ? "bg-primary ring-2 ring-primary ring-offset-2"
              : "bg-gray-300";

          return `
            <li>
              <span class="block size-2.5 rounded-full ${bulletClass}" ${step.status === "current" ? 'aria-current="step"' : ""}>
                <span class="sr-only">${step.name}</span>
              </span>
            </li>
          `;
        }).join("")}
      </ol>
    </nav>
  `;
}

// Steps with panels
function StepsPanels({ steps, className }: { steps: Step[]; className: string }): string {
  return `
    <nav aria-label="Progress" class="${className}">
      <ol role="list" class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        ${steps.map((step, index) => {
          const isFirst = index === 0;
          const isLast = index === steps.length - 1;

          const stepNumber = `
            ${step.status === "complete"
              ? `<span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">${checkIcon}</span>`
              : step.status === "current"
                ? `<span class="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                    <span class="text-primary font-medium">${String(index + 1).padStart(2, "0")}</span>
                  </span>`
                : `<span class="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span class="text-gray-500 group-hover:text-gray-900">${String(index + 1).padStart(2, "0")}</span>
                  </span>`
            }
          `;

          const arrow = `
            <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
              <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
            </div>
          `;

          return `
            <li class="relative md:flex md:flex-1">
              ${step.href
                ? `<a href="${step.href}" class="group flex w-full items-center">
                    <span class="flex items-center px-6 py-4 text-sm font-medium">
                      ${stepNumber}
                      <span class="ml-4 text-sm font-medium ${step.status === "complete" || step.status === "current" ? "text-primary" : "text-gray-500"}">${step.name}</span>
                    </span>
                  </a>`
                : `<div class="group flex w-full items-center" ${step.status === "current" ? 'aria-current="step"' : ""}>
                    <span class="flex items-center px-6 py-4 text-sm font-medium">
                      ${stepNumber}
                      <span class="ml-4 text-sm font-medium ${step.status === "complete" || step.status === "current" ? "text-primary" : "text-gray-500"}">${step.name}</span>
                    </span>
                  </div>`
              }
              ${!isLast ? arrow : ""}
            </li>
          `;
        }).join("")}
      </ol>
    </nav>
  `;
}

// Progress bar
export type ProgressBarProps = {
  /** Current value */
  value: number;
  /** Maximum value */
  max?: number;
  /** Show percentage label */
  showLabel?: boolean;
  /** Label position */
  labelPosition?: "inside" | "outside" | "top";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Color */
  color?: "primary" | "green" | "blue" | "red" | "yellow" | "gray";
  /** Additional CSS classes */
  className?: string;
};

const barColors: Record<string, string> = {
  primary: "bg-primary",
  green: "bg-green-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
};

const barSizes: Record<string, string> = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  labelPosition = "outside",
  size = "md",
  color = "primary",
  className = "",
}: ProgressBarProps): string {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const percentageText = `${Math.round(percentage)}%`;

  if (labelPosition === "top") {
    return `
      <div class="${className}">
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium text-gray-700">Progress</span>
          <span class="text-sm font-medium text-gray-700">${percentageText}</span>
        </div>
        <div class="w-full ${barSizes[size]} bg-gray-200 rounded-full overflow-hidden">
          <div class="${barColors[color]} ${barSizes[size]} rounded-full transition-all duration-300" style="width: ${percentage}%"></div>
        </div>
      </div>
    `;
  }

  if (labelPosition === "inside" && size === "lg") {
    return `
      <div class="w-full h-6 bg-gray-200 rounded-full overflow-hidden ${className}">
        <div class="${barColors[color]} h-6 rounded-full transition-all duration-300 flex items-center justify-center" style="width: ${percentage}%">
          <span class="text-xs font-medium text-white">${percentageText}</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="flex items-center gap-3 ${className}">
      <div class="flex-1 w-full ${barSizes[size]} bg-gray-200 rounded-full overflow-hidden">
        <div class="${barColors[color]} ${barSizes[size]} rounded-full transition-all duration-300" style="width: ${percentage}%"></div>
      </div>
      ${showLabel ? `<span class="text-sm font-medium text-gray-700 min-w-[3ch]">${percentageText}</span>` : ""}
    </div>
  `;
}

// Circular progress
export function ProgressCircle({
  value,
  max = 100,
  size = "md",
  color = "primary",
  showLabel = true,
  className = "",
}: {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "green" | "blue" | "red" | "yellow" | "gray";
  showLabel?: boolean;
  className?: string;
}): string {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const circumference = 2 * Math.PI * 40; // radius = 40
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizes = {
    sm: { svg: "size-16", text: "text-sm" },
    md: { svg: "size-24", text: "text-xl" },
    lg: { svg: "size-32", text: "text-2xl" },
  } as const;

  const strokeColors = {
    primary: "stroke-primary",
    green: "stroke-green-500",
    blue: "stroke-blue-500",
    red: "stroke-red-500",
    yellow: "stroke-yellow-500",
    gray: "stroke-gray-500",
  } as const;

  const sizeConfig = sizes[size];
  const strokeColor = strokeColors[color];

  return `
    <div class="relative inline-flex ${sizeConfig.svg} ${className}">
      <svg class="${sizeConfig.svg} -rotate-90" viewBox="0 0 100 100">
        <circle class="stroke-gray-200" stroke-width="8" fill="none" cx="50" cy="50" r="40" />
        <circle class="${strokeColor} transition-all duration-300" stroke-width="8" stroke-linecap="round" fill="none" cx="50" cy="50" r="40"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${strokeDashoffset}" />
      </svg>
      ${showLabel ? `
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="${sizeConfig.text} font-semibold text-gray-900">${Math.round(percentage)}%</span>
        </div>
      ` : ""}
    </div>
  `;
}
