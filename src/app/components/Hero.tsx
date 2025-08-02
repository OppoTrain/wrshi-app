import Link from "next/link";
import React from "react";


const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 py-25">
            <div className="w-full md:w-auto flex justify-center">
                <img
                    src="/images/about-us.png"
                    alt="about us"
                    loading="lazy"
                    className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[784px] lg:h-[784px] object-cover"
                />
           
            </div>

            <div className="w-full md:w-[40%] text-center md:text-right space-y-5 md:space-y-16 mt-8 md:mt-0 md:pl-10">
                <h1 className="font-semibold text-[36px] md:text-[66px] leading-[66px] text-[#000102] font-inter">
                    ...ورشة 
       
                </h1>
                <p className="font-normal text-[16px] sm:text-[20px] md:text-[28px] leading-8 text-[#000102] font-inter">
                    !عنوانك الأول و الأسرع لأقرب عامل <br />
                    <br />
                    سواء كنت باحث عن عمل (عامل) او تحتاج عامل لانجاز شغل معين
                    لبيتك ، لحديقتك ، لورشتك او أي مكان ، تطبيق ورشة وسيلة
                    للعمال ولمن يبحث عنهم للتواصل بسهولة وكفاءة وسرعة
                </p>

                <Link href={"/#register"}>
                    <button className="cursor-pointer text-lg px-5 py-2 md:px-8 md:py-3 bg-white border-3 border-[#247BA0] rounded-2xl text-[#247BA0] hover:bg-[#247BA0] hover:text-white transition w-[155px]">
                        سجل الان
                    </button>
                </Link>

            </div>
        
        </div>
    );
};

export default Hero;
