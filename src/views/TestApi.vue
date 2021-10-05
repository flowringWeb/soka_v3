<template>
  <div class="" style="">
    {{ testData }}
    <q-table
      title="批次學生異動"
      :columns="bthStuDiffColumns"
      :data="bthStuDiffData"
      row-key="name"
    >
      <template v-slot:body-cell-eduCode="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.eduCode"
            :options="eduCode_options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-stuDepartDiff="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.stuDepartDiff"
            :options="stuDepartDiff_options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-comingScoolName="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.comingScoolName"
            :options="comingScoolName_options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-collegeAssociation="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.collegeAssociation"
            :options="collegeAssociation_options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-enrollDate="props">
        <q-td :props="props">
          <q-input
            outlined
            dense
            v-model="props.row.enrollDate"
            mask="date"
            style="min-width: 10vw"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="props.row.enrollDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="確認" color="primary" />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-td>
      </template>
      <template v-slot:body-cell-gradeStatusDiff="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.gradeStatusDiff"
            :options="gradeStatusDiff_options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-graduateStatusDiff="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.graduateStatusDiff"
            :options="graduateStatusDiff_options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-isMoveOut="props">
        <q-td :props="props" auto-width>
          <q-checkbox v-model="props.row.isMoveOut" />
        </q-td>
      </template>
      <template v-slot:body-cell-isMoveOutDataEdit="props">
        <q-td :props="props" auto-width>
          <q-btn
            round
            size="xs"
            color="primary"
            :disable="props.row.isMoveOutDataEdit"
            icon="edit"
            @click="isMoveOutData = true"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-isMoveOutDateDone="props">
        <q-td :props="props" auto-width>
          <span
            :style="
              props.row.isMoveOutDateDone == '未填' ? 'color:#ff0000' : ''
            "
          >
            {{ props.row.isMoveOutDateDone }}
          </span>
        </q-td>
      </template>
      <!-- Pagination -->
      <template v-slot:pagination>
        <com-pagination
          v-model="page.currentPage"
          :page-size="page.pageSize"
          :total-num="page.totalNum"
          @input="changeCurrentPage"
        ></com-pagination>
      </template>
    </q-table>
    <q-btn label="送出" color="primary" />
    <q-btn label="取消" color="primary" />
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
    <div class="row">
      <div class="col-6">
        <q-input
          id="memberName"
          type="text"
          outlined
          dense
          v-model="$v.memberName.$model"
          :label="$q.screen.lt.sm ? '會員姓名驗證' : void 0"
          :class="{ 'form-group--error': $v.memberName.$error }"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="memberName">
              <span class="required">＊</span>會員姓名驗證:
            </label>
          </template>
        </q-input>
        <div class="error" v-if="!$v.memberName.required">必填欄位</div>
        <div class="error" v-if="!$v.memberName.maxLength">
          請輸入不超過
          {{ $v.memberName.$params.maxLength.max }} 個字
        </div>
      </div>
      <div class="col-6 col-md-4">
        <q-input
          type="tel"
          outlined
          dense
          v-model.trim="$v.tel.$model"
          :label="$q.screen.lt.sm ? '電話' : void 0"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="" class=""> 電話: </label>
          </template>
        </q-input>
        <div>EX: 0912345678</div>
        <div class="error" v-if="!$v.tel.required">必填欄位</div>
        <div class="error" v-if="!$v.tel.phone || !$v.tel.maxLength">
          請輸入正確的手機號碼格式
        </div>
      </div>
    </div>

    <!-- dialog-遷出資料 -->
    <q-dialog v-model="isMoveOutData">
      <q-card
        style="
          width: 700px;
          max-width: 80vw;
          border-radius: 4px;
          background-color: #fff;
        "
      >
        <q-form>
          <q-card-section>
            <div class="text-h6">遷出資料填寫</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-x-sm q-col-gutter-y-sm q-py-sm">
              <div class="col-6 col-md-6">
                <q-input
                  id="txtVersion"
                  type="text"
                  outlined
                  dense
                  v-model="txtVersion"
                  :label="$q.screen.lt.sm ? '會員代碼' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 會員代碼: </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-6">
                <q-input
                  id="txtVersion"
                  type="text"
                  outlined
                  dense
                  v-model="txtVersion"
                  :label="$q.screen.lt.sm ? '會員名稱' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 會員名稱: </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-6">
                <q-input
                  id="txtVersion"
                  type="text"
                  outlined
                  dense
                  v-model="txtVersion"
                  :label="$q.screen.lt.sm ? '類別' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 類別: </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-6">
                <q-input
                  id="bornDate"
                  class="q-pb-none"
                  outlined
                  dense
                  :label="$q.screen.lt.sm ? '開始日期' : void 0"
                  hide-bottom-space
                  v-model="startDate"
                  mask="date"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="bornDate"> 開始日期: </label>
                  </template>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="startDate">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="確認" color="primary" />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-6">
                <q-input
                  id="txtVersion"
                  type="text"
                  outlined
                  dense
                  v-model="txtVersion"
                  :label="$q.screen.lt.sm ? '異動後電話(手機)' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 異動後電話(手機): </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-6">
                <q-input
                  id="txtVersion"
                  type="text"
                  outlined
                  dense
                  v-model="txtVersion"
                  :label="$q.screen.lt.sm ? '異動後電話(住宅)' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 異動後電話(住宅): </label>
                  </template>
                </q-input>
              </div>
            </div>
          </q-card-section>
          <q-card-actions class="flex justify-center">
            <q-btn color="primary" label="送出" size="small" />
            <q-btn color="primary" label="取消" size="small" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { required, maxLength, helpers } from "vuelidate/lib/validators";
