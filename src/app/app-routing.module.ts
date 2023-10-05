import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TcComponent } from './pages/tc/tc.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'category/:category/:id', component: SingleCategoryComponent},
    { path: 'post/:id', component: SinglePostComponent},
    { path: 'tc', component: TcComponent},
    { path: 'card', component: PostCardComponent},
    { path: 'about', component: AboutUsComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
