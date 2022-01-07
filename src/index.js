function reverse (number) {
  const strNumber = number.toString(); 
  let reversed = "";

  for (let i = 0; i < strNumber.length; i++) {
    let rIndex = (strNumber.length - i) - 1;

    if (strNumber[rIndex] !== "-") {
  	  reversed += strNumber[rIndex];
    }
  }
  return Number(reversed);
}

module.exports = reverse;
