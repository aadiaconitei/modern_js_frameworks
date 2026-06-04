import { Component } from '@angular/core';
import { Article } from '../article/article';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Article],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  public parentColor: string = 'green';
  public parentMessage: string = 'Mesajul din componenta Home';

  public myVar: string = 'Hello from Home component';
  protected myStyle: string = 'color: red;font-size: 20px;';
  public myFunction(): void {
    this.myVar = 'Am schimbat mesajul si stilul!';
    this.myStyle = 'color: blue;font-size: 30px;';
  } 
  public handleMessageFromChild(message: string): void {   
    this.myVar = message;
  }
}
