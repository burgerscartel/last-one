import Image from 'next/image';

export default function BurgerCard({ name, price }) {
  return (
    <div style={{
      border: '1px solid var(--secondary)',
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#FFF'
    }}>
      <div style={{
        width: '100%',
        height: 0,
        paddingBottom: '75%',
        position: 'relative',
        backgroundColor: '#f0f0f0'
      }}>
        <span style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#aaa'
        }}>
          Image Placeholder
        </span>
      </div>
      <div style={{ padding: '0.5rem' }}>
        <h3 style={{ fontFamily: 'Cinzel, serif' }}>{name}</h3>
        <p style={{ margin: '0.25rem 0' }}>{price}</p>
        <button style={{
          backgroundColor: 'var(--primary)',
          border: 'none',
          padding: '0.5rem 1rem',
          color: '#FFF',
          borderRadius: '4px'
        }}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
