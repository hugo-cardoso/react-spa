import React, { Component } from 'react';

class MenuItems extends Component {

    constructor(props){
        super();
        this.state = {list: props.listmenu, category: props.category};
    }

    render() {

        let category = this.state.category;

        return (
            <ul className="menu-list">
            {
                this.state.list.filter(function(item, index){
                    return item.category === category;
                }).map(function(item){
                    return (
                        <li key={item.name}>
                          <a>
                            <Link to={item.link}>{item.name}</Link>
                          </a>
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

export default MenuItems;
