function makeFriendsList(friends) {

  let list = document.createElement('ul');

  for (let key in friends) {
    friend = "<li>" + friends[key].firstName + " " + friends[key].lastName + "</li>";
    list.innerHTML += friend;
  }

  return list;
}
