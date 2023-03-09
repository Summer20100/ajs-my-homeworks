export function orderByProps(obj, [key1, key2]) {
  const firstArr = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === key1 || prop === key2) {
        firstArr.push({ key: prop, value: obj[prop] });
      }
    }
  }

  const secondArr = Object.entries(obj).sort();
  secondArr.forEach((el) => firstArr.push({ key: el[0], value: el[1] }));

  const table = {};
  const res = firstArr.filter(({ key }) => (!table[key] && (table[key] = 1)));

  return res;
}

export function attackOPtions(obj) {
  const arr = [];
  const { special } = obj;
  special.forEach((item) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
