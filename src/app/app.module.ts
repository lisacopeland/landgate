import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './+store/app.reducer';
import { PeopleEffects } from './+store/people.effects';
import { peopleReducer } from './+store/people.reducer';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';

import { PeopleNgrxComponent } from './components/people-ngrx/people-ngrx.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PeopleNgrxComponent,
    PersonEditComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    TableModule,
    StoreModule.forRoot(appReducers, {
      metaReducers: !environment.production ? [] : [],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([PeopleEffects]),
    StoreModule.forRoot({ people: peopleReducer }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 100, // Retains last 100 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
