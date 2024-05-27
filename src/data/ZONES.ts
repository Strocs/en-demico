import type { Zones } from "@customTypes/types";
import { PLACES } from "./PLACES";

export const ZONES: Zones = [
  {
    zone_id: 'elqui',
    zone: 'Provincia del Elqui',
    places: [PLACES.guayacan, PLACES.culebron, PLACES.chango, PLACES.humboldt, PLACES.gabriela, PLACES.chinchilla, PLACES.diaguita, PLACES.diaguita, PLACES.observatorio]
  },
  {
    zone_id: 'limari',
    zone: 'Provincia del Limarí',
    places: [PLACES.caprina, PLACES.bosque, PLACES.tricahue, PLACES.petroglifos]
  },
]