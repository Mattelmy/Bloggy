import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Author } from '../Author';
import { Post } from '../Post';
import { Service } from '../service';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css'],
})
export class DetailedPostComponent {
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

  /** Returns specific author that matches id of the given post, or undefined if there is none */
  getAuthorById(post: Post | undefined): String | undefined {
    return this.AuthorsList.find((Author) => Author.id === post?.author_id)
      ?.full_name;
  }

  /** Returns specific post that matches the given id, or redirects to post-not-found page if there is none */
  getPostById(postId: number): Post | undefined {
    let post = this.PostsList.find((Post) => Post.id === +postId);

    if (post == undefined) {
      this.router.navigate(['post-not-found']);
      return undefined;
    }
    return post;
  }

  goToPosts(): void {
    this.router.navigate(['/posts']);
  }
}
