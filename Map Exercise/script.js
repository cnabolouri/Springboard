const users = [
  { firstName: "John", lastName: "Doe", points: 120 },
  { firstName: "Jane", lastName: "Smith", points: 80 },
  { firstName: "Alice", lastName: "Johnson", points: 200 },
];

const updatedUsers = users.map((user) => {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    membershipStatus: user.points > 100 ? "Premium" : "Standard",
  };
});

console.log(updatedUsers);
