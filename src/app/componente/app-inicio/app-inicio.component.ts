import { Component, OnInit } from '@angular/core';
import { AppGestionComponent } from '../app-gestion/app-gestion.component';
import { AppListaComponent } from '../app-lista/app-lista.component';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Autor, Citas } from 'src/app/Modelo/Citas';
//import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.component.html',
  styleUrls: ['./app-inicio.component.scss'],
  standalone: true,
  imports: [AppGestionComponent,AppListaComponent]
})
export class AppInicioComponent  implements OnInit {

  Listacita:Citas [] = []
  Listaautor:Autor[] = []

  constructor(
    private servicioService:ServicioService
  ) { }

  async ngOnInit() {
    await this.servicioService.iniciarPlugin()
    await this._actualizar()
  }

  async _actualizar(){
    this.Listacita = await this.servicioService.getCita()
    this.Listaautor = this.servicioService.getAutor()
  }

  async onCreateCitas($event: string) {
    const cita:Citas = {Cita: $event}
    await this.servicioService.agregarCita(cita)
    await this._actualizar
  }
  onCreatedAutores($event: string){
    const autor = new Autor ($event)
    this.servicioService.agregarAutor(autor)
  }
}

