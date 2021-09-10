<script>
export default {
  name: "MainLayout",

  components: {
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>


<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <!-- <q-btn round dense flat color="white" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                 @click="$q.fullscreen.toggle()"
                 v-if="$q.screen.gt.sm">
          </q-btn> -->
          <q-btn
            round
            dense
            flat
            color="white"
            icon="fab fa-github"
            type="a"
            href="https://github.com/pratik227/quasar-admin"
            target="_blank"
          >
          </q-btn>
          <q-btn
            round
            dense
            flat
            icon="fas fa-heart"
            style="color: #9d4182 !important"
            type="a"
            href="https://github.com/sponsors/pratik227"
            target="_blank"
          >
          </q-btn>
          <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating> 5 </q-badge>
            <q-menu>
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn
                    label="View All"
                    style="max-width: 120px !important"
                    flat
                    dense
                    class="text-indigo-8"
                  ></q-btn>
                </q-card>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary text-white"
    >
      <q-list>
        <q-expansion-item icon="pages" label="首頁" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section><q-item-label>首頁</q-item-label></q-item-section>
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>專業服務處</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-item to="/流程作業" active-class="q-item-no-link-highlighting" expand-icon-class="text-white">
          <q-item-section avatar
            ><q-icon name="check_circle_outline"
          /></q-item-section>
          <q-item-section
            ><q-item-label>(1)流程作業</q-item-label></q-item-section
          >
        </q-item>

        <q-expansion-item icon="pages" label="(2)系統管理" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>系統日誌管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>外部系統介接</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>系統代碼管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>使用者帳號管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>職務權限管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>功能權限 模板管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>資料權限 模板管理</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(3)訊息管理" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>Lale(示意)</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>Mail(示意)</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>行事曆(示意)</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>公佈欄</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>活動訊息</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>小鈴鐺</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>流程待辦</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(4)報表管理" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>報表一</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>報表二</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(5)組織劃分" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>劃分預先規劃</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>人事預規劃草稿</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>劃分專案管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>劃分人事管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>一般人事管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >人事任命/佈達報表/核對報表</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >郵遞區號&書統資料管理</q-item-label
                ></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(6)會員管理" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>入信卡</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>會員資料管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>部別變更</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>個人資料簡歷</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >會員條款發佈&歷史版本</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>活動程度管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >活動程度統計查詢＆報表</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>告警系統</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >全國會館講堂數量提報</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >全國會館講堂 組織數一覽表</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>全國人數統計表</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(7)活動管理(活動&講師)" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >活動代碼管理(大中細類)</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>活動管理(總)</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>報到名單管理(義工)</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>活動場次管理(區)</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>資格篩選(場次)</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>符合資格名單</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>…(待增加)</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(8)考試管理" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>考試成績維護</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>…(待增加)</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(9)廣宣流布(目標管理)" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >統計職務群組管理&幹部統計</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>年度目標維護</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>總合目標維護</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>區目標維護</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >目標達成紀錄(區~地區)
                </q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >年度目標報表&進度查詢</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>新簽卡名單</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(10)法人事務(御本尊)" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>倉庫維護</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>庫存管理</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>敬領申請</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>御本尊申請原因</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>御本尊代碼管理</q-item-label></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item icon="pages" label="(11)代碼表" expand-icon-class="text-white">
          <q-list class="q-pl-lg">
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員資料主檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]區域代碼主檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]人才單位代碼檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]職務群組代碼檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]職務代碼主檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>會館代碼主檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>大學代碼主檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>大學會代碼主檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>flow發起代碼檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>flow群組代碼檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>會員任命職務資料檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >會員卸任人才單位職務資料檔</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[法]發放區主檔</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >[法]御本尊大類代碼檔(御本尊代碼)</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >[法]申請御本尊資料檔(御本尊代碼)</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >[法]御本尊細類代碼檔(御本尊代碼)</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >[法]御本尊作業方式資料檔(御本尊代碼)</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >[法]申請御本尊原因代碼檔(御本尊代碼)</q-item-label
                ></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員學歷</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員層級</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員授獎</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員稱謂</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員研修</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員家族</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label>[會]會員異動資料</q-item-label></q-item-section
              >
            </q-item>
            <q-item to="/頁面" active-class="q-item-no-link-highlighting">
              <q-item-section avatar><q-icon name="" /></q-item-section>
              <q-item-section
                ><q-item-label
                  >[活]活動代碼管理(大中細類)</q-item-label
                ></q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-item to="/Member" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Member</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/TestEditor" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>TestEditor</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/TestZipCode" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>TestZipCode</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/TestApi" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>TestApi</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Member-search" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>會員查詢</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

