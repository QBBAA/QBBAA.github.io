require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/GeoJSONLayer", "esri/layers/GraphicsLayer", 'Canvas-Flowmap-Layer/CanvasFlowmapLayer', "esri/Graphic"],
function(esriConfig, Map, MapView, GeoJSONLayer, GraphicsLayer, CanvasFlowmapLayer, Graphic) {
    esriConfig.fontsUrl = "/arcgis_js_api/library/4.14/esri/themes/base/fonts";

    // 创建地图对象
    const map = new Map();

    // 创建地图容器并设置地图对象和初始化中心点、等级
    const view = new MapView({
        container: "mapRoot",
        map: map,
        // center: [114.18490085425961,22.638460024481233],
        // zoom: 6,
        extent: {
            xmin: 58.37641475385006,
            ymin: 7.204941203947236,
            xmax: 149.88231736597976,
            ymax: 64.96990513303757
        }
    });

    // 添加地图点击监听，捕获测试点
    // view.on("click", event => {
    //     console.log(event.mapPoint.x + "," + event.mapPoint.y);
    // });

    // view.watch("extent", (newValue, oldValue) => {
    //     console.log(newValue);
    // });

    // let colorRes = chroma.scale(['#ccfbff','#ef96c5']).mode('lch').colors(4);
    // debugger
    // const colorRes = [
    //     {stop: 9, color: "#ef96c5"},
    //     {stop: 7, color: "#cabffc"},
    //     {stop: 4, color: "#b2e2ff"},
    //     {stop: 1, color: "#ccfbff"}
    // ];

    let getData = async () => {
        const baseLayerRenderer = {
            type: "simple",
            symbol: {
                type: "simple-fill",
                // autocasts as new SimpleFillSymbol()
                color: [0, 0, 0, 0],
                style: "solid",
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0.5],
                    width: 0.5
                }
            }
        };

        // 利用现有geojson数据构建Geojson类型的行政区划底图
        const baseLayer = new GeoJSONLayer({
            url: "./geojson/china.json",
            renderer: baseLayerRenderer
        });

        map.add(baseLayer);

        let listHtml = "";
        for(let i = 0; i < 20; i++){
            listHtml += `
                <div class="list-item">
                    <div><span class="type-label">患者姓名：</span><span>张三李四</span></div>
                    <div><span class="type-label">性别：</span><span>男</span></div>
                    <div><span class="type-label">交通方式：</span><span>动车</span></div>
                    <div><span class="type-label">出发时间：</span><span>2020-01-02</span></div>
                    <div class="type-label">出发地：</div>
                    <div>武汉某某区某某社区xx号</div>
                    <div class="type-label">目的地：</div>
                    <div>深圳某某区某某社区xx号</div>
                </div>
            `;
        }
        let legendBoxDom = document.querySelector("#chartRoot");
        legendBoxDom.innerHTML = listHtml;

        let responseData = await fetch("./json/data2.json");
        let responseJsonData = await responseData.json();
        responseJsonData = responseJsonData.data;
        const maxlength = responseJsonData.length;
        const graphics = responseJsonData.map((dataItem, index) => {
            return new Graphic({
                geometry: {
                    type: 'point',
                    longitude: dataItem[0],
                    latitude: dataItem[1]
                },
                attributes: {
                    s_city_id: index,
                    e_city_id: maxlength,
                    s_lon: dataItem[0],
                    s_lat: dataItem[1],
                    e_lon: 114.073561,
                    e_lat: 22.554999
                }
            });
        });
        const trackLineLayer = new CanvasFlowmapLayer({
            graphics: graphics,
            originAndDestinationFieldIds: {
                originUniqueIdField: 's_city_id',
                originGeometry: {
                    x: 's_lon',
                    y: 's_lat',
                    spatialReference: {
                        wkid: 4326
                    }
                },
                destinationUniqueIdField: 'e_city_id',
                destinationGeometry: {
                    x: 'e_lon',
                    y: 'e_lat',
                    spatialReference: {
                        wkid: 4326
                    }
                }
            }
        });
        map.add(trackLineLayer);
    };

    let addLabel = async () => {
        let responseData = await fetch("./geojson/china.json");
        let responseJsonData = await responseData.json();
        responseJsonData = responseJsonData.features;

        let graphics = [];
        for(let dataItem of responseJsonData){
            if(dataItem.properties.center){
                graphics.push({
                    geometry: {
                        type: "point",  // autocasts as new Point()
                        longitude: dataItem.properties.center[0],
                        latitude: dataItem.properties.center[1]
                    },
                    symbol: {
                        type: "text",
                        text: dataItem.properties.name
                    }
                });
            }
        }

        const labelLayer = new GraphicsLayer({
            graphics: graphics
        });
        map.add(labelLayer);
    };

    getData();
    // addLabel();
});