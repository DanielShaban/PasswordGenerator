import { SetStateAction } from 'react';

function hashValidator(
  generatedhash: string,
  setHash: { (value: SetStateAction<string>): void; (arg0: string): void },
) {
  let isThereLowerCase = false;
  let isThereSpecialChartsList = false;
  let isThereNumber = false;
  let isThereUpperCase = false;
  let specialChartsList = '!"#$%&()*+-.:?@[]^_`{|}~';
  const newHash = [...generatedhash.slice(12, 25)]
    //We need just 12-13 length so we will use only part of our hash
    .map((v, i) => {
      if (i % 2) {
        //hash is not contained LowerCase or Special Charts that's why we add some of them
        if (!isNaN(v)) {
          isThereSpecialChartsList = true;
          return specialChartsList[v];
          //we add random SpecialChart from index 0 to 9
        } else {
          isThereLowerCase = true;
          return v.toLowerCase();
        }
      }
      if (!isNaN(v)) {
        isThereNumber = true;
      } else {
        isThereUpperCase = true;
      }
      //we should be shure that oure password has at least one LowerCase, Number, UpperCase Special Chart
      return v;
    })
    .join('');
  if (
    isThereLowerCase &&
    isThereSpecialChartsList &&
    isThereNumber &&
    isThereUpperCase
  ) {
    return setHash(newHash);
  }
  //most likely

  if (!isThereLowerCase) {
    return setHash('x' + newHash);
  }
  if (!isThereSpecialChartsList) {
    setHash('$' + newHash);
  }
  if (!isThereNumber) {
    setHash('9' + newHash);
  }
  if (!isThereUpperCase) {
    setHash('Y' + newHash);
  }
}

export default hashValidator;
