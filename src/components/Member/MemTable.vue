<template>
  <div class="q-pa-md">
    <q-table :data="tableData" :columns="tableColumn" :row-key="rowKey">
      <!-- 頭部 -->
      <template v-slot:top="props">
        <div class="col-4 q-table__title">{{ tabTitle }}</div>
        <q-space />
        <q-btn color="primary" label="新增會員" @click="openDialog('add')" />

        <!-- <q-btn class="q-ml-sm" color="primary" label="進階搜尋" /> -->
      </template>
      <!-- table 表頭 -->
      <q-tr slot="header" slot-scope="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
        <q-th auto-width>
          操作
        </q-th>
      </q-tr>
      <template v-slot:body="props">
        <q-tr :props="props" :key="props.row.index">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
          <q-td>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                size="small"
                color="amber"
                label="修改"
                @click="checkIsMember(props.row)"
              />
              <q-btn
                size="small"
                style="color: white;background: red;"
                label="刪除"
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <!-- 新增 -->
    <q-dialog v-model="showCheckDialog">
      <q-card style="width: 700px; max-width: 80vw;">
        <template v-if="tabTitle==='家族會員'">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ diagleMethod }}家族成員</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section style="padding-bottom:0px;">
            <el-form
              class=""
              style=""
              ref="form"
              :inline="true"
              :model="checkMemForm"
              label-width="100px"
            >
              <el-form-item label="親屬姓名">
                <el-input v-model="checkMemForm.f_name"></el-input>
              </el-form-item>
              <el-form-item label="親屬電話號碼">
                <el-input
                  v-model="checkMemForm.f_phone"
                ></el-input> </el-form-item
              ><el-form-item>
                <el-button
                  type="primary"
                  @click="checkIsMember((id = 0))"
                  style="margin-right:0;"
                  >查詢會員</el-button
                >
              </el-form-item></el-form
            >
          </q-card-section>

          <q-card-section v-show="checkedAns" style="padding-top:0px;">
            <el-divider content-position="center">檢查結果</el-divider>
            <el-form
              class=""
              style=""
              ref="form"
              :inline="true"
              :model="familyForm"
              label-width="100px"
            >
              <el-form-item label="親屬姓名">
                <el-input v-model="familyForm.f_name" readonly></el-input>
              </el-form-item>
              <el-form-item label="親屬電話號碼">
                <el-input v-model="familyForm.f_phone" readonly></el-input>
              </el-form-item>
              <el-form-item label="是否入信">
                <el-input v-model="familyForm.f_isin" readonly></el-input>
              </el-form-item>
              <el-form-item label="會員編號">
                <el-input v-model="familyForm.f_mcode" readonly></el-input>
              </el-form-item>
              <el-form-item label="所屬區域">
                <el-input v-model="familyForm.area" readonly></el-input>
              </el-form-item>
              <el-form-item label="稱謂">
                <el-input v-model="familyForm.f_nickedname"></el-input>
              </el-form-item>
              <el-form-item label="備註">
                <el-input
                  type="textarea"
                  v-model="familyForm.note"
                  :autosize="{ minRows: 2, maxRows: 4 }"
                  style="width:500px;"
                ></el-input>
              </el-form-item>
              <el-form-item
                style="display:flex; align-item:center;justify-content:center;"
              >
                <el-button type="warning" @click="handleCancle">取消</el-button>
                <el-button type="primary" @click="handleSave">保存</el-button>
              </el-form-item>
            </el-form>
          </q-card-section>
        </template>
        <template v-else-if="tabTitle==='會員學歷'">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ diagleMethod }}會員學歷</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
        </template>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
