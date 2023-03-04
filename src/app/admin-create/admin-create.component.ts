import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { Author } from '../Author';
import { Post } from '../Post';
import { Service } from '../service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css'],
})
export class AdminCreateComponent {
  constructor(private service: Service, private router: Router) {
    /** Post data assignement */
    this.service.get_url().subscribe((posts_data: any) => {
      this.PostsList = posts_data;
    });

    /** Authors data assignement */
    this.service.get_author_url().subscribe((authors_data: any) => {
      this.AuthorsList = authors_data;
    });
  }

  PostsList: Post[] = [];
  AuthorsList: Author[] = [];

  titleMaxLength: number = 50;
  resumeMaxLength: number = 50;

  /** Checks if the given post title is already used by other posts */
  checkIfPostNameTaken(title: NgModel): boolean {
    if (this.PostsList.find((Post) => Post.title === title.value)) {
      return true;
    } else {
      return false;
    }
  }

  /** Submits data and redirects on admin page */
  submit(formValue: {
    title: string;
    resume: string;
    content: string;
    author_id: number;
    image_url: string;
  }): void {
    this.service.post_article(formValue);
    this.goToAdmin();
  }

  goToAdmin(): void {
    this.router.navigate(['admin']);
  }
}
