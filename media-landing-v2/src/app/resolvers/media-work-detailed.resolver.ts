import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, switchMap, of, map } from 'rxjs';
import { MediaWork, MediaWorkType } from '../models';
import { MediaWorkService } from '../services';

@Injectable({ providedIn: 'root' })
export class MediaWorkDetailedResolver implements Resolve<MediaWork | null> {
  constructor(private mediaWorkService: MediaWorkService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MediaWork | null> {
    const id = route.paramMap.get('id');
    if (!id) return of(null);
    // Fetch the single item, then load signed URLs list for its type and pick matching id
    return this.mediaWorkService
      .getById(id)
      .pipe(
        switchMap(
          (mw: MediaWork): Observable<MediaWork> =>
            this.mediaWorkService
              .listWithSignedUrls(mw.type as MediaWorkType)
              .pipe(
                map(
                  (list: MediaWork[]) =>
                    list.find((x: MediaWork) => x.id === mw.id) || mw
                )
              )
        )
      ) as Observable<MediaWork | null>;
  }
}
