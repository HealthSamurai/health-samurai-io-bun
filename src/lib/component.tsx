// Component wrapper with data-component attribute for debugging

type ComponentProps = {
  name: string;
  children: string;
  className?: string;
};

export function Component({ name, children, className }: ComponentProps): string {
  if (className) {
    return <div data-component={name} className={className}>{children}</div>;
  }
  return <div data-component={name}>{children}</div>;
}
