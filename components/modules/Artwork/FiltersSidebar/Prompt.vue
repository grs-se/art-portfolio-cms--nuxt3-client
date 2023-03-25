<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base">Gallery Options</h3>
    <div class="flex items-center text-sm">
      <ActionButton
        text="Clear Filters"
        btn="tertiary"
        @click="userMovementsStore.CLEAR_USER_ARTWORK_FILTER_SELECTIONS"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ActionButton } from '@/common/components/data-input'

import { useUserMovementsStore } from '@/stores/userMovement'

const userMovementsStore = useUserMovementsStore()
</script>
