import React, { Component } from 'react';
import {View, FlatList, Text, Image} from 'react-native'
import ListImage from '../components/ListImage'
import axios from 'axios'
import {getImage} from '../store/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'My Galery',
  }
  componentDidMount(){
    this.props.getImage()
  }

  render() {
    if (this.props.loading){
      return <image style={{width: 320, height: 320}} source={{uri:'http://www.green4future.in/theme/green/images/loading.gif'}}/>
    }else if(this.props.error){
      return <Text>Error....</Text>
    }else{
      return (
        <View>
          <FlatList
          data={this.props.content}
          renderItem={({item}) => 
            <ListImage
              data= {item}
            />
          }        
          />
        </View>
      )
    }
  }
};

const mapStateToProps = (state) =>({
  content: state.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
