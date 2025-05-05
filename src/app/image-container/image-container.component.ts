import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-container',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css',
})
export class ImageContainerComponent {}
