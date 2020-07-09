import  React,{Component} from "react"
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { connect } from "react-redux";
import {deleteFoodsfromApi} from "../../actions/foodsaction"
import Modaledit from '../modal/modaledit'

class Cards extends Component{
    state = { open: false }
    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  

    render(){
        const { open, size } = this.state
        return (
            <div>
<Modaledit close={this.close}  size={this.state.size} open={this.state.open} el={this.props.el}  />
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
    <Button inverted color='green'  onClick={this.show('mini')} >modifier</Button>
    <Button.Or />
    <Button inverted color='red' onClick={()=>this.props.deletefoods(this.props.el.id)}>supprimer</Button>
  </Button.Group>
      </a>
    </Card.Content>
  </Card>
  </div>)
}}
const  mapDispatchToProps = (dispatch) =>({
    deletefoods :(id)=> dispatch(deleteFoodsfromApi(id)),
  
})

export default connect(null,mapDispatchToProps)(Cards);

