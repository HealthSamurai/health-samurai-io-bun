/**
 * Logo component - AIDBOX BLOG logo
 * Figma Node: 616:5553
 *
 * Structure:
 * - Left: Aidbox icon (box + A overlay)
 * - Center: AIDBOX text
 * - Right: BLOG text (#eb4a35)
 */
export function Logo(): string {
  return (
    <div class="relative w-[173px] h-[37px]">
      {/* BLOG text - Figma node: 616:5554 */}
      <div
        class="absolute left-[118.01px] top-[18.5px] -translate-y-1/2 flex flex-col justify-center font-extrabold not-italic whitespace-nowrap leading-[0] text-brand-500"
        style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 19.889px;"
      >
        <p class="leading-[36.414px]">BLOG</p>
      </div>

      {/* AIDBOX text - Figma node: 616:5555 */}
      <div
        class="absolute"
        style="top: 29.14%; right: 35.15%; bottom: 30%; left: 17.67%;"
      >
        <img
          alt="AIDBOX"
          class="block max-w-none w-full h-full"
          src="/icons/blog/aidbox.svg"
        />
      </div>

      {/* Box icon - Figma node: 616:5557 */}
      <div
        class="absolute"
        style="top: 9.09%; right: 86.48%; bottom: 13.42%; left: 0%;"
      >
        <img
          alt="Box"
          class="block max-w-none w-full h-full"
          src="/icons/blog/box.svg"
        />
      </div>

      {/* A icon - Figma node: 616:5559 */}
      <div
        class="absolute"
        style="top: 31.12%; right: 90.05%; bottom: 38.75%; left: 3.19%;"
      >
        <img
          alt="A"
          class="block max-w-none w-full h-full"
          src="/icons/blog/a.svg"
        />
      </div>
    </div>
  );
}
