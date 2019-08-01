import React,{Component,Fragment} from 'react';
import Tabela from './Tabela';
import Header from './Header'
import 'materialize-css/dist/css/materialize.min.css';
import Formulario from './Formulario'

class App extends Component {
  state = {
    autores : [
      {
        id:1,
        nome: 'Jhoni Farias',
        livro: 'Desenvolvedor Asp.NET Core e React.js',
        preco: 150.00
      },
      {
        id:2,
        nome: 'Jhoni Farias',
        livro: 'Programador PHP e wordpress Master',
        preco: 150.00
      },
      {
        id:3,
        nome: 'Jhoni Farias',
        livro: 'Cangaceiro do Vanila JS',
        preco: 150.00
      },
  
    ],
  
  }

  removeAutor = (index) =>{

      const {autores} = this.state;

      this.setState(
        {
           autores :  autores.filter((autor,posAtual) => {
               console.log(posAtual,index);
               return posAtual !== index;
              
           }
           )}
      );
  }
  escutadorDeSubmit = (autor)=>{
      this.setState({
          autores: [...this.state.autores, autor]
      });
  }

  render(){
    return (
          
          <Fragment>
              <Header/>
              <Tabela autores={this.state.autores} removeAutor = {this.removeAutor}/>
              <Formulario escutadorDeSubmit={this.escutadorDeSubmit}/>
           </Fragment>
  
    );
  }


  
}

export default App;
