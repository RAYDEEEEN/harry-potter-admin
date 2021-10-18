import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '@core/services/character/character.service';

@Component({
  selector: 'hpa-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characterService.getAll().subscribe(res => {
      console.log(res);
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
