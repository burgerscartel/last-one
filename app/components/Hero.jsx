'use client';

export default function Hero() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' }}>
      <video
        src="/assets/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.5)',
          padding: '1rem 2rem',
          borderRadius: '8px'
        }}>
          <h1 style={{
            color: '#FFF',
            fontSize: '2rem',
            fontFamily: 'Cinzel, serif',
            margin: 0
          }}>
            Cartel Deal: 10% Off Your First Order
          </h1>
          <button style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: 'var(--primary)',
            color: '#FFF',
            border: 'none',
            borderRadius: '24px'
          }}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
