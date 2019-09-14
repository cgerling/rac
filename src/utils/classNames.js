import classNames from 'classnames'

export { default as cn } from 'classnames'


export const mod = (base, modifiers) => {
  const mods = Object.entries(modifiers).reduce((classNames, [name, active]) => {
    const className = active && `${base}_${name}`
    classNames.push(className)

    return classNames
  }, [])

  return [base, ...mods]
}

export default (base, modifiers, ...rest) => classNames(mod(base, modifiers), rest)
