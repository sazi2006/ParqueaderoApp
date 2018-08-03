import { Component, OnInit, Input} from '@angular/core';

import { Vehiculo } from '../vehiculo';
import { Mensaje } from '../mensaje';
import { ParqueaderoService } from '../parqueadero.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
   @Input() vehiculo: Vehiculo;
   mensaje: Mensaje;

   constructor(private parqueaderoService: ParqueaderoService) { }
   ngOnInit() {
  }

  retirarVehiculo() {

    this.parqueaderoService.retirarVehiculo(this.vehiculo)
    .subscribe((response: Mensaje) => {
      this.mensaje = response;
      alert(this.mensaje.msg);
      window.location.reload();
    });
  }
}
