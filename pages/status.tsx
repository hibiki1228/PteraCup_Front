import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export default function Status() {
    const url = "";
    type userStatusType = {
        username: string;
        startDate: string;
        pageNumber: string;
        wordNumber: string;
        exchangeNumber: string;
    };
    // const userStatus = {
    //     username: "test",
    //     startDate: "20XX/XX/XX",
    //     pageNumber: "test",
    //     wordNumber: "test",
    //     exchangeNumber: "test",
    // };
    const [userStatus, setUserStatus] = useState<userStatusType>();
    const cookies = parseCookies();
    const getUserStatus = () => {
        axios
            .post(url + "", {
                accessToken: cookies.accessToken,
            })
            .then((res) => {
                console.log(res.data);
                setUserStatus(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getUserStatus();
    }, []);
    return (
        <div className="bg-slate-800">
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className=" ">
                        <div className="text-2xl text-amber-50 underline decoration-red-300 w-80 mx-auto">
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">ユーザー名</div>
                                <div className="basis-2/5">
                                    {userStatus.username}
                                </div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">利用開始日</div>
                                <div className="basis-2/5">
                                    {userStatus.startDate}
                                </div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">総日記数</div>
                                <div className="basis-2/5">
                                    {userStatus.pageNumber}枚
                                </div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">総文字数</div>
                                <div className="basis-2/5">
                                    {userStatus.wordNumber}文字
                                </div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">交換した回数</div>
                                <div className="basis-2/5">
                                    {userStatus.exchangeNumber}回
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
