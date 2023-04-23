<template>
  <div class="sort">
    <div class="sort-toggle" @click="toggleDropdown">
      <h4>Sort</h4>
      <font-awesome-icon :icon="['fas', 'caret-down']" class="caret" />
    </div>
    <div v-if="dropdown" class="dropdown">
      <template v-for="option in sortOptions">
        <dt>{{ option.term }}</dt>

        <template v-for="val in option.vals">
          <dd>{{ val }}</dd>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const sortOptions = ref([
  {
    term: 'date',
    icon: '',
    vals: ['asc', 'desc'],
  },
  {
    term: 'relevance',
    icon: '',
    vals: ['most relevant', 'least relevant'],
  },
  {
    term: 'popularity',
    icon: '',
    vals: ['most popular', 'least popular'],
  },
]);
const dropdown = ref(false);
const asc = ref(true);
const desc = ref(false);
const ascDesc = () => {};

const toggleDropdown = () => {
  dropdown.value = !dropdown.value;
  console.log(dropdown.value);
};

const handleSortChange = () => {};
</script>

<style scoped lang="scss">
dd::before {
  content: ' ';
}
.sort {
  display: flex;
  flex-direction: column;
  position: relative;
  &-toggle {
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    &:hover {
      cursor: pointer;
    }
  }
}

/* .caret {
} */
.caret {
  height: 0.75rem;
  width: 0.75rem;
  @apply text-brand-gray-3;
}
.dropdown {
  position: absolute;
  display: block;
  z-index: 1;
  // top: 0;
}

.show {
  display: block;
}
</style>
