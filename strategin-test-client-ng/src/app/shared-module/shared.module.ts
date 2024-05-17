import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpSharedService } from './services/http-shared.service';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { CloseComponent } from './components/icons/close/close.component';
import { LogoutComponent } from './components/icons/logout/logout.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    LogoutComponent,
    CloseComponent,
  ],
  imports: [CommonModule, SidebarModule, PaginatorModule],
  providers: [HttpSharedService, DatePipe],
  exports: [HomeComponent, LayoutComponent, HeaderComponent, PaginatorModule],
})
export class SharedModule {}
