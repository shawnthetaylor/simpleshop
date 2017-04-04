import { connect } from 'react-redux';

import updateInventoryFilter from '../actions/updateInventoryFilter';
import InventoryFilter from '../components/InventoryFilter';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(updateInventoryFilter(ownProps.filter));
    }
  };
};

const InventoryFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryFilter);

export default InventoryFilterContainer;
