import React from 'react';
import {
  Route,
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import SiderBar from '../../components/MusicHome/SiderBar';
import ActionHook from '../../components/MusicHome/ActionHook';
import Footer from '../../components/common/Footer';
import userActions from '../../store/actions/user';
import style from './index.less';


function MusicHome(props) {
  const {
    routes,
  } = props;

  return (
    <div styleName="home">
      <SiderBar/>
      <ActionHook/>
      <div styleName="homePage">
        {
          routes.map(({ path, componentName, key }) => {
            const Tag = componentName;
            return (
              <Route
                key={ key }
                path={ path }
                render={ cpmProps => (
                  <Tag { ...cpmProps }/>
                ) }
              />
            );
          })
        }
      </div>
      <Footer/>
    </div>
  );
}

MusicHome.propTypes = {
  routes: propTypes.array.isRequired,
};

export default connect((state) => ({
  ...state,
}), userActions)(CSSModules(MusicHome, style));
