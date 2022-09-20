import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useState } from "react";

const initialErrorState = {
    username: false,
    mailAddress: false,
    password: false,
    confirmPassword: false,
};
export default function SignUpCheck() {
    const router = useRouter();
    const url = "";
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
    type successSignUp = {
        successStatus: boolean;
        errorText: string;
    };
    const [formData, setFormData] = useState<signUpElement>({
        username: "",
        mailAddress: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] =
        useState<errorSignUpElement>(initialErrorState);
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };
    const [errorSignUpForm, setErrorSignUpForm] =
        useState<errorSignUpElement>();
    const handleSignUpError = () => {
        let formError = Object.assign({}, initialErrorState);

        if (successSignUpStatus.errorText == "user is not exist") {
            formError.mailAddress = true;
        }
        if (successSignUpStatus.errorText == "password is incorrect") {
            formError.password = true;
        }
        if (!formError.mailAddress && formError.password) {
        }
        setErrorSignUpForm(formError);
    };
    const [successSignUpStatus, setSuccessSignUp] = useState<successSignUp>();
    const signUp = () => {
        axios
            .post(url + "/login", {
                email: formData.mailAddress,
                password: formData.password,
            })
            .then((res) => {
                console.log(res.data);
                setCookie(null, "accessToken", res.data.cookies);
                setSuccessSignUp({
                    successStatus: true,
                    errorText: "success!",
                });
            })
            .catch((error) => {
                console.log(error);
                setSuccessSignUp({
                    successStatus: false,
                    errorText: error,
                });
                handleSignUpError();
            });
    };
    const signUpCheck = (event) => {
        event.preventDefault();
        console.log(initialErrorState);

        let mailAddressPattern =
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
        let passwordPattern =
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;
        let formError = Object.assign({}, initialErrorState);
        if (formData.username === "") {
            formError.username = true;
        }
        if (!mailAddressPattern.test(formData.mailAddress)) {
            formError.mailAddress = true;
        }
        if (!passwordPattern.test(formData.password)) {
            formError.password = true;
        }
        if (formData.password !== formData.confirmPassword) {
            formError.confirmPassword = true;
        }
        if (
            !formError.confirmPassword &&
            !formError.username &&
            !formError.password &&
            !formError.mailAddress
        ) {
            signUp();
            router.push("/makeDiary");
        }
        setFormErrors(formError);
    };
    return (
        <div>
            <div className="border-2 rounded m-4 mt-12">
                <form onSubmit={signUpCheck}>
                    <div className="flex flex-col">
                        {formErrors.username && (
                            <div className="text-xs text-red-500">
                                ユーザーネームが入力されていません
                            </div>
                        )}
                        <input
                            name="username"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="user"
                        ></input>

                        {formErrors.mailAddress && (
                            <div className="text-xs text-red-500">
                                無効なメールアドレスです
                            </div>
                        )}
                        {errorSignUpForm.mailAddress && (
                            <div className="text-xs text-red-500">
                                使用済みのメールアドレスです
                            </div>
                        )}
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="example@example.com"
                        ></input>
                        {formErrors.password && (
                            <div className="text-xs text-red-500">
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
                            <div className="text-xs text-red-500">
                                パスワードが一致しません
                            </div>
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
