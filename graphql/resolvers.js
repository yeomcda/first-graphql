import { people, getById } from "./db";

const resovers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

export default resovers;
