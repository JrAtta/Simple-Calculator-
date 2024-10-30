import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculaterComponent } from './calculater/calculater.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculaterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Calc-app';
}
