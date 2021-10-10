import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'imgDefault'
})

export class imgDefaultPipe implements PipeTransform {

  transform(box: any): any {

    if (!box){
      return '../../assets/userPlaceHolder.jpeg';
    }

    const imgUrl = `${box}`;
    return imgUrl;
  }

}