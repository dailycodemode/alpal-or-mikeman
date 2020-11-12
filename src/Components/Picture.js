import React, { useState } from 'react';
import _01A from "../Pics/01A.jpg";
import _02A from "../Pics/02A.jpg";
import _03A from "../Pics/03A.jpg";
import _04M from "../Pics/04M.jpg";
import _05A from "../Pics/05A.jpg";
import _06A from "../Pics/06A.jpg";
import _07A from "../Pics/07A.jpg";
import _08A from "../Pics/08A.jpg";
import _09M from "../Pics/09M.jpg";
import _10A from "../Pics/10A.jpg";
import _11M from "../Pics/11M.jpg";
import _12M from "../Pics/12M.jpg";
import _13M from "../Pics/13M.jpg";
import _14M from "../Pics/14M.jpg";
import _15M from "../Pics/15M.jpg";
import _16M from "../Pics/16M.jpg";
import _17M from "../Pics/17M.jpg";
import _18A from "../Pics/18A.jpg";

const Picture = ({qStage}) => {
    const [pic, setPic] = useState({1: _01A,  2: _02A, 3: _03A, 4: _04M,5: _05A, 6: _06A, 7: _07A, 8: _08A, 9: _09M, 10: _10A, 
                                    11: _11M, 12: _12M, 13: _13M, 14: _14M, 15: _15M, 16: _16M, 17: _17M, 18: _18A
    });
    var qStage;
    return (
        <div className="">
            {/* <p>{qStage}</p>  filter: blur(4px); */}
            <img  className = "img blur2"  alt="cusack" src={pic[qStage]} style={{ blur: 20 }}  />

        </div>
    );
};


export default Picture;
