import { z } from "zod";

export const employerSchema = z.object({
    name: z.string().min(2, "الاسم مطلوب ويجب أن يكون أكثر من حرفين"),
    phoneNumber: z
        .string()
        .regex(/^(\+?\d{1,3})?\d{9,12}$/, "رقم الهاتف غير صالح"),
    location: z.string().min(2, "الموقع مطلوب"),
});
