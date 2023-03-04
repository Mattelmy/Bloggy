import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { AdministrationComponent } from './administration/administration.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { EditPostNotFoundComponent } from './edit-post-not-found/edit-post-not-found.component';
import { DetailedPostNotFoundComponent } from './detailed-post-not-found/detailed-post-not-found.component';

const routes: Routes = [
  { path: 'admin', component: AdministrationComponent },
  { path: 'admin/create', component: AdminCreateComponent },
  { path: 'admin/:id/edit', component: AdminEditComponent },
  { path: 'admin/post-not-found', component: EditPostNotFoundComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: DetailedPostComponent },
  { path: 'post-not-found', component: DetailedPostNotFoundComponent },

  /** Redirects to default page */
  { path: '', redirectTo: 'posts', pathMatch: 'full' },

  /** Redirects to 404 page if URL is invalid */
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
