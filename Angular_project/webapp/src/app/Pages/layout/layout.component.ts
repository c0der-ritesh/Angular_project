import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
   loggedUser : any;
   constructor(private _router : Router)
   {
    const localuser = localStorage.getItem('loggedUser');
    if(localuser !=null)
      {
        this.loggedUser=JSON.parse(localuser);
      }
   }
   onLogout()
   {
    localStorage.removeItem('loggedUser');
    this._router.navigate(['/loginsignup']);
   }
   home()
   {
    this._router.navigate(['/form']);
   }
}
