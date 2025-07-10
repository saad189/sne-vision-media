// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// import { Observable } from 'rxjs';
// import { DeedService } from '../services/deed.service';
// import { ScheduledDeedModel } from '../models';

// @Injectable({
//     providedIn: 'root'
// })
// export class DeedDetailedResolver implements Resolve<ScheduledDeedModel> {
//     constructor(private deedService: DeedService) { }

//     resolve(route: ActivatedRouteSnapshot): Observable<ScheduledDeedModel> {
//         const id = route.paramMap.get('id');
//         return this.deedService.getDeedById(Number(id));
//     }
// }
