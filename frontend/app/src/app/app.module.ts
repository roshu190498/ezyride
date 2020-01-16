import { RegisterAdminService } from './register/register.service';
import { RegisterAdminComponent } from './register/register.comonent';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { ProviderRegistrationService } from './provider_registration/provider_registration.service';
import { ComplaintService } from './complaint/complaint.service';
import { PromotionService } from './promotion/prmotion.service';
import { TransactionService } from './transaction/transaction.service';
import { ConsumerService } from './service_consumer/service_consumer.service';
import { ProviderService } from './service_provider/service_provider.service';
import { ServiceProviderComponent } from './service_provider/service_provider.component';
import { ProviderRegistrationComponent } from './provider_registration/provider_registration.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ServiceConsumerComponent } from './service_consumer/service_consumer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProviderActiveComponent } from './service_provider/service-provider-active/service-provider-active.component';
import { ServiceProviderInactiveComponent } from './service_provider/service-provider-inactive/service-provider-inactive.component';
import { ServiceConsumerActiveComponent } from './service_consumer/service-consumer-active/service-consumer-active.component';
import { ServiceConsumerInactiveComponent } from './service_consumer/service-consumer-inactive/service-consumer-inactive.component';

const routes: Route[] =
  [
    { path: 'service-provider', component: ServiceProviderComponent },
    { path: 'service-consumer', component: ServiceConsumerComponent },
    { path: 'transaction-debit', component: TransactionComponent },
    { path: 'promotion', component: PromotionComponent },
    { path: 'register', component: RegisterAdminComponent },
    { path: 'complaint', component: ComplaintComponent },
    { path: 'login', component: LoginComponent },
    { path: 'provider-registration', component: ProviderRegistrationComponent },
    { path: '', component: ServiceProviderComponent },
    { path: '**', component: ErrorComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    ServiceConsumerComponent,
    ComplaintComponent,
    PromotionComponent,
    TransactionComponent,
    ProviderRegistrationComponent,
    ServiceProviderComponent,
    ErrorComponent,
    LoginComponent,
    RegisterAdminComponent,
    ServiceProviderActiveComponent,
    ServiceProviderInactiveComponent,
    ServiceConsumerActiveComponent,
    ServiceConsumerInactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProviderService,
    ConsumerService,
    TransactionService,
    PromotionService,
    ComplaintService,
    ProviderRegistrationService,
    LoginService,
    RegisterAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
