import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'

describe('Home Page', () => {
  it('should render successfully home page with a header, user profile and a post', () => {
    render(<Home />)

    const header = screen.getByTestId("app-header")
    const profileCard = screen.getByTestId("user-card")
    const posts = screen.queryAllByTestId("post-testid")

    expect(header).toBeInTheDocument()
    expect(profileCard).toBeInTheDocument()
    expect(posts).not.toBeNull()
  })
})
