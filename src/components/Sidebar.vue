<template>
  <div class="text-white vh-100 p-3" style="width:250px; background-color:#f8f9fa;">
    <img src="../assets/Frame.png" alt="Logo" class="img-fluid mb-3" />

    <ul class="nav flex-column">
      <!-- Dashboards -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="toggleMenu('dashboards')">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-speedometer2"></i>
            Dashboards
          </span>
        </a>
      </li>

      <!-- Orders -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="toggleMenu('orders')">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-bag-check"></i>
            Orders
          </span>
        </a>
      </li>

      <!-- Subscriptions -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="toggleMenu('subscriptions')">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-credit-card"></i>
            Subscriptions
          </span>
          <span class="arrow" :class="{ open: openMenus.subscriptions }">&lt;</span>
        </a>
        <ul v-if="openMenus.subscriptions" class="nav flex-column ms-3 mt-1">
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Plan 1</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Plan 2</a></li>
        </ul>
      </li>

      <!-- Settings -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="goToStatusForm">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-gear"></i>
            Settings
          </span>
        </a>
      </li>

      <!-- Shipping -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="toggleMenu('shipping')">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-truck"></i>
            Shipping
          </span>
          <span class="arrow" :class="{ open: openMenus.shipping }">&lt;</span>
        </a>
        <ul v-if="openMenus.shipping" class="nav flex-column ms-3 mt-1">
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Local</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">International</a></li>
        </ul>
      </li>

      <!-- Connect with Zid -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="toggleMenu('zid')">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-box-arrow-up-right"></i>
            Connect with Zid
          </span>
          <span class="arrow" :class="{ open: openMenus.zid }">&lt;</span>
        </a>
        <ul v-if="openMenus.zid" class="nav flex-column ms-3 mt-1">
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Integration</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">API Keys</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Status</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Support</a></li>
        </ul>
      </li>

      <!-- Users -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="toggleMenu('users')">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-people"></i>
            Users
          </span>
          <span class="arrow" :class="{ open: openMenus.users }">&lt;</span>
        </a>
        <ul v-if="openMenus.users" class="nav flex-column ms-3 mt-1">
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Admins</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Customers</a></li>
        </ul>
      </li>

      <!-- Stores -->
      <li class="nav-item mb-2">
        <a href="#" class="nav-link custom-link d-flex justify-content-between align-items-center"
           @click.prevent="toggleMenu('stores')">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-shop"></i>
            Stores
          </span>
          <span class="arrow" :class="{ open: openMenus.stores }">&lt;</span>
        </a>
        <ul v-if="openMenus.stores" class="nav flex-column ms-3 mt-1">
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Warehouse</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Warehouse Transfers</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Products</a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link custom-link">Inventory</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const goToStatusForm = () => {
  router.push("/Settings")
}

// بدل Vue.ref نستخدم ref مباشرة
const openMenus = ref({
  dashboards: false,
  orders: false,
  subscriptions: false,
  settings: false,
  shipping: false,
  zid: false,
  users: false,
  stores: false
})

const toggleMenu = (menu) => {
  openMenus.value[menu] = !openMenus.value[menu]
}
</script>


<style scoped>
.custom-link {
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}
.custom-link:hover {
  color: green;
}
.arrow {
  display: inline-block;
  transition: transform 0.3s;
}
.arrow.open {
  transform: rotate(90deg);
}
</style>