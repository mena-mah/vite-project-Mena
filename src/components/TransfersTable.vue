<template>
  <div class="card p-4 transfers-card">
    <h5 class="mb-3">Transfers Table</h5>

    <!-- Filters Row -->
    <div class="filters mb-3">
      <div class="search-box">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search"
          class="form-control"
        />
      </div>

      <select v-model="fromWarehouse" class="form-select">
        <option value="">From Warehouse</option>
        <option>02 مخزن دفعة</option>
        <option>01 Main</option>
      </select>

      <select v-model="toWarehouse" class="form-select">
        <option value="">To</option>
        <option>034 مخزن دفعة</option>
        <option>056 Secondary</option>
      </select>

      <div class="date-range">
        <input
          type="text"
          v-model="dateRange"
          readonly
          class="form-control"
        />
      </div>

      <button class="btn btn-success" @click="applyFilters">Apply</button>
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>TRANSFER NUMBER</th>
            <th>SHIPPING COMPANY</th>
            <th>SENDING WAREHOUSE</th>
            <th>RECEIVING WAREHOUSE</th>
            <th>PRODUCTS</th>
            <th>STATUS</th>
            <th>DATE</th>
            <th>MORE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transfer, i) in filteredTransfers" :key="i">
            <td>{{ transfer.no }}</td>
            <td><strong>{{ transfer.transfer }}</strong></td>
            <td>{{ transfer.ship }}</td>
            <td>{{ transfer.from }}</td>
            <td>{{ transfer.to }}</td>
            <td>{{ transfer.products }}</td>
            <td>
              <span :class="['badge', statusClass(transfer.status)]">
                <span class="dot"></span> {{ transfer.status }}
              </span>
            </td>
            <td>{{ transfer.date }}</td>
            <td>
              <button class="btn btn-light btn-sm">
                <i class="bi bi-three-dots"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div class="d-flex justify-content-between align-items-center mt-2">
      <small class="text-muted">
        Showing {{ filteredTransfers.length }} of 02 entries
      </small>
      <div>
        <button class="btn btn-outline-secondary btn-sm">&laquo;</button>
        <button class="btn btn-success btn-sm">1</button>
        <button class="btn btn-outline-secondary btn-sm">2</button>
        <button class="btn btn-outline-secondary btn-sm">&raquo;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const fromWarehouse = ref("");
const toWarehouse = ref("");
const dateRange = ref("23/07/2024 - 14/06/2025");

const transfers = ref([
  {
    no: "9221",
    transfer: "VOL-653CDI",
    ship: "smsa - سمسا",
    from: "02 مخزن دفعة",
    to: "034 مخزن دفعة",
    products: "05",
    status: "New",
    date: "2024-10-09 13:09:02",
  },
  {
    no: "9221",
    transfer: "VOL-653CDI",
    ship: "smsa - سمسا",
    from: "02 مخزن دفعة",
    to: "034 مخزن دفعة",
    products: "05",
    status: "Shipping",
    date: "2024-10-09 13:09:02",
  },
  {
    no: "9221",
    transfer: "VOL-653CDI",
    ship: "smsa - سمسا",
    from: "02 مخزن دفعة",
    to: "034 مخزن دفعة",
    products: "05",
    status: "New",
    date: "2024-10-09 13:09:02",
  },
  {
    no: "9221",
    transfer: "VOL-653CDI",
    ship: "smsa - سمسا",
    from: "02 مخزن دفعة",
    to: "034 مخزن دفعة",
    products: "05",
    status: "Completed",
    date: "2024-10-09 13:09:02",
  },
  {
    no: "9221",
    transfer: "VOL-653CDI",
    ship: "smsa - سمسا",
    from: "02 مخزن دفعة",
    to: "034 مخزن دفعة",
    products: "05",
    status: "Shipping",
    date: "2024-10-09 13:09:02",
  },
]);

// computed filter
const filteredTransfers = computed(() =>
  transfers.value.
filter((t) => {
    const matchSearch = Object.values(t)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchFrom = !fromWarehouse.value || t.from === fromWarehouse.value;
    const matchTo = !toWarehouse.value || t.to === toWarehouse.value;
    return matchSearch && matchFrom && matchTo;
  })
);

function applyFilters() {
  // placeholder — computed handles updates automatically
}

function statusClass(status) {
  switch (status.toLowerCase()) {
    case "new":
      return "status-new";
    case "shipping":
      return "status-shipping";
    case "completed":
      return "status-completed";
    default:
      return "status-new";
  }
}
</script>

<style scoped>
.transfers-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.search-box input {
  min-width: 200px;
}
.date-range input {
  width: 200px;
  background-color: #f9fdf9;
}
.badge {
  border-radius: 12px;
  padding: 6px 10px;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}
.badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.status-new {
  background-color: #f3fff6;
  color: #1f7a3f;
  border: 1px solid rgba(37, 99, 78, 0.1);
}
.status-new .dot {
  background-color: #1f7a3f;
}
.status-shipping {
  background-color: #f6f5ff;
  color: #6136b0;
  border: 1px solid rgba(97, 54, 176, 0.1);
}
.status-shipping .dot {
  background-color: #6136b0;
}
.status-completed {
  background-color: #f3fff6;
  color: #2c8b4a;
  border: 1px solid rgba(37, 99, 78, 0.1);
}
.status-completed .dot {
  background-color: #2c8b4a;
}
.transfers-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Filters row */
.filters {
  display: flex;
  flex-wrap: nowrap; /* خليهم في سطر واحد */
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
}

/* input البحث */
.search-box input {
  width: 200px; /* ثابت الحجم */
}

/* selects */
.filters select {
  width: 180px; /* ثابت الحجم لكل select */
}

/* تاريخ range */
.date-range input {
  width: 200px;
  background-color: #f9fdf9;
}

/* زر التطبيق */
.filters button {
  height: 38px; /* نفس ارتفاع input */
}
</style>