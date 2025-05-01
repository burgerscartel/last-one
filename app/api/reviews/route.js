import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJ31IQp-WT3zgRh8EvCX-AgPM';       // your Place ID
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;    // you’ll add this in Vercel

export async function GET() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=review&key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) return NextResponse.json([], { status: 500 });

  const data = await res.json();
  const reviews = data.result.reviews?.map(r => ({
    author_name: r.author_name,
    rating: r.rating,
    text: r.text
  })) || [];

  return NextResponse.json(reviews);
}
