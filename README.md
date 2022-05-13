
# Solomon Testing

## Technology used:
- redux saga
- redux
- expo 
- typescripts





## Working Demo:

To test this working app, you can use Expo.io or go to this link: [https://expo.dev/@fr3em1nd/hacker-news](https://expo.dev/@fr3em1nd/hacker-news)

If you have Expo on your computer, you can scan this expo QR Code:
![Expo QR](/readme_files/chrome_88doxdvgLp.png "Expo QR").
## sample output

![Sample Output](/readme_files/sample.jpg "Sample Output").


## Hacker News with Redux State

Create a React Native app that displays 10 randomized Hacker News top stories using the Hacker News API (https://github.com/HackerNews/API).

The stories must be listed in ascending order based on the stories score.

**The UI must include:**

- Story title
   
- Story URL
   
- Story timestamp
   
- Story score
   
-  Author id
   
- Author karma score  

Hint: You’ll be needing the following endpoints:

- Top stories: https://hacker-news.firebaseio.com/v0/topstories.json
- Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json
- User: https://hacker-news.firebaseio.com/v0/user/${id}.json

Requirements:

- Use latest version of React Native

- Application must be written in TypeScript

**Bonus Points:**

- Make sure the data is stored and fetched through a global state (It's ok to use 3rd party dependencies)