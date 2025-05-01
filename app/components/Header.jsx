'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'var(--secondary)',
      padding: '0.5rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <Link href="/">
        <Image src="/assets/logo.png" alt="Burgers Cartel" width={300} height={90} />
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Side-drawer toggle goes here */}
        <Link href="https://wa.me/923375561898" target="_blank" aria-label="Chat on WhatsApp">
         <Image
  src="/assets/vectors/icon-whatsapp.svg"
  alt="WhatsApp"
  width={48}
  height={48}
        </Link>
      </nav>
    </header>
  );
}
