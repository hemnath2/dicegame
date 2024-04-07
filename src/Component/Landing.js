import React, { useState } from 'react';
import './Landing.css';
import dice1 from '../img/Dice1.jpeg';
import dice2 from '../img/Dice2.jpeg'
import dice3 from '../img/Dice3.jpeg'
import dice4 from '../img/Dice4.jpeg'
import dice5 from '../img/Dice5.jpeg'
import dice6 from '../img/Dice6.jpeg';




export default function Landing() {


  /* Header Logic Portion */
  let [value, setValue] = useState(0);
  let diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  let [img1, setImg] = useState(dice1);
  let bgchange={background: '#000', color: '#fff'};
  let [score, setScore] = useState(0);
  let [show, setShow] = useState(false);

   let changebg=(data)=>{
    switch(data){
         case 1:
          setValue(data);
          case 2:
            setValue(data);
            case 3:
              setValue(data);
              case 4:
                setValue(data);
                case 5:
                  setValue(data);
                  case 6:
                    setValue(data);
    }
   }

   let roll=()=>{
    if(value!==0){
      let store;
        store = Math.floor((Math.random()*5)+1);
        setImg(diceArr[store]);
        console.log(value, store+1);
       if(value === store+1){
        let add = score + value;
        setScore(add);
      }
      else{
        setScore(score-2);
      }
  }
    else{
      alert('Please Select Any Number')
    }
      setValue(0);
   }


  return (
    <div>
        <div className='header'>
            <div className='score'>
                  <p id='one'>{score}</p>
                  <p id='two'>Total Score</p> 
            </div>
            <div className='number'>
                    <p style={value==0? {color:'black'}: {color: 'white'}}id='three'>You have not selected any number</p> 
                    <div className='btn'>
                    <button style={value === 1 ? bgchange : null} onClick={()=>{changebg(1)}}>1</button>
                    <button style={value === 2 ? bgchange : null} onClick={()=>{changebg(2)}}>2</button>
                    <button style={value === 3 ? bgchange : null} onClick={()=>{changebg(3)}} >3</button>
                    <button style={value === 4 ? bgchange: null} onClick={()=>{changebg(4)}}>4</button>
                    <button style={value === 5? bgchange : null} onClick={()=>{changebg(5)}}>5</button>
                    <button style={value === 6? bgchange : null} onClick={()=>{changebg(6)}}>6</button>
                    </div>
                    <p id='four'>Select Number</p>
            </div>
        </div>
        <div className='middle'>
          <img onClick={roll} src={img1} />
          <p>Click on Dice to roll</p>
          <button className='btn-1' onClick={()=>{setScore(0)}}>Reset Score</button>
          <button className='btn-2' onClick={()=>{setShow(true)}}>Show Rules</button>
            
        </div>
       {
       show ?
       <div className='Bottom'>
       <h1>How to play dice game</h1>
       <p>Select any number</p>
       <p>Click on dice image</p>
       <p>after click on &nbsp;dice &nbsp;if selected number is equal to dice number you will get same point as dice </p>
       <p>if you get wrong guess then  &nbsp;2 point will be dedcuted </p>
     </div>
       :
       <div className='Bottom' style={{background: 'white', color: 'white'}}>
       <h1>How to play dice game</h1>
       <p>Select any number</p>
       <p>Click on dice image</p>
       <p>after click on &nbsp;dice &nbsp;if selected number is equal to dice number you will get same point as dice </p>
       <p>if you get wrong guess then  &nbsp;2 point will be dedcuted </p>
     </div>
       }
    </div>
  )
}
