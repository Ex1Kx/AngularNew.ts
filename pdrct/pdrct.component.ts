import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdrct',
  templateUrl: './pdrct.component.html',
  styleUrls: ['./pdrct.component.css']
})
export class PdrctComponent implements OnInit {
  public nombre_componentes = "componente producto";
  public listado_productos = 'Zapatos, Tenis, Ropa';
  constructor() { }

  ngOnInit(): void {
  }

}
