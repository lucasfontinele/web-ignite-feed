import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ProfilePicture, TEST_ID } from '.'

describe('<ProfilePicture />', () => {
  it('should render profile picture successfully', () => {
    const img = "https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg";
    render(<ProfilePicture src={img} />)

    const expectedImg = screen.queryByTestId(TEST_ID) as HTMLImageElement

    expect(expectedImg).toBeInTheDocument()
    expect(expectedImg.src).toBe(img)
  })
})
