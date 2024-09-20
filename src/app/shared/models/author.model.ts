import { Created } from "./created.model";
import { Type } from "./type.model";

export interface Author {
  name:            string;
  key:             string;
  type:            Type;
  latest_revision: number;
  revision:        number;
  created:         Created;
  last_modified:   Created;
}