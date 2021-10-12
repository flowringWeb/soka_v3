<script>
import MemTable from "@/components/Member/MemTable";
export default {
  name: "NewMember",
  props: {
    //判別正式會員|非正式會員
    isFormalMem: {
      type: Boolean,
      required: true,
    },
    formalType: {
      type: String,
      required: true,
    },
  },
  components: {
    MemTable,
  },
  data() {
    return {
      //驗證
      notFilledFormItems: [],
      //判別stage階段
      ft_stage: true,
      sd_stage: false,

      //判別未滿20
      isUnder20: false,

      //在學生
      inSchoolRole: "",
      inSchoolRole_options: [
        {
          label: "國小",
          value: "ele",
        },
        {
          label: "國中",
          value: "junior",
        },
        {
          label: "高中",
          value: "senior",
        },
        {
          label: "大學",
          value: "college",
        },
        {
          label: "碩士",
          value: "master",
        },
        {
          label: "博士",
          value: "dr",
        },
      ],

      //form
      ftReqFormItem: {
        memberName: "",
        bornDate: "",
        calDept: "",
        calRecord: "",
      },
      plusFormalReqFormItem: {
        memberId: "",
        enrollDate: "",
      },
      reqFormItem: {
        sex: "",
        dept: "",
        memberName: "",
        bornDate: "",
        cboBelongArea: "",
        cboBelongArea2: "",
        email: "",
        mobileNumber: "",

        //通訊地址
        mailingPostalCode: "",
        mailingCity: "",
        mailingDistirct: "",
        mallingStreetAddress: "",

        //介紹人
        introducerName: "",
        introducerTel: "",
        introducerDepartment: "",
      },
      telNumber: "",
      businessNumber: "",
      cboBelongArea_options: [],
      cboBelongArea2_options: [],
      mailingCity_options: ["請選擇", "台北市", "新北市"],
      mailingDistirct_options: ["請選擇", "汐止區", "新店區"],
      calDept_options: ["a", "b"],
      calRecord_options: ["a", "b"],

      //戶籍地址
      theSameWithMailing: false,
      residentPostalCode: "",
      residentCity: "",
      residentDistirct: "",
      residentStreetAddress: "",
      residentCity_options: ["請選擇", "台北市", "新北市"],
      residentDistirct_options: ["請選擇", "汐止區", "新店區"],

      distNoLive: "",
      distNoLive_options: [],
      profession: "",
      jobTitle: "",
      cboConfidenceBg: "",
      cboConfidenceBg_options: [],

      //介紹人
      introducerDepartment_options: ["壯", "婦"],
      introducerArea: "",

      //監護人
      theSameWithIntroducer: false,
      underAgeReqFormItem: {
        guardianName: "",
        guardianTel: "",
        guardianEmail: "",
      },
      guardianIsJoin: "",
      guardianIsJoin_options: ["是", "否"],

      // 就學資料表
      schoolAttendColumns: [
        {
          name: "currScool",
          align: "center",
          label: "就學",
          field: "currScool",
        },
        {
          name: "currScoolName",
          label: "學校名稱",
          align: "center",
          field: "currScoolName",
          style: "width: 10px",
        },
        {
          name: "grade",
          label: "年級",
          align: "center",
          field: "grade",
        },
        {
          name: "f_mcode",
          label: "就讀科系",
          field: "f_mcode",
          align: "center",
        },
        {
          name: "isGraduate",
          label: "是否畢業",
          field: "isGraduate",
          align: "center",
        },
        {
          name: "enrollDate",
          label: "入學日期",
          field: "enrollDate",
          align: "center",
        },
      ],
      schoolAttendData: [],
      schoolAttendDataLoading: false,
      note: "",

      //dialog-uploadImg
      uploadImg: false,
    };
  },
  watch: {
    //戶籍地址同上
    theSameWithMailing: {
      handler(val) {
        if (val == true) {
          this.residentPostalCode = this.reqFormItem["mailingPostalCode"];
          this.residentCity = this.reqFormItem["mailingCity"];
          this.residentDistirct = this.reqFormItem["mailingDistirct"];
          this.residentStreetAddress = this.reqFormItem["mallingStreetAddress"];
        } else {
          this.residentPostalCode = "";
          this.residentCity = "";
          this.residentDistirct = "";
          this.residentStreetAddress = "";
        }
      },
    },
  },
  computed: {
    calAge() {
      const today = new Date();
      let age =
        today.getFullYear() -
        new Date(this.ftReqFormItem["bornDate"]).getFullYear();
      const m =
        today.getMonth() - new Date(this.ftReqFormItem["bornDate"]).getMonth();
      if (
        m < 0 ||
        (m === 0 &&
          today.getDate() < new Date(this.ftReqFormItem["bornDate"]).getDate())
      ) {
        age = age - 1;
      }
      return age;
    },
  },
  methods: {
    //檢查會員
    checkMem() {
      //判別正式與非正式會員
      if (this.formalType == "formal") {
        this.valFtFormalReqFormItems();
        if (
          this.$refs.f_memberName.hasError ||
          this.$refs.f_bornDate.hasError ||
          this.$refs.f_calDept.hasError ||
          this.$refs.f_calRecord.hasError
        ) {
          this.$q.notify({
            message: "欄位尚未填寫",
            type: "warning",
            position: "top-right",
          });
        } else {
          this.$q.notify({
            message: "檢查成功，請點擊確認",
            type: "info",
            position: "top-right",
            actions: [
              {
                label: "確認",
                color: "white",
                handler: () => {
                  this.goNextStage();
                },
              },
            ],
          });
        }
      } else if (this.formalType == "inFormal") {
        this.valFtInformalReqFormItems();
        if (
          this.$refs.f_memberName.hasError ||
          this.$refs.f_bornDate.hasError
        ) {
          this.$q.notify({
            message: "欄位尚未填寫",
            type: "warning",
            position: "top-right",
          });
        } else {
          this.$q.notify({
            message: "檢查成功",
            type: "info",
            position: "top-right",
            actions: [
              {
                label: "確認",
                color: "white",
                handler: () => {
                  this.goNextStage();
                },
              },
            ],
          });
        }
      }
    },
    goNextStage() {
      this.ft_stage = false;
      this.sd_stage = true;
      let personAge = this.calAge;
      console.log(personAge);
      if (personAge < 20) {
        this.isUnder20 = true;
      } else {
        this.isUnder20 = false;
      }
    },
    //驗證ft_stage-非正式會員(2)
    valFtInformalReqFormItems() {
      this.$refs.f_memberName.validate();
      this.$refs.f_bornDate.validate();
    },
    //驗證ft_stage-正式會員(4)
    valFtFormalReqFormItems() {
      this.valFtInformalReqFormItems();
      this.$refs.f_calDept.validate();
      this.$refs.f_calRecord.validate();
    },
    //驗證sd_stage-非正式會員必填(15)
    valSdInformalReqFormItems() {
      this.$refs.sex.validate();
      this.$refs.dept.validate();
      this.$refs.memberName.validate();
      this.$refs.bornDate.validate();
      this.$refs.cboBelongArea01.validate();
      this.$refs.cboBelongArea02.validate();
      this.$refs.email.validate();
      this.$refs.mobileNumber.validate();
      this.$refs.mailingPostalCode.validate();
      this.$refs.mailingCity.validate();
      this.$refs.mailingDistirct.validate();
      this.$refs.mallingStreetAddress.validate();
      this.$refs.introducerName.validate();
      this.$refs.introducerTel.validate();
      this.$refs.introducerDepartment.validate();
    },
    //驗證sd_stage-正式會員必填(17)
    valSdFormalReqFormItems() {
      this.$refs.memberId.validate();
      this.$refs.enrollDate.validate();
      this.valSdInformalReqFormItems();
    },
    //驗證sd_stage-未滿20歲(3)
    valSdUnderAgeReqFormItems() {
      this.$refs.guardianName.validate();
      this.$refs.guardianTel.validate();
      this.$refs.guardianEmail.validate();
    },

    //驗證sd_stage-計算數量
    calNotFilledFormItems() {
      for (let key in this.reqFormItem) {
        if (!this.reqFormItem[key]) {
          this.notFilledFormItems.push(key);
        }
      }
      if (this.formalType == "formal") {
        for (let key in this.plusFormalReqFormItem) {
          if (!this.plusFormalReqFormItem[key]) {
            this.notFilledFormItems.push(key);
          }
        }
      }
      if (this.calAge < 20) {
        for (let key in this.underAgeReqFormItem) {
          if (!this.underAgeReqFormItem[key]) {
            this.notFilledFormItems.push(key);
          }
        }
      }
      console.log(this.notFilledFormItems);
      return this.notFilledFormItems;
    },
    //驗證sd_stage執行驗證並提示訊息
    checkRequireItems() {
      if (this.formalType == "formal") {
        this.valSdFormalReqFormItems(); //17
      } else if (this.formalType == "inFormal") {
        this.valSdInformalReqFormItems(); //15
      }
      if (this.calAge < 20) {
        this.valSdUnderAgeReqFormItems(); //3
      }
      this.calNotFilledFormItems();
      if (this.notFilledFormItems.length !== 0) {
        this.$q.notify({
          message: `尚有${this.notFilledFormItems.length}個欄位未填`,
          type: "warning",
          position: "top-right",
        });
        this.notFilledFormItems = [];
      } else {
        this.$q.notify({
          message: `已成功送出`,
          type: "positive",
          position: "top-right",
        });
      }
    },
  },
};
</script>
<template>
  <div>
    <q-form v-if="ft_stage" class="q-px-md q-py-md q-gutter-y-md form__stage01">
      <q-input
        id="memberName"
        class=""
        type="text"
        outlined
        dense
        v-model="ftReqFormItem['memberName']"
        :label="$q.screen.lt.sm ? '姓名' : void 0"
        hide-bottom-space
        ref="f_memberName"
        lazy-rules
        :rules="[(val) => val && val.length > 0]"
      >
        <template v-slot:before v-if="$q.screen.gt.xs">
          <label for="memberName">
            <span class="required">＊</span>姓名:　　　　
          </label>
        </template>
      </q-input>
      <q-input
        id="bornDate"
        class=""
        outlined
        dense
        :label="$q.screen.lt.sm ? '生日' : void 0"
        hide-bottom-space
        v-model="ftReqFormItem['bornDate']"
        mask="date"
        ref="f_bornDate"
        lazy-rules
        :rules="[(val) => val && val.length > 0]"
      >
        <template v-slot:before v-if="$q.screen.gt.xs">
          <label for="bornDate">
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
              <q-date v-model="ftReqFormItem['bornDate']">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="確認" color="primary" />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <template v-if="isFormalMem">
        <q-select
          id="calDept"
          outlined
          dense
          emit-value
          v-model="ftReqFormItem['calDept']"
          :label="$q.screen.lt.sm ? '計算成績部別' : void 0"
          hide-bottom-space
          :options="calDept_options"
          ref="f_calDept"
          lazy-rules
          :rules="[(val) => val && val.length > 0]"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="calDept">
              <span class="required">＊</span>計算成績部別:
            </label>
          </template>
        </q-select>
        <q-select
          id="calRecord"
          outlined
          dense
          emit-value
          v-model="ftReqFormItem['calRecord']"
          :label="$q.screen.lt.sm ? '計算成績區域' : void 0"
          hide-bottom-space
          :options="calRecord_options"
          ref="f_calRecord"
          lazy-rules
          :rules="[(val) => val && val.length > 0]"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="calRecord">
              <span class="required">＊</span>計算成績區域:
            </label>
          </template>
        </q-select>
      </template>

      <div class="flex justify-center q-gutter-x-md q-gutter-y-md">
        <q-btn color="primary" label="取消" v-close-popup />
        <q-btn color="primary" label="檢查會員" @click="checkMem" />
      </div>
    </q-form>

    <q-form v-if="sd_stage" class="q-px-md q-py-none">
      <div
        class="column row-md justify-start items-center q-col-gutter-md q-pt-md"
      >
        <div class="col-md-10 order-last order-md-first">
          <div class="row items-center q-col-gutter-md">
            <div class="col-12 col-md-4">
              <div class="flex items-center">
                <label for=""> <span class="required">＊</span>性別: </label>
                <q-field
                  ref="sex"
                  borderless
                  lazy-rules
                  hide-bottom-space
                  :value="reqFormItem['sex']"
                  :rules="[(val) => val && val.length > 0]"
                >
                  <q-radio v-model="reqFormItem['sex']" val="man" label="男" />
                  <q-radio
                    v-model="reqFormItem['sex']"
                    val="woman"
                    label="女"
                  />
                </q-field>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="flex items-center">
                <label for=""> <span class="required">＊</span>部別: </label>
                <q-field
                  ref="dept"
                  borderless
                  lazy-rules
                  hide-bottom-space
                  :value="reqFormItem['dept']"
                  :rules="[(val) => val && val.length > 0]"
                >
                  <q-radio v-model="reqFormItem['dept']" val="壯" label="壯" />
                  <q-radio v-model="reqFormItem['dept']" val="婦" label="婦" />
                  <q-radio v-model="reqFormItem['dept']" val="男" label="男" />
                  <q-radio v-model="reqFormItem['dept']" val="女" label="女" />
                </q-field>
              </div>
            </div>
            <template>
              <div class="col-12 col-md-12" v-if="isFormalMem">
                <div class="flex items-center">
                  <label for="">在學生:</label>
                  <q-radio
                    v-for="item in inSchoolRole_options"
                    :key="item.value"
                    :val="item.value"
                    :label="item.label"
                    v-model="inSchoolRole"
                  />
                </div>
              </div>
              <div class="col-6 col-md-3">
                <q-input
                  id="memberName"
                  type="text"
                  outlined
                  dense
                  v-model="reqFormItem['memberName']"
                  :label="$q.screen.lt.sm ? '姓名' : void 0"
                  hide-bottom-space
                  ref="memberName"
                  lazy-rules
                  :rules="[(val) => val && val.length > 0]"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="memberName">
                      <span class="required">＊</span>姓名:
                    </label>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3" v-if="isFormalMem">
                <q-input
                  id="memberId"
                  type="text"
                  outlined
                  dense
                  v-model="plusFormalReqFormItem['memberId']"
                  :label="$q.screen.lt.sm ? '會員編號' : void 0"
                  hide-bottom-space
                  ref="memberId"
                  lazy-rules
                  :rules="[(val) => val && val.length > 0]"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="memberId">
                      <span class="required">＊</span>會員編號:
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
                  hide-bottom-space
                  v-model="reqFormItem['bornDate']"
                  mask="date"
                  ref="bornDate"
                  lazy-rules
                  :rules="[(val) => val && val.length > 0]"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="bornDate">
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
                        <q-date v-model="reqFormItem['bornDate']">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="確認" color="primary" />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-6 col-md-3" v-if="isFormalMem">
                <q-input
                  id="enrollDate"
                  class="q-pb-none"
                  outlined
                  dense
                  :label="$q.screen.lt.sm ? '入會日期' : void 0"
                  hide-bottom-space
                  v-model="reqFormItem['enrollDate']"
                  mask="date"
                  ref="enrollDate"
                  lazy-rules
                  :rules="[(val) => val && val.length > 0]"
                >
                  <template v-slot:before v-if="$q.screen.gt.xs">
                    <label for="enrollDate">
                      <span class="required">＊</span>入會日期:
                    </label>
                  </template>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="plusFormalReqFormItem['enrollDate']">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="確認" color="primary" />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </template>
            <div
              class="col-6"
              :class="this.formalType == 'formal' ? 'col-md-4' : 'col-md-3'"
            >
              <q-select
                id="cboBelongArea"
                outlined
                dense
                emit-value
                v-model="reqFormItem['cboBelongArea']"
                :label="$q.screen.lt.sm ? '所屬區域' : void 0"
                hide-bottom-space
                :options="cboBelongArea_options"
                ref="cboBelongArea01"
                lazy-rules
                :rules="[(val) => val && val.length > 0]"
              >
                <template v-slot:before v-if="$q.screen.gt.xs">
                  <label for="cboBelongArea">
                    <span class="required">＊</span>所屬區域:
                  </label>
                </template>
              </q-select>
            </div>
            <div
              class="col-6"
              :class="this.formalType == 'formal' ? 'col-md-4' : 'col-md-3'"
            >
              <q-select
                id="cboBelongArea2"
                outlined
                dense
                emit-value
                v-model="reqFormItem['cboBelongArea2']"
                :label="$q.screen.lt.sm ? '所屬區域' : void 0"
                hide-bottom-space
                :options="cboBelongArea2_options"
                ref="cboBelongArea02"
                lazy-rules
                :rules="[(val) => val && val.length > 0]"
              >
              </q-select>
            </div>
            <div class="col-12 col-md-4">
              <q-input
                id="email"
                type="email"
                outlined
                dense
                v-model="reqFormItem['email']"
                :label="$q.screen.lt.sm ? 'Email' : void 0"
                hide-bottom-space
                ref="email"
                lazy-rules
                :rules="[(val) => val && val.length > 0]"
              >
                <template v-slot:before v-if="$q.screen.gt.xs">
                  <label for="email">
                    <span class="required">＊</span>Email:
                  </label>
                </template>
              </q-input>
            </div>
            <div class="col-6 col-md-4">
              <q-input
                id="mobileNumber"
                type="tel"
                outlined
                dense
                v-model="reqFormItem['mobileNumber']"
                :label="$q.screen.lt.sm ? '行動電話' : void 0"
                hide-bottom-space
                ref="mobileNumber"
                lazy-rules
                :rules="[(val) => val && val.length > 0]"
              >
                <template v-slot:before v-if="$q.screen.gt.xs">
                  <label for="mobileNumber">
                    <span class="required">＊</span>
                    行動電話:
                  </label>
                </template>
              </q-input>
            </div>
            <div class="col-6 col-md-4">
              <q-input
                id="telNumber"
                type="tel"
                outlined
                dense
                v-model="telNumber"
                :label="$q.screen.lt.sm ? '住家電話' : void 0"
              >
                <template v-slot:before v-if="$q.screen.gt.xs">
                  <label for="telNumber"> 住家電話: </label>
                </template>
              </q-input>
            </div>
            <div class="col-6 col-md-4">
              <q-input
                id="businessNumber"
                type="tel"
                outlined
                dense
                v-model="businessNumber"
                :label="$q.screen.lt.sm ? '公司電話' : void 0"
              >
                <template v-slot:before v-if="$q.screen.gt.xs">
                  <label for="businessNumber"> 公司電話: </label>
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
            <q-btn color="primary" label="變更照片" @click="uploadImg = true" />
          </q-card>
        </div>
      </div>
      <div
        class="row justify-start items-center q-col-gutter-md q-pt-md q-mb-md"
      >
        <div class="col-6 col-md-2">
          <q-input
            id="mailingPostalCode"
            type="text"
            outlined
            dense
            v-model="reqFormItem['mailingPostalCode']"
            :label="$q.screen.lt.sm ? '郵遞區號' : void 0"
            hide-bottom-space
            placeholder="請輸入郵遞區號"
            ref="mailingPostalCode"
            lazy-rules
            :rules="[(val) => val && val.length > 0]"
          >
            <template v-slot:before v-if="$q.screen.gt.xs">
              <label for="mailingPostalCode">
                <span class="required">＊</span>通訊地址:
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
            v-model="reqFormItem['mailingCity']"
            :label="$q.screen.lt.sm ? '縣市' : void 0"
            hide-bottom-space
            :options="mailingCity_options"
            ref="mailingCity"
            lazy-rules
            :rules="[(val) => val && val.length > 0]"
          >
          </q-select>
        </div>
        <div class="col-6 col-md-2">
          <q-select
            id="mailingDistirct"
            outlined
            dense
            emit-value
            v-model="reqFormItem['mailingDistirct']"
            :label="$q.screen.lt.sm ? '地區' : void 0"
            hide-bottom-space
            :options="mailingDistirct_options"
            ref="mailingDistirct"
            lazy-rules
            :rules="[(val) => val && val.length > 0]"
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
            v-model="reqFormItem['mallingStreetAddress']"
            :label="$q.screen.lt.sm ? '路段' : void 0"
            hide-bottom-space
            placeholder="請輸入街道門牌"
            ref="mallingStreetAddress"
            lazy-rules
            :rules="[(val) => val && val.length > 0]"
          >
          </q-input>
        </div>
      </div>
      <div class="row q-mb-sm">
        <div class="items-center">
          <label v-if="$q.screen.gt.xs">戶籍地址: </label>
          <q-checkbox v-model="theSameWithMailing" label="同上" size="xs" />
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
              <label for="residentPostalCode">
                <span class="invisible">戶籍地址: </span>
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
      <div class="row q-mb-lg q-col-gutter-md" v-if="isFormalMem">
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
              <label for="distNoLive"> 戶籍區: </label>
            </template>
          </q-select>
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
              <label for="profession"> 職業: </label>
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
              <label for="jobTitle"> 公司職稱: </label>
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
              <label for="cboConfidenceBg"> 信心背景: </label>
            </template>
          </q-select>
        </div>
      </div>
      <section v-if="isFormalMem">
        <mem-table
          class="q-mb-lg"
          :tableColumn="schoolAttendColumns"
          :tableData="schoolAttendData"
          :showMultiSelect="false"
          :operaShow="$route.params.type === 'view' ? false : true"
          :table-loading="schoolAttendDataLoading"
          rowKey="name"
          tabTitle="就學資料"
        >
        </mem-table>
        <q-input
          id="note"
          type="text"
          outlined
          dense
          v-model="note"
          :label="$q.screen.lt.sm ? '備註' : void 0"
        >
          <template v-slot:before v-if="$q.screen.gt.xs">
            <label for="note"> 備註: </label>
          </template>
        </q-input>
      </section>
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
              v-model="reqFormItem['introducerName']"
              :label="$q.screen.lt.sm ? '姓名' : void 0"
              hide-bottom-space
              ref="introducerName"
              lazy-rules
              :rules="[(val) => val && val.length > 0]"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="introducerName">
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
              v-model="reqFormItem['introducerTel']"
              :label="$q.screen.lt.sm ? '電話' : void 0"
              hide-bottom-space
              ref="introducerTel"
              lazy-rules
              :rules="[(val) => val && val.length > 0]"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="introducerTel">
                  <span class="required">＊</span>電話:
                </label>
              </template>
              <template v-slot:after>
                <q-btn color="primary" label="查詢" />
              </template>
            </q-input>
          </div>
          <div class="col-6 col-md-3">
            <q-select
              id="introducerDepartment"
              outlined
              dense
              emit-value
              v-model="reqFormItem['introducerDepartment']"
              :options="introducerDepartment_options"
              :label="$q.screen.lt.sm ? '部別' : void 0"
              hide-bottom-space
              ref="introducerDepartment"
              lazy-rules
              :rules="[(val) => val && val.length > 0]"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="introducerDepartment">
                  <span class="required">＊</span>部別:
                </label>
              </template>
            </q-select>
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
                <label for="introducerArea"> 所屬區域: </label>
              </template>
            </q-input>
          </div>
        </div>
      </section>
      <div class="divider"></div>
      <section class="guardian q-pt-md q-mb-md" v-if="isUnder20">
        <div class="flex items-center q-mb-md">
          <div class="">監護人</div>
          <q-checkbox v-model="theSameWithIntroducer" label="同上" size="xs" />
        </div>
        <div class="row justify-start items-center q-col-gutter-md">
          <div class="col-6 col-md-3">
            <q-input
              id="guardianName"
              type="text"
              outlined
              dense
              v-model="underAgeReqFormItem['guardianName']"
              :label="$q.screen.lt.sm ? '姓名' : void 0"
              ref="guardianName"
              hide-bottom-space
              lazy-rules
              :rules="[(val) => val && val.length > 0]"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="guardianName"> 姓名: </label>
              </template>
            </q-input>
          </div>
          <div class="col-6 col-md-3">
            <q-input
              id="guardianTel"
              type="tel"
              outlined
              dense
              v-model="underAgeReqFormItem['guardianTel']"
              :label="$q.screen.lt.sm ? '電話' : void 0"
              ref="guardianTel"
              hide-bottom-space
              lazy-rules
              :rules="[(val) => val && val.length > 0]"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="guardianTel"> 電話: </label>
              </template>
            </q-input>
          </div>
          <div class="col-6 col-md-3">
            <q-input
              id="guardianEmail"
              type="text"
              outlined
              dense
              v-model="underAgeReqFormItem['guardianEmail']"
              :label="$q.screen.lt.sm ? 'Email' : void 0"
              ref="guardianEmail"
              hide-bottom-space
              lazy-rules
              :rules="[(val) => val && val.length > 0]"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="guardianEmail"> Email: </label>
              </template>
            </q-input>
          </div>
          <div class="col-6 col-md-3">
            <q-select
              id="guardianIsJoin"
              outlined
              dense
              emit-value
              v-model="guardianIsJoin"
              :options="guardianIsJoin_options"
              :label="$q.screen.lt.sm ? '是否入會' : void 0"
            >
              <template v-slot:before v-if="$q.screen.gt.xs">
                <label for="guardianIsJoin"> 是否入會: </label>
              </template>
            </q-select>
          </div>
        </div>
      </section>
      <div class="flex justify-center q-gutter-x-md q-my-md">
        <q-btn color="primary" label="取消" />
        <q-btn color="primary" label="儲存" @click="checkRequireItems" />
      </div>
    </q-form>

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
  </div>
</template>
<style lang="scss" scoped>
.form {
  &__stage01 {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}
.divider {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed gray;
  margin: 20px 0 10px 0;
}
.required {
  color: red;
}
label {
  color: #000;
  font-size: 14px;
}
/deep/ .q-field__control {
  color: #000;
}
// .v-enter-active,
// .v-leave-active {
//   transition: opacity 0.5s;
// }

// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
// }

// .v-enter-to,
// .v-leave-from {
//   opacity: 1;
// }
</style>