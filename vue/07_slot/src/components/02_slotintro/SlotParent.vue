<template>
    <div class="parentContainer">
        <Child>
            {{  slotData }}
        </Child>
    </div>
</template>

<script setup>
    import Child from './SoltChild.vue';
    import {ref} from 'vue';

    /*
        slot은 일반적으로 태그 형태로 전달된다.
        (일반적으로 상태값, 데이터를 활용한 태그는 뒤에 배울 props을 활용하는 편이다.)
    */
    const slotData = ref('Hello data');
</script>

<style scoped>
    .parentContainer {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid pink;
    }
</style>