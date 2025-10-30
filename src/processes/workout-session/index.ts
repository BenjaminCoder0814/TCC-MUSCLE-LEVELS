// Multi-feature business flow for workout sessions
// Coordinates between exercise selection, timer, and progress tracking

import { useWorkoutBuilder } from '@/features/workout-builder';
import { useExerciseTimer } from '@/features/timer';
import { useProgressTracking } from '@/features/progress-tracking';

export function WorkoutSessionProcess() {
  // Orchestrates multiple features for complete workout experience
  const workoutBuilder = useWorkoutBuilder();
  const timer = useExerciseTimer();
  const progressTracker = useProgressTracking();

  return {
    workoutBuilder,
    timer,
    progressTracker,
  };
}