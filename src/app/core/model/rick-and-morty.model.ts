export interface RickyAndMorty {
  id: string
  name: string
  status: string
  type: string
  gender: string
  image: string
  url: string
  created: string
  origin: locationAndOrigin
  location: locationAndOrigin
  episode: []
  species: string
}

export interface Result {
  results: RickyAndMorty[]
  info: info
}

export interface info {
  count: number
  pages: number
  next: string
  prev: string | null
}

export interface locationAndOrigin {
  name: string
  url: string
}
