import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
 import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PreloaderComponent } from './preloader/preloader.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { FooterComponent } from './footer/footer.component';
import { ParticlesModule } from 'angular-particle';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DemopageComponent } from './demopage/demopage.component';
import { OursecretComponent } from './oursecret/oursecret.component';
import { LinecompComponent } from './linecomp/linecomp.component';
import { ParticalOneComponent } from './partical-one/partical-one.component';
import { ClockOneComponent } from './clock-one/clock-one.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqComponent } from './faq/faq.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { CookieService } from 'ngx-cookie-service';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ServicesComponent,
    PreloaderComponent,
    OurteamComponent,
    FooterComponent,
    DemopageComponent,
    OursecretComponent,
    LinecompComponent,
    ParticalOneComponent,
    ContactsComponent,
    ClockOneComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    FaqComponent,
    LandingpageComponent,
    TermConditionComponent,
    BlogComponent,

    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ParticlesModule,
    LazyLoadImageModule,
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})


export class AppModule {}
