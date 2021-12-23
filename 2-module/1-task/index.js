function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    let rightPart = salaries[key];
    if (isValidSalary(rightPart)) {
      sum += rightPart;
    }
  }
  return sum;
}

function isValidSalary(value) {
  return typeof value === "number" && isFinite(value);
}
