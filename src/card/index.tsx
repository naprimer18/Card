import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'

interface IPropsCard {
  isStaticFooter?: boolean,
  isHidenHeader?: boolean,
  isHidenHeaderBorder? : boolean,
  isHidenFooter?: boolean,
  isHidenFooterBorder?: boolean,
  childForHeader?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  childForFooter?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
}

export default class Card extends Component <IPropsCard> {
  getHeaderProps = () => {
    const {isHidenHeader, isHidenHeaderBorder } = this.props;
    return {
      isHidenHeader,
      isHidenHeaderBorder
    }
  }
  getFooterProps = () => {
    const {isHidenFooter, isHidenFooterBorder, isStaticFooter } = this.props;
    return {
      isHidenFooter,
      isHidenFooterBorder,
      isStaticFooter
    }
  }
  render() {
    const { childForHeader, childForFooter } = this.props;
    return (
        <div className='card' >
          <Header {...this.getHeaderProps()}>
            {childForHeader}
          </Header>

          <main className='body'>
              Body
          </main>

         <Footer {...this.getFooterProps()}>
           {childForFooter}
          </Footer>
          
        </div>
    )
  }
}
