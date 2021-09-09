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
          :options="findArea"
        >
        </q-select>
      </div>
    </div>
  </div>
</template>
<script>
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
import { getMemberList } from "@/api/test";
export default {
  // 組件參數 接收來自父組件的數據
  props: {},
  // 局部注冊的組件
  components: {},
  data() {
    return {
      testData: [],
      cboBelongArea: "0001",
      cboBelongArea2: "A區",
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
      })
      return map;
    },
    findArea() {
      const newMap = dataArr.filter((item) => item.value ===  this.cboBelongArea)[0]['children']
      return newMap;
    }
  },
  // 偵聽器
  watch: {
    cboBelongArea: {
      handler() {
        const newVal = dataArr.filter((item) => item.value ===  this.cboBelongArea)[0]['children'][0];
        this.cboBelongArea2 = newVal;
      },
      deep: true
    }
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
  },
};
</script>
<style lang="scss" scoped></style>
