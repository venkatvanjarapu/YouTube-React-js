import React from 'react';
import logo1 from '../images/logo1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
    // let count = 1
    // const changeCount = ()=>{
    //     count++
    //     alert(count)
    // }
    let [count,setCount] = useState(1)
    return (
        <>
            <div className='col-md-2'>
                <li><i class="fa-solid fa-bars"></i>&nbsp;&nbsp;
                    <img src={logo1} width={50} />&nbsp;<b>YouTube</b></li>
                <div className='text-center'>
                </div>
                <div className='sidebar'>
                    <ul>
                       <Link to="/Home"><li><i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;Home</li></Link>
                        <br></br>
                       <Link to="/Shorts"><li><i class="fa-solid fa-bolt"></i>&nbsp;&nbsp;&nbsp;&nbsp;Shorts</li></Link>
                        <br></br>
                        <Link to="/Subscriptions"><li><i class="fa-solid fa-credit-card"></i>&nbsp;&nbsp;&nbsp;&nbsp;Subscriptions</li></Link>
                        <hr></hr>
                        <li><i class="fa-solid fa-book"></i>&nbsp;&nbsp;&nbsp;&nbsp;Library</li>
                        <br></br>
                        <li><i class="fa-solid fa-clock-rotate-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;History</li>
                        <br></br>
                        <li><i class="fa-regular fa-clock"></i>&nbsp;&nbsp;&nbsp;&nbsp;Watch Later</li>
                        <br></br>
                        <li><i class="fa-regular fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;Liked videos</li>
                        <hr></hr>
                        <li>Explore</li>
                        <br></br>
                        <li><i class="fa-solid fa-fire"></i>&nbsp;&nbsp;Trending</li>
                        <br></br>
                        <li><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;Shopping</li>
                        <br></br>
                        <li><i class="fa-solid fa-music"></i>&nbsp;&nbsp;Music</li>
                        <br></br>
                        <li><i class="fa-solid fa-film"></i>&nbsp;&nbsp;Flims</li>
                        <br></br>
                        <li><i class="fa-solid fa-podcast"></i>&nbsp;&nbsp;Live</li>
                        <br></br>
                        <li><i class="fa-solid fa-gamepad"></i>&nbsp;&nbsp;Gaming</li>
                        <br></br>
                        <li><i class="fa-regular fa-newspaper"></i>&nbsp;&nbsp;News</li>
                    </ul>
                </div>

            </div>
            


        </>
    );
}
export default Sidebar;