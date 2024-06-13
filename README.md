
![image](repo_image/home.png)

## Analysis_Bot_Web
You can check out introduction to this repo on my blog: [here](https://blog.woodman.tw/2020/03/11/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9-Discord-Analysis-Bot/)  
Check out the backend repo [here](https://github.com/LCE-Lab/Analysis_Bot).

## Chart
~~Chart use [Visavail.js](https://github.com/flrs/visavail#visavailjs---a-time-data-availability-chart)~~  
Change chart to [vis-timeline](https://github.com/visjs/vis-timeline)  

## Project setup
```bash
npm install
```

### Start dev server
```bash
# Edit cfg/setting.js.example and rename it cfg/setting.js
npm run dev
```

### Compiles and minifies for production
```bash
npm run build
cp cfg/setting.js.example dist/cfg/settings.js
# Edit dist/cfg/setting.js
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Thanks
* [jimchen5209](https://jimchen5209.me) **Assist front-end**
* [bill96012](https://github.com/bill96012) **UI/UX**
* [james58899](https://github.com/james58899) **Idea of sunrise and sunset**
