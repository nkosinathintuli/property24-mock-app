import React from 'react'
import PropertySummary from './PropertySummary'
import {Link} from 'react-router-dom'

const PropertyList = ({properties}) =>{
    return(
        <div className="project-list section">
            { properties && properties.map(property =>{
                return (
                <Link to={'/property/'+property.id} key={property.id}>
                    <PropertySummary property={property} />
                </Link>
                )
            })}
        </div>
    )
}

export default PropertyList