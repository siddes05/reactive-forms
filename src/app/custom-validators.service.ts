import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  public minExperience(): ValidatorFn
  {
    return (control: AbstractControl): ValidationErrors | null => {

      if(!control.value)
        return null;

      if(control.value >=5)
        return null;
      else
        return { experience : {valid: false}};
    }
  }

  public domainAvailabilty(controlToValidate:string, controlToCompare:string): ValidatorFn
  {
   
    return(formGroup: AbstractControl): ValidationErrors | null => {

      if(!formGroup.get(controlToValidate)?.value)
        return null;

        if((formGroup.get(controlToValidate) as FormControl).value == ".Net" && (formGroup.get(controlToCompare) as FormControl).value == "Chennai")  
      {
        (formGroup.get(controlToValidate) as FormControl).setErrors({
          domainAvailabilty: {valid: false}
        });

        return {domainAvailabilty: {valid: false}};
      }
      
      else{
       return null;

    }
  }
      //console.log(formGroup.get(controlToValidate)?.value,(formGroup.get(controlToCompare) as FormControl).value);

      // if(!formGroup.get(controlToValidate)?.value)
      //   return null;

      // (formGroup.get(controlToValidate) as FormControl).setErrors({
      //       domainAvailabilty: {valid: false}
      //     });
  
      //     return {domainAvailable: {valid: false}};

      // if((formGroup.get(controlToValidate) as FormControl).value ==  (formGroup.get(controlToCompare) as FormControl).value)  
      // {
      //   return null;
      // }
      
      // else{
      //   (formGroup.get(controlToValidate) as FormControl).setErrors({
      //     domainAvailabilty: {valid: false}
      //   });

      //   return {domainAvailabilty: {valid: false}};
      // }
      

    

  }
}
