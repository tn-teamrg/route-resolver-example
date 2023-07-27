import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
  }

}
