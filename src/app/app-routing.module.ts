import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayWordComponent } from './display-word/display-word.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { EnterWordComponent } from './enter-word/enter-word.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'post', component: PostComponent},
    { path: 'nav', component: NavbarComponent},
    { path: 'post-list', component: PostListComponent},
    { path: 'display', component: DisplayWordComponent},
    { path: 'enter', component: EnterWordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
