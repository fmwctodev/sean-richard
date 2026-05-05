/**
 * AmbientMesh — animated gradient blob field that sits behind every page.
 *
 * Four large radial-gradient blobs drift slowly on independent paths.
 * Pure CSS, server component, zero runtime JS. Mobile-friendly.
 *
 * Layered with the grain overlay (body::before in globals.css) for a
 * tactile premium feel. Respects prefers-reduced-motion (animations
 * freeze in their initial position via the global media query in
 * globals.css).
 */
export default function AmbientMesh() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Blob 1 — brand red, top-left */}
      <div
        className="absolute rounded-full animate-mesh-drift-1"
        style={{
          top: '-15%',
          left: '-10%',
          width: '70vw',
          height: '70vw',
          maxWidth: '900px',
          maxHeight: '900px',
          background:
            'radial-gradient(circle at center, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.05) 45%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* Blob 2 — warm amber-white, mid-right */}
      <div
        className="absolute rounded-full animate-mesh-drift-2"
        style={{
          top: '20%',
          right: '-15%',
          width: '60vw',
          height: '60vw',
          maxWidth: '800px',
          maxHeight: '800px',
          background:
            'radial-gradient(circle at center, rgba(244, 217, 168, 0.18) 0%, rgba(244, 217, 168, 0.04) 45%, transparent 70%)',
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
      />

      {/* Blob 3 — brand red, bottom-center */}
      <div
        className="absolute rounded-full animate-mesh-drift-3"
        style={{
          bottom: '-20%',
          left: '20%',
          width: '65vw',
          height: '65vw',
          maxWidth: '850px',
          maxHeight: '850px',
          background:
            'radial-gradient(circle at center, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.04) 45%, transparent 70%)',
          filter: 'blur(85px)',
          willChange: 'transform',
        }}
      />

      {/* Blob 4 — deep panel-tone, top-right adds depth variation */}
      <div
        className="absolute rounded-full animate-mesh-drift-4"
        style={{
          top: '-10%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background:
            'radial-gradient(circle at center, rgba(28, 26, 24, 0.6) 0%, rgba(28, 26, 24, 0.1) 50%, transparent 75%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
