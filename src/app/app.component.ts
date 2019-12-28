import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSetInNamespace('social', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/social.svg'));
    iconRegistry.addSvgIconSetInNamespace('feather', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/feather-icons.svg'));
  }
}
