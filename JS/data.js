const mounth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function getData(data) {
  const day = `${data[8] + data[9]}`
  const index = data[5] + data[6]
  const result = `${day} ${mounth[index - 1]}`
  return result
}

function getTime(data) {
  return `${data[11] + data[12]}:${data[14] + data[15]}`
}

export { getData, getTime }
