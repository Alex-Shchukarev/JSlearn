<template>
    <div class="card_30pt">
        <h2> {{ firstTitle }} </h2>
        <h3> {{ firstParam }} </h3>
        <h2> {{ secondTitle }} </h2>
        <h3> {{ secondParam }} </h3>
    </div>
</template>

<script>
export default {
    props: {
        firstParam: {
            type: String,
            required: true
        },
        secondParam: {
            type: String,
            required: true
        },
        firstTitle: {
            type: String,
            required: true
        },
        secondTitle: {
            type: String,
            required: true
        }
    }
}
</script>