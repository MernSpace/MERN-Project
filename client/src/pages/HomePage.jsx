import React, {useEffect} from 'react';
import productStore from "../store/ProductStore.js";
import Header from "../controller/layout/Header.jsx";

const HomePage = () => {

    const {BrandList,BrandListRequest} = productStore();
    useEffect(()=>{
        (async ()=>{
            await BrandListRequest();
        })()
    },[])

    return (
        <div>
            <Header/>
            <h1>this home page</h1>
            <p>{JSON.stringify(BrandList)}</p>

        </div>
    );
};

export default HomePage;