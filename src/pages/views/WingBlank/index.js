import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TdWingBlank from '../../../components/wing-blank/index';
import TdWingSpace from '../../../components/wing-space/index';

import './index.less';

export default class Index extends Component {
  constructor() {
    super(...arguments)
  }
  config = {
    navigationBarTitleText: 'WingBlank'
  }
  render () {
    return (
      <View className="flex-container">
        <TdWingBlank>
          <View className="placeholder">WingBlank</View>
        </TdWingBlank>
        <TdWingSpace />
        <TdWingBlank size="sm">
          <View className="placeholder">WingBlank</View>
        </TdWingBlank>
        <TdWingSpace />
        <TdWingBlank size="md">
          <View className="placeholder">WingBlank</View>
        </TdWingBlank>
      </View>
    )
  }
}