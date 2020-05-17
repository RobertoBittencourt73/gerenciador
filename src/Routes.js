import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                 <Switch>
                       <Route exact path='/' component={Home}/>
                       <Route exact path='/site/sobre' component={Sobre}/>
                       <Route exact path='/site/estrutura' component={Estrutura}/>
                       <Route exact path='/site/tabela' component={Tabela}/>
                       <Route exact path='/site/planos' component={Planos}/>
                       <Route exact path='/site/contato' component={Contato}/>
                       <Route exact path='/entrar' component={Entrar}/>
                       <Route exact path='/software/' component={Home}/>
                       <Route exact path='/software/arquivo' component={Arquivo}/>
                       <Route exact path='/software/cadastro' component={Cadastro}/>
                       <Route exact path='/software/relatorio' component={Relatorio}/>
                       <Route path='/erro' component={Erro}/>
                 </Switch>
            </BrowserRouter>
        )
    }
}