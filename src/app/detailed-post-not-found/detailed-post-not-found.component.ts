import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-post-not-found',
  templateUrl: './detailed-post-not-found.component.html',
  styleUrls: ['./detailed-post-not-found.component.css'],
})
export class DetailedPostNotFoundComponent {
  constructor(private router: Router) {}

  goToPosts(): void {
    this.router.navigate(['/posts']);
  }
}
