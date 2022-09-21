/* eslint-disable */
import axios, { AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header";

const requestHeader = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Cookie": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTY1NDcwNzkuMDU1OTMyLCJ1c2VyX2lkIjoiNjRmMWE4MGEtNjM1MS00ODQyLWE2ZGYtMmU5MzNlMTAyMzRkIn0.AtJ1LCayUjxsRrwD5hXeaHC3dp4dphI7PWD2Ad0gpKY; _ga=GA1.1.2011111420.1656921552; _ga_2BGD3DNW7C=GS1.1.1656939374.2.1.1656939721.0; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=f8c78423f46d8944ea01490f5668e6e5c1cfa0a38d85f9705da641ade23ef4e1%7C250deeb25d6850e1ee83b58a465d8b8bb7ea224095d7a44d069e2ffa2fe15301; accessToken=test",
    "Host": "localhost:3000",
    "Pragma": "no-cache",
    "sec-ch-ua":
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
};
export default function LookDiary() {
    type responseData = {
        body: string;
        date: string;
        id: number;
        title: string;
        user_id: number;
    };
    type diaryType = {
        author: string;
        title: string;
        date: string;
        diaryText: string;
    };
    const testDatas = [
        {
            author: "John",
            title: "title",
            date: "2014-01-01",
            diaryText: "this is a test description",
        },
        {
            author: "Ben",
            title: "title",
            date: "2016-03-01",
            diaryText: "this is a test description",
        },
        {
            author: "Mikel",
            title: "title",
            date: "2014-01-09",
            diaryText:
                "this is a test descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
        },
    ];
    const cookies = parseCookies();
    const url = "https://0847-126-213-101-95.jp.ngrok.io";
    const [othersDiaries, setOthersDiary] = useState<diaryType[]>();
    const getOthersDiaries = () => {
        axios
            .get(url + "/diary/2", {
                headers: requestHeader,
            })
            .then((res: AxiosResponse<responseData[]>) => {
                const { data, status } = res;
                console.log(res.data);
                // setOthersDiary(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getOthersDiaries();
    }, []);
    return (
        <div className=" font-fancy">
            <Header></Header>
            <div className="flex flex-col min-h-screen">
                <div className="m-8 mt-24 flex-grow">
                    {/* {othersDiaries.map((testData, index) => (
                        <div key={index}>
                            <Diary
                                author={testData.author}
                                title={testData.title}
                                date={testData.date}
                                diaryText={testData.diaryText}
                            ></Diary>
                        </div>
                    ))} */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
