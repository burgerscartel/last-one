// app/api/reviews/route.js

// 1. Ensure this API route runs at request time, not at build time
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJ31IQp-WT3zgRh8EvCX-AgPM';
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function GET() {
  // Fetch place details from Google Places API
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
  );

  if (!res.ok) {
    // If Google returns an error, respond with an empty array
    return NextResponse.json([], { status: res.status });
  }

  const data = await res.json();

  // Safely extract reviews (fallback to empty array)
  const reviews = Array.isArray(data.result?.reviews)
    ? data.result.reviews.map(r => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text
      }))
    : [];

  return NextResponse.json(reviews);
}
