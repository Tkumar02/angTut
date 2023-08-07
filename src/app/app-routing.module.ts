import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    { path: 'nav', component: NavbarComponent},
    { path: 'post-list', component: PostListComponent},
    { path: 'post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
