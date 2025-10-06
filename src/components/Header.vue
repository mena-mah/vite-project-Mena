<template>
  <nav class="navbar navbar-light bg-white border-bottom px-4">
    <div class="d-flex align-items-center w-100">
      <div class="search-container w-100 position-relative">
        <input type="text" class="form-control inputSearch" placeholder="Search..." />
        <div class="search-icons d-flex align-items-center">
          <i class="bi bi-bell"></i>
          <i class="bi bi-person-circle"></i>
          <img src="../assets/wBadge.png" alt="Logo" class="img-fluid" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.search-container {
  width: 100%;
}

.inputSearch {
  width: 100%;
  padding-right: 150px; /* مساحة للأيقونات داخل الـ input */
  height: 38px;
  font-size: 14px;
  border-radius: 8px;
}

.search-icons {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  gap: 10px;
}

/* أيقونات */
.search-icons i {
  font-size: 1.4rem;
  color: #28a745;
  cursor: pointer;
  transition: transform 0.2s;
}
.search-icons i:hover {
  transform: scale(1.2);
}

/* الصورة */
.search-icons img {
  height: 28px;
  width: auto;
  border-radius: 50%;
}
</style>
