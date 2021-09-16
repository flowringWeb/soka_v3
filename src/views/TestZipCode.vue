<template>
  <div class="" style="display:flex;flex-direction:column;">
    <div style="display:flex;align-items:center;">
      <h4 style="font-size:14px;width:120px;">地址</h4>
      <twzipcode-county
        v-model="myCounty"
        style="height:40px;width:100px;margin-right:10px;"
      ></twzipcode-county>
      <!--  text-template=":zipcode :county / :city" -->
      <twzipcode-zipcode
        v-model="myZipcode"
        text-template=":city"
        :filter-by-county="myCounty"
        style="height:40px;width:150px;margin-right:10px;"
      ></twzipcode-zipcode>
      <el-input
        placeholder="輸入地址"
        v-model="address"
        style="width:400px;margin-right:10px;"
      >
      </el-input>
      <el-button type="primary" @click="searchAddress" style=""
        >查詢郵遞區號</el-button
      >
    </div>
    <!-- 輸入其餘地址 call 3+2 Api -->
    3+2 結果:{{ testAdrData.zipcode }} -- {{ testAdrData.new_adrs }}

  </div>
</template>
<script>
import { Zipcode, County } from "twzipcode-vue";


export default {
  // 局部注冊的組件
  components: {
   
    TwzipcodeCounty: County, // 縣市
    TwzipcodeZipcode: Zipcode, // 郵遞區號

    // TwzipcodeZipcodeGroupby: ZipcodeGroupby,// 依縣市分組的郵遞區號
  },
  data() {
    return {

 
      times: [],
      date: "",

      // ==========================
      myCounty: "新北市",
      myZipcode: "",
      myZipcode2: "",
      testAdrData: {},
      address: "",
      
    };
  },
  // 計算屬性
  computed: {


  },
 
  // 組件方法
  methods: {
 
    searchAddress() {
      let cityStr = "";
      let areaStr = "";
      let citySelect = document.getElementById("twzipcode__county");
      let cityIndex = citySelect.selectedIndex;
      cityStr = citySelect.options[cityIndex].text;

      let areaSelect = document.getElementById("twzipcode__zipcode");
      let areaIndex = areaSelect.selectedIndex;
      areaStr = areaSelect.options[areaIndex].text;
      this.fetData(cityStr + areaStr + this.address);
    },

    fetData(adr) {
      this.$axios
        .get(`http://zip5.5432.tw/zip5json.py?adrs=${adr}`)
        .then((res) => {
          console.log(res.data);
          this.testAdrData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },
  created() {},
};
</script>
<style lang="scss">
label {
  color: #000;
  font-size: 14px;
}
.font-s-size {
  font-size: 55%;
}
.this {
  border: 1px solid red;
}
.q-field__label.no-pointer-events.absolute.ellipsis {
  transform: translateY(-30%) scale(0.75);
}
</style>
