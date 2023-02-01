import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { FaEdit } from 'react-icons/fa'

import { Button, StyleVariant } from '.'
import styles from './Button.module.css'

describe('<Button />', () => {
  it('should render button successfully with default variant', () => {
    render(<Button title="Nice button" />)

    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(styles.contained)
  })

  it('should render button with a text', () => {
    const customText = 'Edit your profile'

    render(<Button title={customText} />)

    const buttonText = screen.getByText(customText).innerHTML;

    expect(buttonText).toBe(customText)
  })

  it('should render button icon and a custom text', () => {
    const customText = 'Edit your profile'

    render(<Button icon={<FaEdit data-testid="fa-edit-icon" size={20} color="#00B37E" />} title={customText} />)

    const icon = screen.getByTestId('fa-edit-icon')
    const text = screen.getByText(customText).innerHTML

    expect(icon).toBeInTheDocument()
    expect(text).toBe(customText)
  })

  it('should render button with outlined class', () => {
    render(<Button title="Test" variant={StyleVariant.outlined} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveClass(styles.outlined)
  })
})
