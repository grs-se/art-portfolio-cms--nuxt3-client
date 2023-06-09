/*
 * @Description: artwork actions type
 */

export enum ArtworkActionTypes {
  FETCH_ARTWORKS = 'FETCH_ARTWORKS',
}

export enum ArtworkGetterTypes {
  UNIQUE_ARTWORK_CATEGORIES = 'UNIQUE_ARTWORK_CATEGORIES',
  UNIQUE_ARTWORK_LOCATIONS = 'UNIQUE_ARTWORK_LOCATIONS',
  FILTERED_ARTWORKS = 'FILTERED_ARTWORKS',
  ARTWORK_SPOTLIGHTS = 'ARTWORK_SPOTLIGHTS',
  ARTWORK_HERO = 'ARTWORK_HERO',
  INCLUDE_ARTWORK_BY_CATEGORY = 'INCLUDE_ARTWORK_BY_CATEGORY',
  INCLUDE_ARTWORK_BY_LOCATION = 'INCLUDE_ARTWORK_BY_LOCATION',
  INCLUDE_ARTWORK_BY_TAG = 'INCLUDE_ARTWORK_BY_TAG',
  SORT_ARTWORKS_BY_DATE = 'SORT_ARTWORKS_BY_DATE',
}
