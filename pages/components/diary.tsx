type propType = {
    author: string;
    date: string;
    diaryText: string;
    title: string;
};
export default function Diary(props: propType) {
    return (
        <div className="border m-12 rounded-xl">
            <div className="border-b-2 m-2 flex">
                <span className="w-2/5 m-2">{props.title}</span>
                <span className="w-3/5 m-2 text-right">{props.date}</span>
            </div>
            <div className="m-4">
                <div className="w-full break-all h-48">{props.diaryText}</div>
            </div>
            <div className="text-right m-4">{props.author}</div>
        </div>
    );
}
