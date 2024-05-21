// import { getMovie } from "@/utils/API";
// import { Movie } from "@/utils/Interfaces/Movies";
// import dotenv from 'dotenv';


// dotenv.config();

// type Props = {
//     params: {id: string} 
// } 



// export default async function OneMovie ({params}: Props) {

//     const id = params?.id;
//     const movies: Movie = await getMovie(id);
    
//     console.log("Movie:", movies);

//   return (
//     <>
//       <div>
//         <h1>{movies.name}</h1>
//         <img src={movies.image} alt="Hola"/>
//         <div>
//           <h3>Sinopsis</h3>
//           <p>{movies.sinopsis}</p>

//           <p>Score: {movies.score}</p>
//         </div>

//       </div>
//       <h1>soy una pelicula
//       </h1>
//     </>
//   );
// }  
import { getMovie } from "@/utils/API";
import { Movie } from "@/utils/Interfaces/Movies";
import dotenv from 'dotenv';

dotenv.config();

type Props = {
  params: { id: string }
};

export default async function OneMovie({ params }: Props) {
  const id = params?.id;

  try {
    const response = await getMovie(id);
    const movie: Movie = response;

    if (!movie) {
      return <div>Movie not found</div>;
    }

    return (
      <div>
        <h1>{movie.name}</h1>
        <img src={movie.image} alt={movie.name} />
        <div>
          <h3>Sinopsis</h3>
          <p>{movie.sinopsis}</p>
          <p>Score: {movie.score}</p>
        </div>
        <h1>soy una pelicula</h1>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch movie", error);
    return <div>Error fetching movie data</div>;
  }
}



// import { getMovie } from "@/utils/API";
// import { Movie } from "@/utils/Interfaces/Movies";
// import dotenv from 'dotenv';
// import { GetServerSideProps } from "next";

// dotenv.config();

// type Props = {
//   movie: Movie
// } 



// const OneMovie = ({ movie }: Props) => {


// return (
//   <>
//     <div>
//       <h1>{movie.name}</h1>
//       <img src={movie.image} alt={movie.name}/>
//       <div>
//         <h3>Sinopsis</h3>
//         <p>{movie.sinopsis}</p>

//         <p>Score: {movie.score}</p>
//       </div>

//     </div>
//     <h1>soy una pelicula
//     </h1>
//   </>
// );

// }  
// export default OneMovie;


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const {id} = context.params;
//   const movie: Movie = await getMovie(id);
//   return {
//     props: {
//       movie
//     }
//   }
// }


// import { getMovie } from "@/utils/API";
// import { Movie } from "@/utils/Interfaces/Movies";
// import { useEffect, useState } from "react";



//  type Props = {
//      params: {id: string} 
// } 


// export default function OneMovie ( {params}: Props ) {
//   const  [movies, setMovies] = useState<Movie | null>(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       const id = params?.id;
//       const movieData: Movie = await getMovie (id);
//       setMovies(movieData);
//     }
//     fetchMovie()
//   }, [params])

//   if (!movies) {
//     return <div> Loading...</div>;
//   }


//   return (
//     <div>
//       <h1>{movies.name}</h1>
//       <img src={movies.image} alt={movies.name} />
//     <div>

//     <h3>Sinopsis</h3>
//     <p>{movies.sinopsis}</p>
//     </div>
//     <h1>Soy una pelicula</h1>
//     </div>
    
//   )
// }

