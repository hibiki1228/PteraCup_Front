import Diary from "./components/diary";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function LookDiary() {
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

    return (
        <div className="bg-slate-800 font-fancy">
            <Header></Header>
            <div className="flex flex-col min-h-screen">
                <div className="m-12 mt-16 flex-grow">
                    {testDatas.map((testData, index) => (
                        <div key={index} className="bg-amber-50 rounded-xl">
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
