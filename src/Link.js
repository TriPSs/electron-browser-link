import React from 'react'
import PropTypes from 'prop-types'

import electronBrowserLink from './electronBrowserLink'

export default class Link extends React.Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    to      : PropTypes.string.isRequired,
  }

  render() {
    const { children, to } = this.props

    return (
      <a onClick={() => electronBrowserLink(to)}>
        {children}
      </a>
    )
  }
}
