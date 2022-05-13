import LoggingService from '@hackernews/utils/logging/LoggingService';

import { HACKER_NEWS_ENDPOINT } from '@hackernews/constants/Config';
import axios from 'axios';
const logError = (messageRoot: string, error: any) => {
  LoggingService.error(
    `NEWS DATA on ${messageRoot}: error: ${error.message}`,
  );
};

export function getTopStories(): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      var config = {
        method: 'get',
        url: HACKER_NEWS_ENDPOINT + '/topstories.json',
        headers: {
          'Content-Type': 'application/json'
        },
      };
      axios(config)
        .then(function (response: { data: any; }) {
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
          logError('error', error);
        });
    } catch (e) {
      logError('error', e);
      reject(e);
    }
  });
}

export function getTopStoriesContent(content: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      var config = {
        method: 'get',
        url: HACKER_NEWS_ENDPOINT + `/item/${content}.json`,
        headers: {
          'Content-Type': 'application/json'
        },
      };
      axios(config)
        .then(function (response: { data: any; }) {
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
          logError('error', error);
        });
    } catch (e) {
      logError('error', e);
      reject(e);
    }
  });
}
export function getAuthorKarma(author: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      var config = {
        method: 'get',
        url: HACKER_NEWS_ENDPOINT + `/user/${author}.json`,
        headers: {
          'Content-Type': 'application/json'
        },
      };
      axios(config)
        .then(function (response: { data: any; }) {
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
          logError('error', error);
        });
    } catch (e) {
      logError('error', e);
      reject(e);
    }
  });
}
