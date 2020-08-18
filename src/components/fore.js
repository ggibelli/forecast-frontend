const tides = [
  {
  height: 1.139679294718593,
  time: "2020-08-05T03:54:00+00:00",
  type: "high"
  },
  {
  height: -1.2068841773799504,
  time: "2020-08-05T09:50:00+00:00",
  type: "low"
  },
  {
  height: 1.3940159942614716,
  time: "2020-08-05T16:06:00+00:00",
  type: "high"
  },
  {
  height: -1.286967153434236,
  time: "2020-08-05T22:20:00+00:00",
  type: "low"
  },
  {
  height: 1.0906061276097834,
  time: "2020-08-06T04:28:00+00:00",
  type: "high"
  },
  {
  height: -1.1624581591310341,
  time: "2020-08-06T10:23:00+00:00",
  type: "low"
  },
  {
  height: 1.316468156096313,
  time: "2020-08-06T16:40:00+00:00",
  type: "high"
  },
  {
  height: -1.20526013094073,
  time: "2020-08-06T22:52:00+00:00",
  type: "low"
  },
  {
  height: 1.021380331936784,
  time: "2020-08-07T05:00:00+00:00",
  type: "high"
  },
  {
  height: -1.0883666817720776,
  time: "2020-08-07T10:56:00+00:00",
  type: "low"
  },
  {
  height: 1.2052848773350058,
  time: "2020-08-07T17:12:00+00:00",
  type: "high"
  },
  {
  height: -1.101422354632026,
  time: "2020-08-07T23:24:00+00:00",
  type: "low"
  },
  {
  height: 0.9369088029925964,
  time: "2020-08-08T05:32:00+00:00",
  type: "high"
  },
  {
  height: -0.9875515415117236,
  time: "2020-08-08T11:29:00+00:00",
  type: "low"
  },
  {
  height: 1.0694255539040631,
  time: "2020-08-08T17:45:00+00:00",
  type: "high"
  },
  {
  height: -0.9819526865022761,
  time: "2020-08-08T23:57:00+00:00",
  type: "low"
  },
  {
  height: 0.8398353395242828,
  time: "2020-08-09T06:06:00+00:00",
  type: "high"
  },
  {
  height: -0.8637980980119228,
  time: "2020-08-09T12:04:00+00:00",
  type: "low"
  },
  {
  height: 0.9168250451429066,
  time: "2020-08-09T18:20:00+00:00",
  type: "high"
  },
  {
  height: -0.8514122822759593,
  time: "2020-08-10T00:32:00+00:00",
  type: "low"
  },
  {
  height: 0.7332026348628969,
  time: "2020-08-10T06:45:00+00:00",
  type: "high"
  },
  {
  height: -0.7241705255774739,
  time: "2020-08-10T12:44:00+00:00",
  type: "low"
  },
  {
  height: 0.7562613830483595,
  time: "2020-08-10T19:00:00+00:00",
  type: "high"
  },
  {
  height: -0.7161239056868268,
  time: "2020-08-11T01:13:00+00:00",
  type: "low"
  },
  {
  height: 0.6256774183871384,
  time: "2020-08-11T07:31:00+00:00",
  type: "high"
  },
  {
  height: -0.5837333329923715,
  time: "2020-08-11T13:34:00+00:00",
  type: "low"
  },
  {
  height: 0.6027784524215718,
  time: "2020-08-11T19:51:00+00:00",
  type: "high"
  },
  {
  height: -0.5912229178209539,
  time: "2020-08-12T02:06:00+00:00",
  type: "low"
  },
  {
  height: 0.5400355690106778,
  time: "2020-08-12T08:31:00+00:00",
  type: "high"
  },
  {
  height: -0.47563220102779924,
  time: "2020-08-12T14:42:00+00:00",
  type: "low"
  },
  {
  height: 0.4888987320550357,
  time: "2020-08-12T21:00:00+00:00",
  type: "high"
  },
  {
  height: -0.5117974618201566,
  time: "2020-08-13T03:18:00+00:00",
  type: "low"
  },
  {
  height: 0.5202771204377886,
  time: "2020-08-13T09:49:00+00:00",
  type: "high"
  },
  {
  height: -0.45916275468798134,
  time: "2020-08-13T16:09:00+00:00",
  type: "low"
  },
  {
  height: 0.46796385498989973,
  time: "2020-08-13T22:24:00+00:00",
  type: "high"
  },
  {
  height: -0.5262556227464812,
  time: "2020-08-14T04:41:00+00:00",
  type: "low"
  },
  {
  height: 0.6026925666159754,
  time: "2020-08-14T11:08:00+00:00",
  type: "high"
  },
  {
  height: -0.5661482492772858,
  time: "2020-08-14T17:31:00+00:00",
  type: "low"
  },
  {
  height: 0.5596041055499729,
  time: "2020-08-14T23:41:00+00:00",
  type: "high"
  }
  ]

