import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './store/actions/user.actions';
import { Observable } from 'rxjs';
import { selectUser } from './store/selectors/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';

  user: Observable<{
    id: string;
    name: string;
    age: number;
    gender: string;
  }>;

  constructor(private store: Store) {
    this.user = this.store.select(selectUser);
  }

  ngOnInit(): void {
    // 添加用户
    this.store.dispatch(
      UserActions.addUser({
        name: 'xiao zhang',
        age: 18,
        gender: 'male',
      })
    );

    // 删除用户
    setTimeout(() => {
      this.store.dispatch(UserActions.delUser());

      this.store.dispatch(UserActions.updateUser());
    }, 5000);
  }
}
