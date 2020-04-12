import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AppService } from "../app.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  constructor(private appService: AppService) {}

  myForm: FormGroup;
  editMode = false;

  formData;

  ngOnInit() {
    this.appService.currentForm.subscribe((response) => {
      this.formData = response;
      this.editMode = this.formData.editMode;
      this.myForm = new FormGroup({
        _id: new FormControl(this.formData._id),
        name: new FormControl(this.formData.name),
        email: new FormControl(this.formData.email),
        message: new FormControl(this.formData.message),
      });
    });
  }

  onSubmit(form: FormGroup) {
    if (this.editMode) {
      this.appService.updateForm(form.value).subscribe((response) => {
        this.myForm.reset();
        this.editMode = false;
        this.appService.refreshForm("");
      });
    } else {
      this.appService.saveForm(form.value).subscribe((response) => {
        this.myForm.reset();
        this.editMode = false;
        this.appService.refreshForm("");
      });
    }
  }
}
