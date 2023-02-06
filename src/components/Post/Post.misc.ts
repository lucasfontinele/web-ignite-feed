import { ReactNode } from 'react'

export type Author = {
  profilePicture: string
  name: string
  bio: string
}

export type PostProps = {
  author: Author
  createdAt: string
  tags: string[]
  content: ReactNode
}

export const POST_MOCK: PostProps = {
  author: {
    name: 'Jane Cooper',
    bio: 'UX Designer',
    profilePicture: 'https://randomuser.me/api/portraits/med/women/81.jpg',
  },
  content: `
    Fala galeraa 👋

    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
  `,
  tags: ['#novoprojeto', '#nlw', '#rocketseat'],
  createdAt: 'Publicado há 1h'
}

export const TEST_IDS = {
  POST_COMPONENT_CONTAINER: 'POST_COMPONENT_CONTAINER',
  POST_AUTHOR_NAME: 'POST_AUTHOR_NAME',
  POST_AUTHOR_BIO: 'POST_AUTHOR_BIO',
  POST_TAGS: 'POST_TAGS',
  POST_CREATED_DATE: 'POST_CREATED_DATE',
  POST_CONTENT: 'POST_CONTENT',
}
