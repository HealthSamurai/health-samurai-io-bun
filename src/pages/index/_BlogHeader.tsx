// Blog header section

import { Component } from "../../lib/component";

export function BlogHeader(): string {
  return (
    <Component name="pages/index/BlogHeader" className="py-12">
      <div class="container bg-gray-50 py-12 rounded-lg">
        <h2 class="text-4xl md:text-5xl font-black leading-tight text-center uppercase">
          The Health Samurai Blog
        </h2>
      </div>
    </Component>
  );
}
