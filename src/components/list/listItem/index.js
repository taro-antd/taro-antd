import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'
import PropTypes from 'prop-types'

import '../index.less'

export default class TdListItem extends Component {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  render () {
    const { prefixCls, extra } = this.props
    return (
      <View class={`${prefixCls}-item`} onClick={this.handleClick}>
        <View className={`${prefixCls}-line`}>
          <View className={`${prefixCls}-content`}>{this.props.children}</View>
          {extra !== undefined && (
            <View className={`${prefixCls}-extra`}>{extra}</View>
          )}
        </View>
      </View>
    )
  }
}

TdListItem.defaultProps = {
  prefixCls: 'td-list',
}

TdListItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}