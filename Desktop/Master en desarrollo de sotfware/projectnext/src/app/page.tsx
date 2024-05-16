import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <>
      <div>WELCOME</div>
      <Link href="/movies">
        <button>movies</button>
      </Link>
    </>
  );
}
