import { connect } from 'react-redux';
import InventoryForm from '../components/InventoryForm';
import createInventory from '../actions/createInventory';
import addInventory from '../actions/addInventory';

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
