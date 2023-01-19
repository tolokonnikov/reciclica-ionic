import { createAction } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { loadingReducer } from './loading.reducers';
import { LoadingStste } from './LoadingState';

describe('loading store', () => {
  
    it('show', () => {
    const inititalState: LoadingStste = { show: false };
    const newState = loadingReducer(inititalState, show());
    expect(newState).toEqual({ show: true });
  });
    
  it('hide', () => {
    const inititalState: LoadingStste = { show: true };
    const newState = loadingReducer(inititalState, hide());
    expect(newState).toEqual({ show: false });
  });
    
    it('should keep state if action is unknown', () => {
        const inititalState: LoadingStste = { show: false };
        const action = createAction('UNKNOWN');
      const newState = loadingReducer(inititalState, action);
      expect(newState).toEqual({ show: false });
    });
});
