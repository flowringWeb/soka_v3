<template>
  <div class="" style="">
    <!-- {{ testData }} -->
    <div class="row">
      <div class="col-6">
        <q-select
          id="cboBelongArea"
          outlined
          dense
          emit-value
          map-options
          v-model="cboBelongArea"
          :label="$q.screen.lt.sm ? '所屬區域' : void 0"
          :options="cboBelongArea_options"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="cboBelongArea" class="font-s-size">
              <span class="required">＊</span>所屬區域:
            </label>
          </template>
        </q-select>
      </div>
      <div class="col-6">
        <q-select
          id="cboBelongArea2"
          outlined
          dense
          emit-value
          map-options
          v-model="cboBelongArea2"
          :label="$q.screen.lt.sm ? '所屬區域' : void 0"
          :options="cboBelongArea2_options"
        >
        </q-select>
      </div>
    </div>
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
      cboBelongArea: "台北市",
      cboBelongArea_options: [
        {
          label: "台北市",
          value: "台北市",
        },
        {
          label: "新北市",
          value: "新北市",
        },
      ],
      cboBelongArea2: "中山區",
      cboBelongArea2_options: [
        {
          label: "中山區",
          value: "中山區",
        },
        {
          label: "新店區",
          value: "新店區",
        },
      ],
    };
  },
  created() {
    // this.fetchData();
  },
  // 計算屬性
  computed: {},
  // 偵聽器
  watch: {},
  // 組件方法
  methods: {
    // fetchData() {
    //   getMemberList().then((res) => {
    //     const resData = res.data;
    //     this.testData = resData;
    //     console.log(resData);
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped></style>
