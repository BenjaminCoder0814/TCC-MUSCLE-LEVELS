export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}