import React, { Component } from 'react';
import './flex-container-style.css'
class FlexContainerView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="container">
      {this.props.children}
    </div>
  }
}


const FlexItem = ({ cssKey = "" }) => <div className={`item${cssKey}`}></div>

export {
  FlexContainerView,
  FlexItem
}