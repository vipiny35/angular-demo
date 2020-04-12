import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AppService } from "../app.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  constructor(private appService: AppService) {}

  myForm: FormGroup;
  editMode = false;
  loaded = false;
  forms: any;

  ngOnInit() {
    this.appService.refresh.subscribe((response) => {
      this.appService.getForms().subscribe((response) => {
        this.forms = response;
        this.loaded = true;
      });
    });
  }

  edit(form) {
    form.editMode = true;
    this.appService.changeForm(form);
  }

  delete(id) {
    this.appService.deleteForm(id).subscribe((response) => {
      this.appService.refreshForm("");
    });
  }
}
