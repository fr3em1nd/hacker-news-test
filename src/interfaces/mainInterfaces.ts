

export interface NewsItem {
  news: string,
  by: string,
  score: number,
  time: number,
  title: string,
}


export interface TopNews {
  news: NewsItem[];
}