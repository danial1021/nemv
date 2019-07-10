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
          <v-card-title>회원가입</v-card-title>
          <v-card-text>
            <img-upload>
          </v-card-text>
          <v-card-action>

          </v-card-action>
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
    form: {
      name: 'xxx'
    },
    img: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E'
  }),
  mounted () {
  },
  methods: {
    upload () {
      const fd = new FormData() // 폼데이터로 객체를 만들어서 append 시킴
      fd.append('name', this.form.name) // 일반 json 형식
      fd.append('bin', document.getElementById('bin').files[0]) // 파일 형식
      // input 의 id부터 객체를 찾음
      this.$axios.post('/user', fd)
        .then(({ data }) => {
          this.img = data
          this.$store.commit('pop', { msg: '파일 업로드 완료', color: 'success' })
        })
        .catch(e => {
          if (!e.response) this.$store.commit('pop', { msg: e.message, color: 'warning' })
        })
    }
  }
}
</script>
-->