const forecast = [
  {
  time: "2020-08-05T00:00:00+00:00",
  data: [
  {
  gust: 1.6133333333333333
  },
  {
  secondarySwellDirection: 308.02
  },
  {
  secondarySwellHeight: 0.17
  },
  {
  secondarySwellPeriod: 11.33
  },
  {
  swellDirection: 308.334
  },
  {
  swellHeight: 1.1219999999999999
  },
  {
  swellPeriod: 6.688
  },
  {
  waterTemperature: 17.33666666666667
  },
  {
  waveDirection: 321.3625
  },
  {
  waveHeight: 1.482
  },
  {
  wavePeriod: 6.155
  },
  {
  windDirection: 286.6766666666667
  },
  {
  windSpeed: 3.6633333333333327
  },
  {
  windWaveDirection: 333.1239999999999
  },
  {
  windWaveHeight: 0.7000000000000001
  },
  {
  windWavePeriod: 4.0280000000000005
  }
  ]
  },
  {
  time: "2020-08-05T04:00:00+00:00",
  data: [
  {
  gust: 1.4333333333333333
  },
  {
  secondarySwellDirection: 310.08
  },
  {
  secondarySwellHeight: 0.15
  },
  {
  secondarySwellPeriod: 11.03
  },
  {
  swellDirection: 312.34599999999995
  },
  {
  swellHeight: 1.014
  },
  {
  swellPeriod: 6.368
  },
  {
  waterTemperature: 16.779999999999998
  },
  {
  waveDirection: 320.29
  },
  {
  waveHeight: 1.328
  },
  {
  wavePeriod: 6.065
  },
  {
  windDirection: 266.8966666666667
  },
  {
  windSpeed: 2.8866666666666667
  },
  {
  windWaveDirection: 302.69800000000004
  },
  {
  windWaveHeight: 0.538
  },
  {
  windWavePeriod: 3.628
  }
  ]
  },
  {
  time: "2020-08-05T08:00:00+00:00",
  data: [
  {
  gust: 1.6366666666666667
  },
  {
  secondarySwellDirection: 313
  },
  {
  secondarySwellHeight: 0.13
  },
  {
  secondarySwellPeriod: 10.74
  },
  {
  swellDirection: 307.056
  },
  {
  swellHeight: 0.9480000000000001
  },
  {
  swellPeriod: 6.279999999999999
  },
  {
  waterTemperature: 19.289999999999996
  },
  {
  waveDirection: 320.3075
  },
  {
  waveHeight: 1.2200000000000002
  },
  {
  wavePeriod: 5.7925
  },
  {
  windDirection: 236.96666666666667
  },
  {
  windSpeed: 3.216666666666667
  },
  {
  windWaveDirection: 303.59000000000003
  },
  {
  windWaveHeight: 0.556
  },
  {
  windWavePeriod: 3.668
  }
  ]
  },
  {
  time: "2020-08-05T12:00:00+00:00",
  data: [
  {
  gust: 5.543333333333333
  },
  {
  secondarySwellDirection: 278
  },
  {
  secondarySwellHeight: 0.09
  },
  {
  secondarySwellPeriod: 13.75
  },
  {
  swellDirection: 321.448
  },
  {
  swellHeight: 0.6940000000000001
  },
  {
  swellPeriod: 8.268
  },
  {
  waterTemperature: 22.416666666666668
  },
  {
  waveDirection: 317.9425
  },
  {
  waveHeight: 1.112
  },
  {
  wavePeriod: 5.8175
  },
  {
  windDirection: 326.7233333333333
  },
  {
  windSpeed: 4.716666666666667
  },
  {
  windWaveDirection: 324.63599999999997
  },
  {
  windWaveHeight: 0.6020000000000001
  },
  {
  windWavePeriod: 3.822
  }
  ]
  },
  {
  time: "2020-08-05T16:00:00+00:00",
  data: [
  {
  gust: 7.166666666666667
  },
  {
  secondarySwellDirection: 280.65
  },
  {
  secondarySwellHeight: 0.18
  },
  {
  secondarySwellPeriod: 13.11
  },
  {
  swellDirection: 315.304
  },
  {
  swellHeight: 0.692
  },
  {
  swellPeriod: 7.55
  },
  {
  waterTemperature: 21.35666666666667
  },
  {
  waveDirection: 322.035
  },
  {
  waveHeight: 1.194
  },
  {
  wavePeriod: 5.172499999999999
  },
  {
  windDirection: 332.5233333333333
  },
  {
  windSpeed: 5.973333333333334
  },
  {
  windWaveDirection: 328.216
  },
  {
  windWaveHeight: 0.8220000000000001
  },
  {
  windWavePeriod: 3.908
  }
  ]
  },
  {
  time: "2020-08-05T20:00:00+00:00",
  data: [
  {
  gust: 3.1999999999999997
  },
  {
  secondarySwellDirection: 282.79
  },
  {
  secondarySwellHeight: 0.29
  },
  {
  secondarySwellPeriod: 12.51
  },
  {
  swellDirection: 306.236
  },
  {
  swellHeight: 0.8220000000000001
  },
  {
  swellPeriod: 6.719999999999999
  },
  {
  waterTemperature: 18.709999999999997
  },
  {
  waveDirection: 317.1575
  },
  {
  waveHeight: 1.292
  },
  {
  wavePeriod: 6.4975
  },
  {
  windDirection: 326.68
  },
  {
  windSpeed: 5.176666666666667
  },
  {
  windWaveDirection: 331.232
  },
  {
  windWaveHeight: 0.8
  },
  {
  windWavePeriod: 3.7800000000000002
  }
  ]
  },
  {
  time: "2020-08-06T00:00:00+00:00",
  data: [
  {
  gust: 1.72
  },
  {
  secondarySwellDirection: 283.92
  },
  {
  secondarySwellHeight: 0.41
  },
  {
  secondarySwellPeriod: 12
  },
  {
  swellDirection: 306.93
  },
  {
  swellHeight: 1.016
  },
  {
  swellPeriod: 6.398000000000001
  },
  {
  waterTemperature: 17.3
  },
  {
  waveDirection: 311.765
  },
  {
  waveHeight: 1.302
  },
  {
  wavePeriod: 7.297499999999999
  },
  {
  windDirection: 264.53
  },
  {
  windSpeed: 2.3333333333333335
  },
  {
  windWaveDirection: 303.98199999999997
  },
  {
  windWaveHeight: 0.5
  },
  {
  windWavePeriod: 3.122
  }
  ]
  },
  {
  time: "2020-08-06T04:00:00+00:00",
  data: [
  {
  gust: 1.8866666666666667
  },
  {
  secondarySwellDirection: 284.26
  },
  {
  secondarySwellHeight: 0.48
  },
  {
  secondarySwellPeriod: 11.63
  },
  {
  swellDirection: 302.274
  },
  {
  swellHeight: 1.114
  },
  {
  swellPeriod: 8.45
  },
  {
  waterTemperature: 16.87
  },
  {
  waveDirection: 306.74
  },
  {
  waveHeight: 1.308
  },
  {
  wavePeriod: 7.6475
  },
  {
  windDirection: 92.46
  },
  {
  windSpeed: 0.82
  },
  {
  windWaveDirection: 273.312
  },
  {
  windWaveHeight: 0.258
  },
  {
  windWavePeriod: 2.5420000000000003
  }
  ]
  },
  {
  time: "2020-08-06T08:00:00+00:00",
  data: [
  {
  gust: 2.3400000000000003
  },
  {
  secondarySwellDirection: 284
  },
  {
  secondarySwellHeight: 0.47
  },
  {
  secondarySwellPeriod: 11.37
  },
  {
  swellDirection: 299.074
  },
  {
  swellHeight: 1.272
  },
  {
  swellPeriod: 8.937999999999999
  },
  {
  waterTemperature: 19.330000000000002
  },
  {
  waveDirection: 302.2575
  },
  {
  waveHeight: 1.304
  },
  {
  wavePeriod: 7.994999999999999
  },
  {
  windDirection: 305.71333333333337
  },
  {
  windSpeed: 0.61
  },
  {
  windWaveDirection: 270.886
  },
  {
  windWaveHeight: 0.164
  },
  {
  windWavePeriod: 2.3
  }
  ]
  },
  {
  time: "2020-08-06T12:00:00+00:00",
  data: [
  {
  gust: 3.443333333333334
  },
  {
  secondarySwellDirection: 283.74
  },
  {
  secondarySwellHeight: 0.46
  },
  {
  secondarySwellPeriod: 11.12
  },
  {
  swellDirection: 296.57599999999996
  },
  {
  swellHeight: 1.294
  },
  {
  swellPeriod: 8.780000000000001
  },
  {
  waterTemperature: 21.916666666666668
  },
  {
  waveDirection: 298.96
  },
  {
  waveHeight: 1.2959999999999998
  },
  {
  wavePeriod: 8.1625
  },
  {
  windDirection: 293.96
  },
  {
  windSpeed: 2.5366666666666666
  },
  {
  windWaveDirection: 260.61
  },
  {
  windWaveHeight: 0.156
  },
  {
  windWavePeriod: 2.374
  }
  ]
  },
  {
  time: "2020-08-06T16:00:00+00:00",
  data: [
  {
  gust: 4.29
  },
  {
  secondarySwellDirection: 283.48
  },
  {
  secondarySwellHeight: 0.46
  },
  {
  secondarySwellPeriod: 10.86
  },
  {
  swellDirection: 294.454
  },
  {
  swellHeight: 1.262
  },
  {
  swellPeriod: 8.682
  },
  {
  waterTemperature: 20.926666666666666
  },
  {
  waveDirection: 296.99
  },
  {
  waveHeight: 1.268
  },
  {
  wavePeriod: 8.065
  },
  {
  windDirection: 310.5266666666667
  },
  {
  windSpeed: 3.8166666666666664
  },
  {
  windWaveDirection: 288.698
  },
  {
  windWaveHeight: 0.182
  },
  {
  windWavePeriod: 2.518
  }
  ]
  },
  {
  time: "2020-08-06T20:00:00+00:00",
  data: [
  {
  gust: 2.6833333333333336
  },
  {
  secondarySwellDirection: 283.23
  },
  {
  secondarySwellHeight: 0.45
  },
  {
  secondarySwellPeriod: 10.61
  },
  {
  swellDirection: 293.502
  },
  {
  swellHeight: 1.2279999999999998
  },
  {
  swellPeriod: 8.468
  },
  {
  waterTemperature: 17.846666666666668
  },
  {
  waveDirection: 296.17499999999995
  },
  {
  waveHeight: 1.238
  },
  {
  wavePeriod: 7.8100000000000005
  },
  {
  windDirection: 329.34666666666664
  },
  {
  windSpeed: 3.4166666666666665
  },
  {
  windWaveDirection: 292.38800000000003
  },
  {
  windWaveHeight: 0.20800000000000002
  },
  {
  windWavePeriod: 2.6740000000000004
  }
  ]
  },
  {
  time: "2020-08-07T00:00:00+00:00",
  data: [
  {
  gust: 2.486666666666667
  },
  {
  secondarySwellDirection: 282.97
  },
  {
  secondarySwellHeight: 0.45
  },
  {
  secondarySwellPeriod: 10.35
  },
  {
  swellDirection: 293.06399999999996
  },
  {
  swellHeight: 1.186
  },
  {
  swellPeriod: 8.236
  },
  {
  waterTemperature: 17.323333333333334
  },
  {
  waveDirection: 295.6975
  },
  {
  waveHeight: 1.19
  },
  {
  wavePeriod: 7.6674999999999995
  },
  {
  windDirection: 320.93
  },
  {
  windSpeed: 2.16
  },
  {
  windWaveDirection: 304.596
  },
  {
  windWaveHeight: 0.154
  },
  {
  windWavePeriod: 2.662
  }
  ]
  },
  {
  time: "2020-08-07T04:00:00+00:00",
  data: [
  {
  gust: 2.1933333333333334
  },
  {
  secondarySwellDirection: 282.71
  },
  {
  secondarySwellHeight: 0.44
  },
  {
  secondarySwellPeriod: 10.09
  },
  {
  swellDirection: 291.09599999999995
  },
  {
  swellHeight: 1.0959999999999999
  },
  {
  swellPeriod: 8.242
  },
  {
  waterTemperature: 17.069999999999997
  },
  {
  waveDirection: 295.03499999999997
  },
  {
  waveHeight: 1.1159999999999999
  },
  {
  wavePeriod: 7.6049999999999995
  },
  {
  windDirection: 308.88666666666666
  },
  {
  windSpeed: 2.8700000000000006
  },
  {
  windWaveDirection: 299.812
  },
  {
  windWaveHeight: 0.154
  },
  {
  windWavePeriod: 2.4539999999999997
  }
  ]
  },
  {
  time: "2020-08-07T08:00:00+00:00",
  data: [
  {
  gust: 3.5399999999999996
  },
  {
  secondarySwellDirection: 282.46
  },
  {
  secondarySwellHeight: 0.43
  },
  {
  secondarySwellPeriod: 9.84
  },
  {
  swellDirection: 291.236
  },
  {
  swellHeight: 1.04
  },
  {
  swellPeriod: 8.032
  },
  {
  waterTemperature: 18.353333333333335
  },
  {
  waveDirection: 294.4575
  },
  {
  waveHeight: 1.042
  },
  {
  wavePeriod: 7.51
  },
  {
  windDirection: 313.3566666666666
  },
  {
  windSpeed: 3.203333333333333
  },
  {
  windWaveDirection: 304.206
  },
  {
  windWaveHeight: 0.178
  },
  {
  windWavePeriod: 2.966
  }
  ]
  },
  {
  time: "2020-08-07T12:00:00+00:00",
  data: [
  {
  gust: 5.533333333333334
  },
  {
  secondarySwellDirection: 282.2
  },
  {
  secondarySwellHeight: 0.43
  },
  {
  secondarySwellPeriod: 9.58
  },
  {
  swellDirection: 290.12199999999996
  },
  {
  swellHeight: 0.974
  },
  {
  swellPeriod: 7.958
  },
  {
  waterTemperature: 21
  },
  {
  waveDirection: 293.4375
  },
  {
  waveHeight: 0.9799999999999999
  },
  {
  wavePeriod: 7.449999999999999
  },
  {
  windDirection: 321.48
  },
  {
  windSpeed: 4.153333333333333
  },
  {
  windWaveDirection: 310.224
  },
  {
  windWaveHeight: 0.20999999999999996
  },
  {
  windWavePeriod: 3.2400000000000007
  }
  ]
  },
  {
  time: "2020-08-07T16:00:00+00:00",
  data: [
  {
  gust: 8.096666666666666
  },
  {
  secondarySwellDirection: 281.94
  },
  {
  secondarySwellHeight: 0.42
  },
  {
  secondarySwellPeriod: 9.33
  },
  {
  swellDirection: 288.732
  },
  {
  swellHeight: 0.924
  },
  {
  swellPeriod: 7.992000000000002
  },
  {
  waterTemperature: 20.376666666666665
  },
  {
  waveDirection: 293.8325
  },
  {
  waveHeight: 0.97
  },
  {
  wavePeriod: 6.7924999999999995
  },
  {
  windDirection: 327.2033333333334
  },
  {
  windSpeed: 5.6499999999999995
  },
  {
  windWaveDirection: 316.764
  },
  {
  windWaveHeight: 0.37
  },
  {
  windWavePeriod: 3.5
  }
  ]
  },
  {
  time: "2020-08-07T20:00:00+00:00",
  data: [
  {
  gust: 6.97
  },
  {
  secondarySwellDirection: 281.68
  },
  {
  secondarySwellHeight: 0.41
  },
  {
  secondarySwellPeriod: 9.07
  },
  {
  swellDirection: 292.678
  },
  {
  swellHeight: 0.9179999999999999
  },
  {
  swellPeriod: 6.953999999999999
  },
  {
  waterTemperature: 18.166666666666668
  },
  {
  waveDirection: 296.04
  },
  {
  waveHeight: 1.018
  },
  {
  wavePeriod: 6.3675
  },
  {
  windDirection: 329.6233333333333
  },
  {
  windSpeed: 5.473333333333333
  },
  {
  windWaveDirection: 327.82599999999996
  },
  {
  windWaveHeight: 0.41999999999999993
  },
  {
  windWavePeriod: 3.038
  }
  ]
  },
  {
  time: "2020-08-08T00:00:00+00:00",
  data: [
  {
  gust: 3.3433333333333333
  },
  {
  secondarySwellDirection: 281.95
  },
  {
  secondarySwellHeight: 0.38
  },
  {
  secondarySwellPeriod: 8.89
  },
  {
  swellDirection: 293.982
  },
  {
  swellHeight: 0.9440000000000002
  },
  {
  swellPeriod: 6.480000000000001
  },
  {
  waterTemperature: 17.213333333333335
  },
  {
  waveDirection: 295.45
  },
  {
  waveHeight: 1.004
  },
  {
  wavePeriod: 6.4775
  },
  {
  windDirection: 320.40000000000003
  },
  {
  windSpeed: 2.7000000000000006
  },
  {
  windWaveDirection: 302.64
  },
  {
  windWaveHeight: 0.182
  },
  {
  windWavePeriod: 2.1399999999999997
  }
  ]
  },
  {
  time: "2020-08-08T04:00:00+00:00",
  data: [
  {
  gust: 2.723333333333333
  },
  {
  secondarySwellDirection: 282.79
  },
  {
  secondarySwellHeight: 0.38
  },
  {
  secondarySwellPeriod: 9.15
  },
  {
  swellDirection: 292.904
  },
  {
  swellHeight: 0.9199999999999999
  },
  {
  swellPeriod: 6.62
  },
  {
  waterTemperature: 16.78333333333333
  },
  {
  waveDirection: 294.9475
  },
  {
  waveHeight: 0.9720000000000001
  },
  {
  wavePeriod: 6.672499999999999
  },
  {
  windDirection: 244.09333333333333
  },
  {
  windSpeed: 0.73
  },
  {
  windWaveDirection: 273.18600000000004
  },
  {
  windWaveHeight: 0.162
  },
  {
  windWavePeriod: 2.0180000000000002
  }
  ]
  },
  {
  time: "2020-08-08T08:00:00+00:00",
  data: [
  {
  gust: 3.3033333333333332
  },
  {
  secondarySwellDirection: 299.06
  },
  {
  secondarySwellHeight: 0.34
  },
  {
  secondarySwellPeriod: 5.98
  },
  {
  swellDirection: 294.98249999999996
  },
  {
  swellHeight: 0.8975
  },
  {
  swellPeriod: 7.3225
  },
  {
  waterTemperature: 18.849999999999998
  },
  {
  waveDirection: 295.2075
  },
  {
  waveHeight: 0.9675
  },
  {
  wavePeriod: 6.799999999999999
  },
  {
  windDirection: 273.0866666666667
  },
  {
  windSpeed: 0.9733333333333333
  },
  {
  windWaveDirection: 273.816
  },
  {
  windWaveHeight: 0.174
  },
  {
  windWavePeriod: 2.3099999999999996
  }
  ]
  },
  {
  time: "2020-08-08T12:00:00+00:00",
  data: [
  {
  gust: 4.216666666666667
  },
  {
  secondarySwellDirection: 308.58
  },
  {
  secondarySwellHeight: 0.3
  },
  {
  secondarySwellPeriod: 4.5
  },
  {
  swellDirection: 294.3425
  },
  {
  swellHeight: 0.9
  },
  {
  swellPeriod: 7.8149999999999995
  },
  {
  waterTemperature: 21.55333333333333
  },
  {
  waveDirection: 295.7875
  },
  {
  waveHeight: 0.9900000000000002
  },
  {
  wavePeriod: 6.63
  },
  {
  windDirection: 269.68
  },
  {
  windSpeed: 2.1966666666666668
  },
  {
  windWaveDirection: 265.094
  },
  {
  windWaveHeight: 0.23199999999999998
  },
  {
  windWavePeriod: 2.505
  }
  ]
  },
  {
  time: "2020-08-08T16:00:00+00:00",
  data: [
  {
  gust: 3.9299999999999997
  },
  {
  secondarySwellDirection: 310.39
  },
  {
  secondarySwellHeight: 0.28
  },
  {
  secondarySwellPeriod: 5.32
  },
  {
  swellDirection: 295.3275
  },
  {
  swellHeight: 0.9275
  },
  {
  swellPeriod: 7.815
  },
  {
  waterTemperature: 21.063333333333336
  },
  {
  waveDirection: 297.25
  },
  {
  waveHeight: 1.0625
  },
  {
  wavePeriod: 6.56
  },
  {
  windDirection: 307.25333333333333
  },
  {
  windSpeed: 2.6333333333333333
  },
  {
  windWaveDirection: 269.876
  },
  {
  windWaveHeight: 0.336
  },
  {
  windWavePeriod: 2.855
  }
  ]
  },
  {
  time: "2020-08-08T20:00:00+00:00",
  data: [
  {
  gust: 2.28
  },
  {
  secondarySwellDirection: 312.19
  },
  {
  secondarySwellHeight: 0.27
  },
  {
  secondarySwellPeriod: 6.13
  },
  {
  swellDirection: 296.3875
  },
  {
  swellHeight: 1.0125
  },
  {
  swellPeriod: 7.535
  },
  {
  waterTemperature: 18.6
  },
  {
  waveDirection: 299.03
  },
  {
  waveHeight: 1.1325
  },
  {
  wavePeriod: 6.609999999999999
  },
  {
  windDirection: 292.41
  },
  {
  windSpeed: 1.5833333333333333
  },
  {
  windWaveDirection: 270.894
  },
  {
  windWaveHeight: 0.29000000000000004
  },
  {
  windWavePeriod: 2.765
  }
  ]
  },
  {
  time: "2020-08-09T00:00:00+00:00",
  data: [
  {
  gust: 3.4500000000000006
  },
  {
  secondarySwellDirection: 313.99
  },
  {
  secondarySwellHeight: 0.25
  },
  {
  secondarySwellPeriod: 6.95
  },
  {
  swellDirection: 302.835
  },
  {
  swellHeight: 1.1825
  },
  {
  swellPeriod: 6.8875
  },
  {
  waterTemperature: 17.166666666666668
  },
  {
  waveDirection: 300.9025
  },
  {
  waveHeight: 1.1875
  },
  {
  wavePeriod: 6.6475
  },
  {
  windDirection: 215.76000000000002
  },
  {
  windSpeed: 1.2566666666666666
  },
  {
  windWaveDirection: 257.896
  },
  {
  windWaveHeight: 0.074
  },
  {
  windWavePeriod: 1.3525
  }
  ]
  },
  {
  time: "2020-08-09T04:00:00+00:00",
  data: [
  {
  gust: 3.473333333333333
  },
  {
  secondarySwellDirection: 315.8
  },
  {
  secondarySwellHeight: 0.24
  },
  {
  secondarySwellPeriod: 7.76
  },
  {
  swellDirection: 309.7966666666667
  },
  {
  swellHeight: 1.1733333333333331
  },
  {
  swellPeriod: 7.956666666666667
  },
  {
  waterTemperature: 16.88
  },
  {
  waveDirection: 308.1666666666667
  },
  {
  waveHeight: 1.1733333333333331
  },
  {
  wavePeriod: 7.956666666666667
  },
  {
  windDirection: 158.8033333333333
  },
  {
  windSpeed: 1.0333333333333332
  },
  {
  windWaveDirection: 207.41500000000002
  },
  {
  windWaveHeight: 0.095
  },
  {
  windWavePeriod: 2.2033333333333336
  }
  ]
  },
  {
  time: "2020-08-09T08:00:00+00:00",
  data: [
  {
  gust: 2.493333333333333
  },
  {
  secondarySwellDirection: 317.6
  },
  {
  secondarySwellHeight: 0.22
  },
  {
  secondarySwellPeriod: 8.58
  },
  {
  swellDirection: 312.2133333333333
  },
  {
  swellHeight: 1.1733333333333331
  },
  {
  swellPeriod: 7.973333333333333
  },
  {
  waterTemperature: 18.656666666666666
  },
  {
  waveDirection: 311.68333333333334
  },
  {
  waveHeight: 1.1733333333333331
  },
  {
  wavePeriod: 7.973333333333333
  },
  {
  windDirection: 245.71333333333334
  },
  {
  windSpeed: 0.9833333333333334
  },
  {
  windWaveDirection: 206.1925
  },
  {
  windWaveHeight: 0.0975
  },
  {
  windWavePeriod: 2.27
  }
  ]
  },
  {
  time: "2020-08-09T12:00:00+00:00",
  data: [
  {
  gust: 3.4433333333333334
  },
  {
  secondarySwellDirection: 317.13
  },
  {
  secondarySwellHeight: 0.21
  },
  {
  secondarySwellPeriod: 8.45
  },
  {
  swellDirection: 313.81
  },
  {
  swellHeight: 1.1533333333333333
  },
  {
  swellPeriod: 7.986666666666667
  },
  {
  waterTemperature: 21.286666666666665
  },
  {
  waveDirection: 313.2966666666667
  },
  {
  waveHeight: 1.1533333333333333
  },
  {
  wavePeriod: 7.986666666666667
  },
  {
  windDirection: 276.4633333333333
  },
  {
  windSpeed: 1.8066666666666666
  },
  {
  windWaveDirection: 204.97
  },
  {
  windWaveHeight: 0.1
  },
  {
  windWavePeriod: 2.3366666666666664
  }
  ]
  },
  {
  time: "2020-08-09T16:00:00+00:00",
  data: [
  {
  gust: 5.336666666666666
  },
  {
  secondarySwellDirection: 298.36
  },
  {
  secondarySwellHeight: 0.26
  },
  {
  secondarySwellPeriod: 8.52
  },
  {
  swellDirection: 313.2
  },
  {
  swellHeight: 1.0633333333333335
  },
  {
  swellPeriod: 7.983333333333333
  },
  {
  waterTemperature: 20.286666666666665
  },
  {
  waveDirection: 313.7366666666667
  },
  {
  waveHeight: 1.1433333333333333
  },
  {
  wavePeriod: 7.919999999999999
  },
  {
  windDirection: 313.5733333333333
  },
  {
  windSpeed: 3.5533333333333332
  },
  {
  windWaveDirection: 278.1675
  },
  {
  windWaveHeight: 0.18500000000000003
  },
  {
  windWavePeriod: 3.7399999999999998
  }
  ]
  },
  {
  time: "2020-08-09T20:00:00+00:00",
  data: [
  {
  gust: 2.5733333333333337
  },
  {
  secondarySwellDirection: 290.31
  },
  {
  secondarySwellHeight: 0.31
  },
  {
  secondarySwellPeriod: 8.48
  },
  {
  swellDirection: 314.6566666666667
  },
  {
  swellHeight: 1.1433333333333333
  },
  {
  swellPeriod: 7.716666666666666
  },
  {
  waterTemperature: 17.8
  },
  {
  waveDirection: 314.3533333333333
  },
  {
  waveHeight: 1.1433333333333333
  },
  {
  wavePeriod: 7.703333333333333
  },
  {
  windDirection: 311.31666666666666
  },
  {
  windSpeed: 3.1633333333333336
  },
  {
  windWaveDirection: 283.64250000000004
  },
  {
  windWaveHeight: 0.19
  },
  {
  windWavePeriod: 3.64
  }
  ]
  },
  {
  time: "2020-08-10T00:00:00+00:00",
  data: [
  {
  gust: 2.44
  },
  {
  secondarySwellDirection: 283.3
  },
  {
  secondarySwellHeight: 0.23
  },
  {
  secondarySwellPeriod: 10.45
  },
  {
  swellDirection: 313.89000000000004
  },
  {
  swellHeight: 1.1533333333333333
  },
  {
  swellPeriod: 7.5633333333333335
  },
  {
  waterTemperature: 16.906666666666666
  },
  {
  waveDirection: 314.57
  },
  {
  waveHeight: 1.1566666666666665
  },
  {
  wavePeriod: 7.556666666666666
  },
  {
  windDirection: 286.7
  },
  {
  windSpeed: 2.686666666666666
  },
  {
  windWaveDirection: 283.235
  },
  {
  windWaveHeight: 0.17
  },
  {
  windWavePeriod: 3.353333333333333
  }

  ]
}
]

export default { forecast, tides }