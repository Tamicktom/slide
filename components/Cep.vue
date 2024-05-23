<template>
  <div class="flex flex-row gap-2 items-center">
    <label for="cep">CEP:</label>
    <input class="border border-neutral-200 rounded-lg px-4 py-1" id="cep" type="text" v-model="cep" @input="applyMask" placeholder="99999-999" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cep: ''
    };
  },
  methods: {
    applyMask() {
      // Remove tudo que não é dígito
      let cep = this.cep.replace(/\D/g, '');

      // Adiciona o hífen de acordo com o padrão brasileiro de CEP
      if (cep.length > 5) {
        cep = `${cep.slice(0, 5)}-${cep.slice(5, 8)}`
      }

      // Limita o tamanho máximo do input
      this.cep = cep.slice(0, 9);
    }
  }
};
</script>
