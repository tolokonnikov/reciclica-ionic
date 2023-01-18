import { createAction } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { loadingReducer } from './loading.reducers';
import { LoadingStste } from './LoadingState';

describe('loading store', () => {

  it('show', () => {
    const initialState: LoadingStste = { show: false };
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({ show: true });
  });

  it('hide', () => {
    const initialState: LoadingStste = { show: true };
    const newState = loadingReducer(initialState, hide());

    expect(newState).toEqual({ show: false });
  });

  it('should keep state if action is unknown', () => {
    const initialState: LoadingStste = { show: true };
    const action = createAction('UNKNOWN');
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual({ show: true });
  });

});
