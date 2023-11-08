import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
        lat +
        '&lon=' +
        lon +
        '&units=metric&appid=e5d87a73521490523e470ba34a2f088f'
    );
  }
}
