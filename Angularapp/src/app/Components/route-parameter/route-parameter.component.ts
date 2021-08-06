import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-parameter',
  templateUrl: './route-parameter.component.html',
  styleUrls: ['./route-parameter.component.scss']
})
export class RouteParameterComponent implements OnInit {
 ID: number;
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    // this.activeroute.params.subscribe((p) => {
    //   this.ID = +p.id;
    // });

    this.activeroute.paramMap.subscribe((p: ParamMap) => {
      // to convert the string value to number
      this.ID = +p.get('id');
      console.log(this.ID);
    });
  }

  ngOnInit() {
  }

  redirect() {
  this.router.navigate(['custom']);
  }
}
