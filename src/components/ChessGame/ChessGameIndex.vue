<script setup lang="ts">
//import draggableComponent from "vuedraggable"
import { chessGridArr } from './data/grid/useGrid';
import { useFigures } from './data/figures/useFigures';
import { onMounted } from 'vue';

const useFiguresComposable = useFigures()

onMounted(() => {
    useFiguresComposable.init()
})
</script>

<template>
    <div class="chess-container">
        <div v-for="row in chessGridArr" :key="`chess-grid-item-${row.id}`" :class="row.color"
            class="border h-[70px] w-[70px]">
            <img v-if="useFiguresComposable.figures.value.get(row.id)"
                :src="useFiguresComposable.figures.value.get(row.id)?.img" />
        </div>
    </div>
</template>


<style scoped>
.chess-container {
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
</style>