export interface Movie {
    id: number,
    name: string,
    image: string,
    score: number,
    genres:  Genre[],
    sinopsis: string
}

export interface MovieGenre {
    movieId: number;
    genreId: number;
}

export interface Genre {
    id: number;
    name: string;
    movieId: number;
    genreId: number;
}
