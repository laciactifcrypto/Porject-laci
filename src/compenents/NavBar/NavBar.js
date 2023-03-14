import './NavBar.css';
import React from "react";


export default function NavBar() {
  return (
<div className='divnvb1'>
    <div className='divnvb2'>
        <button className='btnnvb1'>
          <a className='anvb1' href="./Acceuil">Home</a>
        </button>
        <button className='btnnvb1'>
          <a className='anvb1' href="./Application">App</a>
        </button>
        <button className='btnnvb1'>
          <a className='anvb1' href="./Investment">investment</a>
        </button>
        <button className='btnnvb1'>
          <a className='anvb1' href="./WhitePaper">White Paper</a>
        </button>
    </div>

    <div className="divnvb3">
      <button className="btnnvb2">
        <a className='anvb2' href="https://bscscan.com/"target="_blank" rel="noopener noreferrer"> 
          <img className="imgnvb1" src="./img/Image/bsc scan20.jpg" alt="" />
             Bsc Scan
        </a>
      </button>
      <button className="btnnvb2">
        <a className='anvb2' href="https://twitter.com/LACI35898533"target="_blank" rel="noopener noreferrer"> 
          <img className="imgnvb1" src="./img/Image/Twitter-logo 20.svg.png" alt="" />
             Twitter
        </a>
      </button>
      <button className="btnnvb2">
        <a className='anvb2' href="https://discord.gg/rMbzpy2J" target="_blank" rel="noopener noreferrer"> 
          <img className="imgnvb1" src="./img/Image/disocrd 20.png" alt="" />
             Discord
        </a>
      </button>
      <button className="btnnvb2">
        <a className='anvb2' href="https://t.me/+gu8lwddw7rg0OWE8"target="_blank" rel="noopener noreferrer"> 
          <img className="imgnvb1" src='./img/Image/Telegram_2019_Logo 20.svg.png' alt="" />
              Telegram
        </a>
      </button>
    </div>


</div>

  )
}