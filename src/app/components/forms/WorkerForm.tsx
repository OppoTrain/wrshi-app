import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { workerSchema } from "@/app/utils/workerSchema";
import { z } from "zod";

type FormData = z.infer<typeof workerSchema>;

const WorkerForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(workerSchema),
    });

    const onSubmit = async (
        data: FormData,
        event?: React.BaseSyntheticEvent
    ) => {
        if (event) event.preventDefault();

        setIsLoading(true);
        setMessage(null);

        const apiUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_WORKER;

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
                    src={"/images/worker.png"}
                    alt="Contact Us"
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                    loading="lazy"
                />
            </div>
            <div className="w-full space-y-4">
                <p className={"text-lg text-gray-600 text-right"}>
                  أنت عامل او فني او صاحب مهنة ؟
                    <br />
                    سجل معنا لنشبكك بفرصة الشغل المناسبة والقريبة
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

                    <Controller
                        name="job"
                        control={control}
                        defaultValue={[]}
                        render={({ field }) => {
                            const jobOptions = [
                                "نجار",
                                "حداد",
                                "كهربجي",
                                "طوبرجي",
                                "مبلط",
                                "موسرجي",
                                "ميكانيكي",
                                "لحّام",
                                "مربية",
                                "مزارع",
                                "دهان",
                                "تنجيد",
                                "حدائقي",
                            ];

                            const toggleJob = (value: string) => {
                                const current = field.value || [];
                                if (current.includes(value)) {
                                    field.onChange(
                                        current.filter(
                                            (job: string) => job !== value
                                        )
                                    );
                                } else {
                                    field.onChange([...current, value]);
                                }
                            };

                            return (
                                <div
                                    className="grid grid-cols-2 gap-3 mt-4"
                                    dir="rtl"
                                >
                                    {jobOptions.map((job) => (
                                        <label
                                            key={job}
                                            className="flex items-center space-x-2 space-x-reverse bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition hover:bg-gray-200 text-right"
                                        >
                                            <input
                                                type="checkbox"
                                                value={job}
                                                checked={field.value?.includes(
                                                    job
                                                )}
                                                onChange={() => toggleJob(job)}
                                                className="form-checkbox accent-[#247BA0] focus:ring-0 ml-2"
                                            />
                                            <span className="text-gray-700">
                                                {job}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            );
                        }}
                    />
                    {errors.job && (
                        <p className="text-red-500 text-sm mt-1 right-0 w-full">
                            {errors.job.message}
                        </p>
                    )}

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

export default WorkerForm;
