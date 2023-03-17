export const transitionDelay = "0.2s"
export const transitionDuration = "0.3s"
export const primary = "rgba(77,101,198)"
export const alphaPrimary = (alpha: number) => {
  return `${primary.slice(0, primary.length - 1)},${alpha})`
}
export const fontSize = "20px"
export const inputHeight = "2rem"
