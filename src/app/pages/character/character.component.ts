import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '@core/services/character/character.service';
import { Character } from '@shared/models/character';

@Component({
  selector: 'hpa-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  formGroup!: FormGroup;

  characters: Character[] = [];

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characterService.getAll().subscribe((data: Character[]) => {
      this.characters = data;
    });
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      house: ['', Validators.required],
      gender: ['', Validators.required],
      image: ['', Validators.required],
      species: ['', Validators.required]
    });
  }
}
