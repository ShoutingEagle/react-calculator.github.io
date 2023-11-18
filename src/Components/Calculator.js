import React, {useState} from 'react'


function Calculator() {
  const [input1,setInput1] = useState('');
  const [input2,setInput2] = useState('');
  const [result, setResult] = useState(0);
  const [message,setMessage] = useState('');
  const [resultClass,setResultClass] = useState('failure');

  function calculation (operator) {
    if(input1==='' || input2===''){
      setMessage('Please enter numbers')
      return;
    }

    for(let i=0; i<input1.length;i++){
          if(!((input1.charCodeAt(i)>=48 && input1.charCodeAt(i)<=57 )|| input1.charCodeAt(i)===46)){
            setMessage('Please enter valid numbers');
            return;
          }
    }

    for(let i=0; i<input2.length;i++){
          if(!((input2.charCodeAt(i)>=48 && input2.charCodeAt(i)<=57) || input2.charCodeAt(i)===46)){
            setMessage('Please enter valid numbers');
            return;
          }
        }
    
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch(operator){
      
        case '+':
          setResult(num1 + num2);
          setMessage("Success");
          setResultClass('success');
          break;
        case '-':
          setResult(num1 - num2);
          setMessage("Success");
          setResultClass('success');
          break;
        case '*':
          setResult(num1 * num2);
          setMessage("Success");
          setResultClass('success');
          break;
        case '/':
          if (num2 === 0) {
            setMessage('Cannot divide by zero');
            setResult(0);
          } else {
            setResult(num1 / num2);
            setMessage("Success");
            setResultClass('success');
          }
          break;
        default:
          setMessage('Invalid operation');
          setResult(0);
          break;
}
    

setInput1('');
setInput2('')




}

    
  
    
  

  return (
    <div className='calculator'>
        <div className='heading'>React Calculator</div>
        <input type="text" placeholder="Enter a number" className='input1 input' onChange={(event) => setInput1(event.target.value)} value={input1}/>
        <input type="text" placeholder="Enter a number" className='input2 input' onChange={(event) => setInput2(event.target.value)} value={input2}/>
        <div className='buttons'>
            <button className='btn' onClick={() => calculation('+')}>+</button>
            <button className='btn' onClick={() => calculation('-')}>-</button>
            <button className='btn' onClick={() => calculation('*')}>x</button>
            <button className='btn' onClick={() => calculation('/')}>/</button>
        </div>
        <div className={resultClass}>
            {message}
        </div>
        <div className='result'>Result : {result}</div>

    </div>
  )
}

export default Calculator