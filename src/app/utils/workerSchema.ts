import { z } from "zod";

export const workerSchema = z.object({
    name: z.string().min(2, "الاسم مطلوب ويجب أن يكون أكثر من حرفين"),
    phoneNumber: z
        .string()
        .regex(/^(\+?\d{1,3})?\d{9,12}$/, "رقم الهاتف غير صالح"),

    job: z
        .array(z.string())
        .min(1, "يرجى اختيار مهنة واحدة على الأقل")
        .refine((val) => val.length > 0, {
            message: "يرجى اختيار مهنة واحدة على الأقل",
        }),
});
