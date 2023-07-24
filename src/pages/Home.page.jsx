import React, { useEffect, useState } from 'react';
import SpinnerComponent from '../components/ui/Spinner.component';
import axios from 'axios';
import {baseUrl} from '../constans/api';
import CoinsComponents from '../components/Coins/Coins.components';

const HomePage = () => {

    const [data, setData] = useState([]);//Emty Array
    const [loading, setLoading] = useState(false);//Boolean false
    const [error, setError] = useState("");//empty string
    //
    useEffect(() => {
        //step1
        setLoading(true);
        //step2
        axios(baseUrl)
        .then(response => {
            setLoading(false);//if recive response then loading will  finish
            //console.log(response.data);//print data
            setData(response.data);
        })
        .catch(error=>{
            setError("An error take placed");
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Crypto Currency</h2>
                    <h4>you can see crypto online easily</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {loading ? <SpinnerComponent /> : error !=="" ? <h3>{error}</h3> : <CoinsComponents  data={data} />}
                </div>
            </div>
            {/* <SpinnerComponent /> */}
        </div>
    );
};

export default HomePage;