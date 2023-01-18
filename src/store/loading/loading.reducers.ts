import { createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { LoadingStste } from './LoadingState';

const initialState: LoadingStste = {
  show: false,
};

const reducer = createReducer(
  initialState,
  on(show, () => {
    return { show: true };
  }),
  on(hide, () => {
    return { show: false };
  })
);

export function loadingReducer(state : LoadingStste, action) {
  return reducer(state, action);
}
