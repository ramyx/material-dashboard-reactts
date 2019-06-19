/* eslint-disable */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Navbar from '../components/Navbars/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';

import routes from '../routes';

import rtlStyle from '../assets/jss/material-dashboard-react/layouts/rtlStyle';

import image from 'assets/img/sidebar-2.jpg';
import logo from 'assets/img/reactlogo.png';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/rtl') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

interface Props {
  classes: any;
  location: any;
}

interface State {
  image: string;
  color: string;
  hasImage: boolean;
  fixedClasses: string;
  mobileOpen: boolean;
}

class RTL extends React.Component<Props, State> {
  refs: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      image: image,
      color: 'blue',
      hasImage: true,
      fixedClasses: 'dropdown ',
      mobileOpen: false
    };
  }

  handleImageClick = (i: string) => {
    this.setState({ image: i });
  }

  handleColorClick = (c: string) => {
    this.setState({ color: c });
  }

  handleFixedClick = () => {
    if (this.state.fixedClasses === 'dropdown') {
      this.setState({ fixedClasses: 'dropdown show' });
    } else {
      this.setState({ fixedClasses: 'dropdown' });
    }
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  getRoute() {
    return this.props.location.pathname !== '/admin/maps';
  }

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener('resize', this.resizeFunction);
  }

  componentDidUpdate(e: any) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={'الإبداعية تيم'}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          rtlActive={true}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            rtlActive={true}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
          <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            bgColor={this.state.color}
            bgImage={this.state.image}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
            rtlActive={true}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(rtlStyle)(RTL);
