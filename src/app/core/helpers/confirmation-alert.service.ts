import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationAlertService {

  timerInterval:any;
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: showCancelButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
    }).then((result) => {
      if(result.value)
      {
        callback.subscribe((res) =>{
          if(res!=null)
          {
            if(res.success)
            {
              this.swalWithBootstrapButtons.fire(
                'Congratulations,!',
                `${res.message}`,
                'success'
              );
              this.reloadCurrentRoute();
            }
            else
            {
              this.swalWithBootstrapButtons.fire(
                'Failed,!',
                `${res.message}`,
                'warning'
              );
            }
          }
          else
          {
            this.swalWithBootstrapButtons.fire(
              'Failed,!',
              `Server Error`,
              'error'
            );
          }
        }, error => {
          this.swalWithBootstrapButtons.fire(
            'Failed,!',
            `${error}`,
            'error'
          );
        });
      }
      else if(result.dismiss === Swal.DismissReason.cancel)
      {
        this.swalWithBootstrapButtons.fire(
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
            this.swalWithBootstrapButtons.fire(
              'Congratulations,!',
              `${res.message}`,
              'success'
            );
            this.reloadCurrentRoute();
          }
          else
          {

            this.swalWithBootstrapButtons.fire(
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
