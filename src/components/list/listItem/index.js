import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'
import PropTypes from 'prop-types'
import TdIcon from '../../icon/index'

import '../index.less'

export default class TdListItem extends Component {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }
  render () {
    const { prefixCls, arrow, extra, multipleLine,thumb } = this.props

    const lineCls = classNames(`${prefixCls}-line`, {
      [`${prefixCls}-line-multiple`]: multipleLine
    });

    return (
      <View class={`${prefixCls}-item`} onClick={this.handleClick}>
        {thumb ? (
          <View className={`${prefixCls}-thumb`}>
            <Image src={thumb} />
          </View>
        ) : null}
        <View className={lineCls}>
          <View className={`${prefixCls}-content`}>{this.props.children}</View>
          {extra ? (
            <View className={`${prefixCls}-extra`}>{extra}</View>
          ) : null}
          {arrow ? (
            <View className={`${prefixCls}-arrow`}>
              <TdIcon value={`chevron-${arrow}`} color='#c7c7cc' style="display: table-cell;vertical-align: middle;"/>
            </View>
          ) : null}
        </View>
      </View>
    )
  }
}

TdListItem.defaultProps = {
  prefixCls: 'td-list',
  multipleLine: false
}

TdListItem.propTypes = {
  title: PropTypes.string,
  extra: PropTypes.string,
  arrow: PropTypes.string,
  onClick: PropTypes.func,
  multipleLine: PropTypes.boolean,
  thumb: PropTypes.string
}