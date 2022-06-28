module.exports = function toReadable(number) {
  let result = '';
  let numLenght = String(number).length;

  function numToStr(a) {
    switch (a) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
      default:
        return "zero";
    }
  }

  function numToStrTwenties(a) {
    switch (a) {
      case 11:
        return "eleven";
      case 12:
        return "twelve";
      case 13:
        return "thirteen";
      case 14:
        return "fourteen";
      case 15:
        return "fifteen";
      case 16:
        return "sixteen";
      case 17:
        return "seventeen";
      case 18:
        return "eighteen";
      case 19:
        return "nineteen";
      case 20:
        return "twenty";
      default:
        return "ten";
    }
  }

  function numToStrDec(a) {
    var x;
    switch (a) {
      case 1:
        return "ten";
      case 2:
        return "twenty";
      case 3:
        return "thirty";
      case 4:
        return "forty";
      case 5:
        return "fifty";
      case 6:
        return "sixty";
      case 7:
        return "seventy";
      case 8:
        return "eighty";
      default:
        return "ninety";
    }
  }

  if (number <= 9) {  //0-9
    result = numToStr(number);
  } else if (number >= 10 && number <= 20) { //10-20
    result = numToStrTwenties(number);
  } else if ((number >= 21 && number <= 99) && (Number(String(number)[1]) == 0)) { // 30- 90
    result = numToStrDec(Number(String(number)[0]));
  } else if (number >= 21 && number <= 99) { // 21- 99
    let f = numToStrDec(Number(String(number)[0]));
    let s = numToStr(Number(String(number)[1]));
    result = `${f} ${s}`;
  } else {

    if (Number(String(number)[1]) == 0 && Number(String(number)[2]) == 0) { // ~100-900
      let h = numToStr(Number(String(number)[0]));
      result = `${h} hundred`;
    } 
    else if (Number(String(number)[2]) == 0) { // ~110-990
      let h = numToStr(Number(String(number)[0]));
      let f = numToStrDec(Number(String(number)[1]));
      result = `${h} hundred ${f}`;
    } 
    else if (Number(String(number)[1]) == 0) //101-909
    {
      let h = numToStr(Number(String(number)[0]));
      let f = numToStr(Number(String(number)[2]));
      result = `${h} hundred ${f}`;
    } 
    else if (Number(String(number)[1]) == 1 || (Number(String(number)[1]) == 2 && Number(String(number)[2]) == 0)) 
    {
      let h = numToStr(Number(String(number)[0]));
      let f = numToStrTwenties(Number(String(number)[1] + String(number)[2])); 
      result = `${h} hundred ${f}`;
    } 
    else 
    {
      let h = numToStr(Number(String(number)[0]));
      let f = numToStrDec(Number(String(number)[1]));
      let s = numToStr(Number(String(number)[2]));
      result = `${h} hundred ${f} ${s}`;
    }

  }

  return result;
}
