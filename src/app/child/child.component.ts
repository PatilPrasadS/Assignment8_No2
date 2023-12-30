import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public msgFromParent : any;

  @Output() public msgToParent = new EventEmitter;
  
  public sentMessage() {
    this.msgToParent.emit("Hello from Child");
  }
}
