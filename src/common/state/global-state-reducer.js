import {InitialGlobalState} from './initial-global-state';

export const globalStateReducer = (
    state = InitialGlobalState.generate(), action) => {
    
    switch (action.type) {
      case 'LOAD_CUSTOMER_DATA':
        return {
          ...state,
          customerData: action.vm().data,
        };
      case 'LOAD_CUSTOMER_DETAIL':
        return {
          ...state, 
          customerDetail: action.vm(),
        };
      default:
        return state;
    }

};