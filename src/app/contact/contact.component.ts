import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSetInNamespace('social', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/social.svg'));
    iconRegistry.addSvgIcon('at-sign', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/at-sign.svg'));
  }
}
