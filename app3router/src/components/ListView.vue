<template>
  <div>
    <h2>A Description List</h2>

    <dl>
      <dt>Coffee</dt>
      <dd>- black hot drink</dd>
      <dt>Milk</dt>
      <dd>- white cold drink</dd>
    </dl>

    Playdata.vue인 부모에서 제공해준 데이터 : {{message}}
  </div>
</template>

<script>
export default {
    name : 'ListView',
    props : {message:String}
}
</script>