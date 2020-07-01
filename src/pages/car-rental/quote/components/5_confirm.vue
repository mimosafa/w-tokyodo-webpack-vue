<template>
  <div>
    <h2>お見積内容の確認</h2>
    <dl>
      <dt>車両</dt>
      <dd>{{ responses.carType }}</dd>
      <dt>使用場所</dt>
      <dd>{{ responses.prefecture }}</dd>
      <dt>期間</dt>
      <dd>{{ responses.dateStart }} ~ {{ responses.dateEnd }}</dd>
      <dt>オプション</dt>
      <dd>{{ responses.options.join(', ') }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    responses: Object
  }
}
</script>
