import { Fragment } from "../../lib/jsx-runtime";

type RecapSectionProps = {
  title?: string;
  description?: string;
  images: string[];
  link?: string;
  linkText?: string;
};

export function RecapSection({ title = "See how it was", description, images, link, linkText = "View full recap" }: RecapSectionProps): string {
  if (!images || images.length === 0) return "";

  return (
    <section class="py-16 px-6 bg-gray-50">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        {description && (
          <p class="text-gray-600 mb-8">
            {description}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark font-medium ml-1">
                {linkText} →
              </a>
            )}
          </p>
        )}
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {images.slice(0, 10).map(img => (
            <div class="aspect-square rounded-lg overflow-hidden bg-gray-200">
              <img src={img} alt="" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
