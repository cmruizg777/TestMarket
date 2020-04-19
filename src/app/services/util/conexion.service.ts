import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  constructor(private db: AngularFireDatabase) { }
  obtenerListaDe(list: string) {
    return this.db.list(list);
  }
}
