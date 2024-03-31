const phoneRegex =
  /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return phoneRegex.test(str);
}

module.exports = {
  telephoneCheck,
};

// function telephoneCheck(str) {

//   const onlyIntegers = str.split('').filter(s => s);

//   console.log(str, onlyIntegers);

//   if (onlyIntegers.length === 10) {
//     return true;
//   } else if (onlyIntegers.length === 11) {
//     return onlyIntegers[0] === 1 ? true : false;
//   }

//   return false;
// }

// telephoneCheck("555-555-5555");
