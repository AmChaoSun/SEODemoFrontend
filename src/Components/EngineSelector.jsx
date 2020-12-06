import React, {useState} from 'react'

function Selector(){
    const [value, setValue] = useState("Bing");

    const ChangeValue = () =>{
        setValue(document.querySelector('#engineSelector').value);
    }

    return(
    <select value={value} id="engineSelector" onChange={ChangeValue} >
        <option value="InfoTrackGoogle">InfoTrack Google</option>
        <option value="Google">Live Google</option>
        <option value="Bing">Bing</option>
      </select>
    )
}

export default Selector;