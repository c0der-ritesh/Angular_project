import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { FormComponent } from './Pages/form/form.component';
import { DownloadsComponent } from './Pages/downloads/downloads.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent, DashboardComponent, ContactUsComponent, FormComponent,DownloadsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
}
