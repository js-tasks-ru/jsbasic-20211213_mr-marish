function showSalary(users, age) {
  let result = users.filter(function (item) {
    return item.age <= age;
  });
  let newArr = result.map(function (item) {
    return item.name + ", " + item.balance;
  });

  return newArr.join("\n");
}
