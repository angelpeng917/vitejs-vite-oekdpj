<script setup>
// setup 表示在每次創建組件的實例時執行
import { ref } from 'vue';

defineProps({
  //传递纯类型参数的方式来声明
  isShow: Boolean,
});

const count = ref(0);
const count1 = ref(1);
</script>


<script>
export default {
  data() {
    return {
      msg: 'Vite + Vue',
      name: 'test',
      test: '30',
      testone: '10',
      picked: '1',
      message: '',
      loginType: 'username',
      checkedNames: [],
      selected: '未選擇',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
    };
  },
  methods: {
    say(message) {
      alert(message);
    },
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>

<template>
  <!-- 輸入匡同步 -->
  <h1>輸入匡同步</h1>
  <h2>{{ msg }}</h2>
  <h2>{{ name }}</h2>
  VM1:<input v-model="msg" /><br />
  VM2:<input v-model="name" /><br />
  <!-- 計算數值 -->
  <h1>計算數值</h1>
  <h2>{{ test * testone }}</h2>
  <!-- 按鈕選單 -->
  <h1>按鈕選單</h1>
  <input type="radio" id="one" value="1" v-model="picked" />
  <label for="one">one</label><br />
  <input type="radio" id="two" value="2" v-model="picked" />
  <label for="two">two</label><br />
  <span>Picked: {{ picked }}</span>
  <br />
  <!-- 下拉列表選單 -->
  <h1>下拉列表選單</h1>
  <select v-model="selected">
    <option disabled value="">請選擇</option>
    <option>台北市</option>
    <option>新北市</option>
  </select>
  <p>Selected:{{ selected }}</p>
  <br />
  <!-- 多選選單 -->
  <h1>多選選單</h1>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <br />
  <!-- 樣式綁定 -->
  <h1>樣式綁定</h1>
  <input
    type="text"
    v-model.trim="message"
    placeholder="請勿超過十個字"
    v-bind:class="{ error: message.length > 10 }"
  />
  <!-- 按鈕計數 -->
  <div class="card">
    <h1>按鈕計數</h1>
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" v-on:click="count1++">count is {{ count1 }}</button>
    <!-- v-on:事件名稱="運算式" = @事件名稱="運算式" 呈現相同結果-->
    <br />
    <br />
    <!-- v-if I & v-else-->
    <h1>v-if ＆v-else</h1>
    Choose One:
    <label>
      <input type="radio" value="username" v-model="loginType" />
      Username
    </label>

    <label>
      <input type="radio" value="email" v-model="loginType" />
      Email
    </label>

    <hr />

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username" />
    </template>

    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email" />
    </template>
    <br />
    <br />
    <!-- v-for 與範圍 透過v-for="page in 10"來做到渲染頁碼的效果 -->
    <h1>v-for</h1>
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href>&lt;</a></li>
      <!-- 表示出現十次 -->
      <li class="page-item" v-for="page in 10">
        <a class="page-link" href>{{ page }}</a>
      </li>
      <li class="page-item"><a class="page-link" href>&gt;</a></li>
    </ul>
    <br />
    <!-- <transition>漸變與動畫 -->
    <h1>漸變與動畫</h1>
    <div style="height: 120px">
      <transition>
        <!-- 這裡透過 v-show 來控制顯示或隱藏 -->
        <div class="block" v-show="isShow">HELLO VUE</div>
      </transition>
    </div>

    <button @click="isShow = !isShow">Toggle</button>
    <br />
    <!-- 在內聯處理程序中調用方法 -->
    <h1>彈跳訊息</h1>
    <button @click="say('hi')">Say hi</button>
    <button @click="say('what')">Say what</button>
    <br />
    <!-- 訪問內聯處理程序中的原始 DOM 事件 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
  </div>
</template>

<!-- scoped 屬性的作用是避免目前元件的 style 會污染到子元件的 style -->
<style scoped>
.read-the-docs {
  color: #888;
}

.error {
  border: red solid 1px;
  color: red;
}

a {
  color: #3eaf7c;
  text-decoration: none;
}

.pagination {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

.page-item {
  cursor: pointer;
  font-size: 1rem;
  list-style: none;
  display: block;
  width: 40px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #c4ead9;
  color: #3eaf7c;
  float: left;
  margin: 0;
  margin-right: -1px;
}
.page-item:hover {
  background-color: #eee;
}

button {
  font-size: 1rem;
}

.block {
  display: block;
  width: 150px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: #0f0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
