import { Navigate} from "react-router-dom"

const PublicRoute = ({ isLoggedin, children }) => {
    if(isLoggedin){
        return <Navigate to="/employees" />;
    }
    
    return children          
}

export default PublicRoute