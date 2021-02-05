import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private electronService: ElectronService) {}

  send() {
    this.electronService.ipcRenderer.send('test', 'ping');
  }
}
