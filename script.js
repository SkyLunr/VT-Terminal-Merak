(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_72D92074_6E02_5A01_41D5_E0D7708EEF93",
 "idleSequence": "this.sequence_72DED074_6E02_5A01_41B0_E0F3DC63C891",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_72DED074_6E02_5A01_41B0_E0F3DC63C891"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -91.64,
   "backwardYaw": 95.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D",
   "distance": 1
  },
  {
   "yaw": 89.99,
   "backwardYaw": 63.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Bagian Dalam Terminal ",
 "id": "panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84",
 "thumbnailUrl": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06DF6D1D_1412_6A4C_41B2_BBE180BFC854",
  "this.overlay_07AD414F_1413_BACB_41B1_48379047EB0F",
  "this.overlay_064F6B9B_1412_6E54_419C_E9B24A174548",
  "this.overlay_3F6EC415_27DB_B1EF_41B0_161B880982B7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 70.4,
   "backwardYaw": -96.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127",
   "distance": 1
  },
  {
   "yaw": -108.22,
   "backwardYaw": -94.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Halaman Terminal 2",
 "id": "panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0",
 "thumbnailUrl": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1A9C4767_1432_A6FB_41A3_7A895E277786",
  "this.overlay_1AE42725_1432_667F_41B3_E842DA73B014",
  "this.overlay_1A87E445_1431_DA3F_41B3_F470C0A8FA62",
  "this.overlay_3F311ED6_27E4_6E6A_4192_13E06A52A9C3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_75472FAD_6E02_4602_41A9_F15BD1E688F4",
 "idleSequence": "this.sequence_75473FAE_6E02_4601_41DB_5A94072C44B7",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_75473FAE_6E02_4601_41DB_5A94072C44B7"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 95.96,
   "backwardYaw": -91.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84",
   "distance": 1
  },
  {
   "yaw": -100.69,
   "backwardYaw": 48.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Bagian Dalam Terminal ",
 "id": "panorama_19A2C63A_13FE_A654_41B3_2171947E714D",
 "thumbnailUrl": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06AFC923_1416_AA74_413D_9648A7132E5C",
  "this.overlay_0756AA42_1417_EE34_41AA_B5F17AF81098",
  "this.overlay_061251C0_1416_5A35_4151_B37260BA8BE0",
  "this.overlay_07F40ECE_1416_A7CD_4188_B5E00B09C1AA"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -120.03,
   "backwardYaw": -73.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A336B4_13FE_665C_419E_5F0D85649569",
   "distance": 1
  },
  {
   "yaw": -120.03,
   "backwardYaw": -73.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A336B4_13FE_665C_419E_5F0D85649569",
   "distance": 1
  },
  {
   "yaw": 15.28,
   "backwardYaw": -0.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40",
   "distance": 1
  },
  {
   "yaw": -35.58,
   "backwardYaw": -39.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Dalam terminal",
 "id": "panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167",
 "thumbnailUrl": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06BFF8CC_1411_ABCC_41B2_B12E911EDE60",
  "this.overlay_0671947C_1412_DACC_4173_2B0601441E1A",
  "this.overlay_0778F5C0_1412_7A35_4174_AC4B58AEFDA8",
  "this.overlay_01F78B02_1471_AE34_41AD_42D674E173A5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_75664FF3_6E02_4607_41C5_CC6BF49ED319",
 "idleSequence": "this.sequence_75666FF3_6E02_4607_41A1_F1885199F62F",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_75666FF3_6E02_4607_41A1_F1885199F62F"
},
{
 "items": [
  {
   "media": "this.panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_camera"
  },
  {
   "media": "this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127_camera"
  },
  {
   "media": "this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_camera"
  },
  {
   "media": "this.panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_camera"
  },
  {
   "media": "this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_camera"
  },
  {
   "media": "this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_camera"
  },
  {
   "media": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_camera"
  },
  {
   "media": "this.panorama_19A336B4_13FE_665C_419E_5F0D85649569",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A336B4_13FE_665C_419E_5F0D85649569_camera"
  },
  {
   "media": "this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_camera"
  },
  {
   "media": "this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_camera"
  },
  {
   "media": "this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_camera"
  },
  {
   "media": "this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D_camera"
  },
  {
   "media": "this.panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_camera"
  },
  {
   "media": "this.panorama_19A24608_13FE_A634_41A4_03D0D733AE2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_camera"
  },
  {
   "media": "this.panorama_0EC85418_141E_7A55_419A_FFD7100DE58D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_camera"
  },
  {
   "media": "this.panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17",
   "camera": "this.panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A336B4_13FE_665C_419E_5F0D85649569_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7291F0B5_6E02_5A03_41D7_E594E7B6BB5E",
 "idleSequence": "this.sequence_7291E0B5_6E02_5A03_41D5_300852F34E15",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7291E0B5_6E02_5A03_41D5_300852F34E15"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A8667C_13F1_E6CD_4181_20B511D42127_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 63.65,
   "backwardYaw": 89.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84",
   "distance": 1
  },
  {
   "yaw": 93.76,
   "backwardYaw": 125.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "UMKM",
 "id": "panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6",
 "thumbnailUrl": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_03A9C5AA_140E_BA75_41A7_DF75CAD16A1A",
  "this.overlay_00CEF711_1472_E654_41B2_EA556ED1F2C1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A2C63A_13FE_A654_41B3_2171947E714D_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "touchControlMode": "drag_rotation",
 "buttonMoveRight": "this.IconButton_75F24A27_6E02_4E0F_419E_E7D30CE8915B",
 "class": "PanoramaPlayer",
 "buttonRestart": "this.IconButton_75F3BA27_6E02_4E0F_41D1_59DAEA16457D",
 "buttonZoomOut": "this.IconButton_75F3CA27_6E02_4E0F_41CE_2481FD297775",
 "buttonPause": "this.IconButton_75F26A27_6E02_4E0F_41B0_3927745AED26",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayRight": "this.IconButton_75F23A27_6E02_4E0F_41D5_ABE7218093C3",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "buttonPlayLeft": "this.IconButton_75F3AA27_6E02_4E0F_41BE_31BA48843625",
 "buttonZoomIn": "this.IconButton_75F20A27_6E02_4E0F_41D4_196D528AAEF1",
 "buttonMoveUp": "this.IconButton_75F27A27_6E02_4E0F_41D7_FB3E476806C2",
 "buttonMoveDown": "this.IconButton_75F25A27_6E02_4E0F_41D7_62DDB8CB23C4",
 "buttonMoveLeft": "this.IconButton_75F39A27_6E02_4E0F_41CB_748958A61F03",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 79.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7524605A_6E02_5A01_41CD_863223088972",
 "idleSequence": "this.sequence_7524105A_6E02_5A01_41DA_1C39E1A29A2E",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7524105A_6E02_5A01_41DA_1C39E1A29A2E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_72EA10A7_6E02_5A0F_41D9_9D0F62DD49A5",
 "idleSequence": "this.sequence_72EA00A7_6E02_5A0F_41D6_1351E9E557E2",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_72EA00A7_6E02_5A0F_41D6_1351E9E557E2"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -54.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_72F0808D_6E02_5A03_41B4_933EF6ED4D93",
 "idleSequence": "this.sequence_72F0B08D_6E02_5A03_41D8_ABBB55B00B7C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_72F0B08D_6E02_5A03_41D8_ABBB55B00B7C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_72C48081_6E02_5A03_41BF_4B48EEFC921B",
 "idleSequence": "this.sequence_72C45081_6E02_5A03_41D0_AD73F287E415",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_72C45081_6E02_5A03_41D0_AD73F287E415"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 106.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7548FFBB_6E02_4607_41A2_97B67A7CFF87",
 "idleSequence": "this.sequence_75488FBB_6E02_4607_41D6_C7B4948A88A8",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_75488FBB_6E02_4607_41D6_C7B4948A88A8"
},
{
 "id": "audio_724AAD3A_6E03_CA01_41D6_36F071B60F69",
 "audio": {
  "mp3Url": "media/audio_724AAD3A_6E03_CA01_41D6_36F071B60F69.mp3",
  "oggUrl": "media/audio_724AAD3A_6E03_CA01_41D6_36F071B60F69.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "data": {
  "label": "alex-productions-happy-and-fun-background-music(chosic.com)"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -164.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7511E00D_6E02_5A00_41D5_B855474E3ABD",
 "idleSequence": "this.sequence_7511900D_6E02_5A00_41D8_224986F7E2B5",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7511900D_6E02_5A00_41D8_224986F7E2B5"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -0.7,
   "backwardYaw": 15.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167",
   "distance": 1
  },
  {
   "yaw": -99.93,
   "backwardYaw": 73.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Pintu Masuk",
 "id": "panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40",
 "thumbnailUrl": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_055C9B38_140E_6E55_41B1_2EE8242F6E19",
  "this.overlay_06079DA8_140E_AA75_41A8_879E7C9ECE39",
  "this.overlay_3FBD7B42_27E5_D665_41B6_08757BFA6F0E",
  "this.overlay_3EB1E4E3_27E5_D22B_41B6_94F2BBA68C50"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Masuk Area Terminal",
 "id": "panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE",
 "thumbnailUrl": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1917A1FC_143E_FDCD_419D_78665C5727EF",
  "this.overlay_07C4DDC2_272B_F265_4157_BAF5F2556053",
  "this.overlay_39C1474B_272C_5E7A_41B3_849168DDC97F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -73.81,
   "backwardYaw": -120.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167",
   "distance": 1
  },
  {
   "yaw": 106.07,
   "backwardYaw": 1.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Halaman Kantor Dishub",
 "id": "panorama_19A336B4_13FE_665C_419E_5F0D85649569",
 "thumbnailUrl": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_02735124_1471_FA7D_41B3_1A65F1AB90DA",
  "this.overlay_029F02C4_1471_DE3C_41A7_6C42056BB899",
  "this.overlay_037AD7A5_1476_667C_41AE_A21B66AE7E13",
  "this.overlay_3F2101B7_27E4_B22B_41B0_718878761A9D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 48.04,
   "backwardYaw": -100.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A24608_13FE_A634_41A4_03D0D733AE2A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Bagian Dalam Terminal ",
 "id": "panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA",
 "thumbnailUrl": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_066177CD_1412_65CF_41B1_766AE901E380",
  "this.overlay_07CC71B1_1413_BA57_41B2_D2D5282311DC",
  "this.overlay_065E88E2_1412_6BF5_41B1_F98AB116AA23",
  "this.overlay_079530E6_1412_DBFD_41A7_3DFC568232C0",
  "this.overlay_3F398683_27DC_BEEB_41AB_C31D18CA5ACE",
  "this.overlay_3FE621C1_27DD_B267_41B5_91B05D3B649F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -116.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_756E5000_6E02_5A01_41D1_C4BC59AC81D0",
 "idleSequence": "this.sequence_756E7000_6E02_5A01_41B2_E186BE415F20",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_756E7000_6E02_5A01_41B2_E186BE415F20"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Area Turun Penumpang",
 "id": "panorama_0EC85418_141E_7A55_419A_FFD7100DE58D",
 "thumbnailUrl": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09214471_141F_BAD7_41AF_C6FF9EAE21D9",
  "this.overlay_0DE6A93F_141E_6A4B_41AA_8B74E41344D4",
  "this.overlay_3F595E8A_27DC_AEE5_41AD_55AB0D76D129"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 140.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_757CFFE6_6E02_4601_41D1_F424D3875C67",
 "idleSequence": "this.sequence_757C8FE6_6E02_4601_41D8_EF732B601E8F",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_757C8FE6_6E02_4601_41D8_EF732B601E8F"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_728B40D4_6E02_5A01_41AF_A7C4D1623E48",
 "idleSequence": "this.sequence_728B10D4_6E02_5A01_41C6_D1BB318DB11C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_728B10D4_6E02_5A01_41C6_D1BB318DB11C"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 73.91,
   "backwardYaw": -99.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40",
   "distance": 1
  },
  {
   "yaw": -96.16,
   "backwardYaw": 70.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Halaman Terminal",
 "id": "panorama_19A8667C_13F1_E6CD_4181_20B511D42127",
 "thumbnailUrl": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1BB5B40E_1432_5A4D_417A_A87FF3535EA6",
  "this.overlay_04DC1FA9_1432_E677_4189_7FEDEDDCA911",
  "this.overlay_1A616234_1433_BE5D_419B_EC158E609FF4",
  "this.overlay_1BF70493_1432_FA5B_41B1_662682A9EB0D",
  "this.overlay_3067F46B_27EB_D23A_4146_3AD8367EF83F",
  "this.overlay_3F6DF620_27E4_FE26_41C3_A96739CC161B",
  "this.overlay_306ED27F_27E4_B61A_41C1_20C6E099C8E8",
  "this.overlay_3F5B27E2_27E4_5E2A_41B2_B7B579115675"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "items": [
  {
   "media": "this.panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_camera"
  },
  {
   "media": "this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127_camera"
  },
  {
   "media": "this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_camera"
  },
  {
   "media": "this.panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_camera"
  },
  {
   "media": "this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_camera"
  },
  {
   "media": "this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_camera"
  },
  {
   "media": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_camera"
  },
  {
   "media": "this.panorama_19A336B4_13FE_665C_419E_5F0D85649569",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A336B4_13FE_665C_419E_5F0D85649569_camera"
  },
  {
   "media": "this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_camera"
  },
  {
   "media": "this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_camera"
  },
  {
   "media": "this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_camera"
  },
  {
   "media": "this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D_camera"
  },
  {
   "media": "this.panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_camera"
  },
  {
   "media": "this.panorama_19A24608_13FE_A634_41A4_03D0D733AE2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_camera"
  },
  {
   "media": "this.panorama_0EC85418_141E_7A55_419A_FFD7100DE58D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_camera"
  },
  {
   "media": "this.panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_camera"
  }
 ],
 "id": "ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -109.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7508C033_6E02_5A07_41A4_D7A98A088AD2",
 "idleSequence": "this.sequence_7508E034_6E02_5A01_417B_8B6911EAE3F1",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7508E034_6E02_5A01_417B_8B6911EAE3F1"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -70.66,
   "backwardYaw": -6.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Pinggir Jalan",
 "id": "panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534",
 "thumbnailUrl": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0000ED70_1431_AAD5_417C_2F6B10DE94CA",
  "this.overlay_1B883F3F_1433_E64B_4190_F5C350950834"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 106.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7572FFCC_6E02_4601_41DA_5332208AF5DF",
 "idleSequence": "this.sequence_75729FCC_6E02_4601_41D5_AF01EEC79A4B",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_75729FCC_6E02_4601_41D5_AF01EEC79A4B"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 59.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_72FE009B_6E02_5A07_4178_38488BAB87BD",
 "idleSequence": "this.sequence_72FE309B_6E02_5A07_41C8_DBDDA17526F2",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_72FE309B_6E02_5A07_41C8_DBDDA17526F2"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 1.81,
   "backwardYaw": 106.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A336B4_13FE_665C_419E_5F0D85649569",
   "distance": 1
  },
  {
   "yaw": 125.95,
   "backwardYaw": 93.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ke Area ",
 "id": "panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F",
 "thumbnailUrl": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_010C548D_1472_7A4F_4187_DD32D1257E91",
  "this.overlay_0047BA96_1472_AE5C_41A6_82B8A7BA8718"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -86.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7539004E_6E02_5A01_41D5_495C22C2ED4C",
 "idleSequence": "this.sequence_7539304E_6E02_5A01_41CB_0B16D2C39A1C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7539304E_6E02_5A01_41CB_0B16D2C39A1C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 109.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_72D27067_6E02_5A0F_41C5_D87BCD503606",
 "idleSequence": "this.sequence_72D21067_6E02_5A0F_41D6_B664FD8261D1",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_72D21067_6E02_5A0F_41D6_B664FD8261D1"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -39.3,
   "backwardYaw": -35.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Mushola",
 "id": "panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17",
 "thumbnailUrl": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D81EF67_1412_66FB_4174_E89BCB98601D",
  "this.overlay_30C92973_27DC_722B_41B6_C19ACCCC01DE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 80.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_75032027_6E02_5A0F_41D8_396C30E89A64",
 "idleSequence": "this.sequence_7500D027_6E02_5A0F_41A2_8F4C7A83217A",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7500D027_6E02_5A0F_41A2_8F4C7A83217A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_729DC0C7_6E02_5A0F_41BC_9FD89F190939",
 "idleSequence": "this.sequence_729DF0C7_6E02_5A0F_419B_72923A3C59BD",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_729DF0C7_6E02_5A0F_419B_72923A3C59BD"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7519A01A_6E02_5A01_41A7_49F0E19C7804",
 "idleSequence": "this.sequence_7519501A_6E02_5A01_41AA_43B692B01827",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7519501A_6E02_5A01_41AA_43B692B01827"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_72B7A0E1_6E02_5A03_4174_C93D0C285104",
 "idleSequence": "this.sequence_72B750E1_6E02_5A03_41C2_29ACC8304CEB",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_72B750E1_6E02_5A03_41C2_29ACC8304CEB"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_75327041_6E02_5A03_41D9_C232A6B431AF",
 "idleSequence": "this.sequence_75326041_6E02_5A03_41BF_FE71582397DC",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_75326041_6E02_5A03_41BF_FE71582397DC"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Bagian Dalam Terminal ",
 "id": "panorama_19A24608_13FE_A634_41A4_03D0D733AE2A",
 "thumbnailUrl": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_061975C7_1411_BA3B_41A8_6C79875AE43B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -6.9,
   "backwardYaw": -70.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534",
   "distance": 1
  },
  {
   "yaw": -94.68,
   "backwardYaw": -108.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Pintu Keluar Terminal",
 "id": "panorama_1995AEB1_13F1_A654_418B_060B86E7BD85",
 "thumbnailUrl": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1B05AC95_1437_EA5F_417C_000727795EA9",
  "this.overlay_1B83409C_1437_BA4C_41B1_00FE06F19CDF",
  "this.overlay_30E1527B_27E4_761B_41B3_6740A2CE1C5C",
  "this.overlay_3FCC6A76_27E4_B62D_41C3_2A4763D10D19"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_75437FA0_6E02_4601_41CB_20BCDF17990D",
 "idleSequence": "this.sequence_75430FA0_6E02_4601_41D8_884061294C46",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_75430FA0_6E02_4601_41D8_884061294C46"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7574FFD9_6E02_4603_41C1_51B6E605F74C",
 "idleSequence": "this.sequence_75748FD9_6E02_4603_41DA_EA284B4BDE9C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_75748FD9_6E02_4603_41DA_EA284B4BDE9C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "itemThumbnailShadowColor": "#000000",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "width": 178,
 "scrollBarColor": "#FFFFFF",
 "id": "ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257",
 "scrollBarVisible": "rollOver",
 "right": "0.42%",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "minHeight": 20,
 "itemThumbnailShadowOpacity": 0.54,
 "itemBorderRadius": 0,
 "minWidth": 20,
 "itemLabelFontFamily": "Arial",
 "paddingRight": 20,
 "height": "40.432%",
 "itemPaddingLeft": 3,
 "itemThumbnailShadowVerticalLength": 3,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "shadow": false,
 "itemBackgroundColorRatios": [],
 "layout": "vertical",
 "class": "ThumbnailList",
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "top": "0.86%",
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "borderRadius": 5,
 "gap": 3,
 "paddingLeft": 20,
 "itemLabelGap": 9,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 75,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "data": {
  "name": "Container53059"
 },
 "children": [
  "this.IconButton_75F3CA27_6E02_4E0F_41CE_2481FD297775",
  "this.IconButton_75F3BA27_6E02_4E0F_41D1_59DAEA16457D",
  "this.IconButton_75F3AA27_6E02_4E0F_41BE_31BA48843625",
  "this.IconButton_75F39A27_6E02_4E0F_41CB_748958A61F03",
  "this.Container_75F38A27_6E02_4E0F_41DA_4071909B82B3",
  "this.IconButton_75F24A27_6E02_4E0F_419E_E7D30CE8915B",
  "this.IconButton_75F23A27_6E02_4E0F_41D5_ABE7218093C3",
  "this.IconButton_75F22A27_6E02_4E0F_41DB_05E038428429",
  "this.IconButton_75F20A27_6E02_4E0F_41D4_196D528AAEF1"
 ],
 "id": "Container_75F2FA27_6E02_4E0F_41C1_1BFE4B45406F",
 "left": "37.94%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "23.758%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 20,
 "verticalAlign": "middle",
 "bottom": "-0.05%",
 "contentOpaque": false,
 "minWidth": 20,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": "18.64%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingLeft": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden",
 "layout": "horizontal"
},
{
 "id": "IconButton_75F22A27_6E02_4E0F_41DB_05E038428429",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F22A27_6E02_4E0F_41DB_05E038428429.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F22A27_6E02_4E0F_41DB_05E038428429_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53070"
 },
 "paddingLeft": 0
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_72DED074_6E02_5A01_41B0_E0F3DC63C891",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12,
   "image": "this.AnimatedImageResource_0EC43EE8_147E_E7F4_41A7_2491F98570C7",
   "pitch": -21.79,
   "yaw": -91.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D, this.camera_75664FF3_6E02_4607_41C5_CC6BF49ED319); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_06DF6D1D_1412_6A4C_41B2_BBE180BFC854",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12,
   "yaw": -91.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Area UMKM"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.65,
   "image": "this.AnimatedImageResource_3A1E878E_272D_FEFD_419B_2575325CD2F0",
   "pitch": 6.26,
   "yaw": 71.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07AD414F_1413_BACB_41B1_48379047EB0F",
 "maps": [
  {
   "hfov": 14.65,
   "yaw": 71.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.93,
   "image": "this.AnimatedImageResource_0EC56EEE_147E_E7CC_41A0_1565DD83E070",
   "pitch": -22.55,
   "yaw": 89.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6, this.camera_756E5000_6E02_5A01_41D1_C4BC59AC81D0); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_064F6B9B_1412_6E54_419C_E9B24A174548",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.93,
   "yaw": 89.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Area UMKM"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0_HS_3_0.png",
      "width": 528,
      "class": "ImageResourceLevel",
      "height": 123
     }
    ]
   },
   "pitch": 13.75,
   "yaw": 75.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F6EC415_27DB_B1EF_41B0_161B880982B7",
 "maps": [
  {
   "hfov": 34.41,
   "yaw": 75.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0_HS_3_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.63,
   "image": "this.AnimatedImageResource_0ECFCEE4_147E_E7FD_41B2_309A7AC4415B",
   "pitch": -12.25,
   "yaw": 70.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127, this.camera_75437FA0_6E02_4601_41CB_20BCDF17990D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1A9C4767_1432_A6FB_41A3_7A895E277786",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.63,
   "yaw": 70.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.35,
   "image": "this.AnimatedImageResource_0ECF9EE4_147E_E7FD_41A6_D7793EE0789D",
   "pitch": -17.02,
   "yaw": -108.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85, this.camera_75472FAD_6E02_4602_41A9_F15BD1E688F4); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Arah Keluar"
  }
 ],
 "id": "overlay_1AE42725_1432_667F_41B3_E842DA73B014",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.35,
   "yaw": -108.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Area Parkir"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.04,
   "image": "this.AnimatedImageResource_3A13A78B_272D_FEFB_41B7_942EDFB36D6F",
   "pitch": 7.4,
   "yaw": -31.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A87E445_1431_DA3F_41B3_F470C0A8FA62",
 "maps": [
  {
   "hfov": 5.04,
   "yaw": -31.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Parkir Mobil"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0_HS_3_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ]
   },
   "pitch": 11.09,
   "yaw": -30.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F311ED6_27E4_6E6A_4192_13E06A52A9C3",
 "maps": [
  {
   "hfov": 13.15,
   "yaw": -30.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0_HS_3_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_75473FAE_6E02_4601_41DB_5A94072C44B7",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Tunggu dan Naik Penumpang"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.69,
   "image": "this.AnimatedImageResource_0EC53EEE_147E_E7CC_41A5_CF950C203365",
   "pitch": 3.45,
   "yaw": 9.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06AFC923_1416_AA74_413D_9648A7132E5C",
 "maps": [
  {
   "hfov": 7.69,
   "yaw": 9.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loket"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_0EC5FEEE_147E_E7CC_418B_A08F38147916",
   "pitch": 1.68,
   "yaw": 156.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0756AA42_1417_EE34_41AA_B5F17AF81098",
 "maps": [
  {
   "hfov": 7.7,
   "yaw": 156.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.03,
   "image": "this.AnimatedImageResource_0EC64EEE_147E_E7CC_4197_E40A69B851FD",
   "pitch": -14.64,
   "yaw": -100.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA, this.camera_729DC0C7_6E02_5A0F_41BC_9FD89F190939); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_061251C0_1416_5A35_4151_B37260BA8BE0",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.03,
   "yaw": -100.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.9,
   "image": "this.AnimatedImageResource_0EC62EEE_147E_E7CC_4183_181F46D3BDAE",
   "pitch": -17.08,
   "yaw": 95.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84, this.camera_7291F0B5_6E02_5A03_41D7_E594E7B6BB5E); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_07F40ECE_1416_A7CD_4188_B5E00B09C1AA",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 95.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.21,
   "image": "this.AnimatedImageResource_0EC20EE6_147E_E7FD_419B_3BDC8791F7B5",
   "pitch": -19.03,
   "yaw": -120.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A336B4_13FE_665C_419E_5F0D85649569, this.camera_7572FFCC_6E02_4601_41DA_5332208AF5DF); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_06BFF8CC_1411_ABCC_41B2_B12E911EDE60",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.21,
   "yaw": -120.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.39,
   "image": "this.AnimatedImageResource_0EC10EE6_147E_E7FD_419F_BEF894025E1E",
   "pitch": -16.48,
   "yaw": 15.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40, this.camera_7574FFD9_6E02_4603_41C1_51B6E605F74C); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0671947C_1412_DACC_4173_2B0601441E1A",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.39,
   "yaw": 15.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.4,
   "image": "this.AnimatedImageResource_0EC1DEE6_147E_E7FD_41A6_66E704F619FF",
   "pitch": -16.24,
   "yaw": 99.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19AC56F6_13F1_E7DC_4186_3AF318EA05AE, this.camera_0C8A06DA_1471_A7D5_41A4_685937A25B16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0778F5C0_1412_7A35_4174_AC4B58AEFDA8",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.4,
   "yaw": 99.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.91,
   "image": "this.AnimatedImageResource_0EC1AEE6_147E_E7FD_417C_5B7504771D80",
   "pitch": -6.47,
   "yaw": -35.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17, this.camera_757CFFE6_6E02_4601_41D1_F424D3875C67); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ke Mushola"
  }
 ],
 "id": "overlay_01F78B02_1471_AE34_41AD_42D674E173A5",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.91,
   "yaw": -35.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_75666FF3_6E02_4607_41A1_F1885199F62F",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7291E0B5_6E02_5A03_41D5_300852F34E15",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.19,
   "image": "this.AnimatedImageResource_0EC38EE8_147E_E7F4_41A6_AF33CF27EE46",
   "pitch": -19.53,
   "yaw": 63.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84, this.camera_72C48081_6E02_5A03_41BF_4B48EEFC921B); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ke Area Loket,UMKM, ruang tunggu dan naik penumpang"
  }
 ],
 "id": "overlay_03A9C5AA_140E_BA75_41A7_DF75CAD16A1A",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.19,
   "yaw": 63.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_0EC46EE8_147E_E7F4_41AA_1E1AF9FE95B7",
   "pitch": -13,
   "yaw": 93.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F, this.camera_72F0808D_6E02_5A03_41B4_933EF6ED4D93); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_00CEF711_1472_E654_41B2_EA556ED1F2C1",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.59,
   "yaw": 93.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "id": "IconButton_75F24A27_6E02_4E0F_419E_E7D30CE8915B",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F24A27_6E02_4E0F_419E_E7D30CE8915B.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F24A27_6E02_4E0F_419E_E7D30CE8915B_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F24A27_6E02_4E0F_419E_E7D30CE8915B_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53068"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F3BA27_6E02_4E0F_41D1_59DAEA16457D",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F3BA27_6E02_4E0F_41D1_59DAEA16457D.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F3BA27_6E02_4E0F_41D1_59DAEA16457D_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F3BA27_6E02_4E0F_41D1_59DAEA16457D_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53061"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F3CA27_6E02_4E0F_41CE_2481FD297775",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F3CA27_6E02_4E0F_41CE_2481FD297775.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F3CA27_6E02_4E0F_41CE_2481FD297775_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F3CA27_6E02_4E0F_41CE_2481FD297775_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53060"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F26A27_6E02_4E0F_41B0_3927745AED26",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F26A27_6E02_4E0F_41B0_3927745AED26.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F26A27_6E02_4E0F_41B0_3927745AED26_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53066"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F23A27_6E02_4E0F_41D5_ABE7218093C3",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F23A27_6E02_4E0F_41D5_ABE7218093C3.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F23A27_6E02_4E0F_41D5_ABE7218093C3_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F23A27_6E02_4E0F_41D5_ABE7218093C3_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53069"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F3AA27_6E02_4E0F_41BE_31BA48843625",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F3AA27_6E02_4E0F_41BE_31BA48843625.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F3AA27_6E02_4E0F_41BE_31BA48843625_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F3AA27_6E02_4E0F_41BE_31BA48843625_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53062"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F20A27_6E02_4E0F_41D4_196D528AAEF1",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F20A27_6E02_4E0F_41D4_196D528AAEF1.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F20A27_6E02_4E0F_41D4_196D528AAEF1_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F20A27_6E02_4E0F_41D4_196D528AAEF1_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53071"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F27A27_6E02_4E0F_41D7_FB3E476806C2",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F27A27_6E02_4E0F_41D7_FB3E476806C2.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F27A27_6E02_4E0F_41D7_FB3E476806C2_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F27A27_6E02_4E0F_41D7_FB3E476806C2_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53065"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F25A27_6E02_4E0F_41D7_62DDB8CB23C4",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F25A27_6E02_4E0F_41D7_62DDB8CB23C4.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F25A27_6E02_4E0F_41D7_62DDB8CB23C4_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F25A27_6E02_4E0F_41D7_62DDB8CB23C4_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53067"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_75F39A27_6E02_4E0F_41CB_748958A61F03",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_75F39A27_6E02_4E0F_41CB_748958A61F03.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_75F39A27_6E02_4E0F_41CB_748958A61F03_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_75F39A27_6E02_4E0F_41CB_748958A61F03_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53063"
 },
 "paddingLeft": 0
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7524105A_6E02_5A01_41DA_1C39E1A29A2E",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_72EA00A7_6E02_5A0F_41D6_1351E9E557E2",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_72F0B08D_6E02_5A03_41D8_ABBB55B00B7C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_72C45081_6E02_5A03_41D0_AD73F287E415",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_75488FBB_6E02_4607_41D6_C7B4948A88A8",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7511900D_6E02_5A00_41D8_224986F7E2B5",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.39,
   "image": "this.AnimatedImageResource_0EC1DEE5_147E_E7FF_419A_3C86059460A4",
   "pitch": -16.52,
   "yaw": -99.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A8667C_13F1_E6CD_4181_20B511D42127, this.camera_7519A01A_6E02_5A01_41A7_49F0E19C7804); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_055C9B38_140E_6E55_41B1_2EE8242F6E19",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.39,
   "yaw": -99.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_0EC24EE5_147E_E7FF_4180_B2F164BBFF6F",
   "pitch": -14.76,
   "yaw": -0.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167, this.camera_7511E00D_6E02_5A00_41D5_B855474E3ABD); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Masuk Gedung"
  }
 ],
 "id": "overlay_06079DA8_140E_AA75_41A8_879E7C9ECE39",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.49,
   "yaw": -0.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.91,
   "image": "this.AnimatedImageResource_3A1C478C_272D_FEFD_41B1_814CFA2C182C",
   "pitch": 4.65,
   "yaw": 78.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FBD7B42_27E5_D665_41B6_08757BFA6F0E",
 "maps": [
  {
   "hfov": 4.91,
   "yaw": 78.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Area UMKM"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0_HS_3_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": 8.56,
   "yaw": 79.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3EB1E4E3_27E5_D22B_41B6_94F2BBA68C50",
 "maps": [
  {
   "hfov": 15.74,
   "yaw": 79.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0_HS_3_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.25,
   "image": "this.AnimatedImageResource_0ECDBEE3_147E_E7FB_41AD_B795DE13EBFA",
   "pitch": -18.53,
   "yaw": -179.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1917A1FC_143E_FDCD_419D_78665C5727EF",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.25,
   "yaw": -179.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.45,
   "image": "this.AnimatedImageResource_3A112789_272D_FEE7_4194_4617FB9700C5",
   "pitch": 8.56,
   "yaw": -48.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07C4DDC2_272B_F265_4157_BAF5F2556053",
 "maps": [
  {
   "hfov": 5.45,
   "yaw": -48.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Pos Masuk"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0_HS_2_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 63
     }
    ]
   },
   "pitch": 12.52,
   "yaw": -47.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_39C1474B_272C_5E7A_41B3_849168DDC97F",
 "maps": [
  {
   "hfov": 15.22,
   "yaw": -47.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0_HS_2_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.4,
   "image": "this.AnimatedImageResource_0EC25EE7_147E_E7FB_4198_7DA64F9DE8D4",
   "pitch": -16.27,
   "yaw": 106.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F, this.camera_72EA10A7_6E02_5A0F_41D9_9D0F62DD49A5); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_02735124_1471_FA7D_41B3_1A65F1AB90DA",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.4,
   "yaw": 106.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_0EC2CEE7_147E_E7FB_4185_1736D6007E34",
   "pitch": -15.01,
   "yaw": -73.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167, this.camera_72FE009B_6E02_5A07_4178_38488BAB87BD); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_029F02C4_1471_DE3C_41A7_6C42056BB899",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.48,
   "yaw": -73.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kantor Dinas Perhubungan"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.18,
   "image": "this.AnimatedImageResource_3A1D578D_272D_FEFF_4199_6297E05A64E3",
   "pitch": 4.25,
   "yaw": -179.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_037AD7A5_1476_667C_41AE_A21B66AE7E13",
 "maps": [
  {
   "hfov": 9.18,
   "yaw": -179.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "kantor DISHUB"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0_HS_3_0.png",
      "width": 551,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ]
   },
   "pitch": 12.88,
   "yaw": -179.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F2101B7_27E4_B22B_41B0_718878761A9D",
 "maps": [
  {
   "hfov": 36,
   "yaw": -179.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0_HS_3_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.17,
   "image": "this.AnimatedImageResource_0EC6FEEF_147E_E7CC_41AD_ACD953B9D176",
   "pitch": -18.4,
   "yaw": -142.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_066177CD_1412_65CF_41B1_766AE901E380",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.17,
   "yaw": -142.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.44,
   "image": "this.AnimatedImageResource_0EC76EEF_147E_E7CC_41AB_3ED65B7739A6",
   "pitch": -19.03,
   "yaw": 48.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A2C63A_13FE_A654_41B3_2171947E714D, this.camera_7524605A_6E02_5A01_41CD_863223088972); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_07CC71B1_1413_BA57_41B2_D2D5282311DC",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.44,
   "yaw": 48.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Area Tunggu dan Naik Penumpang"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.65,
   "image": "this.AnimatedImageResource_0EC7DEEF_147E_E7CC_41AA_D5299E422A97",
   "pitch": 6.26,
   "yaw": -45.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_065E88E2_1412_6BF5_41B1_F98AB116AA23",
 "maps": [
  {
   "hfov": 7.65,
   "yaw": -45.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loket"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_0EC7FEEF_147E_E7CC_41A0_62571782DDBC",
   "pitch": -0.12,
   "yaw": 132.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_079530E6_1412_DBFD_41A7_3DFC568232C0",
 "maps": [
  {
   "hfov": 7.7,
   "yaw": 132.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Area Tunggu dan Naik Penumpang"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 33.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0_HS_4_0.png",
      "width": 513,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ]
   },
   "pitch": 14.07,
   "yaw": -43.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F398683_27DC_BEEB_41AB_C31D18CA5ACE",
 "maps": [
  {
   "hfov": 33.38,
   "yaw": -43.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0_HS_4_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Loket"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0_HS_5_0.png",
      "width": 148,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": 5.43,
   "yaw": 134.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3FE621C1_27DD_B267_41B5_91B05D3B649F",
 "maps": [
  {
   "hfov": 9.88,
   "yaw": 134.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_0_HS_5_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_756E7000_6E02_5A01_41B2_E186BE415F20",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.35,
   "image": "this.AnimatedImageResource_0E3E9561_1416_5AF7_41B3_C0555E281159",
   "pitch": -17.52,
   "yaw": -111.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_09214471_141F_BAD7_41AF_C6FF9EAE21D9",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.35,
   "yaw": -111.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Area Menurunkan Penumpang"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_3A1F3790_272D_FEE5_418F_EE145B9D953B",
   "pitch": 7.27,
   "yaw": -52.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0DE6A93F_141E_6A4B_41AA_8B74E41344D4",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -52.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Area Penurunan Penumpang"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0_HS_2_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ]
   },
   "pitch": 15.9,
   "yaw": -47.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F595E8A_27DC_AEE5_41AD_55AB0D76D129",
 "maps": [
  {
   "hfov": 24.16,
   "yaw": -47.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0_HS_2_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_757C8FE6_6E02_4601_41D8_EF732B601E8F",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_728B10D4_6E02_5A01_41C6_D1BB318DB11C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.64,
   "image": "this.AnimatedImageResource_0ECE2EE3_147E_E7FB_41A2_81E091814479",
   "pitch": -12,
   "yaw": 73.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40, this.camera_75032027_6E02_5A0F_41D8_396C30E89A64); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Masuk Gedung Terminal"
  }
 ],
 "id": "overlay_1BB5B40E_1432_5A4D_417A_A87FF3535EA6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.64,
   "yaw": 73.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.7,
   "image": "this.AnimatedImageResource_0ECEFEE4_147E_E7FD_41A2_78E3F28EAA99",
   "pitch": -10.49,
   "yaw": -96.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0, this.camera_7508C033_6E02_5A07_41A4_D7A98A088AD2); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Arah Keluar"
  }
 ],
 "id": "overlay_04DC1FA9_1432_E677_4189_7FEDEDDCA911",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.7,
   "yaw": -96.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Area Parkir"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.06,
   "image": "this.AnimatedImageResource_3A12A78A_272D_FEE5_41B5_921C1F93267E",
   "pitch": 4.5,
   "yaw": 12.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A616234_1433_BE5D_419B_EC158E609FF4",
 "maps": [
  {
   "hfov": 4.06,
   "yaw": 12.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Area Parkir"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.7,
   "image": "this.AnimatedImageResource_3A12778A_272D_FEE5_4184_CB4F410BD2E0",
   "pitch": 0.86,
   "yaw": -167.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1BF70493_1432_FA5B_41B1_662682A9EB0D",
 "maps": [
  {
   "hfov": 6.7,
   "yaw": -167.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Parkir Motor"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_4_0.png",
      "width": 212,
      "class": "ImageResourceLevel",
      "height": 52
     }
    ]
   },
   "pitch": 9.29,
   "yaw": -55.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3067F46B_27EB_D23A_4146_3AD8367EF83F",
 "maps": [
  {
   "hfov": 14.06,
   "yaw": -55.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_4_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Area Parkir"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.05,
   "image": "this.AnimatedImageResource_3A12378A_272D_FEE5_4183_A3BFAE81A2A5",
   "pitch": 5.67,
   "yaw": -55.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F6DF620_27E4_FE26_41C3_A96739CC161B",
 "maps": [
  {
   "hfov": 4.05,
   "yaw": -55.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Parkir Mobil"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_6_0.png",
      "width": 212,
      "class": "ImageResourceLevel",
      "height": 52
     }
    ]
   },
   "pitch": 8.1,
   "yaw": 13.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_306ED27F_27E4_B61A_41C1_20C6E099C8E8",
 "maps": [
  {
   "hfov": 14.13,
   "yaw": 13.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_6_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Parkir Mobil"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_7_0.png",
      "width": 212,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": 7.05,
   "yaw": -167.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F5B27E2_27E4_5E2A_41B2_B7B579115675",
 "maps": [
  {
   "hfov": 14.11,
   "yaw": -167.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_7_0_map.gif",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7508E034_6E02_5A01_417B_8B6911EAE3F1",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.52,
   "image": "this.AnimatedImageResource_0EC03EE5_147E_E7FF_4174_536EA1CD2EED",
   "pitch": -32.09,
   "yaw": 103.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0000ED70_1431_AAD5_417C_2F6B10DE94CA",
 "maps": [
  {
   "hfov": 19.52,
   "yaw": 103.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.92,
   "image": "this.AnimatedImageResource_0EC0FEE5_147E_E7FF_41AF_88F90333B590",
   "pitch": -17.4,
   "yaw": -70.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1995AEB1_13F1_A654_418B_060B86E7BD85, this.camera_728B40D4_6E02_5A01_41AF_A7C4D1623E48); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1B883F3F_1433_E64B_4190_F5C350950834",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.92,
   "yaw": -70.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_75729FCC_6E02_4601_41D5_AF01EEC79A4B",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_72FE309B_6E02_5A07_41C8_DBDDA17526F2",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_0EC36EE7_147E_E7FB_41B0_52163AA663E7",
   "pitch": -13,
   "yaw": 1.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A336B4_13FE_665C_419E_5F0D85649569, this.camera_75327041_6E02_5A03_41D9_C232A6B431AF); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_010C548D_1472_7A4F_4187_DD32D1257E91",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.59,
   "yaw": 1.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.33,
   "image": "this.AnimatedImageResource_0EC32EE7_147E_E7FB_41B1_3C654264E9B1",
   "pitch": -17.77,
   "yaw": 125.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6, this.camera_7539004E_6E02_5A01_41D5_495C22C2ED4C); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0047BA96_1472_AE5C_41A6_82B8A7BA8718",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.33,
   "yaw": 125.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7539304E_6E02_5A01_41CB_0B16D2C39A1C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_72D21067_6E02_5A0F_41D6_B664FD8261D1",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0_HS_0_0.png",
      "width": 177,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ]
   },
   "pitch": 4.65,
   "yaw": -39.3
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167, this.camera_72B7A0E1_6E02_5A03_4174_C93D0C285104); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar"
  }
 ],
 "id": "overlay_0D81EF67_1412_66FB_4174_E89BCB98601D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.83,
   "yaw": -39.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Keluar"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0_HS_1_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "pitch": 12.75,
   "yaw": -37.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_30C92973_27DC_722B_41B6_C19ACCCC01DE",
 "maps": [
  {
   "hfov": 16.09,
   "yaw": -37.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0CA6E416_141E_5A5D_41B1_E5D413CC6D17_0_HS_1_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7500D027_6E02_5A0F_41A2_8F4C7A83217A",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_729DF0C7_6E02_5A0F_419B_72923A3C59BD",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7519501A_6E02_5A01_41AA_43B692B01827",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_72B750E1_6E02_5A03_41C2_29ACC8304CEB",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_75326041_6E02_5A03_41BF_FE71582397DC",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.5,
   "image": "this.AnimatedImageResource_0F386EEF_147E_E7CC_41B1_633ECFDB1E0F",
   "pitch": -19.66,
   "yaw": -99.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_061975C7_1411_BA3B_41A8_6C79875AE43B",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.5,
   "yaw": -99.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.1,
   "image": "this.AnimatedImageResource_0EC0BEE5_147E_E7FF_419E_E591CCFBC8DC",
   "pitch": -9.13,
   "yaw": -6.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534, this.camera_72D27067_6E02_5A0F_41C5_D87BCD503606); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Parkir"
  }
 ],
 "id": "overlay_1B05AC95_1437_EA5F_417C_000727795EA9",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.1,
   "yaw": -6.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.06,
   "image": "this.AnimatedImageResource_0EC11EE5_147E_E7FF_41A7_E14121BE5C82",
   "pitch": -10.9,
   "yaw": -94.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0, this.camera_72D92074_6E02_5A01_41D5_E0D7708EEF93); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1B83409C_1437_BA4C_41B1_00FE06F19CDF",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.06,
   "yaw": -94.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.36,
   "image": "this.AnimatedImageResource_3A1CC78C_272D_FEFD_41C1_D4E9AF41D075",
   "pitch": 3.96,
   "yaw": -5.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30E1527B_27E4_761B_41B3_6740A2CE1C5C",
 "maps": [
  {
   "hfov": 3.36,
   "yaw": -5.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Pos Keluar"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0_HS_3_0.png",
      "width": 193,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ]
   },
   "pitch": 6.52,
   "yaw": -5.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3FCC6A76_27E4_B62D_41C3_2A4763D10D19",
 "maps": [
  {
   "hfov": 12.9,
   "yaw": -5.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0_HS_3_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_75430FA0_6E02_4601_41D8_884061294C46",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_75748FD9_6E02_4603_41DA_EA284B4BDE9C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "data": {
  "name": "Container53064"
 },
 "children": [
  "this.IconButton_75F27A27_6E02_4E0F_41D7_FB3E476806C2",
  "this.IconButton_75F26A27_6E02_4E0F_41B0_3927745AED26",
  "this.IconButton_75F25A27_6E02_4E0F_41D7_62DDB8CB23C4"
 ],
 "id": "Container_75F38A27_6E02_4E0F_41DA_4071909B82B3",
 "width": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingLeft": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden",
 "layout": "vertical"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC43EE8_147E_E7F4_41A7_2491F98570C7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A1E878E_272D_FEFD_419B_2575325CD2F0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC56EEE_147E_E7CC_41A0_1565DD83E070",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A44E84_13FE_663D_41B3_88F4ACAFDF84_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0ECFCEE4_147E_E7FD_41B2_309A7AC4415B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0ECF9EE4_147E_E7FD_41A6_D7793EE0789D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A13A78B_272D_FEFB_41B7_942EDFB36D6F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8EE62_13F1_E6FA_41B1_65B63F8488F0_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC53EEE_147E_E7CC_41A5_CF950C203365",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC5FEEE_147E_E7CC_418B_A08F38147916",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC64EEE_147E_E7CC_4197_E40A69B851FD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC62EEE_147E_E7CC_4183_181F46D3BDAE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2C63A_13FE_A654_41B3_2171947E714D_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC20EE6_147E_E7FD_419B_3BDC8791F7B5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC10EE6_147E_E7FD_419F_BEF894025E1E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC1DEE6_147E_E7FD_41A6_66E704F619FF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC1AEE6_147E_E7FD_417C_5B7504771D80",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19AC7EED_13F1_A7CF_4184_F5E25D759167_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC38EE8_147E_E7F4_41A6_AF33CF27EE46",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC46EE8_147E_E7F4_41AA_1E1AF9FE95B7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A5B6BB_13FE_664B_41A4_9C9A80B282F6_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC1DEE5_147E_E7FF_419A_3C86059460A4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC24EE5_147E_E7FF_4180_B2F164BBFF6F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A1C478C_272D_FEFD_41B1_814CFA2C182C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A986BF_13F1_A64C_41B1_6CF83981CC40_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0ECDBEE3_147E_E7FB_41AD_B795DE13EBFA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A112789_272D_FEE7_4194_4617FB9700C5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19AC3EAB_13F1_E64B_419E_FE4140C4D2DE_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC25EE7_147E_E7FB_4198_7DA64F9DE8D4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC2CEE7_147E_E7FB_4185_1736D6007E34",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A1D578D_272D_FEFF_4199_6297E05A64E3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A336B4_13FE_665C_419E_5F0D85649569_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC6FEEF_147E_E7CC_41AD_ACD953B9D176",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC76EEF_147E_E7CC_41AB_3ED65B7739A6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC7DEEF_147E_E7CC_41AA_D5299E422A97",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC7FEEF_147E_E7CC_41A0_62571782DDBC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A2BE5D_13FE_A6CC_417D_33B47DE58EDA_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0E3E9561_1416_5AF7_41B3_C0555E281159",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A1F3790_272D_FEE5_418F_EE145B9D953B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC85418_141E_7A55_419A_FFD7100DE58D_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0ECE2EE3_147E_E7FB_41A2_81E091814479",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0ECEFEE4_147E_E7FD_41A2_78E3F28EAA99",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A12A78A_272D_FEE5_41B5_921C1F93267E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A12778A_272D_FEE5_4184_CB4F410BD2E0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A12378A_272D_FEE5_4183_A3BFAE81A2A5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A8667C_13F1_E6CD_4181_20B511D42127_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC03EE5_147E_E7FF_4174_536EA1CD2EED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC0FEE5_147E_E7FF_41AF_88F90333B590",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1997F66F_13F1_A6CC_41B3_90B9E044A534_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC36EE7_147E_E7FB_41B0_52163AA663E7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC32EE7_147E_E7FB_41B1_3C654264E9B1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A6DE7C_13FE_66CC_419D_8C4065FCE40F_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0F386EEF_147E_E7CC_41B1_633ECFDB1E0F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A24608_13FE_A634_41A4_03D0D733AE2A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC0BEE5_147E_E7FF_419E_E591CCFBC8DC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0EC11EE5_147E_E7FF_41A7_E14121BE5C82",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3A1CC78C_272D_FEFD_41C1_D4E9AF41D075",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1995AEB1_13F1_A654_418B_060B86E7BD85_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
}],
 "start": "this.playAudioList([this.audio_724AAD3A_6E03_CA01_41D6_36F071B60F69]); this.init(); this.set('mute', true); this.syncPlaylists([this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257_playlist,this.mainPlayList])",
 "data": {
  "name": "Player455"
 },
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_3C51E05E_27DB_B21A_41B7_EBBC80F1B257",
  "this.Container_75F2FA27_6E02_4E0F_41C1_1BFE4B45406F"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 20,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingLeft": 0,
 "buttonToggleMute": "this.IconButton_75F22A27_6E02_4E0F_41DB_05E038428429",
 "shadow": false,
 "class": "Player",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
