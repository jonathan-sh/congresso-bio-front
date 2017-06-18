/**
 * Created by jonathan on 1/11/17.
 */

import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PubSub from 'pubsub-js';

export default class QuestionYesNo extends Component {


    constructor(){
      super();
      this.state = {open: false,};
      this.canal = '';

    }

    handleOpenClose = () => { this.setState({open: !this.state.open}); };

    yesSelected = () => {
        if(this.canal!=='' && this.canal !== undefined){
          this.handleOpenClose();
          PubSub.publish(this.canal,{teste:'nois q voa'});
        }
    };

    noSelected = () => {
        this.handleOpenClose();
    };

    componentDidMount(){
      PubSub.subscribe('SHOW-QUESTION-YES-NO',
          function (canal, object) {
              this.setState({open: true});
          }.bind(this)
      );
      this.canal = this.props.canal;
    }



    render() {
        const actions = [
            <FlatButton
                label={'yes'}
                primary={true}
                onTouchTap={this.yesSelected}
            />,
            <FlatButton
                label={'no'}
                primary={false}
                onTouchTap={this.noSelected}
            />
        ];

        return (
            <div>
                <Dialog
                    title={this.props.title}
                    font-weight
                    titleStyle={{  fontWeight:'400'}}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                {this.props.text}
                </Dialog>
            </div>
        );
    }
}
