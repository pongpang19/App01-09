import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow,IonCol,IonLabel,IonButton,IonItem} 
from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonGrid, IonRow,IonCol,IonLabel,IonButton,IonItem ],
})
export class HomePage {
  constructor() {}
}
