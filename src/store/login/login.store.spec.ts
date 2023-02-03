import { AppInitialState } from '../AppInitialState';
import {
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordSuccess,
} from './login.actions';
import { loginReducer } from './login.reducers';
import { LoginState } from './LoginState';

describe('Login store', () => {
  it('recoverPassword', () => {
      const initialStste: LoginState = AppInitialState.login;
    const newState = loginReducer(initialStste, recoverPassword());
    expect(newState).toEqual({
      ...initialStste,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    });
  });

  it('recoverPasswordSuccess', () => {
      const initialStste: LoginState = AppInitialState.login;
    const newState = loginReducer(initialStste, recoverPasswordSuccess());
    expect(newState).toEqual({
      ...initialStste,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    });
  });

  it('recoverPasswordFail', () => {
      const initialStste: LoginState = AppInitialState.login;
    const error = { error: 'error' };
    const newState = loginReducer(initialStste, recoverPasswordFail({ error }));
    expect(newState).toEqual({
      ...initialStste,
      error,
      isRecoveredPassword: false,
      isRecoveringPassword: false,
    });
  });
});
