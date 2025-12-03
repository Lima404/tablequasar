<template>
  <div class="app-container">
    <div class="table-wrapper">
      <q-table title="Relatório de Atendimentos" :rows="rows" :columns="columns" row-key="medico">
        <template v-slot:body-cell-acoes="props">
          <q-td :props="props">
            <q-btn flat round color="primary" icon="visibility" @click="visualizar(props.row)" />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const columns = ref([
  {
    name: "medico",
    required: true,
    label: "Médico",
    align: "left",
    field: "medico",
    sortable: true,
  },
  {
    name: "totalAtendimentos",
    align: "center",
    label: "Total de Atendimentos",
    field: "totalAtendimentos",
    sortable: true,
  },
  {
    name: "primeiroAtendimento",
    align: "center",
    label: "1º Atendimento",
    field: "primeiroAtendimento",
    sortable: true,
  },
  {
    name: "reavaliacao",
    align: "center",
    label: "Reavaliação",
    field: "reavaliacao",
    sortable: true,
  },
  {
    name: "mediaAtendimento",
    align: "center",
    label: "Média de Atendimento",
    field: "mediaAtendimento",
    sortable: true,
  },
  {
    name: "tempoMedioPrimeiroAtendimento",
    align: "center",
    label: "Tempo Médio até 1º Atendimento",
    field: "tempoMedioPrimeiroAtendimento",
    sortable: true,
  },
  {
    name: "acoes",
    align: "center",
    label: "Ações",
    field: "acoes",
  },
]);

const rows = ref([
  {
    medico: "Pedro Santos",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 30m",
  },
  {
    medico: "Deyse Lourenço",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Victor Tadashi",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Jimy Dickson",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Arthur Souza",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Gabriel Lima",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Lucas Oliveira",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Pedro Santos",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Ana Beatriz",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
  {
    medico: "Luana Mendes",
    totalAtendimentos: 10,
    primeiroAtendimento: "2 (20,0%)",
    reavaliacao: "2 (20,0%)",
    mediaAtendimento: "00h 10m",
    tempoMedioPrimeiroAtendimento: "00h 10m",
  },
]);

const visualizar = (row) => {
  console.log("Visualizando:", row);
  // Adicione sua lógica aqui
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
}

.table-wrapper {
  width: 90%;
  max-width: 1400px;
}
</style>