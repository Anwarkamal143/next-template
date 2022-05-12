import { ICatCard } from './CatCard'

const base: ICatCard = {
  author: 'Anwar',
  body: 'some dummy text to see',
  tag: 'tag 2',
  time: Date().toString(),
  title: 'Cat 1',
}
export const mockCatCardProps = {
  base,
}
