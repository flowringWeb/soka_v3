<script>
import axios from "axios";
export default {
  name: "Member",
  components: {},
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

      //dialog-openTerm
      openTerm: false,
      txtVersion: 2,
      txtVersionDate: "2010/08/09",
      txtVersionState: "修改第6條",
      //form
      memberName: "",
      bornDate: "",
      showQField: true,
      pre_birD: "",
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
      introducerCell: "",
      iintroducerBusinessCell: "",
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
      mailing_address_way: "tip_address",
      residence_address_way: "tip_address",
      txtMailingPostalCode: "",
      txtMailingNum: "",
      txtMailingNum2: "",
      mailingCity: "",
      mailingCity_options: ["請選擇", "台北市", "新北市"],
      mailingDistirct: "",
      mailingDistirct_options: ["請選擇", "汐止區", "新店區"],
      mallingStreetAddress: "",
      cboMailingRoad: "",
      mailing_address_04_options: ["請選擇", "中山路", "中正路"],
      txtMailingLane: "",
      txtMailingAlley: "",
      txtMailingFloor: "",
      txtMailingFloor2: "",
      txtMailingRoom: "",
      txtComMailingAdr: "",
    };
  },
  computed: {},
  methods: {
    showNotif() {
      this.$q.notify({
        message: "儲存成功",
        type: "info",
        position: "bottom-right",
      });
    },
  },
  created() {
    import("../json/member.json").then((res) => {
      console.log("1", res);
      this.memberName = res.data.profile.memberName;
      this.bornDate = res.data.profile.bornDate;

      this.cboBelongArea = res.data.profile.cboBelongArea;
      this.cboBelongArea2 = res.data.profile.cboBelongArea2;
      this.memType = res.data.profile.memType;
      this.memType_options.arr = res.data.Basic.memType;
      this.sex = res.data.profile.sex;
      this.sex_options.arr = res.data.Basic.sex;
      this.distNoLive = res.data.profile.distNoLive;
      this.stuDepartment = res.data.profile.stuDepartment;
      this.stuDepartment_options.arr = res.data.Basic.stuDepartment;
      this.department = res.data.profile.department;
      this.department_options.arr = res.data.Basic.department;
      this.lastName = res.data.profile.lastName;
      this.firstName = res.data.profile.firstName;
      this.telNumber = res.data.profile.telNumber;
      this.mobileNumber = res.data.profile.mobileNumber;
      this.businessNumber = res.data.profile.businessNumber;
      this.cboFirstContact = res.data.profile.cboFirstContact;
      this.cboFirstContact_options.arr = res.data.Basic.cboFirstContact;
      this.email = res.data.profile.email;
      this.googleNumber = res.data.profile.googleNumber;

      this.txtMailingPostalCode = res.data.profile.txtMailingPostalCode;
      this.txtMailingNum = res.data.profile.txtMailingNum;
      this.txtMailingNum2 = res.data.profile.txtMailingNum2;
      this.mailingCity = res.data.profile.mailingCity;
      this.mailingDistirct = res.data.profile.mailingDistirct;
      this.mallingStreetAddress = res.data.profile.mallingStreetAddress;
      this.cboMailingRoad = res.data.profile.cboMailingRoad;
      this.txtMailingLane = res.data.profile.txtMailingLane;
      this.txtMailingAlley = res.data.profile.txtMailingAlley;
      this.txtMailingFloor = res.data.profile.txtMailingFloor;
      this.txtMailingFloor2 = res.data.profile.txtMailingFloor2;
      this.txtMailingRoom = res.data.profile.txtMailingRoom;
      this.txtComMailingAdr = res.data.profile.txtComMailingAdr;

      this.companyName = res.data.profile.companyName;
      this.highestEducation = res.data.profile.highestEducation;
      this.jobTitle = res.data.profile.jobTitle;
      this.teacherQualification = res.data.profile.teacherQualification;
      this.profession = res.data.profile.profession;
      this.highestJob = res.data.profile.highestJob;
      this.cboSpecialty = res.data.profile.cboSpecialty;
      this.cboSpecialty_options.arr = res.data.Basic.cboSpecialty;
      this.finalJob = res.data.profile.finalJob;
      this.incomingDate = res.data.profile.incomingDate;
      this.cboConfidenceBg = res.data.profile.cboConfidenceBg;
      this.cboConfidenceBg_options.arr = res.data.Basic.cboConfidenceBg;
      this.cboActiveTimes = res.data.profile.cboActiveTimes;
      this.cardNumber = res.data.profile.cardNumber;
      this.introducerName = res.data.profile.introducerName;
      this.introducerTel = res.data.profile.introducerTel;
      this.introducerCell = res.data.profile.introducerCell;
      this.iintroducerBusinessCell = res.data.profile.iintroducerBusinessCell;
      this.introducerDepartment = res.data.profile.introducerDepartment;
      this.introducerArea = res.data.profile.introducerArea;
      this.countGradeArea = res.data.profile.countGradeArea;
      this.countGradeDepartment = res.data.profile.countGradeDepartment;
      this.noIncludedReason = res.data.profile.noIncludedReason;
      this.noIncludedReason_options.arr = res.data.Basic.noIncludedReason;
      this.noIncludedReason2 = res.data.profile.noIncludedReason2;
      this.noIncludedQuestion = res.data.profile.noIncludedQuestion;
      this.noIncludedQuestion_options.arr = res.data.Basic.noIncludedQuestion;
      this.endDate = res.data.profile.endDate;
      this.note = res.data.profile.note;
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
          <div>
            <div class="row items-start">
              <div class="col-12">
                <div
                  class="
                    row
                    justify-start
                    items-center
                    q-col-gutter-md q-py-md q-mb-md
                    border-underline
                  "
                >
                  <div class="col-md-10">
                    <div class="row items-center q-col-gutter-md q-py-md">
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
                        </q-input>
                      </div>
                      <div
                        class="
                          col-6 col-md-4
                          column
                          justify-center
                          items-center
                        "
                      >
                        <q-btn
                          class="q-mb-md"
                          color="primary"
                          label="檢查會員"
                        />
                        <div>
                          <div>警告: 資料存在, 壯年部</div>
                          <div>檢查狀態: OK</div>
                        </div>
                      </div>
                      <div class="col-6 col-md-3">
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
                      <div class="col-6 col-md-3">
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
                      <div class="col-6 col-md-3">
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
                      <div class="col-6 col-md-3">
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
                      <div class="col-6 col-md-3">
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
                      <div class="col-6 col-md-3">
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
                      <div class="col-6 col-md-3">
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
                      <div class="col-6 col-md-3">
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
                  <div class="col-12 col-md-2">
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
                  <!-- <div class="col-6 col-md-3">
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
                  <div class="col-6 col-md-3">
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
                    </q-input>
                  </div>
                  <div
                    class="col-6 col-md-3 column justify-center items-center"
                  >
                    <q-btn class="q-mb-md" color="primary" label="檢查會員" />
                    <div>
                      <div>警告: 資料存在, 壯年部</div>
                      <div>檢查狀態: OK</div>
                    </div>
                  </div>
                  <div class="col-6 col-md-2 q-ml-auto">
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
                <div
                  class="
                    row
                    justify-start
                    q-col-gutter-md q-pb-md q-mb-md
                    border-underline
                  "
                >
                  <div class="col-12 col-md-3">
                    <div class="row q-col-gutter-md">
                      <div class="col-6 col-md-12">
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
                    </div>
                  </div>
                  <div class="col-6 col-md-2">
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
                  <div class="col-6 col-md-2">
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
                  <div class="col-6 col-md-2">
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
                  <div class="col-6 col-md-3">
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
                  <div class="col-6 col-md-3">
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
                  <div class="col-6 col-md-3">
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
                  <div class="col-6 col-md-3">
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
                  </div> -->
                </div>
                <div
                  class="row justify-start items-center q-col-gutter-md q-mb-md"
                >
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
                <div
                  class="row justify-start items-center q-col-gutter-md q-mb-md"
                >
                  <div class="col-6 col-md-3">
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
                    </q-input>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-btn color="primary" label="發驗證信(幹部)" />
                  </div>
                  <div class="col-6 col-md-3">
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
                <div class="row q-py-md">
                  <div class="col-12 col-md-6">
                    <div class="row justify-start q-col-gutter-md">
                      <div class="col-6">
                        <q-select
                          id="mailingCity"
                          outlined
                          dense
                          emit-value
                          v-model="mailingCity"
                          :label="$q.screen.lt.sm ? '縣市' : void 0"
                          :options="mailingCity_options"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="mailingCity" class="font-s-size">
                              通訊地址:　　
                            </label>
                          </template>
                        </q-select>
                      </div>
                      <div class="col-6">
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
                      <div class="col-12">
                        <q-input
                          id="mallingStreetAddress"
                          type="text"
                          outlined
                          dense
                          emit-value
                          v-model="mallingStreetAddress"
                          :label="$q.screen.lt.sm ? '路段' : void 0"
                          placeholder="請輸入街道地址"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="googleNumber" class="font-s-size">
                              <span class="invisible">通訊地址　　</span>
                            </label>
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <section class="emailAddress q-mb-md border-underline">
                  <q-item-label class="emailAddress__title q-mr-md">
                    通訊地址:
                  </q-item-label>
                  <q-item>
                    <div class="justify-start">
                      <q-radio
                        v-model="mailing_address_way"
                        val="tip_address"
                      />
                    </div>
                    <q-item-section>
                      <div>
                        <div
                          class="emailAddress__wrapper q-gutter-x-md q-mb-md"
                        >
                          <div>台灣</div>
                          <q-input
                            id="txtMailingPostalCode"
                            class="emailAddress__postalcode"
                            outlined
                            dense
                            v-model="txtMailingPostalCode"
                          />
                          <q-select
                            outlined
                            dense
                            v-model="mailingCity"
                            :options="mailingCity_options"
                          />
                          <q-select
                            outlined
                            dense
                            v-model="mailingDistirct"
                            :options="mailingDistirct_options"
                          />
                          <q-select
                            outlined
                            dense
                            v-model="cboMailingRoad"
                            :options="mailing_address_04_options"
                          />
                        </div>
                        <div class="emailAddress__wrapper q-gutter-x-md">
                          <q-input outlined dense v-model="txtMailingLane" />
                          <div>巷</div>
                          <q-input outlined dense v-model="txtMailingAlley" />
                          <div>弄</div>
                          <q-input outlined dense v-model="txtMailingNum" />
                          <div class="emailAddress__context">號之</div>
                          <q-input outlined dense v-model="txtMailingNum2" />
                          <q-input outlined dense v-model="txtMailingFloor" />
                          <div class="emailAddress__context">樓之</div>
                          <q-input outlined dense v-model="txtMailingFloor2" />
                          <q-input outlined dense v-model="txtMailingRoom" />
                          <div>室</div>
                        </div>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <div class="justify-start">
                      <q-radio
                        v-model="mailing_address_way"
                        val="auto_address"
                      />
                    </div>
                    <q-item-section>
                      <div class="flex items-center">
                        <div class="q-mr-md">自行輸入</div>
                        <q-input
                          class="emailAddress__autoAddressWidth"
                          outlined
                          dense
                          v-model="txtComMailingAdr"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                </section> -->
              </div>
            </div>
            <!-- <section class="isMobShow">
              <hr />
              <div class="q-mr-md">台灣<span> (only mobile 版本)</span></div>
              <div
                class="
                  row
                  justify-start
                  items-start
                  q-col-gutter-md q-py-md q-mb-md
                "
              >
                <div class="col-6">
                  <q-input
                    class=""
                    outlined
                    dense
                    v-model="txtMailingPostalCode"
                    placeholder="請輸入郵遞區號"
                  />
                </div>
                <div class="col-6">
                  <q-select
                    class="q-mb-md"
                    outlined
                    dense
                    v-model="mailingCity"
                    :options="mailingCity_options"
                  />
                </div>
                <div class="col-6">
                  <q-select
                    class="q-mb-md"
                    outlined
                    dense
                    v-model="mailingDistirct"
                    :options="mailingDistirct_options"
                  />
                </div>
                <div class="col-6">
                  <q-select
                    outlined
                    dense
                    v-model="cboMailingRoad"
                    :options="mailing_address_04_options"
                  />
                </div>
                <div class="col-5 q-mb-md">
                  <div class="flex no-wrap items-center">
                    <q-input outlined dense v-model="txtMailingLane" />
                    <div class="q-mx-md">巷</div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="flex no-wrap items-center">
                    <q-input outlined dense v-model="txtMailingAlley" />
                    <div class="q-mx-md">弄</div>
                  </div>
                </div>
                <div class="col-12 q-mb-md">
                  <div class="flex items-center">
                    <q-input outlined dense v-model="txtMailingNum" />
                    <div class="q-mx-md" style="width: 2rem">號之</div>
                    <q-input outlined dense v-model="txtMailingNum2" />
                  </div>
                </div>
                <div class="col-12 q-mb-md">
                  <div class="flex items-center">
                    <q-input outlined dense v-model="txtMailingFloor" />
                    <div class="q-mx-md" style="width: 2rem">樓之</div>
                    <q-input outlined dense v-model="txtMailingFloor2" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="flex items-center">
                    <q-input
                      id="txtMailingRoom"
                      outlined
                      dense
                      v-model="txtMailingRoom"
                    />
                    <div class="q-mx-md">室</div>
                  </div>
                </div>
              </div>
              <hr />
            </section> -->
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
                      職業:　　　　
                    </label>
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
              <div class="col-6 col-md-2">
                <q-btn
                  color="primary"
                  label="檢視使用條款"
                  @click="openTerm = true"
                />
              </div>
            </div>
            <div
              class="
                row
                justify-start
                items-center
                q-col-gutter-md q-py-md q-mb-md
                border-underline
              "
            >
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
            <section class="intro" style="border-bottom: 1px dashed gray">
              <h6>介紹人</h6>
              <div
                class="
                  row
                  justify-start
                  items-center
                  q-col-gutter-md q-pb-md q-mb-md
                "
              >
                <div class="col-6 col-md-2">
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
                <div class="col-6 col-md-2">
                  <q-input
                    id="introducerTel"
                    type="tel"
                    outlined
                    dense
                    v-model="introducerTel"
                    :label="$q.screen.lt.sm ? '住家電話' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="introducerTel" class="font-s-size">
                        住家電話:
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-input
                    id="introducerCell"
                    type="tel"
                    outlined
                    dense
                    v-model="introducerCell"
                    :label="$q.screen.lt.sm ? '行動電話' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="introducerCell" class="font-s-size">
                        行動電話:
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-input
                    id="iintroducerBusinessCell"
                    type="tel"
                    outlined
                    dense
                    v-model="iintroducerBusinessCell"
                    :label="$q.screen.lt.sm ? '公司電話' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="iintroducerBusinessCell" class="font-s-size">
                        公司電話:
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-btn
                    color="primary"
                    :class="$q.screen.lt.sm ? 'full-width' : void 0"
                    label="查詢會員"
                  />
                </div>
                <div class="col-6 col-md-4">
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
                <div class="col-6 col-md-4">
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
            <div
              class="
                row
                justify-start
                items-center
                q-col-gutter-md q-py-md q-mb-md
                border-underline
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
                border-underline
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
                    <label for="note" class="font-s-size">
                      備註:　　　　　</label
                    >
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <div class="q-gutter-x-md">
                  <q-btn color="primary" label="儲存" @click="showNotif" />
                  <q-btn color="primary" label="取消" />
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="m_family">
          <div class="text-h6">會員家族</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_edu">
          <div class="text-h6">會員學歷</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_teachingQ">
          <div class="text-h6">教學資格</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_certify">
          <div class="text-h6">認證紀錄</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_train">
          <div class="text-h6">研修紀錄</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_award">
          <div class="text-h6">授獎記錄</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_glory">
          <div class="text-h6">御本尊紀錄</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_appoint">
          <div class="text-h6">任命資料</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="m_subscribe">
          <div class="text-h6">期刊訂閱資訊</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
    <q-dialog v-model="openTerm">
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
          <q-editor v-model="editor" :definitions="definitions" />
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
// @mixin xs {
//   @media (max-width: $breakpoint-xs-max) {
//     @content;
//   }
// }
.required {
  color: red;
}
.border-underline {
  border-bottom: 1px dashed gray;
}

// .emailAddress {
//   max-width: 730px;
//   @include sm {
//     overflow-x: scroll;
//   }
//   @include xs {
//     display: void 0;
//   }
//   &__title {
//     width: 5rem;
//   }
//   &__wrapper {
//     display: flex;
//     align-items: center;
//   }
//   &__context {
//     width: 100px;
//   }
//   &__autoAddressWidth {
//     width: 85%;
//   }
//   &__postalcode {
//     width: 5rem;
//   }
// }
.font-s-size {
  font-size: 55%;
}
</style>