//! What is React ?
//? React is javascript library. 
//! What is library?
//? library is a collection of pre defined code and this is light weighted as compare to framework
//! What is Framework
//? Framework is a collection of library 
//! Library Disadvantage 
//?  we can only create single page Application we don't go from one page to another 
//! Framework disadvantage
//?  It comes with unnacessary library which make our application slower .
//! Single page appplication
//? Only one html page is there and they are more faster than multipage application, It will send current request and it will not start from 0 to  currrent request (inspect -- network -- below request)
//! Multi page appplication
//? More  than one html pages  (example amzone) difference is performance when we request then it will start form 0 to 100 or whatever the current request is called  each and everytime this start form 0 and  make the application slow.

import { element } from "prop-types";
import { useCallback } from "react";

                    //!                 CLI (COMMAND LINE INTERFACE)
                    //!                  |
                    //!  ----------------|------------------------------------------------
                    //!  |                                                                |
                    //!  CREAT REACT APP                                                 VITE(FASTER)
                    //!  npx create-react-app  projectName(always in lower case)

    //! Features of React 
    //? 1:- Single page application
    //? 2:- Declarative (What to do ) javascript is Imperitive(How to do)
    //? 3:- Component Based Architechture

    //! What is Component?
    //* components are the building block of web page and App.jsx is a component and (App.js-->always first letter is Capital which is Mandatory) if we create in lower case then it will not work even after rename so  we have to change the name of the file like App1.jsx 
    //! Why capital letter is mandatory ?
    //* It is  for react understanding we give first letter capital so it will diffentiate html tags and XML tags.

    //todo difference between XTML and XML
    //? XML is user define and HTML is predefined.
    //? HTML is  case insensitve and XML is  case sensitive
    //? In Html we have class attribute  XML is class name attribute
    //? html is use in small letter and when we use any component use Capital letter


    //todo     Its not mandatory to give file and function name same but not a good practice to give different names it is just  for not creating confusion
    //todo     Index.js is the entry point for React

    //! component is of two type :-
    //! 1:- function based component 2:- class based component
    
    // ?      FBC                                         CBC
    // -----------------------------------------------------------------------------------------------------------
    //1    JS FUNC use                                JS CLASSES use    
    //2   SATELESS                                   SATEFULL     
    //3    HOOKS (to make FBC  as statefull )          NO HOOKS  
    //    (WE CAN ACHIEVE LIFE CYCLE METHOD)                   
    //4    NO LIFE MEHTODS                           LIFE CYCLE METHOD     
    //5    NO RENDER                                  RENDER    

    //! we can use multiple deafult import statements for multiple components not function

    //! Hooks :-
    //  Hooks are pre define methods which is present in react library 

    //! How to use hooks ?
    // we can use hooks by using  import from react

    // Any method start with use  keyword then this is hook and use is always start with small letter and second letter is capital
    // import {useState} from "react"
    // and we have to always named import useState
    // useState is a Hook

    // states is a container.
    // state are use to perfom dynamic changes and store a data on UI .
    // when we use useState without import we get useState is not define error.
    // useState is a mehtod it will return an array[undefine , function ] and that function is called Setter function and it is use to update the data of state vlaue
    // before return statement we use js and after we use XML
    // if we want to diplay that value on UI we  use  XML
    // If we  have to use js code in XML then we use Expression {}  like <h1>{state}</h1> 


    //! <button onClick={handleChange()}>change</button>
    // this will give Infinite loop error beacuse when we call this function it will re-render the component
    // and if we want to use () so we have to use the call back function like 
    // <button onClick={ () =>{handleChange()}}>  change  </button>
    // <button onClick={ () =>{setState("Byeeeeeee")}}>  change  </button>

    // constructor is use to initialize the states
    // this keyword is pointing to current object which is class
    // state is null by default 
    // when we use constructor its mandatory to use super() 
    // this.state through this we can set the value inside the state object if we set value as an object or array so we have to access these value as object or array 


    //!--------------------------------Props----------------------------------------------------------------------------------------------------------------------------
    //? Props means property through props we can send data from parent to child we cannot send data from child to parent using props are unidirectional
    // props are inbuilt object which will send our data in the form of object and //!prop name is key and value is vlaue
    //? Syntax of Prop => <child props = {dbData} />
    //                        |             |
    //*                  prop name       prop value
    //! prop name can we taken anything  

    // difference between <fragment></fragment> and <><></>
    // in empty fragment (<></>)we cannot use key if we want to use key inside fragment we can use it as <fragement key={id}></fragement>
    //  Warning: Each child in a list should have a unique "key" prop.

    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------
    //! In React we have three type of CSS 
    // 1:- Inline CSS   {expression-->{object-->key:value pair}}
    // 2:- Global CSS :- a single css file which is applicable for all componment which is created inside src-->global.css and import it in  app.jsx either index.js
    // 3:- Module CSS :- file is created using name.module.css ,It is mostly used , in this we have to store the refference of that css file and use like--> id={style.idname}  insted of "" we have to use {}

