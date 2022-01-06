import {
  AfterContentInit,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FronteggAuthService } from '@frontegg/angular';

@Directive({
  selector: '[authorizedContent]',
})
export class AuthorizeDirective implements AfterContentInit {
  private _roles: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private fronteggAuthService: FronteggAuthService
  ) {}

  @Input()
  set authorizedContent(roles: string[]) {
    this._roles = roles;
  }

  ngAfterContentInit() {
    this.fronteggAuthService.user$.subscribe((user) => {
      if (user?.roles?.some((role) => this._roles.includes(role.name))) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
