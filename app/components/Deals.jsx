'use client';
import Image from 'next/image';

const deals = [
  {
    id: 1,
    title: 'Friends and Fun Deal (3 persons)',
    items: [
      '3× Grill Burgers (Your Choice)',
      '3× French Fries',
      '3× Dip Sauce (Your Choice)',
      '1× 1.5 L Drink',
    ],
    price: '2690 RS'
  },
  {
    id: 2,
    title: 'Budget Friendly Deal (2 persons)',
    items: [
      '2× Crispy Chicken Burgers (Runner, Crunch Dealer)',
      '1× French Fries',
      '2× Regular Drinks',
    ],
    price: '1180 RS'
  },
  {
    id: 3,
    title: 'The Butcher Deal (2 persons)',
    items: [
      '1× Cartel Smash',
      '1× Oklahoma',
      '2× French Fries',
      '2× Regular Drinks',
    ],
    price: '2130 RS'
  },
  {
    id: 4,
    title: 'Family Feast Deal (4–5 persons)',
    items: [
      '2× Grill Burgers (Your Choice)',
      '2× Crispy Chicken Burgers (Runner, Crunch Dealer)',
      '1× Cartel Smash',
      'Sides (Nuggets + Fries)',
      '1× 1.5 L Drink',
    ],
    price: '3030 RS'
  },
  {
    id: 5,
    title: 'Wraps & Side Duo (2 persons)',
    items: [
      '2× Grill Wraps (Your Choice)',
      '1× Wings (Your Choice)',
      '2× Dip Sauces',
      '2× Regular Drinks',
    ],
    price: '1960 RS'
  },
  {
    id: 6,
    title: 'Shakes & Share Deal (2 persons)',
    items: [
      '2× Shakes (Your Choice)',
      '5× Chicken Tenders',
      '2× Dip Sauces (Your Choice)',
    ],
    price: '1450 RS'
  },
  {
    id: 7,
    title: 'Kiddie Meal',
    items: [
      '1× The Runner Burger or Chicken Nuggets',
      '1× Regular Fries + Ketchup Dip',
      '1× Regular Drink',
    ],
    price: '785 RS'
  }
];

export default function Deals() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section style={{ padding: '2rem 2rem', backgroundColor: '#fff' }}>
      <h2 style={{ fontFamily: 'Cinzel, serif', marginBottom: '1rem' }}>Cartel Deals</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1rem'
      }}>
        {deals.map(deal => (
          <div key={deal.id} style={{
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
              <h3 style={{ fontFamily: 'Cinzel, serif', margin: 0 }}>{deal.title}</h3>
              <ul style={{ margin: '0.5rem 0 0.75rem 1rem', padding: 0 }}>
                {deal.items.map((it, i) => (
                  <li key={i} style={{ marginBottom: '0.25rem' }}>{it}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 'bold', margin: 0 }}>{deal.price}</p>
            </div>
          </div>
        ))}

        {/* Theme Days Coming Soon */}
        <div style={{
          border: '1px solid var(--secondary)',
          borderRadius: '8px',
          overflow: 'hidden',
          background: 'var(--primary)',
          color: 'var(--background)'
        }}>
          <div style={{ padding: '1rem', position: 'relative' }}>
            <h3 style={{ fontFamily: 'Cinzel, serif', margin: 0 }}>Wing Wednesday</h3>
            <p style={{ margin: '0.5rem 0' }}>Free wings with any 3 burgers</p>
            <span style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: '#000',
              color: '#FFF',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem'
            }}>Coming Soon</span>
          </div>
        </div>
        <div style={{
          border: '1px solid var(--secondary)',
          borderRadius: '8px',
          overflow: 'hidden',
          background: 'var(--secondary)',
          color: 'var(--primary)'
        }}>
          <div style={{ padding: '1rem', position: 'relative' }}>
            <h3 style={{ fontFamily: 'Cinzel, serif', margin: 0 }}>Shake Sunday</h3>
            <p style={{ margin: '0.5rem 0' }}>Upgrade drink to shake +200 RS</p>
            <span style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: '#F2AA21',
              color: '#000',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem'
            }}>Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
