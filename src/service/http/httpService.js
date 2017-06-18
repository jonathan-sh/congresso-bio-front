/**
 * Created by jonathan on 1/11/17.
 */

import React, {Component} from 'react';
import $ from "jquery";

export default class HttpService extends Component {

    constructor(){
        super();
    }

    componentDidMount() {
      $.ajax({
        type: this.props.method,
        url: 'http://localhost:4212/' + this.props.resource,
        contentType: 'application/json',
        dataType: 'json',
        data: this.props.data,
        success: function(response) {
          console.log('ok');
          console.log(this.webUrl + this.props.resource);
          console.log(response);
        },
        error: function(response){
          console.log('fail');
          console.log(this.webUrl + this.props.resource);
          console.log(response);
        },
        beforeSend: function(){
          console.log('send');
        }
      });
    }



}
