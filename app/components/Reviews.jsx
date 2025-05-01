'use client';
import { useEffect, useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(setReviews)
      .catch(console.error);
  }, []);

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ fontFamily: 'Cinzel, serif', marginBottom: '1rem' }}>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((rev, i) => (
          <blockquote key={i} style={{ margin: '1rem 0', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>
            <strong>{rev.author_name}</strong> ★{rev.rating}<br />
            {rev.text}
          </blockquote>
        ))
      )}
    </section>
  );
}
