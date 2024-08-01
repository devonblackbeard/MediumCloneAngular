import { HttpInterceptor, HttpInterceptorFn } from "@angular/common/http";
import { PersistenceService } from "./persistence.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const persistanceService = inject(PersistenceService)
    const token = persistanceService.get('accessToken');
    request = request.clone({
        setHeaders: {
            Authorization: token ? `Token ${token}` : '',
        }
    });

    return next(request);
}