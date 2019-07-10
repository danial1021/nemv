<template>
  <v-container>
    <v-card>
      <v-card-title>회원 정보 수정</v-card-title>
      <v-card-text>
        <input id="bin" type="file">
      </v-card-text>
      <v-card-action>
        <v-btn @click="upload">전송</v-btn>
      </v-card-action>
    </v-card>
  </v-container>
</template>
<script>
export default {
  mounted () {
  },
  methods: {
    upload () {
      const fd = new FormData() // 폼데이터로 객체를 만들어서 append 시킴
      fd.append('name', 'sunny') // 일반 json 형식
      fd.append('bin', document.getElementById('bin').files[0]) // 파일 형식
      // input 의 id부터 객체를 찾음
      this.$axios.post('/user', fd)
        .then(r => {
          console.log('success')
        })
        .catch(e => console.error(e.message))
    }
  }
}
</script>

<!--
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-title>회원 정보 수정</v-card-title>
          <v-card-text>
            <img-upload />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import imgUpload from '@/components/imgUpload'

export default {
  components: { imgUpload },
  data: () => ({
  }),
  mounted () {
  },
  methods: {
  }
}
</script>
-->
