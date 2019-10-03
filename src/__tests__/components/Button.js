import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Button from '../../components/Button/Button'

test('renders', () => {
  const {getByText} = render(<Button>Button</Button>)

  const button = getByText('Button')

  expect(button).toBeDefined()
  expect(button.innerHTML).toEqual('Button')
})

test('fire onClick', () => {
  const onClick = jest.fn()

  const {getByText} = render(<Button onClick={onClick}>Button</Button>)

  const button = getByText('Button')

  fireEvent.click(button)

  expect(onClick).toHaveBeenCalledTimes(1)
})
