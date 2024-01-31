

'use client'
import React from "react"
import PortfolioDetailDesign from '../../page/portfolio-detail-design'
import { DataArray } from "@/app/data";


/**
 * Renders the Portfolio component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters object containing the id.
 * @param {string} props.params.id - The id of the portfolio.
 * @returns {JSX.Element} The rendered Portfolio component.
 */
const Portfolio = (props) => {

console.log("the id is: ",props.params.id)   

    return(
        <React.Fragment>
            <PortfolioDetailDesign 
            data={DataArray[props.params.id]} 
            id={props.params.id}
            DataArray={DataArray}
            />
        </React.Fragment>
    )
}

export default Portfolio