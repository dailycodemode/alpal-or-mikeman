import React, { Component } from 'react';
import A01 from '../Pics/01A.jpg';
import Picture from './Picture';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { alSentences: [
                            "Wow, you really recognize Alan. Not concerning at all.",
                            "Another corre",
                            "Whitespace would be of more use"],
                         mikeSentences: [
                                "You’re a Mike Man. No doubt about it.",
                                "For identical twins. Your ability to tear them apart is incredible."],
                        stage: "start" , // start, main, end
                        qStage: 1,
                        Answers: {1: "A",  2: "A",  3: "A",  4: "A",  5: "A", 
                                  6: "M",  7: "M",  8: "A",  9: "A",  10: "A",  
                                  11: "M",  12: "M",  13: "A",  14: "M",  15: "A",  
                                  16: "M",  17: "M",  18: "M",  19: "M",  20: "A",  
                                  21: "M",  22: "A",  23: "M",  24: "M",  25: "M",  
                                  26: "M",  27: "A",  28: "A",  29: "M",  30: "A",  
                                  31: "M",  32: "M",  33: "A",  34: "M",  35: "A",  
                                  36: "A",  37: "A",  
                    },
                        correctScore: 0,
                        wrongScore: 0};
        this.AlanClick=this.AlanClick.bind(this);
        this.MikeClick=this.MikeClick.bind(this);
        this.startGame=this.startGame.bind(this);
      }

    AlanClick() {
        this.state.Answers[this.state.qStage] == "A" ? this.setState({correctScore: this.state.correctScore + 1}): this.setState({wrongScore: this.state.wrongScore + 1}) ;
        this.setState({qStage: this.state.qStage + 1}); 
        console.log(this.state.Answers)
        if(this.state.qStage == 37){
            this.setState({stage: "end"})
        };
    }
    MikeClick() {
        this.state.Answers[this.state.qStage] == "M" ? this.setState({correctScore: this.state.correctScore + 1}): this.setState({wrongScore: this.state.wrongScore + 1}) ;
        this.setState({qStage: this.state.qStage + 1}); 
    }    
    startGame(){
        this.setState({stage: "main"});  
    }
    render() {

        const renderImg = ()=>{
            if(this.state.stage=="main"){
                return <div>
                            <h1 className = "score"><span style={{color: "green"}}>{this.state.correctScore}</span> : <span style={{color: "red"}}>{this.state.wrongScore}</span></h1>
                            <Picture qStage = {this.state.qStage} ></Picture>
                            <br/>
                            <button className="myButton" onClick={this.AlanClick}>Alan</button>
                            <button className="myButton" onClick={this.MikeClick}>Michael</button>
                            <br/>
                            <h3></h3>
                        </div>
            } else if (this.state.stage=="start"){       
                return(<div>
                    <h3>We all know Alan and Michael but do you know your Michaels from your Alans</h3>
                    <button className="myButton" onClick={this.startGame}>Begin</button>    
                </div>)
             } else if (this.state.stage=="end"){       
                return(<div>
                    <h3>Congratulations. Your ability to tell <i>identical</i> twins apart is incredible."</h3>
                </div>)                  
            } else{
                return (
                    <div>
                        <h4>Check code</h4>
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
