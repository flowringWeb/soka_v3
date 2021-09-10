<template>
  <div class="" style="">
    {{ testData }}
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
          :options="findCity"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="cboBelongArea" class="">
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
          :options="findArea"
        >
        </q-select>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <q-input
          style="max-width: 70%"
          class="q-pb-none"
          outlined
          dense
          :label="$q.screen.lt.sm ? '新增日期' : void 0"
          v-model="trueDate"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="pStartDates" class=""> 新增日期: </label>
          </template>
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="pStartDates" range @input="inputDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="確認" color="primary" />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <q-input
          style="max-width: 70%"
          class="q-pb-none"
          outlined
          dense
          :label="$q.screen.lt.sm ? '測試起訖日期' : void 0"
          v-model="aDate"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="" class=""> 測試起訖日期: </label>
          </template>
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="aDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="確認" color="primary" />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          style="max-width: 70%"
          class="q-pb-none"
          outlined
          dense
          :label="$q.screen.lt.sm ? '測試日期2' : void 0"
          v-model="bDate"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="bDate" :options="optionsFn">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="確認" color="primary" />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>
<script>
import { getMemberList } from "@/api/test";
const dataArr = [
  {
    label: "0001",
    value: "0001",
    children: [
      {
        label: "A區",
        value: "A區",
      },
      {
        label: "B區",
        value: "B區",
      },
    ],
  },
  {
    label: "0002",
    value: "0002",
    children: [
      {
        label: "C區",
        value: "C區",
      },
      {
        label: "D區",
        value: "D區",
      },
    ],
  },
];
export default {
  name: "TestApi",
  // 組件參數 接收來自父組件的數據
  props: {},
  // 局部注冊的組件
  components: {},
  data() {
    return {
      testData: [],
      cboBelongArea: "0001",
      cboBelongArea2: "A區",
      trueDate: "2021/09/09~2021/09/10",
      pStartDates: {
        from: "2021/09/09",
        to: "2021/09/10",
      },
      aDate: "",
      bDate: "",
      bProxyDate: ""
    };
  },
  created() {
    this.fetchData();
  },
  // 計算屬性
  computed: {
    findCity() {
      const map = dataArr.map((item) => {
        return item.value;
      });
      return map;
    },
    findArea() {
      const newMap = dataArr.filter(
        (item) => item.value === this.cboBelongArea
      )[0]["children"];
      return newMap;
    },
  },
  // 偵聽器
  watch: {
    cboBelongArea: {
      handler() {
        const newVal = dataArr.filter(
          (item) => item.value === this.cboBelongArea
        )[0]["children"][0];
        this.cboBelongArea2 = newVal;
      },
      deep: true,
    },
    trueDate: {
      handler(newVal) {
        const splitVal = newVal.split("~");
        this.updateDate(splitVal[0], splitVal[1]);
      },
    },
    aDate: {
      handler(newVal) {
        this.bProxyDate = newVal;
      },
    },
  },
  // 組件方法
  methods: {
    fetchData() {
      getMemberList().then((res) => {
        const resData = res.data;
        this.testData = resData;
        console.log(resData);
      });
    },

    inputDate(val) {
      const context = `${val.from}~${val.to}`;
      this.trueDate = context;
    },
    updateDate(date1, date2) {
      this.pStartDates.from = date1;
      this.pStartDates.to = date2;
    },
    optionsFn(date) {
      return date > this.bProxyDate;
    },
  },
};
</script>
<style lang="scss" scoped></style>
