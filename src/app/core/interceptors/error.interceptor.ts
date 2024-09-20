import { inject } from "@angular/core";
import { HttpRequest, HttpErrorResponse, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";

export const errorInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
    const toaster: ToastrService = inject(ToastrService);

    return next(request)
        .pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    toaster.error(error.error);
                    return throwError(error);
                }
            )
        )
};