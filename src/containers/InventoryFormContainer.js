import { connect } from 'react-redux';

import addInventory from '../actions/addInventory';
import createInventory from '../actions/createInventory';
import InventoryForm from '../components/InventoryForm';

const mapStateToProps = state => {
  return { inventory: state.inventory };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateItem: item => {
      dispatch(createInventory(item));
    },
    onUpdateItem: (name, dq) => {
      dispatch(addInventory(name, dq));
    }
  };
};

const InventoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryForm);

export default InventoryFormContainer;
