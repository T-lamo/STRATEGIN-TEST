import { Component, Input } from '@angular/core';
import { SVG_SIZE } from '../../../constants';

@Component({
  selector: 'app-close',

  templateUrl: './close.component.html',
  styleUrl: './close.component.scss',
})
export class CloseComponent {
  @Input() size: number = SVG_SIZE;
  @Input() color: string = 'black';
}
