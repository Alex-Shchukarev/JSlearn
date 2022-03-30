<template>
    <div class="card_50pt">
        <h2 class="center"> {{ $translate('block.titleInput', name) }} </h2>
        <form class="form-control">
            <label for="customCity"> {{ $translate('block.titleEnter', name) }} </label>
            <input type="text" id="customCity">
            <button class="bttn"> {{ $translate('block.btnGet', name) }} </button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: 'En'
        }
    }
}
</script>