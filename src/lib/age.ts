// "346 years old", "~550 years old", "at least 986 years old", "tower ~580 years old"
export function ageText(built?: number, note?: string, round = 10): string {
  if (!built) return '';
  let n = new Date().getFullYear() - built;
  const rough = !!note && note.includes('~');
  if (rough) n = Math.round(n / round) * round;
  const num = n.toLocaleString('en-GB');
  if (!note) return `${num} years old`;
  if (rough) return `${note}${num} years old`;
  return `${note} ${num} years old`;
}
