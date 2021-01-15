import React, { Component } from 'react'
import Card from './card' 

export default class App extends Component {
  render() {
    return (
      <>
        <Card isStaticFooter childForHeader={<button>X</button>} childForFooter={<button>save</button>}/>
      </>
    )
  }
}

// PROPS TO CARD
//   isStaticFooter
//   isHidenHeader
//   isHidenHeaderBorder
//   isHidenFooter
//   isHidenFooterBorder
//   childForHeader
//   childForFooter