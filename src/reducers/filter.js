import Actions from '../constants/actions';
import initialState from '../constants/initialState';

const filter = (state = initialState.filter, action) => {
  switch (action.type) {
    case Actions.UPDATE_FILTER:
      return action.filter;

    default:
      return state;
  };
}

export default filter;
