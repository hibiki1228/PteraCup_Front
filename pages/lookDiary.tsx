import Diary from "./components/diary";

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
        <div>
            {testDatas.map((testData, index) => (
                <div>
                    <Diary
                        author={testData.author}
                        title={testData.title}
                        date={testData.date}
                        diaryText={testData.diaryText}
                    ></Diary>
                </div>
            ))}
        </div>
    );
}
