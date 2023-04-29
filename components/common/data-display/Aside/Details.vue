<template>
  <div class="aside-details-container">
    <!-- <Bookmark color="black" class="justify-end" /> -->
    <figcaption class="aside-figcaption">
      <dl class="aside-details">
        <div class="title">
          <dt>Title</dt>
          <dd>"{{ artwork.title }}"</dd>
        </div>
        <div class="medium">
          <dt>Medium</dt>
          <dd>{{ artwork.medium[1] }}</dd>
        </div>
        <div class="date">
          <dt>Date</dt>
          <dd>
            <time>{{ convertDate(artwork.date) }}</time>
          </dd>
        </div>
        <div class="location">
          <dt>Location</dt>
          <dd>{{ artwork.location.join(', ') }}</dd>
        </div>

        <div class="tags">
          <dt>Tags</dt>
          <ul>
            <li>
              <a class="tag-link" href=""
                ><dd>
                  {{ artwork.tags.join(', ') }}
                </dd></a
              >
            </li>
          </ul>
        </div>

        <div class="description">
          <p class="line-clamp-6">{{ artwork.description }}</p>
        </div>
      </dl>
    </figcaption>
  </div>
</template>

<script lang="ts" setup>
import { convertDate } from '~~/utils';

defineProps({
  artwork: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.aside-details-container {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  padding: 0.25rem 1rem;
  gap: 2rem;
}
.aside-figcaption {
  display: flex;
  width: 100%;
  flex-direction: column;
  color: black;
  // overflow: hidden;
  .aside-details {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    line-height: 1.5rem;
    dt::after {
      content: ': ';
    }
    :not(.medium) > dd {
      text-transform: capitalize;
    }
    div {
      display: flex;
      flex-direction: row;
    }
    .title {
      margin-bottom: 0.5rem;
    }
    .description {
      @apply text-sm py-4;
    }
    .tags {
      margin-top: 1rem;
      font-size: 0.9rem;
      line-height: 1rem;
      .tag-link {
        @apply text-brand-blue-2;
      }
    }
  }
}
</style>
