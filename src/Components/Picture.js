import React, { useState } from 'react';

import _01A from "../Pics/01A.jpg";
import _02A from "../Pics/02A.jpg";
import _03A from "../Pics/03A.jpg";
import _04A from "../Pics/04A.jpg";
import _05A from "../Pics/05A.jpg";
import _06M from "../Pics/06M.jpg";
import _07M from "../Pics/07M.jpg";
import _08A from "../Pics/08A.jpg";
import _09A from "../Pics/09A.jpg";
import _10A from "../Pics/10A.jpg";
import _11M from "../Pics/11M.jpg";
import _12M from "../Pics/12M.jpg";
import _13A from "../Pics/13A.jpg";
import _14M from "../Pics/14M.jpg";
import _15A from "../Pics/15A.jpg";
import _16M from "../Pics/16M.jpg";
import _17M from "../Pics/17M.jpg";
import _18M from "../Pics/18M.jpg";
import _19M from "../Pics/19M.jpg";
import _20A from "../Pics/20A.jpg";
import _21M from "../Pics/21M.jpg";
import _22A from "../Pics/22A.jpg";
import _23M from "../Pics/23M.jpg";
import _24M from "../Pics/24M.jpg";
import _25M from "../Pics/25M.jpg";
import _26M from "../Pics/26M.jpg";
import _27A from "../Pics/27A.jpg";
import _28A from "../Pics/28A.jpg";
import _29M from "../Pics/29M.jpg";
import _30A from "../Pics/30A.jpg";
import _31M from "../Pics/31M.jpg";
import _32M from "../Pics/32M.jpg";
import _33A from "../Pics/33A.jpg";
import _34M from "../Pics/34M.jpg";
import _35A from "../Pics/35A.jpg";
import _37A from "../Pics/37A.jpg";
import _40A from "../Pics/40A.jpg";


const Picture = ({qStage}) => {
    const [pic, setPic] = useState({1: _01A,  2: _02A,  3: _03A,  4: _04A,  5: _05A,  
                                    6: _06M,  7: _07M,  8: _08A,  9: _09A,  10: _10A,  
                                    11: _11M,  12: _12M,  13: _13A,  14: _14M,  15: _15A,  
                                    16: _16M,  17: _17M,  18: _18M,  19: _19M,  20: _20A,  
                                    21: _21M,  22: _22A,  23: _23M,  24: _24M,  25: _25M,  
                                    26: _26M,  27: _27A,  28: _28A,  29: _29M,  30: _30A,  
                                    31: _31M,  32: _32M,  33: _33A,  34: _34M,  35: _35A,  
                                    36: _37A,  37: _40A,  

    });
    // var qStage;
    return (
        <div className="">
            {/* <p>{qStage}</p>  filter: blur(4px); */}
            <img  className = {qStage > 16? "img blur2" : "img "}  alt="cusack" src={pic[qStage]} style={{ blur: 20 }}  />

        </div>
    );
};


export default Picture;
