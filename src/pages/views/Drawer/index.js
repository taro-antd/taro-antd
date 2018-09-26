import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TdDrawer from '../../../components/drawer/index'
import './index.less';

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      leftDrawerShow: false,
      rightDrawerShow: false,
      sidebar: [
        {
          title: '栏目一',
          arrow: true
        },
        {
          title: '栏目二',
          arrow: true
        }
      ]
    }
  }

  config = {
    navigationBarTitleText: 'Drawer'
  }

  leftDrawerClick () {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
  }

  onClose () {
    this.setState({
      leftDrawerShow: false,
      rightDrawerShow: false,
    })
  }
  render () {
    return (
      <View className='page'>
        <View onClick={this.leftDrawerClick.bind(this)}>显示 Drawer</View>
        <TdDrawer mask show={this.state.leftDrawerShow} onClose={this.onClose.bind(this)} sidebar={this.state.sidebar} />
      </View>
    )
  }
}