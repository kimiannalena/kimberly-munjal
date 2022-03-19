import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;

  currentPath: string;
  event$: any;

  constructor(private router: Router) {
    // three.js
    // this.scene = new THREE.Scene();

    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    // this.camera.position.z = 1000;

    // const geometry = new THREE.BoxGeometry(200, 200, 200);
    // const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    // this.mesh = new THREE.Mesh(geometry, material);

    // this.scene.add(this.mesh);

    // // initialize variable
    this.event$ = this.router.events.subscribe((event: NavigationEnd) => {
      if(event instanceof NavigationStart) {
        console.log(event.url);
        this.currentPath = event.url;
      }
    });
    
  }

  ngAfterViewInit() {
    this.currentPath = 'home';
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    // this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}
