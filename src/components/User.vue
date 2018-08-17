<template>
    <div class="user">
        user
        <p>{{msg}}</p>
        <mu-button color="primary">Primary</mu-button>
    </div>
</template>

<script>

export default {
    props: {
    user: String,
    id: String
  }
}
</script>

