import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUserFromApi} from '../actions/usersAction'
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import {Link} from "react-router-dom"
export class Connexion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            role: "user",
          };
        }
      
        verifmail = (e) => {
          this.setState({ email: e.target.value });
        };
      
        verifpswd = (e) => {
          this.setState({ password: e.target.value });
        };
    login = () => {
        const user = this.props.users.filter(
          (el) =>
            el.email === this.state.email && el.password === this.state.password
        );
        if (user.length === 0) alert("Utilisateur nexiste pas");
        user.map((el) =>
          el.role === "admin"
            ? ((window.location.pathname = "/product"))
            : el.role === "user"
            ? ((window.location.pathname = "/client"))
            : alert("comte nexiste pas")
        );
      };
    componentDidMount= ()=>{
        this.props.getusers()
        }
   
    render() {
        return (
            <div className="loginform ">
            <Grid
              textAlign="center"
              style={{ height: "100vh" }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="Adresse E-mail"
                      onChange={this.verifmail}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Mot de passe"
                      type="password"
                      onChange={this.verifpswd}
                    />
    
                    <Button
                      onClick={() => this.login()}
                      color="black"
                      fluid
                      size="small"
                    >
                      Connecter
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  Créer un compte ?{" "}
                  <Link to="/connx">
                    {" "}
                    <a href="#">S'inscrire</a>
                  </Link>
                </Message>
              </Grid.Column>
            </Grid>
          </div>

           
        )
    }
}

const mapStateToProps = (state) => ({
  
     users:state.users,
});
const mapDispatchToProps = (dispatch)=>({
    getusers: () => dispatch(getUserFromApi())
})

export default connect(mapStateToProps,mapDispatchToProps)(Connexion)