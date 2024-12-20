import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../shared/services/config.service';

@Component({
  selector: 'app-post',
  template: `
    <div class="flex justify-center align-middle" *ngIf="loading">
      <app-loader></app-loader>
    </div>
    <app-post-items *ngIf="post" [post]="post"></app-post-items>
    <app-form
      placeholder="Tweet your reply"
      [postId]="post?.postId"
      [isComment]="true"
    ></app-form>
    <app-comments *ngIf="post" [postId]="post.postId"></app-comments>
  `,
  styles: ``,
})
export class PostComponent implements OnInit {
  post!: any;
  loading: boolean = true;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.config.updateHeaderSettings('Tweet', true);
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchPost(postId);
  }

  fetchPost(postId: string | null): void {
    if (postId) {
      this.postsService.getPost(postId).subscribe((post) => {
        this.post = post;
        this.loading = false;
      });
    }
  }
}
