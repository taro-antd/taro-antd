import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
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
    const { prefixCls, arrow, extra, align, multipleLine, wrap, disabled, thumb } = this.props

    const lineCls = classNames(`${prefixCls}-line`, {
      [`${prefixCls}-line-multiple`]: multipleLine,
      [`${prefixCls}-line-wrap`]: wrap,
    });

    const wrapCls = classNames(`${prefixCls}-item`, {
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
    })

    return (
      <View class={wrapCls} onClick={this.handleClick}>
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
              <TdIcon value={`chevron-${arrow}`} color='#c7c7cc' style="display: table-cell;vertical-align: middle;" />
            </View>
          ) : null}
        </View>
      </View>
    )
  }
}

TdListItem.defaultProps = {
  prefixCls: 'td-list',
  align: 'middle',
  multipleLine: false,
  wrap: false,
  disabled: false
}

TdListItem.propTypes = {
  title: PropTypes.string,
  extra: PropTypes.string,
  align: PropTypes.string,
  arrow: PropTypes.string,
  thumb: PropTypes.string,
  multipleLine: PropTypes.bool,
  wrap: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}