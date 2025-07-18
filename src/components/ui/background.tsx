import type React from "react";

type BackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function BackgroundSection({ children, className = "" }: BackgroundProps) {
  return (
    <section
      className={`relative w-full h-screen overflow-hidden bg-[#0a0613] pb-10 pt-10 font-light text-white antialiased md:pb-16 md:pt-20 ${className}`}
      style={{
        background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
      }}
    >
      {/* Right radial background */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      {/* Left mirrored radial background */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}
