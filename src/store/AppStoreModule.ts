import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './loading/loading.reducers';

export const AppStoreModule = [
<<<<<<< HEAD
    StoreModule.forRoot([]),
    StoreModule.forFeature('loading', loadingReducer)
=======
  StoreModule.forRoot([]),
  StoreModule.forFeature('loading', loadingReducer),
>>>>>>> 55de50a71454c7707daed44d77aad0700d559133
];
