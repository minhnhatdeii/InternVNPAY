import { Component } from 'react'
import './app.scss'
import './i18n'
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children It's the page that's about to be rendered.
    return (
        this.props.children
    )
  }
}

export default App
