import Link from 'next/link';
import React from 'react';
import { getSession } from '@auth0/nextjs-auth0';


export default async function Page() {
  const session = await getSession();

console.log(session)

  return (
    <>
      <div className='title'>WELCOME</div>

      <Link href="/api/auth/login">
        <button className="title-button">Login</button>
      </Link>
      <Link href="/api/auth/logout">
        <button className="title-button">Logout</button>
      </Link>
      

      <Link href="/movies">
        <button className="title-button">movies</button>
      </Link>
    </>
  );
}
