import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "PUBG",
        description:"PUBG is an online battle royale game, meaning it is a survival game at its core.",
        creator:"Brendan Greene",
        imgURL:"data:image/jpeg;base64,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",
        type:"Mobile",
        tags: ["battle", "royale"]
      },
      {
        id: 1,
        title: "Counter strike",
        description:"Counter-Strike is a objective-based first-person shooter in which players are divided into the terrorist team and the counter-terrorist team.",
        creator:"George Orwell",
        imgURL:"data:image/jpeg;base64,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",
        type:"PC",
        tags: ["Thriller", "Gunfight"]
      },
      {
        id: 2,
        title: "Max Payne",
        description:"A game about a man and his life actions.",
        creator:"Jerry Mario",
        imgURL:"https://m.media-amazon.com/images/M/MV5BNzM5OTAxYmQtODRkZC00ZGZlLTlhNzYtNzFiODVjMTY4MWU2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        type:"PC",
        tags: ["A man", "Hospitalgame"]
      },
      {
        id: 3,
        title: "Need For Speed",
        description: "Game of car and missions.",
        creator: "Mr. andrew",
        imgURL: "https://media.contentapi.ea.com/content/dam/eacom/NFSNL/common/nfsnl-tu47-blog-thumbnail-image.jpg.adapt.crop16x9.431p.jpg",
        type: "PC",
        tags: ["Car", "Racing"]
      },
      {
        id: 4,
        title: "Call of duty",
        description: "Game which includes gun fights and battle royale",
        creator: "Usman firoz",
        imgURL: "https://cdn.akamai.steamstatic.com/steam/apps/1962663/capsule_616x353.jpg?t=1703006730",
        type: "Mobile and PC",
        tags: ["Battle", "COD"]
      }
      
    ];
  }
 
}