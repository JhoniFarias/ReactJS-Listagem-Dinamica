import React,{Component} from 'react';

export default class Formulario extends Component{

    constructor(props){
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }
        this.state =  this.stateInicial;
    }

    setCampo = (event) =>{
        const {name,value} = event.target;
        this.setState({
            [name] : value
        });    
    }

    submitFormulario = () =>{
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

   

    render(){
        
        const{nome,livro,preco} = this.state;

        return(

            <form>
                <div className="row">
                    <div className="input-field col s4">
                    
                    <input placeholder="Nome Completo" id="nome" type="text" name="nome" value= {nome} onChange={this.setCampo} />
                    </div>
                    <div className="input-field col s4">
                    <input placeholder="Livro" id="livro" type="text" name="livro" value = {livro} onChange={this.setCampo}/>
                    </div>
                    <div className="input-field col s4">
                    <input placeholder="Preço" id="preco" type="text" name="preco"value= {preco} onChange={this.setCampo}/>
                    </div>    
                    <input type="button" onClick={this.submitFormulario} className="waves-effect waves-light btn" value="Gravar" />
                </div>
            </form> 
            

        );
    }
}