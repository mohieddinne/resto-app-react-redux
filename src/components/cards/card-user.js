import  React,{Component} from "react"
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { connect } from "react-redux";
import {postCommandToApi} from "../../actions/ordreaction"
import Modalepanier from '../modal/modalpanier'

class Cardsuser extends Component{

  state = { open: false }
  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })
    render(){
      const {foods,postCommandToApi} = this.props
      const { open, size } = this.state

        return (
            <div>
                <Button color='blue'onClick={this.show('mini')}>panier</Button>
       <Modalepanier close={this.close}  size={this.state.size} open={this.state.open}/>
                    
       {foods.map((el) => (
  <Card>
    <Image src= {this.props.el.picture} wrapped ui={false} />
    <Card.Content>
        <Card.Header>{this.props.el.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.el.price}</span>
      </Card.Meta>
      <Card.Description>
      {this.props.el.type}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <Button.Group>
    <Button inverted color='blue' onClick ={()=>postCommandToApi(el)} > Commander</Button>
  
                               
                               
  </Button.Group>
      </a>
    </Card.Content>
    
  </Card>))}
  </div>)
}}
const mapStateToProps = (state) => {
  return { foods: state.foods};
}
export default connect(mapStateToProps, {postCommandToApi})(Cardsuser)


