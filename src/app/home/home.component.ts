import { Component } from '@angular/core';
import { MdGridListModule } from '@angular/material/grid-list';
import { MdCard } from '@angular/material/card'
import {HTTP_PROVIDERS} from '@angular/http';
import {PostService} from '../webservice';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers: [PostService,MdGridListModule,MdCard,HTTP_PROVIDERS]
})

export class HomeComponent {
  constructor(private _postService: PostService) {
      this._postService.getPosts()
      .subscribe(posts => console.log("ok")); 
         
  }
}
