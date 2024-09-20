import { Type } from "./type.model"
export interface AuthorDetails{
  numFound:      number;
  start:         number;
  numFoundExact: boolean;
  docs:          Doc[];
}

export interface Doc {
  alternate_names?: string[];
  key:              string;
  name:             string;
  top_subjects?:    string[];
  top_work:         string;
  type:             Type;
  work_count:       number;
  _version_:        number;
  date?:            string;
  birth_date?:      string;
  death_date?:      string;
}
export interface Author {
  name:   string;
  key:   string;
  type:   Type;
  author: Type;
}