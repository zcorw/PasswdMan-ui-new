export function isMobileDevice(): boolean {
  return /Mobile|Android|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
