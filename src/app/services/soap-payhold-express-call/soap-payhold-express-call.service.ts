// src/app/services/soap-payhold-express-call/soap-payhold-express-call.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the structure of the data we expect in the response
interface SuspendCustomerResponse {
  custsuspensionid: string;
}

@Injectable({
  providedIn: 'root'  // Provides the service at the root level
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api';  // Express server base URL

  constructor(private http: HttpClient) {}

  suspendCustomer(custref: string, requestcode: string, requestcomment: string): Observable<SuspendCustomerResponse> {
    const body = { custref, requestcode, requestcomment };
    return this.http.post<SuspendCustomerResponse>(`${this.apiUrl}/suspend-customer`, body);
  }

  // Example of a health check API call
  healthCheck(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/get-health-check`);
  }
}
