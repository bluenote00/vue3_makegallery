<template>
  <div class="home">

    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx">
              <!-- 아래 선언한 item을 화면에 뿌리겠다 -->
            <Card :item="item"/> <!-- 객체 전달 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Card from "@/components/Card";
import axios from "axios";
import {reactive} from "vue";

export default {
  name: "Home",
  components: {Card},
  setup() { //backend에서 작성했던 mapping으로 연결! 결과를 받으면 console에 찍겠다.
    const state = reactive({
      items: []
    })

    axios.get("/api/items").then(({data}) => { // 중괄호를 붙이면 객체안에 프로퍼티를 바로 꺼내올수있다.
      state.items = data;
    })
    return {state}
  }
}

</script>

<style scoped>


</style>