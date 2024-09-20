import { HttpInterceptorFn } from '@angular/common/http';
import { errorInterceptor } from './interceptors/error.interceptor';

export const coreInterceptors: HttpInterceptorFn[] = [
    errorInterceptor
]