import axios from "axios";
import { useState } from "react";
type auther = {
    created_at: string;
    description: string;
    email: string;
    key: string;
    name: string;
    updated_at: number;
};
type response = {
    auther: auther;
    created_at: number;
    key: string;
    name: string;
    updated_at: number;
};
export default function Test() {
    const [data, setData] = useState<response[]>();
    const url = "https://t9f823.deta.dev/";
    const getData = () => {
        axios.get(url + "api/v1/threads").then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    };
    return (
        <div>
            {data ? <div>{data[0].created_at}</div> : <></>}
            <button onClick={getData}>testbutton</button>
        </div>
    );
}
