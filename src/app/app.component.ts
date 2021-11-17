import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

const queue = new queue<number>();
queue.enqueue(2);
queue.dequeue();
queue.enqueue(3);
queue.enqueue(1);
console.log(queue.dequeue());

export class Queue<T> {
  // title = 'test-app';
  title = "Property Binding";      
  imgUrl="https://freepngimg.com/thumb/apple/16-red-apple-png-image.png";   

  fullName: string = "Hello World";    
  private items: T[];
   

  constructor(items: T[] = []) {
    this.items = items;
  }
 
   enqueue = (item: T): void => {
    this.items.unshift(item);
  }
 
  public dequeue = (): T | undefined => {
    return this.items.pop();
  }

  onSave1(){    
    return {
      bar: "hello"
  };  
  }    
  onSave2(){   

    console.log("onsave2")

     let n=3;
      const multiof3: boolean = n % 3 === 0;
      const multiof5: boolean = n % 5 === 0;
     
      if (multiof3 && multiof5) {
        console.log( "fizzbuzz");
      }
     
      if (multiof3) {
        console.log( "fizz");
      }
     
      if (multiof5) {
        console.log( "buzz");
      }
     
      console.log(n.toString());

  }  
  // onDivClick(){    
  //   console.log("DIV is clicked!");    
  // }  

  email = new FormControl('');  
  updateEmail() {  
    this.email.setValue('exampleangular@example.com');  
  } 

 test(){
  return
  {
      bar: "hello"
  };
 }
  
}
