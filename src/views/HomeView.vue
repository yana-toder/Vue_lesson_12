<template>
  <div class="home">
    <h1>Ласкаво просимо до TechVista Solutions!</h1>

    <h2>Змінюймо майбутнє разом.</h2>

    <p>
      У нашій компанії ми зосереджені на інноваціях, розробці передових
      технологій та наданні високоякісних ІТ рішень. Завдяки нашій команді
      талановитих фахівців ми трансформуємо ваші ідеї в реальність, роблячи світ
      кращим місцем за допомогою технологій.
    </p>

    <p>
      Долучайтеся до нашої спільноти і дізнайтеся, як TechVista Solutions може
      стати вашим партнером у досягненні цифрового успіху.
    </p>

    <p>З повагою, Команда TechVista Solutions</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
}
</script>
<style lang="scss" scoped>
.home {
  p &:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
