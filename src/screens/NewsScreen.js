import React, { useEffect, useState } from 'react';
 import { View, Text, FlatList } from 'react-native';

  export default function NewsScreen() { 
    const [news, setNews] = useState([]); 
    useEffect(() => { 
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-05-19&sortBy=publishedAt&apiKey=ac9a6111e98341a09cae37c2e87243ce') //ac9a6111e98341a09cae37c2e87243ce
     .then(response => response.json())
      .then(data => setNews(data.articles)) 
      .catch(error => console.error(error));
     }, []); 
     return (
         <View> 
            <FlatList
         data={news}
         keyExtractor={(item) => item.url} 
         renderItem={({ item }) => ( 
         <View>
         <Text>{item.title}</Text> 
         <Text>{item.description}</Text> 
         </View> 
         )}
         /> 
         </View>
          ); 
      }