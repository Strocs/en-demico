export const placesList: NodeListOf<HTMLElement> = document.querySelectorAll('.places')
export const placesCardsList: NodeListOf<HTMLElement> = document.querySelectorAll(".places-cards")
export const placeImagesList: NodeListOf<HTMLElement> = document.querySelectorAll(".place-image")

export const header = document.querySelector("#header") as HTMLElement || null
export const logo = header.querySelector("#header_logo") as HTMLElement || null
export const infoBtn = header.querySelector('#header_info') as HTMLButtonElement || null