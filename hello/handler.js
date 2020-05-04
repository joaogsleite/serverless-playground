module.exports.execute = async (event) => {
  console.log('event', event)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    value: 1
  }
}
