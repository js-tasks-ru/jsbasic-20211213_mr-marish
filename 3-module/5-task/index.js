function getMinMax(str) {
  let arr = str
    .split(" ")
    .map(function (item) {
      return Number(item);
    })
    .filter((item) => !isNaN(item));

  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;

  for (let item of arr) {
    if (item >= max) {
      max = item;
    }
    if (item <= min) {
      min = item;
    }
  }
  return { min: min, max: max };
}
