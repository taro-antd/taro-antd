import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import TdList from '../../../components/list/index'
import TdListItem from '../../../components/list/listItem/index'
import TdBrief from '../../../components/list/brief/index'

import './index.less';

export default class Index extends Component {
  constructor() {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: 'List'
  }

  returnHeader () {
    return 'hello'
  }
  handleClick () {
    console.log('click')
  }
  render () {
    return (
      <View className="page">
        <TdList title="Basic Style">
          <TdListItem extra="extra content">Title</TdListItem>
        </TdList>
        <TdList title="Subtitle">
          <TdListItem arrow="right" multipleLine>
            Title
            <TdBrief>
              This is Brief.
            </TdBrief>
          </TdListItem>
          <TdListItem arrow="down" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            Title
            <TdBrief>
              This ListItem has Icon.
            </TdBrief>
          </TdListItem>
        </TdList>
      </View>
    )
  }
}