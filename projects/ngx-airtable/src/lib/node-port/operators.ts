import { map } from 'rxjs/operators';

export const firstPage = () => map((result: any) => result.records);
