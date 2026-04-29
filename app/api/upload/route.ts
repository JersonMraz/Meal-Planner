import cloudinary from "@/app/lib/cloudinary";
import { prisma } from "@/app/lib/db/prisma";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const mealId = formData.get("mealId") as string;

        if (!file || !mealId) {
            return Response.json({ error: "Missing file or mealId" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult: any = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({ folder: "meal-planner" }, (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                })
                .end(buffer);
        });

        const updatedMeal = await prisma.meal.update({
            where: { id: parseInt(mealId) },
            data: {
                image_url: uploadResult.secure_url,
            },
        });

        return Response.json({
            success: true,
            image_url: uploadResult.secure_url,
            meal: updatedMeal,
        });

    } catch (error) {
        console.log("Upload error:", error);
        return Response.json({ error: "Upload failed", details: error }, { status: 500 });
    }
}