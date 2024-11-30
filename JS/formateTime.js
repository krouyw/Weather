function formatedTimes(time) {
  const unixTime = time
  const data = new Date(unixTime * 1000)

  const formatedTime = data.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
  return formatedTime
}

export { formatedTimes }
