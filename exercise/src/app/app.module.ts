import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Example6Component } from './example6/example6.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DecouplingComponent } from './decoupling/decoupling.component';
import { PartOneVlvComponent } from './part-one-vlv/part-one-vlv.component';
import { PartTwoNgcontentComponent } from './part-two-ngcontent/part-two-ngcontent.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    DatabindingComponent,
    Example6Component,
    AttributeBindingComponent,
    DirectivesComponent,
    InputOutputComponent,
    DecouplingComponent,
    PartOneVlvComponent,
    PartTwoNgcontentComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
