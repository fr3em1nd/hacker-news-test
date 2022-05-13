import {
  KeyboardAvoidingView,
  Platform,
  Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  mainNews
} from '@hackernews/redux/selectors/News';
import { NewsItem } from '@hackernews/interfaces/mainInterfaces';
import { useEffect } from 'react';
import { fetchTopNews } from '@hackernews/redux/actions/News';
export const NewScreen = () => {
  const dispatch = useDispatch();
  const newsItems: NewsItem[] = useSelector(mainNews);

  useEffect(() => {
    dispatch(fetchTopNews());
  }, [dispatch]); // fetch news

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      behavior={Platform.OS === "ios" ? "position" : "height"}>
      <Text>News screen here</Text>
    </KeyboardAvoidingView>
  );
}


