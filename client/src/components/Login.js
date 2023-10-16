import React from "react";

const Login = () => {
    return (
        <>
            <div className="container p-5 mt-5 border rounded">
                <form>
                    <label htmlFor="" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                    />
                    <label htmlFor="" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name=""
                        id=""
                        className="form-control"
                    />
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input
                            type="submit"
                            value="Login"
                            className="mt-5 px-5 btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
