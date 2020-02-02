import React from 'react'
import Client from '../component/Client'
import { connect } from 'react-redux'
import {changePresentClient, changeQuttingClient, changeValueCheck, getPresentMap, getQuttingMap} from '../redux/Client'

class ClientClass extends React.Component{

componentDidMount(){
    //запросы
  // this.props.getPresentMap();
 //  this.props.getQuttingMap();
}

render() {
        return(
            <Client {...this.props}/>  
        )
    }
}

let mapstate = (state) => {
    return{...state.client}
}

export default connect(mapstate,{
    changePresentClient,
    changeQuttingClient,
    changeValueCheck,
    getPresentMap,
    getQuttingMap})(ClientClass)