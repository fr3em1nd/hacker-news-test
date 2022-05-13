

export interface NewsItem {
  news: string,
  by: string,
  score: number,
  time: number,
  title: string,
  authorKarma: number,
  url: string
}
export interface Author {
  about: string,
  created: number,
  delay: number,
  id: string,
  karma: number,
  submitted: number[]
}
 