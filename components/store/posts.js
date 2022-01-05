import {createStore,action,thunk} from 'easy-peasy'
import {persist} from 'easy-peasy'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import tips from '../apis/tips'

 const posts= {
  tips:[],
  tipDetails:null,
  books:[],
  bookDetails:null,
  chapters:[],
  chapterDetails:null,
  
  //Actions
  tips:action((state,payload)=>{

    state.tips=payload
  }),
  
  tipDetails:action((state,payload)=>{
    state.tipDetails=payload
  }),
  
  books:action((state,payload)=>{
    state.books=payload
  }),
  
  bookDetails:action((state)=>{
    state.bookDetails
  }),
  
  chapters:action((state,payload)=>{
    state.chapters=payload
  }),
  
  chapterDetails:action((state,payload)=>{
    state.chapters=payload
  }),
  //fetch other data types
  fetchOthers:action((state)=>{
    
  }),

 }
  
  
  
  export default posts