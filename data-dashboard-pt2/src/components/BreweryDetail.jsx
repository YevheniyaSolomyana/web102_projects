import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreweryDetail = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        const getBreweryDetail = async () => {
            const details = await fetch(`https://api.openbrewerydb.org/breweries/${params.id}`);
            const json = await details.json();
            setFullDetails(json)
        }
        getBreweryDetail().catch(console.error);
    }, [params.id])
    console.log(fullDetails)

    return (
        <div>
            {fullDetails && (
                <div>
                    <h2>{fullDetails.name}</h2>
                    <p>Street: {fullDetails.street}</p>
                    <p>Location: {fullDetails.city}, {fullDetails.state}, {fullDetails.country}</p>
                    <p>Phone number: {fullDetails.phone}</p>
                    <p>Website: {fullDetails.website_url ? <a href={fullDetails.website_url}>{fullDetails.website_url}</a> : "not found"}</p>
                </div>
            )}
        </div>
    )
}

export default BreweryDetail;