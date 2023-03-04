import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Author } from '../Author';
import { Post } from '../Post';
import { Service } from '../service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
})
export class AdminEditComponent {
  constructor(
    private service: Service,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let PostId: number;

    /** Getting post id from the URL parameter */
    this.route.params.subscribe((params) => {
      PostId = params['id'];
    });

    /** Post data and targeted post assignement */
    this.service.get_url().subscribe((posts_data: any) => {
      this.PostsList = posts_data;
      this.post = this.getPostById(PostId);
    });

    /** Authors data assignement */
    this.service.get_author_url().subscribe((authors_data: any) => {
      this.AuthorsList = authors_data;
    });
  }

  PostsList: Post[] = [];
  AuthorsList: Author[] = [];
  post: Post | undefined;

  titleMaxLength: number = 50;
  resumeMaxLength: number = 50;

  /** Returns specific author that matches id of the given post, or undefined if there is none */
  getAuthorById(post: Post | undefined): String | undefined {
    return this.AuthorsList.find((Author) => Author.id === post?.author_id)
      ?.full_name;
  }

  /** Returns specific post that matches the given id, or redirects to admin/post-not-found page if there is none */
  getPostById(postId: number): Post | undefined {
    let post = this.PostsList.find((Post) => Post.id === +postId);

    if (post == undefined) {
      this.router.navigate(['admin/post-not-found']);
      return undefined;
    } else {
      return post;
    }
  }

  /** Checks if the given post title is already used by other posts, to avoid duplicates (but keeping
   * the same title as before editing the post is valid) */
  checkIfPostNameTaken(title: NgModel): boolean {
    if (this.post?.title == title.value) {
      return false;
    } else if (this.PostsList.find((Post) => Post.title === title.value)) {
      return true;
    } else {
      return false;
    }
  }

  /** Submits data and redirects on admin page */
  submit(formValue: {
    title: string | undefined;
    resume: string | undefined;
    content: string | undefined;
    author_id: number | undefined;
    image_url: string | undefined;
  }): void {
    /** If a field in the form is left untouched, it will return an undefined value when the form is submitted.
     * In that case, we need to assign back the original data.
     */

    if (!formValue.title) {
      formValue.title = this.post?.title;
    }
    if (!formValue.resume) {
      formValue.resume = this.post?.resume;
    }
    if (!formValue.content) {
      formValue.content = this.post?.content;
    }
    if (!formValue.author_id) {
      formValue.author_id = this.post?.author_id;
    }
    if (!formValue.image_url) {
      formValue.image_url = this.post?.image_url;
    }
    this.service.edit_article(formValue, this.post?.id);
    this.goToAdmin();
  }

  goToAdmin(): void {
    this.router.navigate(['admin']);
  }
}
