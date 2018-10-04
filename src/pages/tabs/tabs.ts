import { Component } from '@angular/core';

import { Youtube } from '../youtube/youtube';
import { Insta } from '../insta/insta';
import { Blog } from '../blog/blog';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Youtube;
  tab2Root = Insta;
  tab3Root = Blog;

  constructor() {

  }
}
