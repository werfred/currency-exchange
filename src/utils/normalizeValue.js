const normalizeValue = (value) => {
  value = value.toString().replace(/,/g, '.')
  value = value.replace(/[^0-9.]/g, '')

  let newValue = ''
  if (value.match(/\./) !== null) {
    let dots = 0

    for (let i = 0; i < value.length; i++) {
      if (value[i] === '.') {
        dots++
        if (dots > 1) {
          newValue += ''
        } else {
          newValue += value[i]
        }
      } else {
        newValue += value[i]
      }
    }
    //now newValue contains only one '.' in it, the rest have been replaced with empty string

    //checks if the last char in a string is a '.', if true, cuts it off
    //else - leaves two chars after '.'
    if (newValue.indexOf('.') === newValue.length - 1) {
      return newValue.substring(0, newValue.indexOf('.'))
    } else {
      return parseFloat(newValue).toFixed(2)
    }
  } else {
    return value
  }
}

export {normalizeValue}
