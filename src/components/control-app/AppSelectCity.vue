<template>
    <div class="card_55pt">
        <h2 class="center"> {{ $translate('block.titleInput', name) }} </h2>
        <form class="form-control" @submit.prevent="$emit('select-city', choseCity)">
            <label for="customCity"> {{ $translate('block.titleEnter', name) }} </label>
            <input type="text" id="customCity" v-model.trim="choseCity">
            <button type="submit" class="bttn"> {{ $translate('block.btnGet', name) }} </button>
        </form>
    </div>
</template>

<script>
export default {
    emits: ['select-city'],
    props: {
        name: {
            type: String,
            required: true,
            default: 'En'
        }
    },
    data() {
        return {
            choseCity: ''
        }
    }
    
}
</script>