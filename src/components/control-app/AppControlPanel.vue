<template>
    <div :class=" isExist ? 'card_10pt' : 'card_0pt' " v-show="isExist">
        <div class="wrapper_switch">
            <img src="../../assets/dark_light.svg">
        </div>
        <button @click="$emit('changeLang')"> {{ $translate('block.btnLang', name)}} </button>
    </div>
</template>

<script>
export default {
    emits: ['changeLang'],
    props: {
        isExist: {
            type: Boolean,
            required: true,
            default: false
        },
        name: {
            type: String,
            required: true,
            default: 'En'
        }
    }
}
</script>