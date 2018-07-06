import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

 import {connect} from 'react-redux'
 import {getPosts, savePosts, getProfile,saveProfile} from '../../actions/PostActions'
 import {database} from '../../firebase'

import avatar from "assets/img/faces/marc.jpg";


export const FETCH_POSTS = 'fetch_posts';



const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class UserProfile extends React.Component {
  constructor(props){
   // console.log("constructor");
    super(props);
    UserProfileFunc = UserProfileFunc.bind(this);
  }
  
  componentDidMount() {
   // console.log("mounting");
   this.props.getProfile('PTSGGnJ7AQeKHT4tB2pJ');

  }
  
  componentWillUnmount() {
 //   console.log("component unmounting");
    database.stopListenToProfile();
   //this.props.clearProfile();
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("derivved thing");
  //   return true;
  // }
  
 // componentDidUpdate(prevProps, prevState, snapshot){
    // let self=this
    // if(self.state.profile) {
    //   let boolStateNeedsUpdate = false;
    //   Object.keys(self.state.profile).map(function (key) {
    //     if(self.state.profile[key])
    //       boolStateNeedsUpdate = true;
    //     //console.log("state " + key + " is " + self.state.profile[key] + ' prop is  '  + self.props.profile[key]);
    //   });
    //   if (boolStateNeedsUpdate) {
    //     this.setState({
    //       profile: this.props.profile
    //     })
    //   }
    // }
 //   console.log("component did update", this.props);
  //}
  
  handleTextEntry = (event)=> {
    event.preventDefault();
   // console.log("what are props", this.props);
   // console.log("what are state", this.state);
    if(this.props.profile){
      const formData = this.props.profile;
      formData[event.target.name] = event.target.value;
      this.props.saveProfile('PTSGGnJ7AQeKHT4tB2pJ',formData);
     // this.forceUpdate()
      // this.setState({
      //   formData:formData
      // })
    }
  }
  
  handleClick = () => {
    //console.log("I have been clicked");
    this.props.savePosts({emailAdd:"Hi@hi.com",userName:"the Dude"});
  }  
  
  render() {
    //console.log("render",this.props.profile);
    return UserProfileFunc(this.props);
  }
}



let UserProfileFunc = function(props) {
  const { classes } = props;
  
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    inputProps= {{
                      name:"userName",
                      value: props.profile.userName,
                      onChange:this.handleTextEntry
                    }}                    
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    inputProps= {{
                      name:"emailAdd",
                      value: props.profile.emailAdd,
                      onChange:this.handleTextEntry
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </Grid>
              <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    inputProps= {{
                      name:"firstName",
                      value:props.profile.firstName,
                      onChange:this.handleTextEntry
                    }}                    
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    inputProps= {{
                      name:"lastName",
                      value:props.profile.lastName,
                      onChange:this.handleTextEntry
                    }}                    
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </Grid>
              <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    inputProps= {{
                      name:"city",
                      value:props.profile.city,
                      onChange:this.handleTextEntry
                    }}                       
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    inputProps= {{
                      name:"country",
                      value:props.profile.country,
                      onChange:this.handleTextEntry
                    }}                       
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    inputProps= {{
                      name:"postal",
                      value:props.profile.postal,
                      onChange:this.handleTextEntry
                    }}                         
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </Grid>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Button 
              color="primary"
              callbackHandler={this.handleClick}>
              Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}


const mapStateToProps = (state) => {
    return {
      profile: state.profile 
    }
};

const mapDispatchToProps = (dispatch) => {

  
      return {
        getPosts: () => dispatch(getPosts()),
        savePosts: (values) => dispatch(savePosts(values)),
        getProfile: (id) => dispatch(getProfile(id)),
        saveProfile: (id, values) => dispatch(saveProfile(id,values))
      }

};


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(UserProfile));
