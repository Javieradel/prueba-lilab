export interface user {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture: string,
    email?: string
}
interface location {
    street: string,
    city: string,
    state: string,
    country: string,
    timezone: string,
}
export interface userFull {
    user: user,
    gender: string,
    email: string,
    dateOfBirth: string,
    registerDate: string,
    phone: string,
    picture: string,
    location: location,
}
export interface Post {
  id: string,
  text: string,
  image: string,
  likes: string,
  link: string,
  tags: string[],
  publishDate: string,
  owner: user,
  liked?: boolean
}
export interface newComment{
  message: string,
  owner: string,
  post: string,
  }
export interface Comment {
  id: string,
  message: string,
  owner: user,
  post: string,
  publishDate: string,
}
export interface response {
  data: [],
  total: number,
  page: number,
  limit: number,
}