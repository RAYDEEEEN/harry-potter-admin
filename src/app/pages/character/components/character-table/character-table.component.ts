import { Component, Input } from '@angular/core';
import { Character } from '@shared/models/character';

@Component({
  selector: 'hpa-character-table',
  templateUrl: './character-table.component.html'
})
export class CharacterTableComponent {
  @Input() characters: Character[] = [];
}
