import React, {useEffect, useState} from "react";
import Bx24API from "../bx24";


export default function GetLeadsInfo(props){
    const [leads, setLeads] = useState([]);
    useEffect(async () =>{

        const data = await Bx24API.callMethod('crm.deal.list',{
            select: ["TITLE", "PHONE", "STAGE_ID"],
        });

        const result = data.result;
        setLeads(result);

    }, [])

    return(
        <div>
            <h2>Все лиды которые есть:</h2>

            <ul>{leads.map((el, idx) => <li key={idx}>
                <h3>{el.TITLE}</h3>
                <p>Статус: {el.STAGE_ID}</p>

            </li>)}</ul>
        </div>
    );
}