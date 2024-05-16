const Backend: string = process.env.URL|| "NOT FOUND";


export async function getData() {
  const data = await fetch(Backend + "/movie");
  const JSONdata = await data.json();
  return JSONdata;
}

// export async function getMovie(id: string) {
//   const data = await fetch(Backend + "/movie/" + id);
//   const JSONdata = await data.json();
//   return JSONdata;
// }

export async function getMovie(id: string) {
  const data = await fetch(Backend + "/movie/" + id);
  const JSONdata = await data.json();
  return JSONdata;
}



export async function getGenres() {
  const data = await fetch(Backend + "/genre");
  const JSONdata = await data.json();
  return JSONdata;
}
