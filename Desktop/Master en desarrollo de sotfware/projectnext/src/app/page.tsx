import Link from 'next/link';
import React from 'react';


export default function Page() {
  return (
    <>
      <div className='title'>WELCOME</div>
      <Link href="/movies">
        <button className="title-button">movies</button>
      </Link>
      <Link href="/new">
          <button>New Movie</button>
        </Link>
    </>
  );
}
