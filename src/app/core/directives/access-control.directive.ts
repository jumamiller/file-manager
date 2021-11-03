import {ComponentFactoryResolver,  Directive,  Input,  OnInit,  TemplateRef,  ViewContainerRef} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {CurrentUserService} from "../services/current-user.service";
import {UnauthorisedComponent} from "../../unauthorised/unauthorised.component";

@Directive({
  selector: '[appAccessControl]'
})

export class AccessControlDirective implements OnInit{

  @Input('appAccessControl') appAccessControl;

  constructor(
    private currentUserService: CurrentUserService,
    private toastrService: ToastrService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.checkPermissionExistence();
  }

  /**
   * check perms
   */
  checkPermissionExistence()
  {
    let type = this.appAccessControl[1];
    let comparison=this.comparePermissions(this.appAccessControl[0]);
    if(comparison)
    {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      if (type === 'page')
      {
        const unauthorized = this.cfr.resolveComponentFactory(UnauthorisedComponent);
        this.viewContainer.createComponent(unauthorized);
      }
      else
      {
        this.viewContainer.clear();
      }
    }
  }

  /**
   *
   * @param currentUserPermission
   */
  // @ts-ignore
  comparePermissions(currentUserPermission)
  {
    // Get the current active user
    let currentAdminUser= this.currentUserService.getCurrentUser().data;
    //roles[0] gets the first element since the endpoint returns roles as array instead of object
     if(currentAdminUser.roles[0]!=null)
     {
       for (let perm of currentAdminUser.roles[0].permissions)
       {
         if(perm.name === currentUserPermission) {
           return true;
         }
       }
       return false;
     }
     else
     {

     }
  }
}
