import React from 'react';

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        playground()

        return (
            <div> 
                <h2>title</h2>  
                <p>about this text</p>  
            </div>
        )
    }
}

export default Home;



let playground = () => {

    console.log("this", this)

    var one = 22 //variable, meant to reuse in different places
                 //type->number
    var operatation = one / "dania" // bad habit, we need typescript (runtime struggles)
    //primitive types: number, string, boolean
    var sentence = "hello world!".concat("mother fucker")


    //standard operations between primitive types: + - / * (concat) %
    var two = one + sentence

    //functions: Name(inputs) -> output
    var one = 22 //variable, meant to reuse in different places
    


    console.log("ciao dania", one)
    console.log("ciao mudy", one)
    console.log("ciao judy", one)
    console.log("ciao alex", one)
    console.log("ciao couple", sum(sum(one, one), one)) // composition
    console.log("ciao sentense", two)
    console.log("operation", operatation)


    var some_even_numbers = [2, 4, 6, 8, 10].concat([12, 14, 16, 2])
    console.log("even numbers", some_even_numbers)
    console.log("even numbers unique", filter_unique_numbers(some_even_numbers))
}



let sum = (i1, i2) => {
    return i1 + i2
 }

 let find = (my_array, element_to_find) => {
     for (let index = 0; index < my_array.length; index++) {
         const element = my_array[index];
         if(element === element_to_find){
             return true
         }
         
     }
     return false
 }
 
let filter_unique_numbers = (my_array) => {
    let new_array = []

    for (let index = 0; index < my_array.length; index++) {
        const element = my_array[index];
        if(find(new_array, element) === false){
            new_array.push(element)
        }   
        else{
            console.log("skipping element. found", element)
        }
    }

    return new_array
 }


 

/*
  class Number {
    ....
    toExponential(){...}
  }
  class String {
      ...
      concat(word_to_concat){
          
          return this + word_to_concat
      }
  }
  class Array {
      ...
      filter(...){
          ...
      }
  }
*/