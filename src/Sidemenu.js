import React, { Component } from 'react';
import MenuItems from './MenuItems';

class Sidemenu extends Component {

    constructor(){
        super();
        this.state = {list: [
            {
                name: "Dashboard",
                category: "General",
                link: "#"
            },{
                name: "Costumers",
                category: "General",
                link: "#"
            },{
                name: "Team Settings",
                category: "Administration",
                link: "#"
            },{
                name: "Manage Your Team",
                category: "Administration",
                link: "#",
                submenu: [
                    {
                        name: "Members",
                        link: "#"
                    },{
                        name: "Plugins",
                        link: "#"
                    },{
                        name: "Add a member",
                        link: "#"
                    }
                ]
            },{
                name: "Authentication",
                category: "Administration",
                link: "#"
            },{
                name: "Payments",
                category: "Transactions",
                link: "#"
            },{
                name: "Balance",
                category: "Transactions",
                link: "#"
            }
        ]};
    }

    render() {
    return (
        <aside className="menu">

          <p className="menu-label">
            General
          </p>
          <MenuItems listmenu={this.state.list} category={'General'}/>

          <p className="menu-label">
            Administration
          </p>
          <MenuItems listmenu={this.state.list} category={'Administration'}/>

          <p className="menu-label">
            Transactions
          </p>
          <MenuItems listmenu={this.state.list} category={'Transactions'}/>
        </aside>
        );
    }
}

export default Sidemenu;
