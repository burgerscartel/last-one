'use client';
export default function FilterTabs() {
  const tabs = ['All', 'Grilled', 'Beef', 'Crispy'];
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem 2rem' }}>
      {tabs.map(label => (
        <button
          key={label}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid var(--primary)',
            borderRadius: '999px',
            background: label === 'All' ? 'var(--primary)' : 'var(--background)',
            color: label === 'All' ? '#FFF' : 'var(--secondary)',
            fontFamily: 'Cinzel, serif'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
