import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BindingComponent } from './binding/binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BindingComponent,
    PipeComponent,
    DirectiveComponent,
    CustomDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
