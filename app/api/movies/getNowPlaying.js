// return now playing movie search
export default async function GetNowPlaying() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRhOTY1NGRlYmVhNDI2Y2UwMDg2MDQwYzBlNThmZiIsInN1YiI6IjY2NzE4YzQ4ZjNmODZjMGYwZDNmMGU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqnjOW-CaBf_Rjq3q1Y55mJ-T-Tru9VlM2-rOyuJuTo'
    }
  };

  const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

