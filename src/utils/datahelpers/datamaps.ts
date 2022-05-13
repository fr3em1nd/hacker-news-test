import { NewsItem } from '@hackernews/interfaces/mainInterfaces';

export const mapNewsItem = (params: any): NewsItem => {
 

  if (params) {
    return {
      news: params.news || '',
      by: params.by || '',
      score: params.score || '',
      time: params.time || '',
      title: params.title || '',
      url: params.url || '',
      authorKarma: params.authorKarma || ''
    }
  } else {
    return {
      news: '',
      by: '',
      score: 0,
      time: 0,
      title: '',
      authorKarma: 0,
      url: ''
    };
  }
};
