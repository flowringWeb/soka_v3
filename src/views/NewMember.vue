<script>
import MemNew from "@/components/Member/MemNew";
export default {
  name: "NewMember",
  components: {
    MemNew,
  },
  data() {
    return {
      formalType: "formal",
      isFormalMem: true
    };
  },
  watch: {

  },
  computed: {

  },
  methods: {

  },
};
</script>
<template>
  <div>
    <MemNew :formalType="formalType" :isFormalMem="isFormalMem"></MemNew>
  </div>
</template>
<style lang="scss" scoped>

</style>