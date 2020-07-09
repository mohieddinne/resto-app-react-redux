import React, { Component } from 'react'
import {  Image,Form, Button ,Modal} from 'semantic-ui-react'
import { connect } from "react-redux";
import {getCommandeFromApi,deleteCommandFromApi} from '../../actions/ordreaction'


class Modalepanier extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
                           
    }}
  
    componentDidMount =()=> {
      this.props.getCommandeFromApi();
  }
    render() {
      const {deleteCommandFromApi,totalQuantity,total} = this.props
      
                    
   
        return (
            <div >
        
                <Modal size={this.props.size} open={this.props.open} onClose={this.close}>
              
          <Modal.Header>add food</Modal.Header>
          <Modal.Content>
       
          <div>
 
        
            <div className='main' >
            <span className='badge badge-danger'> {totalQuantity} </span>
                <div className="row">
               
                {this.props.panier.map((el,i) => (
               
                    <div className={'col-sm-3'}>   
                             
                        
                        <div class="card" >                            
                            <Image src={el.picture }  class="card-img-top" alt="..."/>                            
                            <div class="card-body">
                                <h5 class="card-title">{el.id}:  {el.name}</h5>
                                <h6> price: {el.price} dinars</h6>                                
                                totale : { el.price*el.qte}   

                                <div >
                                <button onClick={()=>deleteCommandFromApi(this.props.panier[i].id)}
                                class="btn btn-primary">
                                    <i className='fa fa-trash'></i>
                                supprimer
                                </button>                                                                                                                                                                                                                      
                                </div>                                
                            </div>
                        </div>
                        

                    </div> 
                     ))} 
                </div>
                {this.props.panier.map(el=>(<div> price: {el.price} </div>))}
                <h3>total :{total}</h3>
                <button className='btn btn-primary btn-block'>acheter</button>
            </div>

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

const mapStateToProps = (state) => {
  return {
      panier: state.panier,
      totalQuantity : state.panier.reduce((total,el)=>total+el.qte,0),
      total : state.panier.reduce((total,el)=>total+el.qte*el.price,0)
};
}
export default connect(mapStateToProps, {getCommandeFromApi,deleteCommandFromApi})(Modalepanier);

