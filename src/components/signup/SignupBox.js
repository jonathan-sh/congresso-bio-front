import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import InputMask from 'react-input-mask';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';


import $ from "jquery";

export default class Signup extends Component{
    constructor(){
        super();
        this.state = { universityText:'',
            isToledo:false,
            university:1,
            ra:'',
            name:'',
            cpf:'',
            email:'',
            half:'',
            cep:'',
            street:'',
            city:'',
            abstract:'',
            textRaError:'',
            textNameError:'',
            textCpfError:'',
            textEmailError:'',
            textHalfError:'',
            textCepError:'',
            textStreetError:'',
            textCityError:'',
            textAbstractError:'',
            showModal:false};

        this.httpMethod = this.httpMethod.bind(this);
        this.validation = this.validation.bind(this);
        this.emptyValidation = this.emptyValidation.bind(this);
        this.cpfValidation = this.cpfValidation.bind(this);
        this.universityChange = this.universityChange.bind(this);
        this.raChange = this.raChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.cpfChange = this.cpfChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.halfChange = this.halfChange.bind(this);
        this.cepChange = this.cepChange.bind(this);
        this.streetChange = this.streetChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.abstractChange = this.abstractChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    httpMethod(){

        var data =   { "name": "Jonathan",
                    "email": "jonathan@mail.com",
                    "cpf": "41803589809"};
        $.ajax({
            type: 'POST',
            url: 'http://localhost:2806/person',
            header: 'Access-Control-Allow-Origin',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function(response) {
                console.log(response);
            }.bind(this),
            error: function(response){
                console.log(response);
            },
            beforeSend: function(response){
                //console.log(response);
            }
        })
    }

    validation(){
        // if (this.emptyValidation())
        // {
        //     if (!this.cpfValidation(this.state.cpf))
        //         this.setState({'textCpfError':'CPF inválido'});
        //
        // }
        // this.setState({showModal: true});

        this.httpMethod()
    }

    emptyValidation(){
        if  (this.state.name === '') this.setState({'textNameError':'Nome não informado'});
        if  (this.state.cpf === '') this.setState({'textCpfError':'CPF não informado'});
        if  (this.state.email === '') this.setState({'textEmailError':'Email não informado'});
        if  (this.state.cep === '') this.setState({'textCepError':'CEP não informado'});
        if  (this.state.street === '') this.setState({'textStreetError':'Rua não informada'});
        if  (this.state.city === '') this.setState({'textCityError':'Cidade não informada'});
        if  (this.state.abstract === '') this.setState({'textAbstractError':'Resumo não informado'});

        return this.state.name !== '' ||
               this.state.cpf !== '' ||
               this.state.email !== '' ||
               this.state.cep !== '' ||
               this.state.street !=='' ||
               this.state.city !== '' ||
               this.state.abstract !=='';
    }

    cpfValidation =(strCPF)=>{
        strCPF = strCPF.replace('.','');
        strCPF = strCPF.replace('.','');
        strCPF = strCPF.replace('-','');
        var Soma;
        var Resto;
        Soma = 0;
        var i=0;
        if (strCPF === "00000000000") return false;

        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10)) ) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }

    handleOpen = () => {
        this.setState({showModal: true});
    };

    handleClose = () => {
        this.setState({showModal: false});
    };


    styles = {
        block: {
            maxWidth: 250,
        },
        checkbox: {
            marginBottom: 16,
        },
    };

    componentDidMount() {
        console.log("antes de qualquer coisa");
    }



    universityChange(event, index, university){
        if (university===1)
        {
            this.setState({'isToledo':false});
        }
        else
        {
            this.setState({'isToledo':true});
        }

        this.setState({'university':university});
        this.setState({'universityText':$("#universityComboBox")[0].innerText});
    }
    raChange(e){
        this.setState({'ra':e.target.value});
    }
    nameChange(e){
        var name = e.target.value.toUpperCase();
        this.setState({'name':name});
        this.setState({'textNameError':''});

    }
    cpfChange(e){
        this.setState({'cpf':e.target.value});
        this.setState({'textCpfError':''});
    }
    emailChange(e){
        this.setState({'email':e.target.value});
        this.setState({'textEmailError':''});
    }
    halfChange(e){
        this.setState({'half':e.target.value});
    }
    cepChange(e){
        this.setState({'cep':e.target.value});
        this.setState({'textCepError':''});

    }
    streetChange(e){
        this.setState({'street':e.target.value});
        this.setState({'textStreetError':''});
    }
    cityChange(e){
        this.setState({'city':e.target.value});
        this.setState({'textCityError':''});
    }
    abstractChange(e){
        this.setState({'abstract':e.target.value});
        this.setState({'textAbstractError':''});
    }




    render(){
        return(
            <div style={{width:'90%',textAlign:"center", margin:"auto", marginTop:'64px'}}>
                <h2>Inscrição</h2>

                <div style={{width:'100%'}}>
                    <div style={{width:'65%',float:'left'}}>
                        <SelectField
                            id="universityComboBox"
                            floatingLabelText="Universidade"
                            value={this.state.university}
                            onChange={this.universityChange}
                            floatingLabelFixed={false}
                            floatingLabelStyle={{marginLeft: '-50%',fontSize:'22px'}}
                            fullWidth={true}
                        >
                            <MenuItem value={1} primaryText="Centro Universitário Toledo" />
                            <MenuItem value={2} primaryText="UNIP - Universidade Paulista" />
                            <MenuItem value={3} primaryText="Unisalesiano Centro Universitário Católico Salesiano Auxilium" />
                            <MenuItem value={4} primaryText="Outras" />
                        </SelectField>
                    </div>
                    <div style={{width:'30%',float:"right"}}>
                        <TextField
                            type="text"
                            fullWidth={true}
                            hintText="informe seu ra"
                            floatingLabelText="RA"
                            onChange={this.raChange}
                            disabled={this.state.isToledo}
                            value={this.state.ra}>
                            <InputMask  mask="99999" maskChar={null}/>
                        </TextField>
                    </div>
                </div>

                <div style={{width:'100%'}}>
                    <div style={{width:'65%',float:'left'}}>
                        <TextField
                            type="text"
                            fullWidth={true}
                            errorText={this.state.textNameError}
                            hintText="informe seu nome"
                            floatingLabelText="Nome"
                            floatingLabelFixed={false}
                            onChange={this.nameChange}
                            value={this.state.name}>

                        </TextField>
                    </div>
                    <div style={{width:'30%',float:"right"}}>
                        <TextField
                            type="text"
                            fullWidth={true}
                            hintText="informe seu cpf"
                            floatingLabelText="CPF"
                            errorText={this.state.textCpfError}
                            floatingLabelFixed={false}
                            onChange={this.cpfChange}
                            value={this.state.cpf}>
                            <InputMask  mask="999.999.999-99" maskChar={null}/>
                        </TextField>
                    </div>
                </div>


                <TextField
                    type="text"
                    fullWidth={true}
                    hintText="informe seu email"
                    floatingLabelText="Email"
                    errorText={this.state.textEmailError}
                    floatingLabelFixed={false}
                    onChange={this.emailChange}
                    value={this.state.email}
                />

                <div style={{width:'100%'}}>
                    <div style={{width:'20%',float:"left"}}>
                        <TextField
                            type="text"
                            fullWidth={true}
                            hintText="informe seu cep"
                            floatingLabelText="CEP"
                            errorText={this.state.textCepError}
                            onChange={this.cepChange}
                            value={this.state.cep}>
                            <InputMask mask="99999-999" maskChar={null}/>
                        </TextField>
                    </div>
                    <div style={{width:'70%',float:"right"}}>
                        <TextField
                            type="text"
                            fullWidth={true}
                            hintText="informe sua rua"
                            floatingLabelText="Rua"
                            errorText={this.state.textStreetError}
                            onChange={this.streetChange}
                            value={this.state.street}
                        />
                    </div>
                </div>

                <TextField
                    type="text"
                    fullWidth={true}
                    hintText="informe sua cidade"
                    floatingLabelText="Cidade"
                    errorText={this.state.textCityError}
                    onChange={this.cityChange}
                    value={this.state.city}
                />

                <TextField
                    type="text"
                    fullWidth={true}
                    hintText="informe aqui um pequeno texto que resume o seu trabalho para aparecer na pagina de programação do evento"
                    floatingLabelText="Resumo"
                    errorText={this.state.textAbstractError}
                    onChange={this.abstractChange}
                    value={this.state.abstract}
                />

                <RaisedButton
                    label="CONCLUIR"
                    onTouchTap={this.validation}
                    fullWidth={true}
                    backgroundColor="#0ac752"
                    labelStyle={{color:'#FFF'}}
                    style={{marginTop:'20px',marginBottom:'12px'}}/>




                <div>
                    <Dialog
                        titleStyle={{background:'#2176ff', color:"#FFFFFF"}}

                        title="Verifique os dados antes de continuar"
                        actions={[
                            <FlatButton
                                label="CORRIGIR"
                                primary={true}
                                keyboardFocused={true}
                                onTouchTap={this.handleClose}/>,
                            <FlatButton
                                label="CONTINUAR"
                                primary={true}
                                hoverColor="#09953b"
                                backgroundColor="#0ac752"
                                labelStyle={{color:'#FFFFFF'}}
                                onTouchTap={this.handleClose}/>,

                        ]}
                        modal={true}
                        autoScrollBodyContent={true}
                        open={this.state.showModal}
                        onRequestClose={this.handleClose}
                    >
                        <p><b>UNIVERSIDADE: </b>{this.state.universityText}</p>
                        <p><b>RA: </b>{this.state.ra}</p>
                        <p><b>NOME: </b>{this.state.name}</p>
                        <p><b>CPF: </b>{this.state.cpf}</p>
                        <p><b>EMAIL: </b>{this.state.email}</p>
                        <p><b>CEP: </b>{this.state.cep}</p>
                        <p><b>RUA: </b>{this.state.street}</p>
                        <p><b>CIDADE: </b>{this.state.city}</p>
                        <p><b>RESUMO: </b>{this.state.abstract}</p>
                    </Dialog>
                </div>

            </div>
        );
    }
}
