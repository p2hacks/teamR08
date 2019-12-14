 
import React, { Component } from 'react';
import './App.css';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
import {BrowserRouter,Route,Link,withRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import tree from './images/tree.jpg';
import ccc from './images/ccc.jpg';
import joucho from './images/joucho_fuantei_man.png';
import jk from './images/jk.png';
import toumei from './images/toumei.png';
import { array, string } from 'prop-types';
import MenuButton from './images/MenuButton.jpg';
import SaveButton from './images/SaveButton.png';
import EditBack from './images/EditBack.jpg';

import bell from './images/bell.png';
import lease from './images/lease.png';
import santahat from './images/santahat.png';
import snowman from './images/snowman.png';
import socks from './images/socks.png';
import present from './images/present.png';
import belllease from './images/belllease.png';
import light1 from './images/light1.png';
import light2 from './images/light2.png';


var DataImages = new Array(ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc);
var images = new Array(SaveButton,SaveButton,SaveButton,ccc,ccc,ccc,ccc,ccc,ccc,ccc,toumei,joucho,jk);
var MenuImages = new Array(bell,lease,santahat,snowman,socks,present,belllease,light1,light2)



function Edit(){
  
  const[menucheck,setCheck] = React.useState(false);//メニューのオンオフを切り替えるboolean

  const [image_state,getImage] = React.useState(toumei);

  const [image1,setimage1] = React.useState(DataImages[0]);
  const [image2,setimage2] = React.useState(DataImages[1]);
  const [image3,setimage3] = React.useState(DataImages[2]);
  const [image4,setimage4] = React.useState(DataImages[3]);
  const [image5,setimage5] = React.useState(DataImages[4]);
  const [image6,setimage6] = React.useState(DataImages[5]);
  const [image7,setimage7] = React.useState(DataImages[6]);
  const [image8,setimage8] = React.useState(DataImages[7]);
  const [image9,setimage9] = React.useState(DataImages[8]);
  const [image10,setimage10] = React.useState(DataImages[9]);
  const [image11,setimage11] = React.useState(DataImages[10]);
  const [image12,setimage12] = React.useState(DataImages[11]);
  const [image13,setimage13] = React.useState(DataImages[12]);
  

  function click_recieve(i) {//受け取りの関数。iが配列の番号
    getImage(MenuImages[i]);
    console.log(image_state);
  }
  
  function image1_send(){//渡すときの関数。
    setimage1(image_state);
  }
  function image2_send(){
    setimage2(image_state);
  }
  function image3_send(){
    setimage3(image_state);
  }
  function image4_send(){
    setimage4(image_state);
  }
  function image5_send(){
    setimage5(image_state);
  }
  function image6_send(){
    setimage6(image_state);
  }
  function image7_send(){
    setimage7(image_state);
  }
  function image8_send(){
    setimage8(image_state);
  }
  function image9_send(){
    setimage9(image_state);
  }
  function image10_send(){
    setimage10(image_state);
  }
  function image11_send(){
    setimage11(image_state);
  }  
  function image12_send(){
    setimage12(image_state);
  }
    function image13_send(){
    setimage13(image_state);
  }
  function menuChange(){
    setCheck(!menucheck);
  }

  return(
    <>
    <div className="EditHeader">
      <h1>TreeHub</h1>
    </div>
    <section className="Edit_left">
      <div className="Edit_tree_item">{/*position:relation*/}
        <img src={tree}className="Edit_img_tree"></img>

        <img src={DataImages[0]}className="Edit_item1"></img>
        <img src={DataImages[1]}className="Edit_item2"></img>
        <img src={DataImages[2]}className="Edit_item3"></img>
        <img src={DataImages[3]}className="Edit_item4"></img>
        <img src={DataImages[4]}className="Edit_item5"></img>
        <img src={DataImages[5]}className="Edit_item6"></img>
        <img src={DataImages[6]}className="Edit_item7"></img>
        <img src={DataImages[7]}className="Edit_item8"></img>
        <img src={DataImages[8]}className="Edit_item9"></img>
        <img src={DataImages[9]}className="Edit_item10"></img>
        <img src={DataImages[10]}className="Edit_item11"></img>
        <img src={DataImages[11]}className="Edit_item12"></img>
        <img src={DataImages[12]}className="Edit_item13"></img>
        <div className="Menu"> 
          <ul className={`${menucheck ? 'Edit_menu_open Edit_itembox':'Edit_menu_close Edit_itembox'}`}>
            <li><input type="image" src={MenuImages[0]} className="Edit_menu_img" onClick = { () => click_recieve(0)}></input></li>
            <li><input type="image" src={MenuImages[1]} className="Edit_menu_img" onClick = { () => click_recieve(1)}></input></li>
            <li><input type="image" src={MenuImages[2]} className="Edit_menu_img"onClick = { () => click_recieve(2)}></input></li>   
            <li><input type="image" src={MenuImages[3]} className="Edit_menu_img"onClick = { () => click_recieve(3)}></input></li>  
            <li><input type="image" src={MenuImages[4]} className="Edit_menu_img" onClick = { () => click_recieve(4)}></input></li>
            <li><input type="image" src={MenuImages[5]} className="Edit_menu_img" onClick = { () => click_recieve(5)}></input></li>
            <li><input type="image" src={MenuImages[6]} className="Edit_menu_img"onClick = { () => click_recieve(6)}></input></li>   
            <li><input type="image" src={MenuImages[7]} className="Edit_menu_img"onClick = { () => click_recieve(7)}></input></li>            
            <li><input type="image" src={MenuImages[8]} className="Edit_menu_img"onClick = { () => click_recieve(8)}></input></li>
          </ul>
          <input  type="image" src={MenuButton} className={`${menucheck ? 'MenuButton_after':'MenuButton_before'}`} onClick ={menuChange} ></input>
         </div>
         <div className="pose">
        <button className="poseButton">メニュー</button>
        </div>
      </div>
    </section>
    
    <section className="Edit_right">
      <div className="Edit_tree_item">
        <img src={tree}className="Edit_img_tree"></img>
        <input type="image" src={image1} className="Edit_item1" onClick = {image1_send}></input>
        <input type="image" src={image2} className="Edit_item2" onClick = {image2_send}></input>
        <input type="image" src={image3} className="Edit_item3" onClick = {image3_send}></input>
        <input type="image" src={image4} className="Edit_item4" onClick = {image4_send}></input>
        <input type="image" src={image5} className="Edit_item5" onClick = {image5_send}></input>
        <input type="image" src={image6} className="Edit_item6" onClick = {image6_send}></input>
        <input type="image" src={image7} className="Edit_item7" onClick = {image7_send}></input>
        <input type="image" src={image8} className="Edit_item8" onClick = {image8_send}></input>
        <input type="image" src={image9} className="Edit_item9" onClick = {image9_send}></input>
        <input type="image" src={image10} className="Edit_item10" onClick = {image10_send}></input>
        <input type="image" src={image11} className="Edit_item11" onClick = {image11_send}></input>
        <input type="image" src={image12} className="Edit_item12" onClick = {image12_send}></input>
        <input type="image" src={image13} className="Edit_item13" onClick = {image13_send}></input>
      </div>
    </section>
    </>
  );
}

function App(){
  return(
    <div className="App">
      <Edit/>
      </div>
  );
}
export default App;

/*
function Home(){
  return(
    <>
    <div className="HomeBack">
      <h>TreeHub</h>
      <p>Heme</p>
      
    </div>
    </>
  );
}
*/
/*
     <Home />
      <BrowserRouter>
        <Route exact path ='/'>
        <Link to='/Edit'>編集画面へ</Link>
        </Route>
        <Route exact path='/Edit'>
          <Edit />
        </Route>
      </BrowserRouter>
      */