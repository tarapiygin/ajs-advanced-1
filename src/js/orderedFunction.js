export default function orderByProps(obj, order) {
  const arr1 = [], arr2 = [];
  order.forEach(prop => {
    if (prop in obj) arr1.push({ key: prop, value: obj[prop] });
  });

  for (let prop in obj) {
    if (!order.includes(prop)) {
      arr2.push({ key: prop, value: obj[prop] })
    }
  }
  arr2.sort((a, b) => {
    const propA = a.key.toLowerCase(), propB = b.key.toLowerCase();
    if (propA < propB) return -1;
    else return 1;
  });
  return arr1.concat(arr2);
}