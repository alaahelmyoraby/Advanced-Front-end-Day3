import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  viewename = "alaaoraby";
  viewnum = 10;
  imgs = 'assets/me.jpg';
  textdata="Two Ways";

  changename() {
    this.viewename = "ayaoraby";
  }
  getname() {
    return this.viewename;
  }

  getnumber() {
    var num = this.viewnum + 30;
    var sum = num + 50;
    return sum;
  }
onclick(event:any){
  console.log(event);
}





}



