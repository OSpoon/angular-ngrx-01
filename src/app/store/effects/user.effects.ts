import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from '../actions/user.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class UserEffects {
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      // 设置副作用所关联的 Action
      ofType(UserActions.updateUser),
      // 处理副作用
      exhaustMap(() => {
        // 调用服务,获取用户数据
        return this.userService.updateApi().pipe(
          map((user) => {
            // 将得到的用户数据通过 Action 发送出去
            return UserActions.addUser(user);
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
