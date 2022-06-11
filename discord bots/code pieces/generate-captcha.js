function genCode() {
  let codes = [];
  let string = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%'"; // string with all avaiable letters
  for (let i = 0; i < 6; i++) {
    codes.push(string[Math.floor(Math.random() * string.length)]); // choose random letters
  }
  return codes.join(""); // join al l random letters
}

console.log(genCode()); // log random code in console
