import { Component } from 'react'
import { View, Text } from '@vnxjs/components'
import './HomePage.scss'
import Header from '../../Component/Header/Header'


export default class HomePage extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    
    return (
      <View>
        <Header text={'t-home'}/>
        <Text>It is HomePage</Text>
      </View>
    )
  }
}
