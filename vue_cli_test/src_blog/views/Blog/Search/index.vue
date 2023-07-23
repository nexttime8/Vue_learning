<template>
  <div class="container">
    <h2>所有文章</h2>
    <div class="box">
      <div class="inputBox">
        <input type="text" required="required" title="">
        <span>请输入关键字</span>
      </div>
      <!-- <div class="inputBox">
        <input type="password" required="required">
        <span>password</span>
      </div> -->
      <div class="buttonBox">
        <button>Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Search"
}
</script>

<style lang="css" scoped>
    /* 清除内、外间距 */
* {
  margin: 0;
  padding: 0;
  /* 添加内间距不扩大div */
  box-sizing: border-box;
}

.container{
  float: left;
  padding-left: 120px;
}

.box {
  height: 15vh;
  display: flex;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 纵向排列 */
  /* flex-direction: column; */
  /* 无法选中文字 */
  user-select: none;
  /* 元素之间的间距 */
  gap: 20px;
}

h2{
  font-family: 'Franklin Gothic Medium','Roboto', 'Lato' ,'Arial Narrow', Arial, serif;
  font-weight: 700;
  color: #50c9c3;
}
 
.inputBox {
  position: relative;
  width: 80vh;
}
 
.inputBox input {
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: none;
  border-radius: 5px;
  outline: none;
  color: white;
  font-size: 1em;
  /* 过渡 */
  transition: 0.5s;
}
 
.inputBox span {
  position: absolute;
  left: 0;
  padding: 15px;
  /* 元素永远不会成为鼠标事件的target（目标） */
  pointer-events: none;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.5);
  /* 大写字母 */
  text-transform: uppercase;
  /* 过渡 */
  transition: 0.5s;
}
 
.inputBox input:valid~span,
.inputBox input:focus~span {
  color: #50c9c3;
  /* 变换位置 */
  transform: translateX(15px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 5px;
  background: #09203f;
  letter-spacing: 0.1em;
   
}
/* 
.inputBox:nth-child(3) input:valid~span,
.inputBox:nth-child(3) input:focus~span {
  background: #50c9c3;
  color: white;
} */
 
.inputBox input:valid,
.inputBox input:focus {
  border: 1px solid #50c9c3;
}
 
/* 给按钮写样式 */
.buttonBox button {
  padding: 10px 30px;
  border-radius: 5px;
  background: none;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-weight: 600;
  cursor: pointer;
}
 
.buttonBox button:hover {
  color: #50c9c3;
  border: 1px solid #50c9c3;
}
</style>