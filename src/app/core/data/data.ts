export interface Menu {
  path: string
  text: string
  img: string
  title: string
}

export interface Filter {
  page?: string
  name?: string
  type?: string
  gender?: string
  status?: string
}

export interface GENDER_AND_TYPE {
  name: string
}

export const myCustomMenuItems: Menu[] = [
  {path: '', text: 'Anasayfa', img: 'house.svg', title: "anasayfa"},
  {path: 'characters', text: 'Characters', img: 'people.svg', title: "character list"},
]

export const customGender: GENDER_AND_TYPE[] = [
  {name: "Male"},
  {name: "Female"}
]

export const type: GENDER_AND_TYPE[] = [
  {name: "Alive"},
  {name: "Dead"},
  {name: "Living"}
]






