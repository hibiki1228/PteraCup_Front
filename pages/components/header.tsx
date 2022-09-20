export default function Header() {
    const date = new Date();

    return (
        <div className="border-8 rounded-b-2xl border-red-300 bg-red-300 shadow-2xl shadow-red-400/50 text-cyan-200 font-mono space-y-4">
            <div className="text-3xl text-center font-semibold">
                <div>Random Exchange Diary</div>
            </div>
            <div className="text-xl font-normal text-right">
                <div>
                    Date：
                    {String(date.getFullYear()) +
                        "/" +
                        String(date.getMonth() + 1) +
                        "/" +
                        String(date.getDate())}
                </div>
            </div>
        </div>
    );
}
