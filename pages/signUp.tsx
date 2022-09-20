import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
    const router = useRouter();
    type signUpElement = {
        username: string;
        mailAddress: string;
        password: string;
        confirmPassword: string;
    };
    type errorSignUpElement = {
        username: boolean;
        mailAddress: boolean;
        password: boolean;
        confirmPassword: boolean;
    };
    const [formData, setFormData] = useState<signUpElement>({
        username: "",
        mailAddress: "",
        password: "",
        confirmPassword: "",
    });
    const initialErrorState = {
        username: false,
        mailAddress: false,
        password: false,
        confirmPassword: false,
    };
    const [formErrors, setFormErrors] =
        useState<errorSignUpElement>(initialErrorState);
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const signUp = (event) => {
        event.preventDefault();
        let mailAddressPattern =
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
        let passwordPattern =
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;
        console.log(formData);
        const formError = initialErrorState;
        if (!mailAddressPattern.test(formData.mailAddress)) {
            formError.mailAddress = true;
        }
        if (!passwordPattern.test(formData.password)) {
            formError.password = true;
        }
        if (formData.password !== formData.confirmPassword) {
            formError.confirmPassword = true;
        }
        console.log(formErrors);
        console.log(formError === formErrors);
        if (formError === initialErrorState) {
            router.push("/inputDiary");
        }
        setFormErrors(formError);
        console.log(formErrors);
    };
    return (
        <div>
            <div className="border-2 rounded m-4 mt-12">
                <form onSubmit={signUp}>
                    <div className="flex flex-col">
                        <input
                            name="username"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="user"
                        ></input>

                        {formErrors.mailAddress && (
                            <div>無効なメールアドレスです</div>
                        )}
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="example@example.com"
                        ></input>
                        {formErrors.password && (
                            <div>
                                パスワードは半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上100文字以下で作成してください
                            </div>
                        )}
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="password"
                        ></input>
                        {formErrors.confirmPassword && (
                            <div>パスワードが一致しません</div>
                        )}
                        <input
                            name="confirmPassword"
                            type="password"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="password"
                        ></input>
                        <button type="submit"></button>
                    </div>
                    <button type="submit" className="rounded border-2  mx-auto">
                        サインアップ
                    </button>
                </form>
            </div>
        </div>
    );
}
