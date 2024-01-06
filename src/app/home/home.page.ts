import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ServicioService } from '../servicio/servicio.service';
import { Autor, Citas } from '../Modelo/Citas';
import { CommonModule } from '@angular/common';
import { AppInicioComponent } from '../componente/app-inicio/app-inicio.component';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';
import { addCircleOutline } from 'ionicons/icons';
import { AppGestionComponent } from '../componente/app-gestion/app-gestion.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [AppGestionComponent,RouterModule, AppInicioComponent, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,  IonButtons, IonButton, IonIcon,  ],
}) 
export class HomePage implements OnInit{

    constructor() {addIcons({
      settingsOutline,
      addCircleOutline
    })
  }
  ngOnInit(): void {
   
  }



}
