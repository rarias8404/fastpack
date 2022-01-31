export const packItems = (items, weight = 10) => {
  let result = []
  let values = items.map(item => parseInt(item, 10))
  values.sort().reverse();
  let box = [values[0]]
  let total = values[0];
  values.splice(0, 1)
  while (total < weight) {
    //should be find the best candidate findBestCandidate()
    let index = values.findIndex(el => el + total <= weight)
    if (index !== -1) {
      box.push(values[index])
      total = box.reduce((a, b) => a + b, 0)
      values.splice(index, 1)
    } else {
      total = weight
    }
  }
  result.push(box)
  if (values.length > 0) {
    result = result.concat(packItems(values, weight))
  }
  return result
}

const findBestCandidate = () => {

}