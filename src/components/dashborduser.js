import React, { Component } from "react";
import { connect } from "react-redux";
import Cardsuser from "./cards/card-user"
import {getFoodsfromApi} from "../actions/foodsaction"
import Modalepanier from "./modal/modalpanier";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import {postCommandToApi} from '../actions/ordreaction'
import { Link } from "react-router-dom";

class  Dashborduser  extends Component {
    componentDidMount(){
        this.props.getfoods()
    }
  
  state = { open: false,panier:[] }
  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false }) 

  render() {
    const {foods,Acheter} = this.props
    const { open, size } = this.state

    return (
      <div>
            <Button color='blue'onClick={this.show('mini')}>panier</Button>
       <Modalepanier panier={this.state.panier} close={this.close}  size={this.state.size} open={this.state.open} />
       <Link to ='/inscrit'><Button>logout</Button></Link>

       

        <div className='cardcontainer'>

            {this.props.foods.map(el=>
             <Card>
             <Image src= {el.picture} wrapped ui={false} />
             <Card.Content>
                 <Card.Header>{el.name}</Card.Header>
               <Card.Meta>
                 <span className='date'>{el.price}</span>
               </Card.Meta>
               <Card.Description>
               {el.type}
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <a>
               <Button.Group>
             <Button inverted color='blue' onClick ={()=>this.props.addtocart(el) } > Commander</Button>
           
                                        
                                        
           </Button.Group>
               </a>
             </Card.Content>
             
           </Card>
            
            
            )
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
      addtocart: (el) => dispatch(postCommandToApi(el))
    
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Dashborduser);

