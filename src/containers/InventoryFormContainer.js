import { connect } from 'react-redux';
import InventoryForm from '../components/InventoryForm';
import createInventory from '../actions/createInventory';

const mapDispatchToProps = dispatch => {
  return {
    onFormSubmit: item => {
      dispatch(createInventory(item));
    }
  };
};

const InventoryFormContainer = connect(
  null,
  mapDispatchToProps
)(InventoryForm);

export default InventoryFormContainer;
