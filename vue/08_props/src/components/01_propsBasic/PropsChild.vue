<template>
    <div>
        <h3>전달 받은 prop: {{  props.message }}</h3>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue';

    const props = defineProps(
    //    리드 온니가 되도록 값을 감쌋다 생각하자
        {
            message: String
        }
    );

    /* 1. 기본 자료형 (Primitive Types) */
    // const props = defineProps({
    //     message: String,
    //     count: Number,
    //     isActive: Boolean,
    //     items: Array,
    //     user: Object,
    //     createdAt: Date,
    //     callback: Function,
    //     id: Symbol
    // });


    /* 2. 여러 타입 허용 */
    // const props = defineProps({
    //     value: [String, Number],
    //     data: [Array, Object]
    // });
</script>

<style scoped>

</style>