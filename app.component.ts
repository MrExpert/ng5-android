import { Component, OnInit } from '@angular/core';
import { Product } from './product.entity';
import { Account } from './account';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 genders: any;
 roles: any;
 languages: any;
 registerForm: FormGroup;
 checkedList: string[];
 certificates: any;

 constructor(
   private formBuilder: FormBuilder
 ) {}

  ngOnInit() {
    this.checkedList = [];
    this.certificates = [
      { value: 'cer1', display: 'Certificate 1'},
      { value: 'cer2', display: 'Certificate 2'},
      { value: 'cer3', display: 'Certificate 3'},
      { value: 'cer4', display: 'Certificate 4'},
      { value: 'cer5', display: 'Certificate 5'},
    ];
    this.genders = [
      { value: 'F', display: 'Female'},
      { value: 'M', display: 'Male'}
    ];
    this.roles = [
      { id: 'r1', name: 'Role 1'},
      { id: 'r2', name: 'Role 2'},
      { id: 'r3', name: 'Role 3'},
      { id: 'r4', name: 'Role 4'}
    ];
    this.languages = [
      { id: 'lang1', name: 'Language 1'},
      { id: 'lang2', name: 'Language 2'},
      { id: 'lang3', name: 'Language 3'},
      { id: 'lang4', name: 'Language 4'},
      { id: 'lang5', name: 'Language 5'}
    ];
    this.registerForm = this.formBuilder.group({
      username: '',
      password: '',
      description: '',
      status: true,
      gender: this.genders[0].value,
      languages: [],
      role: [],
      certificates: []
    });
  }
save() {
  const account: Account = this.registerForm.value;
  account.languages = this.checkedList;
  this.displayAccountInfoConsole(account);
}

displayAccountInfoConsole(account: Account) {
  console.log('Username: ' + account.username);
  console.log('Password: ' + account.password);
  console.log('Description: ' + account.description);
  console.log('Gender: ' + account.gender);
  console.log('Status: ' + account.status);
  console.log('Languages List');
  for (let i = 0; i < account.languages.length; i++) {
    console.log(account.languages[i]);
  }
  console.log('Role: ' + account.role);
  console.log('Certificate List');
  for (let i = 0; i < account.certificates.length; i++) {
    console.log(account.certificates[i]);
  }
}

onCheckboxChange (option, event) {
  if (event.target.checked) {
    this.checkedList.push(option.id);
  } else {
    for (let i = 0; i < this.languages.length; i++) {
      if (this.checkedList[i] === option.id) {
        this.checkedList.splice(i, 1);
      }

    }
  }
}
}
