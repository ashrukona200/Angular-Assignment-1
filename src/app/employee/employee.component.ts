import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { usersettings } from '../data/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.html',
})

export class EmployeeComponent implements OnInit {

  UserSettings: usersettings = {
    firstName: '',
    lastName: '',
    emailId: '',
    contactNumber: '',
    address: '',
    userName: '',
    password: '',
    gender: '',
    qualification: '',
    experience: '',
  }

  parentSelector: boolean = false;
  Languages = [
    { id: 1, select: false, name: 'C/C++' },
    { id: 2, select: false, name: 'JAVA' },
    { id: 3, select: false, name: 'C#' },
    { id: 4, select: false, name: 'PHP' },
    { id: 5, select: false, name: 'PYTHON' },
  ];

  onChangeLanguages($event: any) {

    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.Languages = this.Languages.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      return d;
    });
    return this.Languages;
  }

  copyUserSettings: usersettings = { ...this.UserSettings };

  qualifications: Observable<string[]> | undefined;
  experiences: Observable<string[]> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.qualifications = this.dataService.getQualifications();
    this.experiences = this.dataService.getExperiences();
  }

  onSubmit(val: any) {
    var data = val.controls;
    var fname = data.Firstname.value;
    var lname = data.Lastname.value;
    var email = data.Email.value;
    var contact = data.Contact.value;
    var address = data.Address.value;
    var username = data.Username.value;
    var password = data.Password.value;
    var gender = data.Gender.value;
    var qualification = data.Qualification.value;
    var experience = data.Experience.value;

    let languages: any[] = []

    for (let i of this.Languages) {
      if (i.select == true) {
        if (i.id == 1) {
          languages.push(i.name);
        }
        else if (i.id == 2) {
          languages.push(i.name);
        }
        else if (i.id == 3) {
          languages.push(i.name);
        }
        else if (i.id == 4) {
          languages.push(i.name);
        }
        else if (i.id == 5) {
          languages.push(i.name);
        }
      }
    }
    console.log(`First Name : ${fname} \nLast Name : ${lname} \nEmail Id : ${email} \nContact : ${contact} \nAddress : ${address} \nUsername : ${username} \nPassword : ${password} \nGender : ${gender} \nQualification : ${qualification} \nExperience : ${experience} \nLanguages : ${languages}`);

    //console.log(data);
  }
}
