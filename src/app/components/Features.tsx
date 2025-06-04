import React from "react";
import { BsShieldCheck } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";

const Features = () => {
    const features = [
        {
            icon: (
                <BsShieldCheck className="text-[#247BA0] text-[45px] md:text-[90px]" />
            ),
            text: "امان ومصداقية في كل خطوة",
        },

        {
            icon: (
                <BiMessageRounded className="text-[#247BA0] text-[45px] md:text-[90px]" />
            ),
            text: "تواصل مباشر بين أصحاب العمل والعمال",
        },
        {
            icon: (
                <FiShare2 className="text-[#247BA0] text-[45px] md:text-[90px]" />
            ),
            text: "خطوات سريعة ويكون عرض شغلك التالي بين يديك او العامل الذي تبحث عنه امامك",
        },
        {
            icon: (
                <LuUsers className="text-[#247BA0] text-[45px] md:text-[90px]" />
            ),
            text: "تطبيق تواصل بين العمال وأصحاب المهن ومن يبحث عن عمال او أصحاب مهن",
        },
    ];

    return (
        <div className="text-center py-6 md:py-18 px-4 max-w-[1440px] mx-auto">
            <h2 className="font-bold text-[24px] md:text-[42px] text-[#247BA0] font-inter">
                ليه تختار ورشة بالذات ؟
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12  bg-[#FBFBFB] rounded-2xl">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-6 md:p-8 flex flex-col items-center"
                    >
                        {feature.icon}
                        <p className="font-normal text-[16px] md:text-[30px] text-[#247BA0] font-inter mt-8 md:mt-12">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
