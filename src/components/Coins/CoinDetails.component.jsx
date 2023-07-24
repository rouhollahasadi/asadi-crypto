import React from 'react';

const CoinDetailsComponent = ({ coin }) => {
    if (!coin.id) {
        return;
    }
    //console.log(coin);
    return (
        <div className="container">
            <div className="row my-1">
                <div className="col-12">
                    <h3>Details of {coin.id}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 ">
                    <div>
                        <img src={coin.image.small} alt="" />
                        <h4>{coin.name} ({coin.symbol}) </h4>
                    </div>
                    <div>
                        <h4>
                            Market Cap Rank :<span className="ms-1">{coin.market_cap_rank}</span>
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Market Cap : <span className="ms-1">{coin.market_data.market_cap.usd.toLocaleString()}</span>
                            <span className="ms-2 badge bg-success">{coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%</span>
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Current Price : <span className="ms-1">{coin.market_data.current_price.usd.toLocaleString()}$</span>
                        </h4>
                    </div>
                </div>
                <div className="col-12 col-md-6 ">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">24h</th>
                                <th scope="col">7d</th>
                                <th scope="col">30d</th>
                                <th scope="col">1y</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr >
                                <td>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>
                                <td>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</td>
                                <td>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</td>
                                <td>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div>
                        <h4>
                            Low 24h : <span className="ms-1">{coin.market_data.low_24h.usd.toLocaleString()}</span>
                        </h4>
                    </div>
                    <div>
                        <h4>
                            High 24h : <span className="ms-1">{coin.market_data.high_24h.usd.toLocaleString()}</span>
                        </h4>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <h4>
                            Total supply: <span className="ms-1">{coin.market_data.total_supply.toLocaleString()}</span>
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Circulating supply : <span className="ms-1">{coin.market_data.circulating_supply.toLocaleString()}</span>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row coins-details-row">
                <div className="col-12">
                    {/* <p> {coin.description.en}</p> */}
                    <p dangerouslySetInnerHTML={{__html:coin.description.en}}></p>
                </div>
            </div>


        </div>
    );
};

export default CoinDetailsComponent;


// coin.image.small
// coin.name
// coin.symbol
// coin.market_cap_rank
// coin.market_data.market_cap.usd
// coin.market_data.market_cap_change_percentage_24h
// coin.market_data.current_price.usd

// coin.market_data.price_change_percentage_24h
// coin.market_data.price_change_percentage_7d
// coin.market_data.price_change_percentage_30d
// coin.market_data.price_change_percentage_1y

// coin.market_data.low_24h.usd
// coin.market_data.high_24h.usd
// coin.market_data.total_supply
// coin.market_data.circulating_supply

// coin.description.en