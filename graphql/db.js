export const people = [
  {
    id: 1,
    name: "yeomc",
    age: 33,
    gender: "male",
  },
  {
    id: 2,
    name: "eomc",
    age: 31,
    gender: "female",
  },
  {
    id: 3,
    name: "kimc",
    age: 30,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
