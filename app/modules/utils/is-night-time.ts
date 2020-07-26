export function isNightTime(currentSetting: boolean, value?: string): boolean {
  if (!value) {
    return currentSetting;
  }
  if (value.indexOf('d') > -1) {
    return false;
  }
  return true;
}
