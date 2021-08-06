import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent implements OnInit {
  ID: number;
  constructor(private activate: ActivatedRoute) {}

  ngOnInit() {
    this.activate.paramMap.subscribe((p: ParamMap) => {
      this.ID = +p.get("Id");
    });
  }
}
