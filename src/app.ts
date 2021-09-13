import { Component } from 'react'
import './app.scss'
import Taro from '@tarojs/taro'
class App extends Component {

  componentDidMount () {
    console.log('app instance:', Taro.getApp());
    Promise.resolve().then(() => {
      console.log('app instance after micro Task:', Taro.getApp());
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
