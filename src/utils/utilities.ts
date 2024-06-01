interface ReadMore {
  image: HTMLImageElement;
  text: HTMLParagraphElement;
  btn: HTMLButtonElement;
  video: HTMLVideoElement;
}
interface ReadLess extends ReadMore {
  minHeight: string;
}


function readMore({ image, text, btn, video }: ReadMore): void {
  const imageRect = image.getBoundingClientRect();
  const maxHeight = text.firstElementChild?.getBoundingClientRect().height;

  if (maxHeight !== undefined) {
    const setMargin = `-${imageRect.height + imageRect.y}px`

    btn.setAttribute("data-isActive", "true");

    window.requestAnimationFrame(() => {
      image.style.marginTop = setMargin;
      video.style.marginBottom = setMargin;
      text.classList.remove("line-clamp-3");
      text.style.maxHeight = `${maxHeight}px`;
    });

    btn.innerText = "Volver atrás";
  }
}

function readLess({ image, text, btn, video, minHeight }: ReadLess): void {
  btn.removeAttribute("data-isActive");

  window.requestAnimationFrame(() => {
    image.style.marginTop = '0px';
    video.style.marginBottom = '0px';
    text.style.maxHeight = minHeight;
    setTimeout(() => {
      text.classList.add("line-clamp-3");
    }, 300);
  });

  btn.innerText = "Continuar leyendo";
}

export { readMore, readLess };