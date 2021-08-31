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
      txtMemName: "",
      calBornDate: "",
      showQField: true,
      pre_birD: "",
      cboBelongArea: "",
      cboBelongArea_options: [],
      cboBelongArea2: "",
      cboBelongArea2_options: [],
      cboSex: "",
      cboSex_options: [],
      cboStuDepartment: "",
      cboStuDepartment_options: [],
      cboMemType: "",
      cboMemType_options: [],
      cboHousehold: "",
      cboHousehold_options: [],
      cboDepartment: "",
      cboDepartment_options: [],
      txtLastName: "",
      txtFirstName: "",
      txtTelNum: "",
      txtMobileNum: "",
      txtBusinessNum: "",
      cboFirstContact: "",
      cboFirstContact_options: [],
      txtEmail: "",
      txtGoogleNum: "",
      txtCompanyName: "",
      txtHighestEdu: "",
      txtJobTitle: "",
      txtTeacherQualification: "",
      txtProfession: "",
      txtHighestJob: "",
      cboSpecialty: "",
      cboSpecialty_options: [],
      txtFinalJob: "",
      calIncomingDate: "",
      cboConfidenceBg: "",
      cboConfidenceBg_options: [],
      cboActiveTimes: "",
      txtCardNum: "",
      txtIntroducerName: "",
      txtIntroducerTel: "",
      txtIntroducerCell: "",
      txtIntroducerBCell: "",
      txtIntroducerDepartment: "",
      txtIntroducerArea: "",
      cboCountGradeArea: "",
      cboCountGradeArea_options: [],
      cboCountGradeDepartment: "",
      cboNIncludedReason: "",
      cboNIncludedReason_options: [],
      txtNIncludedReason2: "",
      includedQuestion: "",
      includedQuestion_options: [],
      calEndDate: "",
      txtNote: "",
      //通訊地址
      mailing_address_way: "tip_address",
      residence_address_way: "tip_address",
      txtMailingPostalCode: "",
      txtMailingNum: "",
      txtMailingNum2: "",
      cboMailingCity: "",
      mailing_address_02_options: ["請選擇", "台北市", "新北市"],
      cboMailingDistirct: "",
      mailing_address_03_options: ["請選擇", "汐止區", "新店區"],
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
      this.txtMemName = res.data.profile.txtMemName;
      this.calBornDate = res.data.profile.calBornDate;

      this.cboBelongArea = res.data.profile.cboBelongArea;
      this.cboBelongArea2 = res.data.profile.cboBelongArea2;
      this.cboMemType = res.data.profile.cboMemType;
      this.cboMemType_options.arr = res.data.Basic.cboMemType;
      this.cboSex = res.data.profile.cboSex;
      this.cboSex_options.arr = res.data.Basic.cboSex;
      this.cboHousehold = res.data.profile.cboHousehold;
      this.cboStuDepartment = res.data.profile.cboStuDepartment;
      this.cboStuDepartment_options.arr = res.data.Basic.cboStuDepartment;
      this.cboDepartment = res.data.profile.cboDepartment;
      this.cboDepartment_options.arr = res.data.Basic.cboDepartment;
      this.txtLastName = res.data.profile.txtLastName;
      this.txtFirstName = res.data.profile.txtFirstName;
      this.txtTelNum = res.data.profile.txtTelNum;
      this.txtMobileNum = res.data.profile.txtMobileNum;
      this.txtBusinessNum = res.data.profile.txtBusinessNum;
      this.cboFirstContact = res.data.profile.cboFirstContact;
      this.cboFirstContact_options.arr = res.data.Basic.cboFirstContact;
      this.txtEmail = res.data.profile.txtEmail;
      this.txtGoogleNum = res.data.profile.txtGoogleNum;

      this.txtMailingPostalCode = res.data.profile.txtMailingPostalCode;
      this.txtMailingNum = res.data.profile.txtMailingNum;
      this.txtMailingNum2 = res.data.profile.txtMailingNum2;
      this.cboMailingCity = res.data.profile.cboMailingCity;
      this.cboMailingDistirct = res.data.profile.cboMailingDistirct;
      this.cboMailingRoad = res.data.profile.cboMailingRoad;
      this.txtMailingLane = res.data.profile.txtMailingLane;
      this.txtMailingAlley = res.data.profile.txtMailingAlley;
      this.txtMailingFloor = res.data.profile.txtMailingFloor;
      this.txtMailingFloor2 = res.data.profile.txtMailingFloor2;
      this.txtMailingRoom = res.data.profile.txtMailingRoom;
      this.txtComMailingAdr = res.data.profile.txtComMailingAdr;

      this.txtCompanyName = res.data.profile.txtCompanyName;
      this.txtHighestEdu = res.data.profile.txtHighestEdu;
      this.txtJobTitle = res.data.profile.txtJobTitle;
      this.txtTeacherQualification = res.data.profile.txtTeacherQualification;
      this.txtProfession = res.data.profile.txtProfession;
      this.txtHighestJob = res.data.profile.txtHighestJob;
      this.cboSpecialty = res.data.profile.cboSpecialty;
      this.cboSpecialty_options.arr = res.data.Basic.cboSpecialty;
      this.txtFinalJob = res.data.profile.txtFinalJob;
      this.calIncomingDate = res.data.profile.calIncomingDate;
      this.cboConfidenceBg = res.data.profile.cboConfidenceBg;
      this.cboConfidenceBg_options.arr = res.data.Basic.cboConfidenceBg;
      this.cboActiveTimes = res.data.profile.cboActiveTimes;
      this.txtCardNum = res.data.profile.txtCardNum;
      this.txtIntroducerName = res.data.profile.txtIntroducerName;
      this.txtIntroducerTel = res.data.profile.txtIntroducerTel;
      this.txtIntroducerCell = res.data.profile.txtIntroducerCell;
      this.txtIntroducerBCell = res.data.profile.txtIntroducerBCell;
      this.txtIntroducerDepartment = res.data.profile.txtIntroducerDepartment;
      this.txtIntroducerArea = res.data.profile.txtIntroducerArea;
      this.cboCountGradeArea = res.data.profile.cboCountGradeArea;
      this.cboCountGradeDepartment = res.data.profile.cboCountGradeDepartment;
      this.cboNIncludedReason = res.data.profile.cboNIncludedReason;
      this.cboNIncludedReason_options.arr = res.data.Basic.cboNIncludedReason;
      this.txtNIncludedReason2 = res.data.profile.txtNIncludedReason2;
      this.includedQuestion = res.data.profile.includedQuestion;
      this.includedQuestion_options.arr = res.data.Basic.includedQuestion;
      this.calEndDate = res.data.profile.calEndDate;
      this.txtNote = res.data.profile.txtNote;
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
                      <div class="col-6 col-md-3">
                        <q-input
                          id="txtMemName"
                          type="text"
                          outlined
                          dense
                          v-model="txtMemName"
                          :label="$q.screen.lt.sm ? '會員姓名' : void 0"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="txtMemName" class="font-s-size">
                              <span class="required">＊</span>會員姓名:
                            </label>
                          </template>
                        </q-input>
                      </div>
                      <div class="col-6 col-md-3">
                        <q-input
                          id="calBornDate"
                          class="q-pb-none"
                          outlined
                          dense
                          :label="$q.screen.lt.sm ? '生日' : void 0"
                          v-model="calBornDate"
                          mask="date"
                          :rules="['date']"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="calBornDate" class="font-s-size">
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
                                <q-date v-model="calBornDate">
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
                          col-6 col-md-3
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
                          id="cboSex"
                          outlined
                          dense
                          emit-value
                          v-model="cboSex"
                          :label="$q.screen.lt.sm ? '性別' : void 0"
                          :options="cboSex_options.arr"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="cboSex" class="font-s-size">
                              <span class="required">＊</span>性別:　　
                            </label>
                          </template>
                        </q-select>
                      </div>
                      <div class="col-6 col-md-3">
                        <q-select
                          id="cboStuDepartment"
                          outlined
                          dense
                          emit-value
                          v-model="cboStuDepartment"
                          :label="$q.screen.lt.sm ? '學生部別' : void 0"
                          :options="cboStuDepartment_options.arr"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="cboStuDepartment" class="font-s-size">
                              學生部別:
                            </label>
                          </template>
                        </q-select>
                      </div>
                      <div class="col-6 col-md-3">
                        <q-select
                          id="cboDepartment"
                          outlined
                          dense
                          emit-value
                          v-model="cboDepartment"
                          :options="cboDepartment_options.arr"
                          :label="$q.screen.lt.sm ? '部別' : void 0"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="cboDepartment" class="font-s-size">
                              <span class="required">＊</span>部別:　
                            </label>
                          </template>
                        </q-select>
                      </div>
                      <div class="col-6 col-md-3">
                        <q-select
                          id="cboMemType"
                          outlined
                          dense
                          emit-value
                          v-model="cboMemType"
                          :label="$q.screen.lt.sm ? '會員類型' : void 0"
                          :options="cboMemType_options.arr"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="cboMemType" class="font-s-size">
                              <span class="required">＊</span>會員類型:
                            </label>
                          </template>
                        </q-select>
                      </div>
                      <div class="col-6 col-md-3">
                        <q-select
                          id="cboHousehold"
                          outlined
                          dense
                          emit-value
                          v-model="cboHousehold"
                          :label="$q.screen.lt.sm ? '戶籍區' : void 0"
                          :options="cboHousehold_options"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="cboHousehold" class="font-s-size">
                              <span class="required">＊</span>戶籍區:　
                            </label>
                          </template>
                        </q-select>
                      </div>
                      <div class="col-6 col-md-3">
                        <q-input
                          id="txtLastName"
                          type="text"
                          outlined
                          dense
                          emit-value
                          v-model="txtLastName"
                          :label="$q.screen.lt.sm ? '英文姓' : void 0"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="txtLastName" class="font-s-size">
                              英文姓:　
                            </label>
                          </template>
                        </q-input>
                      </div>
                      <div class="col-6 col-md-3">
                        <q-input
                          id="txtFirstName"
                          type="text"
                          outlined
                          dense
                          emit-value
                          v-model="txtFirstName"
                          :label="$q.screen.lt.sm ? '英文名' : void 0"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="txtFirstName" class="font-s-size">
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
                      id="txtMemName"
                      type="text"
                      outlined
                      dense
                      v-model="txtMemName"
                      :label="$q.screen.lt.sm ? '會員姓名' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtMemName" class="font-s-size">
                          <span class="required">＊</span>會員姓名:
                        </label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-input
                      id="calBornDate"
                      class="q-pb-none"
                      outlined
                      dense
                      :label="$q.screen.lt.sm ? '生日' : void 0"
                      v-model="calBornDate"
                      mask="date"
                      :rules="['date']"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="calBornDate" class="font-s-size">
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
                            <q-date v-model="calBornDate">
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
                      id="cboSex"
                      outlined
                      dense
                      emit-value
                      v-model="cboSex"
                      :label="$q.screen.lt.sm ? '性別' : void 0"
                      :options="cboSex_options.arr"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="cboSex" class="font-s-size">
                          <span class="required">＊</span>性別:
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-2">
                    <q-select
                      id="cboStuDepartment"
                      outlined
                      dense
                      emit-value
                      v-model="cboStuDepartment"
                      :label="$q.screen.lt.sm ? '學生部別' : void 0"
                      :options="cboStuDepartment_options.arr"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="cboStuDepartment" class="font-s-size">
                          學生部別:
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-2">
                    <q-select
                      id="cboDepartment"
                      outlined
                      dense
                      emit-value
                      v-model="cboDepartment"
                      :options="cboDepartment_options.arr"
                      :label="$q.screen.lt.sm ? '部別' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="cboDepartment" class="font-s-size">
                          <span class="required">＊</span>部別:
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-select
                      id="cboMemType"
                      outlined
                      dense
                      emit-value
                      v-model="cboMemType"
                      :label="$q.screen.lt.sm ? '會員類型' : void 0"
                      :options="cboMemType_options.arr"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="cboMemType" class="font-s-size">
                          <span class="required">＊</span>會員類型:
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-select
                      id="cboHousehold"
                      outlined
                      dense
                      emit-value
                      v-model="cboHousehold"
                      :label="$q.screen.lt.sm ? '戶籍區' : void 0"
                      :options="cboHousehold_options"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="cboHousehold" class="font-s-size">
                          <span class="required">＊</span>戶籍區:
                        </label>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-input
                      id="txtLastName"
                      type="text"
                      outlined
                      dense
                      emit-value
                      v-model="txtLastName"
                      :label="$q.screen.lt.sm ? '英文姓' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtLastName" class="font-s-size">
                          英文姓:
                        </label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-input
                      id="txtFirstName"
                      type="text"
                      outlined
                      dense
                      emit-value
                      v-model="txtFirstName"
                      :label="$q.screen.lt.sm ? '英文名' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtFirstName" class="font-s-size">
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
                      id="txtTelNum"
                      type="tel"
                      outlined
                      dense
                      v-model="txtTelNum"
                      :label="$q.screen.lt.sm ? '住家電話' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtTelNum" class="font-s-size">
                          住家電話:　　
                        </label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-input
                      id="txtMobileNum"
                      type="tel"
                      outlined
                      dense
                      v-model="txtMobileNum"
                      :label="$q.screen.lt.sm ? '行動電話' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtMobileNum" class="font-s-size">
                          行動電話:　　
                        </label>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6 col-md-3">
                    <q-input
                      id="txtBusinessNum"
                      type="tel"
                      outlined
                      dense
                      v-model="txtBusinessNum"
                      :label="$q.screen.lt.sm ? '公司電話' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtBusinessNum" class="font-s-size">
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
                      id="txtEmail"
                      type="email"
                      outlined
                      dense
                      v-model="txtEmail"
                      :label="$q.screen.lt.sm ? 'Email' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtEmail" class="font-s-size">
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
                      id="txtGoogleNum"
                      type="email"
                      outlined
                      dense
                      v-model="txtGoogleNum"
                      :label="$q.screen.lt.sm ? 'Google 帳號' : void 0"
                    >
                      <template v-slot:before v-if="$q.screen.gt.xs">
                        <label for="txtGoogleNum" class="font-s-size">
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
                          id="cboMailingCity"
                          outlined
                          dense
                          emit-value
                          v-model="cboMailingCity"
                          :label="$q.screen.lt.sm ? '縣市' : void 0"
                          :options="mailing_address_02_options"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="cboMailingCity" class="font-s-size">
                              戶籍地址:　　
                            </label>
                          </template>
                        </q-select>
                      </div>
                      <div class="col-6">
                        <q-select
                          id="cboMailingDistirct"
                          outlined
                          dense
                          emit-value
                          v-model="cboMailingDistirct"
                          :label="$q.screen.lt.sm ? '地區' : void 0"
                          :options="mailing_address_03_options"
                        >
                        </q-select>
                      </div>
                      <div class="col-12">
                        <q-input
                          id=""
                          type="text"
                          outlined
                          dense
                          :label="$q.screen.lt.sm ? '路段' : void 0"
                          placeholder="請輸入戶籍地址"
                        >
                          <template v-slot:before v-if="$q.screen.gt.xs">
                            <label for="txtGoogleNum" class="font-s-size">
                              <span class="invisible">戶籍地址　　</span>
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
                            v-model="cboMailingCity"
                            :options="mailing_address_02_options"
                          />
                          <q-select
                            outlined
                            dense
                            v-model="cboMailingDistirct"
                            :options="mailing_address_03_options"
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
                    v-model="cboMailingCity"
                    :options="mailing_address_02_options"
                  />
                </div>
                <div class="col-6">
                  <q-select
                    class="q-mb-md"
                    outlined
                    dense
                    v-model="cboMailingDistirct"
                    :options="mailing_address_03_options"
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
                  id="txtCompanyName"
                  type="text"
                  outlined
                  dense
                  v-model="txtCompanyName"
                  :label="$q.screen.lt.sm ? '公司名稱' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtCompanyName" class="font-s-size">
                      公司名稱:　　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="txtJobTitle"
                  type="text"
                  outlined
                  dense
                  v-model="txtJobTitle"
                  :label="$q.screen.lt.sm ? '公司職稱' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtJobTitle" class="font-s-size">
                      公司職稱:　　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="txtProfession"
                  type="text"
                  outlined
                  dense
                  v-model="txtProfession"
                  :label="$q.screen.lt.sm ? '職業' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtProfession" class="font-s-size">
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
                  id="txtHighestEdu"
                  type="text"
                  outlined
                  dense
                  v-model="txtHighestEdu"
                  :label="$q.screen.lt.sm ? '最高學歷' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtHighestEdu" class="font-s-size">
                      最高學歷:　　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="txtTeacherQualification"
                  type="text"
                  outlined
                  dense
                  v-model="txtTeacherQualification"
                  :label="$q.screen.lt.sm ? '教學資格' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtTeacherQualification" class="font-s-size">
                      教學資格:　　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="txtHighestJob"
                  type="text"
                  outlined
                  dense
                  v-model="txtHighestJob"
                  :label="$q.screen.lt.sm ? '最高職務' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtHighestJob" class="font-s-size">
                      最高職務:　　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="txtFinalJob"
                  type="text"
                  outlined
                  dense
                  v-model="txtFinalJob"
                  :label="$q.screen.lt.sm ? '最終職務' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtFinalJob" class="font-s-size">
                      最終職務:　　
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="calIncomingDate"
                  class="q-pb-none"
                  outlined
                  dense
                  :label="$q.screen.lt.sm ? '入信日期' : void 0"
                  v-model="calIncomingDate"
                  mask="date"
                  :rules="['date']"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="calIncomingDate" class="font-s-size">
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
                        <q-date v-model="calIncomingDate">
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
                  id="txtCardNum"
                  type="number"
                  outlined
                  dense
                  v-model="txtCardNum"
                  :label="$q.screen.lt.sm ? '電子幹部卡號' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtCardNum" class="font-s-size">
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
                    id="txtIntroducerName"
                    type="text"
                    outlined
                    dense
                    v-model="txtIntroducerName"
                    :label="$q.screen.lt.sm ? '姓名' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="txtIntroducerName" class="font-s-size">
                        <span class="required">＊</span>姓名:　
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-input
                    id="txtIntroducerTel"
                    type="tel"
                    outlined
                    dense
                    v-model="txtIntroducerTel"
                    :label="$q.screen.lt.sm ? '住家電話' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="txtIntroducerTel" class="font-s-size">
                        住家電話:
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-input
                    id="txtIntroducerCell"
                    type="tel"
                    outlined
                    dense
                    v-model="txtIntroducerCell"
                    :label="$q.screen.lt.sm ? '行動電話' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="txtIntroducerCell" class="font-s-size">
                        行動電話:
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-2">
                  <q-input
                    id="txtIntroducerBCell"
                    type="tel"
                    outlined
                    dense
                    v-model="txtIntroducerBCell"
                    :label="$q.screen.lt.sm ? '公司電話' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="txtIntroducerBCell" class="font-s-size">
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
                    id="txtIntroducerDepartment"
                    type="text"
                    outlined
                    dense
                    v-model="txtIntroducerDepartment"
                    :label="$q.screen.lt.sm ? '部別' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="txtIntroducerDepartment" class="font-s-size">
                        部別:　　
                      </label>
                    </template>
                  </q-input>
                </div>
                <div class="col-6 col-md-4">
                  <q-input
                    id="txtIntroducerArea"
                    type="text"
                    outlined
                    dense
                    v-model="txtIntroducerArea"
                    :label="$q.screen.lt.sm ? '所屬區域' : void 0"
                  >
                    <template v-slot:before v-if="$q.screen.gt.xs">
                      <label for="txtIntroducerArea" class="font-s-size">
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
                  id="cboCountGradeArea"
                  outlined
                  dense
                  emit-value
                  v-model="cboCountGradeArea"
                  :label="$q.screen.lt.sm ? '計算成績區域' : void 0"
                  :options="cboCountGradeArea_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cboCountGradeArea" class="font-s-size">
                      <span class="required">＊</span>計算成績區域:
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="cboCountGradeDepartment"
                  type="text"
                  outlined
                  dense
                  emit-value
                  v-model="cboCountGradeDepartment"
                  :label="$q.screen.lt.sm ? '計算成績部別' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cboCountGradeDepartment" class="font-s-size">
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
                  id="cboNIncludedReason"
                  outlined
                  dense
                  emit-value
                  v-model="cboNIncludedReason"
                  :label="$q.screen.lt.sm ? '不列入會員原因' : void 0"
                  :options="cboNIncludedReason_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="cboNIncludedReason" class="font-s-size">
                      不列入會員原因:
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="txtNIncludedReason2"
                  type="text"
                  outlined
                  dense
                  v-model="txtNIncludedReason2"
                  placeholder="不列入會員其他原因"
                >
                </q-input>
              </div>
              <div class="col-6 col-md-3">
                <q-select
                  id="includedQuestion"
                  outlined
                  dense
                  emit-value
                  v-model="includedQuestion"
                  :label="$q.screen.lt.sm ? '不列入活動原因' : void 0"
                  :options="includedQuestion_options.arr"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="includedQuestion" class="font-s-size">
                      不列入活動原因:
                    </label>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="calEndDate"
                  class="q-pb-none"
                  outlined
                  dense
                  :label="$q.screen.lt.sm ? '結束日期' : void 0"
                  v-model="calEndDate"
                  mask="date"
                  :rules="['date']"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="calEndDate" class="font-s-size">
                      結束日期:
                    </label>
                  </template>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="calEndDate">
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
                  id="txtNote"
                  type="text"
                  outlined
                  dense
                  v-model="txtNote"
                  :label="$q.screen.lt.sm ? '備註' : void 0"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="txtNote" class="font-s-size">
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