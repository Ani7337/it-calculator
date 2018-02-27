const sumInt = (a, b) => {
  return Math.round(a + b);
}

const subtractionInt = (a, b) => {
  return a - b;
}

const divisionInt = (a, b) => {
  if (a !== 0){
    return a / b;
  }
  return error;
}

const multiplicationInt = (a, b) => {
  return a * b;
}

const power = (a, pow) => {
  if (pow === 0){
    return 1;
  }
  return (a * power(a, pow - 1));
}

const root = (a, pow) => {
  if (pow <= 0 )
  return error;
}
return (a / root(a, pow - 1));

const absolute = (a) => {
  if ( a >= 0) {
    return a;
  }
  return (-a);
}

const mod = (a, b) => {
  if ()
}
const log = (a, base) => {

}
const flipSign = (a) => {

}
const sin = (a) => {

}
const cos = (a) => {

}
const percent = (a,b) => {

}
const ntegral = (func, a, b, precision) => {

}
