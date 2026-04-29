import { PrismaClient } from "@prisma/client";
import meals from "../../meal_dataset_70.json";

import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    for (const meal of meals) {
        const createdMeal = await prisma.meal.create({
            data: {
                name: meal.name,
                category: meal.category,
                image_url: meal.image_url,
                cuisine: meal.cuisine,
                diet_type: meal.diet_type,
                prep_time: meal.prep_time,
                cook_time: meal.cook_time,

                Ingredients: {
                    create: meal.ingredients.map((i: string) => ({
                        name: i,
                    })),
                },

                Instructions: {
                    create: meal.instructions.map((step: string, index: number) => ({
                        step_number: index + 1,
                        description: step,
                    })),
                },

                Nutrition: {
                    create: meal.nutrition,
                },
            },
        });

        // Handle tags
        for (const tagName of meal.tags) {
            let tag = await prisma.tags.findUnique({
                where: { name: tagName },
            });

            if (!tag) {
                tag = await prisma.tags.create({
                    data: { name: tagName },
                });
            }

            await prisma.meal_Tags.create({
                data: {
                    meal_id: createdMeal.id,
                    tag_id: tag.id,
                },
            });
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());