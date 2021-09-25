import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationAlertService {

  constructor(private router:Router) {
  }
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
  sweetAlert(
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
              this.reloadCurrentRoute();
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
          'Your request to cancel this operation was processed successfully!',
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
            this.reloadCurrentRoute();
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

  /**
   * reload
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
