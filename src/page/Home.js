import React from 'react'
import NavBar from '../components/NavBar'
class Home extends React.Component{
    state = {
        showCollpase: false,
        count:1,
    }

    handleOnclick = e =>{
        this.setState({
            count:this.state.count+1
        })
        if(this.state.count%2===0){
            this.setState({
                showCollpase:true
            })
        }else{
            this.setState({showCollpase:false})
        }
    }
    render(){
        return(
            <div>
                <NavBar showCollpase={this.state.showCollpase} handleOnclick={this.handleOnclick}></NavBar>
            </div>
        )
    }
}

export default Home