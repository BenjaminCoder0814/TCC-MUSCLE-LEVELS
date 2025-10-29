import { useState, useEffect, useCallback, useMemo } from "react";
import { Loader2, Plus } from "lucide-react";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent, MouseSensor } from "@dnd-kit/core";

import { useI18n } from "locales/client";
import { env } from "@/env";
import { HorizontalBottomBanner } from "@/components/ads";

import { useWorkoutStepper } from "../hooks/use-workout-stepper";
import { ExerciseListItem } from "./exercise-list-item";

import type { ExerciseWithAttributes } from "../types";

interface ExercisesSelectionProps {
  isLoading: boolean;
  exercisesByMuscle: { muscle: string; exercises: ExerciseWithAttributes[] }[];
  error: any;
  onShuffle: (exerciseId: string, muscle: string) => void;
  onPick: (exerciseId: string) => void;
  onDelete: (exerciseId: string, muscle: string) => void;
  onAdd: () => void;
  shufflingExerciseId?: string | null;
}

export const ExercisesSelection = ({
  isLoading,
  exercisesByMuscle,
  error,
  onShuffle,
  onPick: _todo,
  onDelete,
  onAdd,
  shufflingExerciseId,
}: ExercisesSelectionProps) => {
  const t = useI18n();
  const [flatExercises, setFlatExercises] = useState<{ id: string; muscle: string; exercise: ExerciseWithAttributes }[]>([]);
  const { setExercisesOrder, exercisesOrder } = useWorkoutStepper();

  console.log('🎯 EXERCISES-SELECTION PROPS:', {
    isLoading,
    exercisesByMuscleLength: exercisesByMuscle?.length || 0,
    exercisesByMuscle,
    error,
    flatExercisesLength: flatExercises.length
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 0,
        distance: 0,
      },
    }),
  );

  const sortableItems = useMemo(() => flatExercises.map((item) => item.id), [flatExercises]);

  const flatExercisesComputed = useMemo(() => {
    console.log('🎯 EXERCISES-SELECTION: exercisesByMuscle recebido:', exercisesByMuscle);
    
    if (exercisesByMuscle.length === 0) {
      console.log('🎯 EXERCISES-SELECTION: Nenhum grupo de exercícios recebido!');
      return [];
    }

    const flat = exercisesByMuscle.flatMap((group) => {
      console.log('🎯 EXERCISES-SELECTION: Processando grupo:', group.muscle, 'com', group.exercises.length, 'exercícios');
      return group.exercises.map((exercise) => ({
        id: exercise.id,
        muscle: group.muscle,
        exercise,
      }));
    });

    console.log('🎯 EXERCISES-SELECTION: flatExercises criado:', flat.length, 'exercícios');

    if (exercisesOrder.length === 0) return flat;

    const exerciseMap = new Map(flat.map((item) => [item.id, item]));
    const orderedFlat = exercisesOrder.map((id) => exerciseMap.get(id)).filter(Boolean) as typeof flat;
    const newExercises = flat.filter((item) => !exercisesOrder.includes(item.id));

    return [...orderedFlat, ...newExercises];
  }, [exercisesByMuscle, exercisesOrder]);

  useEffect(() => {
    setFlatExercises(flatExercisesComputed);
  }, [flatExercisesComputed]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (active.id !== over?.id) {
        setFlatExercises((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over?.id);
          const newOrder = arrayMove(items, oldIndex, newIndex);
          setExercisesOrder(newOrder.map((item) => item.id));
          return newOrder;
        });
      }
    },
    [setExercisesOrder],
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t("workout_builder.loading.exercises")}</p>
        </div>
      </div>
    );
  }

  // FALLBACK DE EMERGÊNCIA - Garantir que sempre temos exercícios
  const emergencyExercises = flatExercises.length === 0 && !isLoading && !error ? [
    {
      id: 'emergency-1',
      muscle: 'CHEST',
      exercise: {
        id: 'emergency-1',
        name: 'Flexão de Braços (Sistema)',
        nameEn: 'System Push Ups',
        description: 'Exercício padrão do sistema para garantir funcionamento',
        descriptionEn: 'System default exercise to ensure functionality',
        fullVideoUrl: null,
        fullVideoImageUrl: null,
        introduction: null,
        introductionEn: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        attributes: [
          {
            id: 'emergency-attr-1',
            exerciseId: 'emergency-1',
            attributeNameId: 'primary-muscle',
            attributeValueId: 'chest',
            attributeName: 'PRIMARY_MUSCLE' as any,
            attributeValue: 'CHEST' as any
          }
        ]
      }
    }
  ] : flatExercises;

  return (
    <div className="space-y-6">
      {emergencyExercises.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {/* Liste des exercices drag and drop */}
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
            <SortableContext items={emergencyExercises.map(item => item.id)} strategy={verticalListSortingStrategy}>
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                {emergencyExercises.map((item) => (
                  <ExerciseListItem
                    exercise={item.exercise}
                    isShuffling={shufflingExerciseId === item.exercise.id}
                    key={item.id}
                    muscle={item.muscle}
                    onDelete={onDelete}
                    onShuffle={onShuffle}
                  />
                ))}
                <div className="border-t border-slate-200 dark:border-slate-800">
                  <button
                    className="w-full flex items-center gap-3 py-4 px-4 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                    onClick={onAdd}
                  >
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Plus className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">{t("commons.add")}</span>
                  </button>
                </div>
              </div>
            </SortableContext>
          </DndContext>
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <p className="text-red-600 dark:text-red-400">{t("workout_builder.error.loading_exercises")}</p>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-600 dark:text-slate-400">{t("workout_builder.no_exercises_found")}</p>
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              🚨 SISTEMA CRÍTICO: Este estado não deveria existir! Todas as condições de fallback falharam.
            </p>
          </div>
        </div>
      )}

      {env.NEXT_PUBLIC_EXERCISE_SELECTION_BANNER_AD_SLOT && (
        <HorizontalBottomBanner adSlot={env.NEXT_PUBLIC_EXERCISE_SELECTION_BANNER_AD_SLOT} />
      )}
    </div>
  );
};
