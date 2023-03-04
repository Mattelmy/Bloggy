import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}

  PostsURL = 'http://100144.bloggy.ecole-it.devigne.space/posts/';
  AuthorsURL = 'http://100144.bloggy.ecole-it.devigne.space/authors/';

  /** Returns API url with post data */
  get_url() {
    return this.http.get(this.PostsURL);
  }

  /** Returns API url with author data */
  get_author_url() {
    return this.http.get(this.AuthorsURL);
  }

  /** Posts the given article into the API */
  post_article(article: any) {
    return this.http.post(this.PostsURL, article).subscribe();
  }

  /** Edits the given article (by its id) into the API */
  edit_article(article: any, postId: number | undefined) {
    return this.http.put(this.PostsURL + '?id=' + postId, article).subscribe();
  }

  /** Deletes the given article (by its id) from the API */
  delete_article(postId: number) {
    this.http.delete(this.PostsURL + '?id=' + postId).subscribe();
  }
}
