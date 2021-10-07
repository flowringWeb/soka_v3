<script>
import MemNew from "@/components/Member/MemNew";
export default {
  name: "NewMember",
  components: {
    MemNew,
  },
  data() {
    return {
        isFormalMem: false
    };
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
<template>
  <div>
    <MemNew :isFormalMem="isFormalMem"></MemNew>
  </div>
</template>
<style lang="scss" scoped>
</style>