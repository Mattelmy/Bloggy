import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from '../Author';
import { Post } from '../Post';
import { Service } from '../service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent {
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

  /** Returns specific author that matches id of the given post, or undefined if there is none */
  getAuthorById(post: Post): String | undefined {
    return this.AuthorsList.find((Author) => Author.id === +post.author_id)
      ?.full_name;
  }

  goToEdit(): void {
    this.router.navigate(['admin/create']);
  }

  /** Calls the delete function from service.ts */
  deletePost(PostId: number): void {
    this.service.delete_article(PostId);
  }
}
