<template></template>

<script lang="ts" setup>
import useAppConfigStore from '~~/store/modules/app-config';
import { DeviceType } from '@/store/types';

const appConfig = useAppConfigStore();
function handleScreenResize() {
  const width = document.body.clientWidth;
  if (width <= 768) {
    appConfig.changeDevice(DeviceType.MOBILE);
    appConfig.toggleCollapse(true);
  } else if (width < 992 && width > 768) {
    appConfig.changeDevice(DeviceType.PAD);
    appConfig.toggleCollapse(true);
  } else if (width < 1200 && width >= 992) {
    appConfig.changeDevice(DeviceType.PC);
    appConfig.toggleCollapse(false);
  } else {
    appConfig.changeDevice(DeviceType.PC);
    appConfig.toggleCollapse(false);
  }
}
function closeMenu() {
  appConfig.toggleCollapse(true);
}
</script>
