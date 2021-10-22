<script>
export default {
  props: ['memberCode', 'memberName', 'stuDepartment', 'currScoolName', 'grade', 'graduate', 'eduCode', 'stuDepartDiff','comingScoolName', 'collegeAssociation', 'enrollDate', 'gradeStatusDiff', 'graduateStatusDiff', 'isMoveOut', 'isMoveOutDataEdit', 'isMoveOutDateDone', 'show'],
  data() {
    return {
      eduCode_options: ["國小", "國中", "高中", "大學", "碩士", "博士"],
      isEdit: false,
      select: {
        memberCode: this.memberCode,
        memberName: this.memberName,
        stuDepartment: this.stuDepartment,
        currScoolName: this.currScoolName,
        grade: this.grade,
        graduate: this.graduate,
        eduCode: this.eduCode,
        stuDepartDiff: this.stuDepartDiff,
        comingScoolName: this.comingScoolName,
        collegeAssociation: this.collegeAssociation,
        enrollDate: this.enrollDate,
        gradeStatusDiff: this.gradeStatusDiff,
        graduateStatusDiff: this.graduateStatusDiff,
        isMoveOut: this.isMoveOut,
        isMoveOutDataEdit: this.isMoveOutDataEdit,
        isMoveOutDateDone: this.isMoveOutDateDone,
        show: this.show,
      },
    };
  },
  methods: {

  },
  watch: {
    select: {
      deep: true,
      handler(val) {
        this.$emit("update", val);
      },
    },
  },
};
</script>
<template>
  <div class="order-first">
    <!-- {{ select.eduCode }} -->
    <q-btn
      @click="isEdit = true"
      flat
      round
      dense
      color="primary"
      icon="edit"
      class="q-mr-sm"
    />

    <!-- dialog-遷出資料 -->
    <q-dialog v-model="isEdit">
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
            <div class="text-h6">編輯</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-x-sm q-col-gutter-md q-py-sm">
              <div class="col-6 col-md-2">
                <q-select
                  id="eduCode"
                  outlined
                  dense
                  emit-value
                  v-model="select.eduCode"
                  :label="$q.screen.lt.sm ? '學歷代碼' : void 0"
                  :options="eduCode_options"
                >
                </q-select>
              </div>
            </div>
            <q-btn label="確認" color="primary" v-close-popup />
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>