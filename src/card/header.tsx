import React, { Component } from 'react'

interface IPropsHeader {
  isHidenHeader?: boolean,
  isHidenHeaderBorder?: boolean
}

export default class Header extends Component <IPropsHeader> {
  render() {
    const {children,isHidenHeader,isHidenHeaderBorder} = this.props;
    return (
      <header 
        className={`header${isHidenHeader?' header-hiden': '' }${isHidenHeaderBorder?' header-border-hiden': '' }`}
      >
        <h1>header</h1>
        <span className="header-other-elements">
          {children}
        </span>
      </header>
    )
  }
}
