import { Component, Input } from '@angular/core';
import { SVG_SIZE } from '../../../constants';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  @Input() size: number = SVG_SIZE;
  @Input() color: string = 'black';
}
