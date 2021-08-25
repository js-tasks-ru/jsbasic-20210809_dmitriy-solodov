function showSalary(users, age) {

  let youngUsers = '';

  for (let key of users) {
    if (key.age <= age) {
      youngUsers += key.name + ', ' + key.balance + '\n';
    }
  }

  youngUsers = youngUsers.slice(0, (youngUsers.length - 1));
  return youngUsers;
}
