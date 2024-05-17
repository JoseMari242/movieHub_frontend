import { getMovie } from "@/utils/API";
import { Movie } from "@/utils/Interfaces/Movies";

type Props = {
    params: {id: string} 
} 


export default async function OneMovie ({params}: Props) {

    const id = params?.id;
    const movies: Movie = await getMovie(id);
    
    console.log("Movie:", movies);

  return (
    <>
      <div>
        <h1>{movies.name}</h1>
        <img src={movies.image} alt={movies.name}/>
        <div>
          <h3>Sinopsis</h3>
          <p>{movies.sinopsis}</p>
          <p>Genre: {movies.genre}</p>
          <p>Score: {movies.score}</p>
        </div>

      </div>
      <h1>soy una pelicula
      </h1>
    </>
  );
}  

// src/app/[id]/page.tsx


// import { getMovie } from '@/utils/API';
// import { Movie } from '@/utils/Interfaces/Movies';
// import React, { useState, useEffect } from 'react';

//  type Props = {
//     params: {id: string} 
// } 

// export default function OneMovie( {params}: Props) {
//   const [movies, setMovies] = useState<Movie | null>(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       const id = params?.id;
//       const movieData: Movie = await getMovie(id);
//       setMovies(movieData);
//     }
//     fetchMovie();
//   }, [params]); 

//   if (!movies) {
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//            <div>
//              <h1>{movies.name}</h1>
//             <img src={movies.image} alt={movies.name}/>
//              <div>
//               <h3>Sinopsis</h3>
//               <p>{movies.sinopsis}</p>
//                <p>Genre: {movies.genre}</p>
//               <p>Score: {movies.score}</p>
//              </div>
    
//            </div>
//            <h1>soy una pelicula
//            </h1>
//     </>
//   )
// }

// "use client";

// import { getMovie } from '@/utils/API';
// import { Movie } from '@/utils/Interfaces/Movies';
// import React, { useState, useEffect } from 'react';

// type Props = {
//   params: { id: string };
// };

// export default function OneMovie({ params }: Props) {
//   const [movie, setMovie] = useState<Movie | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const id = params?.id;
//         const movieData: Movie = await getMovie(id);
//         setMovie(movieData);
//       } catch (error) {
//         console.error('Error fetching movie:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovie();
//   }, [params]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!movie) {
//     return <div>Movie not found</div>;
//   }

//   return (
//     <>
//       <div>
//         <h1>{movie.name}</h1>
//         <img src={movie.image} alt={movie.name} />
//         <div>
//           <h3>Sinopsis</h3>
//           <p>{movie.sinopsis}</p>
//           <p>Genre: {movie.genre.join(', ')}</p> {/* Ajuste aquí */}
//           <p>Score: {movie.score}</p>
//         </div>
//       </div>
//       <h1>Soy una pelicula</h1>
//     </>
//   );
// }
