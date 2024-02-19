import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `

  <div style="display:flex; flex-direction:column; gap:100px; padding:20px; align-items:center;">

  <button class='cds-button cds-button--secondary'>
    <span class='icon ico-refresh'></span>
    <span class='cds-button__text'>Refresh</span>
  </button>


  <div class="cds-tooltip" style="display:flex; margin:auto;">
  -hover me-
  <span class="cds-tooltip__content cds-tooltip--help cds-tooltip--top cds-tooltip--small">Content of the tooltip.</span>
  </div>
  </div>
  
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
