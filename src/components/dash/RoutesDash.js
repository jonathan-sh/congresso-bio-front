import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import HomeIco from 'material-ui/svg-icons/action/home';
import AboutIco from 'material-ui/svg-icons/action/watch-later';
import AddIco from 'material-ui/svg-icons/content/create';
import RuleIco from 'material-ui/svg-icons/action/assignment-late';
import PlaceIco from 'material-ui/svg-icons/maps/place';
import {Link} from 'react-router';
import PubSub from 'pubsub-js';

export default class MenuDash extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};

    }


    openCloseLeftMenu()
    {
        PubSub.publish('OPEN-LEFT-MENU',{open:true})
        PubSub.publish('CLOSE-LEFT-MENU',{open:false});
    }


    componentDidMount(){
        PubSub.subscribe('OPEN-LEFT-MENU',
            function (canal, object) {
                this.setState({open: !this.state.open});
            }.bind(this)
        );
    }

    render() {
        return (
            <Menu autoWidth={false} width={340}>

                <MenuItem
                    primaryText="Home"
                    leftIcon={<HomeIco  />}
                    onClick={this.openCloseLeftMenu}
                    containerElement={<Link to='/home#home'/>}/>


                <Divider />
                <MenuItem
                    primaryText="Programação"
                    leftIcon={<AboutIco />}
                    onClick={this.openCloseLeftMenu}
                    href="/home#programacao"
                    />


                <Divider />
                <MenuItem
                    primaryText="Inscrição"
                    leftIcon={<AddIco />}
                    onClick={this.openCloseLeftMenu}
                    containerElement={<Link to='/inscricao'/>}/>

                <Divider />
                <MenuItem
                    primaryText="Regas"
                    leftIcon={<RuleIco />}
                    onClick={this.openCloseLeftMenu}
                    containerElement={<Link to='/regulamento'/>}/>

                <Divider />
                <MenuItem
                    primaryText="Local"
                    leftIcon={<PlaceIco />}
                    onClick={this.openCloseLeftMenu}
                    href="/home#local"/>


            </Menu>
        );
    }
}
