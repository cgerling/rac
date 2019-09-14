export const evaluate = value => {
  if (typeof value === 'function') {
    return value()
  }

  return value
}
