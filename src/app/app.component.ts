import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';

import { TodoComponentComponent } from './todo-component/todo-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("todoContainer", {read: ViewContainerRef }) vcr!: ViewContainerRef;
  ref!: ComponentRef<TodoComponentComponent>

  input_text: string | undefined;


  construir_todo() {
    if (this.input_text == null){
      alert("Sem texto para adicionar...");
    } else{
      this.ref = this.vcr.createComponent(TodoComponentComponent)
      this.ref.instance.input_text = this.input_text;

    }

  }
}

