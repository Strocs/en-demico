import type { Places } from "@customTypes/types";
import { ARTISTS } from "./ARTISTS";
import { GuayacanIcon } from "@components/icons/places/GuayacanIcon";
import { CulebronIcon } from "@components/icons/places/CulebronIcon";
import { ChangoIcon } from "@components/icons/places/ChangoIcon";
import { HumboldtIcon } from "@components/icons/places/HumboldtIcon";
import { MistralIcon } from "@components/icons/places/MistralIcon";
import { ChinchillaIcon } from "@components/icons/places/ChinchillaIcon";
import { DiaguitaIcon } from "@components/icons/places/DiaguitaIcon";
import { EstrellasIcon } from "@components/icons/places/EstrellasIcon";
import { CaprinoIcon } from "@components/icons/places/CaprinoIcon";
import { FrayJorgeIcon } from "@components/icons/places/FrayJorgeIcon";
import { LoroTricahueIcon } from "@components/icons/places/LoroTricahueIcon";
import { ValleEncantoIcon } from "@components/icons/places/ValleEncantoIcon";

export const PLACES: Places = {
  guayacan: {
    name: 'Iglesia de Guayacán',
    place: 'Coquimbo',
    description: 'El proceso de esta ilustración me hizo sentir como si estuviese armando un enorme puzzle. Al principio tenía una imagen clara en mi cabeza, que luego traspase en 2 bocetos, aun así, me faltaban ordenar ciertos elementos, lo que me obligó a investigar y visitar aquella zona. Una vez estudiadas las formas más importantes según mi visión, armé aquel espacio de tal manera que las estructuras se acompañaran y equilibraran en el dibujo, tomando elementos de distintas épocas para restaurar y dejar en evidencia las condiciones del lugar simultáneamente. Me gustaría agregar dos detalles, el primero es que traté de utilizar colores provenientes de la tierra y de diversos minerales para conectarme con la historia de la iglesia y su entorno. El segundo, es que utilicé como motor una sensación de soledad que me entregó las visitas realizadas tanto en mi infancia como en el presente, algo frío, pero con mucha vida en el interior.',
    icon: GuayacanIcon,
    color: '#10597d',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/guayacan.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.evincentv,
  },
  culebron: {
    name: 'Parque Humedal El Culebrón',
    place: 'Coquimbo',
    description: 'En esta ilustración me centré mucho en las formas caóticas y armónicas que entregaba la naturaleza del lugar, separando por secciones aquello que correspondía a la vegetación, el estero, agua, montañas y cielo, pero también la presencia urbana, que de alguna forma cierra y aísla al humedal. Las aves jugaron un papel fundamental ya que son fieles compañeras de este ecosistema y aunque me habría gustado agregar una mayor variedad no pude evitar sentir que la mayor parte del protagonismo se lo llevaban las gaviotas, aun así, me tomé la libertad de dibujar como elemento principal a la Garza, transmitiendo el anhelo de acercarse lo más posible a esta mística ave. Finalmente utilicé al cielo para realizar una doble referencia entre el mar que de alguna forma siempre se hace presente (brisa, sonido de las olas, y el mismo paisaje) y las aves, ya que entre las líneas de las nubes insinué tanto el vuelo de estas como las ondas del océano.',
    icon: CulebronIcon,
    color: '#4a6242',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/culebron-como-deberia-verse.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.evincentv,
  },
  chango: {
    name: 'Pueblo Originario Chango',
    place: 'Litoral de Coquimbo',
    description: 'Esta ilustración requirió investigar sobre el Pueblo Chango, su historia, tradiciones y cultura. Para ello, busqué información e imágenes y definí los elementos que me parecieron más icónicos de este pueblo. En primer plano los mariscos de los cuales obtenían una parte de su alimento y conchas para diversos usos, en segundo plano una madre e hija trabajando en las flechas de piedra e indumentaria con algas respectivamente. Detrás de ellas se encuentra la habitación con armazón de costillas de ballenas y cubierta con cuero de lobo marino. En la parte baja se ubica la embarcación del mismo material, que formaba parte fundamental de sus labores de pesca. De fondo se puede apreciar el mar, todo ambientado con una luz cálida de amanecer.',
    icon: ChangoIcon,
    color: '#10597d',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/chango-completo.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.catana,
  },
  humboldt: {
    name: 'Reserva Nacional Pingüino de Humboldt',
    place: 'La Serena',
    description: 'Para esta ilustración busqué imágenes del paisaje del lugar, donde encontré que la fauna convive en amplios sectores rocosos. Por lo anterior, situé a ambos costados las rocas y en el centro parte del horizonte marítimo. Luego escogí los animales que mejor se adaptaban a este paisaje; Lobos marinos, Pájaros Piqueros, Chungungo y en primer plano los protagonistas que sería un pingüino de Humboldt junto a sus crías. A la lejanía en el mar, se puede ver los delfines nadando y sobrevolando los pájaros Lile. Finalmente definí la ambientación con la iluminación cálida del atardecer.',
    icon: HumboldtIcon,
    color: '#1caab8',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/humboldt-completo.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.catana,
  },
  gabriela: {
    name: 'Gabriela Mistral',
    place: 'Vicuña, Coquimbo',
    description: 'En la ilustración de Gabriela Mistral busqué plasmar el cómo ella siempre estuvo presente y buscaba ayudar a la gente de su tierra, en especial a las infancias que vivían ahí. En algunos relatos que leí, varios adultos recordaban cómo cuando eran niños y niñas recibieron zapatos regalados por Gabriela Mistral,  algo que en estos tiempos podría parecer muy menor pero que en ese entonces significó para varios y varias tener su primer par de zapatos en la vida. \n También tomé de referencia para la ilustración la apertura de escuelas agrícolas en el Valle del Elqui que fueron impulsadas por Gabriela Mistral.',
    icon: MistralIcon,
    color: '#1f2122',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/Gabriela-Mistral.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.ninopan,
  },
  chinchilla: {
    name: 'Hábitat de la Chinchilla',
    place: 'Valle del Elqui, Coquimbo',
    description: 'Para la ilustración sobre las Chinchillas, aparte de leer sobre sus características y modo de vida, vi varias fotos sobre ellas y su entorno para hacerme una idea de cómo interactuaban con él y plasmar eso en una ilustración. En cuanto al estilo y la composición de la ilustración me inspiré mucho en los dibujos de animales que traían los álbumes Artecrom, ya que estos me acompañaron durante toda mi infancia y siempre me fascinaron las hermosas y sobretodo coloridas ilustraciones que traía.',
    icon: ChinchillaIcon,
    color: '#757675',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/chinchillas-final.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.ninopan,
  },
  diaguita: {
    name: 'Pueblo Originario Diaguita',
    place: 'Valle del Elqui, Coquimbo',
    description: 'Quise representar la cultura diaguita a 3 escalas diferentes, comienza en primer plano con lo que más conocemos de la cultura diaguita que es su alfarería, el elemento que conecta con el presente. Luego una familia alfarera en un día normal, junto a una representación de la arquitectura de la época. Y finalmente el pueblo con su contexto geográfico.',
    icon: DiaguitaIcon,
    color: '#ad4a20',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/pueblo-diaguita-completo.jpg',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.psapiains,
  },

  observatorio: {
    name: 'Observatorio Natural de Estrellas',
    place: 'Valle del Elqui, Coquimbo',
    description: 'Comenzó con la idea de conectar con mi otra ilustración en un contexto moderno, se mantienen vestigios de lo que hubo antes en nuestros valles y la misma geografía pero en tiempos modernos, presentando lo moderno como es el observatorio. La familia observando las estrellas es un detalle personal, nos representa a mi, mi hermano pequeño y mi difunto padre, él era un gran aficionado a la astronomía, mirar las estrellas es algo que hacíamos muy seguido.',
    icon: EstrellasIcon,
    color: '#10597d',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/Observatorio-natural-de-estrellas.jpg',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.psapiains,
  },
  caprina: {
    name: 'Trashumancia Caprina',
    place: 'Monte Patria, Ovalle',
    description: 'Los crianceros y las crianceras realizan la trashumancia caprina o también conocidas como veranadas, cada año en busca de nuevos pastizales. Pude detectar 4 hitos importantes dentro de todo el proceso. En primer lugar, la preparación, donde las familias deciden quienes participan, se preparan las provisiones y se decide la ruta a seguir. Luego, el comienzo del viaje, en el que los crianceros salen de su hogar montados en caballos junto al rebaño de cabras y los perros que las guían, sumado a integrantes de sus familias a pie que los acompañan hasta cierto tramo de la ruta. Después, el ascenso, etapa en la que se amarran los caballos y a los burros con provisiones para subir las empinadas laderas del camino. Finalmente, la llegada a la cordillera, donde se separan los cabritos jóvenes de las cabras adultas, se ordeñan para la preparación del queso y se llevan a pastar.',
    icon: CaprinoIcon,
    color: '#b77842',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/trashumancia.jpeg',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.blanquis,
  },
  bosque: {
    name: 'Bosque Fray Jorge ',
    place: 'Ovalle',
    description: 'El Parque Fray Jorge, existe gracias al fenómeno natural de la camanchaca, la que proviene desde la costa y se condensa en las hojas de los árboles para ser la principal fuente de agua. Esta sustenta y da vida a la flora, la fauna y los distintos ecosistemas que conviven en esta reserva natural. Quise retratar los 3 principales ecosistemas semidesierto, bosque hidrófilo y zona costera, junto a la camanchaca, destacando los cambios de formas y colores, que se pueden apreciar en todo el recorrido del parque.',
    icon: FrayJorgeIcon,
    color: '#aabb51',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/fray-jorge.jpg',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.blanquis,
  },
  tricahue: {
    name: 'Hábitat del Loro Tricahue',
    place: 'Valle del Limarí, Ovalle',
    description: 'Lo único cierto en esta vida es que mañana volverán a salir de la oscuridad de sus cuevas para regalar a este cielo árido una vez más un instante de color y algarabía. En la mañana se van y en la tarde vuelven como un reloj, yo los vi hacer nacer y morir los días',
    icon: LoroTricahueIcon,
    color: '#6d8b4b',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/tricahues-limarí.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.camilaguaman,
  },
  petroglifos: {
    name: 'Petroglifos Ancestrales',
    place: 'Valle del Encanto, Ovalle',
    description: 'Mientras observaba un documental del Valle del Encanto me detuvo un momento, una imagen pétrea... Desde que la vi no ha podido salir de mi mente... He preguntado a algunos visitantes frecuentes del Valle del Encanto y me han dicho que nunca la han visto, también consulté libros para poder entender mejor el significado de sus figuras y no hay registro de esta, o al menos no me he podido topar con ellos aún, quizás es un llamado a imaginar, imaginar un ave quizás, una serpiente, ¿serán guanacos o un zorro?, ¿será un gran camarón?. Entonces en momentos del día y la noche ...desde la ignorancia y la ingenuidad intento descifrar qué animales fueron los dichosos en habitar estas tierras hace tanto tiempo atrás y ser la inspiración de aquellos que compartimos esta extraña afición por la fauna, la naturaleza y esas cosas',
    icon: ValleEncantoIcon,
    color: '#57331d',
    latitude: 1,
    longitude: 1,
    image: '/src/assets/petroglifos-VDE-limarí.png',
    video_id: 'Gw0mzZD_cAo',
    illustrator: ARTISTS.camilaguaman,
  },
}













