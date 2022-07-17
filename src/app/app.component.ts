import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];

  addMember(){ 
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  };

  onChange(member: string){
    this.newMemberName = member;
  }
}
