const people = [
  {
    name: "Alex",
    city: "Kyiv",
  },
  {
    name: "Ivan",
    city: "Kyiv",
  },
  {
    name: "Joe",
    city: "New York",
  },
  {
    name: "Johan",
    city: "Berlin",
  },
];

const groupByCity = (array) => {
  return array.reduce((acc, { city, name }) => {
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(name);
    return acc;
  }, {});
};

console.log(groupByCity(people));
