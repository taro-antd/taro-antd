import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TdComponent from '../../common/component'
import './index.less'

export default class TdList extends TdComponent {

  render () {
    const { prefixCls, hasBorder, title } = this.props
    const rootClass = classNames(
      prefixCls,
      hasBorder ? `${prefixCls}--no-border` : '',
      this.props.className
    )
    return (
      <View className={rootClass}>
        {title ? (
          <View className={`${prefixCls}-header`}>
            {title}
          </View>
        ) : null}
        <View className={`${prefixCls}-body`}>{this.props.children}</View>
      </View>
    )
  }
}

TdList.defaultProps = {
  prefixCls: 'td-list',
  hasBorder: true
}

TdList.propTypes = {
  hasBorder: PropTypes.bool,
  title: PropTypes.string,
}