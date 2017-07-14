import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  withRouter
} from 'react-router-dom';

class MenuItems extends Component {

    constructor(props){
        super();
        this.state = {list: props.listmenu, category: props.category};
    }

    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }

    render() {
        let category = this.state.category;
        const { match, location, history } = this.props

        return (
            <ul className="menu-list">
            {
                this.state.list.filter(function(item, index){
                    return item.category === category;
                }).map(function(item){
                    return (
                        <li key={item.name}>
                            <Link className={(location.pathname === "/" + item.link) ? 'is-active' : ''} to={item.link}>
                              {item.name}
                            </Link>
                              {item.submenu ? (
                                  <ul>
                                      {
                                          item.submenu.map(function(sub){
                                              return (
                                                  <li key={sub.name}>
                                                      <a>{sub.name}</a>
                                                  </li>
                                              )
                                          })
                                      }
                                  </ul>
                              ) : null}
                        </li>
                    );
                })
            }
            </ul>
        );
        }
}

export default withRouter(MenuItems);
