import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, userFeatureKey } from '../reducers/user.reducer';

/**
 * 用于获取 User
 */
export const selectUser = createFeatureSelector<State>(userFeatureKey);

/**
 * 用于获取 User 的 name
 */
export const selectUserName = createSelector(
  selectUser,
  (state: State) => state.name
);
