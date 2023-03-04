import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post-not-found',
  templateUrl: './edit-post-not-found.component.html',
  styleUrls: ['./edit-post-not-found.component.css'],
})
export class EditPostNotFoundComponent {
  constructor(private router: Router) {}

  goToAdmin(): void {
    this.router.navigate(['admin']);
  }
}
