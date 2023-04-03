const Cards = ({ list }) => {
    const numOfBreweries = [];
    const numOfBreweryTypes = new Set();
    const numOfCountriesNotUS = new Set();

    list ? list.map((item) => {
        numOfBreweries.push(item.id);
        numOfBreweryTypes.add(item.brewery_type);

        if (item.country !== "United States") {
            numOfCountriesNotUS.add(item.country)
        }

    }) : null


    return (
        <div>
            <div className="card-box">
                <p>There are {numOfBreweries.length} breweries per page</p>
            </div>

            <div className="card-box">
                <p>There are {numOfBreweryTypes.size} brewery types</p>
            </div>

            <div className="card-box">
                <p>There is {numOfCountriesNotUS.size} brewery outside the United States:</p>
                {
                    Array.from(numOfCountriesNotUS).map((country, index) => {
                        return <li key={index}>{country}</li>
                    })
                }
            </div>
        </div>
    )
}

export default Cards;