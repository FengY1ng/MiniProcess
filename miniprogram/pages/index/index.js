Page({
  data: {
    merchants: ["商户1", "商户2", "商户3"],
    selectedMerchant: "请选择服务商户",
    notices: ["通知1", "通知2", "通知3"]
  },
  onMerchantChange: function (event) {
    this.setData({
      selectedMerchant: this.data.merchants[event.detail.value]
    })
  },
  navigateToCleaning: function () {
    wx.navigateTo({
      url: "/pages/cleaning/cleaning"
    })
  },
  navigateToLaundry: function () {
    wx.navigateTo({
      url: "/pages/laundry/laundry"
    })
  },
  navigateToAppliance: function () {
    wx.navigateTo({
      url: "/pages/appliance/appliance"
    })
  },
  navigateToLife: function () {
    wx.navigateTo({
      url: "/pages/life/life"
    })
  },
  navigateToDailyCleaning: function () {
    wx.navigateTo({
      url: "/pages/daily-cleaning/daily-cleaning"
    })
  },
  navigateToWindowCleaning: function () {
    wx.navigateTo({
      url: "/pages/window-cleaning/window-cleaning"
    })
  },
  navigateToDeepCleaning: function () {
    wx.navigateTo({
      url: "/pages/deep-cleaning/deep-cleaning"
    })
  },
  navigateToCooking: function () {
    wx.navigateTo({
      url: "/pages/cooking/cooking"
    })
  },
  navigateToGrocery: function () {
    wx.navigateTo({
      url: "/pages/grocery/grocery"
    })
  }
})
