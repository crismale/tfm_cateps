var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-cateps",
      "name": "Entrada CATEPS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 1.5848964483088563,
        "pitch": 0.0633829878279144,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.7178142792353244,
          "pitch": 0.09768849972629212,
          "rotation": 6.283185307179586,
          "target": "1-bloque-y"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bloque-y",
      "name": "Bloque Y",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8183992461048124,
          "pitch": 0.10361783847168127,
          "rotation": 0,
          "target": "2-garita-eps"
        },
        {
          "yaw": 1.3917179720535575,
          "pitch": 0.09334625776791228,
          "rotation": 0,
          "target": "3-bloque-r"
        },
        {
          "yaw": -2.192043858130617,
          "pitch": 0.01348282842195303,
          "rotation": 0,
          "target": "0-entrada-cateps"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garita-eps",
      "name": "Garita EPS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.030618557193013,
          "pitch": 0.11741282386166496,
          "rotation": 13.351768777756625,
          "target": "1-bloque-y"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bloque-r",
      "name": "Bloque R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5701610789710916,
          "pitch": 0.018494580699140784,
          "rotation": 0,
          "target": "1-bloque-y"
        },
        {
          "yaw": 1.5226911237309384,
          "pitch": 0.03944856286712195,
          "rotation": 0,
          "target": "5-bloque-b"
        },
        {
          "yaw": 0.2963297066491357,
          "pitch": -0.045779110938328316,
          "rotation": 0,
          "target": "4-sala-control-b-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala-control-b-r",
      "name": "Sala Control B-R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.114269567086275,
          "pitch": 0.06071475716386132,
          "rotation": 0,
          "target": "3-bloque-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bloque-b",
      "name": "Bloque B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5131619425132872,
          "pitch": 0.06767481791133889,
          "rotation": 0,
          "target": "3-bloque-r"
        },
        {
          "yaw": 1.6092239233077361,
          "pitch": 0.024152328932999012,
          "rotation": 0,
          "target": "6-bloque-g"
        },
        {
          "yaw": 0.21732876231811105,
          "pitch": 0.08172668596237287,
          "rotation": 0,
          "target": "8-asensor-4ta-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bloque-g",
      "name": "Bloque G",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8627774918351214,
          "pitch": 0.011545702559095261,
          "rotation": 6.283185307179586,
          "target": "5-bloque-b"
        },
        {
          "yaw": -0.118926481328959,
          "pitch": 0.13755547343511587,
          "rotation": 0,
          "target": "7-parqueadero-cateps"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-parqueadero-cateps",
      "name": "Parqueadero CATEPS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3823510436371507,
          "pitch": 0.07937720952726224,
          "rotation": 5.497787143782138,
          "target": "6-bloque-g"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-asensor-4ta-planta",
      "name": "Asensor 4ta Planta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8537310274756713,
          "pitch": 0.15375032677922462,
          "rotation": 0,
          "target": "9-pasillo-aulas-4to"
        },
        {
          "yaw": -0.3332954400767001,
          "pitch": 0.0997640158944435,
          "rotation": 0,
          "target": "14-pasillo-4to-docentes-i"
        },
        {
          "yaw": 2.575186667014761,
          "pitch": 0.06751064607862389,
          "rotation": 10.210176124166829,
          "target": "17-gradas-4ta-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pasillo-aulas-4to",
      "name": "Pasillo Aulas 4to",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17959780139807435,
          "pitch": 0.11303191940637092,
          "rotation": 0,
          "target": "8-asensor-4ta-planta"
        },
        {
          "yaw": -2.7607834959962503,
          "pitch": 0.1955610486449686,
          "rotation": 0,
          "target": "13-pasillo-4to"
        },
        {
          "yaw": 1.6070160430164337,
          "pitch": 0.13375874168922408,
          "rotation": 0,
          "target": "10-aula-msite-4to"
        },
        {
          "yaw": 0.3858001337388952,
          "pitch": 0.21328483290374223,
          "rotation": 0.7853981633974483,
          "target": "17-gradas-4ta-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-aula-msite-4to",
      "name": "Aula MSITE 4to",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1930336940056243,
          "pitch": 0.17112957795574069,
          "rotation": 0,
          "target": "9-pasillo-aulas-4to"
        },
        {
          "yaw": -1.4383281729603379,
          "pitch": 0.08176711119984859,
          "rotation": 0,
          "target": "11-aula-panoramica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-aula-panoramica",
      "name": "Aula Panoramica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 1.008041539702429,
        "pitch": -0.05263319114948217,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.0759948657839207,
          "pitch": 0.16160361375536425,
          "rotation": 5.497787143782138,
          "target": "10-aula-msite-4to"
        },
        {
          "yaw": -1.2907134596425802,
          "pitch": 0.09383614996591128,
          "rotation": 5.497787143782138,
          "target": "12-aula-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-aula-frente",
      "name": "Aula Frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24322154297327536,
          "pitch": 0.3032724963272919,
          "rotation": 0.7853981633974483,
          "target": "11-aula-panoramica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pasillo-4to",
      "name": "Pasillo 4to",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6420578237093455,
          "pitch": -0.0038756784261995136,
          "rotation": 0,
          "target": "9-pasillo-aulas-4to"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pasillo-4to-docentes-i",
      "name": "Pasillo 4to Docentes I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.982915150228477,
          "pitch": 0.17146451706797805,
          "rotation": 0,
          "target": "8-asensor-4ta-planta"
        },
        {
          "yaw": -0.07830683113348513,
          "pitch": 0.022131533371364753,
          "rotation": 0,
          "target": "15-pasillo-4to-docentes-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pasillo-4to-docentes-ii",
      "name": "Pasillo 4to Docentes II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.959882572647035,
          "pitch": 0.09209193494461054,
          "rotation": 0,
          "target": "14-pasillo-4to-docentes-i"
        },
        {
          "yaw": 1.627588234997094,
          "pitch": 0.10902589595249879,
          "rotation": 0,
          "target": "16-despacho-msite-4to"
        },
        {
          "yaw": -0.11359334269910093,
          "pitch": 0.12477579221485513,
          "rotation": 0,
          "target": "19-pasillo-4ta-docente-iii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-despacho-msite-4to",
      "name": "Despacho MSITE 4to",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7258955216432348,
          "pitch": 0.04512354033055743,
          "rotation": 5.497787143782138,
          "target": "15-pasillo-4to-docentes-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-gradas-4ta-planta",
      "name": "Gradas 4ta Planta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1938426775891458,
          "pitch": 0.16508111662489,
          "rotation": 10.210176124166829,
          "target": "22-asensor-3ra-planta-ii"
        },
        {
          "yaw": -2.466272386967482,
          "pitch": 0.2465656696831875,
          "rotation": 0,
          "target": "8-asensor-4ta-planta"
        },
        {
          "yaw": 1.429866417547629,
          "pitch": 0.22992868462578464,
          "rotation": 5.497787143782138,
          "target": "9-pasillo-aulas-4to"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pasillo-docente-3ra-i",
      "name": "Pasillo Docente 3ra I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "19-pasillo-4ta-docente-iii",
      "name": "Pasillo 4ta Docente III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1906314548048318,
          "pitch": 0.09075630769642906,
          "rotation": 0,
          "target": "20-pasillo-4ta-docente-iv"
        },
        {
          "yaw": 2.913166512563432,
          "pitch": 0.09093651221434129,
          "rotation": 0,
          "target": "15-pasillo-4to-docentes-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pasillo-4ta-docente-iv",
      "name": "Pasillo 4ta Docente IV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.037281287904566,
          "pitch": 0.059632269391450166,
          "rotation": 0,
          "target": "19-pasillo-4ta-docente-iii"
        },
        {
          "yaw": -0.0814832471809801,
          "pitch": 0.07860322745795045,
          "rotation": 0,
          "target": "21-asensor-4ta-planta-li"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-asensor-4ta-planta-li",
      "name": "Asensor 4ta Planta LI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11479295111581678,
          "pitch": 0.03456273528863463,
          "rotation": 0,
          "target": "20-pasillo-4ta-docente-iv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-asensor-3ra-planta-ii",
      "name": "Asensor 3ra Planta II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.872154176585905,
          "pitch": -0.27196338565552836,
          "rotation": 0.7853981633974483,
          "target": "17-gradas-4ta-planta"
        },
        {
          "yaw": -2.1120278148923823,
          "pitch": 0.07268130531234362,
          "rotation": 7.853981633974483,
          "target": "23-laboratorio-3ra-d"
        },
        {
          "yaw": -2.3315836528232943,
          "pitch": 0.06471533856242395,
          "rotation": 4.71238898038469,
          "target": "24-laboratorio-3ra-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-laboratorio-3ra-d",
      "name": "Laboratorio 3ra D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8890053599947088,
          "pitch": 0.05075343432271495,
          "rotation": 0,
          "target": "22-asensor-3ra-planta-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-laboratorio-3ra-i",
      "name": "Laboratorio 3ra I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6880771533704753,
          "pitch": 0.1844082498231696,
          "rotation": 0,
          "target": "22-asensor-3ra-planta-ii"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CATEPS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
