import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-ecosystem',
    templateUrl: './ecosystem.component.html',
    styleUrls: ['./ecosystem.component.scss'],
    standalone: false
})
export class EcosystemComponent {
    ecosystemForm: FormGroup;
    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.ecosystemForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            designation: [''],
            message: ['', [Validators.required, Validators.minLength(10)]],
        });
    }

    submitEcosystem() {
        this.formSubmitted = true;
        if (this.ecosystemForm.invalid) return;
        const payload = this.ecosystemForm.value;
        // TODO: integrate API call
        this.ecosystemForm.reset();
        this.formSubmitted = false;
    }
}
