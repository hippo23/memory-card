const shuffle = (array) => {
  let l = array.length - 1;
  while (l > 0) {
    let ranNum = Math.floor(Math.random() * (l + 1));
    let temp = array[l];
    array[l] = array[ranNum];
    array[ranNum] = temp;

    l--;
  }
  return array;
};

export { shuffle };
