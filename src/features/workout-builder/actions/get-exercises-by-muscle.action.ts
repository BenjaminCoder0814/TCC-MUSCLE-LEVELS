"use server";

import { z } from "zod";
import { ExerciseAttributeValueEnum } from "@prisma/client";
import { actionClient } from "@/shared/api/safe-actions";
import { mockExercises } from "../services/mock-exercises.service";

const getExercisesByMuscleSchema = z.object({
  equipment: z.array(z.nativeEnum(ExerciseAttributeValueEnum)),
});

export const getExercisesByMuscleAction = actionClient
  .schema(getExercisesByMuscleSchema)
  .action(async ({ parsedInput }) => {
    const { equipment } = parsedInput;

    console.log("🔍 getExercisesByMuscleAction called with equipment:", equipment);

    // Use mock data
    const muscleGroups = [
      "CHEST",
      "BACK", 
      "SHOULDERS",
      "BICEPS",
      "TRICEPS",
      "QUADRICEPS",
      "HAMSTRINGS",
      "GLUTES",
      "CALVES",
      "ABDOMINALS",
      "FOREARMS",
      "TRAPS",
      "LATS",
    ];

    const exercisesByMuscle = muscleGroups.map((muscle) => {
      const muscleExercises = mockExercises.filter((exercise) => {
        const primaryMuscle = exercise.attributes.find(
          (attr) => attr.attributeName.name === "PRIMARY_MUSCLE"
        )?.attributeValue.value;

        const exerciseEquipment = exercise.attributes.find(
          (attr) => attr.attributeName.name === "EQUIPMENT"
        )?.attributeValue.value;

        const muscleMatch = primaryMuscle === muscle;
        const equipmentMatch = equipment.length === 0 || equipment.includes(exerciseEquipment as any);

        return muscleMatch && equipmentMatch;
      });

      return {
        muscle,
        exercises: muscleExercises,
        count: muscleExercises.length,
      };
    });

    // Filter out muscle groups with no exercises
    const filtered = exercisesByMuscle.filter((group) => group.count > 0);

    console.log("✅ Returning exercises for", filtered.length, "muscle groups");
    return filtered;
  });
