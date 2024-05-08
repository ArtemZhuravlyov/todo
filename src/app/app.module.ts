import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from "@angular/fire/compat";
import { firebaseConfig } from "./core/firebase/firebase";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./screens/main/main.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MainComponent,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
