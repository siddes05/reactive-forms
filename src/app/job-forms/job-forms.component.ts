import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder,Validator,FormControl,FormControlName, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorsService } from '../custom-validators.service';
import { empty } from 'rxjs';


const passwordMatcher: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('city');
  const confirmPassword = control.get('domain');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordsDoNotMatch: true }
    : null;
};

@Component({
  selector: 'app-job-forms',
  templateUrl: './job-forms.component.html',
  styleUrls: ['./job-forms.component.css']
})


export class JobFormsComponent implements OnInit,OnChanges{

  jobRegForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private ValidatorService: CustomValidatorsService){ 
  
  }


  ngOnInit(): void {

    this.jobRegForm = this.formBuilder.group({

      Name: ['',[Validators.required]],
      city: ['',[Validators.required]],
      domain:['',[Validators.required]],
      experience:['',[Validators.required,this.ValidatorService.minExperience()]],
      contacts: this.formBuilder.group({
        contactType: ['-1',Validators.required],
        email: ['',Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)],
        phone: [''],
      })
    },{
       validators:[this.ValidatorService.domainAvailabilty("domain","city")]
    }
    
    );


    this.jobRegForm.get('contacts')?.get('contactType')?.valueChanges.subscribe(value =>
      {
  
      
        const emailField = this.jobRegForm.get('contacts')?.get('email');
        const phoneField = this.jobRegForm.get('contacts')?.get('phone');
        const validators = [Validators.required];
     
        if (value == 'email') {
          emailField?.addValidators(validators);
        } else {
          emailField?.removeValidators(validators);
        }
  
        if (value == 'phone') {
          phoneField?.addValidators(validators);
        } else {
          phoneField?.removeValidators(validators);
        }
     
        emailField?.updateValueAndValidity();
        phoneField?.updateValueAndValidity();
  
  
      }
  );

  }

  

  private onContactPreferenceChange(): void {
   
  }
  
 
  preview: string = '';

ngOnChanges()
{
  
 


}
 
  save() {
    this.preview = JSON.stringify(this.jobRegForm.value);
    console.log(this.jobRegForm?.errors);
   
  
  
    
  }

}
