import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './InventoryItem.css';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onInventoryClick: PropTypes.func.isRequired
};

class InventoryItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { selected: 0 };
    this.incrementSelected = this.incrementSelected.bind(this);
    this.decrementSelected = this.decrementSelected.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  incrementSelected() {
    this.setState({ selected: this.state.selected + 1 });
  }

  decrementSelected() {
    this.setState({ selected: this.state.selected - 1 });
  }

  addToCart() {
    this.props.onInventoryClick(this.state.selected);
    this.setState({ selected: 0 });
  }

  render() {
    const { quantity, name, price } = this.props;
    const { selected } = this.state;
    const disableIncrement = !quantity || selected === quantity;

    return (
      <li className={ cx('item') }>
        <div className={ cx('header') }>
          <h2 className={ cx('header-item') }>{ name }</h2>
          <p className={ cx('stock', { 'empty': !quantity } )}>
            { quantity }
          </p>
        </div>
        <div className={ cx('price') }>
          { `$${ price }` }
          <span className={ cx('unit') }>/ unit</span>
        </div>
        { quantity ?
          <div className={ cx('cart') }>
            <div className={ cx('cart-controls') }>
              <button className={ cx('btn btn-small btn-secondary') }
                      disabled={ selected === 0 }
                      onClick={ this.decrementSelected }>
                <i className='fa fa-minus'></i>
              </button>
              <p className={ cx('selected') }>{ selected }</p>
              <button className={ cx('btn btn-small btn-secondary') }
                      disabled={ disableIncrement }
                      onClick={ this.incrementSelected }>
                <i className='fa fa-plus'></i>
              </button>
            </div>
            <button className={ cx('btn btn-secondary') }
                    disabled={ !selected }
                    onClick={ this.addToCart }>Add to Cart</button>
          </div> :
          <div className={ cx('out') }>Out of Stock</div> }
      </li>
    );
  }
};

InventoryItem.propTypes = propTypes;

export default InventoryItem;
