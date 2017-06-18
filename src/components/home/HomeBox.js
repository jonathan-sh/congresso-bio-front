/**
 * Created by jonathan on 1/14/17.
 */

import React, {Component} from 'react';


export default class Home extends Component {

    render() {
        return (
        <div id="home">
            <div style={{width: '100%',textAlign: 'center',marginTop:'60px'}} className="parallax">
                <div style={{background:'rgba(0,0,0,0.5)',height:'80vh',paddingTop:'8%',}}>
                    <h1 style={{color:'#FFF', fontSize:'40px'}}>Congresso Reginal de Biomedicina</h1>
                    <br/>
                    <h1 style={{width:'80%',color:'#FFF', fontSize:'20px', margin:'auto', fontFamily:'Roboto', fontWeight:'400'}}>
                        Lorem ipsum, vel ultricies quam efficitur eu.
                        Nam id purus imperdiet, sodales turpis vel, vestibulum felis.
                    </h1>
                </div>

            </div>

            <div style={{textAlign:'center', paddingTop:'10px'}}>
                <h1 style={{color:'#000', fontSize:'40px'}}>Sobre</h1>
                <br/>
                <h1 style={{width:'80%',color:'#000', fontSize:'20px', paddingBottom:'50px', margin:'auto', fontFamily:'Roboto', fontWeight:'400'}}>
                    Lorem ipsum, vel ultricies quam efficitur eu.
                    Nam id purus imperdiet, sodales turpis vel, vestibulum felis.
                    Lorem ipsum, vel ultricies quam efficitur eu.
                    Nam id purus imperdiet, sodales turpis vel, vestibulum felis.
                    Lorem ipsum, vel ultricies quam efficitur eu.
                    Nam id purus imperdiet, sodales turpis vel, vestibulum felis.
                </h1>
            </div>


            <div id="programacao" style={{width: '100%', textAlign: 'center'}} className="parallax2">
                <div style={{background:'rgba(0,0,0,0.5)',height:'300vh', paddingTop:'64px'}}>
                    <h1 style={{color:'#FFF', fontSize:'40px', }}>Programação</h1>
                    <br/>
                    <div>

                    </div>
                </div>
                <div id="local" style={{background: 'rgba(0, 0, 0, 0.5)', top:'0px'}}>
                    <h1 style={{color:'#FFF', fontSize:'40px',margin:'0', paddingBottom:'30px' }}>Local</h1>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.468009496806!2d-50.43265528506433!3d-21.213282285898668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94964160010ef9bf%3A0x6b5b8fb85d127766!2sCentro+Universit%C3%A1rio+Toledo!5e0!3m2!1spt-BR!2sbr!4v1496021383897"
                   style={{width:'100%',height:'300px',border:'1px #000'}}>

                </iframe>
            </div>

            <div id="programacao" style={{width: '100%', textAlign: 'center'}} className="parallax">
                <div style={{background:'rgba(0,0,0,0.5)',height:'50vh', paddingTop:'64px'}}>
                    <h1 style={{color:'#FFF', fontSize:'40px', }}>Footer</h1>
                    <br/>
                    <div>

                    </div>
                </div>

            </div>

        </div>
        );
    }
}
