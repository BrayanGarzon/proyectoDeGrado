import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { SitesComponent } from './sites/sites.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowcommentsComponent } from './showcomments/showcomments.component';
import { ShowsitesComponent } from './showsites/showsites.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreditosComponent } from './creditos/creditos.component';
import { InfoPerfilUsuarioComponent } from './info-perfil-usuario/info-perfil-usuario.component';
import { ShowSitesCategoryComponent } from './show-sites-category/show-sites-category.component';
import { ShowSitesByCategoryComponent } from './show-sites-by-category/show-sites-by-category.component';
import { InfoUserCommentComponent } from './info-user-comment/info-user-comment.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DiscoverComponent,
    SitesComponent,
    ContactComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    CommentComponent,
    ShowcommentsComponent,
    ShowsitesComponent,
    UpdateuserComponent,
    CreditosComponent,
    InfoPerfilUsuarioComponent,
    ShowSitesCategoryComponent,
    ShowSitesByCategoryComponent,
    InfoUserCommentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  ]
})
export class PagesModule { }
