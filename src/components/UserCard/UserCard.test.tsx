import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { UserCard, UserCardProps } from '.'

describe('<UserCard />', () => {
  it('should render UserCard successfully', () => {
    const mock: UserCardProps = {
      name: 'John Doe',
      bio: 'Software Engineer',
      coverUrl: 'https://images.unsplash.com/photo-1595254482167-387aedc271b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      pictureUrl: 'https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg',
      profileUrl: 'https://github.com/john-doe',
    }

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
