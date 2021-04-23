export class Article{
  readonly title: string;
  readonly link: string;
  private votes: number;

  constructor(title: string, link: string, votes?: number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void{
    this.votes += 1
  }

  voteDown(): void{
    this.votes -= 1
  }

  getVotes(): number{
    return this.votes;
  }

  domain(): string{
    try{
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }
    catch(err){
      return '';
    }
  }

}
