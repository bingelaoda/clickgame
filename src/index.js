import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{

    constructor(){
        super();
        this.state={
            count:0,
            countdown:10,
            flag:true
        }
    }

    handleClick=()=> {
        if(this.state.countdown<=0){
            return
        }

        if (this.state.flag){
            this.state.flag=false;
            this.timerId = setInterval(()=>{

                if(this.state.countdown<=0){
                    clearInterval(this.timerId)
                    return
                }
                this.setState({

                    countdown:this.state.countdown-1
                })
            },1000)
        }


        this.setState({
                count: this.state.count + 1
            }
        )
    }
    handleRestart=()=>{
        clearInterval(this.timerId)
        this.setState({
            count:0,
            countdown:10,
            flag:true
        })


    }


    render(){
        return (
            <div>
                <h2>连续暴击游戏，请持续点击</h2>
                <h2>倒计时：{this.state.countdown}</h2>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>开始游戏</button>
                <button onClick={this.handleRestart}>重新开始</button>
            </div>
        )}
}

ReactDOM.render(
    <App></App>
    ,document.getElementById('root')
);
