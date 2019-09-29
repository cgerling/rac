const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE ** 2
const FILL_TEMPLATE = '00'

const hours = time => Math.floor(time / SECONDS_IN_HOUR)
const minutes = time => Math.floor(time / SECONDS_IN_MINUTE)
const seconds = time => Math.round(time % SECONDS_IN_MINUTE)

const fill = time => {
  const value = time.toString()

  return FILL_TEMPLATE.substr(value.length) + value
}

export const format = time => {
  const values = [minutes(time), seconds(time)]
  const hour = hours(time)
  if (hour > 0) {
    values.unshift(hour)
  }

  return values.map(fill).join(':')
}
