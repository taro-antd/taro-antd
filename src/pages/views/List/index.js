import Taro, { Component } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
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

  state = {
    selector: ['Html select element', 'Unable to select', 'option 3'],
    selectorChecked: 'Html select element'
  }

  returnHeader () {
    return 'hello'
  }
  handleClick () {
    console.log('click')
  }

  onChange (e) {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
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
        <TdList title="Customized Right Side（Empty Content / Text / Image）">
          <TdListItem>Title</TdListItem>
          <TdListItem arrow="right">Title</TdListItem>
          <TdListItem arrow="right" extra="extra content">Title</TdListItem>
          <TdListItem extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            Title <TdBrief>subtitle</TdBrief>
          </TdListItem>
        </TdList>
        <TdList title="Align Vertical Center">
          <TdListItem multipleLine extra="extra content">
            Title <TdBrief>subtitle</TdBrief>
          </TdListItem>
        </TdList>
        <TdList title='Icon in the left'>
          <TdListItem
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="right"
          >My wallet</TdListItem>
          <TdListItem
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            arrow="right"
          >
            My Cost Ratio
        </TdListItem>
        </TdList>
        <TdList title='Text Wrapping'>
          <TdListItem >Single line，long text will be hidden with ellipsis；</TdListItem>
          <TdListItem wrap>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text</TdListItem>
          <TdListItem extra="extra content" multipleLine align="top" wrap>
            Multiple line and long text will wrap. Long Text Long Text Long Text
        </TdListItem>
          <TdListItem extra="no arrow" wrap>
            In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
        </TdListItem>
        </TdList>
        <TdList title='Other'>
          <TdListItem disabled>disable</TdListItem>
          <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
            <TdListItem extra={this.state.selectorChecked}>
              当前选择：
            </TdListItem>
          </Picker>
        </TdList>
      </View>
    )
  }
}