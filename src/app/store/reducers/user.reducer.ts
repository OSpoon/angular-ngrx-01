import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
  id: string;
  name: string;
  age: number;
  gender: string;
}

export const initialState: State = {
  id: '',
  name: '',
  age: 0,
  gender: '',
};

export const reducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, action) => ({
    id: '',
    name: action.name,
    age: action.age,
    gender: action.gender,
  })),
  on(UserActions.delUser, (state, action) => ({
    id: '',
    name: '',
    age: 0,
    gender: '',
  }))
);
