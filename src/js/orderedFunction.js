export default function orderByProps(obj, order) {
  const arr1 = [];
  const arr2 = [];
  order.forEach((prop) => {
    if (prop in obj) arr1.push({ key: prop, value: obj[prop] });
  });

  for (const prop in obj) {
    if (!order.includes(prop)) {
      arr2.push({ key: prop, value: obj[prop] });
    }
  }
  arr2.sort((a, b) => {
    const propA = a.key.toLowerCase();
    const propB = b.key.toLowerCase();
    let result = 0;
    if (propA < propB) result = -1;
    else result = 1;
    return result;
  });
  return arr1.concat(arr2);
}
