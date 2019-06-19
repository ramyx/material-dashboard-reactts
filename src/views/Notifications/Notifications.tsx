import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import AddAlert from '@material-ui/icons/AddAlert';
// core components
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Button from '../../components/CustomButtons/Button';
import SnackbarContent from '../../components/Snackbar/SnackbarContent';
import Snackbar from '../../components/Snackbar/Snackbar';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import { createStyles } from '@material-ui/core';

const styles = createStyles({
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: 300,
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: 400,
      lineHeight: 1
    }
  }
});

interface Props {
  classes: any;
}

interface State {
  tl: Boolean;
  tc: Boolean;
  tr: Boolean;
  bl: Boolean;
  bc: Boolean;
  br: Boolean;
  [key: string]: Boolean;
}

class Notifications extends React.Component<Props, State> {
  alertTimeout: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false
    };
    // this.showNotification = this.showNotification.bind(this);
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(() => { }, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }

  showNotification(e: any) {
    this.setState({[e]: true});
    this.alertTimeout = setTimeout(
      () => {
        this.setState({[e]: false});
      },
      6000
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Notifications</h4>
          <p className={classes.cardCategoryWhite}>
            Handcrafted by our friends from{' '}
            <a target="_blank" href="https://material-ui-next.com/">
              Material UI
            </a>{' '}
            and styled by{' '}
            <a target="_blank" href="https://www.creative-tim.com/">
              Creative Tim
            </a>
            . Please checkout the{' '}
            <a href="#pablo" target="_blank">
              full documentation
            </a>
            .
          </p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h5>Notifications Style</h5>
              <br />
              <SnackbarContent message={'This is a plain notification'} />
              <SnackbarContent
                message={'This is a notification with close button.'}
                close={true}
              />
              <SnackbarContent
                message={'This is a notification with close button and icon.'}
                close={true}
                icon={AddAlert}
              />
              <SnackbarContent
                message={
                  'This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don\'t have to worry about the style.'
                }
                close={true}
                icon={AddAlert}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h5>Notifications States</h5>
              <br />
              <SnackbarContent
                message={
                  'INFO - This is a regular notification made with color="info"'
                }
                close={true}
                color="info"
              />
              <SnackbarContent
                message={
                  'SUCCESS - This is a regular notification made with color="success"'
                }
                close={true}
                color="success"
              />
              <SnackbarContent
                message={
                  'WARNING - This is a regular notification made with color="warning"'
                }
                close={true}
                color="warning"
              />
              <SnackbarContent
                message={
                  'DANGER - This is a regular notification made with color="danger"'
                }
                close={true}
                color="danger"
              />
              <SnackbarContent
                message={
                  'PRIMARY - This is a regular notification made with color="primary"'
                }
                close={true}
                color="primary"
              />
            </GridItem>
          </GridContainer>
          <br />
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} style={{ textAlign: 'center' }}>
              <h5>
                Notifications Places
                <br />
                <small>Click to view notifications</small>
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth={true}
                    color="primary"
                    onClick={this.showNotification.bind(this, 'tl')}
                  >
                    Top Left
                  </Button>
                  <Snackbar
                    place="tl"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.tl}
                    closeNotification={() => this.setState({ tl: false })}
                    close={true}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth={true}
                    color="primary"
                    onClick={this.showNotification.bind(this, 'tc')}
                  >
                    Top Center
                  </Button>
                  <Snackbar
                    place="tc"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.tc}
                    closeNotification={() => this.setState({ tc: false })}
                    close={true}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth={true}
                    color="primary"
                    onClick={this.showNotification.bind(this, 'tr')}
                  >
                    Top Right
                  </Button>
                  <Snackbar
                    place="tr"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.tr}
                    closeNotification={() => this.setState({ tr: false })}
                    close={true}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <GridContainer justify={'center'}>
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth={true}
                    color="primary"
                    onClick={this.showNotification.bind(this, 'bl')}
                  >
                    Bottom Left
                  </Button>
                  <Snackbar
                    place="bl"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.bl}
                    closeNotification={() => this.setState({ bl: false })}
                    close={true}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth={true}
                    color="primary"
                    onClick={this.showNotification.bind(this, 'bc')}
                  >
                    Bottom Center
                  </Button>
                  <Snackbar
                    place="bc"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.bc}
                    closeNotification={() => this.setState({ bc: false })}
                    close={true}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth={true}
                    color="primary"
                    onClick={this.showNotification.bind(this, 'br')}
                  >
                    Bottom Right
                  </Button>
                  <Snackbar
                    place="br"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.br}
                    closeNotification={() => this.setState({ br: false })}
                    close={true}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(Notifications);
