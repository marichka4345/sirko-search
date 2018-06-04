import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.scss';

const modalRoot = document.getElementById('modal');

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add(styles.modalWrapper);
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
