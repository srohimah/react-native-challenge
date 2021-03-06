import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation'

class ListImage extends React.Component {
  constructor(){
    super()
      this.state = {
        content: []
      }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View key={this.props.data.id} style={styles.imageList}>
        <Image
          style={{width: 320, height: 320}}
          source={{uri: this.props.data.images.standard_resolution.url}}
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
          <Text style={styles.caption}>{this.props.data.likes.count} likes</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.caption}>{this.props.data.user.full_name}</Text>
            <Text>{this.props.data.caption.text.substring(0,20)}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Details', {
                  itemId: this.props.data.id,
                });
              }}
              >
              <Text style={{color:'#888'}}>... more</Text>
            </TouchableOpacity>
          </View>
        </View>
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

export default withNavigation(ListImage)