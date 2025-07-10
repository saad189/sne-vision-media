import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';
import { ApiService } from '.';
import { DatePipeCustom } from '../pipes/date.pipe';
import { ToastrNotificationService } from './toastr.service';

import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class DeedService {
  private dateCustomPipe = new DatePipeCustom();
  private endpoint = 'deeds';

  constructor(
    private readonly apiService: ApiService,
    private utilityService: UtilityService,
    private toastr: ToastrNotificationService
  ) { }

  // getAllDeeds(): Observable<ScheduledDeedModel[]> {
  //   return this.apiService
  //     .get<ScheduledDeedModel[]>(this.endpoint)
  //     .pipe(map((deeds) => this.transformAllDataForTable(deeds)));
  // }

  // getDeedById(id: number): Observable<ScheduledDeedModel> {
  //   return this.apiService.get<ScheduledDeedModel>(`${this.endpoint}/${id}`);
  // }

  // createDeed(deed: CreateScheduledDeedModel): Observable<ScheduledDeedModel> {
  //   return this.apiService
  //     .post<ScheduledDeedModel>(this.endpoint, {
  //       ...deed,
  //       type: DEED_TYPE.STAND_ALONE,
  //     })
  //     .pipe(
  //       tap(() => {
  //         this.toastr.showSuccess('Success', 'Deed successfully created');
  //         this.userDeedConfigService.bulkCreateUserDeedConfigs().subscribe();
  //       })
  //     );
  // }

  // updateDeed(deed: UpdateScheduledDeedModel): Observable<ScheduledDeedModel> {
  //   return this.apiService
  //     .put<ScheduledDeedModel>(this.endpoint, deed)
  //     .pipe(
  //       tap(() =>
  //         this.toastr.showSuccess('Success', `Deed with id: ${deed.id} updated`)
  //       )
  //     );
  // }

  // deleteDeed(id: number) {
  //   return this.apiService
  //     .delete(`${this.endpoint}/${id}`)
  //     .pipe(
  //       tap(() => this.toastr.showInfo('Info', `Deed with id: ${id} deleted`))
  //     );
  // }

  // transformDataForTable(deed: ScheduledDeedModel): any {
  //   return {
  //     ...deed,
  //     dateAdded: this.dateCustomPipe.transform(deed.dateAdded),
  //     dateUpdated: this.dateCustomPipe.transform(deed.dateUpdated),
  //     references: null,
  //     type: null,
  //     isActive: null,
  //     action: this.utilityService.toTitleCase(deed.action),
  //   };
  // }

  // private transformAllDataForTable(deeds: ScheduledDeedModel[]): any[] {
  //   return deeds.map((deed) => this.transformDataForTable(deed));
  // }
}
