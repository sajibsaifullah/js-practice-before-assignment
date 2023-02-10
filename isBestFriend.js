function isBestFriend(friends) {
  //   console.log(friends[1].friend);
  if (
    friends[0].name === friends[1].friend &&
    friends[0].friend === friends[1].name
  ) {
    return true;
  } else {
    return false;
  }
}
const bestFriend = [
  { name: "abul", friend: "babul" },
  { name: "babul", friend: "abul" }
];
const result = isBestFriend(bestFriend);
console.log(result);

/* function isBestFriend(objectOne, objectTwo) {
  if (
    objectOne.name === objectTwo.friend &&
    objectOne.friend === objectTwo.name
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isBestFriend({ name: "doe", friend: "alex" }, { name: "john", friend: "doe" })
); */
