type ButtonProps = {
  children: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "soft";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  type?: "button" | "submit";
  id?: string;
};

const sizeClasses = {
  xs: "rounded-sm px-2 py-1 text-xs",
  sm: "rounded-sm px-2 py-1 text-sm",
  md: "rounded-md px-2.5 py-1.5 text-sm",
  lg: "rounded-md px-3 py-2 text-sm",
  xl: "rounded-md px-3.5 py-2.5 text-sm",
};

const variantClasses = {
  primary: "!bg-[#c9362b] !text-white shadow-sm hover:!bg-[#a82d24] focus-visible:outline-[#c9362b]",
  secondary: "!bg-white !text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:!bg-gray-50",
  outline: "!bg-transparent !text-[#c9362b] ring-1 ring-[#c9362b] ring-inset hover:!bg-[#fef2f0]",
  soft: "!bg-[#fef2f0] !text-[#c9362b] hover:!bg-[#fef2f0]/80",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  id,
}: ButtonProps): string {
  const classes = [
    "inline-flex items-center justify-center font-semibold",
    "!no-underline hover:!no-underline",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "transition-colors duration-150 cursor-pointer",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ].filter(Boolean).join(" ");

  if (href) {
    return <a href={href} id={id} className={classes}>{children}</a>;
  }

  return <button type={type} id={id} className={classes}>{children}</button>;
}
