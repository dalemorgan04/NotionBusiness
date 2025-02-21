"use client";

import SubmitButtonLight from "../components/buttonLight";
import SectionHeadingBlue from "../components/headings/headingBlue";
import SectionOrange from "../components/headings/headingOrange";

export default function ContactPage() {
    return (
        <>
            <SectionOrange>
                <h3 className="font-serif font-bold text-xl">Getting in touch</h3>
            </SectionOrange>

            <div className="container mx-auto mt-10">
                <SectionHeadingBlue>CONTACT FORM</SectionHeadingBlue>
                {/* Contact Form */}
                <div className=" bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form name="contact-general" method="POST" data-netlify="true" className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <input type="hidden" name="form-name" value="contact-general"/>
                        <div className="">
                            <p>
                                If you think we might be able to help you or have any general queries about our service, send us a short message and we&apos;ll get back in touch with you
                                straight away. <br/>
                            </p>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <label htmlFor="full_name">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>

                                <div className="md:col-span-5">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        placeholder="email@domain.com"
                                    />
                                </div>

                                <div className="md:col-span-5">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="h-[200px] border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>

                                <div className="md:col-span-5 text-right">
                                    <div className="inline-flex items-end">
                                        <SubmitButtonLight buttonText="Submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
