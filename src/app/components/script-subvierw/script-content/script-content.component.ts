import { Component } from '@angular/core';
import { SvgCopyComponent } from '../../icons/svg-copy/svg-copy.component';
import { SvgDownloadComponent } from '../../icons/svg-download/svg-download.component';

@Component({
  selector: 'app-script-content',
  standalone: true,
  imports: [SvgCopyComponent, SvgDownloadComponent],
  templateUrl: './script-content.component.html',
  styleUrl: './script-content.component.css',
})
export class ScriptContentComponent {}
