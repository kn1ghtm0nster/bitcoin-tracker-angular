import { Component } from '@angular/core';
import { ImageContainerComponent } from './image-container/image-container.component';

@Component({
  selector: 'app-root',
  imports: [ImageContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bitcoin-tracker';
}
