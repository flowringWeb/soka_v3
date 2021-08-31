<script>
import { Zipcode, County, ZipcodeGroupby } from "twzipcode-vue";
export default {
  // 局部注冊的組件
  components: {
    // 縣市
    TwzipcodeCounty: County,

    // 郵遞區號
    TwzipcodeZipcode: Zipcode,

    // // 依縣市分組的郵遞區號
    // ZipcodeGroupby,
  },
  data() {
    return {
      myCounty: "新北市",
      myZipcode: "",
    };
  },
  // 計算屬性
  computed: {},
  // 偵聽器
  watch: {},
  // 組件方法
  methods: {},
};
</script>

<template>
  <div class="" style="display:flex;align-items:center;">
    <h4 style="font-size:14px;width:120px;">地址</h4>
    <twzipcode-county
      
      v-model="myCounty"
      style="height:30px;width:100px;margin-right:10px;"
    ></twzipcode-county>

    <twzipcode-zipcode
      v-model="myZipcode"
      text-template=":zipcode :county / :city"
      :filter-by-county="myCounty"
      style="height:30px;width:150px;margin-right:10px;"
    ></twzipcode-zipcode>
    <!-- test123 -->
    
  </div>
</template>
<style lang="scss" scoped>

</style>
