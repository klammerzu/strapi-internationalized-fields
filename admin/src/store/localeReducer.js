import produce from 'immer';
import pluginId from '../pluginId';

export const initialState = {
  current_locale: 'en',
};

const currentLocaleReducer = produce((draftState = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_LOCALE': {
      draftState.current_locale = action.locale;
      break;
    }

    default:
      return draftState;
  }

  return draftState;
});

const reducers = {
  [pluginId]: currentLocaleReducer,
};


export { reducers };
