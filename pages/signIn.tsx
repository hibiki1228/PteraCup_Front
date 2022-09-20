import { useState } from "react";

export default function SignIn() {
    type loginElement = {
        mailAddress: String;
        password: String;
    };
    const [formData, setFormData] = useState<loginElement>({
        mailAddress: "",
        password: "",
    });
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const signIn = (event) => {
        event.preventDefault();
        console.log(formData);
    };
    return (
        <div>
            <div className="border-2 rounded m-4 mt-12">
                <form onSubmit={signIn}>
                    <div className="flex flex-col">
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="example@example.com"
                        ></input>
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="password"
                        ></input>
                        <button type="submit"></button>
                    </div>
                    <button type="submit" className="rounded border-2  mx-auto">
                        サインイン
                    </button>
                </form>
            </div>
        </div>
    );
}
