import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  //selector: 'app-servers',
  //selector: '[app-servers]',
  templateUrl: './servers.component.html',
  //template: "<app-server></app-server><app-server></app-server>",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  userName = '';
  isUserNameEmpty = true;
  servercreated  = false;

  constructor() { 
    setTimeout(() => {
      this.allownewServer= true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.servercreated = true;
  }

  onUpdateServerName(event: any)
  {
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  checkUserNameInput(event: any)
  {
      this.isUserNameEmpty = (<HTMLInputElement>event.target).value == '';
  }

  btnAddUserClicked()
  {
    this.userName = '';
  }

}
