import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LateralComponent } from "./lateral/lateral.component";
import { CarruselngComponent } from "./carruselng/carruselng.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LateralComponent, CarruselngComponent]
})
export class AppComponent {
  title = 'otromas';
}
