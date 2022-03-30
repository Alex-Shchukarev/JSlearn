<template>
    <div class="card_100pt">
        <h1 class="header_app"> {{ $translate('block.title', lang) }} </h1>
    </div>
</template>

<script>
export default {
    props: {
        lang: {
            type: String,
            required: true,
            default: 'en'
        }
    }
}
</script>