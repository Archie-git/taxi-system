const UtilKey = {
  getRandomKey: () => {
    return `item_${(Math.random() * 8999 + 1000).toFixed(0)}`
  }
}

export default UtilKey
