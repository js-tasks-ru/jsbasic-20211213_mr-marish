function checkSpam(str) {
  let checkText = str.toUpperCase();
  return checkText.includes("XXX") || checkText.includes("1xBet".toUpperCase());
}
