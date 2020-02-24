import React from 'react'

const PropertySummary = (property) => {
    return (
        
        //card-for-view-property
        <div className="container">
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="materialboxed" width="650" src={require('../../images/property24_house.jpg')} alt="property" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h4>{property.price}</h4>
                            <h6>property.name</h6>
                            <p>{property.description}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default PropertySummary