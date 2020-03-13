import axios from 'axios';
import React from "react";

const Body = () => {

    axios.get("http://localhost:8000/solr/rubrik/select?hl=on&hl.fl=title&q=text_ngram:boston")
                .then(res => {
                    console.log("api called!!!");
                });
    return ( 
        <h3> API CALLED!!!</h3>
    )
}

export default Body;