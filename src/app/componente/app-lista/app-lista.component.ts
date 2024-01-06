import { Component, Input, OnInit } from '@angular/core';
import { Autor, Citas } from 'src/app/Modelo/Citas';
import { CommonModule } from '@angular/common';
import { IonList, IonItem,IonLabel } from '@ionic/angular/standalone';
@Component({
  selector: 'app-app-lista',
  templateUrl: './app-lista.component.html',
  styleUrls: ['./app-lista.component.scss'],
  standalone: true,
  imports: [CommonModule,IonList, IonItem,IonLabel]
})
export class AppListaComponent  implements OnInit {

  @Input() cita:Citas [] = [];
  @Input() autor:Autor [] = [];

  constructor() { }

  ngOnInit() {}

}
