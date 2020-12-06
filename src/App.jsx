import React, {useState, useEffect} from 'react'
import Selector from './Components/EngineSelector'
import SearchResult from './Components/SearchResult'

function App(){
  const URL = 'https://localhost:44384/api/SEO';

  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(false);
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("")
  const [target, setTarget] = useState("")
  const [select, setSelect] = useState("")
  const [isSending, setIsSending] = useState(false);

  useEffect(() =>{
    //disable first render effect
    if(!mount){
      setMount(true);
      return;
    }
    
    if(document.querySelector('#input').value === ""){
      alert("Please fill in 'Input' section");
      return;
    }

    if(document.querySelector('#target').value === ""){
      alert("Please fill in 'Target' section");
      return;
    }

    async function fetchData() {
      setIsSending(true);
      setInput(document.querySelector('#input').value);
      setTarget(document.querySelector('#target').value);
      setSelect(document.querySelector('Select').value);

      const response = await fetch(URL,{
        method : 'POST',
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          input: document.querySelector('#input').value,
          target: document.querySelector('#target').value,
          engine: document.querySelector('Select').value
        })
      });
      const json = await response.json();
      
      setResult(json);
      setIsSending(false);
    }
    fetchData();
  }, [count])

  useEffect(()=>{
    let input = document.querySelector('#input');
    input.setAttribute('size',input.getAttribute('placeholder').length);
    let target = document.querySelector('#target');
    target.setAttribute('size',target.getAttribute('placeholder').length);
  }, [])

  return(
    <div>
      <h1>
        SEO Demo
      </h1>
      <div>
        <lable>Input: </lable>
        <input id="input" placeholder="What do you want to search? e.g. online title search"></input>
        <br></br><br></br>
        <lable>Target: </lable>
        <input id="target" placeholder="What do you want to check in the records? e.g. https://www.infotrack.com.au"></input>
        <br></br><br></br>
        <lable>Engine: </lable>
        <Selector></Selector>
        <br></br><br></br>
        <button type="button" disabled={isSending} onClick={() => setCount(count + 1)}>Search</button>
      </div>
      <br></br><br></br>
      <div>
        <SearchResult result={result} 
        input={input} 
        target={target} 
        engine={select}>
          
        </SearchResult>
      </div>
    </div>
  )
}
export default App;
