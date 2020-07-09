import React, { Component } from 'react'
import {  Form, Button ,Modal} from 'semantic-ui-react'
import {EditFoodInApi} from '../../actions/foodsaction'
import { connect } from "react-redux";

class modaledit extends Component {
  state ={
    id : this.props.el.id,
    name :this.props.el.name,
    price:this.props.el.price,
    type:this.props.el.price,
picture :this.props.el.picture
    
  }
    render() {
        return (
            <div >
        
                <Modal size={this.props.size} open={this.props.open} onClose={this.close}>
              
          <Modal.Header>Delete food</Modal.Header>
          <Modal.Content>
       
          <div>
    <Form.Group unstackable widths={2}>
      <Form.Input onChange={(e)=>this.setState({name : e.target.value})} defaultValue={this.props.el.name} label='Title' placeholder='Food Title' />
      <Form.Input onChange={ (e)=>this.setState({price :e.target.value})} defaultValue={this.props.el.price}  label='Price' placeholder='Price' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input onChange={ (e)=>this.setState({type : e.target.value})} defaultValue={this.props.el.type}  label='Type' placeholder='Type' />
      <Form.Input onChange={ (e)=>this.setState({picture :e.target.value})} defaultValue={this.props.el.picture}  label='URL picture' placeholder='URL picture' />
    </Form.Group>


  </div>
  
          </Modal.Content>
          
          <Modal.Actions>
            <Button onClick={this.props.close} negative>No</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Modifier'
              onClick={()=>this.props.editfood(this.state)}
            />
          </Modal.Actions>
         
        </Modal> 
        
       
            </div>
        )
    }
}

const  mapDispatchToProps = (dispatch) =>({
  editfood :(el)=> dispatch(EditFoodInApi(el)),

})

export default connect(null,mapDispatchToProps)(modaledit);

