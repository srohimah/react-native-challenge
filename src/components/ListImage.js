import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableHighlight } from 'react-native';
import axios from 'axios'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class ListImage extends React.Component {
  constructor(){
    super()
      this.state = {
        content: []
      }
  }
  static navigationOptions = {
    title: 'My Galery',
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
    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.content}
        renderItem={({item}) => (
        <View key={item.id} style={styles.imageList}>
        <Image
          style={{width: 320, height: 320}}
          source={{uri: item.images.standard_resolution.url}}
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
          <View style={styles.icon}>
          </View>
        </View>
          <Text style={styles.caption}>{item.likes.count} likes</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.caption}>{item.user.full_name}</Text>
            <Text>{item.caption.text.substring(0,20)}</Text>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Details', {
                  itemId: item.id,
                });
              }}
              >
              <Text style={{color:'#888'}}>... more</Text>
            </TouchableHighlight>
          </View>
        </View>
        )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageList: {
    backgroundColor: '#eee',
    padding: 20,
    marginBottom: 5,
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
  }
});
