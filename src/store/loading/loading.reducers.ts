import { createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { LoadingStste } from './LoadingState';

<<<<<<< HEAD
const inititalState: LoadingStste = {
=======
const initialState: LoadingStste = {
>>>>>>> 55de50a71454c7707daed44d77aad0700d559133
  show: false,
};

const reducer = createReducer(
<<<<<<< HEAD
  inititalState,
=======
  initialState,
>>>>>>> 55de50a71454c7707daed44d77aad0700d559133
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
