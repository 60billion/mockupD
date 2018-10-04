import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Youtube } from '../pages/youtube/youtube';
import { Insta } from '../pages/insta/insta';
import { Blog } from '../pages/blog/blog';
import { IntoYou } from '../pages/youtube/intoYou/intoYou';
import { IntoIns } from '../pages/insta/intoIns/intoIns';
import { IntoBl } from '../pages/blog/intoBl/intoBl';
import { Purchase } from '../pages/purchase/purchase';
import { Like } from '../pages/like/like';
import { Login } from '../pages/login/login';
import { Signin } from '../pages/signin/signin';
import { Comm } from '../pages/common/common';

@NgModule({
  declarations: [
    MyApp,
    Youtube,
      IntoYou,
    Insta,
      IntoIns,
    Blog,
      IntoBl,
    Purchase,
    Like,
    TabsPage,
    Login,
    Signin
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Youtube,
      IntoYou,
    Insta,
      IntoIns,
    Blog,
      IntoBl,
    Purchase,
    Like,
    TabsPage,
    Login,
    Signin
  ],
  providers: [
    Comm,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
