// Lightweight stand-in for the hero 3D scene. It is shown on small screens
// and until the desktop model chunk is loaded, so first paint never waits on
// the 10.5 MB GLTF model.
const HeroPreview = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none touch-pan-y overflow-hidden z-0">
    {/* Dark gradient overlay keeps hero text and buttons readable */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816]/75 to-transparent z-[1]" />

    <div className="w-full h-full flex items-end justify-center pb-28 px-4 z-0">
      <picture className="block w-full max-w-[500px]">
        <source
          type="image/avif"
          srcSet="/images/desk-500.avif 500w, /images/desk-1000.avif 1000w"
          sizes="500px"
        />
        <img
          src="/images/desk-500.webp"
          srcSet="/images/desk-500.webp 500w, /images/desk-1000.webp 1000w"
          sizes="500px"
          width={500}
          height={305}
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          decoding="async"
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(145,94,255,0.2)] select-none pointer-events-none"
        />
      </picture>
    </div>
  </div>
);

export default HeroPreview;
