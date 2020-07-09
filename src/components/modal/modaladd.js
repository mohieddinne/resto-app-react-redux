import React, { Component } from 'react'
import {  Form, Button ,Modal} from 'semantic-ui-react'
import {AddFoodInApi} from '../../actions/foodsaction'
import { connect } from "react-redux";

class Modaleadd extends Component {
  state ={
    name :"",
    price:"",
    type:"",
picture :""
    
  }
    render() {
        return (
            <div >
        
                <Modal size={this.props.size} open={this.props.open} onClose={this.close}>
              
          <Modal.Header>add food</Modal.Header>
          <Modal.Content>
       
          <div>
    <Form.Group unstackable widths={2}>
      <Form.Input onChange={(e)=>this.setState({name : e.target.value})}  label='Title' placeholder='Food Title' />
      <Form.Input onChange={ (e)=>this.setState({price :e.target.value})}   label='Price' placeholder='Price' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input onChange={ (e)=>this.setState({type : e.target.value})}   label='Type' placeholder='Type' />
      <Form.Input onChange={ (e)=>this.setState({picture :e.target.value})}  label='URL picture' placeholder='URL picture' />
    </Form.Group>


  </div>
  
          </Modal.Content>
          
          <Modal.Actions>
            <Button onClick={this.props.close} negative>No</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='add'
              onClick={()=>this.props.addfood(this.state)}
            />
          </Modal.Actions>
         
        </Modal> 
        
       
            </div>
        )
    }
}

const  mapDispatchToProps = (dispatch) =>({
  addfood :(el)=> dispatch(AddFoodInApi(el)),

})

export default connect(null,mapDispatchToProps)(Modaleadd);

