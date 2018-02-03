var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_comunas_wgs84_0 = new ol.format.GeoJSON();
var features_comunas_wgs84_0 = format_comunas_wgs84_0.readFeatures(json_comunas_wgs84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_wgs84_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_comunas_wgs84_0.addFeatures(features_comunas_wgs84_0);var lyr_comunas_wgs84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunas_wgs84_0, 
                style: style_comunas_wgs84_0,
                title: '<img src="styles/legend/comunas_wgs84_0.png" /> comunas_wgs84'
            });var format_comunas_wgs84_1 = new ol.format.GeoJSON();
var features_comunas_wgs84_1 = format_comunas_wgs84_1.readFeatures(json_comunas_wgs84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_wgs84_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_comunas_wgs84_1.addFeatures(features_comunas_wgs84_1);var lyr_comunas_wgs84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunas_wgs84_1, 
                style: style_comunas_wgs84_1,
                title: '<img src="styles/legend/comunas_wgs84_1.png" /> comunas_wgs84'
            });var format_comunas_wgs84_2 = new ol.format.GeoJSON();
var features_comunas_wgs84_2 = format_comunas_wgs84_2.readFeatures(json_comunas_wgs84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_wgs84_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_comunas_wgs84_2.addFeatures(features_comunas_wgs84_2);var lyr_comunas_wgs84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunas_wgs84_2, 
                style: style_comunas_wgs84_2,
    title: 'comunas_wgs84<br />\
    <img src="styles/legend/comunas_wgs84_2_0.png" /> Comuna 1<br />\
    <img src="styles/legend/comunas_wgs84_2_1.png" /> Comuna 10<br />\
    <img src="styles/legend/comunas_wgs84_2_2.png" /> Comuna 11<br />\
    <img src="styles/legend/comunas_wgs84_2_3.png" /> Comuna 12<br />\
    <img src="styles/legend/comunas_wgs84_2_4.png" /> Comuna 13<br />\
    <img src="styles/legend/comunas_wgs84_2_5.png" /> Comuna 14<br />\
    <img src="styles/legend/comunas_wgs84_2_6.png" /> Comuna 15<br />\
    <img src="styles/legend/comunas_wgs84_2_7.png" /> Comuna 16<br />\
    <img src="styles/legend/comunas_wgs84_2_8.png" /> Comuna 17<br />\
    <img src="styles/legend/comunas_wgs84_2_9.png" /> Comuna 18<br />\
    <img src="styles/legend/comunas_wgs84_2_10.png" /> Comuna 19<br />\
    <img src="styles/legend/comunas_wgs84_2_11.png" /> Comuna 2<br />\
    <img src="styles/legend/comunas_wgs84_2_12.png" /> Comuna 20<br />\
    <img src="styles/legend/comunas_wgs84_2_13.png" /> Comuna 21<br />\
    <img src="styles/legend/comunas_wgs84_2_14.png" /> Comuna 22<br />\
    <img src="styles/legend/comunas_wgs84_2_15.png" /> Comuna 3<br />\
    <img src="styles/legend/comunas_wgs84_2_16.png" /> Comuna 4<br />\
    <img src="styles/legend/comunas_wgs84_2_17.png" /> Comuna 5<br />\
    <img src="styles/legend/comunas_wgs84_2_18.png" /> Comuna 6<br />\
    <img src="styles/legend/comunas_wgs84_2_19.png" /> Comuna 7<br />\
    <img src="styles/legend/comunas_wgs84_2_20.png" /> Comuna 8<br />\
    <img src="styles/legend/comunas_wgs84_2_21.png" /> Comuna 9<br />\
    <img src="styles/legend/comunas_wgs84_2_22.png" /> <br />'
        });

lyr_comunas_wgs84_0.setVisible(true);lyr_comunas_wgs84_1.setVisible(true);lyr_comunas_wgs84_2.setVisible(true);
var layersList = [baseLayer,lyr_comunas_wgs84_0,lyr_comunas_wgs84_1,lyr_comunas_wgs84_2];
lyr_comunas_wgs84_0.set('fieldAliases', {'comuna': 'comuna', 'nombre': 'nombre', 'zona_recol': 'zona_recol', 'area': 'area', 'perimetro': 'perimetro', });
lyr_comunas_wgs84_1.set('fieldAliases', {'comuna': 'comuna', 'nombre': 'nombre', 'zona_recol': 'zona_recol', 'area': 'area', 'perimetro': 'perimetro', });
lyr_comunas_wgs84_2.set('fieldAliases', {'comuna': 'comuna', 'nombre': 'nombre', 'zona_recol': 'zona_recol', 'area': 'area', 'perimetro': 'perimetro', });
lyr_comunas_wgs84_0.set('fieldImages', {'comuna': 'TextEdit', 'nombre': 'TextEdit', 'zona_recol': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_comunas_wgs84_1.set('fieldImages', {'comuna': 'TextEdit', 'nombre': 'TextEdit', 'zona_recol': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_comunas_wgs84_2.set('fieldImages', {'comuna': 'TextEdit', 'nombre': 'TextEdit', 'zona_recol': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_comunas_wgs84_0.set('fieldLabels', {'comuna': 'no label', 'nombre': 'no label', 'zona_recol': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_comunas_wgs84_1.set('fieldLabels', {'comuna': 'no label', 'nombre': 'no label', 'zona_recol': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_comunas_wgs84_2.set('fieldLabels', {'comuna': 'inline label', 'nombre': 'no label', 'zona_recol': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_comunas_wgs84_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});