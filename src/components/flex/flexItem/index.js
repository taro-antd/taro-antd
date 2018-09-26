import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TdComponent from '../../../common/component'
import '../index.less'

export default class TdFlexItem extends TdComponent {

  render () {
    const { prefixCls } = this.props
    const wrapCls = classNames(`${prefixCls}-item`, this.props.className);
    return (
      <View className={wrapCls}>
        {this.props.children}
      </View>
    )
  }
}

TdFlexItem.defaultProps = {
  prefixCls: 'td-flexbox',
}

TdFlexItem.propTypes = {
}