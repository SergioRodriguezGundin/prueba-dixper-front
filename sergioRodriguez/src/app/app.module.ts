import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreGuard } from './services/guards/score-guard.service';
import { ErrorComponent } from './components/common/error/error.component';
import { configReducer } from './redux/reducers/config.reducer';
import { SwitchThemeComponent } from './components/common/switch-theme/switch-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SwitchThemeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('config', configReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [ScoreGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
