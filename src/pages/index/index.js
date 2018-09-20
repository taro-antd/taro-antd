import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

import TdList from '../../components/list/index'
import TdListItem from '../../components/list/listItem/index'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: [
        {
          title: 'Layout',
          content: [
            {
              title: 'Flex',
              extra: 'Flex布局',

            },
            {
              title: 'WingBlank',
              extra: '两翼留白'
            },
            {
              title: 'WhiteSpace',
              extra: '上下留白'
            }
          ]
        }
      ]
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }

  handleClick = e => {
    const { id } = e.currentTarget.dataset
    Taro.navigateTo({
      url: `/pages/view/${id}/index`
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='page-title'>Taro-Antd</View>
        <View className='page-describe'>基于Ant Design Mobile 的Taro组件库 多端支持微信小程序、H5</View>
        <View>
          {list.map((item, index) => (
            <TdList title={item.title}>
              {
                item.content.map(citem => (
                  <View data-id={citem.title} onClick={this.handleClick}>
                    <TdListItem extra={citem.extra}>{citem.title}</TdListItem>
                  </View>
                ))
              }
            </TdList>
          ))}
        </View>
      </View>
    )
  }
}

