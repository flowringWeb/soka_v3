<script>
import ComPagination from "@/components/Common/form/ComPagination";
export default {
  name: "BthStuDiff",
  components: { ComPagination },
  data() {
    return {
      selected: [],
      //批次學生部別異動
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
          memberCode: "2000134",
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
      //會員部別變更
      memDeptDiffColumns: [
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
          name: "age",
          label: "年齡",
          align: "center",
          field: "age",
        },
        {
          name: "groupAfter",
          label: "異動後組別",
          field: "groupAfter",
          align: "center",
        },
        {
          name: "deptBefore",
          label: "現在部別",
          field: "deptBefore",
          align: "center",
        },
        {
          name: "deptAfter",
          label: "異動後部別",
          field: "deptAfter",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      memDeptData: [
        {
          memberCode: "test",
          memberName: "test",
          age: "12",
          groupAfter: "a組",
          deptBefore: "男子部",
          deptAfter: "壯",
          note: "",
        },
      ],
      groupAfter_options: ["a組", "b組"],
      deptAfter_options: ["壯", "婦"],
      //dialog
      txtVersion: "",
      startDate: "1988/01/01",
      distNoLive: "",
      distNoLive_options: [],
      moveOut: "",
      moveOut_options: [],
      //dialog-通訊地址
      mailingPostalCode: "",
      mailingCity: "",
      mailingCity_options: ["請選擇", "台北市", "新北市"],
      mailingDistirct: "",
      mailingDistirct_options: ["請選擇", "汐止區", "新店區"],
      mallingStreetAddress: "",
      theSameWithMailing: false,
      //pagination
      page: {
        pageSize: 20,
        currentPage: 1,
        totalNum: 140,
      },
    };
  },
  methods: {
    // Pagination
    changeCurrentPage(e) {
      // 重新call api
      console.log("changeCurrentPage=>", e);
    },
  },
};
</script>
<template>
  <div class="q-pa-md">
    <q-table
      title="部別變更"
      :columns="memDeptDiffColumns"
      :data="memDeptData"
      row-key="memberCode"
      selection="multiple"
      :selected.sync="selected"
      class="q-mb-md"
    >
      <template v-slot:body-cell-groupAfter="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.groupAfter"
            :options="groupAfter_options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-deptAfter="props">
        <q-td :props="props" auto-width>
          <q-select
            outlined
            dense
            v-model="props.row.deptAfter"
            :options="deptAfter_options"
          />
        </q-td>
      </template>
      <template v-slot:pagination>
        <com-pagination
          v-model="page.currentPage"
          :page-size="page.pageSize"
          :total-num="page.totalNum"
          @input="changeCurrentPage"
        ></com-pagination>
      </template>
    </q-table>
    <q-table
      title="批次學生異動"
      :columns="bthStuDiffColumns"
      :data="bthStuDiffData"
      row-key="memberCode"
      selection="multiple"
      :selected.sync="selected"
      class="q-mb-md"
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
      <template v-slot:pagination>
        <com-pagination
          v-model="page.currentPage"
          :page-size="page.pageSize"
          :total-num="page.totalNum"
          @input="changeCurrentPage"
        ></com-pagination>
      </template>
    </q-table>
    <div class="flex justify-center q-gutter-x-md">
      <q-btn label="送出" color="primary" />
      <q-btn label="取消" color="primary" />
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
            <div class="row q-col-gutter-x-sm q-col-gutter-md q-py-sm">
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
              <div class="row justify-start items-center q-col-gutter-md">
                <div class="col-6 col-md-4">
                  <q-input
                    id="mailingPostalCode"
                    type="text"
                    outlined
                    dense
                    v-model="mailingPostalCode"
                    :label="$q.screen.lt.sm ? '郵遞區號' : void 0"
                    placeholder=""
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="mailingPostalCode">
                        <span class="required">＊</span>異動前通訊地址:
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-select
                    id="mailingCity"
                    outlined
                    dense
                    emit-value
                    v-model="mailingCity"
                    :label="$q.screen.lt.sm ? '縣市' : void 0"
                    :options="mailingCity_options"
                  >
                  </q-select>
                </div>
                <div class="col-6 col-md-2">
                  <q-select
                    id="mailingDistirct"
                    outlined
                    dense
                    emit-value
                    v-model="mailingDistirct"
                    :label="$q.screen.lt.sm ? '地區' : void 0"
                    :options="mailingDistirct_options"
                  >
                  </q-select>
                </div>
                <div class="col-6 col-md-4">
                  <q-input
                    id="mallingStreetAddress"
                    type="text"
                    outlined
                    dense
                    emit-value
                    v-model="mallingStreetAddress"
                    :label="$q.screen.lt.sm ? '路段' : void 0"
                    placeholder="請輸入街道門牌"
                  >
                  </q-input>
                </div>
              </div>
              <div class="row justify-start items-center q-col-gutter-md">
                <div class="col-6 col-md-4">
                  <q-input
                    id="mailingPostalCode"
                    type="text"
                    outlined
                    dense
                    v-model="mailingPostalCode"
                    :label="$q.screen.lt.sm ? '郵遞區號' : void 0"
                    placeholder=""
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="mailingPostalCode"> 異動後通訊地址: </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-select
                    id="mailingCity"
                    outlined
                    dense
                    emit-value
                    v-model="mailingCity"
                    :label="$q.screen.lt.sm ? '縣市' : void 0"
                    :options="mailingCity_options"
                  >
                  </q-select>
                </div>
                <div class="col-6 col-md-2">
                  <q-select
                    id="mailingDistirct"
                    outlined
                    dense
                    emit-value
                    v-model="mailingDistirct"
                    :label="$q.screen.lt.sm ? '地區' : void 0"
                    :options="mailingDistirct_options"
                  >
                  </q-select>
                </div>
                <div class="col-6 col-md-4">
                  <q-input
                    id="mallingStreetAddress"
                    type="text"
                    outlined
                    dense
                    emit-value
                    v-model="mallingStreetAddress"
                    :label="$q.screen.lt.sm ? '路段' : void 0"
                    placeholder="請輸入街道門牌"
                  >
                  </q-input>
                </div>
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
                  :label="$q.screen.lt.sm ? '異動後電話(公司)' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 異動後電話(公司): </label>
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
              <div class="col-6 col-md-6">
                <q-input
                  id="txtVersion"
                  type="text"
                  outlined
                  dense
                  v-model="txtVersion"
                  :label="$q.screen.lt.sm ? '異動後Email' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 異動後Email: </label>
                  </template>
                </q-input>
              </div>
              <div class="row">
                <div class="items-center">
                  <label v-if="$q.screen.gt.xs">異動後戶籍地址: </label>
                  <q-checkbox
                    v-model="theSameWithMailing"
                    label="同異動後通訊地址"
                    size="xs"
                  />
                </div>
              </div>
              <div class="row justify-start items-center q-col-gutter-md">
                <div class="col-6 col-md-4">
                  <q-input
                    id="mailingPostalCode"
                    type="text"
                    outlined
                    dense
                    v-model="mailingPostalCode"
                    :label="$q.screen.lt.sm ? '郵遞區號' : void 0"
                    placeholder=""
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="residentPostalCode">
                        <span class="invisible">異動後戶籍地址: </span>
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-select
                    id="mailingCity"
                    outlined
                    dense
                    emit-value
                    v-model="mailingCity"
                    :label="$q.screen.lt.sm ? '縣市' : void 0"
                    :options="mailingCity_options"
                  >
                  </q-select>
                </div>
                <div class="col-6 col-md-2">
                  <q-select
                    id="mailingDistirct"
                    outlined
                    dense
                    emit-value
                    v-model="mailingDistirct"
                    :label="$q.screen.lt.sm ? '地區' : void 0"
                    :options="mailingDistirct_options"
                  >
                  </q-select>
                </div>
                <div class="col-6 col-md-4">
                  <q-input
                    id="mallingStreetAddress"
                    type="text"
                    outlined
                    dense
                    emit-value
                    v-model="mallingStreetAddress"
                    :label="$q.screen.lt.sm ? '路段' : void 0"
                    placeholder="請輸入街道門牌"
                  >
                  </q-input>
                </div>
              </div>
              <div class="col-6 col-md-6">
                <q-select
                  id="distNoLive"
                  outlined
                  dense
                  emit-value
                  v-model="distNoLive"
                  :label="$q.screen.lt.sm ? '戶籍區' : void 0"
                  :options="distNoLive_options"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="distNoLive"> 戶籍區: </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-6">
                <q-select
                  id="moveOut"
                  outlined
                  dense
                  emit-value
                  v-model="moveOut"
                  :label="$q.screen.lt.sm ? '遷移原因' : void 0"
                  :options="moveOut_options"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="moveOut"> 遷移原因: </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-6">
                <q-input
                  id="txtVersion"
                  type="text"
                  outlined
                  dense
                  v-model="txtVersion"
                  :label="$q.screen.lt.sm ? '備註' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtVersion"> 備註: </label>
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
<style lang="scss" scoped>
label {
  color: #000;
  font-size: 14px;
}
.required {
  color: red;
}
</style>