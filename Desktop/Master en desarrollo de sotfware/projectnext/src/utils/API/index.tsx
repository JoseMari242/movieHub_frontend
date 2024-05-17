import { Movie } from "../Interfaces/Movies";
import dotenv from "dotenv";

dotenv.config();

const URL: string = process.env.URL|| "ERROR";


export async function getData() {
  const data = await fetch(URL + "/movie");
  const JSONdata = await data.json();
  return JSONdata;
}


export async function getMovie(id: string) {
  console.log("URL para obtener la película:", URL);
  const data = await fetch(URL + "/movie" + id)
  // const data = await fetch(Backend + `/movie/${id}`)
  const JSONdata = await data.json();
  return JSONdata;
}


export async function getGenres() {
  const data = await fetch(URL + "/genre");
  const JSONdata = await data.json();
  return JSONdata;
}
