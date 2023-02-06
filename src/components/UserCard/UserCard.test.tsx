import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { UserCard } from '.'
import { mock } from './UserCard.misc'

describe('<UserCard />', () => {
  it('should render UserCard successfully', () => {
    render(<UserCard {...mock} />)

    const userCard = screen.getByRole('article')
    const name = screen.getByTestId('user-card-name')
    const bio = screen.getByTestId('user-card-bio')
    const cover = screen.getByTestId('user-card-cover') as HTMLImageElement
    const picture = screen.getByTestId('user-card-picture')
    const profile = screen.getByTestId('user-card-profileUrl')

    expect(userCard).toBeInTheDocument()
    expect(name.innerHTML).toBe(mock.name)
    expect(bio.innerHTML).toBe(mock.bio)
    expect(cover.src).toBe(mock.coverUrl)
    expect(picture).toBeInTheDocument()
    expect(profile).toBeInTheDocument()
  })
})
