import {
  Text,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  mainNews
} from '@hackernews/redux/selectors/News';
import { NewsItem } from '@hackernews/interfaces/mainInterfaces';
import React, { useEffect } from 'react';
import { fetchTopNews } from '@hackernews/redux/actions/News';
import { ScrollView } from 'react-native-gesture-handler';
export const NewScreen = () => {
  const dispatch = useDispatch();
  const newsItems: NewsItem[] = useSelector(mainNews);

  useEffect(() => {
    dispatch(fetchTopNews());
  }, [dispatch]); // fetch news

  const newsItemsComp = () => {
    let listNews = newsItems.map((news) => <NewsItem news={news} />)
    return listNews
  }
  const NewsItem = (props: { news: NewsItem }) => {
    return (
      <View style={{ paddingTop: 10 }}>
        <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>
          Title: {props.news.title}

        </Text>

        <Text style={{fontSize:10,color:'blue'}}>Url: {props.news.url}</Text>
        <Text>Score: {props.news.score}</Text>
        <Text>Author: {props.news.by}</Text>
        <Text>Author Karma: {props.news.authorKarma}</Text>
        <Text>Posted On: {props.news.time}</Text>
<Text>__________________________</Text>
      </View>
    )
  }
  return (
    <ScrollView

      style={{ padding: 20,marginBottom:0 }}
    >
      <View>
        {[...newsItemsComp()]}
      </View>




    </ScrollView>
  );
}


