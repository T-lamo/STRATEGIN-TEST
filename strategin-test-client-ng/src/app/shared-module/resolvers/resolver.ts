import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpSharedService } from '../services/http-shared.service';
import { TABLE_ROWS } from '../constants';

export const userResolver = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const service = inject(HttpSharedService);
  return service
    .query('api/users', {
      first: 0,
      rows: TABLE_ROWS,
    })
    .post();
};
