import { Author } from "../../../shared/models/author.model";
import { Person } from "../../../shared/models/person.model";
import { Place } from "../../../shared/models/place.model";
import { Publisher } from "../../../shared/models/publisher.model";
import { PublishingHistory } from "../../../shared/models/publishing-history.model";
import { Work } from "../../../shared/models/work.model";
import { Time } from "../../../shared/models/time.model";
import { Subject } from "../../../shared/models/subject.model";

export interface SubjectResponse {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  ebook_count: number;
  works: Work[];
  authors: Author[];
  publishers: Publisher[];
  subjects: Subject[];
  people: Person[];
  places: Place[];
  times: Time[];
  publishing_history: PublishingHistory[];
}
