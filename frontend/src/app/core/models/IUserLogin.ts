import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface IUserLogin {
    email: string;
    password: string;
}

export const createSignInForm = () => {
    return new FormGroup({
        email: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.email],
        }),
        password: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(8)],
        })
    });
}

export type SignInForm = ReturnType<typeof createSignInForm>;

