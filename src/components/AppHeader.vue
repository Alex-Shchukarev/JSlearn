<template>
    <div class="card_100pt">
        <h1 class="header_app"> {{ title }} </h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: 'Weather Forecast Application'
        }
    }
}
</script>