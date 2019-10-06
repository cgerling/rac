import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import TimeJump from '../../components/TimeJump/TimeJump'

describe('<TimeJump.Forward />', () => {
  test('renders', () => {
    const {container} = render(<TimeJump.Forward />)

    const button = container.firstChild
    expect(button).toBeDefined()
  })

  test('fires onClick', () => {
    const onClick = jest.fn()
    const {container} = render(<TimeJump.Forward time={10} onClick={onClick} />)

    const button = container.firstChild

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(10)
  })
})

describe('<TimeJump.Backward />', () => {
  test('renders', () => {
    const {container} = render(<TimeJump.Backward />)

    const button = container.firstChild
    expect(button).toBeDefined()
  })

  test('fires onClick', () => {
    const onClick = jest.fn()
    const {container} = render(
      <TimeJump.Backward time={10} onClick={onClick} />,
    )

    const button = container.firstChild

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(-10)
  })
})
