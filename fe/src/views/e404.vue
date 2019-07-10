<template>
  <v-container>
    <v-alert type="warning" :value="true">
      {{$route.path}} 그런 페이지가 존재하지 않습니다!
    </v-alert>
  </v-container>
</template>
