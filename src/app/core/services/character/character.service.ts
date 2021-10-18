import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('/api/characters');
  }
}
