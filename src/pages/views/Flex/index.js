import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TdFlex from '../../../components/flex/index';
import TdFlexItem from '../../../components/flex/flexItem/index'

import './index.less';

export default class Index extends Component {
  constructor() {
    super(...arguments)
  }

  render () {
    return (
      <View className="flex-container">
        <View className="sub-title">Basic</View>
        <TdFlex>
          <TdFlexItem>
            <View className="placeholder">Block</View>
          </TdFlexItem>
          <TdFlexItem>
            <View className="placeholder">Block</View>
          </TdFlexItem>
        </TdFlex>
      </View>
    )
  }
}