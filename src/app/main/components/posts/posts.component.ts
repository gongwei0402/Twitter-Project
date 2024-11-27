import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../../interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  posts: Post[] = [];
  subscription!: Subscription;
  userId: string = '';

  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap?.subscribe(
      (params: ParamMap) => {
        this.userId = params.get('id') || '';
        this.loading = true;
        this.getPosts();
      }
    );
  }

  private getPosts(): void {
    this.subscription = this.postService.getPosts(this.userId).subscribe(
      (posts) => {
        this.posts = posts;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
