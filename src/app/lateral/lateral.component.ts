import { Component } from '@angular/core';
import { CarruselngComponent } from "../carruselng/carruselng.component";
import { CardngComponent } from "../cardng/cardng.component";
import { FeaturengComponent } from "../featureng/featureng.component";

@Component({
    selector: 'app-lateral',
    standalone: true,
    templateUrl: './lateral.component.html',
    styleUrl: './lateral.component.css',
    imports: [CarruselngComponent, CardngComponent, FeaturengComponent]
})
export class LateralComponent {

}
