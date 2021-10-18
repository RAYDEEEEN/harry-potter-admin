import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
const COMPONENTS = [MenuComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [...COMPONENTS]
})
export class CoreModule {}
