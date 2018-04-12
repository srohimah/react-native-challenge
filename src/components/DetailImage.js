import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment'


export default class DetailsScreen extends React.Component {
  render() {
    return (
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
        </View>
          <Text style={styles.caption}>{this.props.data.likes.count} likes</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.caption}>{this.props.data.user.full_name}</Text>
            <Text>{this.props.data.caption.text}</Text>
          </View>
          <Text style={styles.comment}>View all {this.props.data.comments.count} comments</Text>
          <Text style={styles.date}>{moment(Number(this.props.data.created_time)*1000).format('LL')}</Text>
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
