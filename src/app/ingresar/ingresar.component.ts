import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Vehiculo } from '../vehiculo';
import { Mensaje } from '../mensaje';
import { ParqueaderoService } from '../parqueadero.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  vehiculo: Vehiculo;
  mensaje: Mensaje;
  placa: string;
  cilindraje: number;
  tipoVehiculo = '';

  constructor(private parqueaderoService: ParqueaderoService, private location: Location) { }

  ngOnInit() {
  }

  ingresarVehiculo() {

    this.vehiculo = {
        placa: this.placa.toUpperCase( ),
        fechaIngreso : '',
        cilindraje : this.cilindraje,
        tipoVehiculo: this.tipoVehiculo
    };

    this.parqueaderoService.ingresarVehiculo(this.vehiculo)
    .subscribe((response: Mensaje) => {
        this.mensaje = response;
        alert(this.mensaje.msg);
    });
    this.location.back();
  }
}
