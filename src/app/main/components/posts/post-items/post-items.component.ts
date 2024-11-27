import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../interface';
import { AuthService } from '../../../shared/services/auth.service';
import { PostsService } from '../../../shared/services/posts.service';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
})
export class PostItemsComponent {
  @Input() post!: Post;

  constructor(
    public auth: AuthService,
    private router: Router,
    private postService: PostsService
  ) {}

  goToUser(id: string | undefined): void {
    this.router.navigate(['user', id]);
  }

  toggleLike(event: Event): void {
    event.stopPropagation();
    if (this.post.postId) {
      this.postService
        .toggleLike(this.post.postId, this.auth.loggedInUserId)
        .subscribe();
    }
  }

  goToPost(id: string | undefined): void {
    this.router.navigate(['post', id]);
  }
}
