function namify(users) {
  namesArray = [];

  for (let key in users) {
    namesArray.push(users[key].name);
  }

  return namesArray;
}