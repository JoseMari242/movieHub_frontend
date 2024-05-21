// src/app/movies/new/page.tsx

'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { createMovie } from './action';
import { Movie } from '@/utils/Interfaces/Movies';


export default function NewMovie() {
  const [name, setName] = useState<string>('');
  const [sinopsis, setSinopsis] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [genre, setGenre] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movie: Movie = { name, sinopsis, image, score, genre };

    try {
      await createMovie(movie);
      router.push('/movies');
    } catch (error) {
      console.error("Failed to create movie:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Sinopsis:
          <textarea
            value={sinopsis}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSinopsis(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Score:
          <input
            type="number"
            value={score}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setScore(parseInt(e.target.value))}
            required
          />
        </label>
      </div>
      <button type="submit">Create Movie</button>
      <div>
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setGenre(e.target.value)}
            required
          />
        </label>
      </div>
    </form>
  );
}

// src/app/(pages)/new-movie/page.tsx
// src/app/(pages)/new-movie/page.tsx

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import { createMovie } from './action';

// export default function NewMovie() {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState('');
//   const [score, setScore] = useState<number>(0);
//   const [sinopsis, setSinopsis] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const newMovie = {
//       name,
//       image,
//       score,
//       sinopsis,
//     };

//     console.log('Submitting movie:', newMovie); // Verificar si los datos del formulario son correctos

//     try {
//       await createMovie(newMovie);
//       router.push('/movies');
//     } catch (error) {
//       console.error('Error creating movie:', error); // Imprimir el error si ocurre durante la creación de la película
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </div>
//       <div>
//         <label>Image URL:</label>
//         <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
//       </div>
//       <div>
//         <label>Score:</label>
//         <input type="number" value={score} onChange={(e) => setScore(Number(e.target.value))} required />
//       </div>
//       <div>
//         <label>Sinopsis:</label>
//         <textarea value={sinopsis} onChange={(e) => setSinopsis(e.target.value)} required />
//       </div>
//       <button type="submit">Create Movie</button>
//     </form>
//   );
// }
