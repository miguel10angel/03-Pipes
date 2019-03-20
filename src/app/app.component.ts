import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre ="Mike";
  nombreCompleto="miguel anGel hernAndez goMez";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI= 3.14159265358979323846;

  PI2=Math.PI;

  a=0.234;

  salario=1234.5;

  fecha = new Date();

  video="H1siNXpu8QY";

  heroe={
      nombre:'Miguel Angel',
      clave:'Mike',
      edad:23,
      direccion:{
          calle:'su casa',
          barrio:'su casa'
      }

  };

  valorDePromea=new Promise((resolve, reject)=>{
      setTimeout(()=>resolve('llego la data'),3500)
  });

  contrasenia="Mike";
  cambiar=true;
}
