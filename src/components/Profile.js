import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import {getImageProfile} from '../store/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Profile extends Component {
  static navigationOptions = {
    title: 'My Profile',
  }
  componentDidMount(){
    this.props.getImageProfile()
  }
  
  render() {
    const profile = this.props.content
    return (
      <View style={styles.container}>
        <Image style={styles.profileImg}
          source={{uri: profile.profile_picture}}
        />
        <Text>{profile.full_name}</Text>
        <Text>{profile.username}</Text>
        {/* <Text>{profile.counts.media}</Text>
        <Text>{profile.counts.follows}</Text>
        <Text>{profile.counts.followed_by}</Text> */}
      </View>
    )
  }
};

const mapStateToProps = (state) =>({
  content: state.profileContent
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getImageProfile
}, dispatch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImg: {
    marginTop: 10,
    borderRadius: 64,
    width: 150, 
    height: 150
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
