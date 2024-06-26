import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate([`/register`]);
  }
}
