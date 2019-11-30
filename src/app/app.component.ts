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
    const socialSvgSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/social.svg');
    iconRegistry.addSvgIconSetInNamespace('social', socialSvgSafeUrl);
    iconRegistry.addSvgIcon('at-sign', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/at-sign.svg'));
  }
}
