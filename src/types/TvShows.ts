export interface TvShows {
  Cast: Cast[];
  Genres: Genres[];
  ID: number;
  Images: ImageEpisodes;
  Synopsis: string;
  Title: string;
  Year: number;
}

export interface Cast {
  ID: string;
  Name: string;
}
export interface Genres {
  ID: string;
  Title: string;
}

export interface ImageEpisodes {
  Background: string;
}
