import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseDetailUrl } from '../constans/api';
import axios from 'axios';
import CoinDetailsComponent from '../components/Coins/CoinDetails.component';
import SpinnerComponent from '../components/ui/Spinner.component';

const CoinPage = () => {
    const paramObject = useParams();
    //console.log(paramObject.id);
    const url = baseDetailUrl(paramObject.id);
    //console.log(url);
    //
    const [coin, setCoin] = useState({});//Emty object
    const [loading, setLoading] = useState(false);//Boolean false
    const [error, setError] = useState("");//empty string
    //
    useEffect(() => {
        //step1
        setLoading(true);
        //step2
        axios(url)
            .then(response => {
                setLoading(false);//if recive response then loading will  finish
                //console.log(response.data);//print data
                setCoin(response.data);
            })
            .catch(error => {
                setError("An error take placed");
            })
    }, []);

    //
    return (
        <div className="container">

            {
                loading ? <SpinnerComponent /> : error !== "" ? <h3>{error}</h3> : <CoinDetailsComponent coin={coin} />
            }
        </div>
    );
};

export default CoinPage;