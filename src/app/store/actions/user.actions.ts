import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    AddUser: props<{ name: string; age: number; gender: string }>(),
    UpdateUser: emptyProps(),
    DelUser: emptyProps(),
  },
});
