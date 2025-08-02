import React, { useState } from "react";
import { FaUser, FaLocationArrow } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employerSchema } from "@/app/utils/employerSchema";
import { z } from "zod";

type FormData = z.infer<typeof employerSchema>;

const EmployerForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(employerSchema),
    });

    const onSubmit = async (
        data: FormData,
        event?: React.BaseSyntheticEvent
    ) => {
        if (event) event.preventDefault();

        setIsLoading(true);
        setMessage(null);

        const apiUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_EMPLOYER;

        if (!apiUrl) {
            setMessage("API URL is not defined.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setMessage("تم إرسال البيانات بنجاح!");
                reset();
            } else {
                setMessage("حدث خطأ أثناء إرسال البيانات.");
            }
        } catch {
            setMessage("حدث خطأ أثناء الاتصال بالخادم.");
        } finally {
            setIsLoading(false);
            setTimeout(() => setMessage(null), 5000);
        }
    };
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-100">
            <div className="hidden md:flex w-1/2 justify-center">
                <img
                    src={"/images/employer.png"}
                    alt="Information"
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                    loading="lazy"
                />
            </div>
            <div className="w-full space-y-4">
                <p className="text-lg text-gray-600 text-right">
                هل تبحث عن عامل ؟ فني ؟ لبيتك او حديقتك او لمساعدتك في أي
                    عمل
                    <br />
                    سجل معنا لنشبكك بالعامل الأقرب والانسب
                </p>
                <form
                    className={"space-y-6 text-right"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={"الإسم"}
                            {...register("name")}
                            className={`w-full px-4 py-3 bg-gray-100 rounded-lg pr-12 pl-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#247BA0] text-right`}
                        />
                        <FaUser
                            className={`absolute  ${
                                errors.name ? "top-3/14" : "top-3/10"
                            } right-4 text-gray-500 pointer-events-none`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1 right-0 w-full">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="tel"
                            placeholder={"رقم الهاتف"}
                            {...register("phoneNumber")}
                            className={`w-full mt-2 px-4 py-3 bg-gray-100 rounded-lg pr-12 pl-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#247BA0] text-right`}
                        />
                        <IoMdPhonePortrait
                            className={`absolute ${
                                errors.phoneNumber ? "top-3/10" : "top-3/7"
                            } right-4 text-gray-500 pointer-events-none`}
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm mt-1 right-0 w-full">
                                {errors.phoneNumber.message}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={"الموقع"}
                            {...register("location")}
                            className={`w-full mt-2 px-4 py-3 bg-gray-100 rounded-lg pr-12 pl-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#247BA0] text-right`}
                        />
                        <FaLocationArrow
                            className={`absolute ${
                                errors.location ? "top-3/10" : "top-3/7"
                            } right-4 text-gray-500 pointer-events-none`}
                        />
                        {errors.location && (
                            <p className="text-red-500 text-sm mt-1 right-0 w-full">
                                {errors.location.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-[#247BA0] hover:bg-[#247BA0] text-white py-2 rounded-lg text-lg cursor-pointer"
                        disabled={isLoading}
                    >
                        {isLoading ? "... جاري الإرسال" : "تسجيل"}
                    </button>
                    {message && (
                        <p
                            className={`text-center mt-4 ${
                                message.includes("خطأ")
                                    ? "text-red-500"
                                    : "text-green-500"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default EmployerForm;
