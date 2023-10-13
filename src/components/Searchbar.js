import React from 'react'
import { useState } from 'react'
export default function Searchbar() {
    // let count = 1
    // const changeCount = ()=>{
    //     count++
    //     alert(count)
    // }
    let [count,setCount] = useState(1)
    
  return (
    <>
        <div className='row bg-grey'>
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i> &nbsp;&nbsp;
                        <div className="voice-search d-flex align-items-center"></div>
                        <svg height="24" viewBox="0 0 24 24" width="24" preserveAspectRatio="xMidyMid meet" focusable="false" class="style-scope yt-icon pointer" style={{ width: "40px", height: "20px" }}>
                            <g class="style-scope yt-icon">
                                <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z">
                                </path>
                            </g>
                        </svg>
                    </span> &emsp;&emsp;
                    <div className="header-rightbar d-flex align-items-center">
                        <div className="create-options">
                            <svg height="24" viewBox="0 0 24 24" width="24" preserveAspectRatio="xMidyMid meet" focusable="false" class="style-scope yt-icon pointer mxy-15" style={{ width: "20px", height: "20px" }}>
                                <g class="style-scope yt-icon">
                                    <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z">
                                    </path>
                                </g>
                            </svg>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;

                        <div className="youtube-apps">
                            <svg height="24" viewBox="0 0 24 24" width="24" preserveAspectRatio="xMidyMid meet" focusable="false" class="style-scope yt-icon pointer mxy-15" style={{ width: "20px", height: "20px" }} >
                                <g class="style-scope yt-icon">
                                    <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z">
                                    </path>
                                </g>
                            </svg>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className='profile-menu'>
                            <div className='profile-img'>
                            <img  
                             src="https://yt3.ggpht.com/Rk-ZQxp0-1V-idwLUL8RA0iukLAJbuGleCTHPir1Y5SGF1WcUGX0z8gYbGewr5pNSAVPdBBi=s88-c-k-c0x00ffffff-no-rj"
                             alt=""
                             className="dp mxy-15"/>
                            </div>
                             
                        </div>


                    </div>


                </div>
                <h1>{ count }</h1>
                <button className='btn btn-danger' onClick={()=>setCount(count+1)} >Click</button>

            </div>
    </>
  )
}
