import { parse } from "parse5";

export type HtmlNode = ReturnType<typeof parse>;

export function parseHtml(html: string): HtmlNode {
  return parse(html);
}

export function getAttr(node: any, name: string): string | undefined {
  if (!node || !node.attrs) return undefined;
  const attr = node.attrs.find((a: any) => a.name === name);
  return attr ? attr.value : undefined;
}

export function walk(node: any, visit: (n: any) => void): void {
  if (!node) return;
  visit(node);
  const children = node.childNodes || [];
  for (const child of children) walk(child, visit);
}

export function findAll(node: HtmlNode, predicate: (n: any) => boolean): any[] {
  const found: any[] = [];
  walk(node, n => {
    if (predicate(n)) found.push(n);
  });
  return found;
}

export function textContent(node: any): string {
  let out = "";
  walk(node, n => {
    if (n.nodeName === "#text") out += n.value || "";
  });
  return out;
}
