<script>
export default {
  name: "Member-search",
  data() {
    return {
      //form
      level: "層級",
      levelWay: "是",
      TwsgiMail: false,
      ageNum: 20,
      ageNum2: 30,
      telNumber: "0911111111",
      email: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
    handleAgeNum(val) {
      console.log(val);
    },
  },
  computed: {},
  created() {},
};
</script>
<template>
  <!-- <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            v-model="cboConfidenceBg"
            :label="$q.screen.lt.sm ? '信心背景' : void 0"
            :options="cboConfidenceBg_options.arr"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class="">
                信心背景:
              </label>
            </template>
          </q-select> -->
  <div class="q-pa-md">
    <div>查詢</div>
    <q-form @submit="onSubmit">
      <div class="row justify-start items-center q-col-gutter-md q-py-md">
        <div class="col-6 col-md-4">
          <div class="flex q-gutter-md">
            <q-select
              id="level"
              class="level"
              outlined
              dense
              emit-value
              v-model="level"
              :label="$q.screen.lt.sm ? '層級' : void 0"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="level"> 層級: </label>
              </template>
            </q-select>
            <q-select
              id="levelWay"
              class="level--way"
              outlined
              dense
              emit-value
              v-model="levelWay"
              :label="$q.screen.lt.sm ? '層級方式' : void 0"
            >
            </q-select>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="flex q-gutter-md">
            <q-select
              id="teachQual"
              class="level"
              outlined
              dense
              emit-value
              :label="$q.screen.lt.sm ? '教學資格' : void 0"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="teachQual" class=""> 教學資格: </label>
              </template>
            </q-select>
            <q-select
              id="teachQualWay"
              class="level--way"
              outlined
              dense
              emit-value
              v-model="levelWay"
              :label="$q.screen.lt.sm ? '教學資格方式' : void 0"
            >
            </q-select>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '認證資格' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 認證資格: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '研修紀錄' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 研修紀錄: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '授獎記錄' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 授獎記錄: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '御本尊' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 御本尊: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '部別' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 部別: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '學生部別' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 學生部別: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '人才單位' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 人才單位: </label>
            </template>
          </q-select>
        </div>

        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '會員姓名' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 會員姓名: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            emit-value
            :label="$q.screen.lt.sm ? '會員類型' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 會員類型: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-input
            id=""
            type=""
            outlined
            dense
            :label="$q.screen.lt.sm ? '會員編號' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for=""> 會員編號: </label>
            </template>
          </q-input>
        </div>

        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            :label="$q.screen.lt.sm ? '所屬區域' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 所屬區域: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            :label="$q.screen.lt.sm ? '組織職務' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 組織職務: </label>
            </template>
          </q-select>
        </div>
        <div class="col-6 col-md-4">
          <q-select
            id="cboConfidenceBg"
            outlined
            dense
            :label="$q.screen.lt.sm ? '人才單位職務' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="cboConfidenceBg" class=""> 人才單位職務: </label>
            </template>
          </q-select>
        </div>

        <div class="col-6 col-md-8">
          <div class="flex items-center">
            <label for="" class="q-mr-sm">年紀:</label>
            <el-input-number
              id=""
              style="flex: 1 0 auto"
              v-model="ageNum"
              @change="handleAgeNum"
              :min="1"
              :max="70"
            ></el-input-number>
            <span class="q-mx-md">~</span>
            <el-input-number
              id=""
              style="flex: 1 0 auto"
              v-model="ageNum2"
              @change="handleAgeNum"
              :min="1"
              :max="70"
            ></el-input-number>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <q-input
            id="introducerTel"
            type="tel"
            outlined
            dense
            :label="$q.screen.lt.sm ? '電話' : void 0"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="introducerTel" class="font-s-size"> 電話:　 </label>
            </template>
          </q-input>
        </div>
        <div class="col-6 col-md-4">
          <div class="flex items-center">
            <q-input
              style="flex: 1 0 auto"
              id="email"
              type="email"
              outlined
              dense
              v-model="email"
              :label="$q.screen.lt.sm ? 'Email' : void 0"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="email"> Email: </label>
              </template>
            </q-input>
            <q-checkbox v-model="TwsgiMail" label="TWSGI 信箱" size="xs" />
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>
<style lang="scss" scoped>
.level {
  flex: 2 0 auto;
  &--way {
    flex: 1 0 auto;
  }
}
label {
  color: #000;
  font-size: 14px;
}
</style>