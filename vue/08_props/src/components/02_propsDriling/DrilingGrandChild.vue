<template>
    <div>
        <h3>GrandChild: {{ injectedCount }}</h3>
        <button @click="injectedCount++">GrandChild에서 값 증가</button>
    </div>
</template>

<script setup>
    import {inject} from 'vue';
    // 다른 객체가 아니라 거기서 직접접근 -> 이 상탠는 자식이 바꾸면 부모도 바뀜
    // 지양한다 왜? -> 어디서 뭘 꺼냇는지 알기가 어렵다 -> 유지보수가 어렵다
    const injectedCount = inject('count');
</script>

<style scoped>

</style>