import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';
import { CharacterTableComponent } from './character/components/character-table/character-table.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [CharacterTableComponent, CharacterComponent],
  imports: [CommonModule, PagesRoutingModule, ReactiveFormsModule, FormsModule]
})
export class PagesModule {}
