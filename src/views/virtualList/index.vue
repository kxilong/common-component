<template>
  <virtual-list :size="100" :remain="8" :items="list" :variable="false">
    <template #default="{ item }">
      <div style="border: 1px solid cadetblue; padding: 20px;">
        {{ item.id }}. {{ item.value }}
      </div>
    </template>
  </virtual-list>
</template>

<script>
import Mock from "mockjs";
import VirtualList from "@/components/VirtualList";

const list = [];
for (let i = 0; i < 10000; i++) {
  list.push({
    id: i,
    value: Mock.Random.sentence(5, 50) // 随机生成有 5 ~ 10 个句子的中文段落
  });
}

export default {
  components: {
    VirtualList
  },
  data() {
    return {
      list
    };
  }
};
</script>

<style></style>
