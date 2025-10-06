<template>
  <div class="container my-4">
    <!-- العنوان + الزر -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Warehouse Transfers</h2>
     <button class="btn d-flex align-items-center" style="background-color: #28a745; color: white; gap: 0.5rem;">
  <span style="font-size: 1.5rem; font-weight: bold; line-height: 1;">+</span>
  New Warehouse Transfer
</button>

    </div>

    <!-- Overview Section -->
    <div class="card p-4 mb-4">
      <h3 style=" font-weight: bold; line-height: 1;">Overview</h3>
      <div class="row align-items-center">
        <!-- الرسم البياني -->
        <div class="col-md-6 d-flex justify-content-center">
          <canvas id="overviewChart" class="chart-small"></canvas>
        </div>

        <!-- القائمة موازية للدائرة -->
        <div class="col-md-6 d-flex flex-column justify-content-around h-100">
          <ul class="status-list list-unstyled p-0 m-0">
            <li class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-2">
                <span class="status-circle" style="background-color: #28a745;"></span>
                <span>New</span>
              </div>
              <span>45 | 40%</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-2">
                <span class="status-circle" style="background-color: #ffc107;"></span>
                <span>Preparing</span>
              </div>
              <span>15 | 28%</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-2">
                <span class="status-circle" style="background-color: #17a2b8;"></span>
                <span>Ready</span>
              </div>
              <span>9 | 18%</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-2">
                <span class="status-circle" style="background-color: #007bff;"></span>
                <span>Shipping</span>
              </div>
              <span>23 | 14%</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-2">
                <span class="status-circle" style="background-color: #6c757d;"></span>
                <span>Completed</span>
              </div>
              <span>1 | 14%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Transfers Table -->
    <TransfersTable />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'
import TransfersTable from './TransfersTable.vue'

const transfers = [
  { number: 'TR001', company: 'DHL', warehouse: 'Main', status: 'New' },
  { number: 'TR002', company: 'FedEx', warehouse: 'North', status: 'Preparing' },
  { number: 'TR003', company: 'UPS', warehouse: 'East', status: 'Ready' },
  { number: 'TR004', company: 'Aramex', warehouse: 'South', status: 'Shipping' },
  { number: 'TR005', company: 'DHL', warehouse: 'Main', status: 'Completed' }
]

onMounted(() => {
  const ctx = document.getElementById('overviewChart')
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['New', 'Preparing', 'Ready', 'Shipping', 'Completed','Shipments Received '],
      datasets: [{
        data: [20, 10, 5, 3, 1 ,4],
        backgroundColor: ['#28a745','#ffc107', '#17a2b8', '#007bff', '#6c757d', '#71DD37']
      }]
    },
    options: {
      responsive: true,
      cutout: '50%',
      aspectRatio: 2, 
      plugins: {
        legend: { display: false }
      }
    }
  })
})
</script>

<style scoped>
.status-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.status-list li {
  margin-bottom: 1rem;
}
</style>
