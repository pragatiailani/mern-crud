import React from "react";

const Register = () => {
    return (
        <>
            <div className="container p-5 mt-5 border rounded">
                <form>
                    <label htmlFor="" className="form-label">
                        Name
                    </label>
                    <input type="text" name="" id="" className="form-control" />
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
                        Contact Number
                    </label>
                    <input
                        type="number"
                        // type="text"
                        // oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
                        // type="tel"
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        // inputMode="numeric"
                        name=""
                        id=""
                        className="form-control"
                    />
                    <label htmlFor="" className="form-label">
                        Profession
                    </label>
                    <input type="text" name="" id="" className="form-control" />
                    <label htmlFor="" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name=""
                        id=""
                        className="form-control"
                    />
                    <label htmlFor="" className="form-label">
                        Confirm Password
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
                            value="Register"
                            className="mt-5 px-5 btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
