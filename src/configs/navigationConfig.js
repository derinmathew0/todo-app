import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  
  
  {
    id: "todo",
    title: "Todo",
    type: "item",
    icon: <Icon.CheckSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/todo/:filter",
    filterBase: "/todo/all"
  },
  
  
  
]

export default navigationConfig
