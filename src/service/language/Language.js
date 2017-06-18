/**
 * Created by jonathan on 1/11/17.
 */

import React from 'react';

export class getWorld extends React.Component{


    constructor(){
        super();
        this.state={language:''};
        this.Language();
        this.source = require('./src/br.json')
    }


    componentWillMount(){
          alert('asd')
          console.log(this.source);

    }

    render(){
      return(
        <h1>JONATHAN</h1>
     );
   }



}
