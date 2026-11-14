// "346 years old", "about 550 years old", "at least 986 years old"
export function ageText(built?: number, note?: string): string {
  if (!built) return '';
  let n = new Date().getFullYear() - built;
  if (note && note.includes('about')) n = Math.round(n / 10) * 10;
  return `${note ? note + ' ' : ''}${n.toLocaleString('en-GB')} years old`;
}
