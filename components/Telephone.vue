<template>
  <div class="flex flex-row gap-2 items-center">
    <label for="phone">Telefone:</label>
    <input class="border border-neutral-200 rounded-lg px-4 py-1" id="phone" type="text" v-model="phone" @input="applyMask" placeholder="(99) 99999-9999" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    };
  },
  methods: {
    applyMask() {
      // Remove tudo que não é dígito
      let phone = this.phone.replace(/\D/g, '');

      // Adiciona parênteses e hífen de acordo com o padrão brasileiro
      if (phone.length > 0) {
        phone = `(${phone}`
      }
      if (phone.length > 3) {
        phone = `${phone.slice(0, 3)}) ${phone.slice(3)}`
      }
      if (phone.length > 10) {
        phone = `${phone.slice(0, 10)}-${phone.slice(10, 15)}`
      }

      // Limita o tamanho máximo do input
      this.phone = phone.slice(0, 15);
    }
  }
};
</script>