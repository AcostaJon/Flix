// return popular movie search
export default async function GetTvTrailer(id) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRhOTY1NGRlYmVhNDI2Y2UwMDg2MDQwYzBlNThmZiIsIm5iZiI6MTcyMzA1MDYxNy43OTc5NjcsInN1YiI6IjY2NzE4YzQ4ZjNmODZjMGYwZDNmMGU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJyKUCjEShOivIbrQDWlbmpJ3keg5QSD5LbyJ4xlQkA'
        }
      };
  
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  
    return await res.json()
  }
  
  
  
  