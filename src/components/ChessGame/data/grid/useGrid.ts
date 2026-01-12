import { computed } from "vue"

export type ChessGrid = {
    id: number,
    color: string
}

export const chessGridArr = computed<ChessGrid[]>(() => {
        const res: ChessGrid[] = []

        for (let i = 0; i < 64; i++) {
            const row = Math.floor(i / 8)
            const col = i % 8

            const isBlack = (row + col) % 2 === 0

            res.push({
            id: i,
            color: isBlack ? 'bg-amber-700' : 'bg-amber-200',
            })
        }


        return res
    })