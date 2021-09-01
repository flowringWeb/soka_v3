<template>
  <div class="" style="">
      {{testData}}
  </div>
</template>
<script>
import { getMemberList } from "@/api/test";
export default {
  // 組件參數 接收來自父組件的數據
  props: {},
  // 局部注冊的組件
  components: {},
  data() {
    return {
      testData: [],
    };
  },
  created() {
    this.fetchData();
  },
  // 計算屬性
  computed: {},
  // 偵聽器
  watch: {},
  // 組件方法
  methods: {
    fetchData() {
      console.log("==>", process.env.NODE_ENV);
      console.log("==>", process.env)
      getMemberList().then((res) => {
        const resData = res.data;
        this.testData = resData;
        console.log(resData);
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
