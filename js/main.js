// 判断移动端
function IsPC(){  
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
}
const isPc = IsPC();
if(!isPc){
    $(".sys-title-label").addClass("mobile-set");
    $("#mapRoot").addClass("mobile-set");
    $("#chartRoot").addClass("mobile-set");
    $(".lengnd-box").addClass("mobile-set");
    $(".layer-control-box").addClass("mobile-set");
    $("#controlLabel").css("display", "none");
}

require(["esri/config", "esri/Map", "esri/Graphic", "esri/views/MapView", "esri/layers/GeoJSONLayer", "esri/layers/GraphicsLayer", "esri/layers/FeatureLayer", "esri/layers/TileLayer"],
function(esriConfig, Map, Graphic, MapView, GeoJSONLayer, GraphicsLayer, FeatureLayer, TileLayer) {
    // esriConfig.fontsUrl = "/arcgis_js_api/library/4.14/esri/themes/base/fonts";

    let thematicLayer = null;
    let highLightLayer = null;
    let lastGra = null;
    let myChart = null;
    let responseJsonData = null;
    let layerFlag = true;

    const colorRes = [
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

    const dictionary = {
        "esriFieldTypeOID": "oid",
        "esriFieldTypeInteger": "integer",
        "esriFieldTypeString": "string",
        "esriFieldTypeDouble": "double",
    };

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
        extent: {
            xmin: 12647270.700061997,
            ymin: 2546232.0677209855,
            xmax: 12764601.538479583,
            ymax: 2620299.548129222,
            spatialReference: {wkid: 3857}
        },
        spatialReference: {
            wkid: 3857
        },
        // popup: {
        //     container: document.querySelector("#popDiv")
        // }
    });

    if(isPc){
        view.on("pointer-move", pickAreaOnMap);
    } else {
        view.on("click", pickAreaOnMap);
    }
    

    

    function pickAreaOnMap(event){
        view.hitTest(event).then(function(res) {
            if(res.results.length == 0){
                view.popup.close();
            } else {
                for(let i = 0; i < res.results.length; i++){
                    let result = res.results[i];
                    let geo = result.graphic.geometry;
                    if(geo.type == "point"){
                        // debugger
                        let date = new Date(result.graphic.attributes["日期"]);
                        view.popup.open({
                            content: '<div><div>小区名称：' + result.graphic.attributes["小区名称"] + '</div>' + 
                                    '<div>小区地址：' + result.graphic.attributes["地址"] + '</div>' + 
                                    '<div>所属区域：' + result.graphic.attributes["行政区"] + '</div>' + 
                                    '<div>首次发现病例日期：' + date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日</div></div>',
                            location: result.mapPoint,
                        });
                        break;
                    } else if(geo.type == "polygon"){
                        if(layerFlag == true){
                            let areaName = result.graphic.attributes["Name_CHN"];
                            let targetDataItem = responseJsonData.find(function(dataItem) {
                                return dataItem.name == areaName;
                            });
                            view.popup.open({
                                content: '<div>' + areaName + '：' + targetDataItem.value + '例</div>',
                                location: result.mapPoint,
                            });
                        } else {
                            view.popup.close();
                        }
                        break;
                    }
                }
            }
        });
    };  

    function highLightGra(name){
        let target = null;
        for(let i in thematicLayer.graphic){
            let gra = thematicLayer.graphic[i];
            if(gra.attributes["Name_CHN"] == name){
                target = new Graphic({
                    attributes: gra.attributes,
                    geometry: gra.geometry,
                    symbol: {
                        type: "simple-fill",
                        color: "#ffd400",
                        outline: {
                            color: [0, 0, 0, 0.3],
                            width: 0.5
                        }
                    }
                });
                break;
            }
        }
        if(target){
            highLightLayer.removeAll();
            highLightLayer.add(target);
        }
    }

    function highLightChartSeries(name){
        if(myChart){
            // myChart.dispatchAction({
            //     type: 'highlight',
            //     name: name
            // });
            // myChart.dispatchAction({
            //     type: 'showTip',
            //     name: name
            // });
            myChart.dispatchAction({
                type: 'showTip',
                name: name,
                dataIndex: 0
            });
        }
    }


    // 添加地图点击监听，捕获测试点
    // view.on("click", event => {
    //     console.log(event.mapPoint.x + "," + event.mapPoint.y);
    // });

    // view.watch("extent", (newValue, oldValue) => {
    //     console.log(newValue);
    // });

    // let colorRes = chroma.scale(['#e6a23c','#c11111']).mode('lch').colors(10);
    // debugger
    
    function getColor(value) {
        let color = "#7c7c7c";

        for(let i in colorRes){
            let colorObj = colorRes[i];
            if(value >= colorObj.stop){
                color = colorObj.color;
                break;
            }
        }
        return color;
    };

    // let getData = async () => {
    async function getData() {
        let responseData = await fetch("./json/data.json");
        responseJsonData = await responseData.json();
        responseJsonData = responseJsonData.data;
        responseJsonData = responseJsonData.sort(function(a, b) {
            return a.value - b.value;
        });

        let staticsData = {};
        const uniqueValueInfos = [];

        let yAxisData = [];
        let legendData = [];
        let seriesData = [];

        const totalLength = responseJsonData.length;
        for(let i in responseJsonData){
            let dataItem = responseJsonData[i];
            let color = getColor(dataItem.value);

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

            legendData.push(dataItem.name);
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
        // yAxisData = legendData.concat().reverse();
        yAxisData = legendData.concat();

        let listDom = document.querySelector("#chartRoot");
        myChart = echarts.init(listDom);

        let yAxisObj;
        let xAxisObj;
        let gridObj;
        let titleTextStyleObj;

        if(isPc){
            titleTextStyleObj = {
                color: "#fff",
            };
            yAxisObj = {
                type: 'category',
                data: yAxisData,
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                }
            };
            xAxisObj = {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                }
            };
            gridObj ={
                top: 50,
                left: 60,
                right: 30,
                bottom: 30
            };
        } else {
            titleTextStyleObj = {
                color: "#fff",
                fontSize: 17
            };
            yAxisObj = {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                }
            };
            xAxisObj = {
                type: 'category',
                data: yAxisData,
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },
                axisLabel: {
                    interval: 0,
                    formatter: function(labelName){
                        labelName = labelName.split("").join("\n");
                        return labelName;
                    }
                }
            };
            gridObj ={
                top: 50,
                left: 30,
                right: 5,
                bottom: 60
            };
        }
        

        let option = {
            title: {
                text: "深圳市各区疫情统计图",
                left: "center",
                top: 15,
                textStyle: titleTextStyleObj
            },
            legend: {
                show: false,
                // data: legendData,
                // top: 50,
                // textStyle: {
                //     color: "#fff"
                // }
            },
            tooltip: {
                formatter: function(params, ticket, callback){
                    return params.marker + " " + params.name + "确诊数量：" + params.value + "例"
                }
            },
            grid: gridObj,
            yAxis: yAxisObj,
            xAxis: xAxisObj,
            series: seriesData
        };
        myChart.setOption(option, true);

        let areaData = await fetch("./json/area_shenzhen.json");
        let areaJsonData = await areaData.json();
        let areaGras = areaJsonData.features.map(function(dataItem) {
            let gra = Graphic.fromJSON(dataItem);
            gra.geometry.spatialReference = {wkid: 3857};
            return gra;
        })
        let fields = areaJsonData.fields.map(function(fieldObj) {
            if(dictionary.hasOwnProperty(fieldObj.type)){
                return {
                    name: fieldObj.name,
                    alias: fieldObj.alias,
                    type: dictionary[fieldObj.type]
                };
            } else {
                return {
                    name: fieldObj.name,
                    alias: fieldObj.alias,
                    type: fieldObj.type
                };
            }
        })

        thematicLayer = new FeatureLayer({
            geometryType: "polygon",
            objectIdField: "FID",
            outFields: ["*"],
            fields: fields,
            spatialReference: {wkid: 3857},
            source: areaGras,
            renderer: {
                type: "unique-value",  // autocasts as new UniqueValueRenderer()
                field: "Code",
                uniqueValueInfos
            },
            labelingInfo: [
                {
                    labelExpressionInfo: { expression: "$feature.Name_CHN" },
                    symbol: {
                        type: "text",  // autocasts as new TextSymbol()
                        color: "black",
                        haloSize: 1,
                        haloColor: "white"
                    }
                }
            ]
        });
        map.add(thematicLayer);

        highLightLayer = new GraphicsLayer();
        map.add(highLightLayer);

        // 获取小区点数据
        let areaPointData = await fetch("./json/village.json");
        let areaPointJsonData = await areaPointData.json();
        areaPointJsonData = areaPointJsonData.features;
        const areaPointLayer = new GraphicsLayer();
        map.add(areaPointLayer);
        areaPointLayer.addMany(areaPointJsonData.map(function(dataItem) {
            let gra = Graphic.fromJSON(dataItem);
            gra.geometry.spatialReference = {wkid: 3857};
            gra.symbol = {
                type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                style: "circle",
                color: "blue",
                size: "15px",  // pixels
                outline: {  // autocasts as new SimpleLineSymbol()
                    color: [ 255, 255, 0 ],
                    width: 2  // points
                }
            };
            return gra;
        }));        
    };

    function setThematicLayer(opacity) {
        if(thematicLayer){
            thematicLayer.opacity = opacity;
        }
    }

    getData();

    let legendHtml = "";
    for(let colorObj of colorRes){
        legendHtml += '<div><span class="legend-color-block" style="background-color: ' + colorObj.color + '"></span><span>确诊数≥' + colorObj.stop + '</span></div>';
    }
    let legendBoxDom = document.querySelector("#legendBox");
    legendBoxDom.innerHTML = legendHtml;

    document.querySelector("#showRadio").addEventListener("change", function(event) {
        if(event.currentTarget.checked == true){
            setThematicLayer(1);
            layerFlag = true;
        }
    });
    document.querySelector("#showRadio2").addEventListener("change", function(event) {
        if(event.currentTarget.checked == true){
            setThematicLayer(0.5);
            layerFlag = true;
        }
    });
    document.querySelector("#hideRadio").addEventListener("change", function(event) {
        if(event.currentTarget.checked == true){
            setThematicLayer(0);
            layerFlag = false;
        }
    });

    // setTimeout(() => {
    //     highLightChartSeries("光明区");
    // }, 5000);
});