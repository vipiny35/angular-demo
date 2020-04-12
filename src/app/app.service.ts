import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

const BACKEND_URL = environment.apiUrl + "/";

@Injectable()
export class AppService {
  private formData = new BehaviorSubject("");
  currentForm = this.formData.asObservable();

  changeForm(form) {
    this.formData.next(form);
  }

  private refreshData = new BehaviorSubject("");
  refresh = this.refreshData.asObservable();

  refreshForm(form) {
    this.refreshData.next(form);
  }

  constructor(private http: HttpClient) {}

  getForms() {
    return this.http.get(BACKEND_URL);
  }

  saveForm(form) {
    return this.http.post(BACKEND_URL, form);
  }

  updateForm(form) {
    console.log(form);
    return this.http.put(BACKEND_URL + form._id, form);
  }

  deleteForm(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
