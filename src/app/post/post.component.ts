import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  data!: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
    console.error(`[INFO] -- data===${JSON.stringify(this.data)}`);
    // console.error(`[INFO] -- typeof data===${typeof this.route.snapshot.data}`);
  }

}
