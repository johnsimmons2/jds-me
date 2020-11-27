import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  smallScreen: boolean = false;

  constructor() {}

  ngOnInit() {
    if (window.screen.width < 768) {
      this.smallScreen = this.checkSmallScreen();
    }

    const checkScreenSize = () => document.body.offsetWidth < 768;
    const screenSizeChanged = fromEvent(window, 'resize').pipe(
      throttleTime(200)
    );
    const screenSmall = screenSizeChanged.subscribe(() => {
      this.smallScreen = this.checkSmallScreen();
      console.log('changed ' + this.smallScreen);
    });
  }

  checkSmallScreen(): boolean {
    if (window.screen.width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
