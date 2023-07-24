import React from 'react';

const CoinsComponents = ({ data }) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">logo</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">current_price</th>
                    <th scope="col">price_change_percentage_24h</th>
                    <th scope="col">Volume</th>
                    <th scope="col">market_cap</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    data.map((coin) => (
                        <tr key={coin.market_cap_rank}>
                            <th scope="row">{coin.market_cap_rank}</th>
                            <td><img src={coin.image} alt="logo-symbol" className="logo-crpto" /></td>
                            <td>{coin.symbol}</td>
                            <td>{coin.current_price.toLocaleString()}$</td>
                            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                            <td>{coin.total_volume.toLocaleString()}</td>
                            <td>{coin.market_cap.toLocaleString()}$</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default CoinsComponents;

