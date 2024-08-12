import React from 'react';
import { Card } from '../ui/card';
import { CheckCircle, DollarSign, Star } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="mx-auto px-8 py-10 md:p-20 xl:p-40 w-full">
            <div className="w-full flex justify-center items-center flex-col">
                <h1 className="text-5xl font-bold text-center mb-12">Pricing</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center mt-10 space-y-6 lg:space-y-0 lg:space-x-6">
                    {/* Free Plan */}
                    <Card className="border-4 border-black bg-white p-8 w-full lg:w-1/3 text-center hover:bg-gray-50 transition-all shadow-lg">
                        <div className="flex justify-center items-center space-x-2">
                            <DollarSign className="w-6 h-6 text-green-500" />
                            <h2 className="text-3xl font-bold">Free</h2>
                        </div>
                        <p className="text-lg mt-4">Perfect for individuals looking to practice basic interview questions.</p>
                        <div className="mt-6 space-y-2">
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Basic AI-generated questions
                            </p>
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Limited to 5 questions per session
                            </p>
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Basic feedback
                            </p>
                        </div>
                        <p className="text-4xl font-bold mt-8">$0</p>
                    </Card>

                    {/* Standard Plan */}
                    <Card className="border-4 border-black bg-white p-8 w-full lg:w-1/3 text-center hover:bg-gray-50 transition-all shadow-lg">
                        <div className="flex justify-center items-center space-x-2">
                            <DollarSign className="w-6 h-6 text-blue-500" />
                            <h2 className="text-3xl font-bold">Standard</h2>
                        </div>
                        <p className="text-lg mt-4">Ideal for those who want more extensive practice and advanced features.</p>
                        <div className="mt-6 space-y-2">
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" /> Unlimited AI-generated questions
                            </p>
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" /> Advanced feedback with tips
                            </p>
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" /> Access to industry-specific questions
                            </p>
                        </div>
                        <p className="text-4xl font-bold mt-8">$10/month</p>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="border-4 border-black bg-white p-8 w-full lg:w-1/3 text-center hover:bg-gray-50 transition-all shadow-lg">
                        <div className="flex justify-center items-center space-x-2">
                            <Star className="w-6 h-6 text-yellow-500" />
                            <h2 className="text-3xl font-bold">Premium</h2>
                        </div>
                        <p className="text-lg mt-4">For professionals seeking in-depth practice and personalized coaching.</p>
                        <div className="mt-6 space-y-2">
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" /> All Standard features
                            </p>
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" /> Personalized feedback and coaching
                            </p>
                            <p className="flex items-center justify-center text-md">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" /> Mock interviews with AI coaches
                            </p>
                        </div>
                        <p className="text-4xl font-bold mt-8">$20/month</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
