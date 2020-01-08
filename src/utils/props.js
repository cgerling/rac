export const map = (value, fn) => {
  if (!fn) {
    return value
  }

  return fn(value)
}

export const evaluate = value => {
  if (typeof value === 'function') {
    return value()
  }

  return value
}

export default (value, fn) => map(evaluate(value), fn)
