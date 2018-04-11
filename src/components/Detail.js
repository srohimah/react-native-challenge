import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment'


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail Image',
  }
  constructor(){
    super()
      this.state = {
        content: []
      }
  }
  componentDidMount(){
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=1286359828.1677ed0.0558626316784be58818b75dfc95743a')
    .then(resp=>{
      this.setState(()=>{
        return {
          content: resp.data.data
        }
      })
    })
    .catch(err=>console.error(err))
  }
  render() {
    const { params } = this.props.navigation.state;
    const dataDetail = this.state.content.filter(res=>res.id === params.itemId)
     
    return (
      <View style={styles.container}>
      {
        dataDetail.map(cont=>{
          return <View key={cont.id} style={styles.imageList}>
        <Image
          style={{width: 320, height: 320}}
          source={{uri: cont.images.standard_resolution.url}}
        />
        <View style={styles.iconWrapper}>
          <View style={styles.icon}>
            <FontAwesome name='heart-o' size={27} color='#777' />
          </View>
          <View style={styles.icon}>
            <FontAwesome name='comment-o' size={27} color='#777' />
          </View>
          <View style={styles.icon}>
            <FontAwesome name='send-o' size={27} color='#777' />
          </View>
        </View>
          <Text style={styles.caption}>{cont.likes.count} likes</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.caption}>{cont.user.full_name}</Text>
            <Text>{cont.caption.text}</Text>
          </View>
          <Text style={styles.comment}>View all {cont.comments.count} comments</Text>
          <Text style={styles.date}>{moment(Number(cont.created_time)*1000).format('LL')}</Text>
        </View>
        })
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  imageList: {
    backgroundColor: '#eee',
    padding: 20,
  },
  iconWrapper: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  textWrapper: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  icon: {
    paddingTop: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  caption: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  comment: {
    color:'#888'
  },
  date: {
    color:'#888',
    fontSize: 11,
  }
});