import { getMemberList } from "@/api/test";
var phone = helpers.regex("phoneNumber", /\d{4}\d{3}\d{3}/);
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
      bProxyDate: "",
      memberName: "王曉明",
      tel: "0912345678",
      model: "facebook",
      bthStuDiffColumns: [
        {
          name: "memberCode",
          align: "center",
          label: "會員編號",
          field: "memberCode",
        },
        {
          name: "memberName",
          label: "姓名",
          align: "center",
          field: "memberName",
        },
        {
          name: "stuDepartment",
          label: "學生部別",
          align: "center",
          field: "stuDepartment",
        },
        {
          name: "currScoolName",
          label: "目前就讀學校",
          field: "currScoolName",
          align: "center",
        },
        {
          name: "grade",
          label: "年級",
          field: "grade",
          align: "center",
        },
        {
          name: "graduate",
          label: "畢業",
          field: "graduate",
          align: "center",
        },
        {
          name: "eduCode",
          label: "學歷代碼(升學)",
          field: "eduCode",
          align: "center",
        },
        {
          name: "stuDepartDiff",
          label: "學生部別異動",
          align: "center",
          field: "stuDepartDiff",
        },
        {
          name: "comingScoolName",
          label: "學校(升學)",
          align: "center",
          field: "comingScoolName",
        },
        {
          name: "collegeAssociation",
          label: "大學會",
          align: "center",
          field: "collegeAssociation",
        },
        {
          name: "enrollDate",
          label: "入學日期",
          align: "center",
          field: "enrollDate",
        },
        {
          name: "gradeStatusDiff",
          label: "年級狀態異動",
          align: "center",
          field: "gradeStatusDiff",
        },
        {
          name: "graduateStatusDiff",
          label: "畢業狀態異動",
          align: "center",
          field: "graduateStatusDiff",
        },
        {
          name: "isMoveOut",
          label: "是否遷出",
          field: "isMoveOut",
          align: "center",
        },
        {
          name: "isMoveOutDataEdit",
          label: "遷出資料填寫",
          align: "center",
          field: "isMoveOutDataEdit",
        },
        {
          name: "isMoveOutDateDone",
          label: "遷出資料是否完成",
          align: "center",
          field: "isMoveOutDateDone",
        },
      ],
      bthStuDiffData: [
        {
          memberCode: "2000123",
          memberName: "王曉明",
          stuDepartment: "大學",
          currScoolName: "xx高中",
          grade: "7",
          graduate: "在學",
          eduCode: "國中",
          stuDepartDiff: "",
          comingScoolName: "",
          collegeAssociation: "",
          enrollDate: "1989/01/01",
          gradeStatusDiff: "",
          graduateStatusDiff: "",
          isMoveOut: true,
          isMoveOutDataEdit: true,
          isMoveOutDateDone: "完成",
        },
        {
          memberCode: "2000123",
          memberName: "小玉",
          stuDepartment: "高中",
          currScoolName: "xx高中",
          grade: "10",
          graduate: "在學",
          eduCode: "高中",
          stuDepartDiff: "未來部",
          comingScoolName: "",
          collegeAssociation: "",
          enrollDate: "1989/01/10",
          gradeStatusDiff: "",
          graduateStatusDiff: "在學",
          isMoveOut: false,
          isMoveOutDataEdit: false,
          isMoveOutDateDone: "未填",
        },
      ],
      eduCode_options: ["國小", "國中", "高中", "大學", "碩士", "博士"],
      stuDepartDiff_options: [
        "未來部",
        "國中部",
        "高中部",
        "大學部",
        "研究生部",
      ],
      comingScoolName_options: ["xx國小", "xx國小", "xx國小", "xx國小"],
      collegeAssociation_options: [
        "xx大學會",
        "xx大學會",
        "xx大學會",
        "xx大學會",
      ],
      gradeStatusDiff_options: ["1", "2", "3"],
      graduateStatusDiff_options: ["在學", "畢業"],
      isMoveOutData: false,
      //dialog
      txtVersion: "aa",
      startDate: "1988/01/01",
      //pagination
      page: {
        pageSize: 20,
        currentPage: 1,
        totalNum: 140,
      },
    };
  },
  validations: {
    memberName: {
      required,
      maxLength: maxLength(3),
    },
    tel: {
      required,
      phone,
      maxLength: maxLength(10),
    },
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
    // Pagination
    changeCurrentPage(e) {
      // 重新call api
      console.log("changeCurrentPage=>", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  display: block;
  color: #f57f6c;
}
label {
  color: #000;
  font-size: 14px;
}
</style>
