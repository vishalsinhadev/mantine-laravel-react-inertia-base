import { motion } from "framer-motion";

export function ContactUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Contact Us
                            </h2>
                            <p className="text-xl text-indigo-100 mb-6">
                                Contact Us Page
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
