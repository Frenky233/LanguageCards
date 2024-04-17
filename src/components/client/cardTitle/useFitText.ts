type Hook = (
    element: HTMLElement,
    parent: HTMLElement,
) => void;

export const useFitText: Hook = (element, parent) => {
  const maxHeight = Math.floor(parent.clientWidth / (element.childNodes[0].nodeValue!.length * 1.5));
  const maxWidth = Math.floor(parent.clientWidth / element.childNodes[0].nodeValue!.length);

  const fontSize = maxWidth > parent.clientHeight ? maxHeight : maxWidth;

  element.style.fontSize = `${fontSize}px`;
}