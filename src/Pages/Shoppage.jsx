import { useParams } from "react-router-dom"
function Shoppage(){
    const {id}=useParams
    return(
        <h1>more details about Shop {id}</h1>
    )
    }
    
    export default Shoppage