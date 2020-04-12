import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { FormComponent } from "./form/form.component";
import { AppService } from "./app.service";

@NgModule({
  declarations: [AppComponent, TableComponent, FormComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
