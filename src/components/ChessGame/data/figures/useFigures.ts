import { ref } from "vue"
import { type ChessGrid } from "../grid/useGrid"

import { useInitFigures } from "./useInitFigures"

export type FigureType = 'pawn' | 'horse' | 'bishop' | 'rook' | 'king' | 'queen'

export interface Figure {
    name: string
    type: FigureType,
    side: 'white' | 'black',
    img: string
}

export const useFigures = () => {
    const { createFigures } = useInitFigures()

    const figures = ref<Map<ChessGrid['id'], Figure>>(new Map())

    function init() {
        figures.value = createFigures()
    }

    return {
        figures,
        init
    }
}