import { Component, OnInit, OnDestroy } from '@angular/core';
import { FronteggAuthService, FronteggAppService } from '@frontegg/angular';
import { Subscription } from 'rxjs';
import { FronteggThemeOptions } from '@frontegg/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;
  loadingSubscription: Subscription;
  user?: any;
  tenantState?: any;
  roles = ["Admin"];

  constructor(private fronteggAuthService: FronteggAuthService, private fronteggAppService: FronteggAppService) {
    this.loadingSubscription = fronteggAppService.isLoading$.subscribe((isLoading) => this.isLoading = isLoading)
    this.fronteggAuthService.tenantsState$.subscribe(tenantState => this.tenantState = tenantState)
    this.fronteggAuthService.switchTenant({tenantId: 'newTenantId'})
  }

  ngOnInit(): void {
    this.fronteggAuthService?.user$.subscribe((user) => {
      this.user = user
    })
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe()
  }

  // for hosted
  loginWithRedirect(): void {
    this.fronteggAuthService.loginWithRedirect();
  }

}