const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const repeatArray = (arr, repetitions) => {
  const res = [];
  for (let i = 0; i < repetitions; i++) {
    res.push(...arr);
  }
  return res;
};

export const generateValues = (howMany, repetitions, valuesLib) => {
  let values = shuffle(Object.values(valuesLib));
  values = values.slice(0, howMany);
  values = repeatArray(values, repetitions);
  shuffle(values);
  return values;
};