// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// libs
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '@ngx-auth/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  email: string;
  password: string;
  isProcessing: boolean;

  constructor(private readonly auth: AuthService,
              private readonly router: Router) {
    super();
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {
      console.log('Usuaruio logeado');
      this.router.navigateByUrl(this.auth.defaultUrl);
    }
  }

  login(): void {
    this.isProcessing = true;

    console.log(this.email, this.password);

    this.auth.authenticate(this.email, this.password)
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.isProcessing = false;

        // if (!this.auth.isAuthenticated)
      });
  }
}
