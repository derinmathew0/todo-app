import mock from "../mock"

export const searchResult = [
  {
    groupTitle: "Pages",
    searchLimit: 4,
    data: [
      
      {
        id: 1,
        target: "Todo",
        title: "Todo",
        link: "/todo/all",
        icon: "CheckSquare"
      },
      
    ]
  },
  
]

mock.onGet("/api/main-search/data").reply(200, {
  searchResult
})
