import {Observable} from "rxjs";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'
export class SweetAlertHelper {
  /**
   * @return approval
   * @param title
   * @param text
   * @param input
   * @param inputPlaceholder
   * @param icon
   * @param showCancelButton
   * @param confirmButtonText
   * @param cancelButtonText
   * @param comments
   * @param callback
   */
  sweetAlertPopups(
    title: string,
    text: string,
    input: string,
    inputPlaceholder: string,
    icon: string,
    showCancelButton: boolean,
    confirmButtonText: string,
    cancelButtonText: string,
    comments: string,
    callback: Observable<any>,
  )
  {
    // @ts-ignore
    return Swal.fire({
      title: title,
      text: text,
      input: input,
      inputPlaceholder:inputPlaceholder,
      icon: icon,
      showCancelButton: showCancelButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    }).then((result) => {
      if(result.value)
      {
        callback.subscribe((res) =>{
          if(res!=null)
          {
            if(res.success)
            {
              Swal.fire(
                'Congratulations,!',
                `${res.message}`,
                'success'
              );
            }
            else
            {
              Swal.fire(
                'Failed,!',
                `${res.message}`,
                'warning'
              );
            }
          }
          else
          {
            Swal.fire(
              'Failed,!',
              `Server Error`,
              'error'
            );
          }
        }, error => {
          Swal.fire(
            'Failed,!',
            `${error}`,
            'error'
          );
        });
      }
      else if(result.dismiss === Swal.DismissReason.cancel)
      {
        Swal.fire(
          'Cancelled',
          'Your request cancelled',
          'error'
        );
      }
      else
      {
        callback.subscribe(res => {
          if(res.success)
          {
            Swal.fire(
              'Congratulations,!',
              `${res.message}`,
              'success'
            );
          }
          else
          {

            Swal.fire(
              'Failed,!',
              `${res.message}`,
              'warning'
            );
          }
        });
      }
    })
  }
}
