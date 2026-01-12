import { type ChessGrid } from "../grid/useGrid"
import { type Figure } from "./useFigures"

import bishopB from '@/assets/sprites/bishop-b.svg'
import bishopW from '@/assets/sprites/bishop-w.svg'

import kingB from '@/assets/sprites/king-b.svg'
import kingW from '@/assets/sprites/king-w.svg'

import knightB from '@/assets/sprites/knight-b.svg'
import knightW from '@/assets/sprites/knight-w.svg'

import pawnB from '@/assets/sprites/pawn-b.svg'
import pawnW from '@/assets/sprites/pawn-w.svg'

import queenB from '@/assets/sprites/queen-b.svg'
import queenW from '@/assets/sprites/queen-w.svg'

import rookB from '@/assets/sprites/rook-b.svg'
import rookW from '@/assets/sprites/rook-w.svg'

export const useInitFigures = () => {
    const figureInitMap: Map<ChessGrid['id'], Figure> = new Map() 

    function createPawns() {
        for(let i = 8; i < 16; i++) {
            figureInitMap.set(i, {
                name: 'Б.П',
                type: 'pawn',
                side: 'white',
                img: pawnW
            })
        }

        for(let i = 48; i < 56; i++) {
            figureInitMap.set(i, {
                name: 'Ч.П',
                type: 'pawn',
                side: 'black',
                img: pawnB
            })
        }
    }

    function createHorses() {
        figureInitMap.set(1, {
                name: 'Б.К',
                type: 'horse',
                side: 'white',
                img: knightW
            })
        figureInitMap.set(6, {
                name: 'Б.К',
                type: 'horse',
                side: 'white',
                img: knightW
            })

        figureInitMap.set(57, {
            name: 'Ч.К',
            type: 'horse',
            side: 'black',
            img: kingB
        })
        figureInitMap.set(62, {
            name: 'Ч.К',
            type: 'horse',
            side: 'black',
            img: kingB
        })
    }

    function createBishops() {
        figureInitMap.set(2, {
            name: 'Б.С',
            type: 'bishop',
            side: 'white',
            img: bishopW
        })
        figureInitMap.set(5, {
            name: 'Б.С',
            type: 'bishop',
            side: 'white',
            img: bishopW
        })

        figureInitMap.set(58, {
            name: 'Ч.С',
            type: 'bishop',
            side: 'black',
            img: bishopB
        })
        figureInitMap.set(61, {
            name: 'Ч.С',
            type: 'bishop',
            side: 'black',
            img: bishopB
        })
    }

    function createRooks() {
        figureInitMap.set(0, {
            name: 'Б.Л',
            type: 'rook',
            side: 'white',
            img: rookW
        })
        figureInitMap.set(7, {
            name: 'Б.Л',
            type: 'rook',
            side: 'white',
            img: rookW
        })

        figureInitMap.set(56, {
            name: 'Ч.Л',
            type: 'rook',
            side: 'black',
            img: rookB
        })
        figureInitMap.set(63, {
            name: 'Ч.Л',
            type: 'rook',
            side: 'black',
            img: rookB
        })
    }

    function createKings() {
        figureInitMap.set(3, {
            name: 'Б.Кр',
            type: 'king',
            side: 'white',
            img: kingW
        })

        figureInitMap.set(59, {
            name: 'Ч.Кр',
            type: 'king',
            side: 'black',
            img: kingB
        })
    }

    function createQueens() {
        figureInitMap.set(4, {
            name: 'Б.Ф',
            type: 'queen',
            side: 'white',
            img: queenW
        })

        figureInitMap.set(60, {
            name: 'Ч.Ф',
            type: 'queen',
            side: 'black',
            img: queenB
        })
    }

    function createFigures() {
        createPawns()
        createHorses()
        createBishops()
        createRooks()
        createKings()
        createQueens()
        return figureInitMap
    }

    return {
        createFigures,
    }
}