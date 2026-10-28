import { useContext } from "react"
import { NewContext } from "./Utilities/NewContext"


export default function Alert() {

    // all classes: alert / alert_pri / alert_suc / alert_err

    let {alert, type_alert } = useContext(NewContext)
    // let all_div = document.getElementById('alert');

    if(!alert)
        return ''

    if(type_alert == 'success')
        return <div className="sans alert_suc" id="alert">{alert}</div>
    
    else if(type_alert == 'primary')
        return <div className="sans alert_pri" id="alert">{alert}</div>
    
    else if(type_alert == 'error')
        return <div className="sans alert_err" id="alert">{alert}</div>

    return <div className="sans alert" id="alert">{alert}</div>
}