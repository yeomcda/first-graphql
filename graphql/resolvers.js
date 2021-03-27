import { getMovies, getById } from "./db";

const resovers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
};

export default resovers;
