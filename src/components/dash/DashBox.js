import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IcoMenu from 'material-ui/svg-icons/navigation/menu';
import PubSub from 'pubsub-js';
import RaisedButton from 'material-ui/RaisedButton';
import QuestionYesNo from '../../service/message/QuestionYesNo';
import MenuDash from './RoutesDash';
import {Link} from 'react-router';
import ProgressBar from './ProgressBar';

class HeaderBar extends Component {


    userLogOut = () => PubSub.publish('SHOW-QUESTION-YES-NO',{teste:''});


    openCloseLeftMenu = () => PubSub.publish('OPEN-LEFT-MENU',{open:false});


    render(){
        return(
            <AppBar
                style={{background:'#2176ff', position:'fixed'}}
                title={<span onClick={this.openCloseLeftMenu} style={{cursor: 'pointer'}}>Congresso</span>}
                iconElementLeft={<IconButton onTouchTap={this.openCloseLeftMenu} ><IcoMenu /></IconButton>}
                iconElementRight={<RaisedButton
                                label="INSCREVA-SE"
                                fullWidth={true}
                                backgroundColor="#0ac752"
                                labelStyle={{color:'#FFF'}}
                                containerElement={<Link to='/inscricao'/>}
                                style={{marginTop:'4px'}}/>}/>
                    );
    }

}

class LeftMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};

    }

    closeLeftMenu = () => {
        this.setState({open: false});
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
            <div>
                <Drawer docked={true}
                        swipeAreaWidth={10}
                        disableSwipeToOpen={true}
                        width={210}
                        openSecondary={false}
                        open={this.state.open}
                        zDepth={2} >
                    <AppBar
                        style={{background:'#2176ff'}}
                        title={<span onClick={this.closeLeftMenu} style={{cursor: 'pointer'}}>Congresso</span>}
                        iconElementLeft={<IconButton onTouchTap={this.closeLeftMenu}>
                            <IcoMenu />
                        </IconButton>}
                    />

                    <MenuDash />
                </Drawer>
            </div>
        );
    }
}

class HomeDashBox extends Component{

    constructor(){
        super();
        this.state={class:'margin-left-250'};
    }

    componentDidMount(){
        PubSub.subscribe('USER-OUT',
            function (canal, object) {
                console.log(canal);
                console.log(object);
            }
        );

        PubSub.subscribe('OPEN-LEFT-MENU',
            function (canal, object) {
                this.setState({class:'margin-left-250'})
            }.bind(this)
        );
        PubSub.subscribe('CLOSE-LEFT-MENU',
            function (canal, object) {
                this.setState({class:''})
            }.bind(this)
        );
    }


    render(){
        return(
            <div>
                <HeaderBar/>
                <LeftMenu />
                <QuestionYesNo text={'Deseja sair ?'}  title={'Titulo'} canal={'USER-OUT'}/>

                <div style={{transition: 'all 0.5s'}} className={this.state.class}>
                    <ProgressBar />
                    {this.props.children}
                </div>

            </div>
        );
    }
}


export default HomeDashBox;
