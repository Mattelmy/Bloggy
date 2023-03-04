import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { PostsComponent } from './posts/posts.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { BloggyHeaderComponent } from './bloggy-header/bloggy-header.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { EditPostNotFoundComponent } from './edit-post-not-found/edit-post-not-found.component';
import { DetailedPostNotFoundComponent } from './detailed-post-not-found/detailed-post-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    PostsComponent,
    DetailedPostComponent,
    PagenotfoundComponent,
    AdminCreateComponent,
    BloggyHeaderComponent,
    AdminEditComponent,
    EditPostNotFoundComponent,
    DetailedPostNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
