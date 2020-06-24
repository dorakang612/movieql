const Kangmin = {
  name: "Kangmin",
  age: 26,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => Kangmin,
  },
};

export default resolvers;
