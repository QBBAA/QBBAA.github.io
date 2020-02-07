require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/GeoJSONLayer", "esri/layers/GraphicsLayer", "esri/layers/TileLayer"],
function(esriConfig, Map, MapView, GeoJSONLayer, GraphicsLayer, TileLayer) {
    esriConfig.fontsUrl = "/arcgis_js_api/library/4.14/esri/themes/base/fonts";

    // 创建地图对象
    const map = new Map();
    // 利用现有geojson数据构建Geojson类型的行政区划底图
    const baseLayer = new TileLayer({
        // url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer"
        url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
    });
    map.add(baseLayer);

    // 创建地图容器并设置地图对象和初始化中心点、等级
    const view = new MapView({
        container: "mapRoot",
        map: map,
        // center: [114.18490085425961,22.638460024481233],
        // zoom: 6,
        extent: {
            // xmin: 113.4298752567363,
            // ymin: 22.25574401708528,
            // xmax: 114.96682303795404,
            // ymax: 23.031422350418612
            xmin: 12647270.700061997,
            ymin: 2546232.0677209855,
            xmax: 12764601.538479583,
            ymax: 2620299.548129222,
            spatialReference: {wkid: 3857}
        }
    });

    let thematicLayer;

    // 添加地图点击监听，捕获测试点
    // view.on("click", event => {
    //     console.log(event.mapPoint.x + "," + event.mapPoint.y);
    // });

    // view.watch("extent", (newValue, oldValue) => {
    //     console.log(newValue);
    // });

    // let colorRes = chroma.scale(['#e6a23c','#c11111']).mode('lch').colors(10);
    // debugger
    const colorRes = [
        // {stop: 9, color: "#ef96c5"},
        // {stop: 7, color: "#cabffc"},
        // {stop: 4, color: "#b2e2ff"},
        // {stop: 1, color: "#ccfbff"}

        // {stop: 0, color: "#ccfbff"},
        {stop: 90, color: "#c11111"},
        {stop: 80, color: "#c62e10"},
        {stop: 70, color: "#cb4110"},
        {stop: 60, color: "#d05112"},
        {stop: 50, color: "#d46016"},
        {stop: 40, color: "#d86e1b"},
        {stop: 30, color: "#dc7c21"},
        {stop: 20, color: "#df8929"},
        {stop: 10, color: "#e39532"},
        {stop: 1, color: "#e6a23c"},
    ];

    let getData = async () => {
        let responseData = await fetch("./json/data.json");
        let responseJsonData = await responseData.json();
        responseJsonData = responseJsonData.data;

        let yAxisData = [];
        let seriesData = [];

        const uniqueValueInfos = [];
        const totalLength = responseJsonData.length;
        for(let i in responseJsonData){
            let dataItem = responseJsonData[i];
            let color = "#7c7c7c";

            for(let colorObj of colorRes){
                if(dataItem.value >= colorObj.stop){
                    color = colorObj.color;
                    break;
                }
            }

            uniqueValueInfos.push({
                value: dataItem.adcode,
                symbol: {
                    type: "simple-fill",
                    color,
                    outline: {
                        color: [0, 0, 0, 0.3],
                        width: 0.5
                    }
                }
            });

            yAxisData.push(dataItem.name);
            let dataAC = Array.from({length: totalLength}, x => 0);
            dataAC[i] = dataItem.value;
            seriesData.push({
                type: "bar",
                name: dataItem.name,
                stack: "堆叠",            
                data: dataAC,
                itemStyle: {
                    color: color
                },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params){
                        if(params.value > 0){
                            return params.value;
                        } else {
                            return "";
                        }
                    }
                }
            });
        }

        let listDom = document.querySelector("#chartRoot");
        let myChart = echarts.init(listDom);
        let option = {
            title: {
                text: "深圳市各区疫情统计图",
                left: "center",
                top: 15,
                textStyle: {
                    color: "#fff"
                }
            },
            legend: {
                data: yAxisData,
                top: 50,
                textStyle: {
                    color: "#fff"
                }
            },
            tooltip: {
                formatter: function(params, ticket, callback){
                    return params.marker + " " + params.name + "确诊数量：" + params.value + "例"
                }
            },
            grid: {
                top: 120,
                left: 60,
                right: 30,
                bottom: 30
            },
            yAxis: {
                type: 'category',
                data: yAxisData,
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                }
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                }
            },
            series: seriesData
        };
        myChart.setOption(option, true);

        // const baseLayerRenderer = {
        //     type: "unique-value",  // autocasts as new UniqueValueRenderer()
        //     field: "adcode",
        //     uniqueValueInfos
        // };

        thematicLayer = new GraphicsLayer();
        thematicLayer.add();
        map.add(thematicLayer);
    };

    // let addLabel = async () => {
    //     let responseData = await fetch("./geojson/shenzhen.json");
    //     let responseJsonData = await responseData.json();
    //     responseJsonData = responseJsonData.features;

        
    //     let graphics = [];
    //     for(let dataItem of responseJsonData){
    //         graphics.push({
    //             geometry: {
    //                 type: "point",  // autocasts as new Point()
    //                 longitude: dataItem.properties.center[0],
    //                 latitude: dataItem.properties.center[1]
    //             },
    //             symbol: {
    //                 type: "text",
    //                 text: dataItem.properties.name
    //             }
    //         });
    //     }

    //     const labelLayer = new GraphicsLayer({
    //         graphics: graphics
    //     });
    //     map.add(labelLayer);
    // };

    let setThematicLayer = opacity => {
        if(thematicLayer){
            thematicLayer.opacity = opacity;
        }
    }

    getData();
    // addLabel();


    let legendHtml = "";
    for(let colorObj of colorRes){
        legendHtml += `<div><span class="legend-color-block" style="background-color: ${colorObj.color}"></span><span>确诊数量大于等于 ${colorObj.stop}</span></div>`;
    }
    let legendBoxDom = document.querySelector("#legendBox");
    legendBoxDom.innerHTML = legendHtml;

    document.querySelector("#showRadio").addEventListener("change", event => {
        if(event.currentTarget.checked == true){
            setThematicLayer(1);
        }
    });
    document.querySelector("#showRadio").addEventListener("change", event => {
        if(event.currentTarget.checked == true){
            setThematicLayer(0.5);
        }
    });
    document.querySelector("#showRadio").addEventListener("change", event => {
        if(event.currentTarget.checked == true){
            setThematicLayer(0);
        }
    });
});