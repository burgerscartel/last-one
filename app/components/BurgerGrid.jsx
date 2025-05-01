import BurgerCard from './BurgerCard';

export default function BurgerGrid() {
  const items = Array.from({ length: 9 }).map((_, i) => ({
    name: 'Placeholder',
    price: '645 RS'
  }));

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '1rem',
      padding: '1rem 2rem'
    }}>
      {items.map((item, i) => (
        <BurgerCard key={i} {...item} />
      ))}
    </div>
  );
}
