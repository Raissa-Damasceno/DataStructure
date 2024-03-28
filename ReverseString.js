const str = ["h","e","l","l","o"];

const reverteArray = (arr) => {
  let startIndex = 0;
  let endIndex = str.length - 1;

  while (startIndex <= endIndex) {
    console.log([str[startIndex], str[endIndex]] = [str[endIndex], str[startIndex]])

    startIndex++;
    endIndex--;
  }

  console.log(str);
};

reverteArray(str);
