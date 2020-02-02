import React from 'react'
import SplitPane from 'react-split-pane';
import './Client.css'

const Client = (props) => {
    let presentList = props.presentList.map(item => {
        return(
           <li key={item.historyNumber} className={item.historyNumber === props.presentItem.historyNumber?"item_client item_action":"item_client"}
           id =  {item.historyNumber}          
           onClick = {() => props.changePresentClient(item)}>
               <div className="item_id">{item.historyNumber}</div>
               <div className="item_name">{item.firstName + " " + item.lastName+" " + item.patrName}</div>
               <div className="item_bedNumber">{item.bedNumber}</div>
           </li>
        )
    })

    let quttingList = props.quttingList.map(item => {
        return(
            <li key={item.historyNumber} className={item.historyNumber === props.quttingItem.historyNumber?"item_client item_action":"item_client"}
            id =  {item.historyNumber}          
            onClick = {() => props.changeQuttingClient(item)}>
                <div className="item_id">{item.historyNumber}</div>
                <div className="item_name">{item.firstName + " " + item.lastName+" " + item.patrName}</div>
                <div className="item_cause">{item.cause}</div>
            </li>
         )
    })


     let valueInfo = props.valueCheck === 'present'? props.presentItem:props.quttingItem;
     let infoClient = (  
        <ul className="list_info_client">
            <li className="item_info_client">
                ФИО: {Object.keys(valueInfo).length == 0?null:valueInfo.firstName + " " + valueInfo.lastName+" " + valueInfo.patrName}
            </li>
            <li className="item_info_client">
                Возраст: {Object.keys(valueInfo).length == 0?null:valueInfo.age}
            </li>
            <li className="item_info_client">
                Диагноз:{Object.keys(valueInfo).length == 0?null:valueInfo.diagnosis}
             </li>
        </ul>

)
    
    return (
    <div className= "app">
        <SplitPane split="vertical"   minSize = "50%" primary="second" >
            <div className="info_client">
                <div className = "heading_info_client"> Информация о клиенте</div>
                    {infoClient}
            </div>
            <div className="block_client">
                    <div className="change_client">
                        <button  className={props.valueCheck === 'present'?"item_change_client action":"item_change_client"}
                         onClick={()=>props.changeValueCheck('present')}>ПРИСУТСТВУЮЩИЕ({props.presentList.length})</button>
                        <button  className={props.valueCheck === 'qutting'?"item_change_client action":"item_change_client"}
                         onClick={()=>props.changeValueCheck('qutting')}>ВЫБЫВШИЕ({props.quttingList.length})</button>
                    </div>

                <ul className="list_client">
                    <li className="item_client head">
                        <div className = "item_id">N ИБ</div>
                        <div className = "item_name">ФИО</div>
                        <div className = "item_bedNumber">{props.valueCheck === 'present'?"Палата":"Причина выбытия"}</div>
                    </li>
                {props.valueCheck === 'present'?presentList:quttingList}


                </ul>
            </div>
        </SplitPane>
    </div> 
        )
}

export default Client;