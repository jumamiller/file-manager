import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ministry'
})
export class MinistryPipe implements PipeTransform {

  transform(value: string):any {
    if(value=='12'){
      return "Ministry Of Agriculture";
    }
    else if(value=='13'){
      return "Ministry of Health";
    }
    else if(value=='14'){
      return "Ministry of Finance, Budget and Economic Planning";
    }

    else if(value=='15'){
      return "Ministry of Solid Minerals and Natural Resources";
    }
    else if(value=='16'){
      return "Ministry of Environment";
    }
    else if(value=='17'){
      return "Ministry of Sports and Youths Development";
    }
    else if(value=='18'){
      return "Ministry of Culture and Tourism";
    }
    else if(value=='19'){
      return "Ministry of Transportation";
    }
    else if(value=='20'){
      return "Ministry of Commerce and Industry";
    }else if(value=='21'){
      return "Ministry of Women Affairs and Social Development";
    }else if(value=='22'){
      return "Ministry of Water Resources";
    }else if(value=='23'){
      return "Ministry of Information";
    }else if(value=='24'){
      return "Ministry of Rural and Urban Development";
    }
    else if(value=='25'){
      return "Ministry of Local Government and Chieftancy Affairs";
    }
    else if(value=='26'){
      return "Ministry of Justice";
    }
    else if(value=='27'){
      return "Ministry of Works and Housing";
    }
    else if(value=='13'){
      return "Ministry of Health";
    }
    else if(value=='Education, Science and Technology'){
      return "Ministry of Health";
    }
    else{
      return "No Ministry Attached"
    }
  }

}
