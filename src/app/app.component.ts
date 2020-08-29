import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
//import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-clone';
}
