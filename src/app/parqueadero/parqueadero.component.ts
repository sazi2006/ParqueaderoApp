import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { ParqueaderoService } from '../parqueadero.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {

  selectedVehiculo: Vehiculo;

  vehiculos: Vehiculo[];

  constructor(private parqueaderoService: ParqueaderoService) { }

  ngOnInit() {
    this.consultarVehiculos();
  }

  onSelect(vehiculo: Vehiculo): void {
    this.selectedVehiculo = vehiculo;
  }

  consultarVehiculos(): void {
    this.parqueaderoService.consultarVehiculos().subscribe((data: Vehiculo[]) => this.vehiculos = data);
  }
}
