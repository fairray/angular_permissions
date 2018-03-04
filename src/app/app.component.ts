import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(): void{
    this.makeReq().subscribe( (perm) => {
      this.permissionsService.loadPermissions(perm, (permissionName, permissionStore) => {
        return !!permissionStore[permissionName];
      })
    })
  }
  constructor(private permissionsService: NgxPermissionsService){

  }
  makeReq(): Observable<Array<string>>{
    //
    return of(['CanEdit', 'test']);
  }
}
