## Olesik Aliaksey
__Contacts:__ 
1. _[Email](olesikwork@gmail.com);_
1. _olesiklesha;_ 
1. _+375 33 327 71 90;_

## About me
In 2020 I graduated from the mechanical engineering faculty of BNTU. During my studies at the university, I learned to quickly assimilate information, sleep little, work in stressful situations. I live and work in Minsk. I like watching football, listening to music and play board games.
The last year I've worked on the factory, so now I have to brush up my programming skills (if I ever had them)

__My strengths__:
* engineering education;
* funny; 
* communicative;
* I can work in a team; 
* purposeful (hopefully);

## My skills: 
* HTML, CSS;
* JS, TS
* React/Redux
* Git, npm;  
* Figma, Postman; 

## Code examples:
```
/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  const FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  const args = func.toString().match(FN_ARGS)[1].split(',');
  let deps = [];
    
  for(let i = 0; i < args.length; i++) {
    const prop = args[i].trim()
      if(this.dependency.hasOwnProperty(prop)) { 
        deps.push(this.dependency[prop]);
      }
    }
    
  let clone = func.bind(func, ...deps)

  return clone;
}
```
## Experience
Art quiz ( _pet project_ )


In this app you'll be able to test your knowledge in painting. The app allows you to play two variations of the quiz: guess the author or guess the picture.


__Environment:__ TypeScript, React (hooks, context), react-router-dom, reacthook-form, styled-components
__[Deploy](https://olesiklesha-art-quiz.netlify.app/);__


## Education 
I have been self-educating for the last years. Completed interactive courses HTMLAcademy, JAVASCRIPT/FRONT-END
2021Q3, REACT 2022 Q1.

## English level 
My English level is about B1. I studied at International House.