const areaArr = [
  { areaId: 1, areaName: "建國組" },
  { areaId: 2, areaName: "忠孝組" },
  { areaId: 3, areaName: "仁愛組" },
  { areaId: 4, areaName: "信義組" },
];
const departmentArr = [
  { departmentId: 1, departmentName: "兒童部" },
  { departmentId: 2, departmentName: "壯年部" },
  { departmentId: 3, departmentName: "男子部" },
  { departmentId: 4, departmentName: "女子部" },
];
const jobTitleArr = [
  { jobId: 1, jobName: "組長" },
  { jobId: 2, jobName: "副組長" },
  { jobId: 3, jobName: "區長" },
  { jobId: 4, jobName: "區專員" },
];
const statusArr = [
  { statusId: 1, statusName: "活跳跳" },
  { statusId: 2, statusName: "歿/死亡" },
  { statusId: 3, statusName: "移民/出國工作" },
];
export default {
  // 組件參數 接收來自父組件的數據
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableColumn: {
      type: Array,
      required: true,
    },
    showMultiSelect: {
      type: Boolean,
      required: true,
    },
    rowKey: {
      type: String,
      required: true,
    },
    tabTitle: {
      type: String,
      required: true,
    },
  },
  // 局部注冊的組件
  components: {},
  data() {
    return {
      //
      selected: [],
      showCheckDialog: false, // 是否顯示彈窗
      diagleMethod: "",
      checkMemForm: {
        f_name: "",
        f_phone: "",
      },
      familyForm: {
        f_name: "",
        f_phone: "",
        f_isin: "否",
        f_mcode: "",
        area: "",
        f_nickedname: "",
        note: "",
      },
      checkedAns: false,
    };
  },
  created() {},
  // 計算屬性
  computed: {},
  // 偵聽器
  watch: {},
  // 組件方法
  methods: {
    //
    openDialog(type) {
      if (type == "add") {
        this.diagleMethod = "新增";
        this.showCheckDialog = true;
      }
      if (type == "edit") {
        this.diagleMethod = "修改";
        this.showCheckDialog = true;
      }
    },
    // 確定是否為會員
    checkIsMember(mem) {
      // call api => 是與不是會員
      // getMemCheckApi().then......

      if (!mem) {
        // 新增
        console.log("新增mem=>", mem);
        this.setDetail((status = 0), mem); // 不是
      } else {
        // 修改
        this.openDialog("edit");

        console.log("修改mem=>", mem);

        this.setDetail((status = mem.f_isin), mem);
      }
    },
    // 之後會開api 去接
    setDetail(status, mem) {
      this.checkedAns = true;
      if (mem) {
        this.checkMemForm.f_name = mem.f_name;
        this.checkMemForm.f_phone = mem.f_phone;
      }
      this.familyForm.f_name = mem ? mem.f_name : this.checkMemForm.f_name;
      this.familyForm.f_phone = mem ? mem.f_phone : this.checkMemForm.f_phone;
      this.familyForm.f_isin = status ? "是" : "否";
      this.familyForm.f_mcode = mem ? mem.f_mcode : "";
      this.familyForm.area = mem ? mem.area : "";
      this.familyForm.f_nickedname = mem ? mem.f_nickedname : "";
    },
    resetDetail() {
      this.checkMemForm.f_name = "";
      this.checkMemForm.f_phone = "";
      this.familyForm.f_name = "";
      this.familyForm.f_phone = "";
      this.familyForm.f_isin = "否";
      this.familyForm.f_mcode = "";
      this.familyForm.area = "";
      this.familyForm.f_nickedname = "";
      this.familyForm.note = "";
    },
    // 保存
    handleSave() {
      /** call Api */
      console.log("Call Api");
      this.resetDetail();
      this.showCheckDialog = false;
      this.checkedAns = false;
    },
    // 取消
    handleCancle() {
      this.resetDetail();
      this.showCheckDialog = false;
      // this.setDetail((status = 0));
      this.checkedAns = false;
    },
  },
  filters: {
    transformById(val, colName) {
      switch (colName) {
        case "areaArr":
          let areaObj = areaArr.filter((obj) => obj.areaId === val)[0];
          return areaObj.areaName;
        case "departmentArr":
          let departmentObj = departmentArr.filter(
            (obj) => obj.departmentId === val
          )[0];
          return departmentObj.departmentName;
        case "jobTitleArr":
          let jobObj = jobTitleArr.filter((obj) => obj.jobId === val)[0];
          return jobObj.jobName;
        case "statusArr":
          let statusObj = statusArr.filter((obj) => obj.statusId === val)[0];
          return statusObj.statusName;
      }
    },
    noDataFormat(val) {
      return val ? val : "-";
    },
    endDateFormat(val) {
      return val ? val : "-";
    },
  },
};
</script>
<style lang="scss" scoped>
input[readonly] {
  background-color: (可根据需要改颜色);
}
.this {
  border: 1px solid red;
}
</style>
