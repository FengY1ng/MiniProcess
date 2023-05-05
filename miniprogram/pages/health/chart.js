// chart.js

import * as echarts from '../../components/ec-canvas/echarts';

Page({
  data: {
    ec: {
      lazyLoad: true
    }
  },
  onLaunch() {
    const initPromise = new Promise((resolve, reject) => {
      wx.ready(() => {
        wx.waServiceMainContext.init(() => {
          resolve();
        });
      });
    });

    initPromise.then(() => {
      // 在 WAServiceMainContext 初始化完成后，执行后续操作
      console.log('WAServiceMainContext initialized');
    }).catch((error) => {
      console.error('Failed to initialize WAServiceMainContext:', error);
    });
  },
  onLoad() {
    // 在这里写获取数据的逻辑
    // 将获取到的数据更新到 this.setData 中
  },
  onReady() {
    this.ecComponent = this.selectComponent('#mychart');
    this.initChart();
  },
  initChart() {
    this.ecComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      // 在这里写配置图表的逻辑
      // 使用 this.data 中的数据配置图表
      chart.setOption({
        // ...
      });
      return chart;
    });
  }
})

