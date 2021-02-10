import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routerComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BindingComponent } from './binding/binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HttpSubscribeComponent } from './http-subscribe/http-subscribe.component'
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BindingComponent,
    PipeComponent,
    DirectiveComponent,
    CustomDirective,
    CustomPipe,
    HttpSubscribeComponent,
    routerComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
