export function degreeToDirection(degree: number): string {
  const bottomInterval = Math.floor(degree / 22.5 + 0.5);
  const directions: string[] = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  return directions[bottomInterval % 16];
}
