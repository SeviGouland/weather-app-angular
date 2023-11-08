import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  lat!: number;
  lon!: number;
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.lat, this.lon);

    let lat = 37.98381;
    let lon = 23.727539;
    this.weatherService.getWeatherData(lat, lon).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.base);
        this.weatherData = response;
      },
    });
  }

  onSubmit() {
    this.getWeatherData(this.lat, this.lon);
  }

  private getWeatherData(lat: any, lon: any) {
    this.weatherService.getWeatherData(lat, lon).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
