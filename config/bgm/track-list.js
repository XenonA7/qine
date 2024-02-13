ig.module("impact.feature.bgm.bgm-qine")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {
      unbreakable: {
        path: "media/bgm/muUnbreakable.ogg",
        loopEnd: 74.605,
        volume: 2.0,
        introPath: "media/bgm/muUnbreakable-i.ogg",
        introEnd: 5.537
      },
      qine: {
        path: "media/bgm/muQine.ogg",
        "loopEnd": 80.02,
        volume: 2.0
      }
    });
});