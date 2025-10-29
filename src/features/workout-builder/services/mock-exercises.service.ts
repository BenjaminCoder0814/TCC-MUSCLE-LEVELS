// Mock service para exercícios - Gerado automaticamente do CSV
export interface MockExercise {
  id: string;
  name: string;
  nameEn: string;
  description?: string;
  descriptionEn?: string;
  fullVideoUrl?: string;
  fullVideoImageUrl?: string;
  introduction?: string;
  introductionEn?: string;
  attributes: {
    attributeName: {
      name: string;
    };
    attributeValue: {
      value: string;
    };
  }[];
}

export const mockExercises: MockExercise[] = [
  {
    id: "157",
    name: "Fentes arrières à la barre",
    nameEn: "Barbell Alternating Reverse Lunges",
    description: "<p>Tenez-vous droit en tenant une barre placée sur l'arrière de vos épaules.</p><p>Faites un pas en arrière de 2 à 3 pieds avec un pied et abaissez votre corps au sol.</p><p>Votre genou arrière doit presque toucher le sol et votre genou avant doit être à un angle de 90 degrés.</p><p>Poussez vers le haut et revenez à la position de départ.</p><p>Répétez avec l'autre jambe.</p><p>Répétez le mouvement pour le nombre recommandé de répétitions, puis effectuez avec l'autre jambe.</p>",
    descriptionEn: "<p>Stand upright holding a barbell placed across the back of your shoulders.</p><p>Step back 2-3 feet with one foot and lower your body to the ground.</p><p>Your back knee should almost touch the ground and your front knee should be at a 90-degree angle.</p><p>Push up to return to the starting position.</p><p>Repeat with the other leg.</p><p>Repeat the movement for the recommended number of repetitions, then switch to the other leg.</p>",
    fullVideoUrl: "https://www.youtube.com/embed/NmfQzqGktgs?autoplay=1",
    fullVideoImageUrl: "https://img.youtube.com/vi/NmfQzqGktgs/hqdefault.jpg",
    introduction: "<p>Les <strong>fentes arrières à la barre</strong> sont un exercice efficace pour cibler les <strong>muscles des jambes</strong> et les <strong>fessiers</strong>. Idéal pour les sportifs intermédiaires à avancés, cet exercice aide à améliorer l'<em>équilibre</em> et la <em>stabilité</em> tout en augmentant la <strong>force des jambes</strong>.</p>",
    introductionEn: "<p>The <strong>barbell alternating reverse lunges</strong> are an effective exercise to target the <strong>leg muscles</strong> and <strong>glutes</strong>. Ideal for intermediate to advanced athletes, this exercise helps improve <em>balance</em> and <em>stability</em> while increasing <strong>leg strength</strong>.</p>",
    attributes: [
      { attributeName: { name: "STRENGTH" }, attributeValue: { value: "" } },
      { attributeName: { name: "QUADRICEPS" }, attributeValue: { value: "" } },
      { attributeName: { name: "GLUTES" }, attributeValue: { value: "" } },
      { attributeName: { name: "HAMSTRINGS" }, attributeValue: { value: "" } },
      { attributeName: { name: "BARBELL" }, attributeValue: { value: "" } },
      { attributeName: { name: "BAR" }, attributeValue: { value: "" } },
      { attributeName: { name: "COMPOUND" }, attributeValue: { value: "" } },
    ]
  },
  {
    id: "163",
    name: "Tirage horizontal (front) corde à la poulie haute",
    nameEn: "Facepulls",
    description: "<p>Fixez une corde à la machine à câble à un réglage bas.</p><p>Tenez-vous face à la machine et tenez la corde avec une prise en pronation.</p><p>Reculez pour créer une tension dans le câble, les pieds écartés à la largeur des épaules.</p><p>Gardez le dos droit et penchez-vous légèrement en avant, en fléchissant légèrement les genoux.</p><p>Tirez la corde vers votre poitrine, en contractant vos omoplates ensemble.</p><p>Faites une pause à la fin du mouvement, puis relâchez lentement et étendez vos bras jusqu'à la position de départ.</p><p>Répétez le nombre souhaité de répétitions.</p>",
    descriptionEn: "<p>Attach a rope to a low pulley cable machine.</p><p>Stand facing the machine and hold the rope with an overhand grip.</p><p>Step back to create tension in the cable, with feet shoulder-width apart.</p><p>Keep your back straight and lean slightly forward, bending your knees slightly.</p><p>Pull the rope towards your chest, squeezing your shoulder blades together.</p><p>Pause at the end of the movement, then slowly release and extend your arms back to the starting position.</p><p>Repeat for the desired number of repetitions.</p>",
    fullVideoUrl: "https://www.youtube.com/embed/3ZViIERC1QQ?autoplay=1",
    fullVideoImageUrl: "https://img.youtube.com/vi/3ZViIERC1QQ/hqdefault.jpg",
    introduction: "<p>Le <strong>Tirage horizontal (front) corde à la poulie haute</strong>, ou <em>Facepull</em>, est un excellent <em>exercice d'isolement</em> pour renforcer les<strong> muscles de la partie postérieure des épaules</strong> et du <strong>haut du dos</strong>. Particulièrement prisé pour son efficacité à prévenir et combattre les déséquilibres posturaux, il est adapté tant aux débutants qu'aux pratiquants confirmés.</p>",
    introductionEn: "<p>The <strong>Facepull</strong> or <em>Face Pull</em> is an excellent <em>isolation exercise</em> for strengthening the <strong>posterior shoulder muscles</strong> and the <strong>upper back</strong>. Highly valued for its effectiveness in preventing and combating postural imbalances, it is suitable for both beginners and advanced trainees.</p>",
    attributes: [
      { attributeName: { name: "STRENGTH" }, attributeValue: { value: "" } },
      { attributeName: { name: "SHOULDERS" }, attributeValue: { value: "" } },
      { attributeName: { name: "FOREARMS" }, attributeValue: { value: "" } },
      { attributeName: { name: "CABLE" }, attributeValue: { value: "" } },
      { attributeName: { name: "ROPE" }, attributeValue: { value: "" } },
      { attributeName: { name: "ISOLATION" }, attributeValue: { value: "" } },
    ]
  },
  {
    id: "164",
    name: "Sauts altérnés aux côtés du banc",
    nameEn: "Bench Hops",
    description: "<p>Commencez avec une box ou un banc devant vous. Tenez-vous debout, les pieds écartés de la largeur des épaules. ce sera votre position de départ.</p><p> Effectuez un court squat en préparation du saut</p><p> Sautez par-dessus le banc, atterrissez avec les genoux pliés, en absorbant l'impact à travers les jambes.</p>",
    descriptionEn: "<p>Start with a box or bench in front of you. Stand with feet shoulder-width apart. This will be your starting position.</p><p> Perform a short squat in preparation for the jump.</p><p> Jump over the bench, landing with your knees bent, absorbing the impact through your legs.</p>",
    fullVideoUrl: "https://www.youtube.com/embed/R3TCOHRwCl8?autoplay=1",
    fullVideoImageUrl: "https://img.youtube.com/vi/R3TCOHRwCl8/hqdefault.jpg",
    introduction: "<p>Les <strong>sauts altérnés aux côtés du banc</strong> sont un excellent moyen d'<em>améliorer la puissance explosive</em> et l'<em>agilité</em>. En sautant de manière répétitive d'un côté à l'autre du banc, vous ferez travailler vos <strong>quadriceps, ischio-jambiers et mollets</strong>. Ce mouvement intense est particulièrement bénéfique pour les athlètes et ceux cherchant à améliorer leur condition physique générale.</p>",
    introductionEn: "<p><strong>Bench hops</strong> are an excellent way to <em>improve explosive power</em> and <em>agility</em>. By repeatedly hopping from side to side over a bench, you'll work your <strong>quads, hamstrings, and calves</strong>. This intense movement is especially beneficial for athletes and those looking to boost their overall fitness.</p>",
    attributes: [
      { attributeName: { name: "PLYOMETRICS" }, attributeValue: { value: "" } },
      { attributeName: { name: "CROSSFIT" }, attributeValue: { value: "" } },
      { attributeName: { name: "CARDIO" }, attributeValue: { value: "" } },
      { attributeName: { name: "FULL_BODY" }, attributeValue: { value: "" } },
      { attributeName: { name: "BENCH" }, attributeValue: { value: "" } },
      { attributeName: { name: "COMPOUND" }, attributeValue: { value: "" } },
    ]
  }
];

export const getMockExercises = (equipment?: string[], muscles?: string[], limit?: number) => {
  let filtered = mockExercises;
  
  if (equipment && equipment.length > 0) {
    filtered = filtered.filter(ex => {
      const exEquipment = ex.attributes.find(a => a.attributeName.name === 'EQUIPMENT')?.attributeValue.value;
      return equipment.includes(exEquipment || '');
    });
  }
  
  if (muscles && muscles.length > 0) {
    filtered = filtered.filter(ex => {
      const primaryMuscle = ex.attributes.find(a => a.attributeName.name === 'PRIMARY_MUSCLE')?.attributeValue.value;
      return muscles.includes(primaryMuscle || '');
    });
  }
  
  if (limit) {
    filtered = filtered.slice(0, limit);
  }
  
  return filtered.map(ex => ({
    ...ex,
    fullVideoImageUrl: ex.fullVideoImageUrl || null,
  }));
};
