import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TdComponent from '../../common/component'
import TdList from '../../components/list/index'
import TdListItem from '../../components/list/listItem/index'

import './index.less'

export default class TdWrawer extends TdComponent {
  constructor() {
    super(...arguments);
    this.state = { animShow: false };
    if (this.props.show) this.animShow()
  }

  animShow () {
    console.log(this.props.show)
    this.setState({ show: true })
    setTimeout(() => {
      this.setState({ animShow: true })
    }, 200)
  }

  onHide () {
    this.setState({ show: false })
    this.props.onClose && this.props.onClose()
  }

  animHide () {
    this.setState({
      animShow: false,
    })
    setTimeout(() => {
      this.onHide(...arguments)
    }, 300)
  }
  onMaskClick () {
    this.animHide(...arguments)
  }
  componentWillReceiveProps (props) {
    console.log(props)
    const { show } = props
    if (show !== this.props.show) {
      if (show) this.animShow()
      else this.animHide(...arguments)
    }
  }

  render () {
    const { prefixCls, mask, width, right, sidebar } = this.props
    const { animShow, show } = this.state;

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0,
    }

    const listStyle = {
      width,
      transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
    }

    let rootClassName = ['td-drawer']

    if (right) rootClassName.push('td-drawer-right')
    else rootClassName.push('td-drawer-left')

    if (animShow) rootClassName.push('td-drawer-show')

    console.log(sidebar)
    return (
      show && <View className={this.getClassName(rootClassName, this.props.className)}>
        <View className='td-drawer-mask' style={maskStyle} onClick={this.onMaskClick.bind(this)}></View>
        <View className='td-drawer-content' style={listStyle}>
          <TdList>
            {
              sidebar.map((item, index) => {
                return <TdListItem key={index} arrow={item.arrow}>{item.title}</TdListItem>
              })
            }
          </TdList>
        </View>
      </View>
    )
  }
}

TdWrawer.defaultProps = {
  prefixCls: 'td-drawer',
  show: false,
  mask: true,
  right: false,
  sidebar: [],
  width: '230px',
}

TdWrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
}