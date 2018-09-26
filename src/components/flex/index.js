import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TdComponent from '../../common/component'
import './index.less'

export default class TdFlex extends TdComponent {

  render () {
    const { prefixCls, align } = this.props
    const wrapCls = classNames(
      prefixCls,
      this.props.className, {
        [`${prefixCls}-align-start`]: align === 'start',
        [`${prefixCls}-align-center`]: align === 'center',
        [`${prefixCls}-align-end`]: align === 'end',
        [`${prefixCls}-align-baseline`]: align === 'baseline',
        [`${prefixCls}-align-stretch`]: align === 'stretch',
      }
    )
    return (
      <View className={wrapCls}>
        {this.props.children}
      </View>
    )
  }
}

TdFlex.defaultProps = {
  prefixCls: 'td-flexbox',
  align: 'center',
}

TdFlex.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
}