import React from "react";

const Contact = () => {
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col-4">
                        <div className="container py-4 px-3 border rounded">
                            Phone: 123456789
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="container py-4 px-3 border rounded">
                            Email: gmail@gmail.com
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="container py-4 px-3 border rounded">
                            Address: A'bad, Gujarat.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 w-50 mx-auto border rounded p-4">
                <h2>Get in Touch</h2>
                <form>
                    <div className="row mt-3">
                        <div className="col-4">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Name"
                                className="form-control"
                            />
                        </div>
                        <div className="col-4">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Email"
                                className="form-control"
                            />
                        </div>
                        <div className="col-4">
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Contact"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <textarea
                            class="form-control"
                            id=""
                            rows="3"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary px-5 mt-3"
                    />
                </form>
            </div>
        </>
    );
};

export default Contact;
