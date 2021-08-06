import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  ID: number;
  name: string;
  location: string;
  constructor(private activate: ActivatedRoute) {}

  ngOnInit() {}

  getQueryParamData() {
    this.ID = +this.activate.snapshot.queryParamMap.get("employeeID");
    console.log(this.ID);
    this.name = this.activate.snapshot.queryParamMap.get("Name");
    this.location = this.activate.snapshot.queryParamMap.get("Location");
    console.log(this.activate.snapshot.queryParamMap.keys);
    console.log(this.activate.snapshot.queryParamMap.has("Name"));
  }
}
