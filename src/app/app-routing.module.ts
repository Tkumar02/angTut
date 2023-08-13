import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TcComponent } from './pages/tc/tc.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'category', component: SingleCategoryComponent},
    { path: 'post', component: SinglePostComponent},
    { path: 'tc', component: TcComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
