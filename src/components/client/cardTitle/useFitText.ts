const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight } : HTMLElement) => (scrollWidth > clientWidth) || (scrollHeight > clientHeight)

type Hook = (
    element: HTMLElement,
    parent: HTMLElement,
    step: number
) => void;

export const useFitText: Hook = (element, parent, step = 1) => {
    let i = 40 
    let overflow = false
    const maxSize = 512
  
    while (!overflow && i < maxSize) {
      element.style.fontSize = `${i}px`
      overflow = isOverflown(parent)
      if (!overflow) i+= step;
    }
  
    element.style.fontSize = `${i - 1}px`
}