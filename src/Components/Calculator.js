import React, {useState} from 'react'


function Calculator() {
  const [input1,setInput1] = useState('');
  const [input2,setInput2] = useState('');
  const [result, setResult] = useState(0);
  const [message,setMessage] = useState(null);

  function calculation (data) {
    const a = 'a';
    console.log(a.charCodeAt(0));
    if(a.charCodeAt(0)>=48 && a.charCodeAt(0)<=57 || a.charCodeAt(0)===46){
      alert('Correct');
    }
    else{
      alert('Enter a Number');
    }
  
    
  }

  return (
    <div className='calculator'>
        <div className='heading'>React Calculator</div>
        <input type="text" placeholder="Enter a number" className='input1 input' onChange={(event) => setInput1(event.target.value)}/>
        <input type="text" placeholder="Enter a number" className='input2 input' onChange={(event) => setInput2(event.target.value)}/>
        <div className='buttons'>
            <button className='btn' onClick={() => calculation('+')}>+</button>
            <button className='btn' onClick={() => calculation('-')}>-</button>
            <button className='btn' onClick={() => calculation('*')}>x</button>
            <button className='btn' onClick={() => calculation('/')}>/</button>
        </div>
        <div className='message'>
            {message}
        </div>

    </div>
  )
}

export default Calculator