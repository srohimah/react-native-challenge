import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native'
import DetailImage from '../components/DetailImage';
import axios from 'axios'
import {getImage} from '../store/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Detail Image',
  }
  componentDidMount(){
    this.props.getImage()
  }

  render() {
    console.log('params', this.props.navigation.state.params)
    const { params } = this.props.navigation.state;
    const dataDetail = this.props.content.filter(res=>res.id === params.itemId)
    return (
      <View style={styles.container}>
        {
          dataDetail.map(cont=>{
            return <DetailImage data = {cont}/>
          })
        }
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  }
})
const mapStateToProps = (state) =>({
  content: state.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
