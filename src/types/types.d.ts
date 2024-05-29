export interface Artist {
  name: string
  real_name: string
  social_media: string
}

export interface Artists {
  [key: string]: Artist
}

export interface Place {
  name: string,
  place: string,
  description: string,
  latitude: number,
  longitude: number,
  color: string,
  image: string,
  icon: () => JSX.Element,
  video_id: string,
  illustrator: Artist,
}

export interface Places {
  [key: string]: Place
}
