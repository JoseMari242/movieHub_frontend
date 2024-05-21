// src/app/(pages)/new-movie/actions.ts
'use server'

import { Movie } from '@/utils/Interfaces/Movies';
import { revalidatePath } from 'next/cache';

export async function createMovie(movie: Movie) {
  const response = await fetch("http://localhost:4001/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });

  if (!response.ok) {
    throw new Error("Failed to create movie");
  }

  revalidatePath('/movies');
}
