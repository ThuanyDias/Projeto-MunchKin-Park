/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'food-q-c-400-300-82',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"food-q-c-400-300-8.jpg",'0px','0px']
            },
            {
                id: 'food-q-c-400-300-42',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"food-q-c-400-300-4.jpg",'0px','0px']
            },
            {
                id: 'food-q-c-400-300-32',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"food-q-c-400-300-3.jpg",'0px','0px']
            },
            {
                id: 'food-q-c-400-300-22',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"food-q-c-400-300-2.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_food-q-c-400-300-82}": [
                ["style", "opacity", '1']
            ],
            "${_food-q-c-400-300-32}": [
                ["style", "opacity", '1']
            ],
            "${_food-q-c-400-300-22}": [
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '400px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_food-q-c-400-300-42}": [
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_food-q-c-400-300-82}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_food-q-c-400-300-82}", "opacity", '1', { fromValue: '1'}], position: 12000, duration: 0 },
                { id: "eid6", tween: [ "style", "${_food-q-c-400-300-42}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500 },
                { id: "eid4", tween: [ "style", "${_food-q-c-400-300-32}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
                { id: "eid2", tween: [ "style", "${_food-q-c-400-300-22}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-10521788");
