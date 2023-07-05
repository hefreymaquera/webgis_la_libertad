var map = L.map('map', {
    center: [  -8.110801, -79.028319],
    zoom: 18,
    minZoom: 8,
    maxZoom: 20,
});

L.control.scale({    // para la escala
   imperial: false
    }).addTo(map);

     
var basemapOSM = L.tileLayer ('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{		
    attribution: '&copy ; <ahref ="http://osm.org/copyright"> OpenStreetMap </a> contributor'
  });
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var lalibertad = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:departamento_lalibertad", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
lalibertad.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:provincias_lalibertad",
    format: 'image/png', 
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:distritos_lalibertad", 
    format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
distritos.addTo(map);

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:bancos", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
bancos.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:colegios", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
colegios.addTo(map);

var estacionamientos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:estacionamientos", 
    format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
estacionamientos.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:farmacias", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
farmacias.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:hoteles", 
    format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
hoteles.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:mercados", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lalibertad/wms?", {
    layers: "webgis_lalibertad:restaurantes", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
restaurantes.addTo(map);


var baseMaps = {                   
  "OSM": basemapOSM,
  "Hidrido": googleHybrid,
  "Satelite": googleSat,
  "Terrain": googleTerrain,
    };

var overlayMaps = {                             
    "Departamento": lalibertad,
    "Provincias": provincias,
    "Distritos": distritos,
    "Bancos": bancos,
    "Colegios": colegios,
    "Estacionamientos": estacionamientos,
    "Farmacias": farmacias,
    "Hoteles": hoteles,
    "Mercados": mercados,
    "Restaurantes": restaurantes,
  };

L.control.layers(baseMaps, overlayMaps,{
  position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  collapsed: false // true
  }).addTo(map);
