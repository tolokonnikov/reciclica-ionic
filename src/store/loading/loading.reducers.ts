import { createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { LoadingStste } from './LoadingState';

const inititalState: LoadingStste = {
  show: false,
};

const reducer = createReducer(
  inititalState,
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
