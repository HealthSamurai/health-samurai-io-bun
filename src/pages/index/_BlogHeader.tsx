// Blog header section

import { Component } from "../../lib/component";

export function BlogHeader(): string {
  return (
    <Component name="pages/index/BlogHeader" className="home-blog-header-section">
      <div className="home-blog-header-container">
        <h2 className="global-2header">The Health Samurai BLOG </h2>
      </div>
    </Component>
  );
}
