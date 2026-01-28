type ButtonProps = {
  children: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "default" | "lg";
  className?: string;
  style?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  style,
  type,
}: ButtonProps): string {
  const classes = variant === "link"
    ? ["btn-link", className].filter(Boolean).join(" ")
    : [
        "btn",
        `btn-${variant}`,
        size === "lg" ? "btn-lg" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ");

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button type={type} className={classes} style={style}>{children}</button>;
}
