import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import '../index.less'

export default class TdBrief extends Component {
  render() {
    return (
      <View className="td-list-brief" style={this.props.style}>
        {this.props.children}
      </View>
    );
  }
}