import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const httpLoggerInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = performance.now();

  console.log(`[HTTP] ${req.method} ${req.urlWithParams} - iniciando requisição`);

  return next(req).pipe(
    tap({
      next: () => {
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);

        console.log({
          type: 'HTTP Request',
          method: req.method,
          url: req.urlWithParams,
          time: `${duration}ms`,
        });
      },

      error: (error) => {
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);

        console.warn(
          `[HTTP ERROR] ${req.method} ${req.urlWithParams} - Status: ${error.status} - ${duration}ms`
        );
      }
    })
  );
};
