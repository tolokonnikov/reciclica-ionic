import { LoadingStste } from './loading/LoadingState';
import { LoginState } from './login/LoginState';

export interface AppState {
  loading: LoadingStste;
  login: LoginState;
}
