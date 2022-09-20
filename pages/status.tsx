import { workerData } from "worker_threads";

export default function Status() {
    const user = {
        name: "test",
        date: "20XX/XX/XX",
        page: "test",
        word: "test",
        exchange: "test",
    };

    return (
        <div className="bg-slate-800">
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className=" ">
                        <div className="text-2xl text-amber-50 underline decoration-red-300 w-80 mx-auto">
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">ユーザー名</div>
                                <div className="basis-2/5">{user.name}</div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">利用開始日</div>
                                <div className="basis-2/5">{user.date}</div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">総日記数</div>
                                <div className="basis-2/5">{user.page}枚</div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">総文字数</div>
                                <div className="basis-2/5">{user.word}文字</div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className="basis-3/5">交換した回数</div>
                                <div className="basis-2/5">
                                    {user.exchange}回
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
