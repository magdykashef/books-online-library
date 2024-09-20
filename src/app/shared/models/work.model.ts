import { Author } from "./author.model";

export interface Work {
  key: string;
  title: string;
  edition_count: number;
  authors: Author[];
  has_fulltext: boolean;
  ia: string;
  first_publish_year: number;
  cover_id: number;
  cover: string; // front-end only
}