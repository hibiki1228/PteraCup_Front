import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import Diary from "./components/diary";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function LookDiary() {
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
    const url = "";
    const [othersDiaries, setOthersDiary] = useState<diaryType[]>();
    const getOthersDiaries = () => {
        axios
            .post(url + "", {
                accessToken: cookies.accessToken,
            })
            .then((res) => {
                console.log(res.data);
                setOthersDiary(res.data);
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
                    {othersDiaries.map((testData, index) => (
                        <div key={index}>
                            <Diary
                                author={testData.author}
                                title={testData.title}
                                date={testData.date}
                                diaryText={testData.diaryText}
                            ></Diary>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
