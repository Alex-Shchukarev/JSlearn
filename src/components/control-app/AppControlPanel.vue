<template>
    <div class="card_14pt" v-show="isExist">
        <button class="bttn" @click="$emit('changeTheme')"> {{ theme === 'Dark' ? $translate('block.themeD', name) : $translate('block.themeL', name)}} </button>
        <button class="bttn" @click="$emit('changeLang')"> {{ $translate('block.btnLang', name)}} </button>
    </div>
</template>

<script>
export default {
    emits: ['changeLang', 'changeTheme'],
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
        },
        theme: {
            type: String,
            required: true,
            default: 'Dark'
        }
    }
}
</script>