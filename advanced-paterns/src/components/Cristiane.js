import React from 'react';

class Cristiane extends React.Component{

    constructor(props){
        super(props)
        this.state ={
        value:'',
        }
        this.handleChange =this.handleChange.bind(this)
        this.handleChange =this.handleChange.bind(this)
    }
    handleChange({target}){
        this.setState({
        value:target.value,
        })
       
    }
    render(){
    return (
    <form>
        <input type='text' onChange ={this.handleChange}/>
        <button>Submit</button>
    </form>
    )
}
}
export default Cristiane;
