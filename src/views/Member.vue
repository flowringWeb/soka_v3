<script>
import {
  getMemberList,
  getMemberFamilyList,
  getMemberEduList,
} from "@/api/member.js";
import MemTable from "@/components/Member/MemTable";

export default {
  name: "Member",
  components: { MemTable },
  data() {
    return {
      //tab
      tab: "m_data",
      // editor
      editor: "測試",
      definitions: {
        bold: {
          label: "Bold",
          icon: null,
          tip: "My bold tooltip",
        },
      },
      //dialog-uploadImg
      uploadImg: false,

      txtVersion: 2,
      txtVersionDate: "2010/08/09",
      txtVersionState: "修改第6條",
      //form
      memberName: "",
      associationTitle: "",
      bornDate: "",
      cboBelongArea: "",
      cboBelongArea_options: [],
      cboBelongArea2: "",
      cboBelongArea2_options: [],
      sex: "",
      sex_options: [],
      stuDepartment: "",
      stuDepartment_options: [],
      memType: "",
      memType_options: [],
      distNoLive: "",
      distNoLive_options: [],
      department: "",
      department_options: [],
      lastName: "",
      firstName: "",
      telNumber: "",
      mobileNumber: "",
      businessNumber: "",
      cboFirstContact: "",
      cboFirstContact_options: [],
      email: "",
      googleNumber: "",
      companyName: "",
      highestEducation: "",
      jobTitle: "",
      teacherQualification: "",
      profession: "",
      highestJob: "",
      cboSpecialty: "",
      cboSpecialty_options: [],
      finalJob: "",
      incomingDate: "",
      cboConfidenceBg: "",
      cboConfidenceBg_options: [],
      cboActiveTimes: "",
      cardNumber: "",
      introducerName: "",
      introducerTel: "",
      introducerDepartment: "",
      introducerArea: "",
      countGradeArea: "",
      countGradeArea_options: [],
      countGradeDepartment: "",
      noIncludedReason: "",
      noIncludedReason_options: [],
      noIncludedReason2: "",
      noIncludedQuestion: "",
      noIncludedQuestion_options: [],
      endDate: "",
      note: "",
      //通訊地址
      mailingPostalCode: "",
      mailingCity: "",
      mailingCity_options: ["請選擇", "台北市", "新北市"],
      mailingDistirct: "",
      mailingDistirct_options: ["請選擇", "汐止區", "新店區"],
      mallingStreetAddress: "",
      //戶籍地址
      theSameWithMailing: false,
      residentPostalCode: "",
      residentCity: "",
      residentCity_options: ["請選擇", "台北市", "新北市"],
      residentDistirct: "",
      residentDistirct_options: ["請選擇", "汐止區", "新店區"],
      residentStreetAddress: "",
      
      /**
       * 表格字段要與資料庫資段相同。
       * */
      // 會員家族
      form: {
        memberName: "",
        area: "",
        mobile: "",
        address: "",
        email: "",
        birthday: "",
        department: "",
        orgJobTitle: "",
        departmentStu: "",
        grade: "",
        schoolNow: "",
        unitTitle: "",
        status: "",
        endDate: "",
      },
      familyColumns: [
        {
          name: "memberCode",
          align: "center",
          label: "會員編號",
          field: "memberCode",
          sortable: true,
        },
        {
          name: "memberName",
          label: "姓名",
          align: "center",
          field: "memberName",
          style: "width: 10px",
        },
        {
          name: "area",
          label: "所屬區域",
          align: "center",
          field: "area",
          format: (val, row) =>
            areaArr.filter((obj) => obj.areaId === val)[0].areaName,
        },
        { name: "mobile", label: "電話", field: "mobile", align: "center" },
        { name: "address", label: "地址", field: "address", align: "center" },
        {
          name: "email",
          label: "E-mail",
          field: "email",
          align: "center",
        },
        {
          name: "birthday",
          label: "生日",
          field: "birthday",
          align: "center",
        },
        {
          name: "department",
          label: "部別",
          align: "center",
          field: "department",
          format: (val, row) =>
            departmentArr.filter((obj) => obj.departmentId === val)[0]
              .departmentName,
        },
        {
          name: "orgJobTitle",
          label: "組織職務",
          align: "center",
          field: "orgJobTitle",
          format: (val, row) =>
            jobTitleArr.filter((obj) => obj.jobId === val)[0].jobName,
        },
        {
          name: "departmentStu",
          label: "學生部別",
          align: "center",
          field: "departmentStu",
        },
        {
          name: "grade",
          label: "年級",
          align: "center",
          field: "grade",
        },
        {
          name: "schoolNow",
          label: "目前就讀學校",
          align: "center",
          field: "schoolNow",
        },
        {
          name: "unitTitle",
          label: "人才單位職務",
          align: "center",
          field: "unitTitle",
        },
        {
          name: "status",
          label: "狀態",
          field: "status",
          align: "center",
        },
        {
          name: "endDate",
          label: "結束日期",
          align: "center",
          field: "endDate",
        },
      ],
      fullMemData: [],
      // 會員家族
      familyColumns: [
        {
          name: "f_name",
          align: "center",
          label: "親屬姓名",
          field: "f_name",
        },
        {
          name: "f_phone",
          label: "親屬電話號碼",
          align: "center",
          field: "f_phone",
          style: "width: 10px",
        },
        {
          name: "f_nickedname",
          label: "稱謂(代碼)",
          align: "center",
          field: "f_nickedname",
          // format: (val, row) =>
          //   areaArr.filter((obj) => obj.areaId === val)[0].areaName,
        },
        {
          name: "f_mcode",
          label: "親屬會員編號",
          field: "f_mcode",
          align: "center",
        },
        { name: "f_isin", label: "是否入信", field: "f_isin", align: "center" },
        {
          name: "area",
          label: "所屬區域",
          field: "area",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      familyData: [],
      // 會員學歷
      eduColumns: [
        {
          name: "level",
          label: "學歷",
          field: "level",
          align: "center",
        },
        {
          name: "title",
          label: "學校名稱",
          field: "title",
          align: "center",
        },
        {
          name: "team",
          label: "大學會",
          field: "team",
          align: "center",
        },
        {
          name: "department",
          label: "科系",
          field: "department",
          align: "center",
        },
        {
          name: "grade",
          label: "年級",
          field: "grade",
          align: "center",
        },
        {
          name: "started_date",
          label: "入學日期",
          field: "started_date",
          align: "center",
        },
        {
          name: "ended_date",
          label: "預計畢業日期",
          field: "ended_date",
          align: "center",
        },
        {
          name: "is_graduated",
          label: "是否畢業",
          field: "is_graduated",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      eduData: [],
      // 教學資格
      teachingColumns:[
        {
          name: "qualification ",
          label: "教學資格",
          field: "qualification ",
          align: "center",
        },
        {
          name: "name",
          label: "考試名稱",
          field: "name",
          align: "center",
        },
        {
          name: "date",
          label: "考試日期",
          field: "date",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      teachingData:[],
      //認證紀錄
      certiRecordColumns:[
        {
          name: "certification",
          label: "認證資格",
          field: "certification",
          align: "center",
        },
        {
          name: "name",
          label: "認證名稱",
          field: "name",
          align: "center",
        },
        {
          name: "date",
          label: "認證日期",
          field: "date",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      certiRecordData:[],
      // 研修紀錄
      trainingColumns:[
        {
          name: "name",
          label: "研修名稱",
          field: "name",
          align: "center",
        },
        {
          name: "session",
          label: "場次",
          field: "session",
          align: "center",
        },
        {
          name: "location",
          label: "地點",
          field: "location",
          align: "center",
        },
        {
          name: "started_date",
          label: "開始日期",
          field: "started_date",
          align: "center",
        },
        {
          name: "ended_date",
          label: "結束日期",
          field: "ended_date",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      trainingData:[],
      //授獎記錄
      awardColumns:[
        {
          name: "name",
          label: "授獎名稱",
          field: "name",
          align: "center",
        },
        {
          name: "code",
          label: "授獎代號",
          field: "code",
          align: "center",
        },
        {
          name: "location",
          label: "地點",
          field: "location",
          align: "center",
        },
        {
          name: "date",
          label: "日期",
          field: "date",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      awardData:[],
      // 御本尊紀錄  
      Columns:[],
      Data:[],
      // 任命資料 talent
      memOrgColumns:[ // 會員組織任命紀錄 
        {
          name: "name",
          label: "區域名稱",
          field: "name",
          align: "center",
        },
        {
          name: "job_title",
          label: "職務名稱",
          field: "job_title",
          align: "center",
        },
        
        {
          name: "started_date",
          label: "開始日期",
          field: "started_date",
          align: "center",
        },
        {
          name: "ended_date",
          label: "結束日期",
          field: "ended_date",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
        {
          name: "status",
          label: "狀態",
          field: "status",
          align: "center",
        },
        {
          name: "record_date",
          label: "紀錄日期",
          field: "record_date",
          align: "center",
        },
      ],
      memOrgData:[],
      memTalentColumns:[   // 會員人才單位任命紀錄 
        {
          name: "name",
          label: "區域名稱",
          field: "name",
          align: "center",
        },
        {
          name: "unit",
          label: "單位",
          field: "unit",
          align: "center",
        },
        {
          name: "job_title",
          label: "職務名稱",
          field: "job_title",
          align: "center",
        },
        
        {
          name: "started_date",
          label: "開始日期",
          field: "started_date",
          align: "center",
        },
        {
          name: "ended_date",
          label: "結束日期",
          field: "ended_date",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
        {
          name: "status",
          label: "狀態",
          field: "status",
          align: "center",
        },
        {
          name: "record_date",
          label: "紀錄日期",
          field: "record_date",
          align: "center",
        },
      ],
      memTalentData:[],
      // 期刊訂閱資訊
      journalColumns:[
        {
          name: "paper",
          label: "紙本",
          field: "paper",
          align: "center",
        },
        {
          name: "electronic",
          label: "電子",
          field: "electronic",
          align: "center",
        },
        {
          name: "ended_date",
          label: "到期日",
          field: "ended_date",
          align: "center",
        },
        {
          name: "note",
          label: "備註",
          field: "note",
          align: "center",
        },
      ],
      journalData:[],

    };
  },
  computed: {},
  methods: {
    showNotif() {
      this.$q.notify({
        message: "檢查狀態ok",
        type: "warning",
        position: "top-right",
      });
    },
    fetchData() {
      getMemberFamilyList().then((res) => {
        console.log(res);
        this.familyData = res.data;
      });
      getMemberEduList().then((res) => {
        this.eduData = res.data;
      });

    },
    showLoading() {
      this.$q.loading.show();

      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 2000);
    },
    onSubmit() {
      console.log("submit");
    },
  },
  created() {
    this.fetchData();
    import("../json/member.json").then((res) => {
      console.log("1", res);
      this.memberName = res.memberName;
      this.associationTitle = res.associationTitle;
      this.bornDate = res.bornDate;

      this.cboBelongArea = res.cboBelongArea;
      this.cboBelongArea2 = res.cboBelongArea2;
      this.memType = res.memType;
      this.memType_options.arr = res.data.Basic.memType;
      this.sex = res.sex;
      this.sex_options.arr = res.data.Basic.sex;
      this.distNoLive = res.distNoLive;
      this.stuDepartment = res.stuDepartment;
      this.stuDepartment_options.arr = res.data.Basic.stuDepartment;
      this.department = res.department;
      this.department_options.arr = res.data.Basic.department;
      this.lastName = res.lastName;
      this.firstName = res.firstName;
      this.telNumber = res.telNumber;
      this.mobileNumber = res.mobileNumber;
      this.businessNumber = res.businessNumber;
      this.cboFirstContact = res.cboFirstContact;
      this.cboFirstContact_options.arr = res.data.Basic.cboFirstContact;
      this.email = res.email;
      this.googleNumber = res.googleNumber;

      this.mailingPostalCode = res.mailingPostalCode;
      this.mailingCity = res.mailingCity;
      this.mailingDistirct = res.mailingDistirct;
      this.mallingStreetAddress = res.mallingStreetAddress;

      this.residentPostalCode = res.residentPostalCode;
      this.residentCity = res.residentCity;
      this.residentDistirct = res.residentDistirct;
      this.residentStreetAddress = res.residentStreetAddress;

      this.companyName = res.companyName;
      this.highestEducation = res.highestEducation;
      this.jobTitle = res.jobTitle;
      this.teacherQualification = res.teacherQualification;
      this.profession = res.profession;
      this.highestJob = res.highestJob;
      this.cboSpecialty = res.cboSpecialty;
      this.cboSpecialty_options.arr = res.data.Basic.cboSpecialty;
      this.finalJob = res.finalJob;
      this.incomingDate = res.incomingDate;
      this.cboConfidenceBg = res.cboConfidenceBg;
      this.cboConfidenceBg_options.arr = res.data.Basic.cboConfidenceBg;
      this.cboActiveTimes = res.cboActiveTimes;
      this.cardNumber = res.cardNumber;
      this.introducerName = res.introducerName;
      this.introducerTel = res.introducerTel;
      this.introducerDepartment = res.introducerDepartment;
      this.introducerArea = res.introducerArea;
      this.countGradeArea = res.countGradeArea;
      this.countGradeDepartment = res.countGradeDepartment;
      this.noIncludedReason = res.noIncludedReason;
      this.noIncludedReason_options.arr = res.data.Basic.noIncludedReason;
      this.noIncludedReason2 = res.noIncludedReason2;
      this.noIncludedQuestion = res.noIncludedQuestion;
      this.noIncludedQuestion_options.arr = res.data.Basic.noIncludedQuestion;
      this.endDate = res.endDate;
      this.note = res.note;
    });
  },
};
</script>

<template>
  <div>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="m_data" label="幹部(會員資料)"></q-tab>
        <q-tab name="m_family" label="會員家族"></q-tab>
        <q-tab name="m_edu" label="會員學歷"></q-tab>

        <q-tab name="m_teachingQ" label="教學資格"></q-tab>
        <q-tab name="m_certify" label="認證紀錄"></q-tab>
        <q-tab name="m_train" label="研修紀錄"></q-tab>
        <q-tab name="m_award" label="授獎記錄"></q-tab>
        <q-tab name="m_glory" label="御本尊紀錄"></q-tab>
        <q-tab name="m_appoint" label="任命資料"></q-tab>
        <q-tab name="m_subscribe" label="期刊訂閱資訊"></q-tab>
      </q-tabs>

      <q-separator></q-separator>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="m_data">
          <q-form @submit="onSubmit">
            <div
              class="
                column
                row-md
                justify-start
                items-center
                q-col-gutter-md q-pt-md
              "
            >
              <div class="col-md-10 order-last order-md-first">
                <div class="row items-center q-col-gutter-md">
                  <div class="col-6 col-md-4">
                    <q-input
                      id="memberName"
                      type="text"
                      outlined
                      dense
                      v-model="memberName"
                      :label="$q.screen.lt.sm ? '會員姓名' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="memberName" class="font-s-size">
                          <span class="required">＊</span>會員姓名:
                        </label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-input
                      id="associationTitle"
                      type="text"
                      outlined
                      dense
                      emit-value
                      v-model="associationTitle"
                      :label="$q.screen.lt.sm ? '學會職務' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="associationTitle" class="font-s-size">
                          學會職務:　
                        </label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-input
                      id="bornDate"
                      class="q-pb-none"
                      outlined
                      dense
                      :label="$q.screen.lt.sm ? '生日' : void 0"
                      v-model="bornDate"
                      mask="date"
                      :rules="['date']"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="bornDate" class="font-s-size">
                          <span class="required">＊</span>生日:　　
                        </label>
                      </template>
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date v-model="bornDate">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="確認"
                                  color="primary"
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                      <template v-slot:after>
                        <q-btn
                          color="primary"
                          label="檢查會員"
                          @click="showLoading"
                        />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-select
                      id="cboBelongArea"
                      outlined
                      dense
                      emit-value
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
                  <div class="col-6 col-md-4">
                    <q-select
                      id="cboBelongArea2"
                      outlined
                      dense
                      emit-value
                      v-model="cboBelongArea2"
                      :label="$q.screen.lt.sm ? '所屬區域' : void 0"
                      :options="cboBelongArea2_options"
                    >
                    </q-select>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-select
                      id="sex"
                      outlined
                      dense
                      emit-value
                      v-model="sex"
                      :label="$q.screen.lt.sm ? '性別' : void 0"
                      :options="sex_options.arr"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="sex" class="font-s-size">
                          <span class="required">＊</span>性別:　　
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-select
                      id="stuDepartment"
                      outlined
                      dense
                      emit-value
                      v-model="stuDepartment"
                      :label="$q.screen.lt.sm ? '學生部別' : void 0"
                      :options="stuDepartment_options.arr"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="stuDepartment" class="font-s-size">
                          學生部別:　
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-select
                      id="department"
                      outlined
                      dense
                      emit-value
                      v-model="department"
                      :options="department_options.arr"
                      :label="$q.screen.lt.sm ? '部別' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="department" class="font-s-size">
                          <span class="required">＊</span>部別:　　
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-select
                      id="memType"
                      outlined
                      dense
                      emit-value
                      v-model="memType"
                      :label="$q.screen.lt.sm ? '會員類型' : void 0"
                      :options="memType_options.arr"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="memType" class="font-s-size">
                          <span class="required">＊</span>會員類型:
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-4">
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
                        <label for="distNoLive" class="font-s-size">
                          <span class="required">＊</span>戶籍區:　
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-input
                      id="lastName"
                      type="text"
                      outlined
                      dense
                      emit-value
                      v-model="lastName"
                      :label="$q.screen.lt.sm ? '英文姓' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="lastName" class="font-s-size">
                          英文姓:　　
                        </label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-4">
                    <q-input
                      id="firstName"
                      type="text"
                      outlined
                      dense
                      emit-value
                      v-model="firstName"
                      :label="$q.screen.lt.sm ? '英文名' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="firstName" class="font-s-size">
                          英文名:　　
                        </label>
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-md-2 order-first order-md-last"
                :style="$q.screen.lt.md ? 'width:70%' : ''"
              >
                <q-card class="my-card column justify-center" flat>
                  <div class="text-center">會員編號: 1234567</div>
                  <q-img
                    class="q-mb-xs"
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                  />
                  <q-btn
                    color="primary"
                    label="變更照片"
                    @click="uploadImg = true"
                  />
                </q-card>
              </div>
            </div>
            <div class="divider"></div>
            <div class="row justify-start items-center q-col-gutter-md">
              <div class="col-6 col-md-3">
                <q-input
                  id="telNumber"
                  type="tel"
                  outlined
                  dense
                  v-model="telNumber"
                  :label="$q.screen.lt.sm ? '住家電話' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="telNumber" class="font-s-size">
                      住家電話:
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="mobileNumber"
                  type="tel"
                  outlined
                  dense
                  v-model="mobileNumber"
                  :label="$q.screen.lt.sm ? '行動電話' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="mobileNumber" class="font-s-size">
                      行動電話:
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="businessNumber"
                  type="tel"
                  outlined
                  dense
                  v-model="businessNumber"
                  :label="$q.screen.lt.sm ? '公司電話' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="businessNumber" class="font-s-size">
                      公司電話: 　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-select
                  id="cboFirstContact"
                  outlined
                  dense
                  emit-value
                  v-model="cboFirstContact"
                  :label="$q.screen.lt.sm ? '優先聯絡方式' : void 0"
                  :options="cboFirstContact_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cboFirstContact" class="font-s-size">
                      優先聯絡方式:
                    </label>
                  </template>
                </q-select>
              </div>
            </div>
            <div class="row justify-start items-center q-col-gutter-md q-py-md">
              <div class="col-12 col-md-6">
                <q-input
                  id="email"
                  type="email"
                  outlined
                  dense
                  v-model="email"
                  :label="$q.screen.lt.sm ? 'Email' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="email" class="font-s-size">
                      <span class="required">＊</span>Email: 　
                    </label>
                  </template>
                  <template v-slot:after>
                    <q-btn
                      color="primary"
                      label="發驗證信(幹部)"
                      @click="showLoading"
                      :class="$q.screen.gt.xs ? 'full-width' : ''"
                    />
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  id="googleNumber"
                  type="email"
                  outlined
                  dense
                  v-model="googleNumber"
                  :label="$q.screen.lt.sm ? 'Google 帳號' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="googleNumber" class="font-s-size">
                      Google 帳號:
                    </label>
                  </template>
                </q-input>
              </div>
            </div>
            <div
              class="
                row
                justify-start
                items-center
                q-col-gutter-md q-pt-md q-mb-md
              "
            >
              <div class="col-6 col-md-2">
                <q-input
                  id="mailingPostalCode"
                  type="text"
                  outlined
                  dense
                  v-model="mailingPostalCode"
                  :label="$q.screen.lt.sm ? '郵遞區號' : void 0"
                  placeholder="請輸入郵遞區號"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="mailingPostalCode" class="font-s-size">
                      通訊地址:　
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
              <div class="col-6 col-md-5">
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
            <div class="row q-mb-sm">
              <div class="items-center">
                <label v-if="$q.screen.gt.xs">戶籍地址:　</label>
                <q-checkbox
                  v-model="theSameWithMailing"
                  label="同通訊地址(學生部必填)"
                  size="xs"
                />
              </div>
            </div>
            <div class="row justify-start items-center q-col-gutter-md q-mb-md">
              <div class="col-6 col-md-2">
                <q-input
                  id="residentPostalCode"
                  type="text"
                  outlined
                  dense
                  v-model="residentPostalCode"
                  :label="$q.screen.lt.sm ? '郵遞區號' : void 0"
                  placeholder="請輸入郵遞區號"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="residentPostalCode" class="font-s-size">
                      <span class="invisible">戶籍地址:　</span>
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-2">
                <q-select
                  id="residentCity"
                  outlined
                  dense
                  emit-value
                  v-model="residentCity"
                  :label="$q.screen.lt.sm ? '縣市' : void 0"
                  :options="residentCity_options"
                >
                </q-select>
              </div>
              <div class="col-6 col-md-2">
                <q-select
                  id="residentDistirct"
                  outlined
                  dense
                  emit-value
                  v-model="residentDistirct"
                  :label="$q.screen.lt.sm ? '地區' : void 0"
                  :options="residentDistirct_options"
                >
                </q-select>
              </div>
              <div class="col-6 col-md-5">
                <q-input
                  id="residentStreetAddress"
                  type="text"
                  outlined
                  dense
                  emit-value
                  v-model="residentStreetAddress"
                  :label="$q.screen.lt.sm ? '路段' : void 0"
                  placeholder="請輸入街道門牌"
                >
                </q-input>
              </div>
            </div>
            <div class="divider"></div>
            <div class="row justify-start items-center q-col-gutter-md">
              <div class="col-6 col-md-3">
                <q-input
                  id="companyName"
                  type="text"
                  outlined
                  dense
                  v-model="companyName"
                  :label="$q.screen.lt.sm ? '公司名稱' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="companyName" class="font-s-size">
                      公司名稱:　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="jobTitle"
                  type="text"
                  outlined
                  dense
                  v-model="jobTitle"
                  :label="$q.screen.lt.sm ? '公司職稱' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="jobTitle" class="font-s-size">
                      公司職稱:
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="profession"
                  type="text"
                  outlined
                  dense
                  v-model="profession"
                  :label="$q.screen.lt.sm ? '職業' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="profession" class="font-s-size">
                      職業:　　</label
                    >
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-select
                  id="cboSpecialty"
                  outlined
                  dense
                  emit-value
                  v-model="cboSpecialty"
                  :label="$q.screen.lt.sm ? '專長' : void 0"
                  :options="cboSpecialty_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cboSpecialty" class="font-s-size">
                      專長:　　　　
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="highestEducation"
                  type="text"
                  outlined
                  dense
                  v-model="highestEducation"
                  :label="$q.screen.lt.sm ? '最高學歷' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="highestEducation" class="font-s-size">
                      最高學歷:　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="teacherQualification"
                  type="text"
                  outlined
                  dense
                  v-model="teacherQualification"
                  :label="$q.screen.lt.sm ? '教學資格' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="teacherQualification" class="font-s-size">
                      教學資格:
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="highestJob"
                  type="text"
                  outlined
                  dense
                  v-model="highestJob"
                  :label="$q.screen.lt.sm ? '最高職務' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="highestJob" class="font-s-size">
                      最高職務:
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="finalJob"
                  type="text"
                  outlined
                  dense
                  v-model="finalJob"
                  :label="$q.screen.lt.sm ? '最終職務' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="finalJob" class="font-s-size">
                      最終職務:　　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="incomingDate"
                  class="q-pb-none"
                  outlined
                  dense
                  :label="$q.screen.lt.sm ? '入信日期' : void 0"
                  v-model="incomingDate"
                  mask="date"
                  :rules="['date']"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="incomingDate" class="font-s-size">
                      <span class="required">＊</span>入信日期:
                    </label>
                  </template>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="incomingDate">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="確認" color="primary" />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-select
                  id="cboConfidenceBg"
                  outlined
                  dense
                  emit-value
                  v-model="cboConfidenceBg"
                  :label="$q.screen.lt.sm ? '信心背景' : void 0"
                  :options="cboConfidenceBg_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cboConfidenceBg" class="font-s-size">
                      信心背景:
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="cboActiveTimes"
                  type="text"
                  outlined
                  dense
                  v-model="cboActiveTimes"
                  :label="$q.screen.lt.sm ? '活動程度' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cboActiveTimes" class="font-s-size">
                      活動程度:
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="cardNumber"
                  type="number"
                  outlined
                  dense
                  v-model="cardNumber"
                  :label="$q.screen.lt.sm ? '電子幹部卡號' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cardNumber" class="font-s-size">
                      電子幹部卡號:
                    </label>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="divider"></div>
            <section class="intro q-pt-md">
              <div class="q-mb-md">介紹人</div>
              <div class="row justify-start items-center q-col-gutter-md">
                <div class="col-6 col-md-3">
                  <q-input
                    id="introducerName"
                    type="text"
                    outlined
                    dense
                    v-model="introducerName"
                    :label="$q.screen.lt.sm ? '姓名' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="introducerName" class="font-s-size">
                        <span class="required">＊</span>姓名:　
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-3">
                  <q-input
                    id="introducerTel"
                    type="tel"
                    outlined
                    dense
                    v-model="introducerTel"
                    :label="$q.screen.lt.sm ? '電話' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="introducerTel" class="font-s-size">
                        電話:　
                      </label>
                    </template>
                    <template v-slot:after>
                      <q-btn
                        color="primary"
                        label="查詢會員"
                        @click="showLoading"
                      />
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-3">
                  <q-input
                    id="introducerDepartment"
                    type="text"
                    outlined
                    dense
                    v-model="introducerDepartment"
                    :label="$q.screen.lt.sm ? '部別' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="introducerDepartment" class="font-s-size">
                        部別:　　
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-3">
                  <q-input
                    id="introducerArea"
                    type="text"
                    outlined
                    dense
                    v-model="introducerArea"
                    :label="$q.screen.lt.sm ? '所屬區域' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="introducerArea" class="font-s-size">
                        所屬區域:
                      </label>
                    </template>
                  </q-input>
                </div>
              </div>
            </section>
            <div class="divider"></div>
            <div
              class="
                row
                justify-start
                items-center
                q-col-gutter-md q-py-md q-mb-md
              "
            >
              <div class="col-6 col-md-3">
                <q-select
                  id="countGradeArea"
                  outlined
                  dense
                  emit-value
                  v-model="countGradeArea"
                  :label="$q.screen.lt.sm ? '計算成績區域' : void 0"
                  :options="countGradeArea_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="countGradeArea" class="font-s-size">
                      <span class="required">＊</span>計算成績區域:
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="countGradeDepartment"
                  type="text"
                  outlined
                  dense
                  emit-value
                  v-model="countGradeDepartment"
                  :label="$q.screen.lt.sm ? '計算成績部別' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="countGradeDepartment" class="font-s-size">
                      <span class="required">＊</span>計算成績部別:
                    </label>
                  </template>
                </q-input>
              </div>
            </div>
            <div
              class="
                row
                justify-start
                items-center
                q-col-gutter-md q-pb-md q-mb-md
              "
            >
              <div class="col-6 col-md-3">
                <q-select
                  id="noIncludedReason"
                  outlined
                  dense
                  emit-value
                  v-model="noIncludedReason"
                  :label="$q.screen.lt.sm ? '不列入會員原因' : void 0"
                  :options="noIncludedReason_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="noIncludedReason" class="font-s-size">
                      不列入會員原因:
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="noIncludedReason2"
                  type="text"
                  outlined
                  dense
                  v-model="noIncludedReason2"
                  placeholder="不列入會員其他原因"
                >
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-select
                  id="noIncludedQuestion"
                  outlined
                  dense
                  emit-value
                  v-model="noIncludedQuestion"
                  :label="$q.screen.lt.sm ? '不列入活動原因' : void 0"
                  :options="noIncludedQuestion_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="noIncludedQuestion" class="font-s-size">
                      不列入活動原因:
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="endDate"
                  class="q-pb-none"
                  outlined
                  dense
                  :label="$q.screen.lt.sm ? '結束日期' : void 0"
                  v-model="endDate"
                  mask="date"
                  :rules="['date']"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="endDate" class="font-s-size"> 結束日期: </label>
                  </template>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="endDate">
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
            <div class="divider"></div>
            <div class="row justify-start items-center q-col-gutter-md q-py-md">
              <div class="col-6 col-md-6">
                <q-input
                  id="note"
                  type="text"
                  outlined
                  dense
                  v-model="note"
                  :label="$q.screen.lt.sm ? '備註' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="note" class="font-s-size"> 備註: </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <div class="q-gutter-x-md">
                  <q-btn type="submit" color="primary" label="儲存" />
                  <q-btn color="primary" label="取消" />
                </div>
              </div>
            </div>
          </q-form>
        </q-tab-panel>
        <!-- 家族會員 -->
        <q-tab-panel name="m_family">
          <mem-table
            :tableColumn="familyColumns"
            :tableData="familyData"
            :showMultiSelect="false"
            rowKey="name"
            tabTitle="家族會員"
          ></mem-table>
        </q-tab-panel>

        <!-- 會員學歷 -->
        <q-tab-panel name="m_edu">
          <mem-table
            :tableColumn="eduColumns"
            :tableData="eduData"
            :showMultiSelect="false"
            rowKey="name"
            tabTitle="會員學歷"
          ></mem-table>
        </q-tab-panel>
        <!-- 教學資格 -->
        <q-tab-panel name="m_teachingQ">
          <mem-table
            :tableColumn="teachingColumns"
            :tableData="teachingData"
            :showMultiSelect="false"
            :operaShow="false"
            rowKey="name"
            tabTitle="教學資格"
          ></mem-table>
        </q-tab-panel>
        <!-- 認證紀錄 -->
        <q-tab-panel name="m_certify">

          <mem-table
            :tableColumn="certiRecordColumns"
            :tableData="certiRecordData"
            :showMultiSelect="false"
            :operaShow="false"
            rowKey="name"
            tabTitle="認證紀錄"
          ></mem-table>
        </q-tab-panel>
        <!-- 研修紀錄  -->
        <q-tab-panel name="m_train">

          <mem-table
            :tableColumn="trainingColumns"
            :tableData="trainingData"
            :showMultiSelect="false"
            :operaShow="false"
            rowKey="name"
            tabTitle="研修紀錄"
          ></mem-table>
        </q-tab-panel>
        <!-- 授獎記錄 -->
        <q-tab-panel name="m_award">
          <mem-table
            :tableColumn="awardColumns"
            :tableData="awardData"
            :showMultiSelect="false"
            :operaShow="false"
            rowKey="name"
            tabTitle="授獎記錄"
          ></mem-table>
        </q-tab-panel>
        <!-- 御本尊紀錄 -->
        <q-tab-panel name="m_glory">
          <div class="text-h6">御本尊紀錄</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
        <!-- 任命資料 -->
        <q-tab-panel name="m_appoint"> 
          
          <mem-table
            :tableColumn="memOrgColumns"
            :tableData="memOrgData"
            :showMultiSelect="false"
            :operaShow="false"
            rowKey="name"
            tabTitle="會員組織任命紀錄"
          ></mem-table>
          <mem-table
            :tableColumn="memTalentColumns"
            :tableData="memTalentData"
            :showMultiSelect="false"
            :operaShow="false"
            rowKey="name"
            tabTitle="會員人才單位任命紀錄"
          ></mem-table>
        </q-tab-panel>
        <!-- 期刊訂閱資訊 -->
        <q-tab-panel name="m_subscribe">
          <mem-table
            :tableColumn="journalColumns"
            :tableData="journalData"
            :showMultiSelect="false"
            :operaShow="false"
            rowKey="name"
            tabTitle="期刊訂閱資訊"
          ></mem-table>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

    <!-- dialog-uploadImg -->
    <q-dialog v-model="uploadImg">
      <q-card style="width: 700px; max-width: 40vw">
        <q-card-section>
          <div class="text-h6">上傳圖片</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-img
            style="height: 170px; max-width: 300px"
            src="https://images.pexels.com/photos/3292558/pexels-photo-3292558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            :ratio="1"
          />
          <div class="q-py-md">
            <q-btn color="primary" class="q-mr-md" icon="add" label="新增" />
            <q-btn color="secondary" icon="cloud_upload" label="上傳" />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="確認" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- dialog-openTerm -->
    <q-dialog>
      <q-card style="width: 600px; max-width: 60vw">
        <q-card-section>
          <div class="flex justify-start q-gutter-md">
            <q-input
              id="txtVersion"
              type="text"
              outlined
              dense
              readonly
              v-model="txtVersion"
              :label="$q.screen.lt.sm ? '新版本號' : void 0"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="txtVersion" class="font-s-size"> 新版本號: </label>
              </template>
            </q-input>

            <q-input
              id="txtVersionDate"
              outlined
              dense
              :label="$q.screen.lt.sm ? '設置生效時間' : void 0"
              v-model="txtVersionDate"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="txtVersionDate" class="font-s-size">
                  設置生效時間:
                </label>
              </template>
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="txtVersionDate">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="確認" color="primary" />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <q-input
            id="txtVersionState"
            class="q-mb-md"
            outlined
            dense
            :label="$q.screen.lt.sm ? '版本說明' : void 0"
            v-model="txtVersionState"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="txtVersionState" class="font-s-size">
                版本說明:
              </label>
            </template>
          </q-input>
          <div>
            <h6 class="text-center q-my-lg">使用條款與條件</h6>
            <div>
              <p>
                第一條：本使用條款適用於在電腦、手機或其他行動裝置上使用台灣創價學會所創建之「會員管理統監系統」（以下簡稱「統監系統」）。當使用或上傳任何資訊、資料，編碼或其他輸入於統監系統時，代表用戶同意接受以下條款和條件的約束。如果您不同意本使用條款，則無法登入或使用本服務。統監系統保留隨時不經通知，更新和修改使用條款的權利。任何增進或修改當前的服務的新功能，包括新功能的發布，均應遵守使用條款。於上述任何修改後仍繼續使用本服務者，視為同意該修改。用戶若有違反以下任何條款，統監系統將終止您的帳戶且不另行通知。
              </p>
              <p>
                第二條：當您註冊與使用統監系統時，系統會取得您提供的資訊。註冊統監系統並非選擇性，意即您必須同意我們就您所提供的資訊，進行我們認為適當之儲存、分析與應用。您在註冊及使用系統時，通常您會提供(a)您的姓名、電子郵件地址、年齡、使用者名稱、密碼和其他註冊資訊；(b)您使用系統時輸入我方系統之資訊，例如聯絡資訊等。我們還可能會使用您所提供給我們的資訊，以隨時提供您重要訊息、必要的通知和推廣。
              </p>
              <p>
                第三條：系統可能會自動收集某些資訊，例如記錄您所隸屬的區域，您曾參加活動的地點、日期、時間。以及您所使用之行動裝置類型、您行動裝置的單一識別ID、您行動裝置的IP位置等。
              </p>
              <p>
                第四條：資料保存政策：
                我們將於您使用統監系統後之合理期間內，保留使用者帳號及所提供的資訊。如果您希望我們刪除您的用戶資料，請透過info統監系統@gmail.com與我們聯繫，我們將在合理期間內回覆。請注意，為了使系統正常運行，可能需要使用者提供部分或全部的資料，並且我們可能會依法律要求保存某些資訊。
              </p>
              <p>
                第五條：我們將謹慎維護您資訊的機密性。我們提供實體、電子和程式的安全措施來保護我們處理和維護之資訊。例如，可取得您資訊者，僅限已授權之員工和需要知道該資訊才能操作、開發或改進我們的系統之承包廠商。請注意，儘管我們致力於提供資訊處理和維護的合理安全性，沒有安全系統可以防止所有潛在的安全漏洞。我們會盡最大努力確保資訊安全，然而用戶同意就統監系統的使用上，因任何安全漏洞而直接或間接造成之損害，免除統監系統、其承包廠商和相關附屬單位之責任。
              </p>
            </div>
          </div>
          <!-- <q-editor v-model="editor" :definitions="definitions" /> -->
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<style lang="scss" scoped>
// @mixin sm {
//   @media (max-width: $breakpoint-sm-max) {
//     @content;
//   }
// }
.divider {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed gray;
  margin: 20px 0;
}
.required {
  color: red;
}
.font-s-size {
  font-size: 55%;
}
label {
  color: #000;
  font-size: 14px;
}
</style>
