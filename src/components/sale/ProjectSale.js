
import React, {Component} from "react";
import SaleF from "./SaleF";
import SaleC from "./SaleC";
import SaleS from "./SaleS";
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

class ProjectSale extends Component {
    render(){
        return(
         <div>
             <SaleF /> <SaleS /> <SaleC />
    
                </div>
        );
    }
    }

export default ProjectSale;