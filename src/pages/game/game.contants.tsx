import helmet from '../../images/game/helmet-1.png'
import potion from '../../images/game/potion-1.png'
import ring from '../../images/game/ring-1.png'
import scroll from '../../images/game/scroll-1.png'
import shield from '../../images/game/shield-1.png'
import sword from '../../images/game/sword-1.png'

export interface ICardIamges {
  id: number;
  src: string;
}

export const Images: ICardIamges[] = [
  { id: 1, src: helmet },
  { id: 2, src: potion },
  { id: 3, src: ring },
  { id: 4, src: scroll },
  { id: 5, src: shield },
  { id: 6, src: sword },
];