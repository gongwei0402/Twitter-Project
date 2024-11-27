import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { HeaderComponent } from './shared/components/header.component';
import { FollowBarComponent } from './shared/components/follow-bar.component';
import { AvatarComponent } from './shared/components/avatar.component';
import { LoginModalComponent } from './shared/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './shared/auth/register-modal/register-modal.component';
import { ModalComponent } from './shared/components/modal.component';
import { ButtonComponent } from './shared/components/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelService } from './shared/services/model.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemsComponent } from './components/posts/post-items/post-items.component';
import { LoaderComponent } from './shared/components/loader.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form.component';
import { PostComponent } from './components/posts/post.component';
import { CommentsComponent } from './components/comments.component';
import { DateAgoPipe } from './shared/pipes/date-ago.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FollowBarComponent,
    AvatarComponent,
    RegisterModalComponent,
    ModalComponent,
    ButtonComponent,
    LoginModalComponent,
    UserProfileComponent,
    PostsComponent,
    PostItemsComponent,
    LoaderComponent,
    EditUserComponent,
    FormComponent,
    HomeComponent,
    PostComponent,
    CommentsComponent,
    DateAgoPipe,
  ],
  imports: [CommonModule, MainRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ModelService],
})
export class MainModule {}
