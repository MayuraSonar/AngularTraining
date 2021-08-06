import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-route-parameter",
  templateUrl: "./route-parameter.component.html",
  styleUrls: ["./route-parameter.component.css"],
})
export class RouteParameterComponent implements OnInit {
  Id: number;

  employeeID: number;
  Name: string;
  Location: string;
  constructor(private activate: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.activate.params.subscribe((p) => {
    //   this.Id = +p.id;
    // });

    this.activate.paramMap.subscribe((p: ParamMap) => {
      this.Id = +p.get("id");
    });
  }
  public QueryParameter() {
    this.router.navigate(["home"], {
      queryParams: { employeeID: 23, Name: "Mayura", Location: "Bangalore" },
    });
  }

  Redirect() {
    this.router.navigate(["/aboutus", { Id: this.Id }]);
  }
}
