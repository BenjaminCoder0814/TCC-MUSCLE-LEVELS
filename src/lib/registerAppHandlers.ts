"use client";

/**
 * Register global app handlers to preserve original UI behavior
 * Import and call this in a client component (e.g., Header useEffect)
 */
export function registerAppHandlers() {
  if (typeof window === "undefined") return;

  const setIfMissing = (name: string, fn: Function) => {
    // @ts-ignore
    if (!window[name]) {
      // @ts-ignore
      window[name] = fn;
    }
  };

  // Programs page
  setIfMissing("openPrograms", () => {
    console.log("🏋️ Abrindo programas de treino...");
    window.location.href = "/programs";
  });

  // Training stepper / workout builder
  setIfMissing("openTrainingStepper", (programId?: string) => {
    console.log("🎯 Iniciando training stepper...", { programId });
    const url = programId ? `/workout-builder?program=${programId}` : "/workout-builder";
    window.location.href = url;
  });

  // Statistics page
  setIfMissing("openStats", () => {
    console.log("📊 Abrindo estatísticas...");
    window.location.href = "/statistics";
  });

  // Tools / calculators
  setIfMissing("openTools", () => {
    console.log("🧮 Abrindo calculadoras...");
    window.location.href = "/calculators";
  });

  // Leaderboard
  setIfMissing("openLeaderboard", () => {
    console.log("🏆 Abrindo ranking...");
    window.location.href = "/leaderboard";
  });

  // Exercises page
  setIfMissing("openExercises", (muscleGroup?: string) => {
    console.log("💪 Abrindo exercícios...", { muscleGroup });
    const url = muscleGroup ? `/exercises?muscle=${muscleGroup}` : "/exercises";
    window.location.href = url;
  });

  // Exercise modal
  setIfMissing("showExerciseModal", (exerciseId: string) => {
    console.log("📖 Abrindo modal de exercício...", { exerciseId });
    const modal = document.querySelector('[data-modal="exercise"]');
    if (modal) {
      modal.setAttribute('data-exercise-id', exerciseId);
      modal.classList.remove('hidden');
    } else {
      window.location.href = `/exercises/${exerciseId}`;
    }
  });

  // Close modals
  setIfMissing("closeModal", (modalId?: string) => {
    console.log("❌ Fechando modal...", { modalId });
    if (modalId) {
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      modal?.classList.add('hidden');
    } else {
      document.querySelectorAll('[data-modal]:not(.hidden)')
        .forEach(modal => modal.classList.add('hidden'));
    }
  });

  // Workout timer controls
  // @ts-ignore
  if (!window.workoutTimer) {
    // @ts-ignore
    window.workoutTimer = {
      start: () => {
        console.log("⏱️ Iniciando timer...");
        const timerEl = document.querySelector('[data-component="timer"]');
        timerEl?.dispatchEvent(new CustomEvent('timer:start'));
      },
      pause: () => {
        console.log("⏸️ Pausando timer...");
        const timerEl = document.querySelector('[data-component="timer"]');
        timerEl?.dispatchEvent(new CustomEvent('timer:pause'));
      },
      reset: () => {
        console.log("🔄 Resetando timer...");
        const timerEl = document.querySelector('[data-component="timer"]');
        timerEl?.dispatchEvent(new CustomEvent('timer:reset'));
      }
    };
  }

  // Toggle favorites
  setIfMissing("toggleFavorite", (exerciseId: string) => {
    console.log("❤️ Toggle favorito...", { exerciseId });
    const heartIcon = document.querySelector(`[data-favorite="${exerciseId}"]`);
    if (heartIcon) {
      heartIcon.classList.toggle('text-red-500');
      heartIcon.classList.toggle('text-gray-400');
    }
  });

  console.log("[registerAppHandlers] Global handlers registered successfully");
}

// TypeScript types for global handlers
declare global {
  interface Window {
    openPrograms: () => void;
    openTrainingStepper: (programId?: string) => void;
    openStats: () => void;
    openTools: () => void;
    openLeaderboard: () => void;
    openExercises: (muscleGroup?: string) => void;
    showExerciseModal: (exerciseId: string) => void;
    closeModal: (modalId?: string) => void;
    toggleFavorite: (exerciseId: string) => void;
    workoutTimer: {
      start: () => void;
      pause: () => void;
      reset: () => void;
    };
  }
}
