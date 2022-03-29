<template>
    <div :class=" isExist ? 'card_10pt' : 'card_0pt' " v-show="isExist">
        <div class="wrapper_switch">
            <img src="../../assets/dark_light.svg">
        </div>
    </div>
</template>

<script>
export default {
    props: ['isExist']
}
</script>