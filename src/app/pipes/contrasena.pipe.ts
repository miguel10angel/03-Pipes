import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, cambiar:Boolean=true): any {
    if (cambiar) {
        let cambiado="";
        
        for(let i=0; i<value.length; i++){
            cambiado+="*";
        }
        return cambiado;
    }else
    return value;
  }

}
