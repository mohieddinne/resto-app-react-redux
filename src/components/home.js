import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import { Link, Router, Route } from 'react-router-dom'
import "/home/mohieddinne/Desktop/resto/src/components/home.css"


const getWidth = () => {

  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container >
      <Image.Group size='large'>
      <Image src={"https://img-3.journaldesfemmes.fr/OG0jOvNryP2PsbqxvrIeUFY_1IY=/750x/smart/0976081f645047ccb9c3244e81111c52/recipe-jdf/10032757.jpg"} />
      <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"} />
      <Image src={"https://media.gettyimages.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=2048x2048"} />
      <Image src={"https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/9121/fast_food_flickr_6319155216_0463fda84a_b.jpg"} />
    </Image.Group>
   
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive  getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              color= 'red'
              
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                
                <Menu.Item position='right'>

                <Link to ="/inscrit">
                  <Button as='a' inverted={!fixed} >
                   Log in 
                  </Button> </Link>
                  <Link to ="/connx">

                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button></Link>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
 
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
<h></h>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div  >
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)



const Home = () => (
  <ResponsiveContainer className="home">

  </ResponsiveContainer>
)

export default Home