// -------------------------------------------------------------------------------------------------------------------------------------------------------
//!    In React two types of form 
//     controlled :- Using useStated if we create any form then this is called controlled form and this use virtual dom
//     Uncontrolled :- Using useRef if we create any form then this is called Uncontrolled form and this not recommended to use
//todo     The comparison of Real dom and virtual dom is called Diffing algorithm and changes called Patching and the whole process is called Reconciliation
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// a form which is controlled by virtual dom is called controlled form
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
//! useRef
// It is also present in react library and it will return an object with only one key name as <current:undefined></current:undefined>
// It is used to target an element by ref={} .
// but we should avoid using useRef because it will change to real dom 
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// rcc is used  CLASS BASED AND rafce is used for  FUNCTION BASED 
//! LIFE CYCLE :-
//? 1:-  If any component display on UI it means birth and for that we have one method which ComponentDidMount()
//? 2:-  If any component gets updated for that we have one method called ComponentDidUpdate() 
//? 3:-  Just before component gets deleted we use ComponentWillUnmount() ;(component ke hatne se pehle ) it is use for any aschnronous behaviour . 
//? 4:-  Constructor is best place to initialize the state in Class based Component and  it is simliar to ComponentDidMount() and it will execute only one time and it will executed before ComponentDidMount() 
//? 5:-  We have to use super() call when we use constructor call;
//? 6:-  We can use console.log() Inside render() and the call Priorty is constructor ---> render ----> compnent mounted .
//? 7:-  getSnapshotBeforeUpdate(nextProp,prevState) and return should be compulsory.
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
//! useEffect:-
// using useEffect hook we can achive lifecycle methods
//? syntax:- useEffect(callback function ,dependency array) or useEffect(()=>{callback function},[dependency]);
// 1:-When us use UseEffect without any dependency or any array ------->//todo  useEffect(()=>{}) then it will work like render
// 2:-when we give empty array then useEffect work as componentdidimount------->//todo  useEffect(()=>{},[])
// 3:-When we give any varible in dependency then it work like componentdidupdate ------->//todo  useEffect(()=>{},[count]) and initially it will execute only once even we didnot make any update like click on button.
//!4:-Clean-up function is a function which is written inside( when our useEffect work like componentdidmount)useEffect(()=>{ return {clean-up function} }, []) which will execute same as componentWillUnmount.
//!5:-GETSNAPSHOTBEFOREUPDATE function is a function which is written inside( when our useEffect work like componentDidUpdate)useEffect(()=>{ return function(){console.log("Prev states was " ,count)} }, [count]) which will execute same as GETSNAPSHOTBEFOREUPDATE.
// todo  ?is optional chaining means left side jab tak null ya falssy hai jab tak right wali value to execute mat karo.

// data present in parent and send to neseted child so we use Pros drilling
//! useContext:- 
// context means its a container in which we can store data globally but it has some condition
// we have three steps to create context
// 1: Create a Context  we have method called createContext and we have to call it before parent component and it will return contextobject which is object 
// 2:-Provide a Context  we have to call provider component which is pair tag and inside provider it has inbuilt prop name as value={}
// 3:- Consume a Context --- useContext will accept the contextobject value-----> let val=useContext(GLOBAL)

// when we see $$ its means component

//! UseMemo():-
//1:- useMemo is used for code optimization....it returns an memoized value.....it accepts callback function and dependecy array
// example :- let multiply = useMemo(()=>{
    //        console.log("*****************************")
    //           return add*5; 
    //          },[add]);

//2:- useEffect() returns only the clean up function but useMemo returns the memoized value...
//    useMemo() will execute only when there is change in dependency array otherwise memoized value will render and function will not ececute 


//! UseReducer() !
//1: useReducer hook present in react library... similar to useState()
//2: it returns an array..[state, dispatch()]
//3: dispatch function will accepts two arguments 1:- Reducer function  2:- Initial state
//4: Initialstate will be stored in state.

//todo useReducer() accepts two arguments ...1: state and action


//todo  useCallback rerurn is a memoized function and useMemo return a memoized vlaue 
//! React.memo is a function in react through which we can pass a component like React.memo(ChildA) now our component will be memoized 

// Higher order component is also use  to avoid propDrilling but we not use this much
// higher order component is same as hof and it accept one component as argument and return with some extra features


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
//! Routing  
//? 1:- borwser-router  (older version)
// npm i react-router-dom for 
//? 2:- createBroweser-Router

// todo  We use Routes when there are multiple Route and it is basically use to wrap-up the multiple Route
// example :- <Routes>
// <Route path="/" element={<Home/>}/>
// <Route path="/about" element={<About/>}/>
// <Route path="/contact" element={<Contact/>}/>
// <Route path="/signup" element={<Signup/>}/>
// </Routes>
//todo   When we have single Route then no need to use Routes 
//todo  Route will accept two inbuilt prop path and element where path will be given by using forward slash(/) and in element we have to pass the component that we have to render 
//! example           <Route path="/" element={<Home/>}/>

// Link is a component and we use inplace of anchor tag and to is a prop and we have to import it from borser router 
// borwser router supermost parent so we have to call navbar inside browser router because we use Link which is component of React 

// end point is the url of api 
// npx json-server backend/db.json by using this creat api and we have to give port number ---port  5000
// npx json-server backend/db.json --watch --port 5000
// dummy server per id dena compulsory jai 
http://localhost:5000/users ------>this is the end point
// axios provide four method  axios use to communicate with api
// get 
// post -- it accept end point (url)
// put 
// delete

// jo data send karna hai usko payload kehte hai





        