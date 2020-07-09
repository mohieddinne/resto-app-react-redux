import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "./cards/card"
import {getFoodsfromApi} from "../actions/foodsaction"
import { Button } from 'semantic-ui-react'
import Modaladd from "./modal/modaladd";
import { Link } from "react-router-dom";

class Dashbordadmin extends Component {
    componentDidMount(){
        this.props.getfoods()
    }
    state = { open: false }
    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div >
         <Modaladd close={this.close}  size={this.state.size} open={this.state.open}/>
         <Button color='blue'onClick={this.show('mini')}>ajouter un plat</Button>
         <Link to ='/inscrit'><Button>logout</Button></Link>

        <div className='cardcontainer'>

            {this.props.foods.map(el=> <Cards el={el}/>)
            }
    
        </div>
      
     
      
      </div>
    );
  }
}
const mapStateToProps =(state)=>({
    foods: state.foods,
})
const  mapDispatchToProps = (dispatch) =>({
      getfoods :()=> dispatch(getFoodsfromApi()),
    
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Dashbordadmin);

