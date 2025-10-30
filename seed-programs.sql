-- Seed básico de programas para popular o banco
-- Usar: Get-Content seed-programs.sql | docker exec -i workout-postgres psql -U musclelevels -d musclelevels

-- Inserir 3 programas básicos com TODOS os campos obrigatórios
INSERT INTO programs (
    id, 
    slug, "slugEn", "slugEs", "slugPt", "slugRu", "slugZhCn",
    title, "titleEn", "titleEs", "titlePt", "titleRu", "titleZhCn",
    description, "descriptionEn", "descriptionEs", "descriptionPt", "descriptionRu", "descriptionZhCn",
    category, image, level, type,
    "durationWeeks", "sessionsPerWeek", "sessionDurationMin",
    "isPremium", "isActive", visibility,
    "createdAt", "updatedAt"
) VALUES 
-- Programa 1: Beginner Full Body
(
    gen_random_uuid(),
    'beginner-full-body-en', 'beginner-full-body-en', 'cuerpo-completo-principiantes', 'corpo-inteiro-iniciante', 'polnoe-telo-novichok', 'chu-xue-zhe-quan-shen',
    'Beginner Full Body', 'Beginner Full Body', 'Cuerpo Completo Principiantes', 'Corpo Inteiro Iniciante', 'Полное тело для начинающих', '初学者全身',
    'A complete full body program for beginners', 'A complete full body program for beginners', 'Un programa completo de cuerpo entero para principiantes', 'Um programa completo de corpo inteiro para iniciantes', 'Полная программа для тела для начинающих', '初学者的完整全身训练计划',
    'beginner', '/images/default-workout.jpg', 'BEGINNER', 'STRENGTH',
    4, 3, 45,
    false, true, 'PUBLISHED',
    NOW(), NOW()
),
-- Programa 2: Push Pull Legs
(
    gen_random_uuid(),
    'push-pull-legs-en', 'push-pull-legs-en', 'empujar-tirar-piernas', 'empurrar-puxar-pernas', 'tolkat-tyanut-nogi', 'tui-la-tui',
    'Push Pull Legs', 'Push Pull Legs', 'Empujar Tirar Piernas', 'Empurrar Puxar Pernas', 'Толкать Тянуть Ноги', '推拉腿',
    'Classic push pull legs split program', 'Classic push pull legs split program', 'Programa clásico de división empujar-tirar-piernas', 'Programa clássico de divisão empurrar-puxar-pernas', 'Классическая программа разделения толкать-тянуть-ноги', '经典的推拉腿分组训练计划',
    'intermediate', '/images/default-workout.jpg', 'INTERMEDIATE', 'BODYWEIGHT',
    8, 6, 60,
    false, true, 'PUBLISHED',
    NOW(), NOW()
),
-- Programa 3: Upper Lower Split
(
    gen_random_uuid(),
    'upper-lower-split-en', 'upper-lower-split-en', 'division-superior-inferior', 'divisao-superior-inferior', 'razdelenie-verkh-niz', 'shang-xia-fen-zu',
    'Upper Lower Split', 'Upper Lower Split', 'División Superior Inferior', 'Divisão Superior Inferior', 'Разделение верх-низ', '上下分组',
    'Upper and lower body split routine', 'Upper and lower body split routine', 'Rutina de división de cuerpo superior e inferior', 'Rotina de divisão de corpo superior e inferior', 'Разделение тренировок верх-низ', '上下身分组训练',
    'intermediate', '/images/default-workout.jpg', 'INTERMEDIATE', 'POWERLIFTING',
    6, 4, 50,
    false, true, 'PUBLISHED',
    NOW(), NOW()
);

-- Verificar inserção
SELECT COUNT(*) as total_programs FROM programs;
SELECT id, slug, "titleEn", level, type FROM programs ORDER BY "createdAt" DESC LIMIT 5;
