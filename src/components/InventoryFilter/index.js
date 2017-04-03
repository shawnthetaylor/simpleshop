import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

class InventoryFilter extends Component {
  render() {
    return (
      <button type='button'
              className={ classNames('btn', {
                'btn-primary': this.props.active,
                'btn-secondary': !this.props.active,
              }) }
              onClick={ this.props.onClick }>
        { this.props.children }
      </button>
    );
  }
}

InventoryFilter.propTypes = propTypes;

export default InventoryFilter;
