import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Post } from '.'
import { POST_MOCK, TEST_IDS } from './Post.misc'
import { TEST_ID as PROFILE_PIC_TEST_ID } from '../ProfilePicture'

describe('<Post />', () => {
  it('should render a post from a mocked data', () => {
    render(<Post {...POST_MOCK} />)

    const { author } = POST_MOCK

    const authorPicture = screen.getByTestId(PROFILE_PIC_TEST_ID)
    const authorName = screen.getByTestId(TEST_IDS.POST_AUTHOR_NAME)
    const authorBio = screen.getByTestId(TEST_IDS.POST_AUTHOR_BIO)
    const postTags = screen.getByTestId(TEST_IDS.POST_TAGS)
    const postCreatedDate = screen.getByTestId(TEST_IDS.POST_CREATED_DATE)
    const postContent = screen.getByTestId(TEST_IDS.POST_CONTENT)

    expect(authorPicture).toBeInTheDocument()
    expect(authorName.innerHTML).toBe(author.name)
    expect(authorBio.innerHTML).toBe(author.bio)
    expect(postTags).toBeInTheDocument()
    expect(postCreatedDate.innerHTML).toBe(POST_MOCK.createdAt)
    expect(postContent).toBeInTheDocument()
  })
})
