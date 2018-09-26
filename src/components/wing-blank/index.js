import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TdComponent from '../../common/component'
import './index.less'

export default class TdWingBlank extends TdComponent {

  render () {
    const { prefixCls, size } = this.props
    const wrapCls = classNames(
      prefixCls,
      this.props.className,
      `${prefixCls}-${size}`
    )
    return (
      <View className={wrapCls}>
        {this.props.children}
      </View>
    )
  }
}

TdWingBlank.defaultProps = {
  prefixCls: 'td-wingblank',
  size: 'lg',
}

TdWingBlank.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}