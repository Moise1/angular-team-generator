import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMsg = ''; 

  addMember(){ 
    if(!this.newMemberName){
      this.errorMsg = 'This field cannot be emtpy';
      return;
    }else {
      this.errorMsg = '';
      this.members.push(this.newMemberName);
      this.newMemberName = '';
    };
  };

  onChange(member: string){
    this.newMemberName = member;
  }
}
