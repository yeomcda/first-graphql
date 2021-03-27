const movies = [
  {
    id: 1,
    name: "영화 1",
    score: 4,
  },
  {
    id: 2,
    name: "영화 2",
    score: 3,
  },
  {
    id: 3,
    name: "영화 3",
    score: 5,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
