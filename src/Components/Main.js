import React, { Component } from 'react';
import A01 from '../Pics/01A.jpg';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { alSentences: [
                            "Wow, you really recognize Alan. Not concerning at all.",
                            "Another corre",
                            "Whitespace would be of more use",
                            "I wouldn't iterate my way out of this amazing website with that garbage",
                            "Wrong. Waste of time. Terrible guess",
                            "Garbage. Just garbage",
                            "Famously broken. An antipattern compiled failure of nonsense",
                            "My word. Do people still use that?",
                            "const string answer = 'Awful chocie';    // Now change my mind",
                            "SELECT * FROM TBL_POINTLESS_LANGUAGES LIMIT 1",
                            "Well aren't you great for choosing that. There truly is someone for everyone",
                            "Yeah!!! You got it...... No of course you didn't"],
                         mikeSentences: [
                                "Wow, you really recognize Alan. Not concerning at all.",
                                "Another corre"],
                        stage: "Start" , // start, main, end
                        prevCorrectAnswer: true,
                        correctScore: 0,
                        wrongScore: 0};
        this.handleClick=this.handleClick.bind(this);
        
      }

    handleClick() {
        console.log(this.state);
    }

    render() {
        const renderImg = ()=>{
            if(1==1){
                // if(this.state.language.toUpperCase()=="VBA"){
                return <div>
                            <h1 className = "score">{this.state.correctScore} : {this.state.wrongScore}</h1>
                            <img className = 'img' src={A01} alt="PicturePerfect" /> 
                            <br/>
                            <button className="myButton" onClick={this.handleClick}>Alan</button>
                            <button className="myButton" onClick={this.handleClick}>Michael</button>
                        </div>
            } else{
                return (
                    <div>
                        <h4>Well I've figured it out but can you. Why not take a guess</h4>

                        <button className="myButton" onClick={this.handleClick}>Click to ascertain your brilliance</button>


                   </div>

                )
            }
        }

        return (
            <div>
                {renderImg()}
            </div>

        );
    }
}

export default Main;
