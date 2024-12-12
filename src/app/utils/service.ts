import { HttpHeaders } from "@angular/common/http";

export const getBasicHttpOptions = (token: string): HttpHeaders | {
    [header: string]: string | string[];
} => {
    const header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    return header;
}