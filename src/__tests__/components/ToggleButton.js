import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ToggleButton from '../../components/ToggleButton/ToggleButton'

describe('<ToggleButton />', () => {
  test('renders', () => {
    const {getByText} = render(
      <ToggleButton>{() => 'ToggleButton'}</ToggleButton>,
    )

    const toggle = getByText('ToggleButton')

    expect(toggle).toBeDefined()
    expect(toggle.innerHTML).toEqual('ToggleButton')
  })

  test('fire onChange', () => {
    const onChange = jest.fn()
    const {getByTestId} = render(
      <ToggleButton data-testid="button" onChange={onChange}>
        {() => 'ToggleButton'}
      </ToggleButton>,
    )

    const toggle = getByTestId('button')

    fireEvent.click(toggle)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(true)

    fireEvent.click(toggle)

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith(false)
  })

  test('sets custom value', () => {
    const {getByTestId} = render(
      <ToggleButton data-testid="button" value={true}>
        {enabled => (enabled ? 'Enabled' : 'Disabled')}
      </ToggleButton>,
    )

    const toggle = getByTestId('button')

    expect(toggle).toBeDefined()
    expect(toggle.innerHTML).toEqual('Enabled')
  })
})
