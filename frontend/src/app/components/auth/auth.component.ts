import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUserLogin, createSignInForm } from 'src/app/core/models/IUserLogin';
import { IRegisteredUser } from 'src/app/core/models/IRegistereUser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.sass'],
})
export class AuthComponent {
    loginForm = createSignInForm();

    registeredUser?: IRegisteredUser;

    constructor(private readonly _http: HttpClient) {

    }

    onSubmit() {
        const values = this.loginForm.getRawValue() as IUserLogin;

        this._http.post<IRegisteredUser>('https://localhost:44304/api/auth', values)
            .pipe(take(1))
            .subscribe((data) => {
                this.registeredUser = data;
            });
    }
}
