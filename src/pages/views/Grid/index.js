import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less';

export default class Index extends Component {
  constructor() {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: 'Grid'
  }

  render () {
    return (
      <View className="flex-container">
        Grid
      </View>
    )
  }
}