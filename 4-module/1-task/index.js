function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  let users = friends
    .map((item) => item.firstName + " " + item.lastName)
    .map((item) => {
      let li = document.createElement("li");
      li.innerHTML = item;
      return li;
    });

  users.forEach((item) => {
    ul.appendChild(item);
  });
  return ul;

  // console.log(users);
  //   console.log(ul)
}
