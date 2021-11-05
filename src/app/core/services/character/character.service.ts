import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@shared/models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>('/api/characters');
  }
}
