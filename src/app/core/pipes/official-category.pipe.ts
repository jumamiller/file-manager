import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'officialCategory'
})
export class OfficialCategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value=='1'){
      return 'The Cabinet';
    }
    else if(value=='2'){
      return 'The Government House';
    }
    else if(value=='3'){
      return 'Head Of Agencies / Bureaus';
    }
    else if(value=='4'){
      return 'Local Government Councils';
    }
    else if(value=='5'){
      return 'Vice Chancellor / Rector / provost';
    }
    else if(value=='6'){
      return 'Permanent Secretary / Directors';
    }
    else {
      return 'Pros / Support Staff / Admin';
    }
  }

}
