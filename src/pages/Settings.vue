<template>
  <div class="card p-4 status-form">
    <h5 class="mb-4">Status Update Form</h5>

    <div class="mb-3" v-for="(item, i) in statusList" :key="i">
      <label class="form-label fw-semibold">Current Status</label>
      <select class="form-select mb-2" v-model="item.selected">
        <option v-for="status in item.options" :key="status">{{ status }}</option>
      </select>

      <!-- عرض الأزرار فقط في القسم الثاني -->
      <div v-if="i === 1" class="d-flex flex-wrap gap-2 mb-3">
        <button
          v-for="status in statusButtons"
          :key="status.text"
          type="button"
          class="status-btn"
          :style="{ background: status.color, color: status.textColor }"
        >
          {{ status.text }}
        </button>
      </div>

      <div v-if="item.description" class="text-muted small ps-1">
        {{ item.description }}
      </div>
    </div>

    <!-- Received & Damaged -->
    <div class="row mt-3">
      <div class="col-md-6 mb-3">
        <label class="form-label">Received Quantity</label>
        <input type="number" class="form-control" placeholder="00" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Damaged Quantity (if any)</label>
        <input type="number" class="form-control" placeholder="00" />
      </div>
    </div>

    <!-- Notes -->
    <div class="mb-3">
      <label class="form-label">Optional notes</label>
      <textarea
        class="form-control"
        rows="3"
        placeholder="write any notes..."
        maxlength="500"
      ></textarea>
      <div class="text-end text-muted small mt-1">00/500</div>
    </div>

    <div class="text-end">
      <button class="btn btn-success" @click="goBack">Back to Transfers</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// كل القوائم بنفس ما في الصورة
const statusList = ref([
  { selected: "New (Transfer created)", options: ["New (Transfer created)"] },
  {
    selected: "Choose Status",
    options: ["Choose Status"],
  },
  {
    selected: "Preparing (Staff preparing items)",
    options: ["Preparing (Staff preparing items)"],
    description: "Preparing ( Staff preparing items )",
  },
  {
    selected: "Ready (Items packed and ready to ship)",
    options: ["Ready (Items packed and ready to ship)"],
    description: "Ready (Items packed and ready to ship)",
  },
  {
    selected: "Shipping (Shipment has left warehouse)",
    options: ["Shipping (Shipment has left warehouse)"],
    description: "Shipping (Shipment has left warehouse)",
  },
  {
    selected: "Shipments Received",
    options: ["Shipments Received"],
  },
  {
    selected: "Completed",
    options: ["Completed"],
  },
]);

const statusButtons = [
  { text: "New", color: "#f3fff6", textColor: "#1f7a3f" },
  { text: "Preparing", color: "#fff5e6", textColor: "#d07f00" },
  { text: "Ready", color: "#e8f8ff", textColor: "#0366d6" },
  { text: "Shipping", color: "#f6f5ff", textColor: "#6136b0" },
  { text: "Shipments Received", color: "#e6f5ec", textColor: "#267c44" },
  { text: "Completed", color: "#d6f5e0", textColor: "#1f7a3f" },
];

function goBack() {
  router.push("/transfers");
}
</script>

<style scoped>
.status-form {
  max-width: 700px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.status-btn {
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
}
.status-btn:hover {
  opacity: 0.85;
}
</style>
