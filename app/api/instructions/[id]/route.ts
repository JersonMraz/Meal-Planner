import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    if (!id) return Response.json({ error: "ID is missing from params" }, { status: 400 });

    const mealId = Number(id);
    if (isNaN(mealId)) return Response.json({ error: "Invalid ID format" }, { status: 400 });

    try {
        const instructions = await prisma.instructions.findMany({
            where: { meal_id: mealId },
            orderBy: { step_number: 'asc' }
        });
        return Response.json({ instructions });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}

// // Update Instruction by Instruction ID
// export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
//     const { id } = await params;

//     if (!id) return Response.json({ error: "ID is missing from params" }, { status: 400 });

//     const instructionId = Number(id);
//     if (isNaN(instructionId)) return Response.json({ error: "Invalid ID format" }, { status: 400 });

//     try {
//         const body = await req.json();
//         const updatedInstruction = await prisma.instructions.update({
//             where: { id: instructionId },
//             data: body
//         });
//         return Response.json({ instruction: updatedInstruction });
//     } catch (err) {
//         console.error("PRISMA ERROR:", err);
//         return Response.json({ error: "Server error" }, { status: 500 });
//     }
// }

// Replace all Instructions for a Meal
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    if (!id) return Response.json({ error: "ID is missing from params" }, { status: 400 });

    const mealId = Number(id);
    if (isNaN(mealId)) return Response.json({ error: "Invalid ID format" }, { status: 400 });

    try {
        const body = await req.json();

        if (!body.instructions || !Array.isArray(body.instructions)) {
            return Response.json({ error: "Expected 'instructions' array in body" }, { status: 400 });
        }

        // 1. Delete all old instructions for this meal
        await prisma.instructions.deleteMany({
            where: { meal_id: mealId }
        });

        // 2. Map the payload to the Prisma format (ignoring any IDs they might have sent)
        const newInstructions = body.instructions.map((inst: any) => ({
            meal_id: mealId,
            step_number: inst.step_number,
            description: inst.description
        }));

        // 3. Insert the new ones
        const created = await prisma.instructions.createMany({
            data: newInstructions
        });

        return Response.json({ success: true, count: created.count });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}