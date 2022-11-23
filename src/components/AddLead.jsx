import React, {useState} from "react";
import Bx24API from "../bx24";

export default function AddLead(){
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('')
    const addLeadHandler = async () =>{
        const result = await Bx24API.callMethod('crm.deal.add',{
            fields:{
                "TITLE": title,
                "PHONE": [
                    {
                        "VALUE": phone,
                        "VALUE_TYPE": "WORK",
                    }
                ]
            }
        })
        return result;
    }
    return(
        <div>
            <input type="text" name="title" placeholder="Введите название" onChange={(e) => setTitle(e.target.value)}/>
            <input type="tel" name="name" placeholder="Введите телефон" onChange={(e) => setPhone(e.target.value)}/>
            <button onClick={addLeadHandler}>Добавить</button>
        </div>
    );
}