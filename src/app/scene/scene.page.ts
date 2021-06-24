import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit {
  @ViewChild("domObj")
  canvasEl: ElementRef;

  private _ELEMENT: any;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;

  constructor() { }

  ngOnInit() {
  }

}
