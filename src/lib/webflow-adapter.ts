/**
 * Webflow DevLink to JSX Runtime Adapter
 * 
 * Адаптирует React компоненты из Webflow DevLink под наш custom JSX runtime
 */

type Props = Record<string, any>;

// Утилита для объединения CSS классов (копия из devlink/utils.js)
export function cx(styles: Record<string, string>, ...classNames: (string | undefined)[]): string {
  return classNames
    .filter(Boolean)
    .map(name => styles[name as string] || name)
    .join(' ');
}

// Базовые HTML элементы
export const Block = (props: Props & { tag?: string }) => {
  const { tag = 'div', className, children, ...rest } = props;
  const attrs = Object.entries(rest)
    .map(([k, v]) => {
      if (k === 'dangerouslySetInnerHTML') return '';
      if (typeof v === 'boolean') return v ? k : '';
      return `${k}="${String(v).replace(/"/g, '&quot;')}"`;
    })
    .filter(Boolean)
    .join(' ');
  
  return `<${tag}${className ? ` class="${className}"` : ''}${attrs ? ` ${attrs}` : ''}>${children || ''}</${tag}>`;
};

export const Section = (props: Props) => Block({ ...props, tag: 'section' });
export const Paragraph = (props: Props) => Block({ ...props, tag: 'p' });
export const Span = (props: Props) => Block({ ...props, tag: 'span' });
export const Strong = (props: Props) => Block({ ...props, tag: 'strong' });

export const Link = (props: Props & { options?: { href?: string; target?: string }; button?: boolean; block?: string }) => {
  const { className = '', options = {}, button, block, children, ...rest } = props;
  const { href = '#', target } = options;
  
  let cls = className;
  if (button) cls += ' w-button';
  if (block === 'inline') cls += ' w-inline-block';
  
  return `<a href="${href}"${target ? ` target="${target}"` : ''}${cls ? ` class="${cls}"` : ''}>${children || ''}</a>`;
};

export const Image = (props: Props & { src?: string; alt?: string; loading?: string }) => {
  const { src = '', alt = '', className, loading, ...rest } = props;
  return `<img src="${src}" alt="${alt}"${className ? ` class="${className}"` : ''}${loading ? ` loading="${loading}"` : ''} />`;
};

export const HtmlEmbed = (props: Props & { value?: string }) => {
  const { value = '' } = props;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

export const Grid = (props: Props) => Block({ ...props, tag: 'div' });

// Tabs - упрощенная версия
export const TabsWrapper = (props: Props) => Block({ ...props, tag: 'div', 'data-w-tabs': 'tabs' });
export const TabsMenu = (props: Props) => Block({ ...props, tag: 'div', role: 'tablist' });
export const TabsContent = (props: Props) => Block({ ...props, tag: 'div', role: 'tabpanel' });
export const TabsPane = (props: Props) => Block({ ...props, tag: 'div' });
export const TabsLink = (props: Props & { options?: { href?: string } }) => {
  const { className, children, options = {} } = props;
  const { href = '#' } = options;
  return `<a href="${href}" class="${className || ''}" role="tab">${children || ''}</a>`;
};

// Form components
export const FormWrapper = (props: Props) => Block({ ...props, tag: 'div' });
export const FormForm = (props: Props & { name?: string; method?: string }) => {
  const { className, children, name, method = 'post', ...rest } = props;
  return `<form name="${name || 'form'}" method="${method}" class="${className || ''}">${children || ''}</form>`;
};
export const FormTextInput = (props: Props & { name?: string; type?: string; placeholder?: string; required?: boolean }) => {
  const { className, name, type = 'text', placeholder, required } = props;
  return `<input type="${type}" name="${name || ''}" placeholder="${placeholder || ''}"${required ? ' required' : ''} class="${className || ''}" />`;
};
export const FormTextarea = (props: Props & { name?: string; placeholder?: string; required?: boolean }) => {
  const { className, name, placeholder, required } = props;
  return `<textarea name="${name || ''}" placeholder="${placeholder || ''}"${required ? ' required' : ''} class="${className || ''}"