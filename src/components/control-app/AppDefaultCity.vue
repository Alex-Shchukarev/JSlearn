<template>
    <div class="card_30pt">
        <div v-if="!cityByGetting">
            <h2> {{ $translate('block.cityDef', cityD) }} </h2>
            <h3><strong> {{ cityByDefault }} </strong></h3>
        </div>
        <div v-else>
            <h2> {{ $translate('block.cityCur', cityD) }} </h2>
            <h3><strong> {{ cityByGetting }} </strong></h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cityByDefault: {
            type: String,
            required: true
        },
        cityByGetting: {
            type: String,
            required: true,
            default: ''
        },
        cityD: {
            type: String,
            required: true,
            default: 'En'
        }
    }
}
</script>