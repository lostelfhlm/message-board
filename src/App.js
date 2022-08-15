
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const init ={
  id:'',
  title:''
}
const [message,setMessage] = useState(init)
const [inputvalue,setInputvalue] = useState('')
console.log(inputvalue);

  useEffect(()=>{
   fetch('https://railway-react-bulletin-board.herokuapp.com/threads?offset=20')
   .then(res=>res.json())
   .then(data=>setMessage(data))
    
  },[])

function updata(){
  
  fetch('https://railway-react-bulletin-board.herokuapp.com/threads?offset=20')
  .then(res=>res.json())
  .then(data=>setMessage(data))
     
  
}


function meshandle(){

const data = {title:inputvalue};

const param  = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify(data)
};

fetch("https://railway-react-bulletin-board.herokuapp.com/threads?offset=84", param)
  .then((res)=>{
    return( res.json() );
  })
  .then((json)=>{
    console.log(json);
  });
}

  return (
    <div className="App">
      <h2>スレッド</h2>
      <div className='inputinfo'> 
      <button onClick={meshandle}>addmessage</button>
      <input placeholder='please input' onChange={(e)=>setInputvalue(e.target.value)}></input>
      <button onClick={updata}>updata</button>
      </div>
      <div className='mesbox' >
        
        { message.id !==''&& message.map((item)=><p key={item.id} id={item.id}>{item.title}</p>)}
      </div>
    </div>
  );
}

export default App;
