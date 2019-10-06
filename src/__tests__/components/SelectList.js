import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import SelectList from '../../components/SelectList/SelectList'

test('renders', () => {
  const {getByTestId} = render(
    <SelectList name="SelectList" data-testid="select-list">
      <SelectList.Item value={1}>Item #1</SelectList.Item>
      <SelectList.Item value={2}>Item #2</SelectList.Item>
      <SelectList.Item value={3}>Item #3</SelectList.Item>
      <SelectList.Item value={4}>Item #4</SelectList.Item>
    </SelectList>,
  )

  const selectList = getByTestId('select-list')
  const title = getByTestId('title')
  const list = getByTestId('list')

  expect(selectList).toBeDefined()

  expect(title).toBeDefined()
  expect(title.textContent).toEqual('SelectList')

  expect(list.children).toHaveLength(4)
})

test('render item throws when used outside of SelectList', () => {
  expect(() => {
    render(<SelectList.Item />)
  }).toThrow()
})

test('fires onChange when item is clicked', () => {
  const onChange = jest.fn()
  const {getByText} = render(
    <SelectList onChange={onChange}>
      <SelectList.Item value={1}>Item #1</SelectList.Item>
      <SelectList.Item value={2}>Item #2</SelectList.Item>
      <SelectList.Item value={3}>Item #3</SelectList.Item>
      <SelectList.Item value={4}>Item #4</SelectList.Item>
    </SelectList>,
  )

  const item = getByText('Item #2')

  fireEvent.click(item, {button: 0})

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith(2)
})

test('do not fire onChange when list is disabled', () => {
  const onChange = jest.fn()
  const {getByText} = render(
    <SelectList disabled onChange={onChange}>
      <SelectList.Item value={1}>Item #1</SelectList.Item>
      <SelectList.Item value={2}>Item #2</SelectList.Item>
      <SelectList.Item value={3}>Item #3</SelectList.Item>
      <SelectList.Item value={4}>Item #4</SelectList.Item>
    </SelectList>,
  )

  const item = getByText('Item #2')

  fireEvent.click(item, {button: 0})

  expect(onChange).not.toHaveBeenCalled()
})

test('do not fire onChange when item is disabled', () => {
  const onChange = jest.fn()
  const {getByText} = render(
    <SelectList onChange={onChange}>
      <SelectList.Item value={1}>Item #1</SelectList.Item>
      <SelectList.Item disabled value={2}>
        Item #2
      </SelectList.Item>
      <SelectList.Item value={3}>Item #3</SelectList.Item>
      <SelectList.Item value={4}>Item #4</SelectList.Item>
    </SelectList>,
  )

  const item = getByText('Item #2')

  fireEvent.click(item, {button: 0})

  expect(onChange).not.toHaveBeenCalled()
})

test('do not fire onChange when item is already selected', () => {
  const onChange = jest.fn()
  const {getByText} = render(
    <SelectList onChange={onChange}>
      <SelectList.Item value={1}>Item #1</SelectList.Item>
      <SelectList.Item value={2}>Item #2</SelectList.Item>
      <SelectList.Item value={3}>Item #3</SelectList.Item>
      <SelectList.Item value={4}>Item #4</SelectList.Item>
    </SelectList>,
  )

  const item = getByText('Item #2')

  fireEvent.click(item, {button: 0})

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith(2)

  fireEvent.click(item, {button: 0})
  expect(onChange).not.toHaveBeenCalledTimes(2)
})
