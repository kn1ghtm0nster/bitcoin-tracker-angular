import { Component } from '@angular/core';
import { ImageContainerComponent } from './image-container/image-container.component';
import { PriceDisplayComponent } from './price-display/price-display.component';

@Component({
  selector: 'app-root',
  imports: [ImageContainerComponent, PriceDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bitcoin-tracker';
}
