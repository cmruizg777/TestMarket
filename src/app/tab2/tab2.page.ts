import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../services/util/conexion.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  productos: any[] = [];
  constructor(private cnx: ConexionService) {}
  ngOnInit(): void {
    const s = this.cnx.obtenerListaDe('Productos')
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      data.forEach(item => {
        const a = item.payload.toJSON();
        this.productos.push(a);
      });
      console.log(this.productos);
    });
  }

}
