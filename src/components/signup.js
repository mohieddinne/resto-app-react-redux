import React, { Component } from 'react'
import { connect } from 'react-redux'
import {postUserToApi} from "../actions/usersAction"
import { Link, Router, Route } from 'react-router-dom'
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";

export class SignupPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email :"",
             password :"",
             role: "user"
        }
       
    }
    handleChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
        
    }
    handleChangePassword =(e)=>{
        this.setState({
            password:e.target.value
        })
        console.log(this.state.password)
    }
    handleClickSignUp=(e)=>{
        
        this.props.postUserToApi(this.state)
        this.props.history.push('/connx')
        console.log('ssss',this.props)

        console.log(this.state)
        }
        
    render() {
        
        return (
            <div className='signIn'>
                     <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
                  <Grid.Column style={{ maxWidth: 450 }}>
                 
            
                <Form size="large" onSubmit={this.handleClickSignUp} class="form-signin col-4">
                <Segment stacked>
                    <div class="form-label-group col-12">
                    <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Nom"
                  onChange={(e) =>
                    this.setState({ first_name: e.target.value })
                  }
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Prénom"
                  onChange={(e) => this.setState({ last_name: e.target.value })}
                />
                        <Form.Input
                        onChange={this.handleChangeEmail}
                        name="email"
                        type="email"
                        value={this.state.email}
                        id="inputEmail" class="form-control"
                        placeholder="Email address"
                        required autofocus/>
                    </div>
                    <div class="form-label-group col-12">
                        <Form.Input
                        type="password"
                        name="password"
                        onChange={this.handleChangePassword}
                        value={this.state.password}
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        required/>
                    </div>
                    
                    <Button  class="btn bt btn-lg btn-primary btn-block col-12" type="submit">inscription</Button>
                   <Link to ="/inscrit"> <a>connecter </a></Link>
</Segment>
                </Form>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {users : state.users}
};
  const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(null, {postUserToApi})( SignupPage)
