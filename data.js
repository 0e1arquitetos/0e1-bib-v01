var APP_DATA = {
  "scenes": [
    {
      "id": "0-recepo-1",
      "name": "RECEPÇÃO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.014018815112667227,
        "pitch": 0.026946011284771032,
        "fov": 1.3923120836474028
      },
      "linkHotspots": [
        {
          "yaw": -0.02581410434442688,
          "pitch": 0.6747174437009278,
          "rotation": 0,
          "target": "1-recepo-2"
        },
        {
          "yaw": -0.8393063741148481,
          "pitch": 0.16623685156764267,
          "rotation": 0,
          "target": "2-sala-de-atendimento"
        },
        {
          "yaw": -0.03564127901978331,
          "pitch": 0.24662007644218065,
          "rotation": 0,
          "target": "3-lavabo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-recepo-2",
      "name": "RECEPÇÃO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07868216093499214,
          "pitch": 0.4908767973173429,
          "rotation": 0,
          "target": "3-lavabo"
        },
        {
          "yaw": -1.4258855920618423,
          "pitch": 0.3365309941709782,
          "rotation": 0,
          "target": "2-sala-de-atendimento"
        },
        {
          "yaw": -3.1234708912576714,
          "pitch": 0.6906700581737848,
          "rotation": 0,
          "target": "0-recepo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala-de-atendimento",
      "name": "SALA DE ATENDIMENTO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.014230879029337729,
        "pitch": -0.017229188373601545,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.848698783536892,
          "pitch": 0.3810816054022421,
          "rotation": 0,
          "target": "0-recepo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lavabo",
      "name": "LAVABO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.0111447119048389,
        "pitch": 0.5056971728508728,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.003750972892803,
          "pitch": 0.7093092093259585,
          "rotation": 0,
          "target": "1-recepo-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BIB - EP V01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
