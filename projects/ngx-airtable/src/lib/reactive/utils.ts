import {share} from 'rxjs/operators';

import {Link} from '../interfaces';
import { Table } from '../node-port/table';

// export const _extendLinked = (record: any, links: Link[]): any => {
//   links.forEach((link: Link) => {
//     record[link.linkSelector] = new Table(link.target)
//     // record[link.linkSelector] = base
//     //   .table(link.target)
//       .select({
//         filterByFormula: link.linkFilter(record)
//       })
//       .all()
//       .pipe(
//         share()
//       );
//   });

//   return record;
// };
