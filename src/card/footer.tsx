import React, { Component } from 'react'

interface IPropsFooter {
  isStaticFooter?: boolean,
  isHidenFooter?: boolean,
  isHidenFooterBorder?: boolean
}

export default class Footer extends Component <IPropsFooter> {
  render() {
    const {children,isHidenFooter,isHidenFooterBorder,isStaticFooter} = this.props;
    return (
      <footer 
        className={`footer${isHidenFooter?' footer-hiden': '' }${isHidenFooterBorder?' footer-border-hiden': '' }${isStaticFooter?' footer_static': '' }`}
      >
        <h1>footer</h1>
        <div className="footer-other-elements">
          {children}
        </div>
      </footer>
    )
  }
}