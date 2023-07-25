import { nanoid } from "nanoid"
import axios from "axios"

const state = {
  infos: [
    {
      id: "001", // 字符串
      message: "lishun",
    },
  ],
  quotes: [
    {
      id: "001",
      quote: "生而为人，我很抱歉",
      name: "太宰治",
    },
  ],
}

const actions = {
  addInfo(context, value) {
    if (value.trim() === "") return
    context.commit("ADDINFO", { id: nanoid(), message: value })
  },
  randomInfo(context) {
    axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
      (response) => {
        console.log(response.data)
        context.commit("ADDINFO", { id: nanoid(), message: response.data })
      },
      (error) => {
        alert("获取错误，无法添加", error.message)
      }
    )
  },
  getQuotes(context) {
    axios.get("https://type.fit/api/quotes").then(
      (response) => {
        // console.log(response.data)
        for (let item of response.data) {
          let authorName = item.author.slice(0, -10)
          context.commit("GETQUOTES", {
            id: nanoid(),
            quote: item.text,
            name: authorName,
          })
          // console.log(item.text, item.author)
        }
      },
      (error) => {
        alert("something wrong", error.message)
      }
    )
  },
}

const mutations = {
  ADDINFO(context, value) {
    context.infos.unshift(value)
  },
  GETQUOTES(context, value) {
    context.quotes.unshift(value)
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
