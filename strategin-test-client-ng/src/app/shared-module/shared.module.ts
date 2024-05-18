import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CloseComponent } from './components/icons/close/close.component';
import { LogoutComponent } from './components/icons/logout/logout.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpSharedService } from './services/http-shared.service';

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
