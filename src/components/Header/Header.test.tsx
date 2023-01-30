import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import { Header } from './Header'

const onLogout = vi.fn()

describe('<Header />', () => {
  it('should render the header successfully', () => {
    render(<Header onLogout={onLogout} />)

    const header = screen.getByRole('heading')

    expect(header).toBeInTheDocument()
  })

  it('should render a logo with side text', () => {
    render(<Header onLogout={onLogout} />)

    const image = screen.getByTestId('logo')
    const text = screen.getByText('Ignite Feed').innerHTML

    expect(image).toBeInTheDocument()
    expect(text).toBe('Ignite Feed')
  })

  it('should render a button logout with text', () => {
    render(<Header onLogout={onLogout} />)

    const logoutButton = screen.getByRole('button')
    const buttonText = logoutButton.innerHTML

    expect(logoutButton).toBeInTheDocument()
    expect(buttonText).toBe('Sair')
  })

  it('should check if the button has callable function', () => {
    render(<Header onLogout={onLogout} />)

    const logoutButton = screen.getByRole('button')
    
    fireEvent.click(logoutButton);

    expect(onLogout).toHaveBeenCalledTimes(1)
  })
})
