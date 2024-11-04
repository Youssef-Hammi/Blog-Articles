// src/app/models/article.model.ts
export class Article {
    constructor(
      public title: string,
      public photoUrl: string,
      public date: Date,
      public description: string,
      public score: number = 0
    ) {}
  }
  