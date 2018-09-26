import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TdComponent from '../../common/component'
import './index.less'

export default class TdWingSpace extends TdComponent {

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

TdWingSpace.defaultProps = {
  prefixCls: 'td-wingspace',
  size: 'md',
}

TdWingSpace.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}