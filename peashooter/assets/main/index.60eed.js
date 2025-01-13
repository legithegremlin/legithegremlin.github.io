window.__require = function t(e, a, n) {
    function i(r, s) {
        if (!a[r]) {
            if (!e[r]) {
                var c = r.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = c
            }
            var u = a[r] = {exports: {}};
            e[r][0].call(u.exports, function (t) {
                return i(e[r][1][t] || t)
            }, u, u.exports, t, e, a, n)
        }
        return a[r].exports
    }

    for (var o = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
    return i
}({
    AgainData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "48a08WR5MVPF4gc/rjnhcxZ", "AgainData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.againData = a.Data = void 0;
        var r = t("../../framework/base/BaseData"), s = t("../../game/config/Config"), c = cc._decorator, l = c.ccclass,
            u = (c.property, function () {
                this.signAgainData = [], this.summerAgainData = [], this.newSignAData = [], this.summerGetArr = []
            });
        a.Data = u;
        a.againData = function () {
            this.id = 0, this.againNum = 0
        };
        var p = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = s.GameConfig.AppCacheName + "againData", e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new u, this.data
            }, e.prototype.initData = function () {
                var t = this;
                this.data.summerGetArr || (this.data.summerGetArr = []), (!this.data.newSignAData || this.data.newSignAData.length < 7) && (this.data.newSignAData = [0, 0, 0, 0, 0, 0, 0]), this.data.signAgainData && this.data.signAgainData.length > 0 && (this.data.signAgainData.forEach(function (e, a) {
                    t.data.newSignAData[a] = e.againNum
                }), this.data.signAgainData = []), this.data.summerAgainData && this.data.summerAgainData.length > 0 && (this.data.summerAgainData.forEach(function (e, a) {
                    0 != e.againNum && (t.data.summerGetArr[a] = 1 == e.againNum ? t.data.summerGetArr[a] + e.againNum : t.data.summerGetArr[a])
                }), this.data.summerAgainData = []), this.saveData()
            }, e.prototype.getSignAgainData = function () {
                return this.data.signAgainData
            }, e.prototype.setSignAgainDataById = function (t) {
                this.data.newSignAData[t] += 1, this.saveData()
            }, e.prototype.getSignAgainDataById = function (t) {
                return this.data.newSignAData[t]
            }, e.prototype.getSummerAgainData = function () {
                return this.data.summerAgainData
            }, e.prototype.setSummerAgainDataById = function (t) {
                return this.data.summerGetArr[t - 1] += 1, this.saveData(), this.data.summerGetArr[t - 1] - 1
            }, e.prototype.getSummerAgainDataById = function (t) {
                return this.data.summerGetArr[t - 1] - 1
            }, e.prototype.setSummerGetArrByIndex = function (t) {
                this.data.summerGetArr[t] = 1, this.saveData()
            }, e.prototype.getSummerGetArr = function () {
                return this.data.summerGetArr
            }, e.prototype.getSummerGetArrByIndex = function (t) {
                return this.data.summerGetArr[t]
            }, o([l], e)
        }(r.BaseData);
        a.default = p, cc._RF.pop()
    }, {"../../framework/base/BaseData": "BaseData", "../../game/config/Config": "Config"}],
    Appcfg: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "46718hiYJ9I55/9A6LpFoqh", "Appcfg"), Object.defineProperty(a, "__esModule", {value: !0}), a.BaseEventName = a.ObjectWeightValue = a.ObjectValue = a.WeightObject = a.LoadingProcess = a.OrderLayer = a.LanguageType = void 0, function (t) {
            t.zh = "zh", t.zh_tw = "fz", t.en = "en", t.jp = "jp"
        }(a.LanguageType || (a.LanguageType = {})), function (t) {
            t[t.main = 0] = "main", t[t.special = 50] = "special", t[t.pop = 100] = "pop", t[t.top = 200] = "top", t[t.pop2 = 300] = "pop2", t[t.tip = 400] = "tip", t[t.guide = 900] = "guide", t[t.touch = 1e3] = "touch", t[t.Log = 2e3] = "Log"
        }(a.OrderLayer || (a.OrderLayer = {})), function (t) {
            t[t.StartLoading = 5] = "StartLoading", t[t.ExcelCfg = 10] = "ExcelCfg", t[t.PlayerCfg = 20] = "PlayerCfg", t[t.ResCfg = 40] = "ResCfg", t[t.AudioCfg = 60] = "AudioCfg", t[t.OtherCfg = 80] = "OtherCfg", t[t.EndLoading = 100] = "EndLoading"
        }(a.LoadingProcess || (a.LoadingProcess = {}));
        a.WeightObject = function () {
        };
        a.ObjectValue = function () {
        };
        a.ObjectWeightValue = function () {
        }, function (t) {
            t.Loading = "Loading", t.OpenUI = "openUi", t.CloseUI = "CloseUI", t.ShowTopUI = "ShowTopUI", t.blocktouch = "blocktouch", t.onShow = "onShow", t.onHide = "onHide", t.ClearData = "ClearData"
        }(a.BaseEventName || (a.BaseEventName = {})), cc._RF.pop()
    }, {}],
    ArgsParseUtils: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "14743rQ6f9BObX51QcWz3Un", "ArgsParseUtils"), Object.defineProperty(a, "__esModule", {value: !0}), a.ArgsParseUtils = void 0;
        var n = function () {
            function t() {
            }

            return t._makeLoadResArgs = function () {
                if (arguments.length < 1 || "string" != typeof arguments[0]) return console.error("_makeLoadResArgs error " + arguments), null;
                for (var t = {
                    bundle: arguments[0],
                    path: arguments[1],
                    type: arguments[2],
                    callback: arguments[3],
                    autoRelese: !1,
                    cacheTme: 10,
                    saveKey: null
                }, e = 4; e < arguments.length; ++e) 4 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]), 5 == e && "number" == typeof arguments[e] ? t.cacheTme = arguments[e] : e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
                return t
            }, t._makeloadSpriteFrameResrgs = function () {
                if (arguments.length < 1 || "string" != typeof arguments[0]) return console.error("_makeloadSpriteFrameResrgs error " + arguments), null;
                for (var t = {
                    bundle: arguments[0],
                    path: arguments[1],
                    callback: arguments[2],
                    autoRelese: !1,
                    cacheTme: 10,
                    saveKey: null
                }, e = 3; e < arguments.length; ++e) 3 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]), 4 == e && "number" == typeof arguments[e] ? t.cacheTme = arguments[e] : e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
                return t
            }, t
        }();
        a.ArgsParseUtils = n, cc._RF.pop()
    }, {}],
    AudioMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "01e28yg0bJGMoJ+TmUHgvk/", "AudioMgr");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.AudioMgr = void 0;
        var o = t("../base/BaseMgr"), r = t("../utils/CacheUtils"), s = t("./LogMgr"), c = t("./ResourceMgr"),
            l = function (t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.audioSourceMap = new Map, e.audioClipMap = new Map, e.ADConf = {}, e.otherADConf = [], e.musicKeys = [], e
                }

                return i(e, t), e.getInstance = function () {
                    return null == this.instance && (this.instance = new e), this.instance
                }, e.prototype.init = function (t) {
                    this.ADConf = t
                }, e.prototype.loadAudio = function (t, e) {
                    var a = this, n = this.getAdConf(t);
                    n ? c.ResourceMgr.getInstance().loadRes(n.bundle, n.path, cc.AudioClip, function (t) {
                        a.audioClipMap.set(n.path, t), e && e()
                    }) : s.LogMgr.getInstance().error(lang.index60eed_1, t)
                }, e.prototype.addAdConf = function (t) {
                    this.otherADConf.push(t)
                }, e.prototype.getAdConf = function (t) {
                    var e = this.ADConf[t];
                    if (e) return e;
                    for (var a = 0; a < this.otherADConf.length; a++) {
                        var n = this.otherADConf[a][t];
                        if (n) return n
                    }
                    return null
                }, e.prototype.addMusicKey = function (t) {
                    for (var e = 0; e < this.musicKeys.length; e++) if (this.musicKeys[e] == t) return !1;
                    return this.musicKeys.push(t), !0
                }, e.prototype.removeMusicKey = function (t) {
                    for (var e = 0; e < this.musicKeys.length; e++) if (this.musicKeys[e] == t) return this.musicKeys.splice(e, 1), !0;
                    return !1
                }, e.prototype.creatreAudioSource = function (t) {
                    var e = new cc.AudioSource;
                    return this.audioSourceMap.has(t) && this.audioSourceMap.get(t).destroy(), this.audioSourceMap.set(t, e), e
                }, e.prototype.getAudioSource = function (t) {
                    return this.audioSourceMap.has(t) ? this.audioSourceMap.get(t) : this.creatreAudioSource(t)
                }, e.prototype.playMusic = function (t, e, a, n) {
                    var i = this;
                    if (void 0 === a && (a = !0), void 0 === n && (n = 1), r.CacheUtils.canPlayMusin()) {
                        var o = this.getAudioSource(e);
                        if (null == o) return void s.LogMgr.getInstance().error("audioSourceName\uff1a" + e + lang.index60eed_2);
                        o.stop();
                        var l = this.getAdConf(t);
                        if (null == l) return void s.LogMgr.getInstance().error("audio id:" + t + lang.index60eed_3);
                        if (a && this.addMusicKey(e), this.audioClipMap.has(l.path)) {
                            var u = this.audioClipMap.get(l.path);
                            o.clip = u, o.loop = a, o.volume = n, o.play()
                        } else c.ResourceMgr.getInstance().loadRes(l.bundle, l.path, cc.AudioClip, function (t) {
                            o.clip = t, i.audioClipMap.set(l.path, t), o.loop = a, o.volume = n, o.play()
                        })
                    }
                }, e.prototype.pauseMusic = function (t) {
                    if (r.CacheUtils.canPlayMusin()) {
                        var e = this.getAudioSource(t);
                        if (null == e) return void s.LogMgr.getInstance().error("audioSourceName\uff1a" + t + lang.index60eed_4);
                        e.pause()
                    }
                }, e.prototype.resumeMusic = function (t) {
                    if (r.CacheUtils.canPlayMusin()) {
                        var e = this.getAudioSource(t);
                        if (null == e) return void s.LogMgr.getInstance().error("audioSourceName\uff1a" + t + lang.index60eed_5);
                        e.resume()
                    }
                }, e.prototype.pauseAllMusic = function () {
                    var t = this;
                    this.musicKeys.forEach(function (e) {
                        t.pauseMusic(e)
                    })
                }, e.prototype.resumeAllMusic = function () {
                    var t = this;
                    this.musicKeys.forEach(function (e) {
                        t.resumeMusic(e)
                    })
                }, e.prototype.stopMusic = function (t) {
                    if (r.CacheUtils.canPlayMusin()) {
                        var e = this.getAudioSource(t);
                        if (null == e) return void s.LogMgr.getInstance().error("audioSourceName\uff1a" + t + lang.index60eed_6);
                        this.removeMusicKey(t), e.stop()
                    }
                }, e.prototype.stopAll = function () {
                    this.audioSourceMap.forEach(function (t) {
                        t.stop()
                    })
                }, e.prototype.playEffect = function (t, e) {
                    var a = this;
                    if (void 0 === e && (e = 1), r.CacheUtils.canPlayEffect()) {
                        var n = this.EffectAduioSource;
                        null == n && (n = this.getAudioSource("effect"));
                        var i = this.getAdConf(t);
                        if (this.audioClipMap.has(i.path)) {
                            var o = this.audioClipMap.get(i.path);
                            n.clip = o, n.volume = e, n.play()
                        } else c.ResourceMgr.getInstance().loadRes(i.bundle, i.path, cc.AudioClip, function (t) {
                            a.audioClipMap.set(i.path, t), n.clip = t, n.volume = e, n.play()
                        })
                    }
                }, e.prototype.playAudioFromPath = function (t, e, a, n, i) {
                    var o = this;
                    if (r.CacheUtils.canPlayMusin()) {
                        var l = this.getAudioSource(a);
                        if (null == l) return void s.LogMgr.getInstance().error("audioSourceName\uff1a" + a + lang.index60eed_7);
                        if (l.stop(), this.audioClipMap.has(e)) {
                            var u = this.audioClipMap.get(e);
                            l.clip = u, l.volume = 1, n ? (l.loop = !0, this.addMusicKey(a)) : l.loop = !1, l.play(), i && i(l)
                        } else c.ResourceMgr.getInstance().loadRes(t, String(e), cc.AudioClip, function (t) {
                            l.clip = t, o.audioClipMap.set(e, t), l.volume = 1, n ? (l.loop = !0, o.addMusicKey(a)) : l.loop = !1, l.play(), i && i(l)
                        })
                    }
                }, e.prototype.stopEffect = function () {
                    var t = this.getAudioSource("effect");
                    t && t.stop()
                }, e.prototype.setButtonNomalAudio = function (t) {
                    this.normalButtonAudio = t
                }, e.prototype.playAudioButtonClicked = function () {
                    this.normalButtonAudio && this.playEffect(this.normalButtonAudio)
                }, e
            }(o.default);
        a.AudioMgr = l, cc._RF.pop()
    }, {
        "../base/BaseMgr": "BaseMgr",
        "../utils/CacheUtils": "CacheUtils",
        "./LogMgr": "LogMgr",
        "./ResourceMgr": "ResourceMgr"
    }],
    AwardMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "d8a22XRqshOj5tBspQaBF6u", "AwardMgr");
        var n = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.AwardMgr = void 0;
        var i = t("../../framework/manager/UIMgr"), o = t("../../framework/utils/UIUtils"),
            r = t("../../framework/utils/Utils"), s = t("../config/Config"), c = t("../ui/UIGameOver"),
            l = t("./DataMgr"), u = t("./PlayerMgr"), p = cc._decorator, d = p.ccclass, h = (p.property, function () {
                function t() {
                }

                var e;
                return e = t, t.getInstance = function () {
                    return null == this.instance && (this.instance = new e), this.instance
                }, t.prototype.init = function () {
                    this.userData = u.PlayerMgr.getInstance().getUserData()
                }, t.prototype.getAward = function (t, e) {
                    if (1 == t.type) {
                        var a = "";
                        e[0] == c.GDID.gold ? (a = lang.index60eed_8, this.userData.addGoldNum(Number(e[1]))) : e[0] == c.GDID.diamond && (a = lang.index60eed_9, this.userData.addDiamondNum(Number(e[1]))), i.UIMgr.getInstance().openUI(s.UIID.UITips, s.UIID.UINone, a + e[1])
                    } else if (9 == t.type) this.doLottery(t, e, 0); else {
                        var n = {Reward: null, RewardNum: 1};
                        n.Reward = Number(e[0]), i.UIMgr.getInstance().openUI(s.UIID.UIAward, s.UIID.UINone, s.TipType.lottery, n, null)
                    }
                }, t.prototype.doLottery = function (t, e, a) {
                    var n = this;
                    if (!(a >= Number(e[1]))) {
                        var c = l.DataMgr.getInstance().getDropById(t.DropID).Reward.split(";"),
                            u = {Reward: null, RewardNum: 1};
                        u.Reward = Number(c[r.Utils.randomRang(0, c.length)]), i.UIMgr.getInstance().openUI(s.UIID.UIAward, s.UIID.UINone, s.TipType.lottery, u, null, function () {
                            o.UIUtils.scheduleOnce(function () {
                                n.doLottery(t, e, a + 1)
                            }, n, .2)
                        })
                    }
                }, t.prototype.getAllStar = function () {
                    var t = u.PlayerMgr.getInstance().getCustomData().getCurrentCustom(), e = 0, a = 610001;
                    return t.customStar.forEach(function (n) {
                        a >= t.currentCustom || n.forEach(function (n) {
                            a >= t.currentCustom || (a++, n.forEach(function (t) {
                                1 == t && e++
                            }))
                        })
                    }), e
                }, t.instance = null, e = n([d], t)
            }());
        a.AwardMgr = h, cc._RF.pop()
    }, {
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../ui/UIGameOver": "UIGameOver",
        "./DataMgr": "DataMgr",
        "./PlayerMgr": "PlayerMgr"
    }],
    Barrier: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "dd6cbg7yWpLVI++AlTt14qe", "Barrier");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = r.property, l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.num_lb = null, e.num = 20, e.speed = 2, e
            }

            return i(e, t), e.prototype.onLoad = function () {
                this.node.color = cc.color(this.random_color().x, this.random_color().y, this.random_color().z, 255), this.num_lb.node.color = cc.color(this.random_color().x, this.random_color().y, this.random_color().z, 255), this.num_lb.node.color == this.node.color && (this.num_lb.node.color != cc.color(255, 0, 0, 255) ? this.num_lb.node.color = cc.color(255, 0, 0, 255) : this.num_lb.node.color = cc.color(0, 0, 0, 255));
                var t = cc.find("Canvas").getComponent("GameController"),
                    e = t.barrier_health + Math.floor(10 * Math.random()), a = t.barrier_speed;
                this.num = e, this.speed = a
            }, e.prototype.random_color = function () {
                var t = this.randomNumber(0, 255), e = this.randomNumber(0, 255), a = this.randomNumber(0, 255);
                return cc.v3(t, e, a)
            }, e.prototype.update = function (t) {
                var e = Math.floor(this.num);
                this.num_lb.string = e.toString(), 1 == cc.find("Canvas").getComponent("GameController").is_barrier_move && (this.node.y -= t * this.speed);
                var a = cc.find("Canvas");
                this.node.y <= -a.height / 2 && cc.find("Canvas").getComponent("GameController").gameover()
            }, e.prototype.onCollisionEnter = function (t) {
                if ("bullet" == t.node.group) {
                    var e = cc.find("Canvas").getComponent("GameController"), a = t.getComponent("Bullet");
                    this.reduce_num(a.ATK), 1 == e.is_double ? e.add_score(2 * a.ATK) : 0 == e.is_double && e.add_score(a.ATK), t.node.destroy()
                }
                "invincible" == t.node.group && (1 == (e = cc.find("Canvas").getComponent("GameController")).is_double ? e.add_score(2 * this.num) : 0 == e.is_double && e.add_score(this.num), this.node.destroy()), cc.find("Canvas").getComponent("Music").play_music_collision(), this.num <= 0 && this.node.destroy()
            }, e.prototype.reduce_num = function (t) {
                this.num -= t
            }, e.prototype.randomNumber = function (t, e) {
                return Math.round(Math.random() * (t - e) + e)
            }, o([c({
                type: cc.Label,
                displayName: lang.index60eed_10,
                tooltip: lang.index60eed_11
            })], e.prototype, "num_lb", void 0), o([s], e)
        }(cc.Component);
        a.default = l, cc._RF.pop()
    }, {}],
    BaseButton: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "08526eaTJpCXYM9VKuRXAnP", "BaseButton");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.BaseButton = void 0;
        var r = t("../manager/AudioMgr"), s = cc._decorator, c = s.ccclass, l = s.property, u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.invertTime = 1, e.touched = !1, e.touchmil = 0, e
            }

            return i(e, t), e.prototype._onTouchBegan = function (e) {
                if (this.interactable && this.enabledInHierarchy) return this.touched ? (this.node.pauseSystemEvents(!0), void this._resetState()) : void t.prototype._onTouchBegan.call(this, e)
            }, e.prototype._onTouchEnded = function (e) {
                if (this.interactable && this.enabledInHierarchy) {
                    if (this.touched) return this.node.pauseSystemEvents(!0), void this._resetState();
                    r.AudioMgr.getInstance().playAudioButtonClicked(), this.touched = !0, this.touchmil = 0, t.prototype._onTouchEnded.call(this, e)
                }
            }, e.prototype.update = function (e) {
                t.prototype.update.call(this, e), this.touched && (this.touchmil = this.touchmil + e, this.touchmil > this.invertTime && (this.touchmil = 0, this.touched = !1, this.node.resumeSystemEvents(!0)))
            }, e.prototype.onDestroy = function () {
                this.touched = !1
            }, e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this), this.touched = !1
            }, e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this), this.touched = !1
            }, o([l], e.prototype, "invertTime", void 0), o([c], e)
        }(cc.Button);
        a.BaseButton = u, cc.Class.Attr.setClassAttr(u, "normalColor", "visible", function () {
            return this.transition === cc.Button.Transition.COLOR
        }), cc.Class.Attr.setClassAttr(u, "pressedColor", "visible", function () {
            return this.transition === cc.Button.Transition.COLOR
        }), cc.Class.Attr.setClassAttr(u, "hoverColor", "visible", function () {
            return this.transition === cc.Button.Transition.COLOR
        }), cc.Class.Attr.setClassAttr(u, "disabledColor", "visible", function () {
            return this.transition === cc.Button.Transition.COLOR
        }), cc.Class.Attr.setClassAttr(u, "duration", "visible", function () {
            return this.transition === cc.Button.Transition.COLOR || this.transition === cc.Button.Transition.SPRITE || this.transition === cc.Button.Transition.SCALE
        }), cc.Class.Attr.setClassAttr(u, "normalSprite", "visible", function () {
            return this.transition === cc.Button.Transition.SPRITE
        }), cc.Class.Attr.setClassAttr(u, "pressedSprite", "visible", function () {
            return this.transition === cc.Button.Transition.SPRITE
        }), cc.Class.Attr.setClassAttr(u, "hoverSprite", "visible", function () {
            return this.transition === cc.Button.Transition.SPRITE
        }), cc.Class.Attr.setClassAttr(u, "disabledSprite", "visible", function () {
            return this.transition === cc.Button.Transition.SPRITE
        }), cc.Class.Attr.setClassAttr(u, "zoomScale", "visible", function () {
            return this.transition === cc.Button.Transition.SCALE
        }), cc.Class.Attr.setClassAttr(u, "normalMaterial", "visible", function () {
            return !0 === this.enableAutoGrayEffect
        }), cc.Class.Attr.setClassAttr(u, "grayMaterial", "visible", function () {
            return !0 === this.enableAutoGrayEffect
        }), cc._RF.pop()
    }, {"../manager/AudioMgr": "AudioMgr"}],
    BaseCtrl: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "de51cCKuzdF55057kR0mitQ", "BaseCtrl");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../manager/EventMgr"), s = t("../manager/ResCacheMgr"), c = t("../manager/ResourceMgr"),
            l = cc._decorator, u = l.ccclass, p = l.property, d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cache = !1, e.resArray = [], e.eventList = [], e.isDestroy = !1, e
                }

                return i(e, t), e.prototype.onLoad = function () {
                }, e.prototype.addEvent = function (t, e) {
                    r.EventMgr.getInstance().on(t, this, e);
                    var a = new Map;
                    a.set(t, e), this.eventList.push(a)
                }, e.prototype.sendEvent = function (t, e, a, n, i, o) {
                    r.EventMgr.getInstance().emit(t, e, a, n, i, o)
                }, e.prototype.loadSpriteFrame = function (t, e, a, n, i) {
                    var o = this;
                    void 0 === n && (n = !0), void 0 === i && (i = 10), c.ResourceMgr.getInstance().loadSpriteframe(t, e, function (i) {
                        n && o.addRes(t, e, cc.SpriteFrame), o.isDestroy || a(i)
                    }, n, i)
                }, e.prototype.loadRemoteSpriteFrame = function (t, e, a, n) {
                    var i = this;
                    void 0 === a && (a = !0), void 0 === n && (n = 10), c.ResourceMgr.getInstance().loadRemoteSpriteFrame(t, function (n) {
                        a && i.addRes("", t, cc.SpriteFrame), i.isDestroy || e(n)
                    }, a, n)
                }, e.prototype.loadPrefab = function (t, e, a, n, i) {
                    var o = this;
                    void 0 === n && (n = !0), void 0 === i && (i = 10), c.ResourceMgr.getInstance().loadRes(t, e, cc.Prefab, function (i) {
                        n && o.addRes(t, e, cc.Prefab), o.isDestroy || a(i)
                    }, n, i)
                }, e.prototype.loadTexture2D = function (t, e, a, n, i) {
                    var o = this;
                    void 0 === n && (n = !0), void 0 === i && (i = 10), c.ResourceMgr.getInstance().loadRes(t, e, cc.Texture2D, function (i) {
                        n && o.addRes(t, e, cc.Texture2D), o.isDestroy || a(i)
                    }, n, i)
                }, e.prototype.loadResFromBundle = function (t, e, a, n, i, o) {
                    var r = this;
                    void 0 === i && (i = !0), void 0 === o && (o = 10), c.ResourceMgr.getInstance().loadRes(t, e, a, function (o) {
                        i && r.addRes(t, e, a), r.isDestroy || n(o)
                    }, i, o)
                }, e.prototype.loadFromRes = function (t, e, a, n) {
                    var i = this;
                    void 0 === n && (n = 10), c.ResourceMgr.getInstance().loadFromRes(t, e, function (n) {
                        i.addRes("", t, e), i.isDestroy || a(n)
                    })
                }, e.prototype.addRes = function (t, e, a) {
                    if (this.resArray) {
                        var n = s.ResCacheMgr.getInstance().isExistKey(t + "/" + e, a.name, this.resArray);
                        if (-1 != n) this.resArray[n].defCount || (this.resArray[n].defCount = 0), this.resArray[n].defCount++; else {
                            var i = new c.ResCacheKey(t, e, a);
                            this.resArray.push(i)
                        }
                    }
                }, e.prototype.release = function () {
                    !this.cache && this.resArray && (s.ResCacheMgr.getInstance().refreshTime(this.resArray), this.resArray = [])
                }, e.prototype.setListenerUI = function () {
                }, e.prototype.onDestroy = function () {
                    var t = this;
                    if (this.eventList && this.eventList.length > 0) {
                        for (var e = 0; e < this.eventList.length; e++) this.eventList[e].forEach(function (e, a) {
                            r.EventMgr.getInstance().off(a, t, e)
                        });
                        this.eventList = []
                    }
                    this.isDestroy = !0, this.release()
                }, o([p({displayName: lang.index60eed_12})], e.prototype, "cache", void 0), o([u], e)
            }(cc.Component);
        a.default = d, cc._RF.pop()
    }, {
        "../manager/EventMgr": "EventMgr",
        "../manager/ResCacheMgr": "ResCacheMgr",
        "../manager/ResourceMgr": "ResourceMgr"
    }],
    BaseData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "49fe1VrQRREfYC23YMs7HGr", "BaseData"), Object.defineProperty(a, "__esModule", {value: !0}), a.BaseData = void 0;
        var n = t("../../framework/utils/CacheUtils"), i = t("../manager/EventMgr"),
            o = t("../manager/PlatformManager"), r = t("../manager/SdkMgr"), s = t("./BasePlatform"),
            c = t("../../game/global/Global"), l = t("../configs/Appcfg"), u = function () {
                function t() {
                    this.pwd = "SFPLAY", this.updateTimeCount = 0, this.preUploadTime = -1, this.isGetLocal = !1, this.saveFlag = !0
                }

                return t.prototype.getData = function (t) {
                    if (null == this.data) {
                        var e = null;
                        if (c.Global.saveOnServer) {
                            i.EventMgr.getInstance().on(l.BaseEventName.onHide, this, this.SaveDataOnClose), i.EventMgr.getInstance().on(l.BaseEventName.ClearData, this, this.clearData);
                            var a = null, u = !1;
                            if (o.PlatformManager.currentPlatform == s.Platform.BYTEDANCE) {
                                var p = r.SdkMgr.getInstance().getStorage(this.gameKey);
                                p ? (this.isGetLocal = !0, a = JSON.parse(p)) : (e = this.ecrypt ? n.CacheUtils.getDataDecrypt(this.gameKey, this.pwd) : n.CacheUtils.getData(this.gameKey)) ? (a = JSON.parse(e), this.saveData(), console.log(lang.index60eed_13), localStorage.removeItem(this.gameKey), this.isGetLocal = !0) : (a = this.createData(), u = !0)
                            } else (e = this.ecrypt ? n.CacheUtils.getDataDecrypt(this.gameKey, this.pwd) : n.CacheUtils.getData(this.gameKey)) ? a = JSON.parse(e) : (a = this.createData(), u = !0);
                            this.isGetLocal && (c.Global.getLocalData || t) && (this.isGetLocal = !0, console.log(lang.index60eed_14), this.data = a, this.initData(u), t && t())
                        } else i.EventMgr.getInstance().on(l.BaseEventName.onHide, this, this.SaveDataOnClose), (e = this.ecrypt ? n.CacheUtils.getDataDecrypt(this.gameKey, this.pwd) : n.CacheUtils.getData(this.gameKey)) ? (this.data = JSON.parse(e), this.initData(!1)) : (this.data = this.createData(), this.initData(!0)), t && t()
                    }
                    return this.data
                }, t.prototype.initData = function () {
                }, t.prototype.saveData = function (t) {
                    void 0 === t && (t = !1), this.beforeSaveData();
                    var e = JSON.stringify(this.data);
                    switch (o.PlatformManager.currentPlatform) {
                        case s.Platform.BYTEDANCE:
                            r.SdkMgr.getInstance().setStorage(this.gameKey, e, function () {
                            });
                            break;
                        default:
                            this.ecrypt ? n.CacheUtils.saveDataEncrypt(this.gameKey, e, this.pwd) : n.CacheUtils.saveData(this.gameKey, e)
                    }
                    if (c.Global.saveOnServer) if (this.saveFlag = !0, t) this.UpdateData(), this.saveFlag = !1; else {
                        var a = (new Date).getTime() / 1e3;
                        -1 == this.preUploadTime && (this.preUploadTime = a), a - this.preUploadTime > 30 && (console.log(lang.index60eed_15), this.preUploadTime = a, this.UpdateData(), this.saveFlag = !1)
                    }
                }, t.prototype.beforeSaveData = function () {
                }, t.prototype.SaveDataOnClose = function () {
                    this.saveData(!0)
                }, t.prototype.UpdateData = function () {
                    this.saveFlag && (this.beforeSaveData(), null == this.data && (this.data = new Object), JSON.stringify(this.data))
                }, t.prototype.clearData = function () {
                }, t
            }();
        a.BaseData = u, cc._RF.pop()
    }, {
        "../../framework/utils/CacheUtils": "CacheUtils",
        "../../game/global/Global": "Global",
        "../configs/Appcfg": "Appcfg",
        "../manager/EventMgr": "EventMgr",
        "../manager/PlatformManager": "PlatformManager",
        "../manager/SdkMgr": "SdkMgr",
        "./BasePlatform": "BasePlatform"
    }],
    BaseMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "9b26fp4xRlDqIrlgM98Byc9", "BaseMgr"), Object.defineProperty(a, "__esModule", {value: !0});
        var n = t("../manager/EventMgr"), i = function () {
            function t() {
                this.resArray = [], this.eventList = [], this.isDestroy = !1
            }

            return t.prototype.addEvent = function (t, e) {
                n.EventMgr.getInstance().on(t, this, e);
                var a = new Map;
                a.set(t, e), this.eventList.push(a)
            }, t.prototype.sendEvent = function (t, e, a, i, o, r) {
                n.EventMgr.getInstance().emit(t, e, a, i, o, r)
            }, t.prototype.addRes = function () {
            }, t.prototype.release = function () {
            }, t.prototype.setListenerUI = function () {
            }, t.prototype.offEvents = function () {
                var t = this;
                if (this.eventList && this.eventList.length > 0) {
                    for (var e = 0; e < this.eventList.length; e++) this.eventList[e].forEach(function (e, a) {
                        n.EventMgr.getInstance().off(a, t, e)
                    });
                    this.eventList = null
                }
            }, t.prototype.onDestroy = function () {
                this.isDestroy = !0, this.release()
            }, t
        }();
        a.default = i, cc._RF.pop()
    }, {"../manager/EventMgr": "EventMgr"}],
    BasePlatform: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "99a91f+tQxEWIiBgY/dL3bP", "BasePlatform"), Object.defineProperty(a, "__esModule", {value: !0}), a.AppName = a.Platform = void 0, function (t) {
            t.EDITOR = "editor", t.KUAIKAN = "h5_kuaikan", t.WECHAT = "h5_wechat", t.BYTEDANCE = "h5_bytedance", t.VIVO = "h5_vivo", t.BAIDU = "h5_baidu", t.OPPO = "h5_oppo", t.QQ = "h5_qq", t.ANDROID_233 = "android_233", t.ANDROID_XIAOMI = "android_xiaomi", t.ANDROID_VIVO = "android_vivo", t.ANDROID_OPPO = "android_oppo", t.ANDROID_oyahoo = "android_ohayoo", t.ANDROID_MMY = "android_mmy", t.ANDROID_4399 = "android_4399", t.ANDROID_DOUYIN = "android_bytedance", t.GOOGLE = "Google", t.Ios = "ios", t.KuaiShou = "kuaishou", t.HUAWEI_QUICK = "huawei", t.WEB_LINK = "weblink"
        }(a.Platform || (a.Platform = {})), function (t) {
            t.Slay = "slay", t.Invincible = "invincible"
        }(a.AppName || (a.AppName = {})), cc._RF.pop()
    }, {}],
    BaseUI: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "aaf34+Thw5BRKGowfSnf24h", "BaseUI");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.OpenAin = void 0;
        var r, s = t("../manager/EventMgr"), c = t("../manager/LanguageMgr"), l = t("../manager/PlatformManager"),
            u = t("../manager/ResCacheMgr"), p = t("../manager/ResourceMgr"), d = t("../manager/TweenMgr"),
            h = t("../manager/UIMgr"), g = t("../utils/ArgsParseUtils"), f = t("./BasePlatform"), m = cc._decorator,
            y = m.ccclass, v = m.property;
        (function (t) {
            t[t.None = 0] = "None", t[t.Pop = 1] = "Pop"
        })(r = a.OpenAin || (a.OpenAin = {})), cc.Enum(r);
        var I = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.cache = !1, e.openAniType = r.None, e.goldNode = null, e.goldIcon = null, e.goldLable = null, e.uid = -1, e.resArray = [], e.eventList = [], e.isclose = !1, e.fromId = -1, e
            }

            return i(e, t), e.prototype.onLoad = function () {
            }, e.prototype.refreshUI = function () {
            }, e.prototype.init = function () {
                this.isclose = !1
            }, e.prototype.onOpen = function () {
            }, e.prototype.onClose = function () {
            }, e.prototype.onToggleHide = function () {
            }, e.prototype.onToggleShow = function () {
            }, e.prototype.addEvent = function (t, e) {
                s.EventMgr.getInstance().on(t, this, e);
                var a = new Map;
                a.set(t, e), this.eventList.push(a)
            }, e.prototype.sendEvent = function (t, e, a, n, i, o) {
                s.EventMgr.getInstance().emit(t, e, a, n, i, o)
            }, e.prototype.getUid = function () {
                return this.uid
            }, e.prototype.onOpened = function () {
                this.isclose = !1
            }, e.prototype.setUid = function (t) {
                this.uid = t
            }, e.prototype.openAni = function (t) {
                var e = this;
                if (this.openAniType == r.Pop) {
                    this.node.active = !0;
                    var a = this.node.getChildByName("bg");
                    a && (a.opacity = 0, cc.tween(a).to(.2, {opacity: 200}).start());
                    var n = this.node.getChildByName("root");
                    if (n) {
                        var i = n.scale, o = d.TweenMgr.getInstance().getTween(n), s = n.getComponent(cc.Widget);
                        n.scale = 0, s && s.updateAlignment(), d.TweenMgr.getInstance().popOpenAin(o, function () {
                            n.scale != i && cc.tween(n).to(.15, {scale: i}).start(), e.onOpen(), t && t()
                        })
                    } else this.node.active = !0, this.onOpen(), t && t()
                } else this.node.active = !0, this.onOpen(), t && t()
            }, e.prototype.closeAni = function (t) {
                if (this.openAniType == r.None) t(); else if (this.openAniType == r.Pop) {
                    var e = this.node.getChildByName("bg");
                    e && (e.opacity = 200, cc.tween(e).to(.4, {opacity: 0}).start());
                    var a = this.node.getChildByName("root");
                    if (a) {
                        var n = d.TweenMgr.getInstance().getTween(a);
                        d.TweenMgr.getInstance().popCloseAin(n, function () {
                            t()
                        })
                    } else t()
                }
            }, e.prototype.openUI = function (t, e, a, n, i, o) {
                h.UIMgr.getInstance().openUI(t, this.uid, e, a, n, i, o)
            }, e.prototype.openUICallBack = function (t, e, a, n, i, o, r) {
                h.UIMgr.getInstance().openUIOfCallback(t, this.uid, e, a, n, i, o, r)
            }, e.prototype.closeUI = function (t, e, a, n, i) {
                var o = this;
                if (this.eventList && this.eventList.length > 0) for (var r = 0; r < this.eventList.length; r++) this.eventList[r].forEach(function (t, e) {
                    s.EventMgr.getInstance().off(e, o, t)
                });
                this.isclose = !0, this.release(), this.scheduleOnce(function () {
                    h.UIMgr.getInstance().closeUI(o.node, t, e, a, n, i)
                })
            }, e.prototype.closeNotAni = function (t, e, a, n, i) {
                this.openAniType = r.None, this.closeUI(t, e, a, n, i)
            }, e.prototype.loadSpriteFrame = function () {
                var t = this, e = g.ArgsParseUtils._makeloadSpriteFrameResrgs.apply(this, arguments), a = e.bundle,
                    n = e.path, i = e.callback, o = !0, r = e.saveKey;
                n.startsWith("http") ? l.PlatformManager.currentPlatform == f.Platform.BYTEDANCE ? (console.log(lang.index60eed_16, n), cc.assetManager.loadRemote(n, {ext: ".head"}, function (e, a) {
                    if (!t.isclose && !e) {
                        console.log(lang.index60eed_17, n);
                        var o = new cc.SpriteFrame(a);
                        i(o)
                    }
                })) : cc.assetManager.loadRemote(n, function (e, a) {
                    if (!t.isclose && !e) {
                        var n = new cc.SpriteFrame(a);
                        i(n)
                    }
                }) : p.ResourceMgr.getInstance().loadSpriteframe(a, n, function (e) {
                    o && t.addRes(a, n, cc.SpriteFrame), t.isclose || i(e)
                }, o, e.cacheTme, r)
            }, e.prototype.loadRemoteSpriteFrame = function (t, e, a, n) {
                var i = this;
                void 0 === a && (a = !0), void 0 === n && (n = 10), p.ResourceMgr.getInstance().loadRemoteSpriteFrame(t, function (n) {
                    a && i.addRes("", t, cc.SpriteFrame), i.isclose || e(n)
                }, a, n)
            }, e.prototype.loadPrefab = function (t, e, a, n, i) {
                var o = this;
                void 0 === n && (n = !0), void 0 === i && (i = 10), p.ResourceMgr.getInstance().loadRes(t, e, cc.Prefab, function (i) {
                    n && o.addRes(t, e, cc.Prefab), o.isclose || a(i)
                }, n, i)
            }, e.prototype.loadTexture2D = function (t, e, a, n, i) {
                var o = this;
                void 0 === n && (n = !0), void 0 === i && (i = 10), p.ResourceMgr.getInstance().loadRes(t, e, cc.Texture2D, function (i) {
                    n && o.addRes(t, e, cc.Texture2D), o.isclose || a(i)
                }, n, i)
            }, e.prototype.loadResFromBundle = function () {
                var t = this, e = g.ArgsParseUtils._makeLoadResArgs.apply(this, arguments), a = e.bundle, n = e.path,
                    i = e.callback, o = !0, r = e.type;
                p.ResourceMgr.getInstance().loadRes(a, n, r, function (e) {
                    o && t.addRes(a, n, r), t.isclose || i(e)
                }, o, e.cacheTme, e.saveKey)
            }, e.prototype.loadFromRes = function (t, e, a, n) {
                var i = this;
                void 0 === n && (n = 10), p.ResourceMgr.getInstance().loadFromRes(t, e, function (n) {
                    i.addRes("", t, e), i.isclose || a(n)
                })
            }, e.prototype.addRes = function (t, e, a) {
                if (this.resArray) {
                    var n = u.ResCacheMgr.getInstance().isExistKey(t + "/" + e, a.name, this.resArray);
                    if (-1 != n) this.resArray[n].defCount || (this.resArray[n].defCount = 0), this.resArray[n].defCount++; else {
                        var i = new p.ResCacheKey(t, e, a);
                        this.resArray.push(i)
                    }
                }
            }, e.prototype.release = function () {
                !this.cache && this.resArray && (u.ResCacheMgr.getInstance().refreshTime(this.resArray), this.resArray = [])
            }, e.prototype.setListenerUI = function () {
            }, e.prototype.onDestroy = function () {
                var t = this;
                if (this.eventList && this.eventList.length > 0) {
                    for (var e = 0; e < this.eventList.length; e++) this.eventList[e].forEach(function (e, a) {
                        s.EventMgr.getInstance().off(a, t, e)
                    });
                    this.eventList = []
                }
                this.isclose = !0, this.release()
            }, e.prototype.T = function (t) {
                return c.LanguageMgr.getInstance().T(t)
            }, e.prototype.getImgstr = function (t) {
                return c.LanguageMgr.getInstance().getImgstr(t)
            }, o([v({displayName: lang.index60eed_18})], e.prototype, "cache", void 0), o([v({
                type: r,
                tooltip: lang.index60eed_19,
                displayName: lang.index60eed_20
            })], e.prototype, "openAniType", void 0), o([v({
                type: cc.Node,
                tooltip: lang.index60eed_21
            })], e.prototype, "goldNode", void 0), o([v({
                type: cc.Node,
                tooltip: lang.index60eed_22
            })], e.prototype, "goldIcon", void 0), o([v({
                type: cc.Label,
                tooltip: lang.index60eed_23
            })], e.prototype, "goldLable", void 0), o([y], e)
        }(cc.Component);
        a.default = I, cc._RF.pop()
    }, {
        "../manager/EventMgr": "EventMgr",
        "../manager/LanguageMgr": "LanguageMgr",
        "../manager/PlatformManager": "PlatformManager",
        "../manager/ResCacheMgr": "ResCacheMgr",
        "../manager/ResourceMgr": "ResourceMgr",
        "../manager/TweenMgr": "TweenMgr",
        "../manager/UIMgr": "UIMgr",
        "../utils/ArgsParseUtils": "ArgsParseUtils",
        "./BasePlatform": "BasePlatform"
    }],
    BoxDrop: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "9043cKFu8NBj4WTKgyr6XDH", "BoxDrop");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseCtrl"), s = t("../../framework/manager/TweenMgr"),
            c = t("../../framework/manager/UIMgr"), l = t("../../framework/utils/Utils"), u = t("../config/Config"),
            p = t("../datas/TrackDataEvent"), d = t("../manager/DataMgr"), h = t("../manager/PlayerMgr"),
            g = cc._decorator, f = g.ccclass, m = g.property, y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.plantLayer = null, e.bgSp = [], e.isCustomBox = !1, e.firstBox = "", e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this, e = d.DataMgr.getInstance().getAllParamsCfg();
                    this.resNumData = h.PlayerMgr.getInstance().getResNumData(), this.userData = h.PlayerMgr.getInstance().getUserData(), e[8].value.split(",").forEach(function (t) {
                        Number(t)
                    });
                    var a = l.Utils.randomRang(0, 100);
                    a < Number(e[8].value.split(",")[0]) ? this.currency = u.Currency.gold : this.currency = u.Currency.diamond, this.node.on(cc.Node.EventType.TOUCH_START, function () {
                        c.UIMgr.getInstance().openUI(u.UIID.UIBox, u.UIID.UINone, function () {
                            if (t.isCustomBox) {
                                var n = t.firstBox.split(","), i = Number(n[l.Utils.randomRang(0, n.length)]),
                                    o = d.DataMgr.getInstance().getDrawCardLibraryCfgById(i), r = l.Utils.weight_rand(o);
                                h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.plantbox), h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.plantbox_get_X, t.level), c.UIMgr.getInstance().openUI(u.UIID.UIAward, u.UIID.UINone, u.TipType.lottery, r, null, function () {
                                    t.node.active = !1, t.node.destroy()
                                })
                            } else {
                                h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.box);
                                var s = h.PlayerMgr.getInstance().getSignData();
                                s.getCurentDay() <= 7 && h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.dayz_box, s.getCurentDay()), t.currency == u.Currency.gold ? (a = 5 - t.resNumData.getNum(u.Currency.gold), t.RewardNum = Number(e[0].value.split(",")[a]) || Number(e[0].value.split(",")[4]), t.userData.subGoldNum(-Math.ceil(t.RewardNum * Number(e[9].value))), c.UIMgr.getInstance().openUI(u.UIID.UITips, u.UIID.UINone, lang.index60eed_24 + Math.ceil(t.RewardNum * Number(e[9].value)))) : t.currency == u.Currency.diamond && (a = 5 - t.resNumData.getNum(u.Currency.diamond), t.RewardNum = Number(e[1].value.split(",")[a]) || Number(e[1].value.split(",")[4]), t.userData.subDiamondNum(-Math.ceil(t.RewardNum * Number(e[9].value))), c.UIMgr.getInstance().openUI(u.UIID.UITips, u.UIID.UINone, lang.index60eed_25 + Math.ceil(t.RewardNum * Number(e[9].value))), t.node.active = !1, t.node.destroy())
                            }
                        })
                    })
                }, e.prototype.initSpr = function (t, e, a) {
                    void 0 === t && (t = !1), this.node.getComponent(cc.Sprite).spriteFrame = t ? this.bgSp[1] : this.bgSp[0], this.isCustomBox = t, this.firstBox = e, this.level = a
                }, e.prototype.playAni = function () {
                    s.TweenMgr.getInstance().anglesAni(this.node, -1)
                }, o([m({
                    type: cc.Node,
                    tooltip: lang.index60eed_26
                })], e.prototype, "plantLayer", void 0), o([m([cc.SpriteFrame])], e.prototype, "bgSp", void 0), o([f], e)
            }(r.default);
        a.default = y, cc._RF.pop()
    }, {
        "../../framework/base/BaseCtrl": "BaseCtrl",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    Btn_Scale: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "d1be2CEEgZHGZcxzvKLwxFZ", "Btn_Scale");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = (r.property, function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.onLoad = function () {
                var t = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    var e = cc.scaleTo(.1, 1.2).easing(cc.easeCircleActionInOut());
                    t.node.runAction(e)
                }, this), this.node.on(cc.Node.EventType.TOUCH_END, function () {
                    var e = cc.scaleTo(.08, 1);
                    t.node.runAction(e)
                }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
                    var e = cc.scaleTo(.08, 1);
                    t.node.runAction(e)
                }, this)
            }, o([s], e)
        }(cc.Component));
        a.default = c, cc._RF.pop()
    }, {}],
    Buff: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "025d6iTJlNPs5XRMJTkE0xC", "Buff");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = (r.property, function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.speed = 2, e
            }

            return i(e, t), e.prototype.onLoad = function () {
                var t = cc.find("Canvas").getComponent("GameController").barrier_speed;
                this.speed = t
            }, e.prototype.update = function (t) {
                1 == cc.find("Canvas").getComponent("GameController").is_barrier_move && (this.node.y -= t * this.speed)
            }, e.prototype.onCollisionEnter = function () {
                var t = cc.find("Canvas").getComponent("GameController");
                t.bullet_speed < 1e4 && this.randomNumber(0, 10) > 5 ? t.enhance_speed() : t.enhance_ATK(), this.node.destroy(), cc.find("Canvas").getComponent("Music").play_music_buff()
            }, e.prototype.randomNumber = function (t, e) {
                return Math.round(Math.random() * (t - e) + e)
            }, o([s], e)
        }(cc.Component));
        a.default = c, cc._RF.pop()
    }, {}],
    Bullets: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "91dd34xp8lEQ5uEhj/XRL4A", "Bullets");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.bulletStatus = void 0;
        var r, s = t("../../framework/base/BaseCtrl"), c = t("../../framework/manager/AudioMgr"),
            l = t("../../framework/manager/PoolMgr"), u = t("../config/Config"), p = t("../manager/MapMgr"),
            d = t("./Combat"), h = t("./CombatUnitCtrl"), g = t("./Plants"), f = t("./Zombie"), m = cc._decorator,
            y = m.ccclass;
        m.property, function (t) {
            t[t.Move = 0] = "Move", t[t.Throw = 1] = "Throw", t[t.Damage = 2] = "Damage"
        }(r = a.bulletStatus || (a.bulletStatus = {}));
        var v = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.speed = 2, e.attack = 1, e.parentId = [], e.attackTargetScript = null, e.loseTarget = !1, e
            }

            return i(e, t), e.prototype.start = function () {
            }, e.prototype.setProperty = function (t, e, a) {
                this.data = JSON.parse(JSON.stringify(t)), this.parentId = e, this.isDestroy = !1, this.plantLevel = a
            }, e.prototype.getProperty = function () {
                return this.data
            }, e.prototype.doThrow = function (t, e) {
                var a = this, n = t.position, i = 1 == e ? t.height / 2 : 0;
                n.x < this.node.x && (n.x = this.node.x + 20), this.bulletStatus = r.Throw, this.attackTargetScript = t.getComponent(f.default);
                var o = (n.x - this.node.x) / this.speed, s = t.parent, c = 250;
                4100085 == this.data.ID && (c = 750), cc.tween(this.node).to(.95 * o, {angle: -this.data.BulletAngle}).start(), cc.tween(this.node).bezierTo(o, new cc.Vec2(this.node.x, this.node.y), new cc.Vec2((this.node.x + n.x - 50) / 2, n.y + c * o), new cc.Vec2(n.x - 50, n.y + i)).call(function () {
                    a.doDamege(t, s)
                }).start()
            }, e.prototype.initIsDestory = function () {
                this.isDestroy = !1
            }, e.prototype.detectionDamage = function () {
                var t = p.MapMgr.getInstance().zombieLayer, e = p.MapMgr.getInstance().stumpPosArr;
                if (e.length > 0 && (!this.data.CartridgeAddAttack || !this.data.HitBurn)) for (var a = p.MapMgr.getInstance().plantLayer, n = 0; n < e.length; n++) if (this.node.parent.y == a.children[e[n][0]].y) {
                    var i = a.children[e[n][0]].children[e[n][1]];
                    if (i.children.length <= 0) break;
                    if (Math.abs(this.node.x - i.x) <= i.children[0].width / 2) {
                        var o = i.children[0].getComponent(g.default).getSkill();
                        !this.data.CartridgeAddAttack && o.CartridgeAddAttack && (this.data.CartridgeAddAttack = o.CartridgeAddAttack), !this.data.HitBurn && o.CartridgeAddBurn && (this.data.HitBurn = o.CartridgeAddBurn)
                    }
                }
                for (n = 0; n < t.children.length; n++) {
                    if (this.bulletStatus == r.Damage) return;
                    if (t.children[n].y == this.node.parent.y) {
                        if (t.children[n].children.length <= 0) return;
                        t.children[n].children[0].x;
                        for (var s = 0; s < t.children[n].children.length; s++) {
                            var c = t.children[n].children[s].getComponent(f.default),
                                l = c.isLoseShield ? c.offsetArr[1] : c.offsetArr[0];
                            if (4100083 == this.data.ID ? Math.abs(this.node.x - t.children[n].children[s].x) <= 50 : Math.abs(this.node.x - t.children[n].children[s].x) <= this.node.width / 4 + l) {
                                if (!c.Status || c.Status == h.UnitStatus.Die || c.Status == h.UnitStatus.Prepare || this.loseTarget) continue;
                                this.doDamege(t.children[n].children[s], t.children[n]);
                                break
                            }
                        }
                    }
                }
            }, e.prototype.doDamege = function (t, e) {
                var a = this;
                this.bulletStatus = r.Damage, this.node.getComponent(cc.Sprite).spriteFrame = null, this.node.angle = 0;
                var n = this.node.getChildByName("ske").getComponent(sp.Skeleton), i = t.getComponent(f.default);
                if (this.data.HitSound && c.AudioMgr.getInstance().playEffect(u.AudioId[this.data.HitSound], 5), this.data.BulletEffect ? this.loadResFromBundle("bullet", this.data.BulletEffect + "/" + this.data.BulletEffect, sp.SkeletonData, function (t) {
                    n.skeletonData = t, n.premultipliedAlpha = !1, a.node.getChildByName("ske").active = !0, n.setAnimation(0, a.data.EffectName, !1), n.setCompleteListener(function () {
                        a.node.getChildByName("ske").active = !1, a.node.active = !1, a.loseTarget = !1, l.PoolMgr.getInstance().freeNode("bullet", a.node)
                    })
                }) : (this.node.active = !1, this.loseTarget = !1, l.PoolMgr.getInstance().freeNode("bullet", this.node)), this.data.CallType && "3" == this.data.CallType.split(",")[0]) {
                    var o, s = [0, 0];
                    p.MapMgr.getInstance().plantLayer.children.forEach(function (t, e) {
                        t.y == a.node.parent.y && (o = t, s[0] = e)
                    });
                    for (var g = o.children.length - 1; g >= 0; g--) {
                        var m = o.children[g];
                        if (!m.children[0] && Math.abs(t.x - m.x) <= m.width / 2 * this.data.Scope + t.width / 2) {
                            s[1] = g;
                            var y = new d.PlantCall;
                            y.plantLayerId = s, y.plantLevel = this.plantLevel, y.plantCall = this.data.Call.split(",")[0], this.sendEvent(u.EventName.plantCall, y);
                            break
                        }
                    }
                }
                if (i.Status && i.Status != h.UnitStatus.Die && i.Status != h.UnitStatus.Prepare && !this.loseTarget) if (this.data.Scope) e.children.forEach(function (e) {
                    if (Math.abs(t.x - e.x) <= 62.5 * a.data.Scope + t.width / 2 + 10) {
                        var n = e.getComponent(f.default);
                        if (n.Status == h.UnitStatus.Die || n.Status == h.UnitStatus.Prepare) return;
                        n.damageReceive(a.attack, a.data, a.parentId)
                    }
                }); else {
                    var v = t.getComponent(f.default);
                    if (!v.Status || v.Status == h.UnitStatus.Die || v.Status == h.UnitStatus.Prepare || this.loseTarget) return;
                    v.damageReceive(this.attack, this.data, this.parentId)
                }
            }, e.prototype.update = function (t) {
                if (this.bulletStatus == r.Move) {
                    if (this.node.x += this.speed * t, this.detectionDamage(), !this.node.parent) return;
                    this.node.x > 1.3 * this.node.parent.width && (this.node.active = !1, l.PoolMgr.getInstance().freeNode("bullet", this.node))
                }
                this.bulletStatus != r.Throw || this.loseTarget || this.attackTargetScript.Status != h.UnitStatus.Die && this.attackTargetScript.Status != h.UnitStatus.Prepare || (this.loseTarget = !0)
            }, o([y], e)
        }(s.default);
        a.default = v, cc._RF.pop()
    }, {
        "../../framework/base/BaseCtrl": "BaseCtrl",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PoolMgr": "PoolMgr",
        "../config/Config": "Config",
        "../manager/MapMgr": "MapMgr",
        "./Combat": "Combat",
        "./CombatUnitCtrl": "CombatUnitCtrl",
        "./Plants": "Plants",
        "./Zombie": "Zombie"
    }],
    Bullet: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "0d353aGzMBOa79gUxIdWs38", "Bullet");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = (r.property, function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.speed = 100, e.ATK = 2, e
            }

            return i(e, t), e.prototype.onLoad = function () {
                var t = cc.find("Canvas").getComponent("GameController"), e = t.bullet_speed, a = t.ATK;
                this.speed = e, this.ATK = a
            }, e.prototype.update = function (t) {
                1 == cc.find("Canvas").getComponent("GameController").is_plane_move && (this.node.y += t * this.speed);
                var e = cc.find("Canvas");
                this.node.y >= e.height / 2 + this.node.height / 2 && this.node.destroy()
            }, o([s], e)
        }(cc.Component));
        a.default = c, cc._RF.pop()
    }, {}],
    CacheUtils: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "10a38ih4QhFgKSieTDoZOM5", "CacheUtils"), Object.defineProperty(a, "__esModule", {value: !0}), a.CacheUtils = void 0;
        var n = t("./Utils"), i = function () {
            function t() {
            }

            return t.saveData = function (t, e) {
                localStorage.setItem(t, e)
            }, t.getData = function (t) {
                return localStorage.getItem(t)
            }, t.getServerData = function () {
            }, t.setServerData = function () {
            }, t.saveDataEncrypt = function (t, e, a) {
                var i = n.Utils.encrypt(e, a);
                this.saveData(t, i)
            }, t.getDataDecrypt = function (t, e) {
                var a = this.getData(t);
                return n.Utils.decrypt(a, e)
            }, t.canPlayMusin = function () {
                var t = this.getData("MUSIC");
                return !t || "0" != t
            }, t.canPlayEffect = function () {
                var t = this.getData("EFFECT");
                return !t || "0" != t
            }, t.setPlayMusic = function (t) {
                t ? this.saveData("MUSIC", "1") : this.saveData("MUSIC", "0")
            }, t.setPlayEffect = function (t) {
                t ? this.saveData("EFFECT", "1") : this.saveData("EFFECT", "0")
            }, t
        }();
        a.CacheUtils = i, cc._RF.pop()
    }, {"./Utils": "Utils"}],
    Choose: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "8049avusphC6bNCEJfvDcD0", "Choose");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = (r.property, function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.nowScale = 1, e
            }

            return i(e, t), e.prototype.onEnable = function () {
                this.playAni()
            }, e.prototype.onDisable = function () {
                cc.Tween.stopAllByTarget(this.node), this.node.scale = 1
            }, e.prototype.playAni = function () {
                cc.tween(this.node).sequence(cc.tween().to(.01, {scale: 1.05 * this.nowScale}), cc.tween().to(.5, {scale: 1 * this.nowScale}), cc.tween().to(.49, {scale: 1.05 * this.nowScale})).repeatForever().start()
            }, o([s], e)
        }(cc.Component));
        a.default = c, cc._RF.pop()
    }, {}],
    CityMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "b39c9FYOklMSYxKAdaKEyOo", "CityMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.CityMgr = void 0;
        var n = function () {
            function t() {
                this.firstCity = [lang.index60eed_27, lang.index60eed_28, lang.index60eed_29, lang.index60eed_30], this.isget = !1, this.isFirstCity = !0
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t, this.instance.init()), this.instance
            }, t.prototype.init = function () {
                this.parseIp()
            }, t.prototype.parseIp = function () {
            }, t.prototype.getIsFirstCity = function () {
                return this.isget || this.parseIp(), this.isFirstCity
            }, t
        }();
        a.CityMgr = n, cc._RF.pop()
    }, {}],
    ComCollectionData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "5fd77fRSB1HOak8Rvk3nmDC", "ComCollectionData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.ComCollectionData = void 0;
        var o = t("../../../scripts/framework/base/BaseData"), r = t("../../../scripts/framework/manager/EventMgr"),
            s = t("../../../scripts/framework/manager/LogMgr"), c = t("../../../scripts/framework/utils/TimeUtils"),
            l = t("../../../scripts/framework/utils/UIUtils"), u = t("../../../scripts/game/config/Config"),
            p = t("../config/CommonCfg"), d = t("../manager/ComDataMgr"), h = function () {
                this.isGet = !1, this.finished = !1, this.adTip = !1, this.isTips = !1
            }, g = function () {
                this.index = 1, this.itemData = [], this.isGet = !1, this.endtime = -1, this.process = 0
            }, f = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ecrypt = !1, e.gameKey = u.GameConfig.AppCacheName + "collection", e.showRed = !1, e
                }

                return i(e, t), e.prototype.createData = function () {
                    this.data = new g;
                    var t = Number(d.ComDataMgr.getInstance().getCommonParam(d.CommonParamType.colloctionTime));
                    return t > 0 && (this.data.endtime = c.TimeUtils.GetTimeBySecond() + 60 * t), this.data
                }, e.prototype.initData = function (t) {
                    if (t) {
                        for (var e = d.ComDataMgr.getInstance().getCollectionCfgById(this.data.index).itemId.split(u.GameConfig.splitNum), a = 0; a < e.length; a++) {
                            var n = Number(e[a]), i = new h;
                            i.id = a, i.itemId = n;
                            var o = d.ComDataMgr.getInstance().getCollectionItemById(n);
                            null == o.tips ? i.adTip = !1 : i.adTip = !0, i.goodId = o.goodId, i.isGet = !1, i.num = 0, i.finished = !1, this.data.itemData.push(i)
                        }
                        this.saveData()
                    } else this.refreData()
                }, e.prototype.getCurrentReward = function () {
                    var t = d.ComDataMgr.getInstance().getCollectionCfgById(this.data.index);
                    return t ? t.rewards : null
                }, e.prototype.refreData = function () {
                    if (this.checkCanRefresh() && this.data.endtime > 1) if (this.data.endtime - c.TimeUtils.GetTimeBySecond() <= 0) this.nextData(); else {
                        var t = this.data.endtime - c.TimeUtils.GetTimeBySecond();
                        l.UIUtils.scheduleOnce(this.nextData, this, t)
                    }
                }, e.prototype.getCollectionData = function (t) {
                    for (var e = 0; e < this.data.itemData.length; e++) {
                        var a = this.data.itemData[e];
                        if (a.id == t) return a
                    }
                    return null
                }, e.prototype.getAllCollectionData = function () {
                    return this.data.itemData
                }, e.prototype.checkCanRefresh = function () {
                    var t = d.ComDataMgr.getInstance();
                    if (Number(t.getCommonParam(d.CommonParamType.colloctionCanNext)) <= 0) return !1;
                    var e = t.getAllCollectionCfg();
                    if (this.data.index == e.length) {
                        if (Number(t.getCommonParam(d.CommonParamType.colloctionRepet)) <= 0) return !1;
                        this.data.index = 1
                    }
                    if (this.data.isGet) return !0;
                    if (this.data.process == this.data.itemData.length) return !1;
                    for (var a = [], n = 0; n < this.data.itemData.length; n++) {
                        var i = this.data.itemData[n];
                        (i.isGet || i.finished) && a.push(!0)
                    }
                    return a.length != this.data.itemData.length && (s.LogMgr.getInstance().debug(lang.index60eed_31), !0)
                }, e.prototype.nextData = function () {
                    var t = d.ComDataMgr.getInstance().getAllCollectionCfg();
                    this.data.index >= t.length && (this.data.index = 0);
                    var e = d.ComDataMgr.getInstance().getCollectionCfgById(this.data.index + 1).itemId.split(u.GameConfig.splitNum);
                    this.data.itemData.splice(0, this.data.itemData.length);
                    for (var a = 0; a < e.length; a++) {
                        var n = Number(e[a]), i = new h;
                        i.id = a, i.itemId = n, i.isGet = !1, i.num = 0;
                        var o = d.ComDataMgr.getInstance().getCollectionItemById(n);
                        i.goodId = o.goodId, i.finished = !1, this.data.itemData.push(i)
                    }
                    var r = Number(d.ComDataMgr.getInstance().getCommonParam(d.CommonParamType.colloctionTime));
                    this.data.endtime = r > 0 ? c.TimeUtils.GetTimeBySecond() + 60 * r : -1, this.data.process = 0, this.data.index += 1, this.data.isGet = !1, this.saveData(), this.checkShowRed()
                }, e.prototype.receiveTaskReward = function (t) {
                    if (this.data.isGet = !0, this.checkCanRefresh()) {
                        if (this.data.endtime > 1) if (this.data.endtime - c.TimeUtils.GetTimeBySecond() <= 0) this.nextData(), t && t(!0); else {
                            var e = this.data.endtime - c.TimeUtils.GetTimeBySecond();
                            l.UIUtils.unSchedule(this.nextData, this), l.UIUtils.scheduleOnce(this.nextData, this, e), t && t(!1)
                        }
                    } else t && t(!1);
                    this.checkShowRed(), this.saveData()
                }, e.prototype.checkFinshed = function () {
                    if (this.data.isGet) return !0;
                    for (var t = [], e = 0; e < this.data.itemData.length; e++) {
                        var a = this.data.itemData[e];
                        if (a.isGet || a.finished) t.push(!0); else {
                            var n = d.ComDataMgr.getInstance().getCollectionItemById(a.itemId);
                            n && a.num >= n.needNum && (t.push(!0), a.finished = !0)
                        }
                    }
                    return t.length >= this.data.itemData.length
                }, e.prototype.checkShowRed = function () {
                    for (var t = !1, e = 0; e < this.data.itemData.length; e++) {
                        var a = this.data.itemData[e];
                        !a.isGet && a.finished && (t = !0)
                    }
                    t || this.data.isGet || this.data.process != this.data.itemData.length || (t = !0), t ? this.showRed || (this.showRed = !0, r.EventMgr.getInstance().emit(p.CommonEventName.RefreshCollectionRed, !0)) : this.showRed && (this.showRed = !1, r.EventMgr.getInstance().emit(p.CommonEventName.RefreshCollectionRed, !1))
                }, e.prototype.addAdTips = function (t) {
                    var e = this.getCollectionData(t);
                    e.adTip && (e.isTips = !0, this.saveData())
                }, e.prototype.addData = function (t, e, a) {
                    void 0 === a && (a = !0);
                    for (var n = [], i = 0; i < this.data.itemData.length; i++) {
                        var o = this.data.itemData[i];
                        if (o.goodId == t) {
                            o.num += e;
                            var s = d.ComDataMgr.getInstance().getCollectionItemById(o.itemId);
                            s && o.num >= s.needNum && (o.finished = !0), n.push(o.id)
                        }
                    }
                    n.length > 0 && (this.saveData(), a && r.EventMgr.getInstance().emit(p.CommonEventName.RefreshCollection, n)), this.checkShowRed()
                }, e.prototype.getProcess = function () {
                    return this.data.process
                }, e.prototype.getEndtime = function () {
                    return this.data.endtime
                }, e.prototype.finishData = function (t) {
                    var e = this.getCollectionData(t);
                    e && (e.finished = !0, e.isGet = !0, this.data.process += 1, this.saveData()), this.checkShowRed()
                }, e
            }(o.BaseData);
        a.ComCollectionData = f, cc._RF.pop()
    }, {
        "../../../scripts/framework/base/BaseData": "BaseData",
        "../../../scripts/framework/manager/EventMgr": "EventMgr",
        "../../../scripts/framework/manager/LogMgr": "LogMgr",
        "../../../scripts/framework/utils/TimeUtils": "TimeUtils",
        "../../../scripts/framework/utils/UIUtils": "UIUtils",
        "../../../scripts/game/config/Config": "Config",
        "../config/CommonCfg": "CommonCfg",
        "../manager/ComDataMgr": "ComDataMgr"
    }],
    ComDataMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "ca6f5Xwu71BZr9PwBi/3WFU", "ComDataMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.ComDataMgr = a.CommonParamType = void 0;
        var n = t("../../../scripts/framework/manager/ResourceMgr");
        (function (t) {
            t[t.defTickNum = 1] = "defTickNum", t[t.freeLottyNum = 2] = "freeLottyNum", t[t.colloctionTime = 3] = "colloctionTime", t[t.colloctionCanNext = 4] = "colloctionCanNext", t[t.colloctionRepet = 5] = "colloctionRepet"
        })(a.CommonParamType || (a.CommonParamType = {}));
        var i = function () {
            function t() {
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.preload = function (t) {
                var e = this;
                n.ResourceMgr.getInstance().loadRes("comconfig", "GameJsonCfg", cc.JsonAsset, function (a) {
                    e.data = a.json, e.orderCfgs(), a.decRef(), n.ResourceMgr.getInstance().releaseBundle("comconfig"), t && t()
                })
            }, t.prototype.orderCfgs = function () {
                this.data.ComGoodsCfg.sort(function (t, e) {
                    return t.id - e.id
                }), this.data.SignCfg.sort(function (t, e) {
                    return t.id - e.id
                }), this.data.LottyGoodCfg.sort(function (t, e) {
                    return t.id - e.id
                }), this.data.CommonParamCfg.sort(function (t, e) {
                    return t.id - e.id
                }), this.data.CollectionCfg.sort(function (t, e) {
                    return t.id - e.id
                }), this.data.CollectionItemCfg.sort(function (t, e) {
                    return t.id - e.id
                }), this.data.FreeTimeCfg.sort(function (t, e) {
                    return t.id - e.id
                }), this.data.FreeTimeItemCfg.sort(function (t, e) {
                    return t.id - e.id
                })
            }, t.prototype.getAllGoodsCfg = function () {
                return this.data.ComGoodsCfg
            }, t.prototype.getGoodsById = function (t) {
                return this.data.ComGoodsCfg[t - 1]
            }, t.prototype.getAllSignCfg = function () {
                return this.data.SignCfg
            }, t.prototype.getSignById = function (t) {
                return this.data.SignCfg[t - 1]
            }, t.prototype.getAllLottyGoodCfg = function () {
                return this.data.LottyGoodCfg
            }, t.prototype.getLottyGoodsByGirldId = function (t) {
                for (var e = this.data.LottyGoodCfg, a = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.girdId == t && a.push(i)
                }
                return a.sort(function (t, e) {
                    return t.order - e.order
                }), a
            }, t.prototype.getLottyGoodsById = function (t) {
                return this.data.LottyGoodCfg[t - 1]
            }, t.prototype.getCommonParam = function (t) {
                return this.data.CommonParamCfg[t - 1].value
            }, t.prototype.getAllCollectionCfg = function () {
                return this.data.CollectionCfg
            }, t.prototype.getCollectionCfgById = function (t) {
                return this.data.CollectionCfg[t - 1]
            }, t.prototype.getAllCollectionItemCfg = function () {
                return this.data.CollectionItemCfg
            }, t.prototype.getCollectionItemById = function (t) {
                return this.data.CollectionItemCfg[t - 1]
            }, t.prototype.getAllFreeTimeCfg = function () {
                return this.data.FreeTimeCfg
            }, t.prototype.getFreeTimeById = function (t) {
                return this.data.FreeTimeCfg[t - 1]
            }, t.prototype.getAllFreeItemCfg = function () {
                return this.data.FreeTimeItemCfg
            }, t.prototype.getFreeTimeItemById = function (t) {
                return this.data.FreeTimeItemCfg[t - 1]
            }, t
        }();
        a.ComDataMgr = i, cc._RF.pop()
    }, {"../../../scripts/framework/manager/ResourceMgr": "ResourceMgr"}],
    ComFreeTimeData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "c53c4wNRmZJ5pF+TzXYBDsy", "ComFreeTimeData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.ComFreeTimeData = a.FreeData = void 0;
        var o = t("../../../scripts/framework/base/BaseData"), r = t("../../../scripts/game/config/Config"),
            s = t("../manager/ComDataMgr"), c = function () {
                this.index = 0
            };
        a.FreeData = c;
        var l = function () {
        }, u = function () {
        }, p = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = r.GameConfig.AppCacheName + "FreeTime", e.currentGoodsIds = [], e
            }

            return i(e, t), e.prototype.createData = function () {
                this.data = new u, this.data.itemData = [];
                for (var t = s.ComDataMgr.getInstance().getAllFreeTimeCfg(), e = 0; e < t.length; e++) {
                    var a = t[e], n = new c;
                    n.id = a.id, n.index = 0;
                    var i = a.itemIds.split(r.GameConfig.splitNum), o = Number(i[0]);
                    n.itemId = o;
                    var l = s.ComDataMgr.getInstance().getFreeTimeItemById(o);
                    n.isTarget = !1, n.adNum = 0, this.currentGoodsIds.push(l.goodsId), n.goodsId = l.goodsId, this.data.itemData.push(n)
                }
                return this.checkSame(), this.saveData(), this.data
            }, e.prototype.checkSame = function () {
                for (var t = [], e = 0; e < this.data.itemData.length; e++) for (var a = this.data.itemData[e], n = 0; n < t.length; n++) if (t[n] == a.goodsId) {
                    var i = this.check(a.id, a.index, a.goodsId, a.index);
                    a.index = i.index, a.goodsId = i.goodId
                } else t.push(a.goodsId);
                t.splice(0, t.length)
            }, e.prototype.check = function (t, e, a, n) {
                e++;
                var i = s.ComDataMgr.getInstance().getFreeTimeById(t).itemIds.split(r.GameConfig.splitNum);
                if (e == i.length && (e = 0), n == e) return (o = new l).goodId = a, o.index = e, o;
                var o, c = s.ComDataMgr.getInstance().getFreeTimeItemById(Number(i[e]));
                if (c.goodsId != a) return (o = new l).goodId = c.goodsId, o.index = e, o;
                this.check(t, e, a, n)
            }, e.prototype.changleFreeTimedata = function (t) {
                var e = this.getDataById(t),
                    a = s.ComDataMgr.getInstance().getFreeTimeById(t).itemIds.split(r.GameConfig.splitNum),
                    n = e.index + 1;
                n >= a.length && (n = 0);
                var i = Number(a[n]);
                e.adNum = 0;
                var o = s.ComDataMgr.getInstance().getFreeTimeItemById(i);
                e.goodsId = o.goodsId, e.index = n, e.itemId = o.id, e.isTarget = !1, this.checkSame(), this.saveData()
            }, e.prototype.addAdNum = function (t) {
                var e = this.getDataById(t);
                return e.adNum++, this.saveData(), e
            }, e.prototype.addAdNumByData = function (t) {
                return t.adNum += 1, this.saveData(), t
            }, e.prototype.initData = function () {
            }, e.prototype.getDataById = function (t) {
                for (var e = 0; e < this.data.itemData.length; e++) {
                    var a = this.data.itemData[e];
                    if (Number(a.id) == t) return a
                }
                return null
            }, e
        }(o.BaseData);
        a.ComFreeTimeData = p, cc._RF.pop()
    }, {
        "../../../scripts/framework/base/BaseData": "BaseData",
        "../../../scripts/game/config/Config": "Config",
        "../manager/ComDataMgr": "ComDataMgr"
    }],
    ComGameData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "70993Lvi/tPZaTFdGTe3dve", "ComGameData"), Object.defineProperty(a, "__esModule", {value: !0}), a.ComGameData = void 0;
        a.ComGameData = function () {
        }, cc._RF.pop()
    }, {}],
    ComLottyData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "072f1QDdjdI2L/rsXr5r5yE", "ComLottyData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.ComLottyData = void 0;
        var o = t("../../../scripts/framework/base/BaseData"), r = t("../../../scripts/framework/manager/EventMgr"),
            s = t("../../../scripts/framework/utils/CacheUtils"), c = t("../../../scripts/framework/utils/Utils"),
            l = t("../../../scripts/game/config/Config"), u = t("../config/CommonCfg"), p = t("../manager/ComDataMgr"),
            d = function () {
                this.lottyNum = 0, this.dontMustIds = [], this.lottyTickNum = 0
            }, h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ecrypt = !1, e.gameKey = l.GameConfig.AppCacheName + "lotty", e.indexString = "mapIndex", e.numString = "mapNum", e
                }

                return i(e, t), e.prototype.getMapData = function () {
                    if (null == this.lottyIndexs) {
                        var t = null;
                        t = this.ecrypt ? s.CacheUtils.getDataDecrypt(this.gameKey + this.indexString, this.pwd) : s.CacheUtils.getData(this.gameKey + this.indexString), this.lottyIndexs = t ? c.Utils.jsonToMap(t) : new Map
                    }
                    null == this.lottyIdNumMap && (t = null, t = this.ecrypt ? s.CacheUtils.getDataDecrypt(this.gameKey + this.numString, this.pwd) : s.CacheUtils.getData(this.gameKey + this.numString), this.lottyIdNumMap = t ? c.Utils.jsonToMap(t) : new Map)
                }, e.prototype.initData = function () {
                    this.getMapData(), r.EventMgr.getInstance().on(u.CommonEventName.callRefreshTick, this, this.refreshTickNum)
                }, e.prototype.getLottyNum = function () {
                    return this.data.lottyNum
                }, e.prototype.addLottyNum = function () {
                    this.data.lottyNum += 1, this.saveData()
                }, e.prototype.createData = function () {
                    this.data = new d, this.data.lottyNum = 0, this.data.dontMustIds = [];
                    var t = p.ComDataMgr.getInstance().getCommonParam(p.CommonParamType.defTickNum);
                    return this.data.lottyTickNum = t, this.data
                }, e.prototype.getGirldIdIndex = function (t) {
                    return this.lottyIndexs.has(t) ? Number(this.lottyIndexs.get(t)) : 0
                }, e.prototype.setGirldReward = function (t, e) {
                    this.lottyIndexs.set(t, e), this.saveMapData()
                }, e.prototype.addLottyIdOutNum = function (t) {
                    var e = 1;
                    this.lottyIdNumMap.has(t) && (e = this.lottyIdNumMap.get(t) + 1), this.lottyIdNumMap.set(t, e), this.saveNumMapData()
                }, e.prototype.getLottyIdOutNum = function (t) {
                    var e = 1;
                    return this.lottyIdNumMap.has(t) ? e = this.lottyIdNumMap.get(t) : this.lottyIdNumMap.set(t, e), e
                }, e.prototype.getInDontMust = function (t) {
                    for (var e = 0; e < this.data.dontMustIds.length; e++) if (this.data.dontMustIds[e] == t) return !0;
                    return !1
                }, e.prototype.addInDontMust = function (t) {
                    this.data.dontMustIds.push(t), this.saveData()
                }, e.prototype.getLottyTickNum = function () {
                    return this.data.lottyTickNum
                }, e.prototype.refreshTickNum = function (t, e) {
                    if (e) this.data.lottyTickNum += t; else {
                        if (this.data.lottyTickNum < t) return !1;
                        this.data.lottyTickNum -= t
                    }
                    r.EventMgr.getInstance().emit(u.CommonEventName.RefreshTickNum, t, e), this.saveData()
                }, e.prototype.saveMapData = function () {
                    var t = c.Utils.mapToJson(this.lottyIndexs);
                    this.ecrypt ? s.CacheUtils.saveDataEncrypt(this.gameKey + this.indexString, t, this.pwd) : s.CacheUtils.saveData(this.gameKey + this.indexString, t)
                }, e.prototype.saveNumMapData = function () {
                    var t = c.Utils.mapToJson(this.lottyIdNumMap);
                    this.ecrypt ? s.CacheUtils.saveDataEncrypt(this.gameKey + this.numString, t, this.pwd) : s.CacheUtils.saveData(this.gameKey + this.numString, t)
                }, e
            }(o.BaseData);
        a.ComLottyData = h, cc._RF.pop()
    }, {
        "../../../scripts/framework/base/BaseData": "BaseData",
        "../../../scripts/framework/manager/EventMgr": "EventMgr",
        "../../../scripts/framework/utils/CacheUtils": "CacheUtils",
        "../../../scripts/framework/utils/Utils": "Utils",
        "../../../scripts/game/config/Config": "Config",
        "../config/CommonCfg": "CommonCfg",
        "../manager/ComDataMgr": "ComDataMgr"
    }],
    ComPlayerMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "1cc6cpUCMFChLaWr6d16f4v", "ComPlayerMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.ComPlayerMgr = void 0;
        var n = t("../../../scripts/framework/manager/EventMgr"), i = t("../../../scripts/framework/manager/UIMgr"),
            o = t("../CommonBirge"), r = t("../config/CommonCfg"), s = t("../datas/ComCollectionData"),
            c = t("../datas/ComFreeTimeData"), l = t("../datas/ComLottyData"), u = t("../datas/ComSignData"),
            p = t("./ComDataMgr"), d = function () {
                function t() {
                    this.isPreload = !1
                }

                return t.getInstance = function () {
                    return null == this.instance && (this.instance = new t, this.instance.initData()), this.instance
                }, t.prototype.initData = function () {
                    n.EventMgr.getInstance().on(r.CommonEventName.AddCollection, this, this.addCollection)
                }, t.prototype.preload = function (t) {
                    this.isPreload || (this.isPreload = !0, this.signData = new u.ComSignData, this.signData.getData(), this.lottyData = new l.ComLottyData, this.lottyData.getData(), this.collectionData = new s.ComCollectionData, this.collectionData.getData(), this.freeTimeData = new c.ComFreeTimeData, this.freeTimeData.getData(), t && t())
                }, t.prototype.getSignData = function () {
                    return this.signData
                }, t.prototype.getLottyData = function () {
                    return this.lottyData
                }, t.prototype.getCollectionData = function () {
                    return this.collectionData
                }, t.prototype.getFreeTimeData = function () {
                    return this.freeTimeData
                }, t.prototype.checkOpenReward = function (t, e, a, n) {
                    void 0 === a && (a = !0), void 0 === n && (n = 1);
                    for (var o = t.split(r.CommonCfg.splitCount), s = 0; s < o.length; s++) if (!(o[s].length <= 0)) {
                        var c = o[s].split(r.CommonCfg.splitNum), l = Number(c[0]), u = Number(c[1]);
                        2 == p.ComDataMgr.getInstance().getGoodsById(l).rewardtype ? i.UIMgr.getInstance().openUI(r.ComUIID.UIReward, -2, l + "", u * n, a) : this.addReward(t, n, a, e)
                    }
                }, t.prototype.addReward = function (t, e, a, i) {
                    void 0 === e && (e = 1), void 0 === a && (a = !0);
                    for (var s = t.split(r.CommonCfg.splitCount), c = 0; c < s.length; c++) if (!(s[c].length <= 0)) {
                        var l = s[c].split(r.CommonCfg.splitNum), u = Number(l[0]), d = Number(l[1]) * e,
                            h = p.ComDataMgr.getInstance().getGoodsById(Number(u));
                        switch (a && this.collectionData.addData(u, d), Number(h.type)) {
                            case 1:
                                n.EventMgr.getInstance().emit(r.CommonEventName.callRefreshTick, d, !0)
                        }
                    }
                    o.CommonBrige.Instance().addReward(t, e, i)
                }, t.prototype.addCollection = function (t, e) {
                    this.collectionData.addData(t, e)
                }, t
            }();
        a.ComPlayerMgr = d, cc._RF.pop()
    }, {
        "../../../scripts/framework/manager/EventMgr": "EventMgr",
        "../../../scripts/framework/manager/UIMgr": "UIMgr",
        "../CommonBirge": "CommonBirge",
        "../config/CommonCfg": "CommonCfg",
        "../datas/ComCollectionData": "ComCollectionData",
        "../datas/ComFreeTimeData": "ComFreeTimeData",
        "../datas/ComLottyData": "ComLottyData",
        "../datas/ComSignData": "ComSignData",
        "./ComDataMgr": "ComDataMgr"
    }],
    ComSignData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "0e2c3INcqdJXJe8AbOCzi36", "ComSignData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.ComSignData = void 0;
        var o = t("../../../scripts/framework/base/BaseData"), r = t("../../../scripts/framework/manager/EventMgr"),
            s = t("../../../scripts/framework/utils/TimeUtils"), c = t("../../../scripts/game/config/Config"),
            l = t("../config/CommonCfg"), u = function () {
                this.lastSignTime = -1, this.firstLoginTime = -1, this.firstLoginDayTime = -1
            }, p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ecrypt = !1, e.gameKey = c.GameConfig.AppCacheName + "sign", e.curentDay = 1, e.redshowing = !1, e.canSign = !1, e
                }

                return i(e, t), e.prototype.createData = function () {
                    return this.data = new u, this.data.firstLoginTime = s.TimeUtils.GetTimeBySecond(), this.data.firstLoginDayTime = s.TimeUtils.dayStart(), this.data.alredyIdx = [], this.curentDay = 1, this.saveData(), this.data
                }, e.prototype.initData = function (t) {
                    if (!t) {
                        var e = s.TimeUtils.overDay(this.data.firstLoginDayTime);
                        e <= 0 && (e = 0), this.curentDay = e + 1
                    }
                }, e.prototype.getCurentDay = function () {
                    return this.curentDay
                }, e.prototype.getAlredySign = function () {
                    return this.data.alredyIdx
                }, e.prototype.checkIsSigned = function (t) {
                    for (var e = 0; e < this.data.alredyIdx.length; e++) if (t == this.data.alredyIdx[e]) return !0;
                    return !1
                }, e.prototype.checkReissue = function (t) {
                    return t < this.curentDay
                }, e.prototype.checkCanSign = function (t) {
                    return t == this.curentDay
                }, e.prototype.startSign = function (t) {
                    this.data.alredyIdx.push(t), this.data.lastSignTime = s.TimeUtils.GetTimeBySecond(), this.saveData(), this.checkShowRed()
                }, e.prototype.checkTodyCanSign = function () {
                    if (this.data.alredyIdx.length >= 7) return !1;
                    for (var t = 1; t < this.curentDay; t++) if (!this.checkIsSigned(t)) return !0;
                    if (this.data.lastSignTime > 10 && s.TimeUtils.compareIsToday(this.data.lastSignTime)) {
                        for (t = 0; t < this.data.alredyIdx.length; t++) if (this.curentDay == this.data.alredyIdx[t]) return !1;
                        return !0
                    }
                    return this.checkCanSign(this.curentDay)
                }, e.prototype.checkShowRed = function () {
                    var t = this.checkTodyCanSign();
                    t ? this.redshowing || (this.redshowing = !0, r.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !0)) : this.redshowing && (this.redshowing = !1, r.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !1)), this.canSign = t
                }, e.prototype.getCanSigned = function () {
                    return this.canSign
                }, e
            }(o.BaseData);
        a.ComSignData = p, cc._RF.pop()
    }, {
        "../../../scripts/framework/base/BaseData": "BaseData",
        "../../../scripts/framework/manager/EventMgr": "EventMgr",
        "../../../scripts/framework/utils/TimeUtils": "TimeUtils",
        "../../../scripts/game/config/Config": "Config",
        "../config/CommonCfg": "CommonCfg"
    }],
    CombatUnitCtrl: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "0ab52rwfVVIb5wagMquoDos", "CombatUnitCtrl");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.dieData = a.zombieAni = a.UnitStatus = void 0;
        var r, s, c = t("../../framework/base/BaseCtrl"), l = t("../../framework/manager/PoolMgr"),
            u = t("../../framework/manager/TweenMgr"), p = t("../../framework/utils/Utils"), d = t("../config/Config"),
            h = t("../global/Global"), g = t("../manager/DataMgr"), f = t("../manager/LevelMgr"),
            m = t("../manager/MapMgr"), y = t("../manager/PlayerMgr"), v = cc._decorator, I = v.ccclass;
        v.property, function (t) {
            t[t.Prepare = 1] = "Prepare", t[t.Move = 2] = "Move", t[t.Attack = 3] = "Attack", t[t.Stop = 4] = "Stop", t[t.Overload = 5] = "Overload", t[t.Jump = 6] = "Jump", t[t.Call = 7] = "Call", t[t.Die = 8] = "Die", t[t.End = 9] = "End", t[t.Transit = 10] = "Transit"
        }(r = a.UnitStatus || (a.UnitStatus = {})), function (t) {
            t.none = "none", t.attack = "attack", t.attack2 = "attack2", t.die = "die", t.die2 = "die2", t.move = "move", t.move2 = "move2", t.switch = "switch", t.call = "call", t.ani1_1 = "ani1_1", t.ani1_2 = "ani1_2", t.ani2_1 = "ani2_1", t.ani2_2 = "ani2_2", t.ani3_1 = "ani3_1", t.ani3_2 = "ani3_2"
        }(s = a.zombieAni || (a.zombieAni = {}));
        a.dieData = function () {
        };
        var _ = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.crit = 0, e.critDam = 1, e.hit = 1, e.debuffArr = [], e.burnArray = {
                    burn: [],
                    time: 1
                }, e.Status = r.Prepare, e.double = 1, e.UnDamage = .5, e.isLoseShield = !1, e.zombieNowAni = s.none, e.beforeStatus = r.Prepare, e._material = null, e._time = -1, e.duration = .5, e._median = e.duration / 2, e.otherSpeed = 0, e.otherAttackTrue = !1, e
            }

            return i(e, t), e.prototype.setProperty = function (t, e, a, n, i, o) {
                var s = this;
                switch (this.unitData = JSON.parse(JSON.stringify(t)), this.skillData = JSON.parse(JSON.stringify(e)), this.unitType) {
                    case 1:
                        if (h.Global.newPlantInborn) {
                            var c = y.PlayerMgr.getInstance().getNewInbornData();
                            this.attack = this.unitData.Attack * (1 + c.getNewInbornByType(1).allAddition / 100), this.currentBoold = this.unitData.MaxHp * (1 + c.getNewInbornByType(2).allAddition / 100), this.crit = this.unitData.Crit * (1 + c.getNewInbornByType(2).allAddition / 100), this.critDam = this.unitData.CritDam * (1 + c.getNewInbornByType(4).allAddition / 100), this.dodge = this.unitData.Dodge * (1 + c.getNewInbornByType(5).allAddition / 100)
                        } else {
                            var l = g.DataMgr.getInstance().getAllInbornCfg(),
                                u = y.PlayerMgr.getInstance().getUserData().getinbornData();
                            this.attack = this.unitData.Attack * (1 + u[0].inbornLevel * l[0].IncreasePerLevel / 100), this.currentBoold = this.unitData.MaxHp * (1 + u[1].inbornLevel * l[1].IncreasePerLevel / 100), this.crit = this.unitData.Crit * (1 + u[2].inbornLevel * l[2].IncreasePerLevel / 100), this.critDam = this.unitData.CritDam * (1 + u[3].inbornLevel * l[3].IncreasePerLevel / 100), this.dodge = this.unitData.Dodge * (1 + u[4].inbornLevel * l[4].IncreasePerLevel / 100)
                        }
                        break;
                    case 2:
                        this.attack = this.unitData.Attack * f.LevelMgr.getInstance().levelData.AttackMultiple, this.currentBoold = this.unitData.MaxHp * f.LevelMgr.getInstance().levelData.HpMultiple, this.crit = this.unitData.Crit, this.critDam = this.unitData.CritDam, this.dodge = this.unitData.Dodge
                }
                this.currentShield = this.skillData.Shield ? this.currentBoold * (Number(this.skillData.Shield) / 100) : 0, this.attackSpeed = this.skillData.LaunchInterval || .5, 310013 != t.ID && (this.Status = r.Prepare), this.isDestroy = !1, o || (this.skillData.FriendlyDeathAddAttack || this.skillData.EnemyDeathAddAttack) && this.addEvent(d.EventName.unitDie, function (t) {
                    t.type == s.unitType && s.skillData.FriendlyDeathAddAttack ? s.attack += Number(s.skillData.FriendlyDeathAddAttack.split(",")[0]) / 100 * s.unitData.Attack : s.skillData.EnemyDeathAddAttack && (s.attack += Number(s.skillData.EnemyDeathAddAttack.split(",")[0]) / 100 * s.unitData.Attack)
                }), this.loadResFromBundle("common", "flash", cc.Material, function (t) {
                    s.node.getComponent(sp.Skeleton).setMaterial(0, t)
                }), this.UnDamage = .5, this.addEvent(d.EventName.endGame, function () {
                    s.Status = r.End
                })
            }, e.prototype.getProperty = function () {
                return this.unitData
            }, e.prototype.getSkill = function () {
                return this.skillData
            }, e.prototype.damageReceive = function (t, e, a, n) {
                var i = this;
                if (!(this.UnDamage > 0 || null != this.skillData.NotBeTargeted || this.Status == r.Die || this.Status == r.Prepare)) if (!e.MustHit && this.hit - this.dodge < 1 && p.Utils.randomRang(0, 100) > 100 * (this.hit - this.dodge)) this.loadPrefab("prefabs", "game/dodgeNode", function (t) {
                    var e = cc.instantiate(t);
                    e.x = 1 == i.unitType ? i.node.parent.x : i.node.x, e.y = i.node.parent.y + .5 * i.node.height, e.active = !0, e.parent = m.MapMgr.getInstance().effectLayer, cc.tween(e).by(1, {y: 100}).call(function () {
                        e.active = !1, e.destroy()
                    }).start()
                }); else {
                    var o = t;
                    if (this._material = this.node.getComponent(sp.Skeleton).getMaterial(0), "flash (Instance)" == this._material.name && this._time <= 0 && (this._material.setProperty("u_rate", 1), this._time = this.duration), e.FrostAddAttack) for (var s = 0; s < this.debuffArr.length; s++) if (1 == this.debuffArr[s].id) {
                        o *= 1 + Number(e.FrostAddAttack) / 100;
                        break
                    }
                    if (e.Frost) {
                        var c = e.Frost.split(",");
                        if (this.debuffArr.length > 0) {
                            for (var l = !1, u = 0; u < this.debuffArr.length; u++) 1 == this.debuffArr[u].id && (this.debuffArr[u].cd, Number(c[2]), l = !0);
                            l || this.addDebuff(1, Number(c[2]), [Number(c[0]), Number(c[1])])
                        } else this.addDebuff(1, Number(c[2]), [Number(c[0]), Number(c[1])])
                    }
                    if (e.ProbabilityStun && !this.skillData.ImmunityDizzy) {
                        var d = e.ProbabilityStun.split(",");
                        if (p.Utils.randomRang(0, 100) <= Number(d[0])) {
                            var h = Number(d[this.unitData.HabitusType]);
                            this.addDebuff(2, h)
                        }
                    }
                    if (e.ProbabilityFreeze && !this.skillData.ImmunityDizzy) {
                        var g = e.ProbabilityFreeze.split(",");
                        p.Utils.randomRang(0, 100) <= Number(g[0]) && (h = Number(g[this.unitData.HabitusType]), this.addDebuff(3, h))
                    }
                    if (e.CartridgeAddAttack && (o *= 1 + Number(e.CartridgeAddAttack) / 100), this.skillData.AttributeDerate) {
                        var f = this.skillData.AttributeDerate.split(",");
                        e.Attribute == Number(f[0]) && (o *= 1 - Number(f[1]) / 100)
                    }
                    this.loseBoold(o, e, null == e.LgnoreShield, n);
                    var y = e.HitBurn;
                    if (y) {
                        var v = y.split(",");
                        this.setBurn(v, a, t)
                    }
                }
            }, e.prototype.setBurn = function (t, e, a) {
                var n = Number(t[1]), i = 8 * e[0] + e[1];
                if (this.burnArray.burn[i]) this.burnArray.burn[i].burnNum = this.burnArray.burn[i].burnNum >= n ? n : this.burnArray.burn[i].burnNum + 1; else {
                    var o = {burnNum: 1, attackNum: Number(t[0]) * a / 100};
                    this.node.getChildByName("burn").active = !0, this.node.getChildByName("frost").y = this.node.height / 3 + 10, this.burnArray.burn[i] = o
                }
            }, e.prototype.countCrit = function (t) {
                return this.stoAddAttack && (t = t * (this.stoAddAttack.add / 100) * this.stoAddAttack.plies, this.stoAddAttack.plies = 0), p.Utils.randomRang(0, 100) > 100 * this.crit ? t : t * this.critDam
            }, e.prototype.detectionDamage = function () {
            }, e.prototype.doDamage = function () {
            }, e.prototype.addDebuff = function (t, e, a, n, i) {
                for (var o = 0; o < this.debuffArr.length; o++) {
                    var r = this.debuffArr[o];
                    if (r.id == t) return r.cd = e, void (r.time = i)
                }
                this.debuffArr.push({id: t, cd: e, pro: a, num: n, time: i}), this.disposeDebuff()
            }, e.prototype.setDebuff = function (t) {
                switch (this.Status != r.Stop && (this.node.getComponent(sp.Skeleton).paused = !1), t.id) {
                    case 1:
                        if (this.Status == r.Stop) return;
                        this.node.getChildByName("frost").active = !0, this.node.getChildByName("frost").y = this.node.height / 3, this.Status = r.Move, this.speed = (this.unitData.MovingSpeed || 0) * (1 - t.pro[0] / 100) * this.double >= this.speed ? this.speed : (this.unitData.MovingSpeed || 0) * (1 - t.pro[0] / 100) * this.double, this.attackSpeed = (this.skillData.LaunchInterval || .5) * (1 + t.pro[1] / 100) * this.double >= this.attackSpeed ? this.attackSpeed : (this.skillData.LaunchInterval || .5) * (1 + t.pro[1] / 100) * this.double;
                        break;
                    case 2:
                        if (this.Status == r.Die || this.Status == r.Prepare) return;
                        this.Status = r.Stop, this.node.getChildByName("dizzy").active = !0, this.node.getChildByName("dizzy").y = .7 * this.node.height, this.node.getComponent(sp.Skeleton).paused = !0, this.speed = 0, this.attackSpeed = 0;
                        break;
                    case 3:
                        if (this.Status == r.Die || this.Status == r.Prepare) return;
                        this.Status = r.Stop, this.node.getChildByName("freeze").active = !0, this.node.getChildByName("freeze").y = this.node.height / 3, this.node.getComponent(sp.Skeleton).paused = !0, this.speed = 0, this.attackSpeed = 0
                }
            }, e.prototype.disposeDebuff = function () {
                var t = this;
                0 == this.debuffArr.length && (this.Status = r.Move, this.node.getComponent(sp.Skeleton).paused = !1, this.speed = (this.unitData.MovingSpeed || 0) * this.double, this.attackSpeed = (this.skillData.LaunchInterval || .5) * this.double), this.debuffArr.forEach(function (e) {
                    t.setDebuff(e)
                })
            }, e.prototype.loseBoold = function (t) {
                this.currentShield -= t, this.currentShield <= 0 && this.losedShield()
            }, e.prototype.unitDie = function (e, a, n, i) {
                var o = {
                    type: e,
                    DeathCall: this.skillData.DeathCall,
                    BeReborn: this.skillData.BeReborn,
                    plantLayerId: a,
                    compoundPlant: i,
                    plantLevel: this.unitData.Level,
                    arrIdx: n
                };
                this.node.active = !1, t.prototype.onDestroy.call(this), this.debuffArr = [], this.burnArray.burn = [], this.double = 1, this._time = -1, this._material && "flash (Instance)" == this._material.name && this._material.setProperty("u_rate", 1), this.node.off(cc.Node.EventType.TOUCH_END), this.node.children.forEach(function (t) {
                    t.active = !1
                }), this.isLoseShield = !1, this.zombieNowAni = s.none, this.Status = r.Die, this.sendEvent(d.EventName.unitDie, o), l.PoolMgr.getInstance().freeNode("" + this.node.name, this.node), this.Status = r.Prepare
            }, e.prototype.losedShield = function () {
                if (this.Status != r.Die && this.Status != r.Prepare) {
                    if (this.isLoseShield = !0, this.skillData.ShielDdestroyEffect) {
                        var t = this.skillData.ShielDdestroyEffect.split(",");
                        switch (Number(t[0])) {
                            case 1:
                                this.dodge += .75;
                                break;
                            case 2:
                                this.double = 2, this.disposeDebuff()
                        }
                    }
                    this.beforeStatus = this.Status, this.Status = r.Stop, this.zombieNowAni != s.die && this.zombieNowAni != s.die2 && (this.zombieNowAni = s.switch, this.node.getComponent(sp.Skeleton).setAnimation(0, this.zombieNowAni, !1))
                }
            }, e.prototype.update = function (t) {
                if (this.Status != r.End) {
                    if (this.burnArray.burn.length > 0 && (this.burnArray.time -= t, this.burnArray.time <= 0)) {
                        this.burnArray.time = 1;
                        var e = 0;
                        this.burnArray.burn.forEach(function (t) {
                            e += t.burnNum * t.attackNum
                        }), this.loseBoold(e)
                    }
                    if (this._time > 0) {
                        this._time -= t, this._time = this._time < 0 ? 0 : this._time;
                        var a = 2 * Math.abs(this._time - this._median) / this.duration;
                        this._material.setProperty("u_rate", a)
                    }
                    if (this.UnDamage -= t, (this.Status == r.Attack && -1 != this.attackSpeed || this.skillData && this.skillData.SkillPriority) && (this.attackSpeed -= t, this.otherAttackTrue && this.otherSpeed > 0 && (this.otherSpeed -= t), this.attackSpeed <= 0)) {
                        if (this.skillData.OperateTransmit) return this.attackSpeed = -1, this.node.getChildByName("ready").active = !0, void u.TweenMgr.getInstance().playHeartAni(this.node.getChildByName("ready"));
                        if (this.attackSpeed = this.skillData.LaunchInterval || 1, this.skillData.SkillPriority) {
                            this.otherSpeed <= 0 && (this.otherAttackTrue = !1);
                            var n = this.otherAttackTrue && this.otherSpeed > 0 ? Number(this.skillData.SkillPriority.split(",")[1]) : Number(this.skillData.SkillPriority.split(",")[0]),
                                i = this.otherAttackTrue && this.otherSpeed > 0 ? 1 : 0;
                            this.skillData = g.DataMgr.getInstance().getSkillLevelCfgById(n), this.attackSpeed = g.DataMgr.getInstance().getSkillLevelCfgById(Number(this.skillData.SkillPriority.split(",")[1])).LaunchInterval || 1, this.otherSpeed = this.otherAttackTrue && this.otherSpeed > 0 ? this.otherSpeed : this.skillData.LaunchInterval || 1, this.detectionDamage(i)
                        } else this.detectionDamage()
                    }
                    for (var o = 0; o < this.debuffArr.length; o++) {
                        var s = this.debuffArr[o];
                        if (-1 != s.cd) {
                            if (s.cd -= t, s.cd <= 0) {
                                switch (s.id) {
                                    case 1:
                                        this.node.getChildByName("frost").active = !1;
                                        break;
                                    case 2:
                                        this.node.getChildByName("dizzy").active = !1, this.Status = r.Transit;
                                        break;
                                    case 3:
                                        this.node.getChildByName("freeze").active = !1, this.Status = r.Transit
                                }
                                this.debuffArr.splice(o, 1), this.disposeDebuff(), o--
                            }
                        } else s.time <= 0 && (this.debuffArr.splice(o, 1), this.disposeDebuff(), o--)
                    }
                }
            }, o([I], e)
        }(c.default);
        a.default = _, cc._RF.pop()
    }, {
        "../../framework/base/BaseCtrl": "BaseCtrl",
        "../../framework/manager/PoolMgr": "PoolMgr",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/MapMgr": "MapMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    Combat: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "f4928C0EQVPuZURTpgfN3op", "Combat");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.PlantCall = void 0;
        var r, s = t("../../framework/manager/LogMgr"), c = t("../../framework/base/BaseCtrl"),
            l = t("../../framework/manager/PoolMgr"), u = t("../manager/PlayerMgr"), p = t("./Zombie"),
            d = t("./Plants"), h = t("../config/Config"), g = t("../../framework/utils/Utils"),
            f = t("../manager/MapMgr"), m = t("../manager/LevelMgr"), y = t("./CombatUnitCtrl"),
            v = t("../../framework/manager/UIMgr"), I = t("../manager/DataMgr"),
            _ = t("../../framework/manager/AudioMgr"), b = t("../../framework/utils/UIUtils"),
            C = t("../../framework/manager/EventMgr"), D = t("../../commonModel/config/CommonCfg"),
            M = t("../../framework/configs/Appcfg"), k = t("../../framework/manager/SdkMgr"), N = t("../ui/UIGuide"),
            w = t("../datas/TrackDataEvent"), S = t("../global/Global"), P = t("./Choose"),
            T = t("../manager/EquipMgr"), U = cc._decorator, A = U.ccclass, B = U.property;
        (function (t) {
            t[t.attack = 0] = "attack", t[t.idle = 1] = "idle"
        })(r || (r = {}));
        a.PlantCall = function () {
        };
        var L = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.plantLayer = null, e.zombieLayer = null, e.bulletLayer = null, e.callLayer = null, e.effectLayer = null, e.recycle = null, e.ljfBtn = null, e.plantPicLayer = null, e.clickLayer = null, e.progressBar = null, e.zombieHear = null, e.returnBtn = null, e.tips = null, e.tipsSkill = null, e.synLight = null, e.startGameFrame = null, e.sunFrame = null, e.cellLock = null, e.cellUnLockBtn = null, e.daifu = null, e.num = 0, e.plantColliderArray = [], e.basePlantArr = [], e.compoundPlantArr = [], e.raceData = {}, e.compoundMap = new Map, e.levelId = 610010, e.waveArr = [], e.zombieWave = [], e.Interval = -1, e.zombieInterval = -1, e.pressTime = 0, e.canMove = !1, e.bulletStartPointArr = {
                    110001: [[56, 10]],
                    110011: [[80, 40], [56, 5], [-5, 25]],
                    110012: [[56, 10]],
                    110013: [[80, 100], [80, 75], [80, 50], [80, 25], [80, 0], [-20, 100], [-20, 75], [-20, 50], [-20, 25], [-20, 0]],
                    110014: [[56, 60]],
                    110003: [[56, 10]],
                    110019: [[56, 22]],
                    110021: [[85, 55]],
                    110024: [[35, 75]],
                    110026: [[-5, 113], [45, 115], [80, 105]],
                    110007: [[25, 135]],
                    110035: [[60, 60]],
                    110036: [[-13, 165], [-2, 155], [2, 167]],
                    110038: [[45, 73], [120, 78]],
                    110008: [[0, 140]],
                    110039: [[0, 110], [20, 95], [30, 70], [-10, 100], [-45, 70]],
                    110040: [[0, 117]],
                    110041: [[75, 100]],
                    110042: [[70, 110]],
                    110051: [[85, 75]],
                    110052: [[105, 30]],
                    110055: [[125, 40]],
                    110056: [[125, 40]],
                    110057: [[40, 95]],
                    110059: [[120, 55]],
                    110060: [[100, 95]],
                    110062: [[130, 100]],
                    110063: [[150, 20]],
                    110065: [[85, 195]]
                }, e.isGameStart = !1, e.isLast = !1, e.isEnd = !1, e.plantIsLoad = !1, e.plantItem = null, e.isMove = !1, e._isClick = !1, e._isGuide = !1, e._guideEndCell = null, e._guideEndId = [], e.createZombieNum = 0, e
            }

            return i(e, t), e.prototype.start = function () {
                var t = this;
                S.Global.boxDrop && (S.Global.boxDropNum = Number(I.DataMgr.getInstance().getAllParamsCfg()[7].value)), _.AudioMgr.getInstance().stopMusic(h.AudioId.bgMain), _.AudioMgr.getInstance().playMusic(h.AudioId.bgComabt, "bgComabt"), this.node.getChildByName("UILoadCombat").active = !0, this.levelId = m.LevelMgr.getInstance().levelData.LevelId, u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.start_x, m.LevelMgr.getInstance().levelData.ChapterId + "-" + m.LevelMgr.getInstance().levelData.Level), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.lv_start_X, m.LevelMgr.getInstance().levelData.ChapterId + "-" + m.LevelMgr.getInstance().levelData.Level);
                var e = u.PlayerMgr.getInstance().getSignData();
                e.getCurentDay() <= 7 && (u.PlayerMgr.getInstance().getTrackData().trackDayz(w.TrackId.dayz_start_x, e.getCurentDay(), m.LevelMgr.getInstance().levelData.ChapterId + "-" + m.LevelMgr.getInstance().levelData.Level), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.dayz_lv_start_X, e.getCurentDay(), m.LevelMgr.getInstance().levelData.ChapterId + "-" + m.LevelMgr.getInstance().levelData.Level)), this.loadPrefab("prefabs", "game/plants", function (e) {
                    t.plantItem = cc.instantiate(e), l.PoolMgr.getInstance().creatrePool("plants", t.plantItem, 10), t.plantIsLoad = !0
                }), this.loadPrefab("prefabs", "game/zombie", function (t) {
                    var e = cc.instantiate(t);
                    l.PoolMgr.getInstance().creatrePool("zombie", e, 10)
                }), this.loadPrefab("prefabs", "game/bullet", function (t) {
                    var e = cc.instantiate(t);
                    l.PoolMgr.getInstance().creatrePool("bullet", e, 30)
                }), this.loadPrefab("prefabs", "game/gold", function (t) {
                    var e = cc.instantiate(t);
                    l.PoolMgr.getInstance().creatrePool("gold", e, 30)
                }), I.DataMgr.getInstance().getAllHeroCfg().forEach(function (e) {
                    1 == e.Type || 2 == e.Type && t.compoundPlantArr.push(e)
                }), this.userData = u.PlayerMgr.getInstance().getUserData(), this.lockData = u.PlayerMgr.getInstance().getLockData(), this.guideCfgArr = I.DataMgr.getInstance().getAllGuideCfg(), this.compoundMap = m.LevelMgr.getInstance().getCompoundMap(), this.plantData = this.userData.getPlantData(), this.init(), this.initListen(), this.changeCellLock(), this.initBtn(), this.initPlantPic()
            }, e.prototype.initListen = function () {
                var t = this;
                this.addEvent(h.EventName.closeUI, function (e) {
                    if (e(), t.isGameStart) t.sendEvent(h.EventName.endGame), t.gameOver(!1); else {
                        t.node.active = !1, t.node.destroy(), _.AudioMgr.getInstance().stopMusic(h.AudioId.bgComabt), _.AudioMgr.getInstance().playMusic(h.AudioId.bgMain, "bgComabt");
                        var a = cc.find("uiRoot/UICombat");
                        if (cc.find("uiRoot/UIHome").active = !0, u.PlayerMgr.getInstance().isLock = !1, !a) return;
                        a.getComponent("UICombat").closeUI()
                    }
                }), this.addEvent(M.BaseEventName.CloseUI, function () {
                    t._isClick = !1
                }), this.addEvent(h.EventName.unitDie, function (e) {
                    var a;
                    if (s.LogMgr.getInstance().debug(lang.index60eed_32, e), 1 == e.type) {
                        if (e.DeathCall) {
                            var n = l.PoolMgr.getInstance().getNode("plants");
                            n.active = !0, n.getComponent(d.default) || n.addComponent(d.default), a = n.getComponent(d.default);
                            var i = I.DataMgr.getInstance().getHeroCfgById(Number(e.DeathCall));
                            t.loadResFromBundle(i.BunleName, i.Model + "/" + i.Model, sp.SkeletonData, function (t) {
                                n.getComponent(sp.Skeleton).skeletonData = t, n.getComponent(sp.Skeleton).setAnimation(0, "idle", !0)
                            }), n.scale = .4, n.getChildByName("choose").getComponent(P.default).nowScale = 2.5, n.getChildByName("choose").y = 100;
                            var o = 2 == i.Type ? t.compoundPlantArr.indexOf(i) : t.basePlantArr.indexOf(i);
                            t.setPlant(e.plantLevel, a, e.plantLayerId, 2 == i.Type, o, null), a.Status = y.UnitStatus.Attack
                        }
                        e.BeReborn && t.scheduleOnce(function () {
                            if (!t.isEnd) {
                                var n, i = t.plantLayer.children[e.plantLayerId[0]].children[e.plantLayerId[1]];
                                if ((n = i.children.length > 0 ? i.children[0] : l.PoolMgr.getInstance().getNode("plants")).active = !0, n.getComponent(d.default) || n.addComponent(d.default), !e.compoundPlant) {
                                    var o = t.basePlantArr[e.arrIdx];
                                    t.loadResFromBundle(o.BunleName, o.Model + "/" + o.Model, sp.SkeletonData, function (n) {
                                        var i = cc.instantiate(t.synLight);
                                        i.y = a.node.y, i.parent = t.plantLayer.children[e.plantLayerId[0]].children[e.plantLayerId[1]], i.getComponent(sp.Skeleton).setAnimation(0, "animation", !1), _.AudioMgr.getInstance().playEffect(h.AudioId.Synthesis1), i.getComponent(sp.Skeleton).setCompleteListener(function (t) {
                                            i.destroy(), "animation" == t.animation.name && (a.node.getComponent(sp.Skeleton).skeletonData = n, a.node.getComponent(sp.Skeleton).setAnimation(0, "idle", !0))
                                        })
                                    }), n.scale = .4, n.getChildByName("choose").getComponent(P.default).nowScale = 2.5, n.getChildByName("choose").y = 100
                                }
                                a = n.getComponent(d.default), t.setPlant(e.plantLevel, a, e.plantLayerId, e.compoundPlant, e.arrIdx, null), t.scheduleOnce(function () {
                                    a.Status = y.UnitStatus.Attack
                                }, .1), t.sendEvent(h.EventName.plantReborn)
                            }
                        }, Number(e.BeReborn))
                    }
                }), this.addEvent(h.EventName.getCombatResource, function (e) {
                    e == h.Currency.ljf && t.loadPrefab("prefabs", "game/tornado", function (e) {
                        t.bulletLayer.children.forEach(function (t) {
                            var a = cc.instantiate(e);
                            a.position = cc.Vec3.ZERO, a.y = -40, t.addChild(a)
                        })
                    })
                }), this.addEvent(h.EventName.startGame, this.startGame), this.addEvent(h.EventName.WaveEnd, this.waveEnd), this.addEvent(h.EventName.endGame, this.gameOver), this.addEvent(h.EventName.getSuperPlant, function (e, a) {
                    var n = u.PlayerMgr.getInstance().getSignData();
                    n.getCurentDay() <= 7 && u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.dayz_superplant, n.getCurentDay()), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.superplant), t.plantLayer.children.forEach(function (n, i) {
                        var o = l.PoolMgr.getInstance().getNode("plants").addComponent(d.default),
                            r = t.compoundPlantArr.indexOf(e);
                        o.isSuperPlant = !0, t.setPlant(a.Level, o, [i, 7], !0, r, null)
                    })
                }), this.addEvent(M.BaseEventName.OpenUI, function (e) {
                    if (e == h.UIID.UICombat) {
                        var a = u.PlayerMgr.getInstance().getGuideData();
                        !a.getGuideEnd() && a.getCurrentId() < 9 && a.getCurrentId() < 9 && (u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.guide3), t.startGuide([t.plantPicLayer.children[0], t.plantLayer.children[0].children[7]]), t._guideEndCell = t.plantLayer.children[0].children[7], t._guideEndId = [0, 7])
                    }
                }), this.addEvent(h.EventName.plantCall, function (e) {
                    var a, n = l.PoolMgr.getInstance().getNode("plants");
                    n.active = !0, n.getComponent(d.default) || n.addComponent(d.default), a = n.getComponent(d.default);
                    var i = I.DataMgr.getInstance().getHeroCfgById(Number(e.plantCall));
                    t.loadResFromBundle(i.BunleName, i.Model + "/" + i.Model, sp.SkeletonData, function (t) {
                        n.getComponent(sp.Skeleton).skeletonData = t, n.getComponent(sp.Skeleton).setAnimation(0, "idle", !0)
                    }), n.getChildByName("choose").y = 100;
                    var o = 2 == i.Type ? t.compoundPlantArr.indexOf(i) : t.basePlantArr.indexOf(i);
                    t.setPlant(e.plantLevel, a, e.plantLayerId, 2 == i.Type, o, null), a.Status = y.UnitStatus.Attack, t.scheduleOnce(function () {
                        t.sendEvent(h.EventName.plantReborn)
                    }, .5)
                })
            }, e.prototype.changeCellLock = function () {
                S.Global.initCellNum < 8 && this.userData.getNowCellNum() < 8 ? this.cellLock.width = 37 + 132 * (8 - this.userData.getNowCellNum()) : this.cellLock.active = !1
            }, e.prototype.initBtn = function () {
                var t = this;
                this.cellUnLockBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    k.SdkMgr.getInstance().playVideo(null, function () {
                        u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.room), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.room_X, 6 - (8 - t.userData.getNowCellNum())), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.lv_room_X_Y, 6 - (8 - t.userData.getNowCellNum()), m.LevelMgr.getInstance().levelData.ChapterId + "-" + m.LevelMgr.getInstance().levelData.Level), t.userData.addNowCellNum(), t.changeCellLock()
                    })
                }), this.ljfBtn.on(cc.Node.EventType.TOUCH_END, this.ljfBtnOn.bind(this)), this.recycle.on(cc.Node.EventType.TOUCH_END, this.recycleBtnOn.bind(this))
            }, e.prototype.startGuide = function (t) {
                var e = u.PlayerMgr.getInstance().getGuideData();
                this._isGuide = !0;
                var a = this.getCfg(e.getCurrentId() - 1, t, e);
                v.UIMgr.getInstance().openUI(h.UIID.UIGuide, h.UIID.UINone, a)
            }, e.prototype.getCfg = function (t, e) {
                var a = this, n = new N.UIGuideData, i = this.guideCfgArr[t];
                n.clickType = i.GuideType, n.isWeek = 0 == i.GuideObj, 0 == n.clickType ? (e = e, n.distNode = 0 == n.isWeek ? e : null) : (e = e, n.startNode = e[0], n.endNode = e[1]), n.tipstring = i.Describe, n.showHand = 1 == i.Finger, n.hideMask = 1 != i.Mask, n.showPlant = 1 == i.ShowPlant, n.lightType = 1, n.addSize = 0 == n.isWeek ? new cc.Size(40, 20) : new cc.Size(0, 0), 7 == t && (n.addSize = new cc.Size(0, 0)), this.guideCfgArr[t + 1] && i.GuideGroup == this.guideCfgArr[t + 1].GuideGroup ? n.callBack = function () {
                    var t;
                    switch (u.PlayerMgr.getInstance().getGuideData().addCurrentId(!1), u.PlayerMgr.getInstance().getGuideData().getCurrentId()) {
                        case 4:
                            u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.guide4), t = a.sunFrame;
                            break;
                        case 5:
                            t = [a.plantPicLayer.children[0], a.plantLayer.children[0].children[7]], a._guideEndCell = a.plantLayer.children[0].children[7], a._guideEndId = [0, 7];
                            break;
                        case 6:
                            u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.guide5), t = null;
                            break;
                        case 7:
                            t = S.Global.initCellNum < 8 ? [a.plantPicLayer.children[1], a.plantLayer.children[0].children[5]] : [a.plantPicLayer.children[1], a.plantLayer.children[0].children[3]], a._guideEndCell = S.Global.initCellNum < 8 ? a.plantLayer.children[0].children[5] : a.plantLayer.children[0].children[3], a._guideEndId = S.Global.initCellNum < 8 ? [0, 5] : [0, 3];
                            break;
                        case 8:
                            t = f.MapMgr.getInstance().startBtn
                    }
                    a.startGuide(t)
                } : (n.groupLast = !0, 18 == u.PlayerMgr.getInstance().getGuideData().getCurrentId() && this.startGame()), C.EventMgr.getInstance().off(h.EventName.GuideMoveEnd, this, function () {
                    n.finishMoveEnd = !0
                }), 1 == n.clickType && this.addEvent(h.EventName.GuideMoveEnd, function () {
                    n.finishMoveEnd = !0
                });
                var o = i.BubbleOffset.split(",");
                return n.tipsOffest = new cc.Vec2(Number(o[0]), Number(o[1])), n
            }, e.prototype.recycleBtnOn = function () {
                v.UIMgr.getInstance().openUI(h.UIID.UITips, h.UIID.UICombat, lang.index60eed_33)
            }, e.prototype.ljfBtnOn = function () {
                1 != this._isClick && (this._isClick = !0, v.UIMgr.getInstance().openUI(h.UIID.UIGetResource, h.UIID.UICombat, h.Currency.ljf))
            }, e.prototype.updatepressTime = function () {
                this.pressTime++, this.pressTime > 1 && (this.canMove = !0, this.unschedule(this.updatepressTime))
            }, e.prototype.init = function () {
                var t = this;
                f.MapMgr.getInstance().creatorMap(m.LevelMgr.getInstance().levelData, this.plantLayer, this.zombieLayer, this.bulletLayer, this.callLayer, this.effectLayer);
                var e = null, a = null, n = 3001;
                this.clickLayer.on(cc.Node.EventType.TOUCH_START, function (i) {
                    if (t.plantIsLoad && null == a && 1 != t.isGameStart) {
                        t.isMove = !1;
                        var o = i.getLocation();
                        t.plantPicLayer.parent, t.plantPicLayer.children.forEach(function (t) {
                            t.getChildByName("getBtn").active = !1, t.getChildByName("tips").y = 0
                        });
                        for (var r = null, s = function (e) {
                            if (0 == t.plantPicLayer.children[e].active) return "continue";
                            if (cc.Intersection.pointInPolygon(o, t.plantPicLayer.children[e].getComponent(cc.BoxCollider).world.points)) {
                                var r = t.plantPicLayer.children[e].children[0].children[0].getChildByName("limitNum").getComponent(cc.Label).string.split("/");
                                t.hideChoose(), t.plantPicLayer.children[e].getChildByName("choose").active = !0, t.tips.active = !0, t.tips.getChildByName("name").getComponent(cc.Label).string = t.basePlantArr[e].Name;
                                var s = I.DataMgr.getInstance().getHeroLevelById(Number(t.basePlantArr[e].LvScope.split(",")[0]));
                                if (t.tipsSkill.string = b.UIUtils.getSkillString(s), m.LevelMgr.getInstance().currentSun < Number(t.basePlantArr[e].SummonCost) && Number(r[0]) > 0) return v.UIMgr.getInstance().openUI(h.UIID.UIGetResource, h.UIID.UICombat, h.Currency.sun), a = null, {value: void 0};
                                if (Number(r[0]) <= 0) {
                                    var c = t.plantPicLayer.children[e].getChildByName("getBtn");
                                    return t.plantPicLayer.children[e].getChildByName("tips").y = 50, c.getChildByName("label").getComponent(cc.Label).string = Number(r[1]) <= 0 ? lang.index60eed_34 : lang.index60eed_35, c.active = !0, a = null, {value: void 0}
                                }
                                return null == (a = l.PoolMgr.getInstance().getNode("plants")) && (a = cc.instantiate(t.plantItem)), n = e, t.loadResFromBundle(t.basePlantArr[e].BunleName, t.basePlantArr[e].Model + "/" + t.basePlantArr[e].Model, sp.SkeletonData, function (n) {
                                    null != a && (t.canMove = !0, a.getComponent(sp.Skeleton).skeletonData = n, a.getComponent(sp.Skeleton).premultipliedAlpha = !1, lang.index60eed_36 == t.basePlantArr[e].Name && a.getComponent(sp.Skeleton).setSkin("skin_1"))
                                }), a.active = !0, a.scale = .4, a.getChildByName("choose").getComponent(P.default).nowScale = 2.5, a.getChildByName("choose").y = 100, a.x = i.touch._point.x - cc.winSize.width / 2, a.y = i.touch._point.y - cc.winSize.height / 2, a.parent = t.node, "break"
                            }
                        }, c = 0; c < t.plantPicLayer.children.length; c++) {
                            var u = s(c);
                            if ("object" == typeof u) return u.value;
                            if ("break" === u) break
                        }
                        if (i.touch._point.y > (cc.winSize.height - t.plantLayer.height) / 2 && i.touch._point.y < (cc.winSize.height + t.plantLayer.height) / 2) {
                            var p = f.MapMgr.getInstance().judge(o);
                            if (!p) return;
                            var g = t.plantLayer.children[p[0]].children[p[1]];
                            if (0 == g.children.length) return;
                            t.pressTime = 0, t.unschedule(t.updatepressTime), t.schedule(t.updatepressTime, .1), t.canMove = !1, t.hideChoose(), (a = g.children[0]).getChildByName("choose").active = !0, t.tips.active = !0;
                            var y = a.getComponent(d.default), _ = y.getProperty(), C = y.getSkill();
                            if (t.tips.getChildByName("name").getComponent(cc.Label).string = C.SkillName, t.tipsSkill.string = b.UIUtils.getSkillString(_), r = _.HeroId, !y.compoundPlant) for (c = 0; c < t.basePlantArr.length; c++) t.basePlantArr[c].ID == y.getProperty().HeroId && (n = c);
                            e = a.parent
                        }
                        t.findSyn(r)
                    }
                }), this.clickLayer.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
                    t.plantPicLayer.width >= t.plantPicLayer.parent.width && !t._isGuide && e.touch._point.y + e.getDeltaY() < t.plantPicLayer.height && (t.plantPicLayer.x += e.getDeltaX(), t.plantPicLayer.x = t.plantPicLayer.x < t.plantPicLayer.parent.width - t.plantPicLayer.width ? t.plantPicLayer.parent.width - t.plantPicLayer.width : t.plantPicLayer.x, t.plantPicLayer.x = t.plantPicLayer.x > 0 ? 0 : t.plantPicLayer.x), t.plantIsLoad && a && 1 != t.isGameStart && t.canMove && (t.isMove = !0, a.parent = t.node, a.x = e.touch._point.x - cc.winSize.width / 2, a.y = e.touch._point.y - cc.winSize.height / 2)
                }), this.clickLayer.on(cc.Node.EventType.TOUCH_CANCEL, function () {
                    t.plantIsLoad && (t.unschedule(t.updatepressTime), t.pressTime < 3 && 0 == t.canMove && (a = null, e = null), a && (null != e ? i() : (t.freePlant("plants", a), a = null)))
                });
                var i = function (t) {
                    void 0 === t && (t = e), a.x = 0, a.y = -40, a.parent = t, a = null, e = null
                };
                this.clickLayer.on(cc.Node.EventType.TOUCH_END, function (o) {
                    if (t.plantIsLoad && (t.unschedule(t.updatepressTime), t.pressTime < 3 && 0 == t.canMove && (a = null, e = null), a || t.isGameStart)) {
                        var r, c = o.getLocation();
                        if (t._isGuide ? t._guideEndCell.getBoundingBoxToWorld().contains(c) ? (r = t._guideEndId, t.sendEvent(h.EventName.GuideMoveEnd)) : r = !1 : r = f.MapMgr.getInstance().judge(c), 1 != t.isGameStart) {
                            var l = a.getComponent(d.default);
                            if (cc.Intersection.pointInPolygon(c, t.recycle.getComponent(cc.BoxCollider).world.points)) {
                                if (!l || !l.isSuperPlant) return null != e && t.restorePlant(l.getProperty().HeroId), t.freePlant("plants", a), a = null, void (e = null);
                                null != l && 1 == l.isSuperPlant && v.UIMgr.getInstance().openUI(h.UIID.UITips, h.UIID.UICombat, lang.index60eed_37)
                            }
                            if (s.LogMgr.getInstance().debug("resule", [r, c]), !r) return s.LogMgr.getInstance().debug(lang.index60eed_38), void (null != e ? i() : (t.freePlant("plants", a), a = null));
                            if (!t.isMove) return a = null, void (e = null);
                            var u = t.plantLayer.children[r[0]].children[r[1]];
                            if (0 == u.children.length) {
                                if (null != e) return a.getComponent(d.default).plantLayerId = r, void i(u);
                                a.getComponent(d.default) || a.addComponent(d.default);
                                var p = a.getComponent(d.default), g = 0;
                                t.plantData.forEach(function (e) {
                                    e.plantId == t.basePlantArr[n].ID && (g = e.plantLevel)
                                }), t.setPlant(g, p, r, !1, n, e, n), a = null, e = null
                            } else {
                                null == e && t.freePlant("plants", a);
                                var m = u.children[0].getComponent(d.default), y = m.getProperty(), _ = y.HeroId,
                                    b = y.Level,
                                    C = (I.DataMgr.getInstance().getAllHeroSynthesis(), l ? l.getProperty().HeroId : t.basePlantArr[n].ID);
                                if (t.compoundMap.has(_)) for (var D = -1, M = 0; M < t.compoundMap.get(_).length; M++) if (t.compoundMap.get(_)[M].synHero == C) return D = t.compoundMap.get(_)[M].arrIdx, t.setPlant(b, m, r, !0, D, e, n), t.freePlant("plants", a), a = null, void (e = null);
                                v.UIMgr.getInstance().openUI(h.UIID.UITips, h.UIID.UINone, lang.index60eed_39), i()
                            }
                        } else r && t.sendEvent(h.EventName.cilckPlant, r)
                    }
                }), this.clickLayer._touchListener.setSwallowTouches(!1)
            }, e.prototype.hideChoose = function () {
                this.plantPicLayer.children.forEach(function (t) {
                    t.getChildByName("choose").active = !1
                }), this.plantLayer.children.forEach(function (t) {
                    t.children.forEach(function (t) {
                        t.children.length > 0 && (t.children[0].getChildByName("choose").active = !1)
                    })
                })
            }, e.prototype.findSyn = function (t) {
                var e = this;
                null != t && this.plantPicLayer.children.forEach(function (t) {
                    t.getChildByName("tips").active = !1
                }), this.compoundMap.get(t) && this.compoundMap.get(t).forEach(function (t) {
                    for (var a = 0; a < e.basePlantArr.length; a++) e.basePlantArr[a].ID == t.synHero && (e.plantPicLayer.children[a].getChildByName("tips").active = !0)
                })
            }, e.prototype.unLockSort = function (t) {
                var e = this, a = [], n = [];
                return t.forEach(function (t) {
                    var i = t.split(",");
                    (1 == S.Global.needUnLock ? e.lockData.getLockDataById(Number(i[0])) : Number(i[1]) > 0) ? a.push(t) : n.push(t)
                }), a.concat(n)
            }, e.prototype.initPlantPic = function () {
                var t = this, e = m.LevelMgr.getInstance().levelData.PlacementQuantity.split(";");
                e = this.unLockSort(e);
                for (var a = function (a) {
                    var i = a > 0 ? cc.instantiate(n.plantPicLayer.children[0]) : n.plantPicLayer.children[0],
                        o = e[a].split(","), r = I.DataMgr.getInstance().getHeroCfgById(Number(o[0]));
                    n.basePlantArr.push(r);
                    var s;
                    s = 1 == S.Global.needUnLock ? n.lockData.getLockDataById(r.ID) ? Number(o[1]) > 0 ? Number(o[1]) : 1 : 0 : Number(o[1]), i.children[0].children[0].getChildByName("limitNum").getComponent(cc.Label).string = s + "/" + s, 0 == S.Global.needUnLock && Number(o[1]) > 0 || 1 == S.Global.needUnLock && n.lockData.getLockDataById(r.ID) ? i.getChildByName("unLock").active = !1 : (i.children[0].children[0].getChildByName("limitNum").color = cc.color().fromHEX("#f70000"), i.getChildByName("unLock").active = !0), i.children[0].children[1].getChildByName("consumeNum").getComponent(cc.Label).string = r.SummonCost, n.loadSpriteFrame("common", "zw_zd_kp" + r.Quality + "_2", function (t) {
                        i.children[0].children[0].getComponent(cc.Sprite).spriteFrame = t
                    }), n.loadSpriteFrame("common", "zw_zd_kp" + r.Quality + "_1", function (t) {
                        i.children[0].children[0].getChildByName("frame").getComponent(cc.Sprite).spriteFrame = t
                    }), n.loadSpriteFrame(r.BunleName, "drawing/" + r.Model, function (t) {
                        i.children[0].children[0].getChildByName("plantPicture").scale = r.ModelScale, i.children[0].children[0].getChildByName("plantPicture").getComponent(cc.Sprite).spriteFrame = t
                    }), a > 0 && n.plantPicLayer.addChild(i), i.getChildByName("getBtn").on(cc.Node.EventType.TOUCH_END, function () {
                        var e = i.children[0].children[0].getChildByName("limitNum").getComponent(cc.Label),
                            n = e.string.split("/");
                        k.SdkMgr.getInstance().playVideo(null, function () {
                            e.string = Number(n[0]) + 1 + "/" + (Number(n[1]) + 1), e.node.color = cc.color().fromHEX("#46F700"), i.getChildByName("unLock").active = !1, i.getChildByName("getBtn").active = !1;
                            var o = u.PlayerMgr.getInstance().getSignData();
                            lang.index60eed_40 == i.getChildByName("getBtn").getChildByName("label").getComponent(cc.Label).string ? (o.getCurentDay() <= 7 && u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.dayz_plantprobation, o.getCurentDay()), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.plantprobation), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.lv_plantprobation_x_y, m.LevelMgr.getInstance().levelData.ChapterId + "-" + m.LevelMgr.getInstance().levelData.Level, t.basePlantArr[a].ID)) : (o.getCurentDay() <= 7 && u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.dayz_addplant, o.getCurentDay()), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.addplant), u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.lv_addplant_x_y, m.LevelMgr.getInstance().levelData.ChapterId + "-" + m.LevelMgr.getInstance().levelData.Level, t.basePlantArr[a].ID))
                        })
                    })
                }, n = this, i = 0; i < e.length; i++) a(i)
            }, e.prototype.setPlant = function (t, e, a, n, i, o, r) {
                var s, c, l = this;
                n ? (s = this.compoundPlantArr[i].LvScope, c = this.compoundPlantArr[i].RaceType) : (s = this.basePlantArr[i].LvScope, c = this.basePlantArr[i].RaceType);
                var u = Number(s.split(",")[0]) - 1 + t, p = I.DataMgr.getInstance().getHeroLevelById(u),
                    d = I.DataMgr.getInstance().getSkillLevelCfgById(Number(p.SkillID.split(",")[0]));
                if (this.tips.getChildByName("name").getComponent(cc.Label).string = d.SkillName, this.tipsSkill.string = this.isGameStart ? "" : b.UIUtils.getSkillString(p), null != r && null == o) {
                    var g = this.plantPicLayer.children[r].children[0].children[0].getChildByName("limitNum").getComponent(cc.Label),
                        f = this.plantPicLayer.children[r].children[0].children[1].getChildByName("consumeNum").getComponent(cc.Label).string,
                        m = g.string.split("/");
                    g.string = Number(m[0]) - 1 + "/" + m[1], Number(m[0]) - 1 <= 0 && (g.node.color = cc.color().fromHEX("#f70000")), this.sendEvent(h.EventName.sunChange, -Number(f))
                }
                this.findSyn(p.HeroId), e.node.x = 0, e.node.y = -40, e.node.parent = this.plantLayer.children[a[0]].children[a[1]], e.bulletStartPointArr = this.bulletStartPointArr[p.HeroId], e.loadDieBundle = this.basePlantArr[0].BunleName, n ? this.loadResFromBundle(this.compoundPlantArr[i].BunleName, this.compoundPlantArr[i].Model + "/" + this.compoundPlantArr[i].Model, sp.SkeletonData, function (t) {
                    e.node.getChildByName("choose").getComponent(P.default).nowScale = 1, e.node.getChildByName("choose").y = 40;
                    var o = cc.instantiate(l.synLight);
                    o.y = e.node.y, o.parent = l.plantLayer.children[a[0]].children[a[1]], o.getComponent(sp.Skeleton).setAnimation(0, "animation", !1), _.AudioMgr.getInstance().playEffect(h.AudioId.Synthesis1), o.getComponent(sp.Skeleton).setCompleteListener(function (r) {
                        o.destroy(), "animation" == r.animation.name && (e.node.getComponent(sp.Skeleton).skeletonData = t, e.node.getComponent(sp.Skeleton).setAnimation(0, "idle", !0), e.node.scale = 1, e.setProperty(p, d, a, i, c, n), t.skeletonJson.skins.length > 1 && e.node.getComponent(sp.Skeleton).setSkin("skin_1"))
                    })
                }) : e.setProperty(p, d, a, i, c, n)
            }, e.prototype.freePlant = function (t, e) {
                e.active = !1, e.getChildByName("choose").active = !1, e.getComponent(sp.Skeleton).skeletonData = null;
                var a = e.getComponent(d.default);
                null != a && (a.initPlant(), e.removeComponent(d.default)), l.PoolMgr.getInstance().freeNode(t, e)
            }, e.prototype.restorePlant = function (t) {
                for (var e = 0; e < this.basePlantArr.length; e++) if (t == this.basePlantArr[e].ID) {
                    this.sendEvent(h.EventName.sunChange, Number(this.basePlantArr[e].SummonCost));
                    var a = this.plantPicLayer.children[e].children[0].children[0].getChildByName("limitNum").getComponent(cc.Label),
                        n = a.string.split("/");
                    return a.node.color = cc.color().fromHEX("#46f700"), void (a.string = Number(n[0]) + 1 + "/" + n[1])
                }
                var i = I.DataMgr.getInstance().getAllHeroSynthesis();
                for (e = 0; e < i.length; e++) if (t == i[e].SyntheticHeroID) return this.restorePlant(i[e].BasicHero), this.restorePlant(i[e].SyntheticHero)
            }, e.prototype.startGame = function () {
                var t = this;
                f.MapMgr.getInstance().plantColliderArray.forEach(function (t) {
                    t.enabled = !1
                }), this._isGuide && (this._isGuide = !1, u.PlayerMgr.getInstance().getTrackData().youmengTrack(w.TrackId.guide6), u.PlayerMgr.getInstance().getGuideData().addCurrentId(!0)), m.LevelMgr.getInstance().setisGameStart(!0), this.hideChoose(), this.cellLock.active = !1, this.isGameStart = !0, this.recycle.active = !1, this.ljfBtn.active = !0, this.tips.active = !1, this.progressBar.node.parent.active = !0, this.plantPicLayer.parent.parent.active = !1, this.raceData = {}, f.MapMgr.getInstance().plantCellArray.forEach(function (e) {
                    if (e.children.length > 0) {
                        var a = e.children[0].getComponent(d.default);
                        t.raceData[a.raceType] ? t.raceData[a.raceType] += 1 : t.raceData[a.raceType] = 1, 4 == a.raceType && f.MapMgr.getInstance().stumpPosArr.push(a.plantLayerId)
                    }
                }), f.MapMgr.getInstance().raceData = this.raceData, T.EquipMgr.getInstance().getWeapon() && 16 == u.PlayerMgr.getInstance().getGuideData().getCurrentId() ? T.EquipMgr.getInstance().getWeapon() && cc.tween(this.daifu.node).to(1, {x: -520}).call(function () {
                    t.guideCfgArr = I.DataMgr.getInstance().getAllGuideCfg(), t.startGuide(), t.clickLayer.on(cc.Node.EventType.TOUCH_END, function () {
                        t.sendEvent(h.EventName.doDaiFuAttack)
                    })
                }).start() : (T.EquipMgr.getInstance().getWeapon() && this.daifu.node.x < -600 && cc.tween(this.daifu.node).to(1, {x: -520}).call(function () {
                    t.clickLayer.on(cc.Node.EventType.TOUCH_END, function () {
                        t.sendEvent(h.EventName.doDaiFuAttack)
                    })
                }).start(), u.PlayerMgr.getInstance().getShareData().startRecord(), this._startTime = (new Date).getTime(), this.createZombieWave())
            }, e.prototype.createZombieWave = function () {
                if (0 == this.waveArr.length && (this.waveArr = I.DataMgr.getInstance().getLevelConfigurationWave(this.levelId)), this.waveArr.length > 0) {
                    this.progressBar.fillRange = .2 * this.waveArr.length - 1, this.zombieHear.x = this.progressBar.node.width / 2 - this.progressBar.fillRange * this.progressBar.node.width;
                    var t = this.waveArr.shift();
                    if (t.LittleMonsterNum > 0) for (var e = t.LittleMonsterID.split(","), a = 0; a < t.LittleMonsterNum; a++) this.zombieWave.push(e[g.Utils.randomRang(0, e.length)]);
                    if (t.MiddleMonsterNum > 0) {
                        var n = t.MiddleMonsterID.split(",");
                        for (a = 0; a < t.MiddleMonsterNum; a++) this.zombieWave.push(n[g.Utils.randomRang(0, n.length)])
                    }
                    if (t.GreatMonsterNum > 0) {
                        var i = t.GreatMonsterID.split(",");
                        for (a = 0; a < t.GreatMonsterNum; a++) this.zombieWave.push(i[g.Utils.randomRang(0, i.length)])
                    }
                    _.AudioMgr.getInstance().playEffect(h.AudioId.MonsterWave), this.zombieInterval = m.LevelMgr.getInstance().levelData.MonsterInterval, s.LogMgr.getInstance().debug("---zombieWave---", this.zombieWave), 0 == this.waveArr.length ? (s.LogMgr.getInstance().debug(lang.index60eed_41), this.isLast = !0, this.Interval = -1) : this.Interval = m.LevelMgr.getInstance().levelData.Interval
                }
            }, e.prototype.waveEnd = function () {
                this.zombieWave.length > 0 || (this.isLast ? (s.LogMgr.getInstance().debug(lang.index60eed_42), this.progressBar.fillRange = -1, this.zombieHear.x = -this.progressBar.node.width / 2, this.gameOver(!0)) : (this.Interval = m.LevelMgr.getInstance().levelData.Interval, this.createZombieWave()))
            }, e.prototype.createZombie = function (t) {
                var e = l.PoolMgr.getInstance().getNode("zombie"), a = e.getComponent(p.default);
                a.Status = y.UnitStatus.Prepare;
                var n, i = I.DataMgr.getInstance().getMonsterCfgById(t),
                    o = I.DataMgr.getInstance().getSkillLevelCfgById(i.SkillID);
                n = 3 != i.HabitusType ? i.ModelID + "/" + i.ModelID : i.ModelID + "/" + i.ModelID + "/" + i.ModelID, this.userData.getZombieDataById(t) || (this.userData.setZombieData(t), v.UIMgr.getInstance().openUI(h.UIID.UIZombieTip, h.UIID.UINone, i, o)), this.loadResFromBundle("zombie", n, sp.SkeletonData, function (a) {
                    e.getComponent(sp.Skeleton).skeletonData = a, 310013 == t ? e.getComponent(sp.Skeleton).setAnimation(0, "idle", !0) : e.getComponent(sp.Skeleton).setAnimation(0, "move", !0), a.skeletonJson.skins.length > 1 && e.getComponent(sp.Skeleton).setSkin("skin_1")
                }), e.x = this.zombieLayer.width - 10, e.y = -40, a.setProperty(i, o), 310013 == t && (a.notMA = !0, a.Status = y.UnitStatus.Call, e.y = 120), a.offsetArr = f.MapMgr.getInstance().zombieOffset[t], e.scale = i.ModeScale, e.active = !0;
                var r = [];
                g.Utils.randomDiffIndex(this.zombieLayer.children.length, 1, r), 1 == S.Global.boxDrop && S.Global.boxDropNum > 0 && (this.createZombieNum++, this.createZombieNum == S.Global.boxDropNum && a.setBoxDrop(!0)), m.LevelMgr.getInstance().littleZombieNum <= 0 ? this.zombieLayer.children[r[0]].addChild(e) : this.zombieLayer.children[r[0]].insertChild(e, m.LevelMgr.getInstance().littleZombieNum)
            }, e.prototype.gameOver = function (t) {
                var e = this;
                this.isEnd = !0;
                var a = !!t, n = Number(m.LevelMgr.getInstance().levelData.BattleDrop.split(",")[1]),
                    i = this.node.getChildByName("goldLayer").children.length,
                    o = S.Global.newPlantInborn ? u.PlayerMgr.getInstance().getNewInbornData().getNewInbornArr() : this.userData.getinbornData(),
                    r = I.DataMgr.getInstance().getAllInbornCfg(),
                    s = S.Global.newPlantInborn ? 1 + o[5].allAddition / 100 : 1 + r[5].IncreasePerLevel * o[5].inbornLevel / 100,
                    c = (new Date).getTime() - this._startTime;
                if (m.LevelMgr.getInstance().setisGameStart(!1), i > 0) {
                    this.userData.addGoldNum(Math.round(n * s * i), new cc.Vec2(this.node.width / 2, this.node.height / 2));
                    for (var p = i - 1; p >= 0; p--) {
                        var d = this.node.getChildByName("goldLayer").children[p];
                        d.active = !1, "gold" == d.name ? l.PoolMgr.getInstance().freeNode("gold", d) : (console.log(lang.index60eed_43), d.destroy())
                    }
                    this.addEvent(D.CommonEventName.GetRewardEnd, function () {
                        C.EventMgr.getInstance().off(D.CommonEventName.GetRewardEnd, e, function () {
                        }), v.UIMgr.getInstance().openUI(h.UIID.UIGameOver, h.UIID.UICombat, a, m.LevelMgr.getInstance().costNum, c)
                    })
                } else v.UIMgr.getInstance().openUI(h.UIID.UIGameOver, h.UIID.UICombat, a, m.LevelMgr.getInstance().costNum, c)
            }, e.prototype.update = function (t) {
                this.isEnd || (-1 != this.Interval && (this.Interval -= t, this.Interval <= 0 && this.createZombieWave()), this.progressBar.fillRange > .2 * this.waveArr.length - 1 && (this.progressBar.fillRange -= .01 * t, this.zombieHear.x = this.progressBar.node.width / 2 + this.progressBar.fillRange * this.progressBar.node.width), -1 != this.zombieInterval && (this.zombieInterval -= t, this.zombieInterval <= 0 && (this.createZombie(Number(this.zombieWave.shift())), this.zombieInterval = m.LevelMgr.getInstance().levelData.MonsterInterval, this.zombieWave.length <= 0 && (this.zombieInterval = -1))))
            }, o([B({
                type: cc.Node,
                tooltip: lang.index60eed_44
            })], e.prototype, "plantLayer", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_45
            })], e.prototype, "zombieLayer", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_46
            })], e.prototype, "bulletLayer", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_47
            })], e.prototype, "callLayer", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_48
            })], e.prototype, "effectLayer", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_49
            })], e.prototype, "recycle", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_50
            })], e.prototype, "ljfBtn", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_51
            })], e.prototype, "plantPicLayer", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_52
            })], e.prototype, "clickLayer", void 0), o([B({
                type: cc.Sprite,
                tooltip: lang.index60eed_53
            })], e.prototype, "progressBar", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_54
            })], e.prototype, "zombieHear", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_55
            })], e.prototype, "returnBtn", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_56
            })], e.prototype, "tips", void 0), o([B({
                type: cc.RichText,
                tooltip: lang.index60eed_57
            })], e.prototype, "tipsSkill", void 0), o([B({
                type: cc.Prefab,
                tooltip: lang.index60eed_58
            })], e.prototype, "synLight", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_59
            })], e.prototype, "startGameFrame", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_60
            })], e.prototype, "sunFrame", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_61
            })], e.prototype, "cellLock", void 0), o([B({
                type: cc.Node,
                tooltip: lang.index60eed_62
            })], e.prototype, "cellUnLockBtn", void 0), o([B({
                type: sp.Skeleton,
                tooltip: lang.index60eed_63
            })], e.prototype, "daifu", void 0), o([A], e)
        }(c.default);
        a.default = L, cc._RF.pop()
    }, {
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BaseCtrl": "BaseCtrl",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/EventMgr": "EventMgr",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/manager/PoolMgr": "PoolMgr",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/MapMgr": "MapMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "../ui/UIGuide": "UIGuide",
        "./Choose": "Choose",
        "./CombatUnitCtrl": "CombatUnitCtrl",
        "./Plants": "Plants",
        "./Zombie": "Zombie"
    }],
    CommonBirge: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "f7f63KH5RlOnaWwZRgGeTZR", "CommonBirge"), Object.defineProperty(a, "__esModule", {value: !0}), a.CommonBrige = void 0;
        var n = t("../framework/manager/LogMgr"), i = function () {
            function t() {
            }

            return t.Instance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.setGameBrige = function (t) {
                this.gameIpml = t
            }, t.prototype.subGoodsNum = function (t, e) {
                if (this.gameIpml) return this.gameIpml.subGoodsNum(t, e);
                n.LogMgr.getInstance().error(lang.index60eed_64, "subGoodsNum")
            }, t.prototype.addReward = function (t, e, a) {
                this.gameIpml ? this.gameIpml.addComReward(t, e, a) : n.LogMgr.getInstance().error(lang.index60eed_65, "addReward")
            }, t
        }();
        a.CommonBrige = i, cc._RF.pop()
    }, {"../framework/manager/LogMgr": "LogMgr"}],
    CommonCfg: [function (t, e, a) {
        "use strict";
        var n, i;
        cc._RF.push(e, "c018fs3KB5MWpARwmJ9VS9/", "CommonCfg"), Object.defineProperty(a, "__esModule", {value: !0}), a.CommonCfg = a.CommonEventName = a.ComAudioCF = a.ComAudioId = a.ComUICF = a.ComUIID = void 0;
        var o, r, s = t("../../../scripts/framework/configs/Appcfg");
        (function (t) {
            t.UISign = "com_UISign", t.UIReward = "com_UIReward", t.UILotty = "com_UILotty", t.UICollection = "com_UICollection", t.UIFreeTime = "com_UIFreeTime"
        })(o = a.ComUIID || (a.ComUIID = {})), a.ComUICF = ((n = {})[o.UISign] = {
            prefab: "ui/UISign",
            name: "UISign",
            showTop: !0,
            zIndex: s.OrderLayer.pop,
            bundleName: "comprefabs"
        }, n[o.UIReward] = {
            prefab: "ui/UIReward",
            name: "UIReward",
            showTop: !0,
            zIndex: s.OrderLayer.pop2,
            bundleName: "comprefabs"
        }, n[o.UILotty] = {
            prefab: "ui/UILotty",
            name: "UILotty",
            showTop: !0,
            zIndex: s.OrderLayer.pop,
            bundleName: "comprefabs"
        }, n[o.UICollection] = {
            prefab: "ui/UICollection",
            name: "UICollection",
            showTop: !0,
            zIndex: s.OrderLayer.pop,
            bundleName: "comprefabs"
        }, n[o.UIFreeTime] = {
            prefab: "ui/UIFreeTime",
            name: "UIFreeTime",
            showTop: !0,
            zIndex: s.OrderLayer.pop,
            bundleName: "comprefabs"
        }, n), function (t) {
            t.btnClick = "common_btnClick", t.success = "common_success", t.reward = "common_reward", t.lottyRun = "common_lottyRun", t.lottyDown = "common_lottyDown", t.ding = "common_ding", t.lottyMusic = "common_lottyMusic", t.goldEffect = "common_goldEffect"
        }(r = a.ComAudioId || (a.ComAudioId = {})), a.ComAudioCF = ((i = {})[r.btnClick] = {
            path: "btnclick",
            bundle: "comaudio"
        }, i[r.success] = {path: "success", bundle: "comaudio"}, i[r.reward] = {
            path: "reward",
            bundle: "comaudio"
        }, i[r.lottyRun] = {path: "lottyRun", bundle: "comaudio"}, i[r.lottyDown] = {
            path: "lottyDown",
            bundle: "comaudio"
        }, i[r.ding] = {path: "ding", bundle: "comaudio"}, i[r.lottyMusic] = {
            path: "lotty_music",
            bundle: "comaudio"
        }, i[r.goldEffect] = {path: "goldEffect", bundle: "comaudio"}, i), function (t) {
            t.RefreshGold = "CommonRefreshGold", t.RefreshSignRed = "CommonRefreshSignRed", t.RefreshTickNum = "CommonRefreshTickNum", t.callRefreshTick = "CommoncallRefreshTick", t.RefreshCollection = "CommonRefreshCollection", t.RefreshCollectionRed = "CommonRefreshCollectionRed", t.AddCollection = "AddCollection", t.GetReward = "GetReward", t.GetRewardEnd = "GetRewardEnd"
        }(a.CommonEventName || (a.CommonEventName = {}));
        var c = function () {
            function t() {
            }

            return t.splitCount = "|", t.splitNum = ";", t.signBundle = "comimgs", t
        }();
        a.CommonCfg = c, cc._RF.pop()
    }, {"../../../scripts/framework/configs/Appcfg": "Appcfg"}],
    CommonModel: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "d6fa0r5epZCha9FIIqEM9Af", "CommonModel"), Object.defineProperty(a, "__esModule", {value: !0}), a.CommonModel = void 0;
        var n = t("../../scripts/framework/manager/AudioMgr"), i = t("../../scripts/framework/manager/UIMgr"),
            o = t("./CommonBirge"), r = t("./config/CommonCfg"), s = t("./manager/ComDataMgr"),
            c = t("./manager/ComPlayerMgr"), l = function () {
                function t() {
                }

                return t.Instance = function () {
                    return null == this.instance && (this.instance = new t), this.instance
                }, t.prototype.initCommon = function (t) {
                    i.UIMgr.getInstance().addUICnf(r.ComUICF), n.AudioMgr.getInstance().addAdConf(r.ComAudioCF), s.ComDataMgr.getInstance().preload(function () {
                        c.ComPlayerMgr.getInstance().preload(function () {
                            t && t()
                        })
                    })
                }, t.prototype.setGameBrige = function (t) {
                    o.CommonBrige.Instance().setGameBrige(t)
                }, t.prototype.addReward = function (t, e, a) {
                    void 0 === a && (a = !0), a && c.ComPlayerMgr.getInstance().addCollection(t, e)
                }, t
            }();
        a.CommonModel = l, cc._RF.pop()
    }, {
        "../../scripts/framework/manager/AudioMgr": "AudioMgr",
        "../../scripts/framework/manager/UIMgr": "UIMgr",
        "./CommonBirge": "CommonBirge",
        "./config/CommonCfg": "CommonCfg",
        "./manager/ComDataMgr": "ComDataMgr",
        "./manager/ComPlayerMgr": "ComPlayerMgr"
    }],
    Config: [function (t, e, a) {
        "use strict";
        var n, i;
        cc._RF.push(e, "eebb8XKHHVJirIvdjyt6Bjr", "Config"), Object.defineProperty(a, "__esModule", {value: !0}), a.TipType = a.Currency = a.GameConfig = a.EventName = a.AudioCF = a.AudioId = a.UICF = a.UIID = a.SystemInfo = a.SystemPlatform = void 0;
        var o = t("../../framework/configs/Appcfg"), r = t("../manager/PlayerMgr");
        (function (t) {
            t.IOS = "ios", t.ANDROID = "android", t.UNKNOWN = "unknown"
        })(a.SystemPlatform || (a.SystemPlatform = {}));
        var s, c;
        a.SystemInfo = function () {
        }, function (t) {
            t[t.UINone = -1] = "UINone", t[t.UIHome = 0] = "UIHome", t[t.UITop = 1] = "UITop", t[t.UITips = 2] = "UITips", t[t.UITouch = 3] = "UITouch", t[t.UIGuide = 4] = "UIGuide", t[t.UICacheExample = 5] = "UICacheExample", t[t.UIRealName = 6] = "UIRealName", t[t.UIGameExist = 7] = "UIGameExist", t[t.UICombat = 8] = "UICombat", t[t.UIGameOver = 9] = "UIGameOver", t[t.UIAward = 10] = "UIAward", t[t.UIInbornUp = 11] = "UIInbornUp", t[t.UIPlantLevelUP = 12] = "UIPlantLevelUP", t[t.UIPlantLottery = 13] = "UIPlantLottery", t[t.UIPlantDrawings = 14] = "UIPlantDrawings", t[t.UIGetResource = 15] = "UIGetResource", t[t.UISetting = 16] = "UISetting", t[t.UITedail = 17] = "UITedail", t[t.UILoadCombat = 18] = "UILoadCombat", t[t.UISuperPlant = 19] = "UISuperPlant", t[t.UIZombieTip = 20] = "UIZombieTip", t[t.UIBox = 21] = "UIBox", t[t.UISign = 22] = "UISign", t[t.UISummerFestival = 23] = "UISummerFestival", t[t.UIAgainAward = 24] = "UIAgainAward", t[t.UINewInboren = 25] = "UINewInboren", t[t.UIEquip = 26] = "UIEquip", t[t.UIEquipTips = 27] = "UIEquipTips", t[t.UIEquipSyn = 28] = "UIEquipSyn", t[t.UISidebar = 29] = "UISidebar", t[t.UIStemLevelPage = 30] = "UIStemLevelPage", t[t.UIStemGame = 31] = "UIStemGame", t[t.UIStemGameFail = 32] = "UIStemGameFail", t[t.UIStemWin = 33] = "UIStemWin", t[t.UIInfiniteHeart = 34] = "UIInfiniteHeart", t[t.UIHeart = 35] = "UIHeart", t[t.StemUITop = 36] = "StemUITop", t[t.PopUserPrivacy = 37] = "PopUserPrivacy"
        }(s = a.UIID || (a.UIID = {})), a.UICF = ((n = {})[s.UIHome] = {
            prefab: "ui/UIHome",
            name: "UIHome",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UITop] = {
            prefab: "ui/UITop",
            name: "UITop",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.top,
            bundleName: "prefabs"
        }, n[s.UITips] = {
            prefab: "ui/UITips",
            name: "UITips",
            showTop: !0,
            zIndex: o.OrderLayer.tip,
            bundleName: "prefabs"
        }, n[s.UITouch] = {
            prefab: "ui/UITouch",
            name: "UITouch",
            showTop: !0,
            zIndex: o.OrderLayer.touch,
            bundleName: "prefabs"
        }, n[s.UIGuide] = {
            prefab: "ui/UIGuide",
            name: "UIGuide",
            showTop: !0,
            showMult: !0,
            zIndex: o.OrderLayer.guide,
            bundleName: "prefabs"
        }, n[s.UICombat] = {
            prefab: "ui/UICombat",
            name: "UICombat",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.special,
            bundleName: "prefabs"
        }, n[s.UIGameOver] = {
            prefab: "ui/UIGameOver",
            name: "UIGameOver",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.special,
            bundleName: "prefabs"
        }, n[s.UIAward] = {
            prefab: "ui/UIAward",
            name: "UIAward",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UIGetResource] = {
            prefab: "ui/UIGetResource",
            name: "UIGetResource",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop,
            bundleName: "prefabs"
        }, n[s.UIInbornUp] = {
            prefab: "ui/UIInbornUp",
            name: "UIInbornUp",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIPlantLevelUP] = {
            prefab: "ui/UIPlantLevelUP",
            name: "UIPlantLevelUP",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIPlantLottery] = {
            prefab: "ui/UIPlantLottery",
            name: "UIPlantLottery",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIPlantDrawings] = {
            prefab: "ui/UIPlantDrawings",
            name: "UIPlantDrawings",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UISetting] = {
            prefab: "ui/UISetting",
            name: "UISetting",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UITedail] = {
            prefab: "ui/UITedail",
            name: "UITedail",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UILoadCombat] = {
            prefab: "ui/UILoadCombat",
            name: "UILoadCombat",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.touch,
            bundleName: "prefabs"
        }, n[s.UISuperPlant] = {
            prefab: "ui/UISuperPlant",
            name: "UISuperPlant",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UIZombieTip] = {
            prefab: "ui/UIZombieTip",
            name: "UIZombieTip",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UIBox] = {
            prefab: "ui/UIBox",
            name: "UIBox",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UISign] = {
            prefab: "ui/UISign",
            name: "UISign",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop,
            bundleName: "prefabs"
        }, n[s.UISummerFestival] = {
            prefab: "ui/UISummerFestival",
            name: "UISummerFestival",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIAgainAward] = {
            prefab: "ui/UIAgainAward",
            name: "UIAgainAward",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UINewInboren] = {
            prefab: "ui/UINewInboren",
            name: "UINewInboren",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIEquip] = {
            prefab: "ui/UIEquip",
            name: "UIEquip",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIEquipTips] = {
            prefab: "ui/UIEquipTips",
            name: "UIEquipTips",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UIEquipSyn] = {
            prefab: "ui/UIEquipSyn",
            name: "UIEquipSyn",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIRealName] = {
            prefab: "UIRealName",
            name: "UIRealName",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIGameExist] = {
            prefab: "UIGameExist",
            name: "UIGameExist",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.touch,
            bundleName: "prefabs"
        }, n[s.UICacheExample] = {
            prefab: "ui/UICacheExample",
            name: "UICacheExample",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.touch,
            bundleName: "prefabs"
        }, n[s.UISidebar] = {
            prefab: "ui/UISidebar",
            name: "UISidebar",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UIStemLevelPage] = {
            prefab: "stemGame/UIStemLevelPage",
            name: "UIStemLevelPage",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.main,
            bundleName: "prefabs"
        }, n[s.UIStemGame] = {
            prefab: "stemGame/UIStemGame",
            name: "UIStemGame",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.pop,
            bundleName: "prefabs"
        }, n[s.UIStemGameFail] = {
            prefab: "stemGame/UIStemGameFail",
            name: "UIStemGameFail",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UIStemWin] = {
            prefab: "stemGame/UIStemWin",
            name: "UIStemWin",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n[s.UIInfiniteHeart] = {
            prefab: "stemGame/UIInfiniteHeart",
            name: "UIInfiniteHeart",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.top,
            bundleName: "prefabs"
        }, n[s.UIHeart] = {
            prefab: "stemGame/UIHeart",
            name: "UIHeart",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.top,
            bundleName: "prefabs"
        }, n[s.StemUITop] = {
            prefab: "stemGame/StemUITop",
            name: "StemUITop",
            showTop: !0,
            showMult: !1,
            zIndex: o.OrderLayer.top,
            bundleName: "prefabs"
        }, n[s.PopUserPrivacy] = {
            prefab: "ui/PopUserPrivacy",
            name: "PopUserPrivacy",
            showTop: !1,
            showMult: !1,
            zIndex: o.OrderLayer.pop2,
            bundleName: "prefabs"
        }, n), function (t) {
            t.bgMain = "bgMain", t.bgComabt = "bgComabt", t.btnClick = "btnClick", t.MonsterDeath = "MonsterDeath", t.MonsterWave = "MonsterWave", t.getAward = "getAward", t.PlantDeath = "PlantDeath", t.levelUp = "levelUp", t.Fail = "Fail", t.Victory = "Victory", t.goldEffect = "goldEffect", t.lottyDown = "lottyDown", t.ding = "ding", t.reward = "reward", t.BulletSound1 = "BulletSound1", t.BulletSound3 = "BulletSound3", t.BulletSound4 = "BulletSound4", t.BulletSound5 = "BulletSound5", t.BulletSound6 = "BulletSound6", t.Pickup = "Pickup", t.Synthesis1 = "Synthesis1", t.Sound_Attack_1 = "Sound_Attack_1", t.Sound_Attack_2 = "Sound_Attack_2", t.Sound_Attack_3 = "Sound_Attack_3", t.Sound_Attack_4 = "Sound_Attack_4", t.Sound_Attack_5 = "Sound_Attack_5", t.Sound_Upgrade = "Sound_Upgrade", t.Sound_Wear = "Sound_Wear"
        }(c = a.AudioId || (a.AudioId = {})), a.AudioCF = ((i = {})[c.bgMain] = {
            path: "BackgroundMusic2",
            bundle: "audio"
        }, i[c.bgComabt] = {path: "BattleMusic3", bundle: "audio"}, i[c.btnClick] = {
            path: "Click1",
            bundle: "audio"
        }, i[c.Fail] = {path: "Fail", bundle: "audio"}, i[c.MonsterDeath] = {
            path: "MonsterDeath",
            bundle: "audio"
        }, i[c.MonsterWave] = {path: "MonsterLnvade", bundle: "audio"}, i[c.getAward] = {
            path: "ObtainingRewards",
            bundle: "audio"
        }, i[c.PlantDeath] = {path: "PlantDeath", bundle: "audio"}, i[c.levelUp] = {
            path: "Upgradation",
            bundle: "audio"
        }, i[c.Victory] = {path: "Victory", bundle: "audio"}, i[c.goldEffect] = {
            path: "goldEffect",
            bundle: "audio"
        }, i[c.reward] = {path: "reward", bundle: "audio"}, i[c.lottyDown] = {
            path: "lottyDown",
            bundle: "audio"
        }, i[c.ding] = {path: "ding", bundle: "audio"}, i[c.BulletSound1] = {
            path: "BulletSound1",
            bundle: "audio"
        }, i[c.BulletSound3] = {path: "BulletSound3", bundle: "audio"}, i[c.BulletSound4] = {
            path: "BulletSound4",
            bundle: "audio"
        }, i[c.BulletSound5] = {path: "BulletSound5", bundle: "audio"}, i[c.BulletSound6] = {
            path: "BulletSound6",
            bundle: "audio"
        }, i[c.Pickup] = {path: "Pickup", bundle: "audio"}, i[c.Synthesis1] = {
            path: "Synthesis1",
            bundle: "audio"
        }, i[c.Sound_Attack_1] = {
            path: "Sound_Attack_1",
            bundle: "audio"
        }, i[c.Sound_Attack_2] = {
            path: "Sound_Attack_2",
            bundle: "audio"
        }, i[c.Sound_Attack_3] = {
            path: "Sound_Attack_3",
            bundle: "audio"
        }, i[c.Sound_Attack_4] = {
            path: "Sound_Attack_4",
            bundle: "audio"
        }, i[c.Sound_Attack_5] = {path: "Sound_Attack_5", bundle: "audio"}, i[c.Sound_Upgrade] = {
            path: "Sound_Upgrade",
            bundle: "audio"
        }, i[c.Sound_Wear] = {path: "Sound_Wear", bundle: "audio"}, i), function (t) {
            t.RefreshGold = "RefreshGold", t.showText = "showText", t.unitDie = "unitDie", t.startGame = "startGame", t.endGame = "endGame", t.winGame = "winGame", t.plantReborn = "plantReborn", t.sunChange = "sunChange", t.WaveEnd = "WaveEnd", t.closeUI = "closeUI", t.getCombatResource = "getCombatResource", t.getSuperPlant = "getSuperPlant", t.GuideMoveEnd = "GuideMoveEnd", t.cilckInborn = "cilckInborn", t.changeEquip = "changeEquip", t.disBoardEquip = "disBoardEquip", t.openFeedCardSub = "openFeedCardSub", t.showEquipRed = "showEquipRed", t.putOnEquip = "putOnEquip", t.cilckPlant = "cilckPlant", t.plantCall = "plantCall", t.RefHeart = "RefHeart", t.HideTop = "HideTop", t.ShowTop = "ShowTop", t.HideInfinHeart = "HideInfinHeart", t.doDaiFuAttack = "doDaiFuAttack"
        }(a.EventName || (a.EventName = {}));
        var l = function () {
            function t() {
            }

            return t.AppCacheName = "Mutant_Plants:", t.splitCount = "|", t.splitNum = ";", t.PreBundle = [], t.ecrypt = !1, t.abTestType = r.ABTestType.ABD_Test, t
        }();
        a.GameConfig = l, function (t) {
            t.gold = "gold", t.diamond = "diamond", t.sun = "sun", t.ljf = "ljf"
        }(a.Currency || (a.Currency = {})), function (t) {
            t.lottery = "lottery", t.inborn = "inborn", t.levelUp = "levelUp", t.EquipSyn = "EquipSyn"
        }(a.TipType || (a.TipType = {})), cc._RF.pop()
    }, {"../../framework/configs/Appcfg": "Appcfg", "../manager/PlayerMgr": "PlayerMgr"}],
    CustomData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "a5f31JjwExChL0rRbiMMZip", "CustomData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.customsData = void 0;
        var r = t("../../framework/base/BaseData"), s = t("../config/Config"), c = t("../manager/DataMgr"),
            l = cc._decorator, u = l.ccclass, p = (l.property, function () {
                this.currentCustom = 0, this.passAll = !1, this.customStar = []
            });
        a.customsData = p;
        var d = function () {
        }, h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = s.GameConfig.AppCacheName + "customData", e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new d, this.data
            }, e.prototype.initData = function () {
                var t = this;
                if (!this.data.customsData) {
                    this.data.customsData = new p;
                    var e = c.DataMgr.getInstance().getAllLevelCfg();
                    this.data.customsData.currentCustom = e[0].LevelId, e.forEach(function (e) {
                        t.data.customsData.customStar[e.ChapterId - 1] || t.data.customsData.customStar.push([[]]), t.data.customsData.customStar[e.ChapterId - 1][e.Level - 1] = [0, 0, 0]
                    })
                }
                this.saveData()
            }, e.prototype.setOlddata = function (t) {
                null != t && (this.data.customsData = t, this.saveData())
            }, e.prototype.setcustomsData = function () {
            }, e.prototype.setCurrentCustom = function (t) {
                t ? (this.data.customsData.passAll = !1, this.data.customsData.currentCustom = t) : this.data.customsData.passAll = !0, this.saveData()
            }, e.prototype.getCurrentCustom = function () {
                return this.data.customsData || this.saveData(), this.data.customsData
            }, e.prototype.setCustomStar = function (t, e) {
                if (this.data.customsData.customStar.length < t[0]) for (var a = this.data.customsData.customStar.length; a < t[0]; a++) this.data.customsData.customStar.push([[]]);
                var n = this.data.customsData.customStar[t[0] - 1][t[1] - 1];
                n[0] = 0 == n[0] ? e[0] : n[0], n[1] = 0 == n[1] ? e[1] : n[1], n[2] = 0 == n[2] ? e[2] : n[2], this.saveData()
            }, e.prototype.getCurrentStar = function (t) {
                return this.data.customsData || this.saveData(), this.data.customsData.customStar[t[0] - 1][t[1] - 1]
            }, o([u], e)
        }(r.BaseData);
        a.default = h, cc._RF.pop()
    }, {"../../framework/base/BaseData": "BaseData", "../config/Config": "Config", "../manager/DataMgr": "DataMgr"}],
    Customs: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "849904kS95FOqgG0x/QqOad", "Customs");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseCtrl"), s = t("../../framework/manager/UIMgr"), c = t("../config/Config"),
            l = t("../datas/TrackDataEvent"), u = t("../global/Global"), p = t("../manager/LevelMgr"),
            d = t("../manager/PlayerMgr"), h = t("../ui/SDF"), g = t("../ui/UITop"), f = t("./BoxDrop"),
            m = t("./Combat"), y = cc._decorator, v = y.ccclass, I = y.property, _ = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.jgSprite = null, e.zombieSprite = null, e.zombieSke = null, e.starNode = null, e.renderNode = null, e.customLabel = null, e.materials = [], e.spriteFrame = null, e.customData = null, e.isGuide = !1, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    this._sdf = new h.SDF, this.userData = d.PlayerMgr.getInstance().getUserData(), this.addEvent(c.EventName.winGame, function () {
                        t.changeStatus(!0)
                    }), this.node.on(cc.Node.EventType.TOUCH_START, function () {
                        if (d.PlayerMgr.getInstance().getGuideData().getCurrentId() < 3) {
                            if (d.PlayerMgr.getInstance().isLock) return;
                            if (t.customData.LevelId > d.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom) return void s.UIMgr.getInstance().openUI(c.UIID.UITips, c.UIID.UINone, lang.index60eed_66);
                            t.isGuide = !0, d.PlayerMgr.getInstance().isLock = !0, t.scheduleOnce(function () {
                                d.PlayerMgr.getInstance().getGuideData().addCurrentId(!0)
                            }), t.loadPrefab("prefabs", "game/combat", function (e) {
                                var a = cc.instantiate(e);
                                a.getComponent(m.default).levelId = t.customData.LevelId, cc.find("Scene").addChild(a)
                            }), p.LevelMgr.getInstance().setLevel(t.customData.LevelId), cc.find("uiRoot/UIHome").active = !1;
                            var e = cc.find("uiRoot/UITop").getComponent(g.default);
                            e.goldIcon.parent.active = !1, e.diamondIcon.parent.active = !1
                        }
                    }), this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        if (d.PlayerMgr.getInstance().getGuideData().getCurrentId() >= 3) {
                            if (t.isGuide) return void (t.isGuide = !1);
                            if (d.PlayerMgr.getInstance().isLock) return;
                            if (t.customData.LevelId > d.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom) return void s.UIMgr.getInstance().openUI(c.UIID.UITips, c.UIID.UINone, lang.index60eed_67);
                            d.PlayerMgr.getInstance().isLock = !0, t.loadPrefab("prefabs", "game/combat", function (e) {
                                var a = cc.instantiate(e);
                                a.getComponent(m.default).levelId = t.customData.LevelId, cc.find("Scene").addChild(a)
                            }), p.LevelMgr.getInstance().setLevel(t.customData.LevelId), cc.find("uiRoot/UIHome").active = !1;
                            var e = cc.find("uiRoot/UITop").getComponent(g.default);
                            e.goldIcon.parent.active = !1, e.diamondIcon.parent.active = !1
                        }
                    })
                }, e.prototype.changeStatus = function (t) {
                    var e = this;
                    void 0 === t && (t = !1), this.userData = d.PlayerMgr.getInstance().getUserData();
                    var a = d.PlayerMgr.getInstance().getCustomData().getCurrentCustom();
                    this.customLabel.string = this.customData.ChapterId + "-" + this.customData.Level, this.zombieSprite.spriteFrame = this.spriteFrame, this.zombieSprite.node.x = -this.zombieSprite.node.width / 4, this.customData.LevelId < a.currentCustom || 1 == a.passAll ? (this.renderNode.active = !1, this.zombieSke.node.active = !1, this.zombieSprite.node.active = !0, this.zombieSprite.node.y = 0, this.jgSprite.setMaterial(0, this.materials[0]), this.zombieSprite.setMaterial(0, this.materials[0]), d.PlayerMgr.getInstance().getCustomData().getCurrentStar([this.customData.ChapterId, this.customData.Level]).forEach(function (t, a) {
                        t > 0 && (e.starNode.children[a].children[0].active = !0)
                    }), t && u.Global.winBoxDrop && this.customData.LevelId == a.currentCustom - 1 && this.customData.LevelId == p.LevelMgr.getInstance().levelData.LevelId && p.LevelMgr.getInstance().levelData.FirstBox && this.loadPrefab("prefabs", "game/boxDrop", function (t) {
                        var a = cc.instantiate(t), n = a.getComponent(f.default);
                        n.initSpr(!0, p.LevelMgr.getInstance().levelData.FirstBox, p.LevelMgr.getInstance().levelData.ChapterId + "-" + p.LevelMgr.getInstance().levelData.Level), a.scale = .5, a.active = !0, a.x = e.node.x - e.node.parent.width / 2, a.y = e.node.parent.y + e.node.y, a.parent = e.node, d.PlayerMgr.getInstance().getTrackData().youmengTrack(l.TrackId.plantbox_show_X, p.LevelMgr.getInstance().levelData.ChapterId + "-" + p.LevelMgr.getInstance().levelData.Level), cc.tween(a).bezierTo(.4, new cc.Vec2(a.x, a.y + 50), new cc.Vec2(75, a.y + 50), new cc.Vec2(150, -100)).call(function () {
                            n.playAni()
                        }).start()
                    })) : this.customData.LevelId == a.currentCustom ? (this.renderNode.active = !0, this.zombieSke.node.active = !0, this.zombieSprite.node.active = !1, this.zombieSprite.node.y = 0, this.jgSprite.setMaterial(0, this.materials[0]), this.zombieSprite.setMaterial(0, this.materials[0]), this.loadResFromBundle("zombie", this.spriteFrame.name + "/" + this.spriteFrame.name, sp.SkeletonData, function (t) {
                        e.zombieSke.skeletonData = t, t.skeletonJson.skins.length > 1 && e.zombieSke.setSkin("skin_1"), e.zombieSke.setAnimation(0, "idle", !0)
                    }), this.starNode.children.forEach(function (t) {
                        t.children[0].active = !1
                    })) : (this.renderNode.active = !1, this.zombieSke.node.active = !1, this.zombieSprite.node.active = !0, this.zombieSprite.node.y = 0, this.jgSprite.setMaterial(0, this.materials[1]), this.zombieSprite.setMaterial(0, this.materials[1]), this.starNode.children.forEach(function (t) {
                        t.children[0].active = !1
                    }))
                }, e.prototype.changeSprite = function () {
                    this.renderNode.active = !0;
                    var t = this.spriteFrame.getOriginalSize();
                    this.zombieSprite.spriteFrame = this.spriteFrame, this.renderNode.width = this.zombieSprite.node.width = t.width, this.renderNode.height = this.zombieSprite.node.height = t.height;
                    var e = Math.max(60, t.height / 3),
                        a = this._sdf.RenderToMemory(this.zombieSprite.node, null, this.renderNode, .5 * e);
                    this.zombieSprite.node.active = !1;
                    var n = this._sdf.RenderSDF(a, e, .5);
                    this.renderNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n.texture), this.renderNode.y += Math.floor(this.zombieSprite.node.height + e / 2)
                }, o([I({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_68
                })], e.prototype, "jgSprite", void 0), o([I({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_69
                })], e.prototype, "zombieSprite", void 0), o([I({
                    type: sp.Skeleton,
                    tooltip: lang.index60eed_70
                })], e.prototype, "zombieSke", void 0), o([I({
                    type: cc.Node,
                    tooltip: lang.index60eed_71
                })], e.prototype, "starNode", void 0), o([I({
                    type: cc.Node,
                    tooltip: lang.index60eed_72
                })], e.prototype, "renderNode", void 0), o([I({
                    type: cc.Label,
                    tooltip: lang.index60eed_73
                })], e.prototype, "customLabel", void 0), o([I([cc.Material])], e.prototype, "materials", void 0), o([v], e)
            }(r.default);
        a.default = _, cc._RF.pop()
    }, {
        "../../framework/base/BaseCtrl": "BaseCtrl",
        "../../framework/manager/UIMgr": "UIMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../global/Global": "Global",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "../ui/SDF": "SDF",
        "../ui/UITop": "UITop",
        "./BoxDrop": "BoxDrop",
        "./Combat": "Combat"
    }],
    Daifu: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "fc2a52OJYdC/qygfIEp9d+7", "Daifu");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r, s = t("../../framework/manager/AudioMgr"), c = t("../../framework/manager/PoolMgr"),
            l = t("../../framework/utils/Utils"), u = t("../config/Config"), p = t("../datas/TrackDataEvent"),
            d = t("../manager/DataMgr"), h = t("../manager/EquipMgr"), g = t("../manager/MapMgr"),
            f = t("../manager/PlayerMgr"), m = t("./Bullets"), y = t("./CombatUnitCtrl"), v = t("./Plants"),
            I = t("./Zombie"), _ = cc._decorator, b = _.ccclass, C = _.property;
        (function (t) {
            t[t.weapon1 = 4200101] = "weapon1", t[t.weapon2 = 4200102] = "weapon2", t[t.weapon3 = 4200103] = "weapon3", t[t.weapon4 = 4200104] = "weapon4", t[t.weapon5 = 4200105] = "weapon5"
        })(r || (r = {}));
        var D = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.daifu = null, e.progressBarNode = null, e.progressBar = null, e.doubleHit = null, e.daifuEquipData = null, e.daifuWeaponSkill = null, e.daifuAttack = "", e.daifuCD = 0, e.daifuBulletPos = [], e.daifuCNum = 0, e
            }

            return i(e, t), e.prototype.onEnable = function () {
            }, e.prototype.start = function () {
                var t = this;
                this.init(), this.addEvent(u.EventName.doDaiFuAttack, function () {
                    "idle" == t.daifu.animation && t.doDaiFuAttack()
                }), this.addEvent(u.EventName.startGame, function () {
                    t.progressBar.fillRange = 1, t.daifuStatus = y.UnitStatus.Attack, t.daifuWeaponSkill && f.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.lv_equip_X, d.DataMgr.getInstance().getEquipCfgById(h.EquipMgr.getInstance().getWeapon().equipId).Quality)
                }), this.daifu.setCompleteListener(function (e) {
                    if ("attack_gun1" == e.animation.name || "attack_gun2" == e.animation.name || "attack_grenade1" == e.animation.name || "attack_grenade2" == e.animation.name || "attack_grenade3" == e.animation.name) if (t.daifuCNum < 3 && l.Utils.randomRang(0, 100) < 100 * t.daifuEquipData.Continuous) {
                        t.doDaiFuAttack(), t.daifuCNum++;
                        var a = cc.instantiate(t.doubleHit);
                        a.active = !0, a.parent = t.node, cc.tween(a).to(.3, {scale: 2.5}).to(.3, {scale: 1}).call(function () {
                            a.active = !1, a.destroy()
                        }).start()
                    } else t.daifuStatus = y.UnitStatus.Overload, t.daifu.setAnimation(0, "idle", !0), t.progressBarNode.active = !0, t.daifuCNum = 0
                }), this.daifu.setEventListener(function (e, a) {
                    if ("attack" == a.data.name) {
                        t.zombieLine = g.MapMgr.getInstance().zombieLayer.children[0];
                        var n = t.zombieLine.children[0];
                        switch (t.daifuWeaponSkill.AttackType) {
                            case 2:
                                var i = c.PoolMgr.getInstance().getNode("bullet");
                                i.active = !0, i.scale = t.daifuWeaponSkill.BulletZoom, i.getComponent(m.default), i.x = t.daifuBulletPos[0] + g.MapMgr.getInstance().plantLayer.x, i.y = t.daifuBulletPos[1], t.changeBulletSprite(i);
                                var o = n.x - i.x, r = n.y - i.y,
                                    s = cc.v2(o, r).signAngle(cc.v2(1, 0)) / Math.PI * 180;
                                i.angle = -s, i.parent = t.bulletLine;
                                var l = Math.sqrt(o * o + r * r) / t.skillData.BulletSpeed;
                                cc.tween(i).to(l, {x: n.x - 10, y: n.y + 50}).call(function () {
                                    t.changeBulletSke(i, function () {
                                        n.getComponent(I.default).damageReceive(t.countCrit(t.attack), t.skillData, t.plantLayerId, t)
                                    })
                                }).start();
                                break;
                            case 4:
                                t.doDamage(n, t.daifuBulletPos);
                                break;
                            case 5:
                                t.doDamage(n)
                        }
                    }
                })
            }, e.prototype.init = function () {
                if (this.daifuEquipData = h.EquipMgr.getInstance().getEquipProp(), h.EquipMgr.getInstance().getWeapon()) {
                    this.unitType = 3, this.duration = .3, this._median = this.duration / 2, this.attack = this.daifuEquipData.Attack, this.crit = this.daifuEquipData.Crit, this.critDam = this.daifuEquipData.CritDam, this.plantLayerId = [8, 0], this.daifuWeaponSkill = d.DataMgr.getInstance().getSkillLevelCfgById(this.daifuEquipData.weaponSkillID), this.bulletLine = g.MapMgr.getInstance().bulletLayer.children[0], this.skillData = this.daifuWeaponSkill;
                    var t = "";
                    switch (this.daifuEquipData.weaponSkillID) {
                        case r.weapon1:
                            t = "weapon1", this.daifuAttack = "attack_gun1";
                            break;
                        case r.weapon2:
                            t = "weapon5", this.daifuAttack = "attack_grenade3", this.daifuBulletPos = [280, -75 - this.node.y - 40];
                            break;
                        case r.weapon3:
                            t = "weapon4", this.daifuAttack = "attack_grenade2", this.daifuBulletPos = [280, -75 - this.node.y - 40];
                            break;
                        case r.weapon4:
                            t = "weapon2", this.daifuAttack = "attack_gun2", this.daifuBulletPos = [380, -240];
                            break;
                        case r.weapon5:
                            t = "weapon3", this.daifuAttack = "attack_grenade1", this.daifuBulletPos = [280, -75 - this.node.y - 40]
                    }
                    this.daifu.setSkin(t), this.daifu.setAnimation(0, "idle", !0), this.daifuStatus = y.UnitStatus.Prepare
                } else this.node.active = !1
            }, e.prototype.doDaiFuAttack = function () {
                this.daifuStatus == y.UnitStatus.Attack && (this.zombieLine = g.MapMgr.getInstance().zombieLayer.children[0], this.zombieLine.children[0] ? (this.progressBar.fillRange = 0, this.daifu.setAnimation(0, this.daifuAttack, !1), this.skillData.BulletSound && s.AudioMgr.getInstance().playEffect(u.AudioId[this.skillData.BulletSound], 5)) : this.progressBar.fillRange < 1 ? (this.daifuStatus = y.UnitStatus.Overload, this.daifu.setAnimation(0, "idle", !0), this.daifuCNum = 0) : this.daifuStatus = y.UnitStatus.Attack)
            }, e.prototype.update = function (t) {
                this.daifuStatus == y.UnitStatus.Overload && (this.daifuCD += t, this.progressBar.fillRange = this.daifuCD / (this.daifuWeaponSkill.LaunchInterval / this.daifuEquipData.Speed), this.daifuCD >= this.daifuWeaponSkill.LaunchInterval / this.daifuEquipData.Speed && (this.daifuStatus = y.UnitStatus.Attack, this.daifuCD = 0, cc.tween(this.progressBar.node.children[0]).to(.15, {opacity: 255}).to(.15, {opacity: 0}).start()))
            }, o([C({type: sp.Skeleton, tooltip: lang.index60eed_74})], e.prototype, "daifu", void 0), o([C({
                type: cc.Node,
                tooltip: lang.index60eed_75
            })], e.prototype, "progressBarNode", void 0), o([C({
                type: cc.Sprite,
                tooltip: lang.index60eed_76
            })], e.prototype, "progressBar", void 0), o([C({
                type: cc.Node,
                tooltip: lang.index60eed_77
            })], e.prototype, "doubleHit", void 0), o([b], e)
        }(v.default);
        a.default = D, cc._RF.pop()
    }, {
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PoolMgr": "PoolMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/MapMgr": "MapMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./Bullets": "Bullets",
        "./CombatUnitCtrl": "CombatUnitCtrl",
        "./Plants": "Plants",
        "./Zombie": "Zombie"
    }],
    DataMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "a3d71eFHL9IW7ks0mgrQcIp", "DataMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.DataMgr = void 0;
        var n = t("../../framework/configs/Appcfg"), i = t("../../framework/manager/EventMgr"),
            o = t("../../framework/manager/ResourceMgr"), r = function () {
                function t() {
                    this.bSheetNames = ["events"]
                }

                return t.getInstance = function () {
                    return null == this.instance && (this.instance = new t), this.instance
                }, t.prototype.preload = function () {
                    var t = this;
                    o.ResourceMgr.getInstance().loadRes("configs", "GameJsonCfg", cc.JsonAsset, function (e) {
                        t.data = e.json, e.decRef(), t.orderCfgs(), i.EventMgr.getInstance().emit(n.BaseEventName.Loading, n.LoadingProcess.ExcelCfg)
                    })
                }, t.prototype.reloadConfig = function (t, e) {
                    var a = this;
                    if ("A" != t && "C" != t) if (this.bSheetNames.length <= 0) e && e(); else {
                        var n = "configsB";
                        this.bSheetNames = ["LevelCfg", "SystemUnlock"], "D" == t && (n = "configsD", this.bSheetNames = ["LevelCfg", "SystemUnlock"]), o.ResourceMgr.getInstance().loadRes(n, "GameJsonCfg", cc.JsonAsset, function (t) {
                            for (var n = t.json, i = 0; i < a.bSheetNames.length; i++) {
                                var o = a.bSheetNames[i];
                                a.data[o] = n[o]
                            }
                            t.decRef(), e && e()
                        })
                    } else e && e()
                }, t.prototype.orderCfgs = function () {
                    this.data.HeroCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.DrawCardCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.DrawCardLibraryCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.Drop.sort(function (t, e) {
                        return t.Id - e.Id
                    }), this.data.HeroLevel.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.HeroSynthesis.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.InbornCfg.sort(function (t, e) {
                        return t.Id - e.Id
                    }), this.data.ItemCfg.sort(function (t, e) {
                        return t.ItemId - e.ItemId
                    }), this.data.LevelCfg.sort(function (t, e) {
                        return t.LevelId - e.LevelId
                    }), this.data.LevelConfiguration.sort(function (t, e) {
                        return t.Id - e.Id
                    }), this.data.MonsterCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.ParamsCfg.sort(function (t, e) {
                        return t.id - e.id
                    }), this.data.SkillLevelCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.Describe.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.GuideCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.BattlePassCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.LoginRewards.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.NewInbornCfg.sort(function (t, e) {
                        return t.Id - e.Id
                    }), this.data.InbornMultipleCfg.sort(function (t, e) {
                        return t.Id - e.Id
                    }), this.data.EquipCfg.sort(function (t, e) {
                        return t.ID - e.ID
                    }), this.data.SystemUnlock.sort(function (t, e) {
                        return t.ID - e.ID
                    })
                }, t.prototype.getTextCfgs = function () {
                    return this.data && this.data.TextCfg ? this.data.TextCfg : []
                }, t.prototype.getText = function (t) {
                    var e = this.getTextCfgs();
                    if (e) for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        if (n.zh == t) return n
                    }
                    return null
                }, t.prototype.T = function (e, a) {
                    if (a == n.LanguageType.zh) return e;
                    var i = t.getInstance().getText(e);
                    return i && i[a] ? i[a] : e
                }, t.prototype.getAllDrawCardCfg = function () {
                    return this.data.DrawCardCfg
                }, t.prototype.getAllDrawCardLibraryCfg = function () {
                    return this.data.DrawCardLibraryCfg
                }, t.prototype.getDrawCardLibraryCfgById = function (t) {
                    var e = [];
                    return this.data.DrawCardLibraryCfg.forEach(function (a) {
                        a.LibraryID == t && e.push(a)
                    }), e
                }, t.prototype.getAllDrop = function () {
                    return this.data.Drop
                }, t.prototype.getDropById = function (t) {
                    return this.data.Drop.find(function (e) {
                        return e.Id == t
                    })
                }, t.prototype.getAllInbornCfg = function () {
                    return this.data.InbornCfg
                }, t.prototype.getAllItemCfg = function () {
                    return this.data.ItemCfg
                }, t.prototype.getItemCfgById = function (t) {
                    for (var e = 0; e < this.data.ItemCfg.length; e++) if (this.data.ItemCfg[e].ItemId == t) return this.data.ItemCfg[e]
                }, t.prototype.getAllParamsCfg = function () {
                    return this.data.ParamsCfg
                }, t.prototype.getAllDescribe = function () {
                    return this.data.Describe
                }, t.prototype.getDescribeById = function (t) {
                    return this.data.Describe.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllGuideCfg = function () {
                    return this.data.GuideCfg
                }, t.prototype.getGuideCfgById = function (t) {
                    return this.data.GuideCfg.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllBattlePassCfg = function () {
                    return this.data.BattlePassCfg
                }, t.prototype.getBattlePassCfgById = function (t) {
                    return this.data.BattlePassCfg.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllLoginRewards = function () {
                    return this.data.LoginRewards
                }, t.prototype.getLoginRewardsById = function (t) {
                    return this.data.LoginRewards.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllNewInbornCfg = function () {
                    return this.data.NewInbornCfg
                }, t.prototype.getNewInbornCfgById = function (t) {
                    return this.data.NewInbornCfg.find(function (e) {
                        return e.Id == t
                    })
                }, t.prototype.getNewInbornCfgByLevelId = function (t) {
                    return this.data.NewInbornCfg.filter(function (e) {
                        return e.BelongLevel == t
                    })
                }, t.prototype.getAllInbornMultipleCfg = function () {
                    return this.data.InbornMultipleCfg
                }, t.prototype.getInbornMultipleCfgByLevelId = function (t) {
                    return this.data.InbornMultipleCfg.filter(function (e) {
                        return e.BelongLevel == t
                    })
                }, t.prototype.getInbornMultipleCfgById = function (t) {
                    return this.data.InbornMultipleCfg[t]
                }, t.prototype.getAllEquipCfg = function () {
                    return this.data.EquipCfg
                }, t.prototype.getEquipCfgById = function (t) {
                    return this.data.EquipCfg.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllSystemUnlock = function () {
                    return this.data.SystemUnlock
                }, t.prototype.getSystemUnlockById = function (t) {
                    return this.data.SystemUnlock.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllHeroCfg = function () {
                    return this.data.HeroCfg
                }, t.prototype.getHeroCfgById = function (t) {
                    return this.data.HeroCfg.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getHeroLvScope = function (t) {
                    return this.getHeroCfgById(t).LvScope.split(",")
                }, t.prototype.getAllHeroLevel = function () {
                    return this.data.HeroLevel
                }, t.prototype.getHeroLevelById = function (t) {
                    return this.data.HeroLevel.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllHeroSynthesis = function () {
                    return this.data.HeroSynthesis
                }, t.prototype.getHeroSynthesisBySynId = function (t) {
                    for (var e = 0; e < this.data.HeroSynthesis.length; e++) if (this.data.HeroSynthesis[e].SyntheticHeroID == t) return this.data.HeroSynthesis[e]
                }, t.prototype.getAllLevelCfg = function () {
                    return this.data.LevelCfg
                }, t.prototype.getLevelCfgById = function (t) {
                    return this.data.LevelCfg.find(function (e) {
                        return e.LevelId == t
                    })
                }, t.prototype.getLevelCfgByChapterId = function (t) {
                    var e = [];
                    return this.data.LevelCfg.forEach(function (a) {
                        a.ChapterId == t && e.push(a)
                    }), e
                }, t.prototype.getAllLevelConfiguration = function () {
                    return this.data.LevelConfiguration
                }, t.prototype.getLevelConfigurationWave = function (t) {
                    var e = [];
                    return this.data.LevelConfiguration.forEach(function (a) {
                        a.LevelId == t && e.push(a)
                    }), e
                }, t.prototype.getAllMonsterCfg = function () {
                    return this.data.MonsterCfg
                }, t.prototype.getMonsterCfgById = function (t) {
                    return this.data.MonsterCfg.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getAllSkillLevelCfg = function () {
                    return this.data.SkillLevelCfg
                }, t.prototype.getSkillLevelCfgById = function (t) {
                    return this.data.SkillLevelCfg.find(function (e) {
                        return e.ID == t
                    })
                }, t.prototype.getSkillLevelCfgDescribeById = function (t) {
                    return this.data.SkillLevelCfg.find(function (e) {
                        return e.ID == t
                    }).Describe.split(",")
                }, t
            }();
        a.DataMgr = r, cc._RF.pop()
    }, {
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/EventMgr": "EventMgr",
        "../../framework/manager/ResourceMgr": "ResourceMgr"
    }],
    EditorManager: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "e84c9h26/pDL5ehMU5LlXD7", "EditorManager"), Object.defineProperty(a, "__esModule", {value: !0}), a.EditorManager = void 0;
        var n = function () {
            function t() {
                this.hasInstallShortCut = !1, this.infostr = []
            }

            return t.prototype.checkShortcut = function (t, e) {
                console.log(lang.index60eed_78), e(this.hasInstallShortCut)
            }, t.prototype.addShortcut = function (t, e) {
                console.log(lang.index60eed_79), e(lang.index60eed_80), this.hasInstallShortCut = !0
            }, t.prototype.hasVerify = function () {
                return !0
            }, t.prototype.canShare = function () {
                return !1
            }, t.prototype.youmengTrack = function (t, e, a, n) {
                var i = lang.index60eed_81 + t + "\n";
                i += lang.index60eed_82 + a + "\n", i += lang.index60eed_83 + e + "\n", i += lang.index60eed_84 + n + "\n", window.alert(i)
            }, t.prototype.initSdk = function (t, e) {
                e && e()
            }, t.prototype.login = function (t, e) {
                e && e()
            }, t.prototype.pay = function (t, e) {
                e && e()
            }, t.prototype.share = function (t, e) {
                e && e()
            }, t.prototype.showBanner = function (t, e) {
                e && e()
            }, t.prototype.hideBanner = function (t, e) {
                e && e()
            }, t.prototype.showInsertAd = function (t, e) {
                e && e()
            }, t.prototype.showVideoAd = function (t, e) {
                console.log("showVideoAd"), e && e()
            }, t.prototype.otherFun = function (t, e) {
                e && e()
            }, t.prototype.shark = function (t, e) {
                e && e()
            }, t.prototype.recordVideo = function (t, e) {
                e && e()
            }, t.prototype.shareVideo = function (t, e) {
                e && e()
            }, t.prototype.stopRecorderManager = function (t, e) {
                e && e()
            }, t.prototype.setLanguage = function (t, e) {
                return e && e(), "zh"
            }, t
        }();
        a.EditorManager = n, cc._RF.pop()
    }, {}],
    EquipData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "30e0dsbbyNIcrDdcHfTtDTX", "EquipData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.newEquipData = a.plantEquipData = a.Data = a.plantEquipDataEnum = void 0;
        var r, s = t("../../framework/base/BaseData"), c = t("../../framework/manager/EventMgr"),
            l = t("../../framework/manager/LogMgr"), u = t("../../framework/utils/UIUtils"),
            p = t("../../game/config/Config"), d = t("../manager/DataMgr"), h = t("../manager/PlayerMgr"),
            g = t("../ui/UIEquip"), f = t("./TrackDataEvent"), m = cc._decorator, y = m.ccclass;
        m.property, function (t) {
            t[t.gainIndex = 0] = "gainIndex", t[t.equipId = 1] = "equipId", t[t.puton = 2] = "puton", t[t.isLock = 3] = "isLock"
        }(r = a.plantEquipDataEnum || (a.plantEquipDataEnum = {}));
        var v = function () {
            this.EquipData2 = [], this.equipCellNum = 20, this.putOnArr = [], this.curGainIndex = 0, this.equipNum = 0, this.equipProp = new g.equipProperty, this.bestQuality = 0
        };
        a.Data = v;
        var I = function () {
            this.gainIndex = 0, this.puton = !1, this.isLock = !1
        };
        a.plantEquipData = I;
        a.newEquipData = function () {
            this.num = 0
        };
        var _ = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gameKey = p.GameConfig.AppCacheName + "EquipData", e.EquipData = [], e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new v, this.data
            }, e.prototype.initData = function () {
                var t = this;
                if (this.EquipData || (this.EquipData = []), this.data.putOnArr || (this.data.putOnArr = []), this.data.curGainIndex || (this.data.curGainIndex = 0), this.data.equipNum || (this.data.equipNum = 0, this.data.putOnArr.forEach(function (e) {
                    e && t.data.equipNum++
                })), this.data.equipProp || (this.data.equipProp = new g.equipProperty), this.data.bestQuality || (this.data.bestQuality = 0), this.data.EquipData2 || (this.data.EquipData2 = []), this.data.EquipData) {
                    for (var e = this.data.EquipData, a = 0; a < e.length; a++) e[a] && (this.data.EquipData2[a] || (this.data.EquipData2[a] = []), this.data.EquipData2[a] = this.revert(e[a]));
                    this.data.EquipData = []
                }
                if (this.data.EquipData2) for (a = 0; a < this.data.EquipData2.length; a++) this.data.EquipData2[a] && (this.EquipData[a] = this.convert(this.data.EquipData2[a]));
                this.saveData()
            }, e.prototype.convert = function (t) {
                var e = new I;
                return e.gainIndex = t[r.gainIndex], e.equipId = t[r.equipId], e.puton = 1 == t[r.puton], e.isLock = 1 == t[r.isLock], e
            }, e.prototype.revert = function (t) {
                var e = [];
                return e[r.gainIndex] = t.gainIndex, e[r.equipId] = t.equipId, e[r.puton] = t.puton ? 1 : 0, e[r.isLock] = t.isLock ? 1 : 0, e
            }, e.prototype.beforeSaveData = function () {
                if (this.EquipData) {
                    this.data.EquipData2 = [];
                    for (var t = 0; t < this.EquipData.length; t++) this.EquipData[t] && (this.data.EquipData2[t] = this.revert(this.EquipData[t]))
                }
            }, e.prototype.refreshEquip = function () {
                this.EquipData.sort(function (t, e) {
                    return e.equipId - t.equipId
                }), this.EquipData.sort(function (t, e) {
                    return d.DataMgr.getInstance().getEquipCfgById(t.equipId).Type - d.DataMgr.getInstance().getEquipCfgById(e.equipId).Type
                }), this.EquipData.sort(function (t, e) {
                    var a = d.DataMgr.getInstance().getEquipCfgById(t.equipId).Quality;
                    return d.DataMgr.getInstance().getEquipCfgById(e.equipId).Quality - a
                }), this.saveData(), c.EventMgr.getInstance().emit(p.EventName.changeEquip)
            }, e.prototype.addEquip = function (t, e) {
                if (void 0 === e && (e = !1), !d.DataMgr.getInstance().getEquipCfgById(t)) return l.LogMgr.getInstance().debug(lang.index60eed_85);
                var a = new I;
                a.equipId = t, a.gainIndex = this.getGainIndex(), this.EquipData.push(a);
                var n = d.DataMgr.getInstance().getEquipCfgById(t);
                n.Quality > this.data.bestQuality && (h.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.equip_lv_X, n.Quality), this.data.bestQuality = n.Quality), e && this.putOnEquip(a, n.Type), this.refreshEquip()
            }, e.prototype.deleteEquipById = function (t) {
                this.EquipData = this.EquipData.filter(function (e) {
                    return e.gainIndex != t
                }), this.saveData()
            }, e.prototype.getGainIndex = function () {
                return this.data.curGainIndex += 1, this.saveData(), this.data.curGainIndex
            }, e.prototype.getEquipData = function () {
                return this.EquipData
            }, e.prototype.setEquipDataById = function (t, e) {
                this.EquipData.find(function (e) {
                    return e.gainIndex == t
                }).puton = e, this.saveData()
            }, e.prototype.getEquipDataPutOnById = function (t) {
                return this.EquipData.find(function (e) {
                    return e.gainIndex == t
                }).puton
            }, e.prototype.getEquipDataByGainIndex = function (t) {
                return this.EquipData.find(function (e) {
                    return e.gainIndex == t
                })
            }, e.prototype.setEquipDataIsLockById = function (t, e) {
                this.EquipData.find(function (e) {
                    return e.gainIndex == t
                }).isLock = e, this.saveData()
            }, e.prototype.getEquipDataIsLockById = function (t) {
                return this.EquipData.find(function (e) {
                    return e.gainIndex == t
                }).isLock
            }, e.prototype.putOnEquip = function (t, e) {
                var a = this;
                this.data.putOnArr[e - 1] && this.disBoardEquip(this.data.putOnArr[e - 1], !1), this.data.equipNum++, t.puton = !0;
                var n = this.EquipData.indexOf(t);
                this.EquipData.splice(n, 1), this.data.putOnArr[e - 1] = t, h.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.equip_X, this.data.equipNum), c.EventMgr.getInstance().emit(p.EventName.putOnEquip, e), u.UIUtils.scheduleOnce(function () {
                    a.refreshEquip()
                }, this, .01)
            }, e.prototype.disBoardEquip = function (t, e) {
                var a = this;
                void 0 === e && (e = !0), this.data.equipNum--, t.puton = !1, this.EquipData.push(t);
                var n = this.data.putOnArr.indexOf(t);
                this.data.putOnArr[n] = null, e && u.UIUtils.scheduleOnce(function () {
                    c.EventMgr.getInstance().emit(p.EventName.disBoardEquip, n), a.refreshEquip()
                }, this, .01)
            }, e.prototype.getPutOnArr = function () {
                return this.data.putOnArr
            }, e.prototype.getPutOnArrByType = function (t) {
                return this.data.putOnArr[t - 1]
            }, e.prototype.addEquipCellNum = function (t) {
                this.data.equipCellNum += t, this.saveData()
            }, e.prototype.getEquipCellNum = function () {
                return this.data.equipCellNum
            }, e.prototype.getEquipNum = function () {
                return this.data.equipNum
            }, e.prototype.setEquipProp = function (t) {
                this.data.equipProp = t, this.saveData()
            }, e.prototype.getEquipProp = function () {
                return this.data.equipProp.Speed < 1 && (this.data.equipProp.Speed = 1, this.saveData()), this.data.equipProp
            }, o([y], e)
        }(s.BaseData);
        a.default = _, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../framework/manager/EventMgr": "EventMgr",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../../game/config/Config": "Config",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "../ui/UIEquip": "UIEquip",
        "./TrackDataEvent": "TrackDataEvent"
    }],
    EquipMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "bc995oWaV5KfJ55cjLXFKU9", "EquipMgr");
        var n = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.EquipMgr = void 0;
        var i = t("../../framework/manager/EventMgr"), o = t("../../framework/manager/ResourceMgr"),
            r = t("../../framework/utils/Utils"), s = t("../config/Config"), c = t("./DataMgr"), l = t("./PlayerMgr"),
            u = cc._decorator, p = u.ccclass, d = (u.property, function () {
                function t() {
                }

                var e;
                return e = t, t.getInstance = function () {
                    return null == this.instance && (this.instance = new e), this.instance
                }, t.prototype.init = function () {
                    this.userData = l.PlayerMgr.getInstance().getUserData(), this.equipData = l.PlayerMgr.getInstance().getEquipData()
                }, t.prototype.addEquip = function (t, e) {
                    void 0 === e && (e = !1);
                    var a = c.DataMgr.getInstance().getEquipCfgById(t);
                    this.equipData.getPutOnArr()[a.Type - 1] || i.EventMgr.getInstance().emit(s.EventName.showEquipRed, !0), this.equipData.addEquip(t, e)
                }, t.prototype.deleteEquipById = function (t) {
                    this.equipData.deleteEquipById(t)
                }, t.prototype.putOnEquip = function (t, e) {
                    this.equipData.putOnEquip(t, e)
                }, t.prototype.disBoardEquip = function (t, e) {
                    void 0 === e && (e = !0), this.equipData.disBoardEquip(t, e)
                }, t.prototype.getEquipInten = function (t) {
                    for (var e = 4; e >= 0;) {
                        if (t >= r.Utils.cumsum(e) + 1) return t - r.Utils.cumsum(e) - 1;
                        e--
                    }
                }, t.prototype.changeEquipSp = function (t, e) {
                    o.ResourceMgr.getInstance().loadSpriteframe("EquipIcon", e.Icon, function (e) {
                        t.getChildByName("eqIcon").getComponent(cc.Sprite).spriteFrame = e
                    }), o.ResourceMgr.getInstance().loadSpriteframe("EquipIcon", e.BottomFrame, function (e) {
                        t.getComponent(cc.Sprite).spriteFrame = e
                    }), e.Quality > r.Utils.cumsum(4) ? (t.getChildByName("effect1").active = !0, t.getChildByName("effect2").active = !1, t.getChildByName("effect3").active = !0) : e.Quality > r.Utils.cumsum(3) ? (t.getChildByName("effect1").active = !1, t.getChildByName("effect2").active = !0, t.getChildByName("effect3").active = !1) : (t.getChildByName("effect1").active = !1, t.getChildByName("effect2").active = !1, t.getChildByName("effect3").active = !1), t.getChildByName("plus") && (t.getChildByName("plus").opacity = 0);
                    var a = t.getChildByName("eqInten");
                    if (this.getEquipInten(e.Quality) > 0) {
                        var n = e.BottomFrame.split("_");
                        n[n.length - 1] = Number(n[n.length - 1]) + 1 + "";
                        var i = n.join("_");
                        o.ResourceMgr.getInstance().loadSpriteframe("EquipIcon", i, function (t) {
                            a.getComponent(cc.Sprite).spriteFrame = t
                        }), a.getChildByName("intenNum").getComponent(cc.Label).string = "+" + this.getEquipInten(e.Quality), a.active = !0
                    } else a.active = !1
                }, t.prototype.initEquip = function (t, e) {
                    t.getChildByName("mask") && (t.getChildByName("mask").active = !1), t.getChildByName("eqIcon").getComponent(cc.Sprite).spriteFrame = null, t.getChildByName("eqInten").active = !1, t.off(cc.Node.EventType.TOUCH_END), t.getChildByName("effect1").active = !1, t.getChildByName("effect2").active = !1, t.getChildByName("effect3").active = !1, t.getComponent(cc.Sprite).spriteFrame = e
                }, t.prototype.getEquipProp = function () {
                    return this.equipData.getEquipProp()
                }, t.prototype.setEquipProp = function (t) {
                    return this.equipData.setEquipProp(t)
                }, t.prototype.getWeapon = function () {
                    return this.equipData.getPutOnArr()[0]
                }, t.instance = null, e = n([p], t)
            }());
        a.EquipMgr = d, cc._RF.pop()
    }, {
        "../../framework/manager/EventMgr": "EventMgr",
        "../../framework/manager/ResourceMgr": "ResourceMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "./DataMgr": "DataMgr",
        "./PlayerMgr": "PlayerMgr"
    }],
    EventMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "1679c2ub2tJ4L/kArQZViBz", "EventMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.EventMgr = a.Listener = void 0;
        var n = function () {
            function t(t, e) {
                this.mListener = e, this.mtarget = t
            }

            return Object.defineProperty(t.prototype, "listener", {
                get: function () {
                    return this.mListener
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "target", {
                get: function () {
                    return this.mtarget
                }, enumerable: !1, configurable: !0
            }), t
        }();
        a.Listener = n;
        var i = function () {
            function t() {
                this.global_event_list = new Array
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.on = function (t, e, a, i) {
                if (void 0 === i && (i = !1), null != t && null != a) {
                    if (null == this.global_event_list[t] && (this.global_event_list[t] = new Array), !i && this.global_event_list[t]) for (var o = 0; o < this.global_event_list[t].length; o++) if (this.global_event_list[t][o].listener == a && this.global_event_list[t][o].target == e) return;
                    var r = new n(e, a);
                    this.global_event_list[t].push(r)
                } else console.error("RegistEvent Error")
            }, t.prototype.off = function (t, e, a) {
                if (null != t && null != a && null != this.global_event_list[t]) for (var n = 0; n < this.global_event_list[t].length; n++) this.global_event_list[t][n].listener == a && this.global_event_list[t][n].target == e && this.global_event_list[t].splice(n, 1)
            }, t.prototype.removeAll = function () {
                this.global_event_list = new Array
            }, t.prototype.emit = function (t, e, a, n, i, o, r) {
                if (null != t) {
                    if (null != this.global_event_list[t]) for (var s = 0; s < this.global_event_list[t].length; s++) {
                        var c = this.global_event_list[t][s];
                        c && c.listener.call(c.target, e, a, n, i, o, r)
                    }
                } else console.error("FireEvent Error")
            }, t.instance = null, t
        }();
        a.EventMgr = i, cc._RF.pop()
    }, {}],
    FeedCardMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "a9a1cbst2JBoKbgx0IY7McJ", "FeedCardMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.SaveKey = a.TaskData = a.FeedCardMgr = void 0;
        var n = function () {
            function t() {
                this.isInit = !1, this.platformId = -1, this.bytebroadside = ["021036", "021001", "011004", "101001", "021003", "061001", "061004"], this.datas = []
            }

            return t.prototype.init = function () {
                this.isInit = !0, this.systemInfo = tt.getSystemInfoSync(), this.launchOptions = tt.getLaunchOptionsSync();
                var t = localStorage.getItem(i.uid_key);
                if (t && (this.uid = t), this.launchOptions) {
                    var e = this.launchOptions.extra;
                    e && (this.appId = e.appId)
                }
                null != this.systemInfo && ("Douyin" != this.systemInfo.appName && "douyin_lite" != this.systemInfo.appName || ("douyin_lite" == this.systemInfo.appName ? this.platformId = 2 : this.platformId = 1))
            }, t.prototype.getIsBytebroadside = function () {
                this.isInit || this.init();
                for (var t = 0; t < this.bytebroadside.length; t++) if (console.log(lang.index60eed_86, this.bytebroadside[t], this.launchOptions.scene), this.bytebroadside[t] == this.launchOptions.scene) return !0;
                return !1
            }, t.prototype.checkCanSend = function () {
                return this.isInit || this.init(), -1 != this.platformId
            }, t.prototype.getLaunchCardId = function () {
                if (this.isInit || this.init(), this.launchOptions) {
                    if (1 == this.platformId) {
                        if (this.launchOptions.scene + "" != "023040") return -1
                    } else if (2 == this.platformId && this.launchOptions.scene + "" != "103040") return -1;
                    return this.launchOptions.query.card_id ? this.launchOptions.query.card_id : -1
                }
                return -1
            }, t.prototype.getTaskTarget = function (t) {
                if (this.iLog(lang.index60eed_87), this.isInit || this.init(), !this.checkCanSend()) return console.error(lang.index60eed_88), void (t && t(null));
                this.appId
            }, t.prototype.sendTask = function (t, e) {
                var a = this;
                return this.iLog(lang.index60eed_89), this.isInit || this.init(), this.getIsSend(t) ? (console.error(lang.index60eed_90), void (e && e(!0))) : this.checkCanSend() ? void this.getOpenId(function () {
                    a.appId, a.openId, a.platformId
                }) : (console.error(lang.index60eed_91), void (e && e(!1)))
            }, t.prototype.openSubscribe = function (t, e) {
                return null == this.uid ? (console.error(lang.index60eed_92), void (e && e(null))) : this.checkCanSend() ? void this.iLog(lang.index60eed_93) : (console.error(lang.index60eed_94), void (e && e(null)))
            }, t.prototype.getTaskData = function () {
                if (this.datas.length > 0) return this.datas;
                for (var t = 0; t < this.taskdatas.length; t++) {
                    var e = this.taskdatas[t];
                    -1 != e.platform.indexOf(this.platformId + "") && this.datas.push(e)
                }
                return this.datas
            }, t.prototype.getTaskDataById = function (t) {
                for (var e = 0; e < this.taskdatas.length; e++) {
                    var a = this.taskdatas[e];
                    if (a.id == t) return a
                }
                return null
            }, t.prototype.getTaskDataConditions = function (t) {
                for (var e = 0; e < this.taskdatas.length; e++) {
                    var a = this.taskdatas[e];
                    if (a.conditions == t) return a
                }
                return null
            }, t.prototype.getOpenId = function (t) {
                var e = this, a = this, n = localStorage.getItem(i.openId);
                if (n) return this.openId = n, void (t && t(this.openId));
                tt.login({
                    force: !1, success: function (n) {
                        if (n.code) {
                            var o = localStorage.getItem(i.openId);
                            a.openId = o, o && "" != o ? t && t(a.openId) : (n.code, e.appId)
                        } else t && t(null)
                    }, fail: function (e) {
                        console.error(e.errMsg), t && t(!1)
                    }
                })
            }, t.prototype.ttRequest = function (t, e, a) {
                tt.request({
                    url: t,
                    data: e,
                    header: {"content-type": "application/json"},
                    dataType: "JSON",
                    responseType: "text",
                    success: function (t) {
                        a(t)
                    },
                    fail: function (t) {
                        a(t)
                    }
                })
            }, t.prototype.getIsSend = function (t) {
                var e = localStorage.getItem(i.taskSend);
                if (e) {
                    var a = e.split("_");
                    if (a[0] == this.getTimeDay() && a[1] && -1 != a[1].indexOf(t + "")) return !0
                }
                return !1
            }, t.prototype.addTaskCardId = function (t) {
                var e = localStorage.getItem(i.taskSend);
                if (null == e) localStorage.setItem(i.taskSend, this.getTimeDay() + "_" + t); else {
                    var a = e.split("_");
                    localStorage.setItem(i.taskSend, this.getTimeDay() + "_" + a[1] + "," + t)
                }
            }, t.prototype.iLog = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                console.log("SF_FeedCard:", t)
            }, t.prototype.getTimeDay = function () {
                var t = new Date, e = t.getFullYear(), a = t.getMonth() + 1, n = t.getDate(), i = a + "", o = n + "";
                return a >= 1 && a <= 9 && (i = "0" + a), n >= 0 && n <= 9 && (o = "0" + n), e + "-" + i + "-" + o
            }, Object.defineProperty(t, "instance", {
                get: function () {
                    return this._instance || (this._instance = new t), this._instance
                }, enumerable: !1, configurable: !0
            }), t
        }();
        a.FeedCardMgr = n;
        a.TaskData = function () {
        };
        var i = function () {
            function t() {
            }

            return t.openId = "igame_openId", t.uid_key = "igame_server_uid", t.taskSend = "igame_task", t
        }();
        a.SaveKey = i, cc._RF.pop()
    }, {}],
    GameController: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "13317lgz7dLnLXU1MsBl7h4", "GameController");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../framework/manager/ResourceMgr"), s = t("../framework/manager/SdkMgr"),
            c = t("../framework/utils/Utils"), l = cc._decorator, u = l.ccclass, p = l.property, d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.canvas = null, e.label_parent = null, e.double_lb = null, e.gameover_UI = null, e.plane = null, e.barrier_parent = null, e.btn_resurgence = null, e.special_btn = null, e.score_lb = null, e.state_lb = [], e.bullet = null, e.barrier = null, e.buff = null, e.invincible_lb_pre = null, e.bullet_left_pos = null, e.bullet_right_pos = null, e.barrier_spacing = cc.v2(10, 50), e.invincible_time = 8, e.barrier_width = 100, e.barrier_height = 100, e.barrier_health = 1, e.barrier_speed = 100, e.generation_interval = .8, e.increase = 2, e.bullet_num = 10, e.bullet_speed = 100, e.ATK = 2, e.probability = 5, e.add_buff_num = [100, 5], e.is_debug = !1, e.is_barrier_create = !0, e.is_fire = !0, e.is_barrier_move = !0, e.is_plane_move = !0, e.is_double = !1, e.score = 0, e.cre_bar = 0, e.cre_bar_f = 0, e.l = 0, e.r = 0, e.lb = null, e.ultimately_score_lb = null, e
                }

                return i(e, t), e.prototype.onLoad = function () {
                    cc.game.setFrameRate(90), cc.director.resume(), this.canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
                    var t = cc.director.getCollisionManager();
                    t.enabled = !0, 1 == this.is_debug && (t.enabledDebugDraw = !0, t.enabledDrawBoundingBox = !0), this.create_barrier(), this.cre_bar_f = this.barrier_height / this.barrier_speed + Math.random() * this.generation_interval;
                    var e = new cc.Node;
                    e.parent = this.gameover_UI.children[0], e.addComponent(cc.Label), e.getComponent(cc.Label).string = lang.index60eed_95 + Math.floor(this.score), e.getComponent(cc.Label).overflow = cc.Label.Overflow.SHRINK, this.ultimately_score_lb = e.getComponent(cc.Label), e.color = cc.color(0, 0, 0, 255)
                }, e.prototype.update = function (t) {
                    var e = 1 / this.bullet_num;
                    this.l += t, this.l > e && 1 == this.is_fire && (this.l = 0, this.create_bullet(cc.v3(this.bullet_left_pos))), this.r += t, this.r > e && 1 == this.is_fire && (this.r = 0, this.create_bullet(cc.v3(this.bullet_right_pos))), 1 == this.is_barrier_create && (this.cre_bar = this.cre_bar + t), this.cre_bar >= this.cre_bar_f && (this.cre_bar = 0, this.cre_bar_f = this.barrier_height / this.barrier_speed + Math.random() * this.generation_interval, this.create_barrier());
                    var a = Math.floor(this.bullet_speed), n = Math.floor(this.ATK);
                    if (this.state_lb[0].string = a < 1e4 ? lang.index60eed_96 + a : lang.index60eed_97, this.state_lb[1].string = lang.index60eed_98 + n, this.score < 1e3) this.score_lb.string = lang.index60eed_99 + Math.floor(this.score); else if (this.score < 1e4) {
                        var i = (Math.floor(this.score) / 1e3).toFixed(2);
                        this.score_lb.string = lang.index60eed_100 + i + "K"
                    } else i = (Math.floor(this.score) / 1e4).toFixed(2), this.score_lb.string = lang.index60eed_101 + i + "W";
                    var o = -this.canvas.width / 2 + this.plane.width / 2, r = this.canvas.width / 2 - this.plane.width / 2,
                        s = this.canvas.height / 2 - this.plane.height / 2,
                        c = -this.canvas.height / 2 + this.plane.height / 2;
                    this.plane.x > r && (this.plane.x = r), this.plane.x < o && (this.plane.x = o), this.plane.y > s && (this.plane.y = s), this.plane.y < c && (this.plane.y = c)
                }, e.prototype.add_score = function (t) {
                    this.score = this.score + t
                }, e.prototype.onMove = function (t) {
                    if (1 == this.is_plane_move) {
                        var e = t.getPreviousLocation(), a = t.getLocation(), n = e.sub(a);
                        this.plane.x -= n.x, this.plane.y -= n.y
                    }
                }, e.prototype.create_bullet = function (t) {
                    var e = cc.instantiate(this.bullet);
                    e.parent = this.canvas;
                    var a = t.x + this.plane.x, n = t.y + this.plane.y, i = this.canvas.convertToNodeSpaceAR(cc.v3(a, n)),
                        o = cc.v3(i.x + this.canvas.width / 2, i.y + this.canvas.height / 2);
                    e.position = cc.v3(o)
                }, e.prototype.create_barrier = function () {
                    for (var t = -this.canvas.width / 2 + this.barrier_width / 2 + 100 * Math.random(), e = this.canvas.width / 2 - this.barrier_width / 2 - 50 * Math.random(), a = this.canvas.height / 2 + this.barrier_height / 2, n = this.randomNumber(this.barrier_spacing.x, this.barrier_spacing.y), i = function () {
                        var e = 100 * Math.random();
                        if (e > o.probability) {
                            var i = cc.instantiate(o.barrier);
                            i.parent = o.barrier_parent, i.position = cc.v3(t, a);
                            var s = c.Utils.randomRang(1, 6);
                            r.ResourceMgr.getInstance().loadSpriteframe("otherbundle", "imge/" + s, function (t) {
                                i.getComponent(cc.Sprite).spriteFrame = t
                            })
                        } else if (e < o.probability) {
                            var l = cc.instantiate(o.buff);
                            l.parent = o.barrier_parent, l.position = cc.v3(t, a)
                        }
                        n = o.randomNumber(o.barrier_spacing.x, o.barrier_spacing.y), t = t + o.barrier_width + n
                    }, o = this; t < e;) i();
                    this.barrier_health += Math.floor(Math.random() * this.increase)
                }, e.prototype.randomNumber = function (t, e) {
                    return Math.round(Math.random() * (t - e) + e)
                }, e.prototype.enhance_speed = function () {
                    this.bullet_speed = this.bullet_speed + this.add_buff_num[0], this.add_buff_num[0] = 1.1 * this.add_buff_num[0];
                    var t = new cc.Node;
                    t.parent = this.label_parent, t.addComponent(cc.Label), t.getComponent(cc.Label).string = lang.index60eed_102, this.scheduleOnce(function () {
                        t.destroy()
                    }, 1), this.double_scoere(8)
                }, e.prototype.enhance_ATK = function () {
                    this.ATK = this.ATK + this.add_buff_num[1], this.add_buff_num[1] = 1.1 * this.add_buff_num[1];
                    var t = new cc.Node;
                    t.parent = this.label_parent, t.addComponent(cc.Label), t.getComponent(cc.Label).string = lang.index60eed_103, this.scheduleOnce(function () {
                        t.destroy()
                    }, 1), this.double_scoere(8)
                }, e.prototype.remove_all_barrier = function () {
                    var t = this.barrier_parent.name;
                    this.barrier_parent.destroy();
                    var e = new cc.Node;
                    e.name = t, e.parent = this.canvas, e.position = cc.v3(0, 0), this.barrier_parent = e
                }, e.prototype.resurgence = function () {
                    var t = this;
                    s.SdkMgr.getInstance().playVideo(null, function () {
                        cc.director.resume(), t.gameover_UI.active = !1, t.remove_all_barrier(), t.plane.active = !0, t.btn_resurgence.active = !1, t.special_btn.active = !0, t.lb && t.lb.destroy()
                    })
                }, e.prototype.back = function () {
                    cc.director.loadScene("Start")
                }, e.prototype.replay = function () {
                    cc.director.loadScene("Game")
                }, e.prototype.gameover = function () {
                    cc.log(lang.index60eed_104), cc.director.pause(), this.gameover_UI.active = !0, this.plane.active = !1, this.ultimately_score_lb.string = lang.index60eed_105 + Math.floor(this.score);
                    var t = cc.sys.localStorage.getItem("score");
                    if (this.score > t) {
                        cc.sys.localStorage.setItem("score", this.score), cc.log(lang.index60eed_106);
                        var e = new cc.Node;
                        e.addComponent(cc.Label), e.getComponent(cc.Label).string = lang.index60eed_107, e.color = cc.color(0, 0, 0, 255), e.parent = this.gameover_UI.children[0], this.lb = e
                    }
                    this.special_btn.active = !1
                }, e.prototype.double_scoere = function (t) {
                    var e = this;
                    this.is_double = !0, this.double_lb.active = !0, this.scheduleOnce(function () {
                        e.is_double = !1, e.double_lb.active = !1
                    }, t)
                }, e.prototype.invincible = function () {
                    var t = this;
                    this.plane.group = "invincible", this.plane.children[0].active = !0, this.plane.children[1].active = !0, this.scheduleOnce(function () {
                        t.plane.group = "default", t.plane.children[0].active = !1, t.plane.children[1].active = !1
                    }, this.invincible_time);
                    var e = cc.instantiate(this.invincible_lb_pre);
                    e.parent = this.label_parent, this.scheduleOnce(function () {
                        e.destroy()
                    }, this.invincible_time)
                }, o([p(cc.Node)], e.prototype, "canvas", void 0), o([p({
                    type: cc.Node,
                    displayName: lang.index60eed_108,
                    tooltip: lang.index60eed_109
                })], e.prototype, "label_parent", void 0), o([p({
                    type: cc.Node,
                    displayName: lang.index60eed_110,
                    tooltip: lang.index60eed_111
                })], e.prototype, "double_lb", void 0), o([p({
                    type: cc.Node,
                    displayName: lang.index60eed_112,
                    tooltip: lang.index60eed_113
                })], e.prototype, "gameover_UI", void 0), o([p({
                    type: cc.Node,
                    displayName: lang.index60eed_114,
                    tooltip: lang.index60eed_115
                })], e.prototype, "plane", void 0), o([p({
                    type: cc.Node,
                    displayName: lang.index60eed_116,
                    tooltip: lang.index60eed_117
                })], e.prototype, "barrier_parent", void 0), o([p({
                    type: cc.Node,
                    displayName: lang.index60eed_118,
                    tooltip: lang.index60eed_119
                })], e.prototype, "btn_resurgence", void 0), o([p({
                    type: cc.Node,
                    displayName: lang.index60eed_120,
                    tooltip: lang.index60eed_121
                })], e.prototype, "special_btn", void 0), o([p({
                    type: cc.Label,
                    displayName: lang.index60eed_122,
                    tooltip: lang.index60eed_123
                })], e.prototype, "score_lb", void 0), o([p({
                    type: cc.Label,
                    displayName: lang.index60eed_124,
                    tooltip: lang.index60eed_125
                })], e.prototype, "state_lb", void 0), o([p({
                    type: cc.Prefab,
                    displayName: lang.index60eed_126,
                    tooltip: lang.index60eed_127
                })], e.prototype, "bullet", void 0), o([p({
                    type: cc.Prefab,
                    displayName: lang.index60eed_128,
                    tooltip: lang.index60eed_129
                })], e.prototype, "barrier", void 0), o([p({
                    type: cc.Prefab,
                    displayName: lang.index60eed_130,
                    tooltip: lang.index60eed_131
                })], e.prototype, "buff", void 0), o([p({
                    type: cc.Prefab,
                    displayName: lang.index60eed_132,
                    tooltip: lang.index60eed_133
                })], e.prototype, "invincible_lb_pre", void 0), o([p({
                    displayName: lang.index60eed_134,
                    tooltip: lang.index60eed_135
                })], e.prototype, "bullet_left_pos", void 0), o([p({
                    displayName: lang.index60eed_136,
                    tooltip: lang.index60eed_137
                })], e.prototype, "bullet_right_pos", void 0), o([p({
                    displayName: lang.index60eed_138,
                    tooltip: lang.index60eed_139
                })], e.prototype, "barrier_spacing", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_140,
                    tooltip: lang.index60eed_141
                })], e.prototype, "invincible_time", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_142,
                    tooltip: lang.index60eed_143
                })], e.prototype, "barrier_width", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_144,
                    tooltip: lang.index60eed_145
                })], e.prototype, "barrier_height", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_146,
                    tooltip: lang.index60eed_147
                })], e.prototype, "barrier_health", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_148,
                    tooltip: lang.index60eed_149
                })], e.prototype, "barrier_speed", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_150,
                    tooltip: lang.index60eed_151
                })], e.prototype, "generation_interval", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_152,
                    tooltip: lang.index60eed_153
                })], e.prototype, "increase", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_154,
                    tooltip: lang.index60eed_155
                })], e.prototype, "bullet_num", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_156,
                    tooltip: lang.index60eed_157
                })], e.prototype, "bullet_speed", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_158,
                    tooltip: lang.index60eed_159
                })], e.prototype, "ATK", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_160,
                    tooltip: lang.index60eed_161
                })], e.prototype, "probability", void 0), o([p({
                    type: cc.Float,
                    displayName: lang.index60eed_162,
                    tooltip: lang.index60eed_163
                })], e.prototype, "add_buff_num", void 0), o([p({
                    displayName: lang.index60eed_164,
                    tooltip: lang.index60eed_165
                })], e.prototype, "is_debug", void 0), o([p({
                    displayName: lang.index60eed_166,
                    tooltip: lang.index60eed_167
                })], e.prototype, "is_barrier_create", void 0), o([p({
                    displayName: lang.index60eed_168,
                    tooltip: lang.index60eed_169
                })], e.prototype, "is_fire", void 0), o([p({
                    displayName: lang.index60eed_170,
                    tooltip: lang.index60eed_171
                })], e.prototype, "is_barrier_move", void 0), o([p({
                    displayName: lang.index60eed_172,
                    tooltip: lang.index60eed_173
                })], e.prototype, "is_plane_move", void 0), o([p({
                    displayName: lang.index60eed_174,
                    tooltip: lang.index60eed_175
                })], e.prototype, "is_double", void 0), o([u], e)
            }(cc.Component);
        a.default = d, cc._RF.pop()
    }, {
        "../framework/manager/ResourceMgr": "ResourceMgr",
        "../framework/manager/SdkMgr": "SdkMgr",
        "../framework/utils/Utils": "Utils"
    }],
    GameData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "62303xKiPFJn6vULyxEWJxB", "GameData"), Object.defineProperty(a, "__esModule", {value: !0}), a.GameData = void 0;
        a.GameData = function () {
        }, cc._RF.pop()
    }, {}],
    Game_Menu: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "46afaTiB1VIZocGPkKRACjk", "Game_Menu");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("./Music"), s = t("./GameController"), c = cc._decorator, l = c.ccclass, u = c.property,
            p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.music = null, e.gc = null, e.canvas = null, e.menu_UI = null, e.menu_btn = null, e.sound_sd0 = null, e.sound_sd1 = null, e.pos = null, e
                }

                return i(e, t), e.prototype.onLoad = function () {
                    var t = this.canvas.height / 2 + this.menu_UI.height;
                    this.menu_UI.position = cc.v3(0, t), this.pos = this.menu_UI.position, this.menu_UI.active = !0
                }, e.prototype.set_sound0 = function () {
                    this.music.bg_music.volume = this.sound_sd0.progress
                }, e.prototype.set_sound1 = function () {
                    this.music.collision.volume = this.sound_sd1.progress, this.music.buff.volume = this.sound_sd1.progress, this.music.btn.volume = this.sound_sd1.progress
                }, e.prototype.open_menu = function () {
                    var t = cc.moveTo(1, 0, 0).easing(cc.easeBackOut());
                    this.menu_UI.runAction(t), this.pause(), this.menu_btn.getComponent(cc.Button).interactable = !1
                }, e.prototype.close_menu = function () {
                    var t = this, e = cc.moveTo(1, cc.v2(this.pos)).easing(cc.easeBackOut()),
                        a = cc.callFunc(function () {
                            t.menu_btn.getComponent(cc.Button).interactable = !0
                        }), n = cc.sequence(e, a);
                    this.menu_UI.runAction(n), this.resume()
                }, e.prototype.resume = function () {
                    this.gc.is_barrier_move = !0, this.gc.is_plane_move = !0, this.gc.is_fire = !0, this.gc.is_barrier_create = !0
                }, e.prototype.pause = function () {
                    this.gc.is_barrier_move = !1, this.gc.is_plane_move = !1, this.gc.is_fire = !1, this.gc.is_barrier_create = !1
                }, o([u({
                    type: r.default,
                    displayName: lang.index60eed_176,
                    tooltip: lang.index60eed_177
                })], e.prototype, "music", void 0), o([u({
                    type: s.default,
                    displayName: lang.index60eed_178,
                    tooltip: lang.index60eed_179
                })], e.prototype, "gc", void 0), o([u(cc.Node)], e.prototype, "canvas", void 0), o([u({
                    type: cc.Node,
                    displayName: lang.index60eed_180,
                    tooltip: lang.index60eed_181
                })], e.prototype, "menu_UI", void 0), o([u({
                    type: cc.Node,
                    displayName: lang.index60eed_182,
                    tooltip: lang.index60eed_183
                })], e.prototype, "menu_btn", void 0), o([u({
                    type: cc.Slider,
                    displayName: lang.index60eed_184,
                    tooltip: lang.index60eed_185
                })], e.prototype, "sound_sd0", void 0), o([u({
                    type: cc.Slider,
                    displayName: lang.index60eed_186,
                    tooltip: lang.index60eed_187
                })], e.prototype, "sound_sd1", void 0), o([l], e)
            }(cc.Component);
        a.default = p, cc._RF.pop()
    }, {"./GameController": "GameController", "./Music": "Music"}],
    Global: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "bc2a4SwY+tLtIco7HVzWG15", "Global"), Object.defineProperty(a, "__esModule", {value: !0}), a.Global = void 0;
        var n = function () {
            function t() {
            }

            return t.needUnLock = !1, t.kingLottery = !1, t.kingLotteryNum = 3, t.boxDrop = !1, t.boxDropNum = 0, t.volunInbornBtn = !1, t.addDesktop = !1, t.winBoxDrop = !1, t.showSign = !1, t.showSummer = !1, t.newPlantInborn = !1, t.deZSlottery = !1, t.initCellNum = 8, t.hasEquip = !1, t.saveOnServer = !1, t.getLocalData = !1, t
        }();
        a.Global = n, cc._RF.pop()
    }, {}],
    Gold: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "3bb58kVU4NOgrUMrOi9h59m", "Gold");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/manager/AudioMgr"), s = t("../../framework/manager/PoolMgr"),
            c = t("../config/Config"), l = t("../global/Global"), u = t("../manager/DataMgr"),
            p = t("../manager/PlayerMgr"), d = cc._decorator, h = d.ccclass, g = (d.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.goldNum = 0, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this, e = cc.winSize.width / cc.Canvas.instance.designResolution.width,
                        a = cc.winSize.height / cc.Canvas.instance.designResolution.height,
                        n = p.PlayerMgr.getInstance().getUserData().getinbornData(),
                        i = u.DataMgr.getInstance().getAllInbornCfg();
                    this.node.off(cc.Node.EventType.TOUCH_START), this.node.on(cc.Node.EventType.TOUCH_START, function () {
                        r.AudioMgr.getInstance().playEffect(c.AudioId.Pickup, 6), cc.Tween.stopAllByTarget(t), cc.tween(t.node).to(1, {
                            x: -514 * e,
                            y: 333 * a
                        }).call(function () {
                            var e;
                            if (t.node.active = !1, l.Global.newPlantInborn) {
                                var a = p.PlayerMgr.getInstance().getNewInbornData();
                                e = Math.round(t.goldNum * (1 + a.getNewInbornByType(5).allAddition / 100))
                            } else e = Math.round(t.goldNum * (1 + i[5].IncreasePerLevel * n[5].inbornLevel / 100));
                            p.PlayerMgr.getInstance().getUserData().subGoldNum(-1 * e), s.PoolMgr.getInstance().freeNode("gold", t.node)
                        }).start()
                    })
                }, e.prototype.flyAni = function () {
                    cc.tween(this.node).tag(1).repeatForever(cc.tween().by(.5, {y: 10}).by(1, {y: -20}).by(.5, {y: 10}).start()).start()
                }, o([h], e)
            }(cc.Component));
        a.default = g, cc._RF.pop()
    }, {
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PoolMgr": "PoolMgr",
        "../config/Config": "Config",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    GuideData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "1ef9eLCRs1PY6Q8jW+I/UGk", "GuideData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.GuideData = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../../game/config/Config"), s = function () {
            this.currentId = 1, this.allStar = 0
        }, c = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = r.GameConfig.AppCacheName + "guide", e.endId = 12, e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new s, this.data
            }, e.prototype.initData = function () {
                this.data.allStar || (this.data.allStar = 0), this.saveData()
            }, e.prototype.getCurrentId = function () {
                return this.data.currentId
            }, e.prototype.addCurrentId = function (t) {
                void 0 === t && (t = !0), this.data.currentId += 1, t && this.saveData()
            }, e.prototype.getGuideEnd = function () {
                return this.data.currentId >= this.endId
            }, e.prototype.getAllStar = function () {
                return this.data.allStar
            }, e
        }(o.BaseData);
        a.GuideData = c, cc._RF.pop()
    }, {"../../framework/base/BaseData": "BaseData", "../../game/config/Config": "Config"}],
    HeartData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "e6890q4DN5HIaqDmoY1zqSb", "HeartData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0});
        var o = t("../../framework/base/BaseData"), r = t("../../framework/manager/EventMgr"),
            s = t("../config/Config"), c = function () {
                this.isGet = !1, this.num = 0
            }, l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameKey = s.GameConfig.AppCacheName + "HeartData", e.needNum = 4, e
                }

                return i(e, t), e.prototype.createData = function () {
                    return this.data = new c, this.data
                }, e.prototype.initData = function () {
                }, e.prototype.getHased = function () {
                    return this.data.isGet
                }, e.prototype.getAdNum = function () {
                    return this.data.num
                }, e.prototype.getNeedNum = function () {
                    return this.needNum
                }, e.prototype.addAdNum = function () {
                    return this.data.num++, this.data.num >= this.needNum && (this.data.isGet = !0, r.EventMgr.getInstance().emit(s.EventName.HideInfinHeart)), this.saveData(), this.data.num
                }, e
            }(o.BaseData);
        a.default = l, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../framework/manager/EventMgr": "EventMgr",
        "../config/Config": "Config"
    }],
    HttpMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "42ee6Jx1bBC86XD6EEtNiA3", "HttpMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.HttpMgr = void 0;
        var n = function () {
            function t() {
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.httpGet = function (t, e, a) {
                var n = new XMLHttpRequest;
                if (e) {
                    var i = "";
                    Object.keys(e).forEach(function (t) {
                        i += t + "=" + encodeURIComponent(e[t]) + "&"
                    }), "" !== i && (t = t + "?" + (i = i.substr(0, i.lastIndexOf("&"))))
                }
                n.withCredentials = !0, n.open("GET", t, !0), n.setRequestHeader("Access-Control-Allow-Origin", "*"), n.setRequestHeader("Access-Control-Allow-Methods", "GET, POST"), n.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type"), n.setRequestHeader("Content-Type", "application/json"), n.onreadystatechange = function () {
                    if (4 === n.readyState) {
                        var t = n.responseText;
                        n.status >= 200 && n.status < 300 ? (n.statusText, a(!0, t)) : a(!1, "")
                    }
                }, n.ontimeout = function () {
                    a && a(null)
                }, n.onerror = function () {
                    a && a(null)
                }, n.send()
            }, t.prototype.httpPost = function (e, a, n) {
                void 0 === e && (e = null);
                var i = null;
                e && (i = "", Object.keys(e).forEach(function (t) {
                    i += t + "=" + encodeURIComponent(e[t]) + "&"
                }), "" !== i && (i = i.substr(0, i.lastIndexOf("&"))));
                var o = n, r = new XMLHttpRequest;
                r.timeout = 7e3, r.withCredentials = !0, r.open("POST", o, !0), r.setRequestHeader("Access-Control-Allow-Origin", "*"), r.setRequestHeader("Access-Control-Allow-Methods", "GET, POST"), r.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type"), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.onreadystatechange = function () {
                    if (4 === r.readyState) if (r.status >= 200 && r.status < 400) {
                        var e = r.responseText;
                        t.isPass(e) && a && a(e)
                    } else a && a(null)
                }, r.ontimeout = function () {
                    a && a(null)
                }, r.onerror = function () {
                    a && a(null)
                }, i ? r.send(i) : r.send()
            }, t.isPass = function () {
                return !0
            }, t
        }();
        a.HttpMgr = n, cc._RF.pop()
    }, {}],
    LabelPlus: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "80a9cOuqOFHQLCOKoZabFcU", "LabelPlus");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = (r.property, function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.start = function () {
            }, o([s], e)
        }(cc.Label));
        a.default = c, cc._RF.pop()
    }, {}],
    LanguageMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "a4129gp1IZPuLMnmeyFSgVu", "LanguageMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.LanguageMgr = void 0;
        var n = t("../../game/manager/DataMgr"), i = t("../configs/Appcfg"), o = function () {
            function t() {
                this.currentLan = i.LanguageType.zh
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.setCurrentLanguage = function (t) {
                this.currentLan = t
            }, t.prototype.getCurrentLanguage = function () {
                return this.currentLan
            }, t.prototype.getImgstr = function (t) {
                var e = this.currentLan;
                return e == i.LanguageType.en ? t + "-y" : e == i.LanguageType.jp ? t + "-r" : e == i.LanguageType.zh_tw ? t + "-f" : t
            }, t.prototype.T = function (t) {
                return n.DataMgr.getInstance().T(t, this.currentLan)
            }, t
        }();
        a.LanguageMgr = o, cc._RF.pop()
    }, {"../../game/manager/DataMgr": "DataMgr", "../configs/Appcfg": "Appcfg"}],
    LevelMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "0c1e4IOgdlK5IARG3gxi3wR", "LevelMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.LevelMgr = a.synData = void 0;
        var n = t("./DataMgr"), i = function () {
        };
        a.synData = i;
        var o = function () {
            function t() {
                this.currentSun = 0, this.MaxSun = 0, this.ljfNum = 6, this.costNum = 0, this.getSunNum = 0, this.compoundMap = new Map, this.zombieFrist4 = !1, this.littleZombieNum = 0, this.isGameStart = !1
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.setLevel = function (t) {
                var e = n.DataMgr.getInstance().getAllLevelCfg();
                this.ljfNum = 6, this.zombieFrist4 = !1, this.getSunNum = 0, this.costNum = 0;
                for (var a = 0; a < e.length; a++) if (e[a].LevelId == t) {
                    this.levelData = e[a];
                    break
                }
            }, t.prototype.setCompoundMap = function () {
                var t = this, e = [];
                n.DataMgr.getInstance().getAllHeroCfg().forEach(function (t) {
                    2 == t.Type && e.push(t)
                }), n.DataMgr.getInstance().getAllHeroSynthesis().forEach(function (a) {
                    t.compoundMap.has(a.BasicHero) || t.compoundMap.set(a.BasicHero, []);
                    var o = new i;
                    o.synHero = a.SyntheticHero, o.synHeroId = a.SyntheticHeroID;
                    var r = n.DataMgr.getInstance().getHeroCfgById(Number(o.synHeroId));
                    o.arrIdx = e.indexOf(r), t.compoundMap.get(a.BasicHero).push(o)
                })
            }, t.prototype.getCompoundMap = function () {
                return this.compoundMap || this.setCompoundMap(), this.compoundMap
            }, t.prototype.setisGameStart = function (t) {
                this.isGameStart = t
            }, t.prototype.getisGameStart = function () {
                return this.isGameStart
            }, t.instance = null, t
        }();
        a.LevelMgr = o, cc._RF.pop()
    }, {"./DataMgr": "DataMgr"}],
    ListItem: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "91fcdIYRxBK0bbIvoQydoMe", "ListItem");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r, s = cc._decorator, c = s.ccclass, l = s.property, u = s.disallowMultiple, p = s.menu,
            d = s.executionOrder;
        (function (t) {
            t[t.NONE = 0] = "NONE", t[t.TOGGLE = 1] = "TOGGLE", t[t.SWITCH = 2] = "SWITCH"
        })(r || (r = {}));
        var h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon = null, e.title = null, e.selectedMode = r.NONE, e.selectedFlag = null, e.selectedSpriteFrame = null, e._unselectedSpriteFrame = null, e.adaptiveSize = !1, e._selected = !1, e._eventReg = !1, e
            }

            return i(e, t), Object.defineProperty(e.prototype, "selected", {
                get: function () {
                    return this._selected
                }, set: function (t) {
                    if (this._selected = t, this.selectedFlag) switch (this.selectedMode) {
                        case r.TOGGLE:
                            this.selectedFlag.active = t;
                            break;
                        case r.SWITCH:
                            var e = this.selectedFlag.getComponent(cc.Sprite);
                            e && (e.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame)
                    }
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "btnCom", {
                get: function () {
                    return this._btnCom || (this._btnCom = this.node.getComponent(cc.Button)), this._btnCom
                }, enumerable: !1, configurable: !0
            }), e.prototype.onLoad = function () {
                if (this.selectedMode == r.SWITCH) {
                    var t = this.selectedFlag.getComponent(cc.Sprite);
                    this._unselectedSpriteFrame = t.spriteFrame
                }
            }, e.prototype.onDestroy = function () {
                this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this)
            }, e.prototype._registerEvent = function () {
                this._eventReg || (this.btnCom && this.list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis")), this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this), this._eventReg = !0)
            }, e.prototype._onSizeChange = function () {
                this.list._onItemAdaptive(this.node)
            }, e.prototype.createEvt = function (t, e, a) {
                if (void 0 === a && (a = null), t.isValid) {
                    t.comName = t.comName || t.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
                    var n = new cc.Component.EventHandler;
                    return n.target = a || t.node, n.component = t.comName, n.handler = e, n
                }
            }, e.prototype.showAni = function (t, e, a) {
                var n, i = this;
                switch (t) {
                    case 0:
                        n = cc.tween(i.node).to(.2, {scale: .7}).by(.3, {y: 2 * i.node.height});
                        break;
                    case 1:
                        n = cc.tween(i.node).to(.2, {scale: .7}).by(.3, {x: 2 * i.node.width});
                        break;
                    case 2:
                        n = cc.tween(i.node).to(.2, {scale: .7}).by(.3, {y: -2 * i.node.height});
                        break;
                    case 3:
                        n = cc.tween(i.node).to(.2, {scale: .7}).by(.3, {x: -2 * i.node.width});
                        break;
                    default:
                        n = cc.tween(i.node).to(.3, {scale: .1})
                }
                (e || a) && n.call(function () {
                    if (a) {
                        i.list._delSingleItem(i.node);
                        for (var t = i.list.displayData.length - 1; t >= 0; t--) if (i.list.displayData[t].id == i.listId) {
                            i.list.displayData.splice(t, 1);
                            break
                        }
                    }
                    e()
                }), n.start()
            }, e.prototype.onClickThis = function () {
                this.list.selectedId = this.listId
            }, o([l({type: cc.Sprite, tooltip: !1})], e.prototype, "icon", void 0), o([l({
                type: cc.Node,
                tooltip: !1
            })], e.prototype, "title", void 0), o([l({
                type: cc.Enum(r),
                tooltip: !1
            })], e.prototype, "selectedMode", void 0), o([l({
                type: cc.Node, tooltip: !1, visible: function () {
                    return this.selectedMode > r.NONE
                }
            })], e.prototype, "selectedFlag", void 0), o([l({
                type: cc.SpriteFrame, tooltip: !1, visible: function () {
                    return this.selectedMode == r.SWITCH
                }
            })], e.prototype, "selectedSpriteFrame", void 0), o([l({tooltip: !1})], e.prototype, "adaptiveSize", void 0), o([c, u(), p(lang.index60eed_188), d(-5001)], e)
        }(cc.Component);
        a.default = h, cc._RF.pop()
    }, {}],
    List: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "1896anh1MNKtpXpHYMe5dn5", "List");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r, s, c, l = cc._decorator, u = l.ccclass, p = l.property, d = l.disallowMultiple, h = l.menu,
            g = l.executionOrder, f = l.requireComponent, m = t("./ListItem");
        (function (t) {
            t[t.NODE = 1] = "NODE", t[t.PREFAB = 2] = "PREFAB"
        })(r || (r = {})), function (t) {
            t[t.NORMAL = 1] = "NORMAL", t[t.ADHERING = 2] = "ADHERING", t[t.PAGE = 3] = "PAGE"
        }(s || (s = {})), function (t) {
            t[t.NONE = 0] = "NONE", t[t.SINGLE = 1] = "SINGLE", t[t.MULT = 2] = "MULT"
        }(c || (c = {}));
        var y = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.templateType = r.NODE, e.tmpNode = null, e.tmpPrefab = null, e._slideMode = s.NORMAL, e.pageDistance = .3, e.pageChangeEvent = new cc.Component.EventHandler, e._virtual = !0, e.cyclic = !1, e.lackCenter = !1, e.lackSlide = !1, e._updateRate = 0, e.frameByFrameRenderNum = 0, e.renderEvent = new cc.Component.EventHandler, e.selectedMode = c.NONE, e.repeatEventSingle = !1, e.selectedEvent = new cc.Component.EventHandler, e._selectedId = -1, e._forceUpdate = !1, e._updateDone = !0, e._numItems = 0, e._inited = !1, e._needUpdateWidget = !1, e._aniDelRuning = !1, e._doneAfterUpdate = !1, e.adhering = !1, e._adheringBarrier = !1, e.curPageNum = 0, e
            }

            return i(e, t), Object.defineProperty(e.prototype, "slideMode", {
                get: function () {
                    return this._slideMode
                }, set: function (t) {
                    this._slideMode = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "virtual", {
                get: function () {
                    return this._virtual
                }, set: function (t) {
                    null != t && (this._virtual = t), 0 != this._numItems && this._onScrolling()
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "updateRate", {
                get: function () {
                    return this._updateRate
                }, set: function (t) {
                    t >= 0 && t <= 6 && (this._updateRate = t)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "selectedId", {
                get: function () {
                    return this._selectedId
                }, set: function (t) {
                    var e, a = this;
                    switch (a.selectedMode) {
                        case c.SINGLE:
                            if (!a.repeatEventSingle && t == a._selectedId) return;
                            e = a.getItemByListId(t);
                            var n = void 0;
                            if (a._selectedId >= 0 ? a._lastSelectedId = a._selectedId : a._lastSelectedId = null, a._selectedId = t, e && ((n = e.getComponent(m.default)).selected = !0), a._lastSelectedId >= 0 && a._lastSelectedId != a._selectedId) {
                                var i = a.getItemByListId(a._lastSelectedId);
                                i && (i.getComponent(m.default).selected = !1)
                            }
                            a.selectedEvent && cc.Component.EventHandler.emitEvents([a.selectedEvent], e, t % this._actualNumItems, null == a._lastSelectedId ? null : a._lastSelectedId % this._actualNumItems);
                            break;
                        case c.MULT:
                            if (!(e = a.getItemByListId(t))) return;
                            n = e.getComponent(m.default), a._selectedId >= 0 && (a._lastSelectedId = a._selectedId), a._selectedId = t;
                            var o = !n.selected;
                            n.selected = o;
                            var r = a.multSelected.indexOf(t);
                            o && r < 0 ? a.multSelected.push(t) : !o && r >= 0 && a.multSelected.splice(r, 1), a.selectedEvent && cc.Component.EventHandler.emitEvents([a.selectedEvent], e, t % this._actualNumItems, null == a._lastSelectedId ? null : a._lastSelectedId % this._actualNumItems, o)
                    }
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "numItems", {
                get: function () {
                    return this._actualNumItems
                }, set: function (t) {
                    var e = this;
                    if (e.checkInited(!1)) if (null == t || t < 0) cc.error("numItems set the wrong::", t); else if (e._actualNumItems = e._numItems = t, e._forceUpdate = !0, e._virtual) e._resizeContent(), e.cyclic && (e._numItems = e._cyclicNum * e._numItems), e._onScrolling(), e.frameByFrameRenderNum || e.slideMode != s.PAGE || (e.curPageNum = e.nearestListId); else {
                        e.cyclic && (e._resizeContent(), e._numItems = e._cyclicNum * e._numItems);
                        var a = e.content.getComponent(cc.Layout);
                        if (a && (a.enabled = !0), e._delRedundantItem(), e.firstListId = 0, e.frameByFrameRenderNum > 0) {
                            for (var n = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum, i = 0; i < n; i++) e._createOrUpdateItem2(i);
                            e.frameByFrameRenderNum < e._numItems && (e._updateCounter = e.frameByFrameRenderNum, e._updateDone = !1)
                        } else {
                            for (i = 0; i < e._numItems; i++) e._createOrUpdateItem2(i);
                            e.displayItemNum = e._numItems
                        }
                    }
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "scrollView", {
                get: function () {
                    return this._scrollView
                }, enumerable: !1, configurable: !0
            }), e.prototype.onLoad = function () {
                this._init()
            }, e.prototype.onDestroy = function () {
                var t = this;
                cc.isValid(t._itemTmp) && t._itemTmp.destroy(), cc.isValid(t.tmpNode) && t.tmpNode.destroy(), t._pool && t._pool.clear()
            }, e.prototype.onEnable = function () {
                this._registerEvent(), this._init(), this._aniDelRuning && (this._aniDelRuning = !1, this._aniDelItem && (this._aniDelBeforePos && (this._aniDelItem.position = this._aniDelBeforePos, delete this._aniDelBeforePos), this._aniDelBeforeScale && (this._aniDelItem.scale = this._aniDelBeforeScale, delete this._aniDelBeforeScale), delete this._aniDelItem), this._aniDelCB && (this._aniDelCB(), delete this._aniDelCB))
            }, e.prototype.onDisable = function () {
                this._unregisterEvent()
            }, e.prototype._registerEvent = function () {
                var t = this;
                t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0), t.node.on("touch-up", t._onTouchUp, t), t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0), t.node.on("scroll-began", t._onScrollBegan, t, !0), t.node.on("scroll-ended", t._onScrollEnded, t, !0), t.node.on("scrolling", t._onScrolling, t, !0), t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t)
            }, e.prototype._unregisterEvent = function () {
                var t = this;
                t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0), t.node.off("touch-up", t._onTouchUp, t), t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0), t.node.off("scroll-began", t._onScrollBegan, t, !0), t.node.off("scroll-ended", t._onScrollEnded, t, !0), t.node.off("scrolling", t._onScrolling, t, !0), t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t)
            }, e.prototype._init = function () {
                var t = this;
                if (!t._inited) if (t._scrollView = t.node.getComponent(cc.ScrollView), t.content = t._scrollView.content, t.content) {
                    switch (t._layout = t.content.getComponent(cc.Layout), t._align = t._layout.type, t._resizeMode = t._layout.resizeMode, t._startAxis = t._layout.startAxis, t._topGap = t._layout.paddingTop, t._rightGap = t._layout.paddingRight, t._bottomGap = t._layout.paddingBottom, t._leftGap = t._layout.paddingLeft, t._columnGap = t._layout.spacingX, t._lineGap = t._layout.spacingY, t._colLineNum, t._verticalDir = t._layout.verticalDirection, t._horizontalDir = t._layout.horizontalDirection, t.setTemplateItem(cc.instantiate(t.templateType == r.PREFAB ? t.tmpPrefab : t.tmpNode)), t._slideMode != s.ADHERING && t._slideMode != s.PAGE || (t._scrollView.inertia = !1, t._scrollView._onMouseWheel = function () {
                    }), t.virtual || (t.lackCenter = !1), t._lastDisplayData = [], t.displayData = [], t._pool = new cc.NodePool, t._forceUpdate = !1, t._updateCounter = 0, t._updateDone = !0, t.curPageNum = 0, t.cyclic && (t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t), t._scrollView._startBounceBackIfNeeded = function () {
                        return !1
                    }), t._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            switch (t._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    t._alignCalcType = 1;
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    t._alignCalcType = 2
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            switch (t._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    t._alignCalcType = 3;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    t._alignCalcType = 4
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (t._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    switch (t._verticalDir) {
                                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                            t._alignCalcType = 3;
                                            break;
                                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                            t._alignCalcType = 4
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    switch (t._horizontalDir) {
                                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                            t._alignCalcType = 1;
                                            break;
                                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                            t._alignCalcType = 2
                                    }
                            }
                    }
                    t.content.removeAllChildren(), t._inited = !0
                } else cc.error(t.node.name + "'s cc.ScrollView unset content!")
            }, e.prototype._processAutoScrolling = function (t) {
                this._scrollView._autoScrollAccumulatedTime += 1 * t;
                var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
                if (this._scrollView._autoScrollAttenuate) {
                    var a = e - 1;
                    e = a * a * a * a * a + 1
                }
                var n = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e)),
                    i = this._scrollView.getScrollEndedEventTiming(), o = Math.abs(e - 1) <= i;
                Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired && (this._scrollView._dispatchEvent("scroll-ended-with-threshold"), this._scrollView._isScrollEndedWithThresholdEventFired = !0), o && (this._scrollView._autoScrolling = !1);
                var r = n.sub(this._scrollView.getContentPosition());
                this._scrollView._moveContent(this._scrollView._clampDelta(r), o), this._scrollView._dispatchEvent("scrolling"), this._scrollView._autoScrolling || (this._scrollView._isBouncing = !1, this._scrollView._scrolling = !1, this._scrollView._dispatchEvent("scroll-ended"))
            }, e.prototype.setTemplateItem = function (t) {
                if (t) {
                    var e = this;
                    e._itemTmp = t, e._resizeMode == cc.Layout.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = cc.size(t.width, t.height);
                    var a = t.getComponent(m.default), n = !1;
                    switch (a || (n = !0), n && (e.selectedMode = c.NONE), (a = t.getComponent(cc.Widget)) && a.enabled && (e._needUpdateWidget = !0), e.selectedMode == c.MULT && (e.multSelected = []), e._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            e._colLineNum = 1, e._sizeType = !1;
                            break;
                        case cc.Layout.Type.VERTICAL:
                            e._colLineNum = 1, e._sizeType = !0;
                            break;
                        case cc.Layout.Type.GRID:
                            switch (e._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    var i = e.content.width - e._leftGap - e._rightGap;
                                    e._colLineNum = Math.floor((i + e._columnGap) / (e._itemSize.width + e._columnGap)), e._sizeType = !0;
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    var o = e.content.height - e._topGap - e._bottomGap;
                                    e._colLineNum = Math.floor((o + e._lineGap) / (e._itemSize.height + e._lineGap)), e._sizeType = !1
                            }
                    }
                }
            }, e.prototype.checkInited = function (t) {
                return void 0 === t && (t = !0), !!this._inited || (t && cc.error("List initialization not completed!"), !1)
            }, e.prototype._resizeContent = function () {
                var t, e = this;
                switch (e._align) {
                    case cc.Layout.Type.HORIZONTAL:
                        if (e._customSize) {
                            var a = e._getFixedSize(null);
                            t = e._leftGap + a.val + e._itemSize.width * (e._numItems - a.count) + e._columnGap * (e._numItems - 1) + e._rightGap
                        } else t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
                        break;
                    case cc.Layout.Type.VERTICAL:
                        e._customSize ? (a = e._getFixedSize(null), t = e._topGap + a.val + e._itemSize.height * (e._numItems - a.count) + e._lineGap * (e._numItems - 1) + e._bottomGap) : t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
                        break;
                    case cc.Layout.Type.GRID:
                        switch (e.lackCenter && (e.lackCenter = !1), e._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                                var n = Math.ceil(e._numItems / e._colLineNum);
                                t = e._topGap + e._itemSize.height * n + e._lineGap * (n - 1) + e._bottomGap;
                                break;
                            case cc.Layout.AxisDirection.VERTICAL:
                                var i = Math.ceil(e._numItems / e._colLineNum);
                                t = e._leftGap + e._itemSize.width * i + e._columnGap * (i - 1) + e._rightGap
                        }
                }
                var o = e.content.getComponent(cc.Layout);
                if (o && (o.enabled = !1), e._allItemSize = t, e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap), e.cyclic) {
                    var r = e._sizeType ? e.node.height : e.node.width;
                    e._cyclicPos1 = 0, r -= e._cyclicPos1, e._cyclicNum = Math.ceil(r / e._allItemSizeNoEdge) + 1;
                    var s = e._sizeType ? e._lineGap : e._columnGap;
                    e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + s, e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + s * (e._cyclicNum - 1), e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum, e._cycilcAllItemSizeNoEdge += s * (e._cyclicNum - 1)
                }
                e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height : e.node.width);
                var c = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0,
                    l = e._lack ? (e._sizeType ? e.node.height : e.node.width) - c : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;
                l < 0 && (l = 0), e._sizeType ? e.content.height = l : e.content.width = l
            }, e.prototype._onScrolling = function (t) {
                if (void 0 === t && (t = null), null == this.frameCount && (this.frameCount = this._updateRate), !this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) this.frameCount--; else if (this.frameCount = this._updateRate, !this._aniDelRuning) {
                    if (this.cyclic) {
                        var e = this.content.getPosition();
                        e = this._sizeType ? e.y : e.x;
                        var a = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap),
                            n = this._sizeType ? cc.v2(0, a) : cc.v2(a, 0);
                        switch (this._alignCalcType) {
                            case 1:
                                e > -this._cyclicPos1 ? (this.content.x = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n))) : e < -this._cyclicPos2 && (this.content.x = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n)));
                                break;
                            case 2:
                                e < this._cyclicPos1 ? (this.content.x = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n))) : e > this._cyclicPos2 && (this.content.x = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n)));
                                break;
                            case 3:
                                e < this._cyclicPos1 ? (this.content.y = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n))) : e > this._cyclicPos2 && (this.content.y = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n)));
                                break;
                            case 4:
                                e > -this._cyclicPos1 ? (this.content.y = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n))) : e < -this._cyclicPos2 && (this.content.y = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n)))
                        }
                    }
                    var i, o, r, s;
                    if (this._calcViewPos(), this._sizeType ? (i = this.viewTop, r = this.viewBottom) : (o = this.viewRight, s = this.viewLeft), this._virtual) {
                        this.displayData = [];
                        var c = void 0, l = 0, u = this._numItems - 1;
                        if (this._customSize) for (var p = !1; l <= u && !p; l++) switch (c = this._calcItemPos(l), this._align) {
                            case cc.Layout.Type.HORIZONTAL:
                                c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
                                break;
                            case cc.Layout.Type.VERTICAL:
                                c.bottom <= i && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
                                break;
                            case cc.Layout.Type.GRID:
                                switch (this._startAxis) {
                                    case cc.Layout.AxisDirection.HORIZONTAL:
                                        c.bottom <= i && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
                                        break;
                                    case cc.Layout.AxisDirection.VERTICAL:
                                        c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0)
                                }
                        } else {
                            var d = this._itemSize.width + this._columnGap, h = this._itemSize.height + this._lineGap;
                            switch (this._alignCalcType) {
                                case 1:
                                    l = (s - this._leftGap) / d, u = (o - this._leftGap) / d;
                                    break;
                                case 2:
                                    l = (-o - this._rightGap) / d, u = (-s - this._rightGap) / d;
                                    break;
                                case 3:
                                    l = (-i - this._topGap) / h, u = (-r - this._topGap) / h;
                                    break;
                                case 4:
                                    l = (r - this._bottomGap) / h, u = (i - this._bottomGap) / h
                            }
                            for (l = Math.floor(l) * this._colLineNum, u = Math.ceil(u) * this._colLineNum, l < 0 && (l = 0), --u >= this._numItems && (u = this._numItems - 1); l <= u; l++) this.displayData.push(this._calcItemPos(l))
                        }
                        if (this._delRedundantItem(), this.displayData.length <= 0 || !this._numItems) return void (this._lastDisplayData = []);
                        this.firstListId = this.displayData[0].id, this.displayItemNum = this.displayData.length;
                        var g = this._lastDisplayData.length, f = this.displayItemNum != g;
                        if (f && (this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function (t, e) {
                            return t - e
                        }), f = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[g - 1]), this._forceUpdate || f) if (this.frameByFrameRenderNum > 0) this._numItems > 0 ? (this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0, this._updateDone = !1) : (this._updateCounter = 0, this._updateDone = !0); else {
                            this._lastDisplayData = [];
                            for (var m = 0; m < this.displayItemNum; m++) this._createOrUpdateItem(this.displayData[m]);
                            this._forceUpdate = !1
                        }
                        this._calcNearestItem()
                    }
                }
            }, e.prototype._calcViewPos = function () {
                var t = this.content.getPosition();
                switch (this._alignCalcType) {
                    case 1:
                        this.elasticLeft = t.x > 0 ? t.x : 0, this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft, this.viewRight = this.viewLeft + this.node.width, this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0, this.viewRight += this.elasticRight;
                        break;
                    case 2:
                        this.elasticRight = t.x < 0 ? -t.x : 0, this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight, this.viewLeft = this.viewRight - this.node.width, this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0, this.viewLeft -= this.elasticLeft;
                        break;
                    case 3:
                        this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0, this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop, this.viewBottom = this.viewTop - this.node.height, this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0, this.viewBottom += this.elasticBottom;
                        break;
                    case 4:
                        this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0, this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom, this.viewTop = this.viewBottom + this.node.height, this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0, this.viewTop -= this.elasticTop
                }
            }, e.prototype._calcItemPos = function (t) {
                var e, a, n, i, o, r, s, c;
                switch (this._align) {
                    case cc.Layout.Type.HORIZONTAL:
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                if (this._customSize) {
                                    var l = this._getFixedSize(t);
                                    o = this._leftGap + (this._itemSize.width + this._columnGap) * (t - l.count) + (l.val + this._columnGap * l.count), e = (u = this._customSize[t]) > 0 ? u : this._itemSize.width
                                } else o = this._leftGap + (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width;
                                return this.lackCenter && (o -= this._leftGap, o += this.content.width / 2 - this._allItemSizeNoEdge / 2), {
                                    id: t,
                                    left: o,
                                    right: r = o + e,
                                    x: o + this._itemTmp.anchorX * e,
                                    y: this._itemTmp.y
                                };
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                return this._customSize ? (l = this._getFixedSize(t), r = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - l.count) - (l.val + this._columnGap * l.count), e = (u = this._customSize[t]) > 0 ? u : this._itemSize.width) : (r = -this._rightGap - (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width), this.lackCenter && (r += this._rightGap, r -= this.content.width / 2 - this._allItemSizeNoEdge / 2), {
                                    id: t,
                                    right: r,
                                    left: o = r - e,
                                    x: o + this._itemTmp.anchorX * e,
                                    y: this._itemTmp.y
                                }
                        }
                        break;
                    case cc.Layout.Type.VERTICAL:
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                return this._customSize ? (l = this._getFixedSize(t), n = -this._topGap - (this._itemSize.height + this._lineGap) * (t - l.count) - (l.val + this._lineGap * l.count), a = (u = this._customSize[t]) > 0 ? u : this._itemSize.height) : (n = -this._topGap - (this._itemSize.height + this._lineGap) * t, a = this._itemSize.height), this.lackCenter && (n += this._topGap, n -= this.content.height / 2 - this._allItemSizeNoEdge / 2), {
                                    id: t,
                                    top: n,
                                    bottom: i = n - a,
                                    x: this._itemTmp.x,
                                    y: i + this._itemTmp.anchorY * a
                                };
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                var u;
                                if (this._customSize) l = this._getFixedSize(t), i = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - l.count) + (l.val + this._lineGap * l.count), a = (u = this._customSize[t]) > 0 ? u : this._itemSize.height; else i = this._bottomGap + (this._itemSize.height + this._lineGap) * t, a = this._itemSize.height;
                                return this.lackCenter && (i -= this._bottomGap, i += this.content.height / 2 - this._allItemSizeNoEdge / 2), {
                                    id: t,
                                    top: n = i + a,
                                    bottom: i,
                                    x: this._itemTmp.x,
                                    y: i + this._itemTmp.anchorY * a
                                }
                        }
                    case cc.Layout.Type.GRID:
                        var p = Math.floor(t / this._colLineNum);
                        switch (this._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                                switch (this._verticalDir) {
                                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                        c = (i = (n = -this._topGap - (this._itemSize.height + this._lineGap) * p) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
                                        break;
                                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                        n = (i = this._bottomGap + (this._itemSize.height + this._lineGap) * p) + this._itemSize.height, c = i + this._itemTmp.anchorY * this._itemSize.height
                                }
                                switch (s = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap), this._horizontalDir) {
                                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                        s += this._itemTmp.anchorX * this._itemSize.width, s -= this.content.anchorX * this.content.width;
                                        break;
                                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                        s += (1 - this._itemTmp.anchorX) * this._itemSize.width, s -= (1 - this.content.anchorX) * this.content.width, s *= -1
                                }
                                return {id: t, top: n, bottom: i, x: s, y: c};
                            case cc.Layout.AxisDirection.VERTICAL:
                                switch (this._horizontalDir) {
                                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                        r = (o = this._leftGap + (this._itemSize.width + this._columnGap) * p) + this._itemSize.width, s = o + this._itemTmp.anchorX * this._itemSize.width, s -= this.content.anchorX * this.content.width;
                                        break;
                                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                        s = (o = (r = -this._rightGap - (this._itemSize.width + this._columnGap) * p) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width, s += (1 - this.content.anchorX) * this.content.width
                                }
                                switch (c = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap), this._verticalDir) {
                                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                        c -= (1 - this._itemTmp.anchorY) * this._itemSize.height, c += (1 - this.content.anchorY) * this.content.height;
                                        break;
                                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                        c -= this._itemTmp.anchorY * this._itemSize.height, c += this.content.anchorY * this.content.height, c *= -1
                                }
                                return {id: t, left: o, right: r, x: s, y: c}
                        }
                }
            }, e.prototype._calcExistItemPos = function (t) {
                var e = this.getItemByListId(t);
                if (!e) return null;
                var a = {id: t, x: e.x, y: e.y};
                return this._sizeType ? (a.top = e.y + e.height * (1 - e.anchorY), a.bottom = e.y - e.height * e.anchorY) : (a.left = e.x - e.width * e.anchorX, a.right = e.x + e.width * (1 - e.anchorX)), a
            }, e.prototype.getItemPos = function (t) {
                return this._virtual ? this._calcItemPos(t) : this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t)
            }, e.prototype._getFixedSize = function (t) {
                if (!this._customSize) return null;
                null == t && (t = this._numItems);
                var e = 0, a = 0;
                for (var n in this._customSize) parseInt(n) < t && (e += this._customSize[n], a++);
                return {val: e, count: a}
            }, e.prototype._onScrollBegan = function () {
                this._beganPos = this._sizeType ? this.viewTop : this.viewLeft
            }, e.prototype._onScrollEnded = function () {
                var t = this;
                if (t.curScrollIsTouch = !1, null != t.scrollToListId) {
                    var e = t.getItemByListId(t.scrollToListId);
                    t.scrollToListId = null, e && cc.tween(e).to(.1, {scale: 1.06}).to(.1, {scale: 1}).start()
                }
                t._onScrolling(), t._slideMode != s.ADHERING || t.adhering ? t._slideMode == s.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere()) : t.adhere()
            }, e.prototype._onTouchStart = function (t, e) {
                if (!this._scrollView.hasNestedViewGroup(t, e) && (this.curScrollIsTouch = !0, t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)) {
                    for (var a = t.target; null == a._listId && a.parent;) a = a.parent;
                    this._scrollItem = null != a._listId ? a : t.target
                }
            }, e.prototype._onTouchUp = function () {
                var t = this;
                t._scrollPos = null, t._slideMode == s.ADHERING ? (this.adhering && (this._adheringBarrier = !0), t.adhere()) : t._slideMode == s.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()), this._scrollItem = null
            }, e.prototype._onTouchCancelled = function (t, e) {
                var a = this;
                a._scrollView.hasNestedViewGroup(t, e) || t.simulate || (a._scrollPos = null, a._slideMode == s.ADHERING ? (a.adhering && (a._adheringBarrier = !0), a.adhere()) : a._slideMode == s.PAGE && (null != a._beganPos ? a._pageAdhere() : a.adhere()), this._scrollItem = null)
            }, e.prototype._onSizeChanged = function () {
                this.checkInited(!1) && this._onScrolling()
            }, e.prototype._onItemAdaptive = function (t) {
                if (!this._sizeType && t.width != this._itemSize.width || this._sizeType && t.height != this._itemSize.height) {
                    this._customSize || (this._customSize = {});
                    var e = this._sizeType ? t.height : t.width;
                    this._customSize[t._listId] != e && (this._customSize[t._listId] = e, this._resizeContent(), this.updateAll(), null != this._scrollToListId && (this._scrollPos = null, this.unschedule(this._scrollToSo), this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - (new Date).getTime() / 1e3))))
                }
            }, e.prototype._pageAdhere = function () {
                var t = this;
                if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
                    var e = t._sizeType ? t.viewTop : t.viewLeft,
                        a = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
                    if (Math.abs(t._beganPos - e) > a) switch (t._alignCalcType) {
                        case 1:
                        case 4:
                            t._beganPos > e ? t.prePage(.5) : t.nextPage(.5);
                            break;
                        case 2:
                        case 3:
                            t._beganPos < e ? t.prePage(.5) : t.nextPage(.5)
                    } else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
                    t._beganPos = null
                }
            }, e.prototype.adhere = function () {
                var t = this;
                if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
                    t.adhering = !0, t._calcNearestItem();
                    var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
                    t.scrollTo(t.nearestListId, .7, e)
                }
            }, e.prototype.update = function () {
                if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
                    for (var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) {
                        var a = this.displayData[e];
                        a && this._createOrUpdateItem(a)
                    }
                    this._updateCounter >= this.displayItemNum - 1 ? this._doneAfterUpdate ? (this._updateCounter = 0, this._updateDone = !1, this._doneAfterUpdate = !1) : (this._updateDone = !0, this._delRedundantItem(), this._forceUpdate = !1, this._calcNearestItem(), this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId)) : this._updateCounter += this.frameByFrameRenderNum
                } else if (this._updateCounter < this._numItems) {
                    for (t = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) this._createOrUpdateItem2(e);
                    this._updateCounter += this.frameByFrameRenderNum
                } else this._updateDone = !0, this._calcNearestItem(), this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId)
            }, e.prototype._createOrUpdateItem = function (t) {
                var e = this.getItemByListId(t.id);
                if (e) this._forceUpdate && this.renderEvent && (e.setPosition(cc.v2(t.x, t.y)), this._resetItemSize(e), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems)); else {
                    var a = this._pool.size() > 0;
                    if (e = a ? this._pool.get() : cc.instantiate(this._itemTmp), a && cc.isValid(e) || (e = cc.instantiate(this._itemTmp), a = !1), e._listId != t.id && (e._listId = t.id, e.setContentSize(this._itemSize)), e.setPosition(cc.v2(t.x, t.y)), this._resetItemSize(e), this.content.addChild(e), a && this._needUpdateWidget) {
                        var n = e.getComponent(cc.Widget);
                        n && n.updateAlignment()
                    }
                    e.setSiblingIndex(this.content.childrenCount - 1);
                    var i = e.getComponent(m.default);
                    e.listItem = i, i && (i.listId = t.id, i.list = this, i._registerEvent()), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems)
                }
                this._resetItemSize(e), this._updateListItem(e.listItem), this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id)
            }, e.prototype._createOrUpdateItem2 = function (t) {
                var e, a = this.content.children[t];
                a ? this._forceUpdate && this.renderEvent && (a._listId = t, e && (e.listId = t), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], a, t % this._actualNumItems)) : ((a = cc.instantiate(this._itemTmp))._listId = t, this.content.addChild(a), e = a.getComponent(m.default), a.listItem = e, e && (e.listId = t, e.list = this, e._registerEvent()), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], a, t % this._actualNumItems)), this._updateListItem(e), this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t)
            }, e.prototype._updateListItem = function (t) {
                if (t && this.selectedMode > c.NONE) {
                    var e = t.node;
                    switch (this.selectedMode) {
                        case c.SINGLE:
                            t.selected = this.selectedId == e._listId;
                            break;
                        case c.MULT:
                            t.selected = this.multSelected.indexOf(e._listId) >= 0
                    }
                }
            }, e.prototype._resetItemSize = function () {
            }, e.prototype._updateItemPos = function (t) {
                var e = isNaN(t) ? t : this.getItemByListId(t), a = this.getItemPos(e._listId);
                e.setPosition(a.x, a.y)
            }, e.prototype.setMultSelected = function (t, e) {
                var a = this;
                if (a.checkInited()) {
                    if (Array.isArray(t) || (t = [t]), null == e) a.multSelected = t; else {
                        var n = void 0, i = void 0;
                        if (e) for (var o = t.length - 1; o >= 0; o--) n = t[o], (i = a.multSelected.indexOf(n)) < 0 && a.multSelected.push(n); else for (o = t.length - 1; o >= 0; o--) n = t[o], (i = a.multSelected.indexOf(n)) >= 0 && a.multSelected.splice(i, 1)
                    }
                    a._forceUpdate = !0, a._onScrolling()
                }
            }, e.prototype.getMultSelected = function () {
                return this.multSelected
            }, e.prototype.hasMultSelected = function (t) {
                return this.multSelected && this.multSelected.indexOf(t) >= 0
            }, e.prototype.updateItem = function (t) {
                if (this.checkInited()) {
                    Array.isArray(t) || (t = [t]);
                    for (var e = 0, a = t.length; e < a; e++) {
                        var n = t[e], i = this.getItemByListId(n);
                        i && cc.Component.EventHandler.emitEvents([this.renderEvent], i, n % this._actualNumItems)
                    }
                }
            }, e.prototype.updateAll = function () {
                this.checkInited() && (this.numItems = this.numItems)
            }, e.prototype.getItemByListId = function (t) {
                if (this.content) for (var e = this.content.childrenCount - 1; e >= 0; e--) {
                    var a = this.content.children[e];
                    if (a._listId == t) return a
                }
            }, e.prototype._getOutsideItem = function () {
                for (var t, e = [], a = this.content.childrenCount - 1; a >= 0; a--) t = this.content.children[a], this.displayData.find(function (e) {
                    return e.id == t._listId
                }) || e.push(t);
                return e
            }, e.prototype._delRedundantItem = function () {
                if (this._virtual) for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) {
                    var a = t[e];
                    if (!this._scrollItem || a._listId != this._scrollItem._listId) {
                        a.isCached = !0, this._pool.put(a);
                        for (var n = this._lastDisplayData.length - 1; n >= 0; n--) if (this._lastDisplayData[n] == a._listId) {
                            this._lastDisplayData.splice(n, 1);
                            break
                        }
                    }
                } else for (; this.content.childrenCount > this._numItems;) this._delSingleItem(this.content.children[this.content.childrenCount - 1])
            }, e.prototype._delSingleItem = function (t) {
                t.removeFromParent(), t.destroy && t.destroy(), t = null
            }, e.prototype.aniDelItem = function (t, e, a) {
                var n = this;
                if (!n.checkInited() || n.cyclic || !n._virtual) return cc.error("This function is not allowed to be called!");
                if (!e) return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
                if (n._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
                var i, o = n.getItemByListId(t);
                if (o) {
                    i = o.getComponent(m.default), n._aniDelRuning = !0, n._aniDelCB = e, n._aniDelItem = o, n._aniDelBeforePos = o.position, n._aniDelBeforeScale = o.scale;
                    var r = n.displayData[n.displayData.length - 1].id, s = i.selected;
                    i.showAni(a, function () {
                        var a, i, l;
                        if (r < n._numItems - 2 && (a = r + 1), null != a) {
                            var u = n._calcItemPos(a);
                            n.displayData.push(u), n._virtual ? n._createOrUpdateItem(u) : n._createOrUpdateItem2(a)
                        } else n._numItems--;
                        if (n.selectedMode == c.SINGLE) s ? n._selectedId = -1 : n._selectedId - 1 >= 0 && n._selectedId--; else if (n.selectedMode == c.MULT && n.multSelected.length) {
                            var p = n.multSelected.indexOf(t);
                            p >= 0 && n.multSelected.splice(p, 1);
                            for (var d = n.multSelected.length - 1; d >= 0; d--) (f = n.multSelected[d]) >= t && n.multSelected[d]--
                        }
                        if (n._customSize) {
                            n._customSize[t] && delete n._customSize[t];
                            var h = {}, g = void 0;
                            for (var f in n._customSize) {
                                g = n._customSize[f];
                                var m = parseInt(f);
                                h[m - (m >= t ? 1 : 0)] = g
                            }
                            n._customSize = h
                        }
                        for (d = null != a ? a : r; d >= t + 1; d--) if (o = n.getItemByListId(d)) {
                            var y = n._calcItemPos(d - 1);
                            i = cc.tween(o).to(.2333, {position: cc.v2(y.x, y.y)}), d <= t + 1 && (l = !0, i.call(function () {
                                n._aniDelRuning = !1, e(t), delete n._aniDelCB
                            })), i.start()
                        }
                        l || (n._aniDelRuning = !1, e(t), n._aniDelCB = null)
                    }, !0)
                } else e(t)
            }, e.prototype.scrollTo = function (t, e, a, n) {
                void 0 === e && (e = .5), void 0 === a && (a = null), void 0 === n && (n = !1);
                var i = this;
                if (i.checkInited(!1)) {
                    null == e ? e = .5 : e < 0 && (e = 0), t < 0 ? t = 0 : t >= i._numItems && (t = i._numItems - 1), !i._virtual && i._layout && i._layout.enabled && i._layout.updateLayout();
                    var o, r, s = i.getItemPos(t);
                    if (!s) return !1;
                    switch (i._alignCalcType) {
                        case 1:
                            o = s.left, o -= null != a ? i.node.width * a : i._leftGap, s = cc.v2(o, 0);
                            break;
                        case 2:
                            o = s.right - i.node.width, o += null != a ? i.node.width * a : i._rightGap, s = cc.v2(o + i.content.width, 0);
                            break;
                        case 3:
                            r = s.top, r += null != a ? i.node.height * a : i._topGap, s = cc.v2(0, -r);
                            break;
                        case 4:
                            r = s.bottom + i.node.height, r -= null != a ? i.node.height * a : i._bottomGap, s = cc.v2(0, -r + i.content.height)
                    }
                    var c = i.content.getPosition();
                    c = Math.abs(i._sizeType ? c.y : c.x);
                    var l = i._sizeType ? s.y : s.x;
                    Math.abs((null != i._scrollPos ? i._scrollPos : c) - l) > .5 && (i._scrollView.scrollToOffset(s, e), i._scrollToListId = t, i._scrollToEndTime = (new Date).getTime() / 1e3 + e, i._scrollToSo = i.scheduleOnce(function () {
                        if (i._adheringBarrier || (i.adhering = i._adheringBarrier = !1), i._scrollPos = i._scrollToListId = i._scrollToEndTime = i._scrollToSo = null, n) {
                            var e = i.getItemByListId(t);
                            e && cc.tween(e).to(.1, {scale: 1.05}).to(.1, {scale: 1}).start()
                        }
                    }, e + .1), e <= 0 && i._onScrolling())
                }
            }, e.prototype._calcNearestItem = function () {
                var t, e, a, n, i, o, r = this;
                r.nearestListId = null, r._virtual && r._calcViewPos(), a = r.viewTop, n = r.viewRight, i = r.viewBottom, o = r.viewLeft;
                for (var s = !1, c = 0; c < r.content.childrenCount && !s; c += r._colLineNum) if (t = r._virtual ? r.displayData[c] : r._calcExistItemPos(c)) switch (e = r._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, r._alignCalcType) {
                    case 1:
                        t.right >= o && (r.nearestListId = t.id, o > e && (r.nearestListId += r._colLineNum), s = !0);
                        break;
                    case 2:
                        t.left <= n && (r.nearestListId = t.id, n < e && (r.nearestListId += r._colLineNum), s = !0);
                        break;
                    case 3:
                        t.bottom <= a && (r.nearestListId = t.id, a < e && (r.nearestListId += r._colLineNum), s = !0);
                        break;
                    case 4:
                        t.top >= i && (r.nearestListId = t.id, i > e && (r.nearestListId += r._colLineNum), s = !0)
                }
                if ((t = r._virtual ? r.displayData[r.displayItemNum - 1] : r._calcExistItemPos(r._numItems - 1)) && t.id == r._numItems - 1) switch (e = r._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, r._alignCalcType) {
                    case 1:
                        n > e && (r.nearestListId = t.id);
                        break;
                    case 2:
                        o < e && (r.nearestListId = t.id);
                        break;
                    case 3:
                        i < e && (r.nearestListId = t.id);
                        break;
                    case 4:
                        a > e && (r.nearestListId = t.id)
                }
            }, e.prototype.prePage = function (t) {
                void 0 === t && (t = .5), this.checkInited() && this.skipPage(this.curPageNum - 1, t)
            }, e.prototype.nextPage = function (t) {
                void 0 === t && (t = .5), this.checkInited() && this.skipPage(this.curPageNum + 1, t)
            }, e.prototype.skipPage = function (t, e) {
                var a = this;
                if (a.checkInited()) return a._slideMode != s.PAGE ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!") : void (t < 0 || t >= a._numItems || a.curPageNum != t && (a.curPageNum = t, a.pageChangeEvent && cc.Component.EventHandler.emitEvents([a.pageChangeEvent], t), a.scrollTo(t, e)))
            }, e.prototype.calcCustomSize = function (t) {
                var e = this;
                if (e.checkInited()) {
                    if (!e._itemTmp) return cc.error("Unset template item!");
                    if (!e.renderEvent) return cc.error("Unset Render-Event!");
                    e._customSize = {};
                    var a = cc.instantiate(e._itemTmp);
                    e.content.addChild(a);
                    for (var n = 0; n < t; n++) cc.Component.EventHandler.emitEvents([e.renderEvent], a, n), a.height == e._itemSize.height && a.width == e._itemSize.width || (e._customSize[n] = e._sizeType ? a.height : a.width);
                    return Object.keys(e._customSize).length || (e._customSize = null), a.removeFromParent(), a.destroy && a.destroy(), e._customSize
                }
            }, o([p({type: cc.Enum(r), tooltip: !1})], e.prototype, "templateType", void 0), o([p({
                type: cc.Node,
                tooltip: !1,
                visible: function () {
                    return this.templateType == r.NODE
                }
            })], e.prototype, "tmpNode", void 0), o([p({
                type: cc.Prefab, tooltip: !1, visible: function () {
                    return this.templateType == r.PREFAB
                }
            })], e.prototype, "tmpPrefab", void 0), o([p()], e.prototype, "_slideMode", void 0), o([p({
                type: cc.Enum(s),
                tooltip: !1
            })], e.prototype, "slideMode", null), o([p({
                type: cc.Float,
                range: [0, 1, .1],
                tooltip: !1,
                slide: !0,
                visible: function () {
                    return this._slideMode == s.PAGE
                }
            })], e.prototype, "pageDistance", void 0), o([p({
                type: cc.Component.EventHandler,
                tooltip: !1,
                visible: function () {
                    return this._slideMode == s.PAGE
                }
            })], e.prototype, "pageChangeEvent", void 0), o([p()], e.prototype, "_virtual", void 0), o([p({
                type: cc.Boolean,
                tooltip: !1
            })], e.prototype, "virtual", null), o([p({
                tooltip: !1, visible: function () {
                    var t = this.slideMode == s.NORMAL;
                    return t || (this.cyclic = !1), t
                }
            })], e.prototype, "cyclic", void 0), o([p({
                tooltip: !1, visible: function () {
                    return this.virtual
                }
            })], e.prototype, "lackCenter", void 0), o([p({
                tooltip: !1, visible: function () {
                    var t = this.virtual && !this.lackCenter;
                    return t || (this.lackSlide = !1), t
                }
            })], e.prototype, "lackSlide", void 0), o([p({type: cc.Integer})], e.prototype, "_updateRate", void 0), o([p({
                type: cc.Integer,
                range: [0, 6, 1],
                tooltip: !1,
                slide: !0
            })], e.prototype, "updateRate", null), o([p({
                type: cc.Integer,
                range: [0, 12, 1],
                tooltip: !1,
                slide: !0
            })], e.prototype, "frameByFrameRenderNum", void 0), o([p({
                type: cc.Component.EventHandler,
                tooltip: !1
            })], e.prototype, "renderEvent", void 0), o([p({
                type: cc.Enum(c),
                tooltip: !1
            })], e.prototype, "selectedMode", void 0), o([p({
                tooltip: !1, visible: function () {
                    return this.selectedMode == c.SINGLE
                }
            })], e.prototype, "repeatEventSingle", void 0), o([p({
                type: cc.Component.EventHandler,
                tooltip: !1,
                visible: function () {
                    return this.selectedMode > c.NONE
                }
            })], e.prototype, "selectedEvent", void 0), o([p({serializable: !1})], e.prototype, "_numItems", void 0), o([u, d(), h(lang.index60eed_189), f(cc.ScrollView), g(-5e3)], e)
        }(cc.Component);
        a.default = y, cc._RF.pop()
    }, {"./ListItem": "ListItem"}],
    Loading: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "41b57as2OZEuZ652LPFYv15", "Loading");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("./framework/base/BasePlatform"), s = t("./framework/configs/Appcfg"),
            c = t("./framework/manager/AudioMgr"), l = t("./framework/manager/EventMgr"),
            u = t("./framework/manager/FeedCardMgr"), p = t("./framework/manager/PlatformManager"),
            d = t("./framework/manager/ResCacheMgr"), h = t("./framework/manager/ResourceMgr"),
            g = t("./framework/manager/SdkMgr"), f = t("./framework/manager/UIMgr"), m = t("./game/config/Config"),
            y = t("./game/datas/TrackDataEvent"), v = t("./game/global/Global"), I = t("./game/manager/DataMgr"),
            _ = t("./game/manager/PlayerMgr"), b = cc._decorator, C = b.ccclass, D = b.property, M = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.uiRoot = null, e.tips = null, e.progressBar = null, e.process = 0, e.sceneName = "Main", e
                }

                return i(e, t), e.prototype.onLoad = function () {
                    switch (cc.director.preloadScene(this.sceneName), p.PlatformManager.currentPlatform) {
                        case r.Platform.BYTEDANCE:
                            console.log(lang.index60eed_190), sf.IBytedanceSDK.instance.initSDk()
                    }
                }, e.prototype.start = function () {
                    var t = this;
                    cc.game.addPersistRootNode(this.uiRoot), this.progressBar.progress = 0, this.tips.string = lang.index60eed_191, p.PlatformManager.getInstance().init(), d.ResCacheMgr.getInstance().init(), f.UIMgr.getInstance().addUICnf(m.UICF), f.UIMgr.getInstance().Init(this.uiRoot), c.AudioMgr.getInstance().init(m.AudioCF), l.EventMgr.getInstance().on(s.BaseEventName.Loading, this, this.setProcessLoad), p.PlatformManager.currentPlatform == r.Platform.BYTEDANCE && u.FeedCardMgr.instance.init(), g.SdkMgr.getInstance().requestCheckVersion(function () {
                        switch (p.PlatformManager.currentPlatform) {
                            case r.Platform.BYTEDANCE:
                                v.Global.saveOnServer = g.SdkMgr.getInstance().isIos()
                        }
                        v.Global.saveOnServer || t.setProcessLoad(s.LoadingProcess.StartLoading)
                    }), this.preloadUI(), this.locDomain()
                }, e.prototype.setProcessLoad = function (t) {
                    switch (this.process = t / 100, t) {
                        case s.LoadingProcess.StartLoading:
                            this.tips.string = lang.index60eed_192, I.DataMgr.getInstance().preload();
                            break;
                        case s.LoadingProcess.ExcelCfg:
                            this.tips.string = lang.index60eed_193, _.PlayerMgr.getInstance().preload();
                            break;
                        case s.LoadingProcess.PlayerCfg:
                            this.tips.string = lang.index60eed_194, _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide1), this.setProcessLoad(s.LoadingProcess.EndLoading);
                            break;
                        case s.LoadingProcess.EndLoading:
                            this.tips.string = lang.index60eed_195;
                            var e = cc.sys.localStorage.getItem("isReadsfplay.netricy");
                            g.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == r.AppName.Invincible && p.PlatformManager.currentPlatform == r.Platform.BYTEDANCE ? h.ResourceMgr.getInstance().loadBundle("otherbundle", function () {
                                cc.director.loadScene("Start")
                            }) : g.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == r.AppName.Invincible && p.PlatformManager.currentPlatform == r.Platform.WECHAT ? (f.UIMgr.getInstance().openUI(m.UIID.UIPlantLottery, m.UIID.UINone), f.UIMgr.getInstance().openUI(m.UIID.UITop, m.UIID.UINone)) : e || p.PlatformManager.currentPlatform != r.Platform.OPPO ? cc.director.loadScene(this.sceneName) : f.UIMgr.getInstance().openUI(m.UIID.PopUserPrivacy, 1), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide2)
                    }
                    this.progressBar.progress = this.process
                }, e.prototype.preloadUI = function () {
                    g.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == r.AppName.Invincible && p.PlatformManager.currentPlatform == r.Platform.BYTEDANCE ? h.ResourceMgr.getInstance().getBundle("otherbundle") : h.ResourceMgr.getInstance().preload("prefabs", ["UIHome", "UITop", "UIPlantLottery"])
                }, e.prototype.locDomain = function () {
                    if (p.PlatformManager.currentPlatform == r.Platform.WEB_LINK) {
                        var t = new cc.Node("lockNode");
                        t.height = cc.view.getVisibleSize().height, t.width = cc.view.getVisibleSize().width, t.addComponent(cc.BlockInputEvents);
                        var e = t.addComponent(cc.Widget), a = t.addComponent(cc.Sprite);
                        a.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                        var n = new cc.SpriteFrame, i = new cc.Texture2D;
                        n.setTexture(i), a.spriteFrame = n;
                        var o = new cc.RenderTexture;
                        o.initWithSize(556, 582);
                        var s = o.readPixels(), c = o.readPixels(s, 0, 0, 278, 582), l = new cc.RenderTexture;
                        l.initWithData(c, cc.Texture2D.PixelFormat.RGB888, 278, 582), a.spriteFrame.setTexture(l), t.color = new cc.Color(0, 0, 0), e.left = 0, e.right = 0, e.top = 0, e.bottom = 0, e.updateAlignment(), t.parent = this.uiRoot, t.zIndex = 99999
                    }
                }, o([D(cc.Node)], e.prototype, "uiRoot", void 0), o([D(cc.Label)], e.prototype, "tips", void 0), o([D(cc.ProgressBar)], e.prototype, "progressBar", void 0), o([C], e)
            }(cc.Component);
        a.default = M, cc._RF.pop()
    }, {
        "./framework/base/BasePlatform": "BasePlatform",
        "./framework/configs/Appcfg": "Appcfg",
        "./framework/manager/AudioMgr": "AudioMgr",
        "./framework/manager/EventMgr": "EventMgr",
        "./framework/manager/FeedCardMgr": "FeedCardMgr",
        "./framework/manager/PlatformManager": "PlatformManager",
        "./framework/manager/ResCacheMgr": "ResCacheMgr",
        "./framework/manager/ResourceMgr": "ResourceMgr",
        "./framework/manager/SdkMgr": "SdkMgr",
        "./framework/manager/UIMgr": "UIMgr",
        "./game/config/Config": "Config",
        "./game/datas/TrackDataEvent": "TrackDataEvent",
        "./game/global/Global": "Global",
        "./game/manager/DataMgr": "DataMgr",
        "./game/manager/PlayerMgr": "PlayerMgr"
    }],
    LockData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "9bd56TKCiRMW42gPMAVI21o", "LockData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.plantLockData = a.Data = void 0;
        var r = t("../../framework/base/BaseData"), s = t("../../game/config/Config"), c = t("../manager/DataMgr"),
            l = cc._decorator, u = l.ccclass, p = (l.property, function () {
                this.lockData = []
            });
        a.Data = p;
        var d = function () {
            this.unLock = !1
        };
        a.plantLockData = d;
        var h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gameKey = s.GameConfig.AppCacheName + "lockData", e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new p, this.data
            }, e.prototype.initData = function (t) {
                var e = this;
                t && c.DataMgr.getInstance().getAllHeroCfg().forEach(function (t) {
                    if (1 == t.Type) {
                        var a = new d;
                        a.plantId = t.ID, a.unLock = 1 == t.DefaultUnlock, e.data.lockData.push(a)
                    }
                }), this.saveData()
            }, e.prototype.getLockData = function () {
                return this.data.lockData
            }, e.prototype.setLockDataById = function (t, e) {
                this.data.lockData[t - 110001].unLock = e, this.saveData()
            }, e.prototype.getLockDataById = function (t) {
                return this.data.lockData[t - 110001].unLock
            }, o([u], e)
        }(r.BaseData);
        a.default = h, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../game/config/Config": "Config",
        "../manager/DataMgr": "DataMgr"
    }],
    LogMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "66888k6K8BMX5FlnhFjgbWs", "LogMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.LogMgr = void 0;
        var n = function () {
            function t() {
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.debug = function () {
            }, t.prototype.info = function (t, e) {
                console.log(t, e)
            }, t.prototype.error = function (t, e) {
                console.error(t, e)
            }, t.instance = null, t
        }();
        a.LogMgr = n, cc._RF.pop()
    }, {}],
    LotteryData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "87e68AYxF5CeKU583qTtW2T", "LotteryData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.lotteryData = void 0;
        var r = t("../../framework/base/BaseData"), s = t("../config/Config"), c = t("../manager/DataMgr"),
            l = cc._decorator, u = l.ccclass, p = (l.property, function () {
                this.lotteryId = 0, this.lotteryNum = 0
            });
        a.lotteryData = p;
        var d = function () {
            this.goldenNum = 0, this.kingNum = 0, this.getKingNum = 0, this.kingShow = !1
        }, h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = s.GameConfig.AppCacheName + "lotteryData", e.lotteryIdArr = [71001, 71002, 81001, 81002], e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new d, this.data
            }, e.prototype.initData = function () {
                var t = this;
                this.data.lotteryData || (this.data.lotteryData = [], c.DataMgr.getInstance().getAllDrawCardCfg().forEach(function (e, a) {
                    if (!(a > 1)) {
                        var n = new p;
                        n.lotteryId = e.ID, n.lotteryNum = 4, t.data.lotteryData.push(n)
                    }
                })), this.data.lotteryData.length < this.lotteryIdArr.length && this.lotteryIdArr.forEach(function (e) {
                    if (!t.data.lotteryData.find(function (t) {
                        return t.lotteryId == e
                    })) {
                        var a = new p;
                        a.lotteryId = e, a.lotteryNum = 4, t.data.lotteryData.push(a)
                    }
                }), this.data.getKingNum || (this.data.getKingNum = 0), this.saveData()
            }, e.prototype.setOlddata = function (t) {
                null != t && (this.data.lotteryData = t, this.saveData())
            }, e.prototype.setLotteryData = function (t, e) {
                for (var a = 0; a < this.data.lotteryData.length; a++) if (this.data.lotteryData[a].lotteryId == t) {
                    this.data.lotteryData[a].lotteryNum = e;
                    break
                }
                this.saveData()
            }, e.prototype.getLotteryData = function () {
                return this.data.lotteryData
            }, e.prototype.getLotteryDataById = function (t) {
                return this.data.lotteryData.find(function (e) {
                    return e.lotteryId == t
                })
            }, e.prototype.setGoldenNum = function (t) {
                this.data.goldenNum = t, this.saveData()
            }, e.prototype.addGoldenNum = function () {
                if (this.data.goldenNum++, this.data.goldenNum >= Number(c.DataMgr.getInstance().getAllParamsCfg()[6].value)) return this.setKingShow(!0), !0;
                this.saveData()
            }, e.prototype.getGoldenNum = function () {
                return this.data.goldenNum
            }, e.prototype.setKingNum = function (t) {
                this.data.kingNum = t, this.saveData()
            }, e.prototype.addKingNum = function () {
                return this.data.kingNum++, this.data.kingNum >= 3 && this.setKingShow(!1), this.saveData(), this.data.kingNum
            }, e.prototype.getKingNum = function () {
                return this.data.kingNum
            }, e.prototype.setKingShow = function (t) {
                this.data.kingShow = t, this.saveData()
            }, e.prototype.getKingShow = function () {
                return this.data.kingShow
            }, e.prototype.addgetKingNum = function () {
                return this.data.getKingNum++, this.saveData(), this.data.getKingNum
            }, e.prototype.getgetKingNum = function () {
                return this.data.getKingNum
            }, o([u], e)
        }(r.BaseData);
        a.default = h, cc._RF.pop()
    }, {"../../framework/base/BaseData": "BaseData", "../config/Config": "Config", "../manager/DataMgr": "DataMgr"}],
    Main: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "bdd5dhrRU5Cjq9Jm8O/mMt1", "Main");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("./framework/base/BasePlatform"), s = t("./framework/list/List"),
            c = t("./framework/manager/AudioMgr"), l = t("./framework/manager/EventMgr"),
            u = t("./framework/manager/FeedCardMgr"), p = t("./framework/manager/PlatformManager"),
            d = t("./framework/manager/ResourceMgr"), h = t("./framework/manager/SdkMgr"),
            g = t("./framework/manager/UIMgr"), f = t("./game/CombatControl/Customs"), m = t("./game/config/Config"),
            y = t("./game/datas/TrackDataEvent"), v = t("./game/datas/UserData"), I = t("./game/manager/AwardMgr"),
            _ = t("./game/manager/DataMgr"), b = t("./game/manager/EquipMgr"), C = t("./game/manager/LevelMgr"),
            D = t("./game/manager/PlayerMgr"), M = t("./game/ui/UIGuide"), k = t("./game/ui/UITop"), N = cc._decorator,
            w = N.ccclass, S = N.property, P = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.root = null, e.cameraNode = null, e.startCombatBG = null, e.listView = null, e.childTouch = !1, e.isFirst = !0, e.firstNum = 0, e.ChapterId = 1, e.isFitHeight = !1, e.isFitWidth = !1, e
                }

                var a;
                return i(e, t), a = e, e.prototype.onLoad = function () {
                    a.instance = this, g.UIMgr.getInstance().getChildByName("UILoading").zIndex = 9999, g.UIMgr.getInstance().openUI(m.UIID.UITouch, m.UIID.UINone), this.adapt(), this.preloadRes(), I.AwardMgr.getInstance().init(), b.EquipMgr.getInstance().init()
                }, e.prototype.hideLoading = function () {
                    g.UIMgr.getInstance().getChildByName("UILoading").destroy()
                }, e.prototype.start = function () {
                    for (var t = this, e = D.PlayerMgr.getInstance().getSignData(), a = [60, 180, 300, 420, 600, 720, 900, 1200], n = function (t) {
                        i.scheduleOnce(function () {
                            switch (t) {
                                case 0:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_1);
                                    break;
                                case 1:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_3);
                                    break;
                                case 2:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_5), p.PlatformManager.currentPlatform == r.Platform.BYTEDANCE && u.FeedCardMgr.instance.checkCanSend() && e.getAlredySign().length > 0 && u.FeedCardMgr.instance.getTaskTarget(function (t) {
                                        if (t) {
                                            console.log(lang.index60eed_196, t);
                                            for (var a = 0; a < t.length; a++) {
                                                var n = t[a];
                                                "all=0" == n.conditions || "day=1" == n.conditions ? (u.FeedCardMgr.instance.sendTask(n.id), e.addFeedCard(n.id)) : (n.conditions.indexOf(">=") || n.conditions.indexOf("==")) && s >= Number(n.conditions.split(">=")[1]) && (u.FeedCardMgr.instance.sendTask(n.id), e.addFeedCard(n.id))
                                            }
                                        }
                                    });
                                    break;
                                case 3:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_7);
                                    break;
                                case 4:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_10);
                                    break;
                                case 5:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_12);
                                    break;
                                case 6:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_15);
                                    break;
                                case 7:
                                    D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.time_20)
                            }
                        }, a[t])
                    }, i = this, o = 0; o < a.length; o++) n(o);
                    var s = e.getAlredySign().length;
                    p.PlatformManager.currentPlatform == r.Platform.BYTEDANCE && u.FeedCardMgr.instance.checkCanSend() && (u.FeedCardMgr.instance.getIsBytebroadside() && (D.PlayerMgr.getInstance().isSidebar = !0, console.log(lang.index60eed_197)), e.getAlredySign().length > 0 && u.FeedCardMgr.instance.getTaskTarget(function (t) {
                        if (t) {
                            console.log(lang.index60eed_198, t);
                            for (var e = 0; e < t.length; e++) {
                                var a = t[e];
                                "all=0" == a.conditions || "day=1" == a.conditions ? u.FeedCardMgr.instance.sendTask(a.id) : (a.conditions.indexOf(">=") || a.conditions.indexOf("==")) && s >= Number(a.conditions.split(">=")[1]) && u.FeedCardMgr.instance.sendTask(a.id)
                            }
                        }
                    }), s >= 1 && s < 7 && l.EventMgr.getInstance().emit(m.EventName.openFeedCardSub), -1 != u.FeedCardMgr.instance.getLaunchCardId() && (p.PlatformManager.getInstance().youmengTrack("erplaror", D.PlayerMgr.getInstance().getTrackData().getAbType(), lang.index60eed_199 + u.FeedCardMgr.instance.getLaunchCardId(), null), console.log(lang.index60eed_200, u.FeedCardMgr.instance.getLaunchCardId()), D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.open_id_reward_index, localStorage.getItem(u.SaveKey.openId), u.FeedCardMgr.instance.getLaunchCardId() + "-day" + e.getCurentDay()), s >= 7 || g.UIMgr.getInstance().openUI(m.UIID.UISign, m.UIID.UINone, function () {
                        l.EventMgr.getInstance().emit(m.EventName.openFeedCardSub)
                    }))), D.PlayerMgr.getInstance().getGuideData().getGuideEnd() || D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide2_1), D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.dau), e.getCurentDay() <= 7 && e.checkTodyCanSign() && D.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId["retention_" + e.getCurentDay()]), this.listView.numItems = 4, this.backToCenter(), l.EventMgr.getInstance().on(m.EventName.closeUI, this, this.backToCenter.bind(this)), c.AudioMgr.getInstance().setButtonNomalAudio(m.AudioId.btnClick), cc.director.getCollisionManager().enabled = !0, c.AudioMgr.getInstance().playMusic(m.AudioId.bgMain, "bgMain"), g.UIMgr.getInstance().openUI(m.UIID.UIHome, m.UIID.UINone), p.APPMgr.currentApp == r.AppName.Invincible && h.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe), g.UIMgr.getInstance().openUIOfCallback(m.UIID.UITop, m.UIID.UINone, function (e) {
                        t.uiTop = e.getComponent(k.default)
                    });
                    var d = D.PlayerMgr.getInstance().getUserData(),
                        f = D.PlayerMgr.getInstance().getCustomData().getCurrentCustom();
                    if (1 == f.passAll) {
                        var v = _.DataMgr.getInstance().getAllLevelCfg();
                        v[v.length - 1].LevelId != f.currentCustom && d.setCurrentCustom(v[f.currentCustom - 610001].NextId)
                    }
                    C.LevelMgr.getInstance().setCompoundMap(), this.scheduleOnce(function () {
                        l.EventMgr.getInstance().emit("WCNGameEnd", lang.index60eed_201)
                    }, 3), this.checkUserInfo(function () {
                    })
                }, e.prototype.backToCenter = function () {
                    var t = D.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom;
                    this.firstNum = Math.floor((t - 610001) / 10);
                    var e = 0 - t % 10 / 10;
                    0 == e && (e = -1), -.1 == e && (e = -.01), this.listView.scrollTo(this.firstNum, .5, e)
                }, e.prototype.changeCustoms = function (t, e) {
                    var a = this;
                    if (!(this.isFirst && e < this.firstNum)) {
                        this.isFirst = !1;
                        for (var n = _.DataMgr.getInstance().getLevelCfgByChapterId(e + 1), i = t.children.length, o = function (e) {
                            t.children[e].name = e + "";
                            for (var o = t.children[e].getChildByName("customslayer"), s = function (s) {
                                var c, l = e > 0 ? n[s + Math.floor(n.length / i * e)] : n[s];
                                o.children[s] ? (c = o.children[s], r.setCustoms(c, l, s)) : d.ResourceMgr.getInstance().loadRes("prefabs", "game/customs", cc.Prefab, function (n) {
                                    if (c = cc.instantiate(n), o.addChild(c), a.setCustoms(c, l, s), 0 == e && 0 == s) {
                                        var i = D.PlayerMgr.getInstance().getGuideData();
                                        i.getGuideEnd() || (a.guideCfgArr = _.DataMgr.getInstance().getAllGuideCfg(), i.endId = a.guideCfgArr.length + 1, i.data.currentId >= 9 || a.startGuide(t.children[0].getChildByName("customslayer").children[0]))
                                    }
                                })
                            }, c = 0; c < Math.floor(n.length / i); c++) s(c)
                        }, r = this, s = 0; s < i; s++) o(s)
                    }
                }, e.prototype.startGuide = function (t) {
                    if (!h.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) || p.APPMgr.currentApp != r.AppName.Invincible) {
                        var e = D.PlayerMgr.getInstance().getGuideData(), a = this.getCfg(e.getCurrentId() - 1, t, e);
                        g.UIMgr.getInstance().openUI(m.UIID.UIGuide, m.UIID.UINone, a)
                    }
                }, e.prototype.getCfg = function (t, e) {
                    var a = this, n = new M.UIGuideData, i = this.guideCfgArr[t];
                    n.clickType = i.GuideType, n.isWeek = 0 == i.GuideObj, n.tipstring = i.Describe, n.showHand = 1 == i.Finger, n.hideMask = 1 != i.Mask, n.distNode = 0 == n.isWeek ? e : null, i.GuideGroup == this.guideCfgArr[t + 1].GuideGroup ? n.callBack = function () {
                        D.PlayerMgr.getInstance().getGuideData().addCurrentId(!1), a.startGuide(e)
                    } : n.groupLast = !0, n.showPlant = 1 == i.ShowPlant, n.lightType = 1, n.addSize = new cc.Size(-10, -10), n.maskOffest = new cc.Vec2(0, -40);
                    var o = i.BubbleOffset.split(",");
                    return n.tipsOffest = new cc.Vec2(Number(o[0]), Number(o[1])), n
                }, e.prototype.setCustoms = function (t, e, a) {
                    var n = [{x: -465, y: 10}, {x: -210, y: -35}, {x: 30, y: 15}, {x: 265, y: 100}, {x: 500, y: 100}];
                    t.x = n[a].x, t.y = n[a].y;
                    var i = t.getComponent(f.default);
                    i.customData = e, d.ResourceMgr.getInstance().loadSpriteframe("zombie", "main/" + e.MonsterIcon, function (t) {
                        i.spriteFrame = t, i.changeStatus()
                    })
                }, e.prototype.checkUserInfo = function (t) {
                    var e = D.PlayerMgr.getInstance().getUserData();
                    e.getPlayerName() ? t && t() : h.SdkMgr.getInstance().getUserInfo(function (a, n) {
                        var i = new v.ThirdUserInfo;
                        a && (e.setPlayerName(a), i.userName = a), n && (i.imgUrl = n), a || n ? e.setThirdInfo(i) : e.setPlayerName(lang.index60eed_202), t && t()
                    })
                }, e.prototype.preloadRes = function () {
                    if (m.GameConfig.PreBundle.length > 0) for (var t = 0; t < m.GameConfig.PreBundle.length; t++) {
                        var e = m.GameConfig.PreBundle[t];
                        d.ResourceMgr.getInstance().preload(e, null)
                    }
                }, e.prototype.adapt = function () {
                    var t = cc.winSize.width / cc.winSize.height,
                        e = cc.Canvas.instance.designResolution.width / cc.Canvas.instance.designResolution.height;
                    t <= 1 && t <= e ? this.setFitWidth() : this.setFitHeight()
                }, e.prototype.setFitHeight = function () {
                    cc.Canvas.instance.fitHeight = !0, cc.Canvas.instance.fitWidth = !1, this.isFitHeight = !0
                }, e.prototype.setFitWidth = function () {
                    cc.Canvas.instance.fitHeight = !1, cc.Canvas.instance.fitWidth = !0, this.isFitWidth = !0
                }, e.prototype.getFitHeight = function () {
                    return this.isFitHeight
                }, o([S(cc.Node)], e.prototype, "root", void 0), o([S(cc.Node)], e.prototype, "cameraNode", void 0), o([S(cc.Node)], e.prototype, "startCombatBG", void 0), o([S(s.default)], e.prototype, "listView", void 0), a = o([w], e)
            }(cc.Component);
        a.default = P, cc._RF.pop()
    }, {
        "./framework/base/BasePlatform": "BasePlatform",
        "./framework/list/List": "List",
        "./framework/manager/AudioMgr": "AudioMgr",
        "./framework/manager/EventMgr": "EventMgr",
        "./framework/manager/FeedCardMgr": "FeedCardMgr",
        "./framework/manager/PlatformManager": "PlatformManager",
        "./framework/manager/ResourceMgr": "ResourceMgr",
        "./framework/manager/SdkMgr": "SdkMgr",
        "./framework/manager/UIMgr": "UIMgr",
        "./game/CombatControl/Customs": "Customs",
        "./game/config/Config": "Config",
        "./game/datas/TrackDataEvent": "TrackDataEvent",
        "./game/datas/UserData": "UserData",
        "./game/manager/AwardMgr": "AwardMgr",
        "./game/manager/DataMgr": "DataMgr",
        "./game/manager/EquipMgr": "EquipMgr",
        "./game/manager/LevelMgr": "LevelMgr",
        "./game/manager/PlayerMgr": "PlayerMgr",
        "./game/ui/UIGuide": "UIGuide",
        "./game/ui/UITop": "UITop"
    }],
    MapMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "03f76lYaYVAf6zOI0KzOqCe", "MapMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.MapMgr = void 0;
        var n = t("../../framework/manager/LogMgr"), i = t("./PlayerMgr"), o = function () {
            function t() {
                this.plantCellArray = [], this.startBtn = null, this.raceData = {}, this.stumpPosArr = [], this.zombieOffset = {
                    310001: [25],
                    310002: [25],
                    310003: [25],
                    310004: [55, 25],
                    310005: [55, 25],
                    310006: [55, 25],
                    310007: [40],
                    310008: [25],
                    310009: [100],
                    310010: [100, 0],
                    310011: [30],
                    310012: [100],
                    310013: [290],
                    310014: [120],
                    310015: [90],
                    310016: [90],
                    310017: [90]
                }
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.creatorMap = function (t, e, a, i, o, r) {
                var s = this;
                this.init(), n.LogMgr.getInstance().debug("---", [Math.floor(5 / 8), 5]);
                for (var c = 1; c < 8; c++) {
                    var l = cc.instantiate(e.children[0].children[0]);
                    e.children[0].addChild(l)
                }
                for (; t.NumberOfLawns > 1;) {
                    var u = cc.instantiate(e.children[0]), p = cc.instantiate(a.children[0]),
                        d = cc.instantiate(i.children[0]), h = cc.instantiate(o.children[0]);
                    e.addChild(u), a.addChild(p), i.addChild(d), o.addChild(h), t.NumberOfLawns--
                }
                this.plantLayer = e, this.plantColliderArray = this.plantLayer.getComponentsInChildren(cc.BoxCollider), this.zombieLayer = a, this.bulletLayer = i, this.callLayer = o, this.effectLayer = r, this.plantLayer.children.forEach(function (t) {
                    t.children.forEach(function (t) {
                        s.plantCellArray.push(t)
                    })
                })
            }, t.prototype.init = function () {
                this.plantCellArray = [], this.raceData = {}, this.stumpPosArr = [], this.userData = i.PlayerMgr.getInstance().getUserData()
            }, t.prototype.judge = function (t) {
                for (var e = 0; e < this.plantCellArray.length; e++) if (!(e < 8 - this.userData.getNowCellNum()) && cc.Intersection.pointInPolygon(t, this.plantColliderArray[e].world.points)) return [Math.floor(e / 8), e % 8];
                return !1
            }, t.prototype.error = function (t, e) {
                console.error(t, e)
            }, t.instance = null, t
        }();
        a.MapMgr = o, cc._RF.pop()
    }, {"../../framework/manager/LogMgr": "LogMgr", "./PlayerMgr": "PlayerMgr"}],
    Music: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "04960Y74qFKEpqDZ86XNgna", "Music");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = r.property, l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.bg_music = null, e.collision = null, e.buff = null, e.btn = null, e
            }

            return i(e, t), e.prototype.play_music_collision = function () {
                this.collision.play()
            }, e.prototype.play_music_buff = function () {
                this.buff.play()
            }, e.prototype.play_music_btn = function () {
                this.btn.play()
            }, o([c({
                type: cc.AudioSource,
                displayName: lang.index60eed_203,
                tooltip: lang.index60eed_204
            })], e.prototype, "bg_music", void 0), o([c({
                type: cc.AudioSource,
                displayName: lang.index60eed_205,
                tooltip: lang.index60eed_206
            })], e.prototype, "collision", void 0), o([c({
                type: cc.AudioSource,
                displayName: lang.index60eed_207,
                tooltip: lang.index60eed_208
            })], e.prototype, "buff", void 0), o([c({
                type: cc.AudioSource,
                displayName: lang.index60eed_209,
                tooltip: lang.index60eed_210
            })], e.prototype, "btn", void 0), o([s], e)
        }(cc.Component);
        a.default = l, cc._RF.pop()
    }, {}],
    NewInbornData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "90437houiRE6bB0uYchKu4A", "NewInbornData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.NewInbornData = a.jkl = a.newInborn = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../../game/config/Config"), s = t("../manager/DataMgr"),
            c = function () {
                this.type = 0, this.allAddition = 0
            };
        a.newInborn = c;
        a.jkl = function () {
            this.isGet = !1
        };
        var l = function () {
            this.currentId = 1, this.newInbornArr = [], this.jklArr = [], this.jklGet = [], this.currentJklId = 1
        }, u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = r.GameConfig.AppCacheName + "newInborn", e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new l, this.data
            }, e.prototype.initData = function () {
                var t = this;
                this.data.currentJklId || (this.data.currentJklId = 1);
                var e = s.DataMgr.getInstance().getAllInbornCfg();
                if (!this.data.newInbornArr || this.data.newInbornArr.length < e.length) if (this.data.newInbornArr) for (var a = this.data.newInbornArr.length; a < e.length; a++) {
                    var n = new c;
                    n.type = a + 1, this.data.newInbornArr.push(n)
                } else this.data.newInbornArr = [], e.forEach(function (e, a) {
                    var n = new c;
                    n.type = a + 1, t.data.newInbornArr.push(n)
                });
                this.data.jklGet || (this.data.jklGet = [], this.data.jklArr.length > 0 && (this.data.jklArr.forEach(function (e) {
                    e.isGet && t.data.jklGet.push(e.id)
                }), this.data.jklArr = null)), this.saveData()
            }, e.prototype.getCurrentId = function () {
                return this.data.currentId
            }, e.prototype.addCurrentId = function () {
                this.data.currentId += 1, this.saveData()
            }, e.prototype.getNewInbornArr = function () {
                return this.data.newInbornArr
            }, e.prototype.getNewInbornByType = function (t) {
                return this.data.newInbornArr.find(function (e) {
                    return e.type == t
                })
            }, e.prototype.addnewInbornArr = function (t, e, a) {
                void 0 === a && (a = !0), this.getNewInbornByType(t.Type).allAddition += e, a && this.addCurrentId(), this.saveData()
            }, e.prototype.addCurrentJklId = function () {
                this.data.currentJklId += 1, this.saveData()
            }, e.prototype.getCurrentJklId = function () {
                return this.data.currentJklId
            }, e.prototype.setjklById = function (t) {
                this.data.jklArr.find(function (e) {
                    return e.id == t
                }).isGet = !0, this.addCurrentJklId(), this.saveData()
            }, e.prototype.getjklArr = function () {
                return this.data.jklArr
            }, e.prototype.getjklById = function (t) {
                return this.data.jklArr.find(function (e) {
                    return e.id == t
                })
            }, e.prototype.addJklGet = function (t) {
                this.data.jklGet.push(t), this.addCurrentJklId(), this.saveData()
            }, e.prototype.getJklGet = function () {
                return this.data.jklGet
            }, e.prototype.getjklGetById = function (t) {
                return this.data.jklGet.indexOf(t)
            }, e
        }(o.BaseData);
        a.NewInbornData = u, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../game/config/Config": "Config",
        "../manager/DataMgr": "DataMgr"
    }],
    PieceCtrl: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "dec82v3zFRLeLptbXaXwgP2", "PieceCtrl");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseCtrl"), s = cc._decorator, c = s.ccclass, l = s.property, u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.label = null, e.text = "hello", e
            }

            return i(e, t), e.prototype.start = function () {
            }, o([l(cc.Label)], e.prototype, "label", void 0), o([l], e.prototype, "text", void 0), o([c], e)
        }(r.default);
        a.default = u, cc._RF.pop()
    }, {"../../framework/base/BaseCtrl": "BaseCtrl"}],
    PlantLevelData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "8876ebpYwBH+I1WEtK/t0AE", "PlantLevelData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.LevelData = a.Data = void 0;
        var r = t("../../framework/base/BaseData"), s = t("../config/Config"), c = t("../manager/DataMgr"),
            l = cc._decorator, u = l.ccclass, p = (l.property, function () {
                this.LevelData = []
            });
        a.Data = p;
        var d = function () {
            this.plantId = 0, this.plantLevel = 1
        };
        a.LevelData = d;
        var h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gameKey = s.GameConfig.AppCacheName + "plantLevelData", e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new p, this.data
            }, e.prototype.initData = function (t) {
                var e = this;
                t && (this.data.LevelData = [], c.DataMgr.getInstance().getAllHeroCfg().forEach(function (t) {
                    if (1 == t.Type) {
                        var a = new d;
                        a.plantId = t.ID, a.plantLevel = 1, e.data.LevelData.push(a)
                    }
                })), this.saveData()
            }, e.prototype.setOlddata = function (t) {
                null != t && (this.data.LevelData = t, this.saveData())
            }, e.prototype.setPlantData = function (t, e) {
                for (var a = 0; a < this.data.LevelData.length; a++) if (this.data.LevelData[a].plantId == t) {
                    this.data.LevelData[a].plantLevel = e;
                    break
                }
                this.saveData()
            }, e.prototype.getPlantData = function () {
                return this.data.LevelData
            }, o([u], e)
        }(r.BaseData);
        a.default = h, cc._RF.pop()
    }, {"../../framework/base/BaseData": "BaseData", "../config/Config": "Config", "../manager/DataMgr": "DataMgr"}],
    Plants: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "49d86HRMltGaIo6SgIYxi1O", "Plants");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.addAttack = void 0;
        var r = t("../../framework/manager/LogMgr"), s = t("../../framework/manager/PoolMgr"),
            c = t("../config/Config"), l = t("./Bullets"), u = t("./CombatUnitCtrl"), p = t("../manager/MapMgr"),
            d = t("./Zombie"), h = t("../../framework/utils/Utils"), g = t("../../framework/manager/ResourceMgr"),
            f = t("../manager/DataMgr"), m = t("../../framework/manager/AudioMgr"),
            y = t("../../framework/manager/UIMgr"), v = t("../manager/LevelMgr"), I = cc._decorator, _ = I.ccclass,
            b = (I.property, function () {
                this.add = 0, this.plies = 0, this.max = 9, this.time = 1
            });
        a.addAttack = b;
        var C = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.damagedBoold = 0, e.plantLayerId = [], e.isUnMatched = !1, e.moreBulletInt = .5, e.bulletNum = 0, e.bulletStartPointArr = [], e.zombieLine = null, e.bulletLine = null, e.isSuperPlant = !1, e.baseSkillData = null, e.newSkillNum = 0, e.dbhNum = 0, e
            }

            var a;
            return i(e, t), a = e, e.prototype.onEnable = function () {
                var e = this;
                this.node.getComponent(sp.Skeleton).setCompleteListener(function (n) {
                    "attack" == n.animation.name || "attack2" == n.animation.name ? e.node.getComponent(sp.Skeleton).setAnimation(0, "idle", !0) : "animation" != n.animation.name && "boom" != n.animation.name || (e.node.getComponent(sp.Skeleton).skeletonData = null, e.node.removeComponent(a), t.prototype.unitDie.call(e, 1, e.plantLayerId, e.arrIdx, e.compoundPlant))
                })
            }, e.prototype.setProperty = function (e, a, n, i, o, r) {
                var s = this;
                if (this.unitType = 1, t.prototype.setProperty.call(this, e, a, n, i, o, r), v.LevelMgr.getInstance().getisGameStart() ? this.Status = u.UnitStatus.Attack : this.addEvent(c.EventName.startGame, function () {
                    s.Status = u.UnitStatus.Attack, s.attackSpeed = s.attackSpeed >= 1 ? 1 : s.attackSpeed, s.skillData.RaceAddAttack && s.scheduleOnce(function () {
                        var t = p.MapMgr.getInstance().raceData, e = s.skillData.RaceAddAttack.split(","),
                            a = t[Number(e[0])];
                        o == Number(e[0]) && a--, s.attack = (1 + Number(e[1]) / 100 * a) * s.unitData.Attack
                    }, .01)
                }), this.skillData.SubsistAddAttack) {
                    var l = this.skillData.SubsistAddAttack.split(",");
                    this.subAddAttack = new b, this.subAddAttack.add = Number(l[0]), this.subAddAttack.max = Number(l[1])
                }
                if (this.skillData.StorageAddAttack) {
                    var d = this.skillData.StorageAddAttack.split(",");
                    this.stoAddAttack = new b, this.stoAddAttack.add = Number(d[0]), this.stoAddAttack.max = Number(d[1])
                }
                this.plantLayerId = n, this.arrIdx = i, this.raceType = o, this.compoundPlant = r, this.isDestroy = !1, this.bulletLayer = p.MapMgr.getInstance().bulletLayer, this.zombieLayer = p.MapMgr.getInstance().zombieLayer, this.node.getComponent(sp.Skeleton).setAnimation(0, "idle", !0);
                for (var h = 0; h < this.zombieLayer.children.length; h++) if (this.zombieLayer.children[h].y == this.node.parent.y) {
                    this.zombieLine = this.zombieLayer.children[h];
                    break
                }
                for (h = 0; h < this.bulletLayer.children.length; h++) if (this.bulletLayer.children[h].y == this.node.parent.parent.y) {
                    this.bulletLine = this.bulletLayer.children[h];
                    break
                }
                if (this.skillData.Unmatched && this.scheduleOnce(function () {
                    s.node.getComponent(sp.Skeleton).skeletonData.skeletonJson.skins.length > 1 && s.node.getComponent(sp.Skeleton).setSkin("skin_1")
                }, .1), this.skillData.OperateTransmit) {
                    var g = 4 == this.skillData.Attribute ? "fabo" : "fashe";
                    this.loadSpriteFrame("bullet", g, function (t) {
                        s.node.getChildByName("ready").getComponent(cc.Sprite).spriteFrame = t
                    }), this.addEvent(c.EventName.cilckPlant, function (t) {
                        if (s.plantLayerId[0] == t[0] && s.plantLayerId[1] == t[1]) if (s.node.getChildByName("ready").active) s.zombieLine.children.length <= 0 ? y.UIMgr.getInstance().openUI(c.UIID.UITips, c.UIID.UINone, lang.index60eed_211) : s.detectionDamage(); else {
                            var e = 4 == s.skillData.Attribute ? lang.index60eed_212 : lang.index60eed_213;
                            y.UIMgr.getInstance().openUI(c.UIID.UITips, c.UIID.UINone, e)
                        }
                    })
                }
                4100081 == this.skillData.ID && this.loadResFromBundle("common", "spine", cc.Material, function (t) {
                    s.node.getComponent(sp.Skeleton).setMaterial(0, t)
                })
            }, e.prototype.detectionDamage = function (t) {
                var e = this;
                switch (this.skillData.AttackType) {
                    case 1:
                        if (this.skillData.SelfRangeDamage) {
                            var a = this.skillData.SelfRangeDamage.split(",");
                            this.zombieLine.children.forEach(function (t) {
                                if (t.x > e.node.parent.x - e.node.parent.width * Number(a[0]) && t.x < e.node.parent.x + e.node.parent.width * Number(a[0])) {
                                    var n = t.getComponent(d.default),
                                        i = n.getProperty().MaxHp * v.LevelMgr.getInstance().levelData.HpMultiple * Number(a[1]) / 100;
                                    n.loseBoold(i, e.skillData)
                                }
                            })
                        }
                        if (this.skillData.NotBeTargeted) for (var n = 0; n < this.zombieLine.children.length && !(Math.abs(this.node.parent.x - this.zombieLine.children[n].x) < this.node.parent.width / 2 + this.zombieLine.children[n].width / 2 && (this.trapDamage(this.zombieLine.children[n]), this.skillData.Swallow)); n++) ;
                        return;
                    case 6:
                        this.attackScope = this.node.parent.width * this.skillData.Scope + this.node.width;
                        break;
                    default:
                        this.attackScope = this.zombieLayer.width
                }
                this.plantDetection(t)
            }, e.prototype.plantDetection = function (t) {
                var e = this, a = !1, n = null, i = [];
                if (!(this.zombieLine.children.length <= 0)) {
                    if (5 == this.skillData.HarmType) a = !0; else if (1 != this.skillData.HarmType || 6 != this.skillData.AttackType || this.Status == u.UnitStatus.Attack) for (var o = 0; o < this.zombieLine.children.length && !(this.zombieLine.children[o].x < this.node.parent.x + this.attackScope + 10 && (a = !0, n = this.zombieLine.children[o], i.push(n), 5 != this.skillData.HarmType && 3 != this.skillData.HarmType)); o++) ;
                    1 == a && (this.skillData.SkillPriority && !this.otherAttackTrue && this.Status != u.UnitStatus.Overload ? (this.node.getComponent(sp.Skeleton).setAnimation(0, "attack2", !1), this.otherAttackTrue = !0) : this.node.getComponent(sp.Skeleton).setAnimation(0, "attack", !1), this.node.getComponent(sp.Skeleton).setEventListener(function (t, a) {
                        if ("attack" == a.data.name) {
                            if (e.skillData.OperateTransmit && (e.node.getChildByName("ready").active = !1, e.attackSpeed = e.skillData.LaunchInterval || 1), e.bulletStartPointArr && e.skillData.BulletModel) for (var o = 0; o < e.bulletStartPointArr.length; o++) {
                                if (5 == e.skillData.HarmType) {
                                    if (e.zombieLine.children.length <= 0) return;
                                    var r = h.Utils.randomRang(0, e.zombieLine.children.length);
                                    n = e.zombieLine.children[r]
                                }
                                e.doDamage(n, e.bulletStartPointArr[o])
                            } else 1 == e.skillData.HarmType || 2 == e.skillData.HarmType || 4 == e.skillData.HarmType ? e.doDamage(n) : 3 == e.skillData.HarmType && i.forEach(function (t) {
                                e.doDamage(t)
                            });
                            if (e.skillData.PerpetualAttack) {
                                var s = e.skillData.PerpetualAttack.split(",");
                                if (h.Utils.randomRang(0, 100) >= Number(s[0]) || e.dbhNum >= Number(s[1])) return e.dbhNum = 0, void e.node.getComponent(sp.Skeleton).setAnimation(0, "idle", !0);
                                e.dbhNum++, e.scheduleOnce(function () {
                                    e.detectionDamage()
                                }, .05)
                            }
                        }
                    })), n || (this.skillData.SkillPriority && t + 1 < this.skillData.SkillPriority.split(",").length && (this.skillData = f.DataMgr.getInstance().getSkillLevelCfgById(Number(this.skillData.SkillPriority.split(",")[t + 1])), this.detectionDamage(t + 1)), this.skillData.OperateTransmit && y.UIMgr.getInstance().openUI(c.UIID.UITips, c.UIID.UINone, lang.index60eed_214))
                }
            }, e.prototype.doDamage = function (t, e) {
                if (t && t.getComponent(d.default)) {
                    var a = t.getComponent(d.default);
                    if (a.Status == u.UnitStatus.Die || a.Status == u.UnitStatus.Prepare || 0 == t.active) {
                        if (this.zombieLine.children.length <= 0) return;
                        var n = !0, i = -1;
                        this.zombieLine.children.forEach(function (t, e) {
                            1 == t.active && (n = !1, i = -1 == i ? e : i)
                        }), 1 == n ? this.sendEvent(c.EventName.WaveEnd) : t = this.zombieLine.children[i]
                    }
                    switch (this.skillData.BulletSound && m.AudioMgr.getInstance().playEffect(c.AudioId[this.skillData.BulletSound], this.plantLayerId[1] % 2), this.skillData.AttackType) {
                        case 1:
                            break;
                        case 2:
                            this.createBullet(t, e);
                            break;
                        case 3:
                            this.impactPoint(t);
                            break;
                        case 4:
                            this.throwDamage(t, e);
                            break;
                        case 5:
                            this.scopeDamage(t);
                            break;
                        case 6:
                            this.meleeDamage(t)
                    }
                    this.doDamegeOver()
                }
            }, e.prototype.loseBoold = function (e) {
                if (this.currentShield > 0) t.prototype.loseBoold.call(this, e); else if (this.skillData.Unmatched) this.loseBooldToUnMatch(e); else if (this.currentBoold -= e, this.currentBoold <= 0) {
                    if (this.Status == u.UnitStatus.Die || this.Status == u.UnitStatus.Prepare) return;
                    this.plantDie(), r.LogMgr.getInstance().debug(lang.index60eed_215)
                }
            }, e.prototype.loseBooldToUnMatch = function (t) {
                var e = this;
                if (!this.isUnMatched) {
                    this.damagedBoold += t, this.currentBoold - this.damagedBoold < .75 * this.unitData.MaxHp && this.node.getComponent(sp.Skeleton).skeletonData.skeletonJson.skins.length > 1 && this.node.getComponent(sp.Skeleton).setSkin("skin_2"), this.currentBoold - this.damagedBoold < .5 * this.unitData.MaxHp && this.node.getComponent(sp.Skeleton).skeletonData.skeletonJson.skins.length > 1 && this.node.getComponent(sp.Skeleton).setSkin("skin_3");
                    var a = this.skillData.Unmatched.split(","), n = Number(a[0]) * this.unitData.MaxHp / 100;
                    if (this.damagedBoold >= n) if (this.damagedBoold = n, this.currentBoold -= this.damagedBoold, this.currentBoold > 0) this.isUnMatched = !0, this.damagedBoold = 0, this.scheduleOnce(function () {
                        e.isUnMatched = !1
                    }, Number(a[1])); else {
                        if (this.Status == u.UnitStatus.Die || this.Status == u.UnitStatus.Prepare) return;
                        this.plantDie()
                    }
                }
            }, e.prototype.initPlant = function () {
                this.unitData = null, this.skillData = null, this.plantLayerId = [], this.arrIdx = -1, this.raceType = -1, this.compoundPlant = !1
            }, e.prototype.plantDie = function (t) {
                var e = this;
                if (void 0 === t && (t = !1), t || !this.skillData.DeathExplosion) {
                    this.Status = u.UnitStatus.Die, m.AudioMgr.getInstance().playEffect(c.AudioId.PlantDeath, this.plantLayerId[1] % 2);
                    var a = t ? "effect_die2/effect_die2" : "effect_die/effect_die", n = t ? "boom" : "animation";
                    this.loadResFromBundle(this.loadDieBundle, a, sp.SkeletonData, function (t) {
                        e.node.getComponent(sp.Skeleton).skeletonData = t, e.node.getComponent(sp.Skeleton).setAnimation(0, n, !1)
                    })
                } else this.explode(null)
            }, e.prototype.createBullet = function (t, e) {
                var n = this;
                if (3 == this.skillData.HarmType) {
                    if (t && t.parent && t.parent.children.forEach(function (t) {
                        t.x > n.node.parent.x && t.getComponent(d.default).damageReceive(n.countCrit(n.attack), n.skillData, n.plantLayerId, n)
                    }), this.skillData.FriendlyDamage && this.node.parent.parent.children.forEach(function (t) {
                        t.children.length > 0 && t.x > n.node.parent.x && t.children[0].getComponent(a).loseBoold(n.countCrit(n.attack))
                    }), this.skillData.BulletModel) {
                        var i = s.PoolMgr.getInstance().getNode("bullet");
                        this.changeBulletSprite(i), i.x = this.node.parent.x + e[0] + p.MapMgr.getInstance().plantLayer.x, i.y = this.node.y + e[1], i.getComponent(l.default).initIsDestory(), i.active = !0, i.parent = this.bulletLine, cc.tween(i).by(.8, {x: this.node.parent.width * this.skillData.Scope}).call(function () {
                            n.changeBulletSke(i, null)
                        }).start()
                    }
                } else {
                    var o = s.PoolMgr.getInstance().getNode("bullet");
                    this.changeBulletSprite(o);
                    var r = o.getComponent(l.default);
                    r.speed = this.skillData.BulletSpeed, this.unitData && this.unitData.Level ? r.setProperty(this.skillData, this.plantLayerId, this.unitData.Level) : r.setProperty(this.skillData, this.plantLayerId), r.attack = this.countCrit(this.attack), o.x = this.node.parent.x + e[0] + p.MapMgr.getInstance().plantLayer.x, o.y = this.node.y + e[1], o.active = !0, o.parent = this.bulletLine, r.bulletStatus = l.bulletStatus.Move, r.detectionDamage()
                }
            }, e.prototype.impactPoint = function (t) {
                var e = this, a = s.PoolMgr.getInstance().getNode("bullet");
                if (a.getComponent(l.default).initIsDestory(), this.changeBulletSprite(a), lang.index60eed_216 == this.skillData.SkillName) a.x = t.x - 20, a.y = 750, a.getComponent(l.default).initIsDestory(), a.scaleY = -a.scaleY, a.active = !0, a.parent = this.bulletLine, cc.tween(a).to(.5, {y: this.zombieLine.y}).call(function () {
                    e.changeBulletSke(a, function () {
                        a.scaleY = -a.scaleY, e.zombieLine.children.forEach(function (a) {
                            Math.abs(t.x - a.x) < e.node.parent.width / 2 * e.skillData.Scope + a.width / 2 && a.getComponent(d.default).damageReceive(e.countCrit(e.attack), e.skillData, e.plantLayerId, e)
                        })
                    })
                }).start(); else {
                    var n = [40, 23];
                    a.x = t.x, a.y = n[1], a.anchorX = 1, a.width = t.x - (this.node.parent.x + n[0] + p.MapMgr.getInstance().plantLayer.x), a.height = 54, a.active = !0, a.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM, a.parent = this.bulletLine, this.changeBulletSke(a, function () {
                        1 == e.skillData.HarmType ? t.getComponent(d.default).damageReceive(e.countCrit(e.attack), e.skillData, e.plantLayerId, e) : 2 == e.skillData.HarmType && e.zombieLine.children.forEach(function (a) {
                            Math.abs(t.x - a.x) < e.node.parent.width / 2 * e.skillData.Scope + a.width / 2 && a.getComponent(d.default).damageReceive(e.countCrit(e.attack), e.skillData, e.plantLayerId, e)
                        })
                    }), this.changeBulletSprite(a)
                }
            }, e.prototype.scopeDamage = function (t) {
                var e = this;
                if (999 != this.skillData.TargetNum) {
                    var a = s.PoolMgr.getInstance().getNode("bullet");
                    a.x = t.x, a.y = h.Utils.randomRang(-20, 21), a.getComponent(l.default).initIsDestory(), a.active = !0, a.parent = this.bulletLine, this.changeBulletSke(a, function () {
                        e.zombieLine.children.forEach(function (a) {
                            Math.abs(t.x - a.x) < p.MapMgr.getInstance().plantLayer.children[0].children[0].width / 2 * e.skillData.Scope + a.width / 2 && a.getComponent(d.default).damageReceive(e.countCrit(e.attack), e.skillData, e.plantLayerId, e)
                        })
                    })
                } else this.zombieLayer.children.forEach(function (a) {
                    a.children.forEach(function (a) {
                        a.getComponent(d.default).damageReceive(e.countCrit(e.attack), e.skillData, e.plantLayerId, e), a.getChildByName("bullet").active = !0, a.getChildByName("bullet").children[0].getComponent(sp.Skeleton).setAnimation(0, "ani1", !1), cc.tween(a.getChildByName("bullet")).sequence(cc.tween().to(.1, {scaleY: -1 * t.scaleY}), cc.tween().to(.1, {scaleY: t.scaleY})).repeatForever().start(), a.getChildByName("bullet").children[0].getComponent(sp.Skeleton).setCompleteListener(function () {
                            a.getChildByName("bullet").active = !1
                        })
                    })
                })
            }, e.prototype.throwDamage = function (t, e) {
                this.moreBulletInt = .1;
                var a = s.PoolMgr.getInstance().getNode("bullet");
                this.changeBulletSprite(a);
                var n = a.getComponent(l.default);
                n.speed = this.skillData.BulletSpeed, this.unitData && this.unitData.Level ? n.setProperty(this.skillData, this.plantLayerId, this.unitData.Level) : n.setProperty(this.skillData, this.plantLayerId), n.attack = this.countCrit(this.attack), a.x = this.node.parent.x + e[0] + p.MapMgr.getInstance().plantLayer.x, a.y = this.node.y + e[1], a.active = !0, a.parent = this.bulletLine, n.doThrow(t, this.unitType)
            }, e.prototype.meleeDamage = function (t) {
                var e = t.getComponent(d.default), a = e.getProperty();
                if (this.skillData.Swallow) {
                    var n = this.skillData.Swallow.split(",");
                    1 == Number(n[a.HabitusType]) && (t.getComponent(sp.Skeleton).skeletonData = null, e.zombieDie(), this.Status = u.UnitStatus.Overload, this.overloadTime = Number(n[5]));
                    var i = this.attack * Number(n[4]) / 100;
                    e.damageReceive(i, this.skillData, this.plantLayerId, this)
                } else this.skillData.KillTrigger ? e.damageReceive(this.countCrit(this.attack), this.skillData, this.plantLayerId, this) : e.damageReceive(this.countCrit(this.attack), this.skillData, this.plantLayerId)
            }, e.prototype.trapDamage = function (t) {
                var e, a = t.getComponent(d.default), n = a.getProperty(), i = a.getSkill();
                if (i.RaceDerate) {
                    var o = i.RaceDerate.split(",");
                    if (3 == Number(o[0]) && 100 == Number(o[1])) return
                }
                if (this.skillData.Swallow) {
                    var r = this.skillData.Swallow.split(",");
                    if (1 == Number(r[n.HabitusType])) return a.zombieDie(), this.Status = u.UnitStatus.Overload, void (this.overloadTime = Number(r[5]));
                    e = this.attack * Number(r[4]) / 100
                } else if (e = this.attack * Number(this.skillData.RoadHarm) / 100, this.skillData.HabitusAddAttack) {
                    var s = this.skillData.HabitusAddAttack.split(",");
                    e *= 1 + Number(s[n.HabitusType - 1]) / 100
                }
                a.damageReceive(this.countCrit(e), this.skillData, this.plantLayerId)
            }, e.prototype.changeBulletSprite = function (t) {
                t.active = !0, t.scale = this.skillData.BulletZoom, this.skillData.BulletModel && g.ResourceMgr.getInstance().loadSpriteframe("bullet", "" + this.skillData.BulletModel, function (e) {
                    t.getComponent(cc.Sprite).spriteFrame = e
                })
            }, e.prototype.changeBulletSke = function (t, e) {
                var a = this;
                t.getComponent(cc.Sprite).spriteFrame = null;
                var n = t.getChildByName("ske").getComponent(sp.Skeleton);
                t.active = !0, this.loadResFromBundle("bullet", this.skillData.BulletEffect + "/" + this.skillData.BulletEffect, sp.SkeletonData, function (i) {
                    n.skeletonData = i, n.premultipliedAlpha = !1, n.node.active = !0, n.setAnimation(0, a.skillData.EffectName, !1), 3 == a.skillData.AttackType && cc.tween(t).sequence(cc.tween().to(.1, {scaleY: -1 * t.scaleY}), cc.tween().to(.1, {scaleY: t.scaleY})).repeatForever().start(), n.setCompleteListener(function () {
                        t.active = !1, cc.Tween.stopAllByTarget(t), t.getComponent(cc.Sprite).spriteFrame = null, t.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED, s.PoolMgr.getInstance().freeNode("bullet", t)
                    }), e && e()
                })
            }, e.prototype.explode = function (t, e) {
                var a = this;
                if (void 0 === e && (e = !1), !(this.UnDamage > 0 || this.skillData.Unmatched && this.currentBoold > 0 || e)) {
                    var n = this.skillData.DeathExplosion.split(","),
                        i = this.skillData.SubsistAddAttack ? this.attack * (Number(n[1]) + this.subAddAttack.add * this.subAddAttack.plies) / 100 : this.attack * Number(n[1]) / 100;
                    switch (Number(n[0])) {
                        case 1:
                            t && t.loseBoold(i, this.skillData, !1);
                            break;
                        case 2:
                            this.zombieLine.children.forEach(function (t) {
                                Math.abs(a.node.parent.x - t.x) < a.node.parent.width / 2 * 1.5 + t.width && t.getComponent(d.default).loseBoold(i, a.skillData, !1)
                            });
                            break;
                        case 3:
                            this.zombieLine.children.forEach(function (t) {
                                Math.abs(a.node.parent.x - t.x) < 1.5 * a.node.parent.width + t.width && t.getComponent(d.default).loseBoold(i, a.skillData, !1)
                            })
                    }
                    this.plantDie(!0)
                }
            }, e.prototype.killSuccess = function () {
                var t = f.DataMgr.getInstance().getSkillLevelCfgById(Number(this.skillData.KillTrigger.split(",")[0]));
                this.newSkillNum = Number(this.skillData.KillTrigger.split(",")[1]), this.baseSkillData = null != this.baseSkillData && this.baseSkillData != this.skillData ? this.baseSkillData : this.skillData, this.skillData = t, cc.log(lang.index60eed_217)
            }, e.prototype.doDamegeOver = function () {
                var t = this;
                this.baseSkillData && (this.newSkillNum -= 1, this.newSkillNum <= 0 && this.scheduleOnce(function () {
                    t.skillData = t.baseSkillData, t.baseSkillData = null
                }, 1))
            }, e.prototype.accumAddAttack = function (t, e) {
                t && this.Status != u.UnitStatus.Die && (t.time -= e, t.time <= 0 && (t.time = 1, t.plies = t.plies >= t.max ? t.max : t.plies + 1))
            }, e.prototype.update = function (e) {
                this.Status != u.UnitStatus.Prepare && (t.prototype.update.call(this, e), this.accumAddAttack(this.subAddAttack, e), this.accumAddAttack(this.stoAddAttack, e), this.Status == u.UnitStatus.Stop && (this.moreBulletInt -= e, this.moreBulletInt <= 0 && (this.bulletNum = this.bulletNum + 1, this.skillData.SkillPriority ? (this.skillData = f.DataMgr.getInstance().getSkillLevelCfgById(Number(this.skillData.SkillPriority.split(",")[0])), this.detectionDamage(0)) : this.detectionDamage())), this.Status == u.UnitStatus.Overload && (this.overloadTime -= e, this.overloadTime <= 0 && (this.Status = u.UnitStatus.Attack)))
            }, a = o([_], e)
        }(u.default);
        a.default = C, cc._RF.pop()
    }, {
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/manager/PoolMgr": "PoolMgr",
        "../../framework/manager/ResourceMgr": "ResourceMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../manager/DataMgr": "DataMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/MapMgr": "MapMgr",
        "./Bullets": "Bullets",
        "./CombatUnitCtrl": "CombatUnitCtrl",
        "./Zombie": "Zombie"
    }],
    Platform4399Manager: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "b1c6e3mmnlJtZRsw6E8k+G2", "Platform4399Manager"), Object.defineProperty(a, "__esModule", {value: !0}), a.Platform4399Manager = void 0;
        var n = function () {
            function t() {
            }

            return t.prototype.checkShortcut = function () {
            }, t.prototype.addShortcut = function () {
            }, t.prototype.setCharts = function () {
            }, t.prototype.getCharts = function () {
            }, t.prototype.getLaunchOptionsSync = function () {
            }, t.prototype.canShare = function () {
                return !1
            }, t.prototype.pauseRecord = function () {
            }, t.prototype.resumeRecord = function () {
            }, t.prototype.hasVerify = function () {
                return !1
            }, t.prototype.verifyKey = function () {
            }, t.prototype.getCode = function () {
                return ""
            }, t.prototype.toAppStore = function () {
            }, t.prototype.openNotify = function () {
            }, t.prototype.shareImg = function () {
            }, t.prototype.getUserInfo = function () {
            }, t.prototype.hdieBlockAd = function () {
            }, t.prototype.androidAdCallBack = function () {
            }, t.prototype.initNativeAd = function () {
            }, t.prototype.showNativeAd = function () {
            }, t.prototype.getTouchModeVersion = function () {
            }, t.prototype.hasShare = function () {
                return !1
            }, t.prototype.showGamePortalAd = function () {
            }, t.prototype.showBlockAd = function () {
            }, t.prototype.hideBlockAd = function () {
            }, t.prototype.versionName = function () {
                return "1.1.221"
            }, t.prototype.initSdk = function (t, e) {
                e && e()
            }, t.prototype.login = function (t, e) {
                e && e()
            }, t.prototype.pay = function (t, e) {
                e && e()
            }, t.prototype.share = function (t, e) {
                e && e()
            }, t.prototype.showBanner = function (t, e) {
                e && e()
            }, t.prototype.hideBanner = function (t, e) {
                e && e()
            }, t.prototype.showInsertAd = function (t, e) {
                e && e()
            }, t.prototype.showVideoAd = function (t, e, a) {
                "h5api" in window ? h5api.playAd(function (t) {
                    1e4 === t.code || (10001 === t.code ? e && e() : a && a())
                }) : (console.log(lang.index60eed_218), a && a())
            }, t.prototype.otherFun = function (t, e) {
                e && e()
            }, t.prototype.shark = function (t, e) {
                e && e()
            }, t.prototype.recordVideo = function (t, e) {
                e && e()
            }, t.prototype.shareVideo = function (t, e) {
                e && e()
            }, t.prototype.stopRecorderManager = function (t, e) {
                e && e()
            }, t.prototype.setLanguage = function (t, e) {
                return e && e(), "zh"
            }, t.prototype.youmengTrack = function () {
            }, t
        }();
        a.Platform4399Manager = n, cc._RF.pop()
    }, {}],
    PlatformManager: [function (t, e, a) {
        "use strict";
        var n, i, o, r, s, c, l, u, p;
        cc._RF.push(e, "12479gU5UZCYZQwVmRaTNyH", "PlatformManager"), Object.defineProperty(a, "__esModule", {value: !0}), a.PlatformManager = a.APPMgr = a.WechatAppInfo = a.PlatformInfo = a.AdConfig = a.UM_VERSION = a.SWCF = a.SwitchID = void 0;
        var d, h = t("../../game/config/Config"), g = t("../base/BasePlatform"),
            f = (t("./UIMgr"), t("../platform/EditorManager")), m = t("../platform/Platform4399Manager");
        (function (t) {
            t[t.ShenHe = 0] = "ShenHe", t[t.ShenHe2 = 1] = "ShenHe2"
        })(d = a.SwitchID || (a.SwitchID = {})), a.SWCF = ((n = {})[d.ShenHe] = {
            appId: 1171,
            h5_wechat: 4,
            h5_bytedance: 24
        }, n[d.ShenHe2] = {
            appId: 1238,
            h5_wechat: 1,
            h5_bytedance: 10
        }, n), a.UM_VERSION = ((i = {}).versionName = {
            h5_wechat: "1.0.0",
            h5_bytedance: "1.1.0",
            h5_oppo: "1.0.0",
            h5_vivo: "1.0.0",
            h5_qq: "1.0.0",
            h5_kuaikan: "1.0.0",
            android_google: "1.0.0",
            android_vivo: "1.0.0",
            android_233: "1.0.0",
            android_4399: "1.0.0",
            android_xiaomi: "1.0.0",
            h5_baidu: "1.0.0",
            ios: "1.0.0"
        }, i), a.AdConfig = ((o = {})[g.Platform.BYTEDANCE] = ((r = {})[g.AppName.Slay] = {
            APPName: lang.index60eed_219,
            videoId: "2ho0l0nenb12ttbup0",
            insertId: "2ho0l0nenb12ttbup0",
            bannerId: "2ho0l0nenb12ttbup0",
            splashId: "2ho0l0nenb12ttbup0",
            ServerID: 11
        }, r[g.AppName.Invincible] = {
            APPName: lang.index60eed_220,
            videoId: "11112eebl9dhf4f82i",
            insertId: "2ho0l0nenb12ttbup0",
            bannerId: "2ho0l0nenb12ttbup0",
            splashId: "2ho0l0nenb12ttbup0",
            ServerID: 42
        }, r), o[g.Platform.WECHAT] = ((s = {})[g.AppName.Slay] = {
            APPName: lang.index60eed_221,
            videoId: "adunit-18507946570909a1",
            insertId: "adunit-18507946570909a1",
            bannerId: "adunit-18507946570909a1",
            splashId: "adunit-18507946570909a1",
            ServerID: 11
        }, s[g.AppName.Invincible] = {
            APPName: lang.index60eed_222,
            videoId: "",
            insertId: "adunit-18507946570909a1",
            bannerId: "adunit-18507946570909a1",
            splashId: "adunit-18507946570909a1",
            ServerID: 42
        }, s), o[g.Platform.WEB_LINK] = ((c = {})[g.AppName.Slay] = {
            videoId: "",
            ServerID: 3
        }, c[g.AppName.Invincible] = {
            videoId: "",
            ServerID: 3
        }, c), o[g.Platform.EDITOR] = ((l = {})[g.AppName.Slay] = {
            videoId: "",
            ServerID: 3
        }, l[g.AppName.Invincible] = {
            videoId: "",
            ServerID: 3
        }, l), o[g.Platform.VIVO] = ((u = {})[g.AppName.Slay] = {
            videoId: "",
            ServerID: 3
        }, u), o[g.Platform.OPPO] = ((p = {})[g.AppName.Slay] = {videoId: "", ServerID: 3}, p), o);
        var y = function () {
            function t() {
            }

            return t.APP_ID = 1291, t
        }();
        a.PlatformInfo = y, function (t) {
            t[t.APP_ID = 11] = "APP_ID"
        }(a.WechatAppInfo || (a.WechatAppInfo = {}));
        var v = function () {
            function t() {
            }

            return t.currentApp = g.AppName.Slay, t
        }();
        a.APPMgr = v;
        var I = function () {
            function t() {
            }

            return t.getInstance = function () {
                return null == this._instance && (this._instance = new t), this._instance
            }, t.prototype.init = function () {
                t.currentPlatform == g.Platform.ANDROID_4399 ? this.currentPaltform = new m.Platform4399Manager : this.currentPaltform = new f.EditorManager, this.initSdk()
            }, t.prototype.initSdk = function () {
                this.currentPaltform || (this.currentPaltform = new f.EditorManager), this.currentPaltform.initSdk()
            }, t.prototype.showBanner = function (t, e) {
                this.currentPaltform.showBanner(t, e)
            }, t.prototype.shark = function (t, e) {
                this.currentPaltform.shark(t, e)
            }, t.prototype.hideBanner = function (t, e) {
                this.currentPaltform.hideBanner(t, e)
            }, t.prototype.showInsertAd = function (t, e) {
                this.currentPaltform.showInsertAd(t, e)
            }, t.prototype.getLaunchOptionsSync = function (t) {
                this.currentPaltform.getLaunchOptionsSync ? this.currentPaltform.getLaunchOptionsSync(t) : t && t()
            }, t.prototype.getUserInfo = function (t) {
                this.currentPaltform.getUserInfo ? this.currentPaltform.getUserInfo(t) : t && t(null, null)
            }, t.prototype.showVideoAd = function (t, e, a, n) {
                this.currentPaltform.showVideoAd(t, a, n, e)
            }, t.prototype.otherFun = function (t, e) {
                this.currentPaltform.otherFun(t, e)
            }, t.prototype.recordVideo = function (t, e) {
                this.currentPaltform.recordVideo(t, e)
            }, t.prototype.stopRecorderManager = function (t, e, a) {
                this.currentPaltform.stopRecorderManager(t, e, a)
            }, t.prototype.youmengTrack = function (t, e, a, n) {
                this.currentPaltform.youmengTrack(t, e, a, n)
            }, t.prototype.hasVerify = function () {
                return this.currentPaltform.hasVerify()
            }, t.prototype.getNativeCode = function (t) {
                this.currentPaltform.getCode && this.currentPaltform.getCode(t)
            }, t.prototype.canShare = function () {
                return !!this.currentPaltform.canShare && this.currentPaltform.canShare()
            }, t.prototype.pauseRecord = function () {
                this.currentPaltform.pauseRecord && this.currentPaltform.pauseRecord()
            }, t.prototype.resumeRecord = function () {
                this.currentPaltform.resumeRecord && this.currentPaltform.resumeRecord()
            }, t.prototype.shareVideo = function (t, e) {
                this.currentPaltform.shareVideo && this.currentPaltform.shareVideo(t, e)
            }, t.prototype.toAppStore = function (t) {
                this.currentPaltform.toAppStore && this.currentPaltform.toAppStore(t)
            }, t.prototype.openNotify = function () {
                this.currentPaltform.openNotify && this.currentPaltform.openNotify()
            }, t.prototype.shareImg = function (t, e) {
                this.currentPaltform.shareImg && this.currentPaltform.shareImg(t, e)
            }, t.prototype.checkShortcut = function (t, e) {
                this.currentPaltform.checkShortcut && this.currentPaltform.checkShortcut(t, e)
            }, t.prototype.addShortcut = function (t, e) {
                this.currentPaltform.addShortcut && this.currentPaltform.addShortcut(t, e)
            }, t.prototype.setStorage = function (t, e, a) {
                this.currentPaltform.setStorage && this.currentPaltform.setStorage(t, e, a)
            }, t.prototype.getStorage = function (t) {
                return this.currentPaltform.getStorage ? this.currentPaltform.getStorage(t) : null
            }, t.prototype.getSystemInfo = function () {
                return this.currentPaltform.getSystemInfo ? this.currentPaltform.getSystemInfo() : new h.SystemInfo
            }, t.currentPlatform = g.Platform.ANDROID_4399, t
        }();
        a.PlatformManager = I, cc._RF.pop()
    }, {
        "../../game/config/Config": "Config",
        "../base/BasePlatform": "BasePlatform",
        "../platform/EditorManager": "EditorManager",
        "../platform/Platform4399Manager": "Platform4399Manager",
        "./UIMgr": "UIMgr"
    }],
    PlayerMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "a031fojBN1NlYGcg1sGyLFU", "PlayerMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.PlayerMgr = a.ABTestType = void 0;
        var n = t("../../commonModel/CommonModel"), i = t("../../commonModel/manager/ComDataMgr"),
            o = t("../../framework/base/BasePlatform"), r = t("../../framework/configs/Appcfg"),
            s = t("../../framework/manager/EventMgr"), c = t("../../framework/manager/LogMgr"),
            l = t("../../framework/manager/PlatformManager"), u = t("../config/Config"), p = t("../datas/ResNumData"),
            d = t("../datas/GuideData"), h = t("../datas/ShareData"), g = t("../datas/TrackData"),
            f = t("../datas/UserData"), m = t("../datas/WechatData"), y = t("./DataMgr"), v = t("../datas/LockData"),
            I = t("../global/Global"), _ = t("../datas/SignData"), b = t("../datas/LotteryData"),
            C = t("../datas/AgainData"), D = t("../datas/NewInbornData"), M = t("../datas/CustomData"),
            k = t("../datas/StemData"), N = t("../datas/HeartData"), w = t("../datas/EquipData"),
            S = t("../datas/PlantLevelData");
        (function (t) {
            t[t.NO_AB = 0] = "NO_AB", t[t.AB_Test = 1] = "AB_Test", t[t.ABD_Test = 2] = "ABD_Test", t[t.A_fixed = 3] = "A_fixed", t[t.B_fixed = 4] = "B_fixed", t[t.D_fixed = 5] = "D_fixed"
        })(a.ABTestType || (a.ABTestType = {}));
        var P = function () {
            function t() {
                this.isLoaded = !1, this.isLock = !1, this.isSidebar = !1
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t, this.instance.initData()), this.instance
            }, t.prototype.initData = function () {
                n.CommonModel.Instance().setGameBrige(this)
            }, t.prototype.preload = function () {
                var t = this;
                this.isLoaded || (this.isLoaded = !0, this.guideData = new d.GuideData, this.guideData.getData(function () {
                    I.Global.getLocalData = t.guideData.isGetLocal, t.trackData = new g.TrackData, t.trackData.getData(), t.resNumData = new p.ResNumData, t.resNumData.getData(), t.shareData = new h.ShareData, t.shareData.getData(), t.signData = new _.SignData, t.signData.getData(), t.newInbornData = new D.NewInbornData, t.newInbornData.getData(), t.againData = new C.default, t.againData.getData(), t.lotteryData = new b.default, t.lotteryData.getData(), t.customData = new M.default, t.customData.getData(), t.equipData = new w.default, t.equipData.getData(), t.stemData = new k.StemData, t.stemData.getData(), t.plantLevelData = new S.default, t.plantLevelData.getData(), t.heartData = new N.default, t.heartData.getData()
                }), this.trackData.getSdkAbName(u.GameConfig.abTestType, function (e) {
                    if (c.LogMgr.getInstance().debug(lang.index60eed_223 + e, ""), l.PlatformManager.currentPlatform == o.Platform.WECHAT) switch (e) {
                        case"A":
                            I.Global.needUnLock = !0, I.Global.addDesktop = !1, I.Global.kingLottery = !0, I.Global.showSign = !0, I.Global.showSummer = !0, I.Global.newPlantInborn = !0;
                            break;
                        case"B":
                            I.Global.needUnLock = !0, I.Global.addDesktop = !1, I.Global.kingLottery = !0, I.Global.showSign = !0, I.Global.showSummer = !0, I.Global.newPlantInborn = !0, I.Global.hasEquip = !0;
                            break;
                        case"D":
                            I.Global.needUnLock = !0, I.Global.addDesktop = !1, I.Global.kingLottery = !0, I.Global.showSign = !0, I.Global.showSummer = !0, I.Global.newPlantInborn = !0, I.Global.hasEquip = !0
                    } else if (l.PlatformManager.currentPlatform == o.Platform.BYTEDANCE || l.PlatformManager.currentPlatform == o.Platform.EDITOR || l.PlatformManager.currentPlatform == o.Platform.WEB_LINK || l.PlatformManager.currentPlatform == o.Platform.ANDROID_233 || l.PlatformManager.currentPlatform == o.Platform.KuaiShou || l.PlatformManager.currentPlatform == o.Platform.VIVO || l.PlatformManager.currentPlatform == o.Platform.OPPO || l.PlatformManager.currentPlatform == o.Platform.ANDROID_4399) switch (console.log(lang.index60eed_224), console.log(lang.index60eed_225), e) {
                        case"A":
                            I.Global.needUnLock = !0, I.Global.addDesktop = !0, I.Global.kingLottery = !0, I.Global.showSign = !0, I.Global.showSummer = !0, I.Global.newPlantInborn = !0;
                            break;
                        case"B":
                            I.Global.needUnLock = !0, I.Global.addDesktop = !0, I.Global.kingLottery = !0, I.Global.showSign = !0, I.Global.showSummer = !0, I.Global.newPlantInborn = !0, I.Global.hasEquip = !0;
                            break;
                        case"D":
                            I.Global.needUnLock = !0, I.Global.addDesktop = !0, I.Global.kingLottery = !0, I.Global.showSign = !0, I.Global.showSummer = !0, I.Global.newPlantInborn = !0, I.Global.hasEquip = !0
                    }
                    t.udata = new f.UserData, t.udata.getData(), t.lotteryData.setOlddata(t.udata.getDdd()), t.customData.setOlddata(t.udata.getCustomDdd()), t.plantLevelData.setOlddata(t.udata.getplantDdd()), console.log(lang.index60eed_226 + e), y.DataMgr.getInstance().reloadConfig(e, function () {
                        s.EventMgr.getInstance().emit(r.BaseEventName.Loading, r.LoadingProcess.PlayerCfg), t.lockData = new v.default, t.lockData.getData()
                    })
                }))
            }, t.prototype.getServerData = function () {
                return this.data
            }, t.prototype.setServerData = function (t) {
                this.data = t
            }, t.prototype.getAbType = function () {
                return this.trackData.getAbType()
            }, t.prototype.getDynamicAbType = function () {
                return this.trackData.getDynamicAbType()
            }, t.prototype.getGuideData = function () {
                return this.guideData
            }, t.prototype.getUserData = function () {
                return this.udata
            }, t.prototype.getResNumData = function () {
                return this.resNumData
            }, t.prototype.getShareData = function () {
                return this.shareData
            }, t.prototype.getSignData = function () {
                return this.signData
            }, t.prototype.getLotteryData = function () {
                return this.lotteryData
            }, t.prototype.getCustomData = function () {
                return this.customData
            }, t.prototype.getEquipData = function () {
                return this.equipData
            }, t.prototype.getNewInbornData = function () {
                return this.newInbornData
            }, t.prototype.getAgainData = function () {
                return this.againData
            }, t.prototype.getLockData = function () {
                return this.lockData
            }, t.prototype.getplantLevelData = function () {
                return this.plantLevelData
            }, t.prototype.getStemData = function () {
                return this.stemData
            }, t.prototype.getHeartData = function () {
                return this.heartData
            }, t.prototype.getWechatData = function () {
                return this.wechatData || (this.wechatData = new m.WechatData, this.wechatData.getData()), this.wechatData
            }, t.prototype.getTrackData = function () {
                return this.trackData
            }, t.prototype.addRewards = function (t, e) {
                void 0 === e && (e = 1);
                for (var a = t.split(u.GameConfig.splitCount), i = 0; i < a.length; i++) if (!(a[i].length <= 0)) {
                    var o = a[i].split(u.GameConfig.splitNum), r = Number(o[0]), s = Number(o[1]) * e;
                    n.CommonModel.Instance().addReward(r, s, !0)
                }
            }, t.prototype.addComReward = function (t, e, a) {
                void 0 === e && (e = 1);
                for (var n = t.split(u.GameConfig.splitCount), o = 0; o < n.length; o++) if (!(n[o].length <= 0)) {
                    var r = n[o].split(u.GameConfig.splitNum), s = Number(r[0]), c = Number(r[1]) * e,
                        l = i.ComDataMgr.getInstance().getGoodsById(Number(s));
                    switch (Number(l.id)) {
                        case 1:
                            this.udata.addGoldNum(c, a)
                    }
                }
            }, t.prototype.subGoodsNum = function (e, a) {
                var n = t.getInstance().getUserData();
                if (1 == e) return n.subGoldNum(a)
            }, t
        }();
        a.PlayerMgr = P, cc._RF.pop()
    }, {
        "../../commonModel/CommonModel": "CommonModel",
        "../../commonModel/manager/ComDataMgr": "ComDataMgr",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/EventMgr": "EventMgr",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../config/Config": "Config",
        "../datas/AgainData": "AgainData",
        "../datas/CustomData": "CustomData",
        "../datas/EquipData": "EquipData",
        "../datas/GuideData": "GuideData",
        "../datas/HeartData": "HeartData",
        "../datas/LockData": "LockData",
        "../datas/LotteryData": "LotteryData",
        "../datas/NewInbornData": "NewInbornData",
        "../datas/PlantLevelData": "PlantLevelData",
        "../datas/ResNumData": "ResNumData",
        "../datas/ShareData": "ShareData",
        "../datas/SignData": "SignData",
        "../datas/StemData": "StemData",
        "../datas/TrackData": "TrackData",
        "../datas/UserData": "UserData",
        "../datas/WechatData": "WechatData",
        "../global/Global": "Global",
        "./DataMgr": "DataMgr"
    }],
    PoolMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "20ec7h/8G9PQZ8e/5M6Hnno", "PoolMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.PoolMgr = a.PoolNode = void 0;
        var n = function () {
            function t() {
                this._isReady = !1, this._createCount = 0, this._warterMark = 50, this._node = null, this._nodes = new cc.NodePool
            }

            return t.prototype.init = function (t, e) {
                this._node = t, this._isReady = !0;
                for (var a = 0; a < e; a++) {
                    var n = cc.instantiate(t);
                    this._createCount++, this._nodes.put(n)
                }
            }, t.prototype.getNode = function () {
                return this._nodes.size() > 0 ? this._nodes.get() : (this._createCount++, cc.instantiate(this._node))
            }, t.prototype.freeNode = function (t) {
                t && cc.isValid(t) ? this._warterMark < this._nodes.size() ? (this._createCount--, t.destroy()) : this._nodes.put(t) : this._createCount--
            }, t.prototype.setWaterMark = function (t) {
                this._warterMark = t
            }, t.prototype.destory = function () {
                this._createCount -= this._nodes.size();
                for (var t = 0; t < this._nodes.size(); t++) {
                    var e = this._nodes.get(t);
                    e && e.destroy()
                }
                this._nodes.clear()
            }, t
        }();
        a.PoolNode = n;
        var i = function () {
            function t() {
                this.poolMap = new Map
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.creatrePool = function (t, e, a) {
                if (void 0 === a && (a = 1), this.poolMap.has(t)) {
                    var i = this.poolMap.get(t);
                    i.destory(), i = null
                }
                var o = new n;
                e && o.init(e, a), this.poolMap.set(t, o)
            }, t.prototype.getNode = function (t) {
                return this.poolMap.has(t) ? this.poolMap.get(t).getNode() : null
            }, t.prototype.freeNode = function (t, e) {
                this.poolMap.has(t) ? this.poolMap.get(t).freeNode(e) : e.destroy()
            }, t.prototype.clearPool = function (t) {
                this.poolMap.has(t) && (this.poolMap.get(t).destory(), this.poolMap.delete(t))
            }, t.instance = null, t
        }();
        a.PoolMgr = i, cc._RF.pop()
    }, {}],
    PopUserPrivacy: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "e8b86lhXnlCuaYWFUDHfpYT", "PopUserPrivacy");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.PopUserPrivacy = void 0;
        var r = t("../../framework/base/BasePlatform"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/manager/PlatformManager"), l = cc._decorator, u = l.ccclass, p = l.property,
            d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnClick = null, e.btnClick2 = null, e.btnAgree = null, e.btnDisagree = null, e.btnBack = null, e.userPrivacyNode = null, e.itemLabel = null, e.titleLabel = null, e.textArr = [], e.ind = 0, e.isCloseUI = !1, e
                }

                return i(e, t), e.prototype.setTitle = function () {
                    c.PlatformManager.currentPlatform == r.Platform.KuaiShou ? this.titleLabel.string = lang.index60eed_227 : this.titleLabel.string = lang.index60eed_228
                }, e.prototype.setTitle2 = function () {
                    c.PlatformManager.currentPlatform == r.Platform.KuaiShou ? this.titleLabel.string = lang.index60eed_229 : this.titleLabel.string = lang.index60eed_230
                }, e.prototype.onLoad = function () {
                    var t = this;
                    this.btnClick.on(cc.Node.EventType.TOUCH_END, function () {
                        t.gameData && (t.setTitle(), t.textArr = t.gameData.PrivacyCfg, t.userPrivacyNode.active = !0, t.schedule(t.updateText2, .01))
                    }, this), this.btnClick2.on(cc.Node.EventType.TOUCH_END, function () {
                        t.gameData && (t.setTitle2(), t.textArr = t.gameData.PrivacyCfg2, t.userPrivacyNode.active = !0, t.schedule(t.updateText2, .01))
                    }, this), this.btnAgree.on(cc.Node.EventType.TOUCH_END, function () {
                        cc.sys.localStorage.getItem("isReadsfplay.netricy") || (cc.director.loadScene("Main"), cc.sys.localStorage.setItem("isReadsfplay.netricy", "true")), t.closeUI()
                    }, this), this.btnDisagree.on(cc.Node.EventType.TOUCH_END, function () {
                        cc.game.end(), c.PlatformManager.getInstance().exit()
                    }, this), this.btnBack.on(cc.Node.EventType.TOUCH_END, function () {
                        t.userPrivacyNode.active = !1
                    }, this), cc.assetManager.loadBundle("configPrivacy", function (e, a) {
                        e || a.load("GameJsonCfg", cc.JsonAsset, function (e, a) {
                            e ? console.error(lang.index60eed_231, JSON.stringify(e)) : t.gameData = a.json, cc.assetManager.releaseAsset(a)
                        })
                    })
                }, e.prototype.setText = function (t) {
                    var e = cc.instantiate(this.itemLabel);
                    e.active = !0, this.itemLabel.parent.addChild(e), e.getComponent(cc.Label).string = t
                }, e.prototype.onClose = function () {
                    this.isCloseUI = !0
                }, e.prototype.updateText2 = function () {
                    if (this.isCloseUI) this.unschedule(this.updateText2); else {
                        var t = this.textArr[this.ind];
                        if (t) {
                            for (var e = Math.floor(t.content.length / 23), a = 23, n = 0, i = 0; i < e; i++) {
                                var o = t.content.substring(n, a);
                                n += 23, a += 23, this.setText(o)
                            }
                            t.content.length % 23 != 0 && this.setText(t.content.substring(t.content.length - t.content.length % 23, t.content.length)), this.ind++, this.ind >= this.textArr.length && this.unschedule(this.updateText2)
                        }
                    }
                }, o([p(cc.Node)], e.prototype, "btnClick", void 0), o([p(cc.Node)], e.prototype, "btnClick2", void 0), o([p(cc.Node)], e.prototype, "btnAgree", void 0), o([p(cc.Node)], e.prototype, "btnDisagree", void 0), o([p(cc.Node)], e.prototype, "btnBack", void 0), o([p(cc.Node)], e.prototype, "userPrivacyNode", void 0), o([p(cc.Node)], e.prototype, "itemLabel", void 0), o([p(cc.Label)], e.prototype, "titleLabel", void 0), o([u], e)
            }(s.default);
        a.PopUserPrivacy = d, cc._RF.pop()
    }, {
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/PlatformManager": "PlatformManager"
    }],
    Prop_control: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "ecdb47KN95GSIdvUkHCKa7B", "Prop_control");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = r.property, l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btn = [], e.time_lb = [], e.time = [], e
            }

            return i(e, t), e.prototype.update = function () {
                this.time_lb[0].string = this.time[0].toString(), this.time_lb[1].string = this.time[1].toString(), this.time[0] <= 0 ? this.btn[0].interactable = !1 : this.btn[0].interactable = !0, this.time[1] <= 0 ? this.btn[1].interactable = !1 : this.btn[1].interactable = !0
            }, e.prototype.onbtn0 = function () {
                this.time[0] -= 1
            }, e.prototype.onbtn1 = function () {
                this.time[1] -= 1
            }, o([c({
                type: cc.Button,
                displayName: lang.index60eed_232,
                tooltip: lang.index60eed_233
            })], e.prototype, "btn", void 0), o([c({
                type: cc.Label,
                displayName: lang.index60eed_234,
                tooltip: lang.index60eed_235
            })], e.prototype, "time_lb", void 0), o([c({
                type: cc.Float,
                displayName: lang.index60eed_236,
                tooltip: lang.index60eed_237
            })], e.prototype, "time", void 0), o([s], e)
        }(cc.Component);
        a.default = l, cc._RF.pop()
    }, {}],
    PutOnData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "99ca2IJQrdHMrh0KHaCNdcs", "PutOnData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.plantPutOnData = a.Data = void 0;
        var r = t("../../framework/base/BaseData"), s = t("../../framework/manager/EventMgr"),
            c = t("../../framework/manager/LogMgr"), l = t("../../framework/utils/UIUtils"),
            u = t("../../game/config/Config"), p = t("../manager/DataMgr"), d = t("../manager/PlayerMgr"),
            h = t("../ui/UIEquip"), g = t("./TrackDataEvent"), f = cc._decorator, m = f.ccclass,
            y = (f.property, function () {
                this.PutOnData = [], this.equipCellNum = 20, this.putOnArr = [], this.curGainIndex = 0, this.equipNum = 0, this.equipProp = new h.equipProperty, this.bestQuality = 0
            });
        a.Data = y;
        var v = function () {
            this.gainIndex = 0, this.puton = !1, this.isLock = !1
        };
        a.plantPutOnData = v;
        var I = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gameKey = u.GameConfig.AppCacheName + "PutOnData", e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new y, this.data
            }, e.prototype.initData = function () {
                var t = this;
                this.data.PutOnData || (this.data.PutOnData = []), this.data.putOnArr || (this.data.putOnArr = []), this.data.curGainIndex || (this.data.curGainIndex = 0), this.data.equipNum || (this.data.equipNum = 0, this.data.putOnArr.forEach(function (e) {
                    e && t.data.equipNum++
                })), this.data.equipProp || (this.data.equipProp = new h.equipProperty), this.data.bestQuality || (this.data.bestQuality = 0), this.saveData()
            }, e.prototype.refreshEquip = function () {
                this.data.PutOnData.sort(function (t, e) {
                    return e.equipId - t.equipId
                }), this.data.PutOnData.sort(function (t, e) {
                    return p.DataMgr.getInstance().getEquipCfgById(t.equipId).Type - p.DataMgr.getInstance().getEquipCfgById(e.equipId).Type
                }), this.data.PutOnData.sort(function (t, e) {
                    var a = p.DataMgr.getInstance().getEquipCfgById(t.equipId).Quality;
                    return p.DataMgr.getInstance().getEquipCfgById(e.equipId).Quality - a
                }), this.saveData(), s.EventMgr.getInstance().emit(u.EventName.changeEquip)
            }, e.prototype.addEquip = function (t, e) {
                if (void 0 === e && (e = !1), !p.DataMgr.getInstance().getEquipCfgById(t)) return c.LogMgr.getInstance().debug(lang.index60eed_238);
                var a = new v;
                a.equipId = t, a.gainIndex = this.getGainIndex(), this.data.PutOnData.push(a);
                var n = p.DataMgr.getInstance().getEquipCfgById(t);
                n.Quality > this.data.bestQuality && (d.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.equip_lv_X, n.Quality), this.data.bestQuality = n.Quality), e && this.putOnEquip(a, n.Type), this.refreshEquip()
            }, e.prototype.deleteEquipById = function (t) {
                this.data.PutOnData = this.data.PutOnData.filter(function (e) {
                    return e.gainIndex != t
                }), this.saveData()
            }, e.prototype.getGainIndex = function () {
                return this.data.curGainIndex += 1, this.saveData(), this.data.curGainIndex
            }, e.prototype.getPutOnData = function () {
                return this.data.PutOnData
            }, e.prototype.setPutOnDataById = function (t, e) {
                this.data.PutOnData.find(function (e) {
                    return e.gainIndex == t
                }).puton = e, this.saveData()
            }, e.prototype.getPutOnDataPutOnById = function (t) {
                return this.data.PutOnData.find(function (e) {
                    return e.gainIndex == t
                }).puton
            }, e.prototype.getPutOnDataByGainIndex = function (t) {
                return this.data.PutOnData.find(function (e) {
                    return e.gainIndex == t
                })
            }, e.prototype.setPutOnDataIsLockById = function (t, e) {
                this.data.PutOnData.find(function (e) {
                    return e.gainIndex == t
                }).isLock = e, this.saveData()
            }, e.prototype.getPutOnDataIsLockById = function (t) {
                return this.data.PutOnData.find(function (e) {
                    return e.gainIndex == t
                }).isLock
            }, e.prototype.putOnEquip = function (t, e) {
                var a = this;
                this.data.putOnArr[e - 1] && this.disBoardEquip(this.data.putOnArr[e - 1], !1), this.data.equipNum++, t.puton = !0;
                var n = this.data.PutOnData.indexOf(t);
                this.data.PutOnData.splice(n, 1), this.data.putOnArr[e - 1] = t, d.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.equip_X, this.data.equipNum), s.EventMgr.getInstance().emit(u.EventName.putOnEquip, e), l.UIUtils.scheduleOnce(function () {
                    a.refreshEquip()
                }, this, .01)
            }, e.prototype.disBoardEquip = function (t, e) {
                var a = this;
                void 0 === e && (e = !0), this.data.equipNum--, t.puton = !1, this.data.PutOnData.push(t);
                var n = this.data.putOnArr.indexOf(t);
                this.data.putOnArr[n] = null, e && l.UIUtils.scheduleOnce(function () {
                    s.EventMgr.getInstance().emit(u.EventName.disBoardEquip, n), a.refreshEquip()
                }, this, .01)
            }, e.prototype.getPutOnArr = function () {
                return this.data.putOnArr
            }, e.prototype.getPutOnArrByType = function (t) {
                return this.data.putOnArr[t - 1]
            }, e.prototype.addEquipCellNum = function (t) {
                this.data.equipCellNum += t, this.saveData()
            }, e.prototype.getEquipCellNum = function () {
                return this.data.equipCellNum
            }, e.prototype.getEquipNum = function () {
                return this.data.equipNum
            }, e.prototype.setEquipProp = function (t) {
                this.data.equipProp = t, this.saveData()
            }, e.prototype.getEquipProp = function () {
                return this.data.equipProp.Speed < 1 && (this.data.equipProp.Speed = 1, this.saveData()), this.data.equipProp
            }, o([m], e)
        }(r.BaseData);
        a.default = I, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../framework/manager/EventMgr": "EventMgr",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../../game/config/Config": "Config",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "../ui/UIEquip": "UIEquip",
        "./TrackDataEvent": "TrackDataEvent"
    }],
    ResCacheMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "9b2e1znp0JK1pwthkWLQinF", "ResCacheMgr");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.ResCacheMgr = void 0;
        var o = t("../base/BaseMgr"), r = t("../utils/TimeUtils"), s = t("../utils/UIUtils"),
            c = (t("./LogMgr"), t("./ResourceMgr")), l = function (t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.temporaryCache = [], e.permanentCache = [], e.isStartDecRef = !1, e.assetsLifeTime = 5, e.permanentCacheKeyMap = new Map, e.depsdeps = [], e
                }

                return i(e, t), e.getInstance = function () {
                    return null == this.instance && (this.instance = new e), this.instance
                }, e.prototype.init = function () {
                    this.startDecRef()
                }, e.prototype.startDecRef = function () {
                    this.isStartDecRef || (this.isStartDecRef = !0, s.UIUtils.schedule(this.autoRelease, this, 1))
                }, e.prototype.autoRelease = function () {
                    for (var t = r.TimeUtils.GetTimeBySecond(), e = 0; e < this.temporaryCache.length; e++) {
                        var a = this.temporaryCache[e];
                        if (a && t - a.releaseTime >= a.cacheTime) {
                            if (a.defCount <= 0) continue;
                            for (var n = a.defCount, i = 0; i < n; i++) if (a.asset.decRef(), a.asset.refCount <= 0) {
                                this.temporaryCache.splice(e, 1), e--, a.defCount = 0;
                                break
                            }
                            a.asset.refCount > 0 && (a.releaseTime = r.TimeUtils.GetTimeBySecond() + 86400)
                        } else a && 0 == a.asset.refCount && (this.temporaryCache.splice(e, 1), e--, a.defCount = 0)
                    }
                }, e.prototype.refreshTime = function (t) {
                    for (var e = r.TimeUtils.GetTimeBySecond(), a = 0; a < t.length; a++) for (var n = 0; n < this.temporaryCache.length; n++) {
                        var i = t[a], o = this.temporaryCache[n];
                        if (i.cachekey == o.cachekey && i.type == o.type) {
                            this.temporaryCache[n].releaseTime = e, this.temporaryCache[n].defCount += i.defCount, this.temporaryCache[n].canRelease = !1;
                            break
                        }
                    }
                }, e.prototype.addAssets = function (t, e) {
                    if (t && t.asset) {
                        var a = e ? this.temporaryCache : this.permanentCache, n = this.isExistKey(t.cachekey, t.type, a);
                        -1 == n ? a.push(t) : a[n] = t
                    }
                }, e.prototype.addAssetKeyToMap = function (t, e, a, n) {
                    var i = this.permanentCacheKeyMap.get(t), o = new c.ResCacheKey(e, a, n);
                    if (i && i.length > 0) i.push(o); else {
                        var r = [];
                        r.push(o), this.permanentCacheKeyMap.set(t, r)
                    }
                }, e.prototype.releaseAssetsFromMap = function (t) {
                    var e = this.permanentCacheKeyMap.get(t);
                    if (e && e.length > 0) for (var a = 0; a < e.length; a++) for (var n = 0; n < this.permanentCache.length; n++) {
                        var i = this.permanentCache[n];
                        if (i && i.cachekey == e[a].cachekey && i.type == e[a].type) {
                            i.asset.decRef(), i.asset.refCount <= 0 && (this.permanentCache.splice(n, 1), n--);
                            break
                        }
                    }
                }, e.prototype.getAssets = function () {
                    return null
                }, e.prototype.isExistKey = function (t, e, a) {
                    for (var n = 0; n < a.length; n++) {
                        var i = a[n];
                        if (i && i.cachekey == t && i.type == e) return n
                    }
                    return -1
                }, e.prototype.visitAsset = function (t, e) {
                    if (t._uuid) e.push(t._uuid); else if (t instanceof cc.SpriteFrame) {
                        var a, n = t;
                        n._original ? (a = n._original._texture) && e.push(a._uuid) : (a = n.getTexture()) && e.push(a._uuid)
                    }
                }, e.prototype.visitComponent = function (t, e) {
                    for (var a = Object.getOwnPropertyNames(t), n = 0; n < a.length; n++) {
                        var i = a[n];
                        if ("node" !== i && "__eventTargets" !== i) {
                            var o = t[i];
                            if (o instanceof cc.NodePool) this.visitNodePool(o, e); else if ("object" == typeof o && o) if (Array.isArray(o)) for (var r = 0; r < o.length; r++) (c = o[r]) instanceof cc.Asset && this.visitAsset(c, e); else if (o.constructor && o.constructor !== Object) o instanceof cc.Asset && this.visitAsset(o, e); else {
                                var s = Object.getOwnPropertyNames(o);
                                for (r = 0; r < s.length; r++) {
                                    var c;
                                    (c = o[s[r]]) instanceof cc.Asset && this.visitAsset(c, e)
                                }
                            }
                        }
                    }
                }, e.prototype.visitNode = function (t, e) {
                    for (var a = 0; a < t._components.length; a++) this.visitComponent(t._components[a], e);
                    for (a = 0; a < t._children.length; a++) this.visitNode(t._children[a], e)
                }, e.prototype.visitNodePool = function (t, e) {
                    for (var a = t._pool, n = 0; n < a.length; n++) {
                        var i = a[n];
                        this.visitNode(i, e)
                    }
                }, e.instance = null, e
            }(o.default);
        a.ResCacheMgr = l, cc._RF.pop()
    }, {
        "../base/BaseMgr": "BaseMgr",
        "../utils/TimeUtils": "TimeUtils",
        "../utils/UIUtils": "UIUtils",
        "./LogMgr": "LogMgr",
        "./ResourceMgr": "ResourceMgr"
    }],
    ResNumData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "f533cdXX0pJOLfgJ7qlmpfe", "ResNumData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.ResNumData = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../../framework/utils/TimeUtils"), s = t("../config/Config"),
            c = function () {
                this.lastGetTime = -1, this.goldNum = 5, this.diaNum = 5
            }, l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ecrypt = !1, e.gameKey = s.GameConfig.AppCacheName + "resNum", e.endId = 3, e
                }

                return i(e, t), e.prototype.createData = function () {
                    return this.data = new c, this.data.lastGetTime = r.TimeUtils.GetTimeBySecond(), this.saveData(), this.data
                }, e.prototype.getNum = function (t) {
                    switch (this.checkRef() && (this.data.lastGetTime = r.TimeUtils.GetTimeBySecond(), this.data.goldNum = 5, this.data.diaNum = 5, this.saveData()), t) {
                        case s.Currency.gold:
                            return this.data.goldNum;
                        case s.Currency.diamond:
                            return this.data.diaNum
                    }
                }, e.prototype.lossNum = function (t) {
                    switch (t) {
                        case s.Currency.gold:
                            this.data.goldNum -= 1;
                            break;
                        case s.Currency.diamond:
                            this.data.diaNum -= 1
                    }
                    this.saveData()
                }, e.prototype.checkRef = function () {
                    return !r.TimeUtils.compareIsToday(this.data.lastGetTime)
                }, e
            }(o.BaseData);
        a.ResNumData = l, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../framework/utils/TimeUtils": "TimeUtils",
        "../config/Config": "Config"
    }],
    ResourceMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "739ffLu5WtLUq8HGmuiTmxM", "ResourceMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.ResourceMgr = a.BundleCache = a.ResCacheKey = a.ResCache = void 0;
        var n = t("../base/BasePlatform"), i = t("../utils/ArgsParseUtils"), o = t("../utils/TimeUtils"),
            r = t("./LogMgr"), s = t("./PlatformManager"), c = t("./ResCacheMgr"), l = function () {
                function t(t, e, a, n, i, r) {
                    this.releaseTime = a, this.cacheTime = n, this.asset = r, this.type = cc.js.getClassName(i), this.cachekey = t + "/" + e, this.defCount = 0, this.lifeTime = 3, this.createTime = o.TimeUtils.GetTimeBySecond(), this.canRelease = !0
                }

                return t.prototype.setLifeTime = function (t) {
                    this.lifeTime = t
                }, t
            }();
        a.ResCache = l;
        a.ResCacheKey = function (t, e, a) {
            this.defCount = 0, this.type = cc.js.getClassName(a), this.cachekey = t + "/" + e, this.defCount = 1
        };
        a.BundleCache = function (t, e, a) {
            this.bundleName = t, this.dateTime = e, this.cacheTime = a
        };
        var u = function () {
            function t() {
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.getBundle = function (t) {
                return cc.assetManager.getBundle(t)
            }, t.prototype.loadBundle = function (t, e) {
                var a = cc.assetManager.getBundle(t);
                null == a ? cc.assetManager.loadBundle(t, function (a, n) {
                    a ? r.LogMgr.getInstance().error(t + "bundle load error :" + a) : (r.LogMgr.getInstance().debug(lang.index60eed_239 + t), e(n))
                }) : e(a)
            }, t.prototype.preloadFromBundle = function (t, e, a) {
                t.preload(e, cc.Asset, function (t, e) {
                    a && a(t, e)
                })
            }, t.prototype.preload = function (t, e) {
                var a = cc.assetManager.getBundle(t);
                a ? e && a.preload(e) : cc.assetManager.loadBundle(t, function (t, a) {
                    t || e && a.preload(e)
                })
            }, t.prototype.relLoadBundle = function (t, e) {
                for (var a = function (a) {
                    var i = t[a];
                    n.loadBundle(i, function (t) {
                        if (e) {
                            var n = e.get(a);
                            t.load(n)
                        }
                    })
                }, n = this, i = 0; i < t.length; i++) a(i)
            }, t.prototype.loadFromRes = function (t, e, a) {
                this.loadRes("resources", t, e, a)
            }, t.prototype.loadDirFrom = function (t, e) {
                this.loadDir("resources", t, e)
            }, t.prototype.loadSpriteframe = function () {
                var e = i.ArgsParseUtils._makeloadSpriteFrameResrgs.apply(this, arguments), a = e.bundle, n = e.path,
                    s = e.callback, u = e.saveKey, p = o.TimeUtils.GetTimeBySecond() + 86400,
                    d = (c.ResCacheMgr.getInstance().getAssets(a, n, cc.SpriteFrame), cc.assetManager.getBundle(a)),
                    h = new l(a, n, p, e.cacheTme, cc.SpriteFrame);
                null == d ? t.getInstance().loadBundle(a, function (t) {
                    t.load(n, cc.SpriteFrame, function (t, i) {
                        t ? r.LogMgr.getInstance().error("loadres error path:" + n + "  error:", t.message) : (i.addRef(), h.asset = i, c.ResCacheMgr.getInstance().addAssets(h, e.autoRelese), u && c.ResCacheMgr.getInstance().addAssetKeyToMap(u, a, n, cc.SpriteFrame), s && s(i))
                    })
                }) : d.load(n, cc.SpriteFrame, function (t, i) {
                    t ? r.LogMgr.getInstance().error("loadres error path:" + n + "  error:" + t) : (i.addRef(), h.asset = i, c.ResCacheMgr.getInstance().addAssets(h, e.autoRelese), u && c.ResCacheMgr.getInstance().addAssetKeyToMap(u, a, n, cc.SpriteFrame), s && s(i))
                })
            }, t.prototype.loadRemoteSpriteFrame = function (t, e, a, i) {
                void 0 === a && (a = !1), void 0 === i && (i = 10);
                var r = o.TimeUtils.GetTimeBySecond() + 86400,
                    u = (c.ResCacheMgr.getInstance().getAssets("", t, cc.Texture2D), new l("", t, r, i, cc.Texture2D));
                t.startsWith("http") && (s.PlatformManager.currentPlatform == n.Platform.BYTEDANCE ? cc.assetManager.loadRemote(t, {ext: ".head"}, function (t, n) {
                    if (!t) {
                        n.addRef(), u.asset = n, c.ResCacheMgr.getInstance().addAssets(u, a);
                        var i = new cc.SpriteFrame(n);
                        e(i)
                    }
                }) : cc.assetManager.loadRemote(t, function (t, n) {
                    if (!t) {
                        n.addRef(), u.asset = n, c.ResCacheMgr.getInstance().addAssets(u, a);
                        var i = new cc.SpriteFrame(n);
                        e(i)
                    }
                }))
            }, t.prototype.loadRes = function () {
                var e = i.ArgsParseUtils._makeLoadResArgs.apply(this, arguments), a = e.bundle, n = e.path, s = e.type,
                    u = e.callback, p = e.saveKey;
                if ("cc.Asset" != cc.js.getClassName(s)) {
                    var d = o.TimeUtils.GetTimeBySecond() + 86400,
                        h = (c.ResCacheMgr.getInstance().getAssets(a, n, s), cc.assetManager.getBundle(a)),
                        g = new l(a, n, d, e.cacheTme, s);
                    null == h ? t.getInstance().loadBundle(a, function (t) {
                        t.load(n, s, function (t, i) {
                            t ? r.LogMgr.getInstance().error("loadres error path:" + n + "  error:", t.message) : (i.addRef(), g.asset = i, c.ResCacheMgr.getInstance().addAssets(g, e.autoRelese), p && c.ResCacheMgr.getInstance().addAssetKeyToMap(p, a, n, s), u && u(i))
                        })
                    }) : h.load(n, s, function (t, i) {
                        t ? r.LogMgr.getInstance().error("loadres error path:" + n + "  error:" + t) : (i.addRef(), g.asset = i, c.ResCacheMgr.getInstance().addAssets(g, e.autoRelese), p && c.ResCacheMgr.getInstance().addAssetKeyToMap(p, a, n, s), u && u(i))
                    })
                } else console.error(lang.index60eed_240, a + "/" + n)
            }, t.prototype.loadDir = function (t, e, a) {
                var n = cc.assetManager.getBundle(t);
                null == n ? cc.assetManager.loadBundle(t, function (t, n) {
                    n.loadDir(e, cc.Asset, function (t, n) {
                        t ? r.LogMgr.getInstance().error("loadres error path:" + e + "  error:" + t) : a && a(n)
                    })
                }) : n.loadDir(e, cc.Asset, function (t, n) {
                    t ? r.LogMgr.getInstance().error("loadres error path:" + e + "  error:" + t) : a && a(n)
                })
            }, t.prototype.releaseByBundle = function (t, e) {
                t.release(e)
            }, t.prototype.releaseByBname = function (t, e) {
                var a = cc.assetManager.getBundle(t);
                a && a.release(e)
            }, t.prototype.releaseBundle = function (t) {
                var e = cc.assetManager.getBundle(t);
                e && cc.assetManager.removeBundle(e)
            }, t.instance = null, t
        }();
        a.ResourceMgr = u, cc._RF.pop()
    }, {
        "../base/BasePlatform": "BasePlatform",
        "../utils/ArgsParseUtils": "ArgsParseUtils",
        "../utils/TimeUtils": "TimeUtils",
        "./LogMgr": "LogMgr",
        "./PlatformManager": "PlatformManager",
        "./ResCacheMgr": "ResCacheMgr"
    }],
    SDF: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "09d25FF4MNBZ5u7L5ZPl6T/", "SDF"), Object.defineProperty(a, "__esModule", {value: !0}), a.SDF = void 0;
        var n = function () {
            function t() {
            }

            return t.prototype.RenderToMemory = function (t, e, a, n) {
                void 0 === n && (n = 0);
                var i = new cc.Node;
                i.parent = t, i.x = (.5 - t.anchorX) * t.width, i.y = (.5 - t.anchorY) * t.height;
                var o = i.addComponent(cc.Camera);
                o.backgroundColor = new cc.Color(255, 255, 255, 0), o.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR, o.cullingMask = 4294967295;
                var r = !1;
                try {
                    var s = cc.game._renderContext, c = Math.floor(1 * t.width + 2 * n),
                        l = Math.floor(1 * t.height + 2 * n), u = a.__gt_texture;
                    if (u && u.width == c && u.height == a.height || ((u = a.__gt_texture = new cc.RenderTexture).initWithSize(c, l, s.STENCIL_INDEX8), u.packable = !1), o.alignWithScreen = !1, o.orthoSize = l / 2, o.targetTexture = u, o.render(t), e) for (var p = 0, d = e; p < d.length; p++) {
                        var h = d[p];
                        o.render(h)
                    }
                    var g = a;
                    g.active = !0, g.opacity = 255, g.width = c, g.height = l, g.angle = t.angle, g.scaleX = 1, g.scaleY = -1;
                    var f = g.getComponent(cc.Sprite);
                    f || (f = g.addComponent(cc.Sprite)), f.spriteFrame || (f.sizeMode = cc.Sprite.SizeMode.CUSTOM, f.spriteFrame = new cc.SpriteFrame(u)), r = !0
                } finally {
                    o.targetTexture = null, i.removeFromParent(), r || (a.active = !1)
                }
                return a.__gt_texture
            }, t.prototype.RenderSDF = function (t, e, a) {
                var n = t.readPixels(), i = t.width, o = t.height;
                void 0 === a && (a = 0), e = e || this.radius || 18;
                var r = i * o, s = Math.max(i, o);
                this.gridOuter = new Float64Array(r), this.gridInner = new Float64Array(r), this.f = new Float64Array(s), this.d = new Float64Array(s), this.z = new Float64Array(s + 1), this.v = new Int16Array(s);
                for (var c = new Uint8ClampedArray(r), l = 0; l < r; l++) {
                    var u = n[4 * l + 3] / 255;
                    this.gridOuter[l] = 1 === u ? 0 : 0 === u ? 1e10 : Math.pow(Math.max(0, .5 - u), 2), this.gridInner[l] = 1 === u ? 1e10 : 0 === u ? 0 : Math.pow(Math.max(0, u - .5), 2)
                }
                for (this.EDT(this.gridOuter, i, o, this.f, this.d, this.v, this.z), this.EDT(this.gridInner, i, o, this.f, this.d, this.v, this.z), l = 0; l < r; l++) {
                    var p = this.gridOuter[l] - this.gridInner[l];
                    c[l] = Math.max(0, Math.min(255, Math.round(255 - 255 * (p / e + a)))), n[4 * l + 3] = c[l]
                }
                var d = new cc.RenderTexture;
                return d.initWithData(n, cc.Texture2D.PixelFormat.RGBA8888, i, o), {texture: d, alpha: c}
            }, t.prototype.EDT = function (t, e, a, n, i, o, r) {
                for (var s = 0; s < e; s++) {
                    for (var c = 0; c < a; c++) n[c] = t[c * e + s];
                    for (this.EDT1D(n, i, o, r, a), c = 0; c < a; c++) t[c * e + s] = i[c]
                }
                for (c = 0; c < a; c++) {
                    for (s = 0; s < e; s++) n[s] = t[c * e + s];
                    for (this.EDT1D(n, i, o, r, e), s = 0; s < e; s++) t[c * e + s] = Math.sqrt(i[s])
                }
            }, t.prototype.EDT1D = function (t, e, a, n, i) {
                a[0] = 0, n[0] = -1e10, n[1] = 1e10;
                for (var o = 1, r = 0; o < i; o++) {
                    for (var s = (t[o] + o * o - (t[a[r]] + a[r] * a[r])) / (2 * o - 2 * a[r]); s <= n[r];) r--, s = (t[o] + o * o - (t[a[r]] + a[r] * a[r])) / (2 * o - 2 * a[r]);
                    a[++r] = o, n[r] = s, n[r + 1] = 1e10
                }
                for (o = 0, r = 0; o < i; o++) {
                    for (; n[r + 1] < o;) r++;
                    e[o] = (o - a[r]) * (o - a[r]) + t[a[r]]
                }
            }, t
        }();
        a.SDF = n, cc._RF.pop()
    }, {}],
    ScrollCard: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "b1877HaMcVEF6GCqRPtlynm", "ScrollCard");
        var n, i, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), r = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.Direction = void 0, function (t) {
            t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical"
        }(i = a.Direction || (a.Direction = {})), cc.Enum(i);
        var s = cc._decorator, c = s.ccclass, l = s.property, u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.Direction = i.Horizontal, e.itemOffset = 0, e.speed = 500, e.rub = 1, e.scaleMin = .5, e.scaleMax = 1, e.item = [], e.itemSize = 5, e.itemNode = null, e._startTime = 0, e._moveSpeed = 0, e.uiTransform = null, e.itemList = [], e.canTouch = !0, e.invert = 0, e.speedTime = 0, e
            }

            return o(e, t), e.prototype.start = function () {
                var t = this;
                this.uiTransform = this.node, this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    t.canTouch && (t._moveSpeed = 0, t._startTime = (new Date).getTime())
                }), this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
                    if (t.canTouch) {
                        var a = e.getDelta();
                        t.itemMoveBy(a)
                    }
                }), this.node.on(cc.Node.EventType.TOUCH_END, function (e) {
                    t.canTouch && t.touchEnd(e)
                }), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
                    t.canTouch && t.touchEnd(e)
                })
            }, e.prototype.init = function () {
                for (var t = 0; t < this.itemSize; t++) {
                    var e = cc.instantiate(this.itemNode);
                    e.active = !0, e.parent = this.node, this.item.push(e)
                }
                this._initItemPos(), this.updateScale()
            }, e.prototype.autoScroll = function (t, e) {
                var a = this;
                this.canTouch = !1, this.speedTime = t, this.offset = e, this.schedule(function () {
                    a.invert += .01, a.invert >= a.speedTime && (a.invert = 0, a.scrollOffset(a.offset))
                }, 0)
            }, e.prototype.changleScrollSpeed = function (t, e) {
                this.speedTime = t, this.offset = e
            }, e.prototype.stopAutoScroll = function () {
                this.unscheduleAllCallbacks()
            }, e.prototype.scrollOffset = function (t) {
                this.itemMoveBy(t)
            }, e.prototype.touchEnd = function (t) {
                var e, a = t.getLocation(), n = t.getStartLocation();
                e = 0 == this.Direction ? n.x - a.x : n.y - a.y;
                var i = (new Date).getTime() - this._startTime;
                this._moveSpeed = e / i
            }, e.prototype._initItemPos = function () {
                this.uiTransform.anchorY = .5, this.uiTransform.anchorX = .5, this._maxSize = new cc.Size(0, 0);
                for (var t = 0; t < this.item.length; t++) this._maxSize.width += this.item[t].width, this._maxSize.height += this.item[t].height, this._maxSize.width += this.itemOffset, this._maxSize.height += this.itemOffset;
                var e;
                for (e = 0 == this.Direction ? new cc.Vec2(-this._maxSize.width * this.uiTransform.anchorX, -this._maxSize.height * this.uiTransform.anchorY) : new cc.Vec2(this._maxSize.width * this.uiTransform.anchorX, this._maxSize.height * this.uiTransform.anchorY), this._screenRect = new cc.Rect(e.x, e.y, this._maxSize.width, this._maxSize.height), this.itemList = [], t = 0; t < this.item.length; t++) {
                    var a = this.item[t].getAnchorPoint(), n = this.item[t].getContentSize();
                    0 == this.Direction ? (e = e.add(new cc.Vec2(n.width * a.x, n.height * a.y)), this.item[t].position = new cc.Vec3(e.x, 0, 0), e = (e = e.add(new cc.Vec2(n.width * a.x, n.height * a.y))).add(new cc.Vec2(this.itemOffset, this.itemOffset))) : (e = e.subtract(new cc.Vec2(n.width * a.x, n.height * a.y)), this.item[t].position = new cc.Vec3(0, e.y, 0), e = (e = e.subtract(new cc.Vec2(n.width * a.x, n.height * a.y))).subtract(new cc.Vec2(this.itemOffset, this.itemOffset))), this.itemList[t] = this.item[t]
                }
            }, e.prototype.updateScale = function () {
                if (!(this.scaleMax < this.scaleMin || 0 == this.scaleMax)) for (var t = 0; t < this.item.length; t++) {
                    var e;
                    if (0 == this.Direction) {
                        var a = this.item[t].position.x + this._maxSize.width / 2;
                        e = this.item[t].position.x < 0 ? a / this._maxSize.width : 1 - a / this._maxSize.width
                    } else {
                        var n = this.item[t].position.y + this._maxSize.height / 2;
                        e = this.item[t].position.y < 0 ? n / this._maxSize.height : 1 - n / this._maxSize.height
                    }
                    e *= 2;
                    var i = this.scaleMax - this.scaleMin;
                    i *= e, i += this.scaleMin, i = Math.abs(i), this.item[t].scale = i
                }
            }, e.prototype.itemMoveBy = function (t) {
                for (var e = 0; e < this.item.length; e++) {
                    var a = this.item[e].position;
                    if (0 == this.Direction) {
                        var n = new cc.Vec3(a.x + t.x, a.y, 0);
                        this.item[e].position = n
                    } else n = new cc.Vec3(a.x, a.y + t.y, 0), this.item[e].position = n
                }
                this.updatePos()
            }, e.prototype.updatePos = function () {
                var t = this.itemList[0], e = this.itemList[this.itemList.length - 1], a = !1;
                if (0 == this.Direction ? t.position.x < -this._maxSize.width / 2 && (a = !0) : t.position.y > this._maxSize.width / 2 && (a = !0), a) {
                    var n = this.itemList.shift();
                    this.itemList.push(n);
                    var i = n.position;
                    if (0 == this.Direction) {
                        var o = e.position.x + e.width + this.itemOffset;
                        n.position = new cc.Vec3(o, i.y, 0)
                    } else {
                        var r = e.position.y - e.height - this.itemOffset;
                        n.position = new cc.Vec3(i.x, r, 0)
                    }
                }
                var s = !1;
                0 == this.Direction ? e.position.x > this._maxSize.width / 2 && (s = !0) : e.position.y < -this._maxSize.height / 2 && (s = !0), s && (n = this.itemList.pop(), this.itemList.unshift(n), i = n.position, 0 == this.Direction ? (o = t.position.x - t.width - this.itemOffset, n.position = new cc.Vec3(o, i.y, 0)) : (r = t.position.y + t.height + this.itemOffset, n.position = new cc.Vec3(i.x, r, 0))), this.updateScale()
            }, e.prototype.update = function (t) {
                if (0 != this._moveSpeed) {
                    for (var e = 0; e < this.item.length; e++) {
                        var a = this.item[e].position;
                        if (0 == this.Direction) {
                            var n = this._moveSpeed * t * this.speed;
                            this.item[e].position = new cc.Vec3(a.x - n, a.y, 0)
                        } else {
                            var i = this._moveSpeed * t * this.speed;
                            this.item[e].position = new cc.Vec3(a.x, a.y - i, 0)
                        }
                    }
                    this._moveSpeed > 0 ? (this._moveSpeed -= t * this.rub, this._moveSpeed < 0 && (this._moveSpeed = 0)) : (this._moveSpeed += t * this.rub, this._moveSpeed > 0 && (this._moveSpeed = 0));
                    var o = -this._moveSpeed * t * this.speed;
                    this.itemMoveBy(new cc.Vec2(o, o)), this.updatePos()
                }
            }, r([l({
                type: i,
                tooltip: lang.index60eed_241
            })], e.prototype, "Direction", void 0), r([l({
                type: cc.Integer,
                tooltip: lang.index60eed_242
            })], e.prototype, "itemOffset", void 0), r([l({
                type: cc.Integer,
                tooltip: lang.index60eed_243
            })], e.prototype, "speed", void 0), r([l({
                type: cc.Float,
                tooltip: lang.index60eed_244
            })], e.prototype, "rub", void 0), r([l({
                type: cc.Float,
                tooltip: lang.index60eed_245
            })], e.prototype, "scaleMin", void 0), r([l({
                type: cc.Float,
                tooltip: lang.index60eed_246
            })], e.prototype, "scaleMax", void 0), r([l({
                type: [cc.Node],
                tooltip: lang.index60eed_247
            })], e.prototype, "item", void 0), r([l({type: cc.Integer})], e.prototype, "itemSize", void 0), r([l({type: cc.Node})], e.prototype, "itemNode", void 0), r([c], e)
        }(cc.Component);
        a.default = u, cc._RF.pop()
    }, {}],
    SdkMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "52ff1345pJFtoi3ptmswq3e", "SdkMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.SdkMgr = a.AdType = void 0;
        var n = t("../../game/config/Config"), i = t("./AudioMgr"), o = t("../base/BasePlatform"), r = t("./LogMgr"),
            s = t("./PlatformManager"), c = t("./UIMgr"), l = t("../../game/manager/PlayerMgr"), u = t("./EventMgr"),
            p = t("../configs/Appcfg"), d = t("./WechatEventMgr");
        (function (t) {
            t.ReissueSign = "", t.FreeLotty = "", t.Collection = "", t.AdFreeTime = ""
        })(a.AdType || (a.AdType = {}));
        var h = function () {
            function t() {
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.playVideo = function (t, e, a) {
                console.log(lang.index60eed_248, t), i.AudioMgr.getInstance().pauseAllMusic(), u.EventMgr.getInstance().emit(p.BaseEventName.blocktouch, !1), s.PlatformManager.getInstance().showVideoAd("", t, function () {
                    s.PlatformManager.currentPlatform == o.Platform.WECHAT && d.WechatEventMgr.getInstance().trackVideoEvent(), u.EventMgr.getInstance().emit(p.BaseEventName.blocktouch, !0), i.AudioMgr.getInstance().resumeAllMusic(), e && e()
                }, function (t) {
                    i.AudioMgr.getInstance().resumeAllMusic(), u.EventMgr.getInstance().emit(p.BaseEventName.blocktouch, !0), r.LogMgr.getInstance().debug(lang.index60eed_249), a && a(), t && t.length && c.UIMgr.getInstance().openUI(n.UIID.UITips, -1, t)
                })
            }, t.prototype.showInsert = function (t) {
                i.AudioMgr.getInstance().pauseAllMusic(), s.PlatformManager.getInstance().showInsertAd(t, function () {
                    i.AudioMgr.getInstance().resumeAllMusic()
                })
            }, t.prototype.showBanner = function (t) {
                s.PlatformManager.getInstance().showBanner(t)
            }, t.prototype.hideBanner = function () {
                s.PlatformManager.getInstance().hideBanner()
            }, t.prototype.getUserInfo = function (t) {
                s.PlatformManager.getInstance().getUserInfo(t)
            }, t.prototype.requestCheckVersion = function (t) {
                switch (s.APPMgr.currentApp) {
                    case o.AppName.Invincible:
                        s.SWCF[s.SwitchID.ShenHe] = s.SWCF[s.SwitchID.ShenHe2]
                }
                for (var e = 0, a = 0; a < 10 && (n = s.SWCF[a]); a++) e++;
                for (a = 0; a < e; a++) {
                    var n;
                    if (!(n = s.SWCF[a])) return void t();
                    var i = this.getSwitchVersion(n);
                    i || (i = 0), t()
                }
            }, t.prototype.getCheckVersion = function (t) {
                if (s.PlatformManager.currentPlatform == o.Platform.EDITOR) return !1;
                if (s.PlatformManager.currentPlatform == o.Platform.WEB_LINK) return !1;
                var e = s.SWCF[t];
                return !e || e.res
            }, t.prototype.getSwitchVersion = function (t) {
                if (!t) return cc.error(lang.index60eed_250), 0;
                switch (s.PlatformManager.currentPlatform) {
                    case o.Platform.WECHAT:
                        return t.h5_wechat;
                    case o.Platform.BYTEDANCE:
                        return t.h5_bytedance;
                    case o.Platform.KUAIKAN:
                        return t.h5_kuaikan;
                    case o.Platform.OPPO:
                        return t.h5_oppo;
                    case o.Platform.VIVO:
                        return t.h5_vivo;
                    case o.Platform.QQ:
                        return t.h5_qq;
                    case o.Platform.ANDROID_233:
                        return t.android_233;
                    case o.Platform.ANDROID_4399:
                        return t.android_4399;
                    case o.Platform.ANDROID_VIVO:
                        return t.android_vivo;
                    case o.Platform.ANDROID_XIAOMI:
                        return t.android_xiaomi;
                    case o.Platform.GOOGLE:
                        return t.android_google;
                    case o.Platform.Ios:
                        return t.ios;
                    default:
                        return t.h5_baidu
                }
            }, t.prototype.hasVerify = function () {
                return s.PlatformManager.getInstance().hasVerify()
            }, t.prototype.recordScreen = function () {
                s.PlatformManager.getInstance().recordVideo()
            }, t.prototype.pauseRecord = function () {
                s.PlatformManager.getInstance().pauseRecord()
            }, t.prototype.restartRecord = function () {
                s.PlatformManager.getInstance().resumeRecord()
            }, t.prototype.resumeRecord = function () {
                s.PlatformManager.getInstance().resumeRecord()
            }, t.prototype.shareImg = function (t, e) {
                s.PlatformManager.getInstance().shareImg(t, e)
            }, t.prototype.share = function (t, e) {
                s.PlatformManager.getInstance().shareVideo(t, e)
            }, t.prototype.getShare = function () {
                return s.PlatformManager.getInstance().canShare()
            }, t.prototype.stopRecord = function (t, e) {
                s.PlatformManager.getInstance().stopRecorderManager(t, e)
            }, t.prototype.openNotify = function () {
                s.PlatformManager.getInstance().openNotify()
            }, t.prototype.toAppStore = function () {
                l.PlayerMgr.getInstance().getTrackData().getToAppStore() || s.PlatformManager.getInstance().toAppStore(function (t) {
                    1 == t && l.PlayerMgr.getInstance().getTrackData().setToAppStore()
                })
            }, t.prototype.shark = function (t) {
                void 0 === t && (t = 0), s.PlatformManager.getInstance().shark(t)
            }, t.prototype.checkShortcut = function (t, e) {
                s.PlatformManager.getInstance().checkShortcut(t, e)
            }, t.prototype.addShortcut = function (t, e) {
                s.PlatformManager.getInstance().addShortcut(t, e)
            }, t.prototype.setStorage = function (t, e, a) {
                s.PlatformManager.getInstance().setStorage(t, e, a)
            }, t.prototype.getStorage = function (t) {
                return s.PlatformManager.getInstance().getStorage(t)
            }, t.prototype.isIos = function () {
                return s.PlatformManager.getInstance().getSystemInfo().platform == n.SystemPlatform.IOS
            }, t.prototype.isPlatform = function (t) {
                return s.PlatformManager.currentPlatform == t
            }, t
        }();
        a.SdkMgr = h, cc._RF.pop()
    }, {
        "../../game/config/Config": "Config",
        "../../game/manager/PlayerMgr": "PlayerMgr",
        "../base/BasePlatform": "BasePlatform",
        "../configs/Appcfg": "Appcfg",
        "./AudioMgr": "AudioMgr",
        "./EventMgr": "EventMgr",
        "./LogMgr": "LogMgr",
        "./PlatformManager": "PlatformManager",
        "./UIMgr": "UIMgr",
        "./WechatEventMgr": "WechatEventMgr"
    }],
    ShareData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "90466l0F3VEWIXC8W/h3RV2", "ShareData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.ShareData = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../../framework/manager/LogMgr"),
            s = t("../../framework/manager/SdkMgr"), c = t("../../framework/utils/TimeUtils"),
            l = t("../../framework/utils/UIUtils"), u = t("../config/Config"), p = function () {
                this.path = "", this.dayShareNum = 0, this.daylastShareTime = -1
            }, d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameKey = u.GameConfig.AppCacheName + "shareData", e.timeTotalStop = 15, e.needRecordVideo = !0, e.recordTime = 0, e.canShare = !1, e.isStart = !1, e.isPause = !1, e.isStop = !1, e
                }

                return i(e, t), e.prototype.createData = function () {
                    return this.data = new p, this.data
                }, e.prototype.initData = function (t) {
                    t || -1 != this.data.daylastShareTime && (c.TimeUtils.compareIsToday(this.data.daylastShareTime) || (this.data.daylastShareTime = -1, this.data.dayShareNum = 0, this.saveData()))
                }, e.prototype.startRecord = function () {
                    this.needRecordVideo && (r.LogMgr.getInstance().debug(lang.index60eed_251), this.isStart = !0, this.isPause = !1, s.SdkMgr.getInstance().recordScreen(), this.needRecordVideo = !1, this.canShare = !1, l.UIUtils.schedule(this.secondUpdate, this, 1), l.UIUtils.schedule(this.secondUpdate, this, 3), this.data.path = "", this.saveData())
                }, e.prototype.playRecord = function () {
                    this.isStart ? this.isPause ? this.restartRecord() : this.pauseRecord() : this.startRecord()
                }, e.prototype.pauseRecord = function () {
                    this.isStart && (s.SdkMgr.getInstance().pauseRecord(), this.isPause = !0, r.LogMgr.getInstance().debug(lang.index60eed_252))
                }, e.prototype.restartRecord = function () {
                    this.isPause && (this.isPause = !1, s.SdkMgr.getInstance().restartRecord(), r.LogMgr.getInstance().debug(lang.index60eed_253))
                }, e.prototype.stopRecord = function (t, e) {
                    var a = this;
                    this.recordTime <= 0 || (l.UIUtils.unSchedule(this.secondUpdate, this), this.isStart = !1, this.isPause = !1, s.SdkMgr.getInstance().stopRecord(t, function (t) {
                        a.data.path = t, a.recordTime >= 15 && (a.canShare = !0), a.isStop = !0, a.recordTime = 0, a.saveData(), e && e()
                    }))
                }, e.prototype.getSharePath = function () {
                    return this.data.path
                }, e.prototype.getCanShare = function () {
                    return this.recordTime >= 15 || this.canShare
                }, e.prototype.getRecordTime = function () {
                    return this.recordTime
                }, e.prototype.toShare = function (t, e) {
                    var a = this;
                    s.SdkMgr.getInstance().share(this.data.path, function () {
                        a.data.path = "", t && a.data.dayShareNum++, a.needRecordVideo = !0, a.canShare = !1, a.isStop = !1, a.clearData(), a.saveData(), e && e()
                    })
                }, e.prototype.getTodayCanShare = function () {
                    return !0
                }, e.prototype.secondUpdate = function () {
                    this.isPause || (this.recordTime++, this.recordTime >= 290 && this.stopRecord(!1))
                }, e.prototype.checkStop = function (t) {
                    return this.isStop ? (t && t(), !0) : (this.recordTime >= this.timeTotalStop || this.recordTime >= 290) && (this.stopRecord(!1, t), !0)
                }, e.prototype.clearData = function () {
                    this.isStop = !1, this.isStart = !1, this.needRecordVideo = !0, this.data.path = "", this.recordTime = 0, this.saveData()
                }, e
            }(o.BaseData);
        a.ShareData = d, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/utils/TimeUtils": "TimeUtils",
        "../../framework/utils/UIUtils": "UIUtils",
        "../config/Config": "Config"
    }],
    SignData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "f00e8RbhiRAbZSoO/bQJCt4", "SignData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.SignData = void 0;
        var o = t("../../../scripts/framework/base/BaseData"), r = t("../../../scripts/framework/manager/EventMgr"),
            s = t("../../../scripts/framework/utils/TimeUtils"), c = t("../../../scripts/game/config/Config"),
            l = t("../../commonModel/config/CommonCfg"), u = function () {
                this.lastSignTime = -1, this.firstLoginTime = -1, this.firstLoginDayTime = -1, this.feedCardArr = [], this.subActive = !1, this.isGetSid = !1
            }, p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ecrypt = !1, e.gameKey = c.GameConfig.AppCacheName + "sign", e.curentDay = 1, e.redshowing = !1, e.canSign = !1, e
                }

                return i(e, t), e.prototype.createData = function () {
                    return this.data = new u, this.data.firstLoginTime = s.TimeUtils.GetTimeBySecond(), this.data.firstLoginDayTime = s.TimeUtils.dayStart(), this.data.alredyIdx = [], this.data.againIdx = [], this.curentDay = 1, this.saveData(), this.data
                }, e.prototype.initData = function (t) {
                    if (!t) {
                        var e = s.TimeUtils.overDay(this.data.firstLoginDayTime);
                        e <= 0 && (e = 0), this.curentDay = e + 1
                    }
                    this.data.feedCardArr || (this.data.feedCardArr = []), this.data.subActive || (this.data.subActive = !1), this.data.isGetSid || (this.data.isGetSid = !1), this.saveData()
                }, e.prototype.getCurentDay = function () {
                    return this.curentDay
                }, e.prototype.getAlredySign = function () {
                    return this.data.alredyIdx
                }, e.prototype.checkIsSigned = function (t) {
                    for (var e = 0; e < this.data.alredyIdx.length; e++) if (t == this.data.alredyIdx[e]) return !0;
                    return !1
                }, e.prototype.checkReissue = function (t) {
                    return t < this.curentDay
                }, e.prototype.checkCanSign = function (t) {
                    return t == this.curentDay
                }, e.prototype.startSign = function (t) {
                    this.data.alredyIdx.push(t), this.data.lastSignTime = s.TimeUtils.GetTimeBySecond(), this.saveData()
                }, e.prototype.checkTodyCanSign = function () {
                    if (this.data.alredyIdx.length >= 7) return !1;
                    if (this.data.lastSignTime > 10 && s.TimeUtils.compareIsToday(this.data.lastSignTime)) {
                        for (var t = 0; t < this.data.alredyIdx.length; t++) if (this.curentDay == this.data.alredyIdx[t]) return !1;
                        return !0
                    }
                    return this.checkCanSign(this.curentDay)
                }, e.prototype.checkShowRed = function () {
                    var t = this.checkTodyCanSign();
                    t ? this.redshowing || (this.redshowing = !0, r.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !0)) : this.redshowing && (this.redshowing = !1, r.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !1)), this.canSign = t
                }, e.prototype.getCanSigned = function () {
                    return this.canSign
                }, e.prototype.addFeedCard = function (t) {
                    this.existFeedCard(t) && this.data.feedCardArr.push(t), this.saveData()
                }, e.prototype.existFeedCard = function (t) {
                    return !this.data.feedCardArr.find(function () {
                        return t
                    })
                }, e.prototype.setSubActive = function (t) {
                    this.data.subActive = t, this.saveData()
                }, e.prototype.getSubActive = function () {
                    return this.data.subActive
                }, e.prototype.setisGetSid = function (t) {
                    this.data.isGetSid = t, this.saveData()
                }, e.prototype.getisGetSid = function () {
                    return this.data.isGetSid
                }, e
            }(o.BaseData);
        a.SignData = p, cc._RF.pop()
    }, {
        "../../../scripts/framework/base/BaseData": "BaseData",
        "../../../scripts/framework/manager/EventMgr": "EventMgr",
        "../../../scripts/framework/utils/TimeUtils": "TimeUtils",
        "../../../scripts/game/config/Config": "Config",
        "../../commonModel/config/CommonCfg": "CommonCfg"
    }],
    SpineUtils: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "13366sIhypKi7rqHbO0qedQ", "SpineUtils"), Object.defineProperty(a, "__esModule", {value: !0}), a.SpineUtils = a.SpineInfo = void 0;
        var n = t("../manager/ResourceMgr"), i = function () {
        };
        a.SpineInfo = i;
        var o = function () {
            function t() {
            }

            return t.changePartImgBundle = function (t, e, a, o) {
                var r = this;
                null == o && (o = new i), n.ResourceMgr.getInstance().loadRes(o.imgbundle, o.imgPath, cc.Texture2D, function (n) {
                    if (cc.sys.isNative) {
                        var i = new middleware.Texture2D;
                        i.setPixelsHigh(n.height), i.setPixelsWide(n.width), i.setNativeTexture(n.getImpl());
                        var s = o.diffWidth ? n.width + o.diffWidth : n.width,
                            c = o.diffHeight ? n.height + o.diffHeight : n.height, l = o.offsetX ? o.offsetX : 0,
                            u = o.offsetY ? o.offsetY : 0;
                        t.updateRegion(e, i, s, c, l, u)
                    } else {
                        n.handleLoadedTexture(!0);
                        var p = r.getAtt(t, e, a), d = r.CreateRegion(n, o);
                        p.region = d, p && (p.setRegion(d), p.updateOffset())
                    }
                })
            }, t.changePartImgTexture = function (t, e, a, n, o) {
                if (null == o && (o = new i), n.handleLoadedTexture(!0), cc.sys.isNative) {
                    var r = new middleware.Texture2D;
                    r.setPixelsHigh(n.height), r.setPixelsWide(n.width), r.setNativeTexture(n.getImpl());
                    var s = o.diffWidth ? n.width + o.diffWidth : n.width,
                        c = o.diffHeight ? n.height + o.diffHeight : n.height, l = o.offsetX ? o.offsetX : 0,
                        u = o.offsetY ? o.offsetY : 0;
                    t.updateRegion(e, r, c, s, l, u)
                } else {
                    var p = this.getAtt(t, e, a), d = this.CreateRegion(n, o);
                    p.region = d, p && (p.setRegion(d), this.updateSize(p), p.updateOffset())
                }
            }, t.getAtt = function (t, e, a) {
                t.findSlot(e);
                var n = t.skeletonData.getRuntimeData(), i = n.findSlotIndex(e);
                return n.findSkin("default").getAttachment(i, a)
            }, t.CreateRegion = function (t, e) {
                var a = new sp.SkeletonTexture;
                a.setRealTexture(t);
                var n = new sp.spine.TextureAtlasPage;
                n.name = t.name, n.uWrap = sp.spine.TextureWrap.ClampToEdge, n.vWrap = sp.spine.TextureWrap.ClampToEdge, n.texture = a, n.texture.setWraps(n.uWrap, n.vWrap), n.width = t.width, n.height = t.height;
                var i = new sp.spine.TextureAtlasRegion;
                return i.page = n, i.width = t.width, i.height = t.height, i.originalWidth = e.diffWidth ? t.width + e.diffWidth : t.width, i.originalHeight = e.diffHeight ? t.height + e.diffHeight : t.height, i.offsetX = e.offsetX ? e.offsetX : 0, i.offsetY = e.offsetY ? e.offsetY : 0, i.rotate = !1, i.u = 0, i.v = 0, i.u2 = 1, i.v2 = 1, i.texture = a, i
            }, t.updateSize = function () {
            }, t
        }();
        a.SpineUtils = o, cc._RF.pop()
    }, {"../manager/ResourceMgr": "ResourceMgr"}],
    Start: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "405fflgH3FIabbXxiZgVf8n", "Start");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../framework/manager/UIMgr"), s = cc._decorator, c = s.ccclass, l = s.property, u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.canvas = null, e.particle = null, e.btn = null, e.score_lb = null, e.music = null, e
            }

            return i(e, t), e.prototype.onLoad = function () {
                this.hideLoading();
                var t = this;
                cc.director.resume(), cc.director.preloadScene("Game"), this.canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onmove, this), this.canvas.on(cc.Node.EventType.TOUCH_END, this.end, this);
                var e = cc.sys.localStorage.getItem("score");
                null == e && (cc.sys.localStorage.setItem("score", 0), cc.log(lang.index60eed_254)), this.score_lb.string = lang.index60eed_255 + Math.floor(e), this.btn.on(cc.Node.EventType.TOUCH_START, function () {
                    t.music.play()
                }, this)
            }, e.prototype.hideLoading = function () {
                r.UIMgr.getInstance().getChildByName("UILoading").active = !1, r.UIMgr.getInstance().getChildByName("Main Camera").active = !1
            }, e.prototype.onbtn = function () {
                cc.log(lang.index60eed_256), cc.director.loadScene("Game")
            }, e.prototype.onmove = function (t) {
                this.particle.active = !0, console.log(lang.index60eed_257);
                var e = new cc.Vec2(t.getLocationX(), t.getLocationY());
                e = this.canvas.convertToNodeSpaceAR(e), this.particle.position = cc.v3(e)
            }, e.prototype.end = function () {
                this.particle.active = !1
            }, o([l(cc.Node)], e.prototype, "canvas", void 0), o([l({
                type: cc.Node,
                displayName: lang.index60eed_258,
                tooltip: lang.index60eed_259
            })], e.prototype, "particle", void 0), o([l({
                type: cc.Node,
                displayName: lang.index60eed_260,
                tooltip: lang.index60eed_261
            })], e.prototype, "btn", void 0), o([l({
                type: cc.Label,
                displayName: lang.index60eed_262,
                tooltip: lang.index60eed_263
            })], e.prototype, "score_lb", void 0), o([l({
                type: cc.AudioSource,
                displayName: lang.index60eed_264,
                tooltip: lang.index60eed_265
            })], e.prototype, "music", void 0), o([c], e)
        }(cc.Component);
        a.default = u, cc._RF.pop()
    }, {"../framework/manager/UIMgr": "UIMgr"}],
    StemCfg: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "41878i0y0JEBbOQtMdMtTx6", "StemCfg"), Object.defineProperty(a, "__esModule", {value: !0}), a.StemCfg = void 0;
        a.StemCfg = function () {
        }, cc._RF.pop()
    }, {}],
    StemDataMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "3cc6esVo+pF5LI8DunGNhGN", "StemDataMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.StemDataMgr = void 0;
        var n = t("../../framework/manager/ResourceMgr"), i = function () {
            function t() {
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.preload = function (t) {
                var e = this;
                n.ResourceMgr.getInstance().loadRes("configs", "StemJsonCfg", cc.JsonAsset, function (a) {
                    e.data = a.json, e.orderCfgs(), a.decRef(), t && t()
                })
            }, t.prototype.orderCfgs = function () {
                for (var t in this.data) "TextCfg" != t && this.data[t].sort(function (t, e) {
                    return t.id - e.id
                })
            }, t.prototype.getdata = function () {
                return this.data
            }, t.prototype.getScribingCfg = function (t) {
                for (var e = 0; e < this.data.ScribingCfg.length; e++) {
                    var a = this.data.ScribingCfg[e];
                    if (a.ID == t) return a
                }
                return null
            }, t.prototype.getAllScribingCfg = function () {
                return this.data.ScribingCfg
            }, t.prototype.getScribingDetailed = function (t) {
                return this.data["ScribingDetailed" + t]
            }, t
        }();
        a.StemDataMgr = i, cc._RF.pop()
    }, {"../../framework/manager/ResourceMgr": "ResourceMgr"}],
    StemData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "85cfeN7fvZNroYWTC/Xo6PK", "StemData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.StemData = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../config/Config"), s = function () {
            this.frist = !0, this.pageLock = "{}", this.tipsLock = "{}"
        }, c = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = r.GameConfig.AppCacheName + "stem", e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new s, this.data.pageLock = JSON.stringify({1001: !0}), this.saveData(), this.data
            }, e.prototype.getIsFrist = function () {
                return this.data.frist
            }, e.prototype.setIsFrist = function () {
                this.data.frist = !1, this.saveData()
            }, e.prototype.getPageLock = function (t) {
                return JSON.parse(this.data.pageLock)[t]
            }, e.prototype.unlockPage = function (t) {
                var e = JSON.parse(this.data.pageLock);
                e[t] = !0, this.data.pageLock = JSON.stringify(e), this.saveData()
            }, e.prototype.getTipLock = function (t) {
                return JSON.parse(this.data.tipsLock)[t]
            }, e.prototype.unlockTip = function (t) {
                var e = JSON.parse(this.data.tipsLock);
                e[t] = !0, this.data.tipsLock = JSON.stringify(e), this.saveData()
            }, e
        }(o.BaseData);
        a.StemData = c, cc._RF.pop()
    }, {"../../framework/base/BaseData": "BaseData", "../config/Config": "Config"}],
    TimeUtils: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "cae10zFespM0axe3QtxMfqW", "TimeUtils"), Object.defineProperty(a, "__esModule", {value: !0}), a.TimeUtils = void 0;
        var n = function () {
            function t() {
            }

            return t.GetTimeBySecond = function () {
                var t = new Date;
                return Math.floor(t.getTime() / 1e3)
            }, t.GetTimeByHours = function () {
                var t = new Date, e = t.getHours(), a = Math.floor(e / 10).toString() + e % 10, n = t.getMinutes();
                return a + ":" + (Math.floor(n / 10).toString() + n % 10)
            }, t.SecondToHours = function (t) {
                var e = t % 60;
                e = Math.floor(e / 10).toString() + e % 10;
                var a = Math.floor(t / 60) % 60;
                a = Math.floor(a / 10).toString() + a % 10;
                var n = Math.floor(t / 60 / 60);
                return (n = Math.floor(n / 10).toString() + n % 10) + ":" + a + ":" + e
            }, t.FormatDate2 = function (t) {
                var e = new Date(t), a = 10 > e.getMonth() + 1 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                    n = 10 > e.getDate() ? "0" + e.getDate() : e.getDate();
                return e.getFullYear() + "-" + a + "-" + n
            }, t.FormatDate1 = function (t, e) {
                void 0 === e && (e = "/");
                var a = new Date(t);
                return a.getFullYear() + e + (a.getUTCMonth() + 1) + e + a.getUTCDate()
            }, t.BeforeTime = function (t) {
                if (null == t) return "";
                var e = new Date, a = Math.floor(e.getTime() / 1e3) - t;
                return a <= 0 && (a = 1), Math.floor(a / 60 / 60 / 24) > 0 ? Math.floor(a / 60 / 60 / 24) + lang.index60eed_266 : Math.floor(a / 60 / 60) > 0 ? Math.floor(a / 60 / 60) + lang.index60eed_267 : Math.floor(a / 60) > 0 ? Math.floor(a / 60) + lang.index60eed_268 : Math.floor(a) + lang.index60eed_269
            }, t.compareIsToday = function (t) {
                var e = new Date(1e3 * t), a = e.getFullYear(), n = e.getUTCMonth(), i = e.getUTCDay(),
                    o = new Date(1e3 * this.GetTimeBySecond()), r = o.getFullYear(), s = o.getUTCMonth(),
                    c = o.getUTCDay();
                return a == r && n == s && i == c
            }, t.overDay = function (t) {
                var e = new Date(t), a = new Date(this.dayStart());
                return Math.floor((a.getTime() - e.getTime()) / 864e5)
            }, t.dayStart = function () {
                return new Date(new Date((new Date).toLocaleDateString()).getTime()).getTime()
            }, t.dayEnd = function () {
                return new Date(new Date((new Date).toLocaleDateString()).getTime() + 864e5 - 1).getTime()
            }, t.getDiffHours = function (t) {
                return (new Date).getHours() - new Date(1e3 * t).getHours()
            }, t.getSplaceTime = function (t, e) {
                var a = new Date;
                return a.getHours() >= t ? a.setHours(t + 24) : a.setHours(t), a.setMinutes(e), a.setSeconds(0), Number((a.getTime() / 1e3).toFixed(0))
            }, t.isLastDayOfMonth = function (t) {
                var e = !1, a = new Date(t), n = a.getFullYear(), i = a.getMonth() + 1, o = a.getDate(), r = n, s = i++;
                i > 12 && (s -= 12, r++);
                var c = new Date(r, s, 1);
                return o == new Date(c.getTime() - 864e5).getDate() && (e = !0), e
            }, t.SecondToMin = function (t) {
                var e = t % 60;
                e = Math.floor(e / 10).toString() + e % 10;
                var a = Math.floor(t / 60);
                return (a = Math.floor(a / 10).toString() + a % 10) + ":" + e
            }, t.countDownTime = function (t) {
                if (t < 0) return "00:00";
                var e = Math.floor(t), a = e % 60;
                a = Math.floor(a / 10).toString() + a % 10;
                var n = Math.floor(e / 60) % 60;
                n = Math.floor(n / 10).toString() + n % 10;
                var i = Math.floor(e / 60 / 60);
                return "00" != (i = Math.floor(i / 10).toString() + i % 10) ? i + ":" + n + ":" + a : n + ":" + a
            }, t
        }();
        a.TimeUtils = n, cc._RF.pop()
    }, {}],
    Tornado: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "ad145g4LkFJ76gs+iBu9kif", "Tornado");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseCtrl"), s = t("../config/Config"), c = t("../manager/MapMgr"),
            l = t("./CombatUnitCtrl"), u = t("./Zombie"), p = cc._decorator, d = p.ccclass,
            h = (p.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isFinal = !1, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    c.MapMgr.getInstance().zombieLayer.children.forEach(function (e) {
                        e.y == t.node.parent.y && (t.zombieLine = e)
                    }), this.addEvent(s.EventName.endGame, function () {
                        t.isFinal = !0
                    }), cc.tween(this.node).to(5, {x: this.zombieLine.width}).call(function () {
                        t.zombieLine.children.forEach(function (t) {
                            var e = t.getComponent(u.default);
                            t.getComponent(sp.Skeleton).paused = !1, e.findNearPlant(), e.Status = l.UnitStatus.Move
                        }), t.node.destroy()
                    }).start()
                }, e.prototype.update = function () {
                    var t = this;
                    1 != this.isFinal && (this.zombieLine.children.length <= 0 || this.node.x < this.zombieLine.children[0].x - 10 || this.zombieLine.children.forEach(function (e) {
                        if (e.x < t.node.x + t.node.width / 2) {
                            var a = e.getComponent(u.default);
                            if (310013 == a.getProperty().ID || !e.active || a.Status == l.UnitStatus.Die) return;
                            if (1 == a.isDie) return e.getComponent(sp.Skeleton).paused = !1, void a.zombieDie();
                            e.getComponent(sp.Skeleton).paused = !0, a.Status = l.UnitStatus.Stop, e.x = t.node.x
                        }
                    }))
                }, o([d], e)
            }(r.default));
        a.default = h, cc._RF.pop()
    }, {
        "../../framework/base/BaseCtrl": "BaseCtrl",
        "../config/Config": "Config",
        "../manager/MapMgr": "MapMgr",
        "./CombatUnitCtrl": "CombatUnitCtrl",
        "./Zombie": "Zombie"
    }],
    TrackDataEvent: [function (t, e, a) {
        "use strict";
        var n, i;
        cc._RF.push(e, "5e70aRZ275JpJ9JcQMRK3uj", "TrackDataEvent"), Object.defineProperty(a, "__esModule", {value: !0}), a.EventCF = a.TrackId = void 0, function (t) {
            t[t.guide1 = 0] = "guide1", t[t.guide2 = 1] = "guide2", t[t.guide2_1 = 2] = "guide2_1", t[t.guide3 = 3] = "guide3", t[t.guide4 = 4] = "guide4", t[t.guide5 = 5] = "guide5", t[t.guide6 = 6] = "guide6", t[t.guide7 = 7] = "guide7", t[t.enter_develop = 8] = "enter_develop", t[t.enter_equip = 9] = "enter_equip", t[t.enter_plant = 10] = "enter_plant", t[t.enter_shop = 11] = "enter_shop", t[t.start_x = 12] = "start_x", t[t.lv_start_X = 13] = "lv_start_X", t[t.finish_x = 14] = "finish_x", t[t.lv_finish_X = 15] = "lv_finish_X", t[t.win_x = 16] = "win_x", t[t.fail_x = 17] = "fail_x", t[t.gem = 18] = "gem", t[t.coin = 19] = "coin", t[t.shop = 20] = "shop", t[t.sunsupply = 21] = "sunsupply", t[t.lvskill = 22] = "lvskill", t[t.develop = 23] = "develop", t[t.plantprobation = 24] = "plantprobation", t[t.addplant = 25] = "addplant", t[t.superplant = 26] = "superplant", t[t.doublegem = 27] = "doublegem", t[t.legendshop = 28] = "legendshop", t[t.box = 29] = "box", t[t.sign = 30] = "sign", t[t.plantbox = 31] = "plantbox", t[t.summerget = 32] = "summerget", t[t.room = 33] = "room", t[t.equip = 34] = "equip", t[t.plantbox_show_X = 35] = "plantbox_show_X", t[t.plantbox_get_X = 36] = "plantbox_get_X", t[t.time_1 = 37] = "time_1", t[t.time_3 = 38] = "time_3", t[t.time_5 = 39] = "time_5", t[t.time_7 = 40] = "time_7", t[t.time_10 = 41] = "time_10", t[t.time_12 = 42] = "time_12", t[t.time_15 = 43] = "time_15", t[t.time_20 = 44] = "time_20", t[t.dau = 45] = "dau", t[t.lv_sunsupply_x_y = 46] = "lv_sunsupply_x_y", t[t.lv_lvskill_x_y = 47] = "lv_lvskill_x_y", t[t.lv_superplant_x_show = 48] = "lv_superplant_x_show", t[t.lv_superplant_x_get = 49] = "lv_superplant_x_get", t[t.lv_plantprobation_x_y = 50] = "lv_plantprobation_x_y", t[t.lv_addplant_x_y = 51] = "lv_addplant_x_y", t[t.shop_normalplant = 52] = "shop_normalplant", t[t.develop_coin = 53] = "develop_coin", t[t.shop_legendshop_X = 54] = "shop_legendshop_X", t[t.sign_X = 55] = "sign_X", t[t.sign_double_X = 56] = "sign_double_X", t[t.summer_unlock_X = 57] = "summer_unlock_X", t[t.summer_get_X = 58] = "summer_get_X", t[t.summer_doubleget_X = 59] = "summer_doubleget_X", t[t.develop_coin_X = 60] = "develop_coin_X", t[t.develop_gem_X = 61] = "develop_gem_X", t[t.develop_coin_X_Y = 62] = "develop_coin_X_Y", t[t.develop_gem_X_Y = 63] = "develop_gem_X_Y", t[t.shop_X = 64] = "shop_X", t[t.plant_levelup_X = 65] = "plant_levelup_X", t[t.shop_legendshop_lv_X = 66] = "shop_legendshop_lv_X", t[t.lv_book_X = 67] = "lv_book_X", t[t.room_X = 68] = "room_X", t[t.lv_room_X_Y = 69] = "lv_room_X_Y", t[t.equip_merge = 70] = "equip_merge", t[t.equip_quickmerge = 71] = "equip_quickmerge", t[t.equip_X = 72] = "equip_X", t[t.equip_lv_X = 73] = "equip_lv_X", t[t.lv_equip_X = 74] = "lv_equip_X", t[t.shop_normalequip = 75] = "shop_normalequip", t[t.shop_equip_X = 76] = "shop_equip_X", t[t.retention_1 = 77] = "retention_1", t[t.retention_2 = 78] = "retention_2", t[t.retention_3 = 79] = "retention_3", t[t.retention_4 = 80] = "retention_4", t[t.retention_5 = 81] = "retention_5", t[t.retention_6 = 82] = "retention_6", t[t.retention_7 = 83] = "retention_7", t[t.desktopadd = 84] = "desktopadd", t[t.dayz_start_x = 85] = "dayz_start_x", t[t.dayz_finish_x = 86] = "dayz_finish_x", t[t.dayz_win_x = 87] = "dayz_win_x", t[t.dayz_fail_x = 88] = "dayz_fail_x", t[t.dayz_gem = 89] = "dayz_gem", t[t.dayz_coin = 90] = "dayz_coin", t[t.dayz_shop = 91] = "dayz_shop", t[t.dayz_sunsupply = 92] = "dayz_sunsupply", t[t.dayz_lvskill = 93] = "dayz_lvskill", t[t.dayz_develop = 94] = "dayz_develop", t[t.dayz_plantprobation = 95] = "dayz_plantprobation", t[t.dayz_addplant = 96] = "dayz_addplant", t[t.dayz_superplant = 97] = "dayz_superplant", t[t.dayz_doublegem = 98] = "dayz_doublegem", t[t.dayz_legendshop = 99] = "dayz_legendshop", t[t.dayz_box = 100] = "dayz_box",t[t.dayz_sign = 101] = "dayz_sign",t[t.dayz_plantbox = 102] = "dayz_plantbox",t[t.dayz_summerget = 103] = "dayz_summerget",t[t.dayz_lv_sunsupply_x_y = 104] = "dayz_lv_sunsupply_x_y",t[t.dayz_lv_lvskill_x_y = 105] = "dayz_lv_lvskill_x_y",t[t.dayz_lv_superplant_x_show = 106] = "dayz_lv_superplant_x_show",t[t.dayz_lv_superplant_x_get = 107] = "dayz_lv_superplant_x_get",t[t.dayz_shop_normalplant = 108] = "dayz_shop_normalplant",t[t.dayz_develop_coin = 109] = "dayz_develop_coin",t[t.dayz_shop_legendshop_X = 110] = "dayz_shop_legendshop_X",t[t.dayz_sign_X = 111] = "dayz_sign_X",t[t.dayz_sign_double_X = 112] = "dayz_sign_double_X",t[t.dayz_summer_unlock_X = 113] = "dayz_summer_unlock_X",t[t.dayz_summer_get_X = 114] = "dayz_summer_get_X",t[t.dayz_summer_doubleget_X = 115] = "dayz_summer_doubleget_X",t[t.dayz_lv_start_X = 116] = "dayz_lv_start_X",t[t.dayz_lv_finish_X = 117] = "dayz_lv_finish_X",t[t.follow = 118] = "follow",t[t.subscribe = 119] = "subscribe",t[t.gift = 120] = "gift",t[t.open_id_reward_index = 121] = "open_id_reward_index"
        }(i = a.TrackId || (a.TrackId = {})), a.EventCF = ((n = {})[i.guide1] = {
            eventKey: "guide",
            eventValue: "guide1",
            info: lang.index60eed_270,
            onlyOne: !0,
            alias: "1"
        }, n[i.guide2] = {
            eventKey: "guide",
            eventValue: "guide2",
            info: lang.index60eed_271,
            onlyOne: !0,
            alias: "2"
        }, n[i.guide2_1] = {
            eventKey: "guide",
            eventValue: "guide2_1",
            info: lang.index60eed_272,
            onlyOne: !0,
            alias: "3"
        }, n[i.guide3] = {
            eventKey: "guide",
            eventValue: "guide3",
            info: lang.index60eed_273,
            onlyOne: !0,
            alias: "4"
        }, n[i.guide4] = {
            eventKey: "guide",
            eventValue: "guide4",
            info: lang.index60eed_274,
            onlyOne: !0,
            alias: "5"
        }, n[i.guide5] = {
            eventKey: "guide",
            eventValue: "guide5",
            info: lang.index60eed_275,
            onlyOne: !0,
            alias: "6"
        }, n[i.guide6] = {
            eventKey: "guide",
            eventValue: "guide6",
            info: lang.index60eed_276,
            onlyOne: !0,
            alias: "7"
        }, n[i.guide7] = {
            eventKey: "guide",
            eventValue: "guide7",
            info: lang.index60eed_277,
            onlyOne: !0,
            alias: "8"
        }, n[i.enter_develop] = {
            eventKey: "guide",
            eventValue: "enter_develop",
            info: lang.index60eed_278,
            onlyOne: !0,
            alias: "56"
        }, n[i.enter_equip] = {
            eventKey: "guide",
            eventValue: "enter_equip",
            info: lang.index60eed_279,
            onlyOne: !0,
            alias: "57"
        }, n[i.enter_plant] = {
            eventKey: "guide",
            eventValue: "enter_plant",
            info: lang.index60eed_280,
            onlyOne: !0,
            alias: "58"
        }, n[i.enter_shop] = {
            eventKey: "guide",
            eventValue: "enter_shop",
            info: lang.index60eed_281,
            onlyOne: !0,
            alias: "59"
        }, n[i.start_x] = {
            eventKey: "lv",
            eventValue: "start_",
            info: lang.index60eed_282,
            onlyOne: !0,
            alias: "9"
        }, n[i.lv_start_X] = {
            eventKey: "lv",
            eventValue: "lv_start_",
            info: lang.index60eed_283,
            onlyOne: !1
        }, n[i.finish_x] = {
            eventKey: "lv",
            eventValue: "finish_",
            info: lang.index60eed_284,
            onlyOne: !0,
            alias: "10"
        }, n[i.lv_finish_X] = {
            eventKey: "lv",
            eventValue: "lv_finish_",
            info: lang.index60eed_285,
            onlyOne: !1
        }, n[i.win_x] = {
            eventKey: "lv",
            eventValue: "win_",
            info: lang.index60eed_286,
            onlyOne: !0,
            alias: "11"
        }, n[i.fail_x] = {
            eventKey: "lv",
            eventValue: "fail_",
            info: lang.index60eed_287,
            onlyOne: !0,
            alias: "12"
        }, n[i.gem] = {
            eventKey: "video",
            eventValue: "gem",
            info: lang.index60eed_288,
            onlyOne: !1
        }, n[i.coin] = {
            eventKey: "video",
            eventValue: "coin",
            info: lang.index60eed_289,
            onlyOne: !1
        }, n[i.shop] = {
            eventKey: "video",
            eventValue: "shop",
            info: lang.index60eed_290,
            onlyOne: !1
        }, n[i.sunsupply] = {
            eventKey: "video",
            eventValue: "sunsupply",
            info: lang.index60eed_291,
            onlyOne: !1
        }, n[i.lvskill] = {
            eventKey: "video",
            eventValue: "lvskill",
            info: lang.index60eed_292,
            onlyOne: !1
        }, n[i.develop] = {
            eventKey: "video",
            eventValue: "develop",
            info: lang.index60eed_293,
            onlyOne: !1
        }, n[i.plantprobation] = {
            eventKey: "video",
            eventValue: "plantprobation",
            info: lang.index60eed_294,
            onlyOne: !1
        }, n[i.addplant] = {
            eventKey: "video",
            eventValue: "addplant",
            info: lang.index60eed_295,
            onlyOne: !1
        }, n[i.superplant] = {
            eventKey: "video",
            eventValue: "superplant",
            info: lang.index60eed_296,
            onlyOne: !1
        }, n[i.doublegem] = {
            eventKey: "video",
            eventValue: "doublegem",
            info: lang.index60eed_297,
            onlyOne: !1
        }, n[i.legendshop] = {
            eventKey: "video",
            eventValue: "legendshop",
            info: lang.index60eed_298,
            onlyOne: !1
        }, n[i.box] = {
            eventKey: "video",
            eventValue: "box",
            info: lang.index60eed_299,
            onlyOne: !1
        }, n[i.sign] = {
            eventKey: "video",
            eventValue: "sign",
            info: lang.index60eed_300,
            onlyOne: !1
        }, n[i.plantbox] = {
            eventKey: "video",
            eventValue: "plantbox",
            info: lang.index60eed_301,
            onlyOne: !1
        }, n[i.summerget] = {
            eventKey: "video",
            eventValue: "summerget",
            info: lang.index60eed_302,
            onlyOne: !1
        }, n[i.room] = {
            eventKey: "video",
            eventValue: "room",
            info: lang.index60eed_303,
            onlyOne: !1
        }, n[i.equip] = {
            eventKey: "video",
            eventValue: "equip",
            info: lang.index60eed_304,
            onlyOne: !1
        }, n[i.time_1] = {
            eventKey: "times",
            eventValue: "time_1",
            info: lang.index60eed_305,
            onlyOne: !0,
            alias: "13"
        }, n[i.time_3] = {
            eventKey: "times",
            eventValue: "time_3",
            info: lang.index60eed_306,
            onlyOne: !0,
            alias: "14"
        }, n[i.time_5] = {
            eventKey: "times",
            eventValue: "time_5",
            info: lang.index60eed_307,
            onlyOne: !0,
            alias: "15"
        }, n[i.time_7] = {
            eventKey: "times",
            eventValue: "time_7",
            info: lang.index60eed_308,
            onlyOne: !0,
            alias: "16"
        }, n[i.time_10] = {
            eventKey: "times",
            eventValue: "time_10",
            info: lang.index60eed_309,
            onlyOne: !0,
            alias: "17"
        }, n[i.time_12] = {
            eventKey: "times",
            eventValue: "time_12",
            info: lang.index60eed_310,
            onlyOne: !0,
            alias: "18"
        }, n[i.time_15] = {
            eventKey: "times",
            eventValue: "time_15",
            info: lang.index60eed_311,
            onlyOne: !0,
            alias: "19"
        }, n[i.time_20] = {
            eventKey: "times",
            eventValue: "time_20",
            info: lang.index60eed_312,
            onlyOne: !0,
            alias: "20"
        }, n[i.dau] = {
            eventKey: "dau",
            eventValue: "dau",
            info: lang.index60eed_313,
            onlyOne: !0
        }, n[i.lv_sunsupply_x_y] = {
            eventKey: "iaa",
            eventValue: "lv_sunsupply_",
            info: lang.index60eed_314,
            onlyOne: !0,
            alias: "21"
        }, n[i.lv_lvskill_x_y] = {
            eventKey: "iaa",
            eventValue: "lv_lvskill_",
            info: lang.index60eed_315,
            onlyOne: !0,
            alias: "22"
        }, n[i.lv_superplant_x_show] = {
            eventKey: "iaa",
            eventValue: "lv_superplant_show_",
            info: lang.index60eed_316,
            onlyOne: !1
        }, n[i.lv_superplant_x_get] = {
            eventKey: "iaa",
            eventValue: "lv_superplant_get_",
            info: lang.index60eed_317,
            onlyOne: !1
        }, n[i.lv_plantprobation_x_y] = {
            eventKey: "iaa",
            eventValue: "lv_plantprobation_",
            info: lang.index60eed_318,
            onlyOne: !1
        }, n[i.lv_addplant_x_y] = {
            eventKey: "iaa",
            eventValue: "lv_addplant_",
            info: lang.index60eed_319,
            onlyOne: !1
        }, n[i.shop_normalplant] = {
            eventKey: "iaa",
            eventValue: "shop_normalplant",
            info: lang.index60eed_320,
            onlyOne: !1
        }, n[i.develop_coin] = {
            eventKey: "iaa",
            eventValue: "develop_coin",
            info: lang.index60eed_321,
            onlyOne: !1
        }, n[i.shop_legendshop_X] = {
            eventKey: "iaa",
            eventValue: "shop_legendshop_",
            info: lang.index60eed_322,
            onlyOne: !1
        }, n[i.sign_X] = {
            eventKey: "iaa",
            eventValue: "sign_",
            info: lang.index60eed_323,
            onlyOne: !0,
            alias: "23"
        }, n[i.sign_double_X] = {
            eventKey: "iaa",
            eventValue: "sign_double_",
            info: lang.index60eed_324,
            onlyOne: !0,
            alias: "24"
        }, n[i.plantbox_show_X] = {
            eventKey: "iaa",
            eventValue: "plantbox_show_",
            info: lang.index60eed_325,
            onlyOne: !1
        }, n[i.plantbox_get_X] = {
            eventKey: "iaa",
            eventValue: "plantbox_get_",
            info: lang.index60eed_326,
            onlyOne: !1
        }, n[i.summer_unlock_X] = {
            eventKey: "iaa",
            eventValue: "summer_unlock_",
            info: lang.index60eed_327,
            onlyOne: !0,
            alias: "25"
        }, n[i.summer_get_X] = {
            eventKey: "iaa",
            eventValue: "summer_get_",
            info: lang.index60eed_328,
            onlyOne: !0,
            alias: "26"
        }, n[i.summer_doubleget_X] = {
            eventKey: "iaa",
            eventValue: "summer_doubleget_",
            info: lang.index60eed_329,
            onlyOne: !0,
            alias: "27"
        }, n[i.develop_coin_X] = {
            eventKey: "iaa",
            eventValue: "develop_coin_",
            info: lang.index60eed_330,
            onlyOne: !0,
            alias: "28"
        }, n[i.develop_gem_X] = {
            eventKey: "iaa",
            eventValue: "develop_gem_",
            info: lang.index60eed_331,
            onlyOne: !0,
            alias: "29"
        }, n[i.develop_coin_X_Y] = {
            eventKey: "iaa",
            eventValue: "develop_coin_",
            info: lang.index60eed_332,
            onlyOne: !0,
            alias: "30"
        }, n[i.develop_gem_X_Y] = {
            eventKey: "iaa",
            eventValue: "develop_gem_",
            info: lang.index60eed_333,
            onlyOne: !0,
            alias: "31"
        }, n[i.shop_X] = {
            eventKey: "iaa",
            eventValue: "shop_",
            info: lang.index60eed_334,
            onlyOne: !1
        }, n[i.plant_levelup_X] = {
            eventKey: "iaa",
            eventValue: "plant_levelup_",
            info: lang.index60eed_335,
            onlyOne: !0,
            alias: "32"
        }, n[i.shop_legendshop_lv_X] = {
            eventKey: "iaa",
            eventValue: "shop_legendshop_lv_",
            info: lang.index60eed_336,
            onlyOne: !1
        }, n[i.lv_book_X] = {
            eventKey: "iaa",
            eventValue: "lv_book_",
            info: lang.index60eed_337,
            onlyOne: !1
        }, n[i.room_X] = {
            eventKey: "iaa",
            eventValue: "room_",
            info: lang.index60eed_338,
            onlyOne: !0,
            alias: "33"
        }, n[i.lv_room_X_Y] = {
            eventKey: "iaa",
            eventValue: "lv_room_",
            info: lang.index60eed_339,
            onlyOne: !0,
            alias: "34"
        }, n[i.equip_merge] = {
            eventKey: "iaa",
            eventValue: "equip_merge",
            info: lang.index60eed_340,
            onlyOne: !1
        }, n[i.equip_quickmerge] = {
            eventKey: "iaa",
            eventValue: "equip_quickmerge",
            info: lang.index60eed_341,
            onlyOne: !1
        }, n[i.equip_X] = {
            eventKey: "iaa",
            eventValue: "equip_",
            info: lang.index60eed_342,
            onlyOne: !0,
            alias: "60",
            maxNum: 6
        }, n[i.equip_lv_X] = {
            eventKey: "iaa",
            eventValue: "equip_lv_",
            info: lang.index60eed_343,
            onlyOne: !0,
            alias: "61"
        }, n[i.lv_equip_X] = {
            eventKey: "iaa",
            eventValue: "lv_equip_",
            info: lang.index60eed_344,
            onlyOne: !1,
            alias: "62"
        }, n[i.shop_normalequip] = {
            eventKey: "iaa",
            eventValue: "shop_normalequip",
            info: lang.index60eed_345,
            onlyOne: !1
        }, n[i.shop_equip_X] = {
            eventKey: "iaa",
            eventValue: "shop_equip_",
            info: lang.index60eed_346,
            onlyOne: !1
        }, n[i.retention_1] = {
            eventKey: "retention",
            eventValue: "retention_1",
            info: lang.index60eed_347,
            onlyOne: !0,
            alias: "35"
        }, n[i.retention_2] = {
            eventKey: "retention",
            eventValue: "retention_2",
            info: lang.index60eed_348,
            onlyOne: !0,
            alias: "36"
        }, n[i.retention_3] = {
            eventKey: "retention",
            eventValue: "retention_3",
            info: lang.index60eed_349,
            onlyOne: !0,
            alias: "37"
        }, n[i.retention_4] = {
            eventKey: "retention",
            eventValue: "retention_4",
            info: lang.index60eed_350,
            onlyOne: !0,
            alias: "38"
        }, n[i.retention_5] = {
            eventKey: "retention",
            eventValue: "retention_5",
            info: lang.index60eed_351,
            onlyOne: !0,
            alias: "39"
        }, n[i.retention_6] = {
            eventKey: "retention",
            eventValue: "retention_6",
            info: lang.index60eed_352,
            onlyOne: !0,
            alias: "40"
        }, n[i.retention_7] = {
            eventKey: "retention",
            eventValue: "retention_7",
            info: lang.index60eed_353,
            onlyOne: !0,
            alias: "41"
        }, n[i.desktopadd] = {
            eventKey: "retention",
            eventValue: "desktopadd",
            info: lang.index60eed_354,
            onlyOne: !0,
            alias: "42"
        }, n[i.dayz_start_x] = {
            eventKey: "dayz",
            eventValue: "dayz_start_",
            info: lang.index60eed_355,
            onlyOne: !0,
            alias: "43"
        }, n[i.dayz_finish_x] = {
            eventKey: "dayz",
            eventValue: "dayz_finish_",
            info: lang.index60eed_356,
            onlyOne: !0,
            alias: "44"
        }, n[i.dayz_win_x] = {
            eventKey: "dayz",
            eventValue: "dayz_win_",
            info: lang.index60eed_357,
            onlyOne: !0,
            alias: "45"
        }, n[i.dayz_fail_x] = {
            eventKey: "dayz",
            eventValue: "dayz_fail_",
            info: lang.index60eed_358,
            onlyOne: !0,
            alias: "46"
        }, n[i.dayz_gem] = {
            eventKey: "dayz",
            eventValue: "dayz_gem",
            info: lang.index60eed_359,
            onlyOne: !1
        }, n[i.dayz_coin] = {
            eventKey: "dayz",
            eventValue: "dayz_coin",
            info: lang.index60eed_360,
            onlyOne: !1
        }, n[i.dayz_shop] = {
            eventKey: "dayz",
            eventValue: "dayz_shop",
            info: lang.index60eed_361,
            onlyOne: !1
        }, n[i.dayz_sunsupply] = {
            eventKey: "dayz",
            eventValue: "dayz_sunsupply",
            info: lang.index60eed_362,
            onlyOne: !1
        }, n[i.dayz_lvskill] = {
            eventKey: "dayz",
            eventValue: "dayz_lvskill",
            info: lang.index60eed_363,
            onlyOne: !1
        }, n[i.dayz_develop] = {
            eventKey: "dayz",
            eventValue: "dayz_develop",
            info: lang.index60eed_364,
            onlyOne: !1
        }, n[i.dayz_plantprobation] = {
            eventKey: "dayz",
            eventValue: "dayz_plantprobation",
            info: lang.index60eed_365,
            onlyOne: !1
        }, n[i.dayz_addplant] = {
            eventKey: "dayz",
            eventValue: "dayz_addplant",
            info: lang.index60eed_366,
            onlyOne: !1
        }, n[i.dayz_superplant] = {
            eventKey: "dayz",
            eventValue: "dayz_superplant",
            info: lang.index60eed_367,
            onlyOne: !1
        }, n[i.dayz_doublegem] = {
            eventKey: "dayz",
            eventValue: "dayz_doublegem",
            info: lang.index60eed_368,
            onlyOne: !1
        }, n[i.dayz_legendshop] = {
            eventKey: "dayz",
            eventValue: "dayz_legendshop",
            info: lang.index60eed_369,
            onlyOne: !1
        }, n[i.dayz_box] = {
            eventKey: "dayz",
            eventValue: "dayz_box",
            info: lang.index60eed_370,
            onlyOne: !1
        },n[i.dayz_sign] = {
            eventKey: "dayz",
            eventValue: "dayz_sign",
            info: lang.index60eed_371,
            onlyOne: !1
        },n[i.dayz_plantbox] = {
            eventKey: "dayz",
            eventValue: "dayz_plantbox",
            info: lang.index60eed_372,
            onlyOne: !1
        },n[i.dayz_summerget] = {
            eventKey: "dayz",
            eventValue: "dayz_summerget",
            info: lang.index60eed_373,
            onlyOne: !1
        },n[i.dayz_lv_sunsupply_x_y] = {
            eventKey: "dayz",
            eventValue: "dayz_lv_sunsupply_",
            info: lang.index60eed_374,
            onlyOne: !0,
            alias: "47"
        },n[i.dayz_lv_lvskill_x_y] = {
            eventKey: "dayz",
            eventValue: "dayz_lv_lvskill_",
            info: lang.index60eed_375,
            onlyOne: !0,
            alias: "48"
        },n[i.dayz_lv_superplant_x_show] = {
            eventKey: "dayz",
            eventValue: "dayz_lv_superplant_show_",
            info: lang.index60eed_376,
            onlyOne: !1
        },n[i.dayz_lv_superplant_x_get] = {
            eventKey: "dayz",
            eventValue: "dayz_lv_superplant_get_",
            info: lang.index60eed_377,
            onlyOne: !1
        },n[i.dayz_shop_normalplant] = {
            eventKey: "dayz",
            eventValue: "dayz_shop_normalplant",
            info: lang.index60eed_378,
            onlyOne: !1
        },n[i.dayz_develop_coin] = {
            eventKey: "dayz",
            eventValue: "dayz_develop_coin",
            info: lang.index60eed_379,
            onlyOne: !1
        },n[i.dayz_shop_legendshop_X] = {
            eventKey: "dayz",
            eventValue: "dayz_shop_legendshop_",
            info: lang.index60eed_380,
            onlyOne: !1
        },n[i.dayz_sign_X] = {
            eventKey: "dayz",
            eventValue: "dayz_sign_",
            info: lang.index60eed_381,
            onlyOne: !0,
            alias: "49"
        },n[i.dayz_sign_double_X] = {
            eventKey: "dayz",
            eventValue: "dayz_sign_double_",
            info: lang.index60eed_382,
            onlyOne: !0,
            alias: "50"
        },n[i.dayz_summer_unlock_X] = {
            eventKey: "dayz",
            eventValue: "dayz_summer_unlock_",
            info: lang.index60eed_383,
            onlyOne: !0,
            alias: "51"
        },n[i.dayz_summer_get_X] = {
            eventKey: "dayz",
            eventValue: "dayz_summer_get_",
            info: lang.index60eed_384,
            onlyOne: !0,
            alias: "52"
        },n[i.dayz_summer_doubleget_X] = {
            eventKey: "dayz",
            eventValue: "dayz_summer_doubleget_",
            info: lang.index60eed_385,
            onlyOne: !0,
            alias: "53"
        },n[i.dayz_lv_start_X] = {
            eventKey: "dayz",
            eventValue: "dayz_lv_start_",
            info: lang.index60eed_386,
            onlyOne: !1
        },n[i.dayz_lv_finish_X] = {
            eventKey: "dayz",
            eventValue: "dayz_lv_finish_",
            info: lang.index60eed_387,
            onlyOne: !1
        },n[i.follow] = {
            eventKey: "retention",
            eventValue: "follow",
            info: lang.index60eed_388,
            onlyOne: !0,
            alias: "54"
        },n[i.subscribe] = {
            eventKey: "retention",
            eventValue: "subscribe",
            info: lang.index60eed_389,
            onlyOne: !0,
            alias: "56"
        },n[i.gift] = {
            eventKey: "retention",
            eventValue: "gift",
            info: lang.index60eed_390,
            onlyOne: !0,
            alias: "63"
        },n[i.open_id_reward_index] = {
            eventKey: "feed",
            eventValue: "open_id_reward_index=",
            info: lang.index60eed_391,
            onlyOne: !0,
            alias: "55"
        },n), cc._RF.pop()
    }, {}],
    TrackData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "9c631X3YHpLT4DJJ6t4c0QE", "TrackData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.TrackData = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../../framework/base/BasePlatform"),
            s = t("../../framework/manager/PlatformManager"), c = t("../../framework/manager/SdkMgr"),
            l = t("../../framework/utils/TimeUtils"), u = t("../../framework/utils/Utils"), p = t("../config/Config"),
            d = t("../manager/PlayerMgr"), h = t("./TrackDataEvent"), g = function () {
                this.abName = null, this.dynamicAbName = null, this.isGet = !1, this.versionName = null, this.appStore = 0, this.isCONVER = 0, this.data = {}
            }, f = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ecrypt = !1, e.gameKey = p.GameConfig.AppCacheName + "trackdata", e.eventCF = {}, e
                }

                return i(e, t), e.prototype.createData = function () {
                    return this.data = new g, this.data.versionName = this.getVersionConf(), this.saveData(), this.data
                }, e.prototype.initData = function () {
                    if (this.eventCF = h.EventCF, null == this.data.isCONVER || 0 == this.data.isCONVER) {
                        for (var t in this.clearData(), this.data.data || (this.data.data = {}), this.data) for (var e in this.eventCF) {
                            var a = this.eventCF[e].eventKey + this.eventCF[e].eventValue;
                            this.eventCF[e].alias && (this.eventCF[e].eventValue.includes("dayz") && -1 != t.indexOf(this.eventCF[e].eventValue.replace("dayz", "")) ? (this.data[t.replace(this.eventCF[e].eventValue.replace("dayz", ""), this.eventCF[e].alias + "_")] = this.data[t], delete this.data[t]) : -1 != t.indexOf(a) && (this.data[t.replace(a, this.eventCF[e].alias + "_")] = this.data[t], delete this.data[t]))
                        }
                        this.data.isCONVER = 1, this.saveData()
                    }
                }, e.prototype.getVersionName = function () {
                    return this.data.versionName ? this.data.versionName : this.getVersionConf()
                }, e.prototype.getVersionConf = function () {
                    var t = s.UM_VERSION.versionName, e = c.SdkMgr.getInstance().getSwitchVersion(t);
                    return e || (e = "1.0.0"), String(e)
                }, e.prototype.getSdkAbName = function (t, e) {
                    var a = this;
                    this.data.isGet = !1, null != this.data.abName && this.data.isGet ? e && e(this.data.abName) : this.requestAbName(t, function (t) {
                        a.data.isGet = !0, a.data.abName = null == t ? "C" : t, e && e(a.data.abName), a.saveData()
                    })
                }, e.prototype.setToAppStore = function () {
                    this.data.appStore = 1, this.saveData(0 == this.data.isCONVER)
                }, e.prototype.getToAppStore = function () {
                    return 1 == this.data.appStore
                }, e.prototype.getAbType = function () {
                    return this.data.abName ? this.data.abName : "C"
                }, e.prototype.getDynamicAbType = function () {
                    return this.data.dynamicAbName ? this.data.dynamicAbName : "C"
                }, e.prototype.requestAbName = function (t, e) {
                    var a = this;
                    if (console.log("requestAbName===========", t, this.abTestUser), t == d.ABTestType.NO_AB && (this.abTestUser = "C"), s.PlatformManager.currentPlatform == r.Platform.EDITOR) {
                        var n = window.location.href.split("?abType=");
                        n.length > 1 ? (this.abTestUser = n[n.length - 1], this.data.dynamicAbName = n[n.length - 1]) : function (t) {
                            var e = ["C"], n = null;
                            if (1 == t ? e = ["A", "B", "D"] : 2 == t ? e = ["A"] : 3 == t ? e = ["B"] : 4 == t ? e = ["D"] : 5 == t ? e = ["A", "B"] : 6 == t ? e = ["A", "D"] : 7 == t ? e = ["B", "D"] : 8 == t ? (e = ["A"], n = ["A"]) : 9 == t ? (e = ["B"], n = ["B"]) : 10 == t ? (e = ["D"], n = ["D"]) : e = ["C"], null == a.data.abName) {
                                var i = e[Math.floor(Math.random() * e.length)];
                                a.abTestUser = i, a.data.dynamicAbName = i
                            } else n ? a.data.dynamicAbName = n[Math.floor(Math.random() * n.length)] : null == a.data.dynamicAbName && (a.data.dynamicAbName = a.data.abName), a.abTestUser = a.data.abName
                        }(u.Utils.randomRang(1, 2))
                    }
                    t == d.ABTestType.A_fixed ? this.abTestUser = "A" : t == d.ABTestType.B_fixed ? this.abTestUser = "B" : t == d.ABTestType.D_fixed && (this.abTestUser = "D"), s.PlatformManager.currentPlatform != r.Platform.WEB_LINK && s.PlatformManager.currentPlatform != r.Platform.EDITOR && s.PlatformManager.currentPlatform != r.Platform.VIVO && s.PlatformManager.currentPlatform != r.Platform.OPPO && s.PlatformManager.currentPlatform != r.Platform.ANDROID_4399 || (this.abTestUser = "B"), this.abTestUser ? e && e(this.abTestUser) : e(this.abTestUser)
                }, e.prototype.youmengTrack = function (t, e, a, n) {
                    var i = this.eventCF[t], o = !0, r = i.eventValue, c = i.eventKey, u = i.alias + "_";
                    if ("dayz" == i.eventKey) {
                        if (e) {
                            c = "day" + e;
                            var p = "day" + e;
                            r = r.replace("dayz", p)
                        }
                        a && (r += a, u && (u += a)), n && (r = r + "_" + n, u && (u = u + "_" + n))
                    } else e && (r += e, u && (u += e)), a && (r = r + "_" + a, u && (u = u + "_" + a));
                    if (!i.condition || !this.data[i.condition]) {
                        if (i.preEvent && !e) {
                            if (!this.data[i.preEvent]) return
                        } else if (i.preEvent && e && !this.data[i.preEvent + e]) return;
                        if (i.onlyOne && this.data[u] && (o = !1), !(o && i.saveKey && this.data[c + i.eventValue])) {
                            if (t == h.TrackId.dau) {
                                var d = this.data[c + i.eventValue];
                                if (d) {
                                    var g = Number(d);
                                    if (l.TimeUtils.compareIsToday(g)) return;
                                    o = !0
                                } else o = !0
                            }
                            if (o) {
                                if (i.maxNum) {
                                    var f = this.data[c + i.eventValue], m = this.data[u];
                                    if (f ? f++ : f = 1, m ? m++ : m = 1, f >= i.maxNum + 1) return;
                                    i.saveKey ? this.data[c + i.eventValue] = f : (this.data[c + i.eventValue] = f, this.data[u] = m), this.saveData(0 == this.data.isCONVER)
                                } else i.onlyOne && (i.saveKey ? this.data[c + i.eventValue] = 1 : this.data[u] = 1, t == h.TrackId.dau && (this.data[c + i.eventValue] = l.TimeUtils.GetTimeBySecond()), this.saveData());
                                this.data.abName || (this.data.abName = "C", this.saveData(0 == this.data.isCONVER)), s.PlatformManager.getInstance().youmengTrack(c, "user" + this.data.abName, this.getVersionName() + "_" + r, i.info)
                            }
                        }
                    }
                }, e.prototype.trackDayz = function (t, e, a) {
                    var n = this.eventCF[t], i = !0, o = n.eventValue, r = n.eventKey, c = n.alias + "_";
                    if ("dayz" == n.eventKey) {
                        if (e) {
                            r = "day" + e;
                            var l = "day" + e;
                            o = o.replace("dayz", l)
                        }
                        a && (o += a, c += a)
                    }
                    if (!n.condition || !this.data[n.condition]) {
                        if (n.preEvent && !e) {
                            if (!this.data[n.preEvent]) return
                        } else if (n.preEvent && e && !this.data[n.preEvent + e]) return;
                        if (n.onlyOne && this.data[c] && (i = !1), !(i && n.saveKey && this.data[r + n.eventValue]) && i) {
                            if (n.maxNum) {
                                var u = this.data[r + n.eventValue], p = this.data[r + o];
                                if (u ? u++ : u = 1, p ? p++ : p = 1, u >= n.maxNum + 1) return;
                                n.saveKey ? this.data[c] = u : (this.data[c] = u, this.data[c] = p), this.saveData(0 == this.data.isCONVER)
                            } else n.onlyOne && (n.saveKey, this.data[c] = 1, this.saveData());
                            this.data.abName || (this.data.abName = "C", this.saveData(0 == this.data.isCONVER)), s.PlatformManager.getInstance().youmengTrack(r, "user" + this.data.abName, this.getVersionName() + "_" + o, n.info)
                        }
                    }
                }, e
            }(o.BaseData);
        a.TrackData = f, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/utils/TimeUtils": "TimeUtils",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../manager/PlayerMgr": "PlayerMgr",
        "./TrackDataEvent": "TrackDataEvent"
    }],
    TranstaLabel: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "67db1C8o05AUKGTeZFpIrDv", "TranstaLabel");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../manager/LanguageMgr"), s = cc._decorator, c = s.ccclass, l = (s.property, function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.onLoad = function () {
                var t = this.node.getComponent(cc.Label);
                if (t) t.string = r.LanguageMgr.getInstance().T(t.string); else {
                    var e = this.node.getComponent(cc.RichText);
                    e && (e.string = r.LanguageMgr.getInstance().T(e.string))
                }
            }, e.prototype.refresh = function () {
                var t = this.node.getComponent(cc.Label);
                if (t) t.string = r.LanguageMgr.getInstance().T(t.string); else {
                    var e = this.node.getComponent(cc.RichText);
                    e && (e.string = r.LanguageMgr.getInstance().T(e.string))
                }
            }, o([c], e)
        }(cc.Component));
        a.default = l, cc._RF.pop()
    }, {"../manager/LanguageMgr": "LanguageMgr"}],
    TranstanImg: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "5bc64LzzcZE9b4RqZBUBYjc", "TranstanImg");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../configs/Appcfg"), s = t("../manager/LanguageMgr"), c = cc._decorator, l = c.ccclass,
            u = c.property, p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.en = null, e.jp = null, e.fz = null, e
                }

                return i(e, t), e.prototype.start = function () {
                    this.en && (this.en.active = !1), this.jp && (this.jp.active = !1), this.fz && (this.fz.active = !1);
                    var t = this.node.getComponent(cc.Sprite);
                    s.LanguageMgr.getInstance().getCurrentLanguage() == r.LanguageType.en ? (this.en.active = !0, t && (t.spriteFrame = null)) : s.LanguageMgr.getInstance().getCurrentLanguage() == r.LanguageType.jp ? (this.jp.active = !0, t && (t.spriteFrame = null)) : s.LanguageMgr.getInstance().getCurrentLanguage() == r.LanguageType.zh_tw && this.fz && t && (this.fz.active = !0, t.spriteFrame = null)
                }, o([u({type: cc.Node, tooltip: lang.index60eed_392})], e.prototype, "en", void 0), o([u({
                    type: cc.Node,
                    tooltip: lang.index60eed_393
                })], e.prototype, "jp", void 0), o([u({
                    type: cc.Node,
                    tooltip: lang.index60eed_394
                })], e.prototype, "fz", void 0), o([l], e)
            }(cc.Component);
        a.default = p, cc._RF.pop()
    }, {"../configs/Appcfg": "Appcfg", "../manager/LanguageMgr": "LanguageMgr"}],
    TweenMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "e0af6vJW8VNUp73n+Lz+E7o", "TweenMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.TweenMgr = void 0;
        var n = function () {
            function t() {
                this.twenMap = new Map
            }

            return t.getInstance = function () {
                return null == this.instance && (this.instance = new t), this.instance
            }, t.prototype.getTween = function (t) {
                this.twenMap.has(t.uuid) && this.stopTween(t);
                var e = cc.tween(t);
                return this.twenMap.set(t.uuid, e), e
            }, t.prototype.stopTween = function (t) {
                this.twenMap.has(t.uuid) && (this.twenMap.get(t.uuid).stop(), this.twenMap.delete(t.uuid))
            }, t.prototype.playHeartAni = function (t) {
                var e = this.getTween(t);
                this.heartani(e)
            }, t.prototype.heartani = function (t) {
                t.to(.3, {scale: 1.04}).to(.2, {scale: .98}).delay(.4).to(.1, {scale: 1.05}).to(.2, {scale: .95}).union().repeatForever().start()
            }, t.prototype.popOpenAin = function (t, e) {
                t.to(.1, {scale: .9}).to(.05, {scale: 1.1}).to(.1, {scale: 1}).call(function () {
                    e && e()
                }).start()
            }, t.prototype.popCloseAin = function (t, e) {
                t.stop(), t.to(.1, {scale: 0}).call(function () {
                    e && e()
                }).start()
            }, t.prototype.stampAni = function (t) {
                t.scale = t.scale + 1, cc.tween(t).to(.2, {scale: 1}).start()
            }, t.prototype.anglesAni = function (t, e) {
                void 0 === e && (e = 1);
                var a = this.getTween(t);
                a.by(.5, {angle: 20}).by(.5, {angle: -20}).delay(.5).by(.2, {angle: 10}).by(.2, {angle: -10}).delay(.1).union(), -1 == e ? a.repeatForever() : a.repeat(e), a.start()
            }, t.prototype.jumpAniForever = function (t, e) {
                void 0 === e && (e = .2);
                var a = this.getTween(t);
                a.by(.2, {position: new cc.Vec3(0, -10, 0)}).by(.2, {position: new cc.Vec3(0, 10, 0)}).delay(e).union().repeatForever(), a.start()
            }, t.prototype.sharkAni = function (t, e) {
                void 0 === e && (e = 1);
                var a = this.getTween(t);
                a.by(.01, {position: new cc.Vec3(2, 2, 0)}).by(.01, {position: new cc.Vec3(-2, -2, 0)}).union(), -1 == e ? a.repeatForever() : a.repeat(e), a.start()
            }, t
        }();
        a.TweenMgr = n, cc._RF.pop()
    }, {}],
    UIAgainAward: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "3f3a0fxWQJEWJE5Rg+KrEv7", "UIAgainAward");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/manager/AudioMgr"), c = t("../config/Config"),
            l = t("../manager/EquipMgr"), u = t("../manager/PlayerMgr"), p = cc._decorator, d = p.ccclass,
            h = p.property, g = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.getAward = null, e.showGet = null, e.show = null, e.debrisGet = null, e.nodeEquip = null, e.eqIcon = null, e.eqInten = null, e.eqName = null, e.valueChange = null, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    this.userData = u.PlayerMgr.getInstance().getUserData(), this.plantData = this.userData.getPlantData(), this.lockData = u.PlayerMgr.getInstance().getLockData(), this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        t.closeUI(), t.cb && t.cb()
                    }), this.changeRoot()
                }, e.prototype.changeRoot = function () {
                    switch (s.AudioMgr.getInstance().playEffect(c.AudioId.getAward), this.light = this.getAward.getChildByName("light"), l.EquipMgr.getInstance().changeEquipSp(this.nodeEquip.node, this.synCfg), this.eqName.string = this.synCfg.Name, this.synCfg.BottomFrame) {
                        case"zw_zb_zbk1_1":
                            this.eqName.node.color = cc.color().fromHEX("#fffdf7");
                            break;
                        case"zw_zb_zbk2_1":
                            this.eqName.node.color = cc.color().fromHEX("#56ff4e");
                            break;
                        case"zw_zb_zbk3_1":
                            this.eqName.node.color = cc.color().fromHEX("#46f0ff");
                            break;
                        case"zw_zb_zbk4_1":
                            this.eqName.node.color = cc.color().fromHEX("#fb85ff");
                            break;
                        case"zw_zb_zbk5_1":
                            this.eqName.node.color = cc.color().fromHEX("#ff9333")
                    }
                    var t = cc.instantiate(this.valueChange.children[0]);
                    this.valueChange.destroyAllChildren();
                    for (var e = 0; e < 5;) for (var a = e; a < 5; a++) switch (a) {
                        case 0:
                            if (this.synCfg.Attack) {
                                var n = cc.instantiate(t);
                                this.changeVlaue(n, a)
                            }
                            e = 1;
                            break;
                        case 1:
                            this.synCfg.Speed && (n = cc.instantiate(t), this.changeVlaue(n, a)), e = 2;
                            break;
                        case 2:
                            this.synCfg.Crit && (n = cc.instantiate(t), this.changeVlaue(n, a)), e = 3;
                            break;
                        case 3:
                            this.synCfg.CritDam && (n = cc.instantiate(t), this.changeVlaue(n, a)), e = 4;
                            break;
                        case 4:
                            this.synCfg.Continuous && (n = cc.instantiate(t), this.changeVlaue(n, a)), e = 5
                    }
                }, e.prototype.changeVlaue = function (t, e) {
                    switch (e) {
                        case 0:
                            t.children[0].getComponent(cc.Label).string = lang.index60eed_395, t.children[0].getComponent(cc.Label).string += this.oldCfg.Attack, t.children[2].getComponent(cc.Label).string = this.synCfg.Attack + "";
                            break;
                        case 1:
                            t.children[0].getComponent(cc.Label).string = lang.index60eed_396, t.children[0].getComponent(cc.Label).string += (100 * this.oldCfg.Speed).toFixed(0) + "%", t.children[2].getComponent(cc.Label).string = (100 * this.synCfg.Speed).toFixed(0) + "%";
                            break;
                        case 2:
                            t.children[0].getComponent(cc.Label).string = lang.index60eed_397, t.children[0].getComponent(cc.Label).string += (100 * this.oldCfg.Crit).toFixed(0) + "%", t.children[2].getComponent(cc.Label).string = (100 * this.synCfg.Crit).toFixed(0) + "%";
                            break;
                        case 3:
                            t.children[0].getComponent(cc.Label).string = lang.index60eed_398, t.children[0].getComponent(cc.Label).string += (100 * this.oldCfg.CritDam).toFixed(0) + "%", t.children[2].getComponent(cc.Label).string = (100 * this.synCfg.CritDam).toFixed(0) + "%";
                            break;
                        case 4:
                            t.children[0].getComponent(cc.Label).string = lang.index60eed_399, t.children[0].getComponent(cc.Label).string += (100 * this.oldCfg.Continuous).toFixed(0) + "%", t.children[2].getComponent(cc.Label).string = (100 * this.synCfg.Continuous).toFixed(0) + "%"
                    }
                    this.valueChange.addChild(t)
                }, e.prototype.init = function (t, e, a) {
                    this.synCfg = t, this.oldCfg = e, this.cb = a
                }, e.prototype.update = function (t) {
                    this.light.angle += 10 * t, this.node.getChildByName("bg").opacity = 230
                }, o([h({
                    type: cc.Node,
                    tooltip: lang.index60eed_400
                })], e.prototype, "getAward", void 0), o([h({
                    type: cc.Node,
                    tooltip: lang.index60eed_401
                })], e.prototype, "showGet", void 0), o([h({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_402
                })], e.prototype, "show", void 0), o([h({
                    type: cc.Node,
                    tooltip: lang.index60eed_403
                })], e.prototype, "debrisGet", void 0), o([h({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_404
                })], e.prototype, "nodeEquip", void 0), o([h({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_405
                })], e.prototype, "eqIcon", void 0), o([h({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_406
                })], e.prototype, "eqInten", void 0), o([h({
                    type: cc.Label,
                    tooltip: lang.index60eed_407
                })], e.prototype, "eqName", void 0), o([h({
                    type: cc.Node,
                    tooltip: lang.index60eed_408
                })], e.prototype, "valueChange", void 0), o([d], e)
            }(r.default);
        a.default = g, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../config/Config": "Config",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIAward: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "42f56Rj8GVOgLCoB4MAqJDB", "UIAward");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../commonModel/config/CommonCfg"), s = t("../../framework/base/BasePlatform"),
            c = t("../../framework/base/BaseUI"), l = t("../../framework/manager/AudioMgr"),
            u = t("../../framework/manager/PlatformManager"), p = t("../../framework/manager/SdkMgr"),
            d = t("../../framework/utils/UIUtils"), h = t("../../framework/utils/Utils"), g = t("../config/Config"),
            f = t("../global/Global"), m = t("../manager/DataMgr"), y = t("../manager/EquipMgr"),
            v = t("../manager/PlayerMgr"), I = cc._decorator, _ = I.ccclass, b = I.property, C = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.root = null, e.lottery = null, e.lotteryShow = null, e.common = null, e.golden = null, e.show = null, e.debrisGet = null, e.showLevelUp = null, e.valueChange = null, e.tagSprite = null, e.fontArr = [], e.tagArr = [], e.topArr = [], e.NodeEquip = null, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    this.userData = v.PlayerMgr.getInstance().getUserData(), this.plantData = this.userData.getPlantData(), this.lockData = v.PlayerMgr.getInstance().getLockData(), this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        t.closeUI(), t.cb && t.cb(!1)
                    }), this.changeRoot()
                }, e.prototype.changeRoot = function () {
                    var t = this;
                    if (this.nowTip == g.TipType.lottery) {
                        if (l.AudioMgr.getInstance().playEffect(g.AudioId.getAward), this.data1 = this.data1, this.data2 = this.data2, this.root.getChildByName("getAward").active = !0, this.root.getChildByName("levelUp").active = !1, this.light = this.root.getChildByName("getAward").getChildByName("light"), !this.data1.LibraryID || this.data1.LibraryID < 8e4) {
                            if (null != this.data2 && this.data2.lotteryId < 2) {
                                var e = m.DataMgr.getInstance().getAllDrawCardCfg();
                                if (this.lottery.children[0].getChildByName("consumeNum").getChildByName("cost").getComponent(cc.Label).string = e[0].Consume.split(",")[1], this.node.getChildByName("downLabel").x = 480, this.data2.lotteryId < 2) {
                                    this.lottery.children[this.data2.lotteryId].active = !0;
                                    var a = this.data2.lotteryNum > 0 ? this.data2.lotteryNum + "" : lang.index60eed_409;
                                    this.lottery.children[this.data2.lotteryId].getChildByName("lotteryNum").getComponent(cc.RichText).string = "<outline color = #3d240a width =4><color=#46f701><size=72>" + a + "</color></outline>"
                                }
                            } else this.node.getChildByName("downLabel").x = 0;
                            var n = m.DataMgr.getInstance().getItemCfgById(this.data1.Reward),
                                i = m.DataMgr.getInstance().getHeroCfgById(n.HeroID);
                            this.loadResFromBundle(i.BunleName, i.Model + "/" + i.Model, sp.SkeletonData, function (e) {
                                t.root.getChildByName("getAward").getComponentInChildren(sp.Skeleton).skeletonData = e, t.root.getChildByName("getAward").getComponentInChildren(sp.Skeleton).setAnimation(0, "idle", !0), lang.index60eed_410 == i.Name && t.root.getChildByName("getAward").getComponentInChildren(sp.Skeleton).setSkin("skin_1")
                            }), p.SdkMgr.getInstance().getCheckVersion(u.SwitchID.ShenHe) && u.APPMgr.currentApp == s.AppName.Invincible && (this.lottery.children[0].getChildByName("consumeNum").getChildByName("cost").getComponent(cc.Label).string = lang.index60eed_411);
                            var o = v.PlayerMgr.getInstance().getUserData(), c = "";
                            switch (n.type) {
                                case 2:
                                    o.setItemData(n.ItemId, this.data1.RewardNum), this.tagSprite.spriteFrame = this.tagArr[1], c = lang.index60eed_412 + this.data1.RewardNum + lang.index60eed_413;
                                    break;
                                case 3:
                                    if (!f.Global.needUnLock || this.lockData.getLockDataById(i.ID)) {
                                        var I = i.ChangeFragment.split(",");
                                        o.setItemData(Number(I[0]), Number(I[1]) * this.data1.RewardNum), this.tagSprite.spriteFrame = this.tagArr[0], c = lang.index60eed_414 + Number(I[1]) * this.data1.RewardNum + lang.index60eed_415
                                    } else this.tagSprite.spriteFrame = this.tagArr[2], this.lockData.setLockDataById(i.ID, !0), c = lang.index60eed_416
                            }
                            this.debrisGet.getChildByName("getLabel").getComponent(cc.Label).string = c, lang.index60eed_417 != c ? (this.debrisGet.getChildByName("debris").active = !0, this.loadSpriteFrame(n.bundleName, "" + n.rewardIcon + n.Icon, function (e) {
                                t.debrisGet.getChildByName("debris").getComponent(cc.Sprite).spriteFrame = e
                            })) : this.debrisGet.getChildByName("debris").active = !1, this.loadSpriteFrame("common", "zw_ty_pz" + i.Quality, function (e) {
                                t.lotteryShow.getChildByName("quality").getComponent(cc.Sprite).spriteFrame = e
                            });
                            var _ = void 0;
                            switch (i.Quality) {
                                case 1:
                                    _ = "#fffdf7";
                                    break;
                                case 3:
                                    _ = "#46f0ff";
                                    break;
                                case 4:
                                    _ = "#fb85ff";
                                    break;
                                case 5:
                                    _ = "#ff9333"
                            }
                            this.lotteryShow.getChildByName("name").color = cc.color().fromHEX(_), this.lotteryShow.getChildByName("name").getComponent(cc.Label).string = n.Name, this.lotteryShow.getChildByName("raceType").getComponent(cc.Label).string = d.UIUtils.getRaceType(i.RaceType)
                        } else {
                            e = m.DataMgr.getInstance().getAllDrawCardCfg(), this.lottery.children[0].getChildByName("consumeNum").getChildByName("cost").getComponent(cc.Label).string = e[4].Consume.split(",")[1], this.node.getChildByName("downLabel").x = 480, this.data2.lotteryId > 3 && (this.lottery.children[this.data2.lotteryId - 4].active = !0, a = this.data2.lotteryNum > 0 ? this.data2.lotteryNum + "" : lang.index60eed_418, this.lottery.children[this.data2.lotteryId - 4].getChildByName("lotteryNum").getComponent(cc.RichText).string = "<outline color = #3d240a width =4><color=#46f701><size=72>" + a + "</color></outline>", this.lottery.children[this.data2.lotteryId - 4].getChildByName("richText").getComponent(cc.RichText).string = 4 == this.data2.lotteryId ? lang.index60eed_419 : lang.index60eed_420, 4 == this.data2.lotteryId && (this.lottery.children[this.data2.lotteryId - 4].getChildByName("lotteryNum").x = -102, this.lottery.children[this.data2.lotteryId - 4].getChildByName("richText").x = 15));
                            var b = m.DataMgr.getInstance().getEquipCfgById(this.data1.Reward);
                            y.EquipMgr.getInstance().changeEquipSp(this.NodeEquip, b), y.EquipMgr.getInstance().addEquip(b.ID), _ = void 0, b.Quality <= h.Utils.cumsum(1) ? _ = "#fffdf7" : b.Quality <= h.Utils.cumsum(2) ? _ = "#56ff4e" : b.Quality <= h.Utils.cumsum(3) ? _ = "#46f0ff" : b.Quality <= h.Utils.cumsum(4) ? _ = "#fb85ff" : b.Quality <= h.Utils.cumsum(5) && (_ = "#ff9333"), this.lotteryShow.getChildByName("name").color = cc.color().fromHEX(_), this.lotteryShow.getChildByName("name").getComponent(cc.Label).string = b.Name, this.debrisGet.active = !1, this.lotteryShow.getChildByName("quality").active = !1, this.lotteryShow.getChildByName("raceType").active = !1
                        }
                        this.sendEvent(r.CommonEventName.GetRewardEnd), this.common.on(cc.Node.EventType.TOUCH_END, this.lottertBtnOn.bind(this)), this.golden.on(cc.Node.EventType.TOUCH_END, this.lottertBtnOn.bind(this))
                    } else if (l.AudioMgr.getInstance().playEffect(g.AudioId.levelUp), this.root.getChildByName("getAward").active = !1, this.root.getChildByName("levelUp").active = !0, this.light = this.root.getChildByName("levelUp").getChildByName("light"), this.node.getChildByName("downLabel").x = 0, this.nowTip == g.TipType.inborn) this.root.getChildByName("levelUp").getChildByName("labelSprite").getComponent(cc.Sprite).spriteFrame = this.topArr[0], this.data1 = this.data1, this.data2 = this.data2, this.show.getChildByName("sprite").active = !0, this.show.getChildByName("ske").active = !1, this.loadSpriteFrame("common", "" + this.data1.Icon, function (e) {
                        t.show.getChildByName("sprite").getComponent(cc.Sprite).spriteFrame = e
                    }), this.showLevelUp.children[0].getComponent(cc.Label).string = "Lv." + (this.data2 - 1), this.showLevelUp.children[2].getComponent(cc.Label).string = "Lv." + this.data2, this.valueChange.children.forEach(function (e, a) {
                        if (0 == a) {
                            e.active = !0, t.data1 = t.data1, t.data2 = t.data2, e.children[0].getComponent(cc.Label).string = h.Utils.StringFormat(t.data1.UpgradeDesc, t.data1.IncreasePerLevel * (t.data2 - 1));
                            var n = 21007 == t.data1.Id ? "" : "%";
                            e.children[2].getComponent(cc.Label).string = t.data1.IncreasePerLevel * t.data2 + n
                        } else e.active = !1
                    }); else if (this.nowTip == g.TipType.levelUp) {
                        this.root.getChildByName("levelUp").getChildByName("labelSprite").getComponent(cc.Sprite).spriteFrame = this.topArr[1], this.data1 = this.data1, this.data2 = this.data2, this.show.getChildByName("sprite").active = !1, this.show.getChildByName("ske").active = !0;
                        var C = m.DataMgr.getInstance().getHeroCfgById(this.data1.HeroId);
                        this.loadResFromBundle(C.BunleName, C.Model + "/" + C.Model, sp.SkeletonData, function (e) {
                            t.show.getChildByName("ske").getComponent(sp.Skeleton).skeletonData = e, lang.index60eed_421 == C.Name && t.show.getChildByName("ske").getComponent(sp.Skeleton).setSkin("skin_1"), t.show.getChildByName("ske").getComponent(sp.Skeleton).setAnimation(0, "idle", !0)
                        }), this.showLevelUp.children[0].getComponent(cc.Label).string = "Lv." + this.data1.Level, this.showLevelUp.children[2].getComponent(cc.Label).string = "Lv." + this.data2.Level, this.valueChange.children[0].active = !0, this.valueChange.children[0].children[0].getComponent(cc.Label).string = lang.index60eed_422 + this.data1.MaxHp, this.valueChange.children[0].children[0].getComponent(cc.Label).font = this.fontArr[0], this.valueChange.children[0].children[2].getComponent(cc.Label).string = "" + this.data2.MaxHp, this.valueChange.children[0].children[2].getComponent(cc.Label).font = this.fontArr[0], this.valueChange.children[1].active = !0, this.valueChange.children[1].children[0].getComponent(cc.Label).string = lang.index60eed_423 + this.data1.AttackDisplay, this.valueChange.children[1].children[0].getComponent(cc.Label).font = this.fontArr[0], this.valueChange.children[1].children[2].getComponent(cc.Label).string = "" + this.data2.AttackDisplay, this.valueChange.children[1].children[2].getComponent(cc.Label).font = this.fontArr[0]
                    }
                }, e.prototype.init = function (t, e, a, n, i) {
                    this.cb = n, this.nowTip = t, this.data1 = e, this.data2 = a, i && i()
                }, e.prototype.lottertBtnOn = function () {
                    this.closeNotAni(), this.cb && this.cb(!0)
                }, e.prototype.update = function (t) {
                    this.light.angle += 10 * t, this.node.getChildByName("bg").opacity = 230
                }, o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_424
                })], e.prototype, "root", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_425
                })], e.prototype, "lottery", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_426
                })], e.prototype, "lotteryShow", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_427
                })], e.prototype, "common", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_428
                })], e.prototype, "golden", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_429
                })], e.prototype, "show", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_430
                })], e.prototype, "debrisGet", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_431
                })], e.prototype, "showLevelUp", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_432
                })], e.prototype, "valueChange", void 0), o([b({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_433
                })], e.prototype, "tagSprite", void 0), o([b([cc.Font])], e.prototype, "fontArr", void 0), o([b([cc.SpriteFrame])], e.prototype, "tagArr", void 0), o([b([cc.SpriteFrame])], e.prototype, "topArr", void 0), o([b({
                    type: cc.Node,
                    tooltip: lang.index60eed_434
                })], e.prototype, "NodeEquip", void 0), o([_], e)
            }(c.default);
        a.default = C, cc._RF.pop()
    }, {
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIBox: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "22c31UM0yJCdpOZMecF8ZxQ", "UIBox");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/manager/SdkMgr"), c = cc._decorator,
            l = c.ccclass, u = c.property, p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cancelBtn = null, e.getBtn = null, e
                }

                return i(e, t), e.prototype.start = function () {
                    cc.director.pause()
                }, e.prototype.closePop = function () {
                    cc.director.resume(), this.closeUI()
                }, e.prototype.watchAdv = function () {
                    var t = this;
                    s.SdkMgr.getInstance().playVideo(null, function () {
                        cc.director.resume(), t.closeUI(), t.cb && t.cb()
                    })
                }, e.prototype.init = function (t) {
                    this.cb = t
                }, o([u({
                    type: cc.Node,
                    tooltip: lang.index60eed_435
                })], e.prototype, "cancelBtn", void 0), o([u({
                    type: cc.Node,
                    tooltip: lang.index60eed_436
                })], e.prototype, "getBtn", void 0), o([l], e)
            }(r.default);
        a.default = p, cc._RF.pop()
    }, {"../../framework/base/BaseUI": "BaseUI", "../../framework/manager/SdkMgr": "SdkMgr"}],
    UICombat: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "fdf7fzOzEhKua7dloVXDm2v", "UICombat");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../manager/LevelMgr"), c = t("../config/Config"),
            l = t("../manager/DataMgr"), u = t("../manager/PlayerMgr"), p = t("../../framework/utils/UIUtils"),
            d = t("../../framework/manager/AudioMgr"), h = t("../../framework/utils/Utils"),
            g = t("../../framework/configs/Appcfg"), f = t("../manager/MapMgr"), m = t("../global/Global"),
            y = t("../datas/TrackDataEvent"), v = t("../../framework/manager/PlatformManager"),
            I = t("../../framework/base/BasePlatform"), _ = cc._decorator, b = _.ccclass, C = _.property,
            D = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.startBtn = null, e.UIPlantDrawings = null, e.sunNumLabel = null, e.zombieTips = null, e.starTips = null, e.sunLayout = null, e.sunIcon = null, e.addBtn = null, e.sunPosArr = [], e._isClick = !1, e
                }

                return i(e, t), e.prototype.onLoad = function () {
                    var t = this.sunIcon.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    this.sunPos = this.sunLayout.convertToNodeSpaceAR(t)
                }, e.prototype.start = function () {
                    var t = this;
                    v.PlatformManager.currentPlatform == I.Platform.KuaiShou && (this.sunIcon.parent.getComponent(cc.Widget).left = 285), f.MapMgr.getInstance().startBtn = this.startBtn, this.scheduleOnce(function () {
                        t.startBtn.on(cc.Node.EventType.TOUCH_END, function () {
                            t.sendEvent(c.EventName.startGame), t.closeUI()
                        })
                    }, 1), this.UIPlantDrawings.on(cc.Node.EventType.TOUCH_END, function () {
                        u.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.lv_book_X), t.openUI(c.UIID.UIPlantDrawings, function () {
                            cc.find("Scene/combat").active = !1, t.node.active = !1
                        })
                    }), this.addBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        1 != t._isClick && (t._isClick = !0, t.openUI(c.UIID.UIGetResource, c.Currency.sun))
                    }), this.showZombieWave(), this.addEvent(g.BaseEventName.CloseUI, function () {
                        t._isClick = !1
                    });
                    var e = l.DataMgr.getInstance().getAllInbornCfg(),
                        a = u.PlayerMgr.getInstance().getUserData().getinbornData();
                    this.starTips.children[1].getChildByName("consumeNum").getComponent(cc.Label).string = s.LevelMgr.getInstance().levelData.TimeRating + lang.index60eed_437, this.starTips.children[2].getChildByName("consumeNum").getComponent(cc.Label).string = lang.index60eed_438 + s.LevelMgr.getInstance().levelData.SunshineRating, m.Global.newPlantInborn ? this.sunNum = s.LevelMgr.getInstance().levelData.TotalSunlight + u.PlayerMgr.getInstance().getNewInbornData().getNewInbornByType(7).allAddition : this.sunNum = s.LevelMgr.getInstance().levelData.TotalSunlight + e[6].IncreasePerLevel * a[6].inbornLevel, this.sunNumLabel.string = this.sunNum, s.LevelMgr.getInstance().MaxSun = this.sunNum, s.LevelMgr.getInstance().currentSun = this.sunNum, this.addEvent(c.EventName.sunChange, function (e, a) {
                        t.sunNum += e, a ? t.refreshSun(e, a) : (s.LevelMgr.getInstance().costNum -= e, t.sunNumLabel.string = t.sunNum), s.LevelMgr.getInstance().currentSun = t.sunNum
                    }), this.calcItemPos()
                }, e.prototype.showZombieWave = function () {
                    var t = this, e = [];
                    l.DataMgr.getInstance().getAllMonsterCfg().forEach(function () {
                        e.push(0)
                    }), l.DataMgr.getInstance().getLevelConfigurationWave(s.LevelMgr.getInstance().levelData.LevelId).forEach(function (t) {
                        t.LittleMonsterID && (e[Number(t.LittleMonsterID) - 310001] += t.LittleMonsterNum), t.MiddleMonsterID && (e[Number(t.MiddleMonsterID) - 310001] += t.MiddleMonsterNum), t.GreatMonsterID && (e[Number(t.GreatMonsterID) - 310001] += t.GreatMonsterNum)
                    });
                    var a = 0;
                    e.forEach(function (e, n) {
                        if (e > 0) {
                            var i = t.zombieTips.children[a] ? t.zombieTips.children[a] : cc.instantiate(t.zombieTips.children[0]),
                                o = l.DataMgr.getInstance().getMonsterCfgById(n + 310001);
                            t.loadSpriteFrame("zombie", "main/" + o.ModelID, function (t) {
                                switch (i.getChildByName("zombie").getComponent(cc.Sprite).spriteFrame = t, o.HabitusType) {
                                    case 1:
                                        i.getChildByName("zombie").scale = .8;
                                        break;
                                    case 2:
                                        i.getChildByName("zombie").scale = .6;
                                        break;
                                    case 3:
                                        i.getChildByName("zombie").scale = .3
                                }
                            }), i.getChildByName("num").getComponent(cc.Label).string = "x" + e, t.zombieTips.children[a] || t.zombieTips.addChild(i), a++
                        }
                    })
                }, e.prototype.calcItemPos = function () {
                    for (var t = 0; t < this.sunLayout.childrenCount; t++) {
                        var e = this.sunLayout.children[t];
                        this.sunPosArr.push(e.position)
                    }
                }, e.prototype.refreshSun = function (t, e, a) {
                    var n = this;
                    if (e) {
                        if (a) {
                            var i = this.sunLayout.parent.convertToNodeSpaceAR(a);
                            this.sunLayout.setPosition(i)
                        } else this.sunLayout.setPosition(0, 0);
                        var o = this.sunIcon.convertToWorldSpaceAR(cc.Vec2.ZERO);
                        this.sunPos = this.sunLayout.convertToNodeSpaceAR(o), this.flySunAni()
                    }
                    var r = this.sunNum;
                    p.UIUtils.rollNumLabelAtlas(e, this.sunNumLabel, t, r, function () {
                        n.sunNumLabel.string = n.sunNum + ""
                    }, 3)
                }, e.prototype.flySunAni = function () {
                    for (var t = this, e = 0, a = 0, n = function (n) {
                        var o = i.sunLayout.children[n];
                        o.active = !0, o.position = new cc.Vec3(0, 0, 0);
                        var r = h.Utils.randomRang(1.8, 3);
                        o.scale = .5, cc.tween(o).delay(e).show().to(.2, {position: i.sunPosArr[n]}).to(.03, {scale: r}).to(.02, {scale: 1}).delay(.2).delay(e).call(function () {
                            cc.tween(o).to(e + .05, {position: new cc.Vec3(t.sunPos.x, t.sunPos.y)}).hide().call(function () {
                                o.position = t.sunPosArr[n], d.AudioMgr.getInstance().playEffect(c.AudioId.goldEffect), cc.tween(t.sunIcon).to(.05, {scale: 1.5}).to(.1, {scale: 1}).start(), ++a >= t.sunLayout.children.length - 1 && (a = 0)
                            }).start()
                        }).start(), e += .04
                    }, i = this, o = 0; o < this.sunLayout.children.length; o++) n(o)
                }, o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_439
                })], e.prototype, "startBtn", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_440
                })], e.prototype, "UIPlantDrawings", void 0), o([C({
                    type: cc.Label,
                    tooltip: lang.index60eed_441
                })], e.prototype, "sunNumLabel", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_442
                })], e.prototype, "zombieTips", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_443
                })], e.prototype, "starTips", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_444
                })], e.prototype, "sunLayout", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_445
                })], e.prototype, "sunIcon", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_446
                })], e.prototype, "addBtn", void 0), o([b], e)
            }(r.default);
        a.default = D, cc._RF.pop()
    }, {
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/utils/UIUtils": "UIUtils",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/MapMgr": "MapMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIEquipSyn: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "99cbei+yt9HhonGqLxyhq5A", "UIEquipSyn");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.equipProperty = void 0;
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/manager/AudioMgr"),
            c = t("../../framework/manager/TweenMgr"), l = t("../config/Config"), u = t("../datas/TrackDataEvent"),
            p = t("../manager/DataMgr"), d = t("../manager/EquipMgr"), h = t("../manager/PlayerMgr"), g = cc._decorator,
            f = g.ccclass, m = g.property, y = function () {
                this.Attack = 0, this.Speed = 0, this.Crit = 0, this.CritDam = 0, this.Continuous = 0
            };
        a.equipProperty = y;
        var v = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.content = null, e.layoutEquip = null, e.synEquip = null, e.oneKeySyn = null, e.equipSYNBtn = null, e.tipsLayer = null, e.synSke = null, e.putOnEquipSp = null, e.leftArrow = null, e.rightArrow = null, e.spriteFrameArr = [], e.equipProp = new y, e.allEquipArr = [], e.SynArr = [], e.synCfg = null, e.oldCfg = null, e.isSyn = !1, e
            }

            return i(e, t), e.prototype.start = function () {
                this.equipData = h.PlayerMgr.getInstance().getEquipData(), this.layoutEquip.children.forEach(function (t) {
                    c.TweenMgr.getInstance().playHeartAni(t.getChildByName("plus"))
                }), this.initAllEquipArr(), this.refreshEquip(), this.initListener(), this.initBtn()
            }, e.prototype.initListener = function () {
                var t = this;
                this.addEvent(l.EventName.closeUI, function () {
                    t.closeUI(), h.PlayerMgr.getInstance().isLock = !1
                }), this.addEvent(l.EventName.changeEquip, function () {
                    t.isSyn || (t.initAllEquipArr(), t.refreshEquip())
                }), this.synSke.setCompleteListener(function (e) {
                    "ani1" == e.animation.name && t.openUI(l.UIID.UIAgainAward, t.synCfg, t.oldCfg, t.refreshEquip.bind(t))
                }), cc.tween(this.leftArrow).to(1.5, {x: -95, y: -135, opacity: 255}).to(1.5, {
                    x: -100,
                    y: -140,
                    opacity: 150
                }).union().repeatForever().start(), cc.tween(this.rightArrow).to(1.5, {
                    x: 95,
                    y: -135,
                    opacity: 255
                }).to(1.5, {x: 100, y: -140, opacity: 150}).union().repeatForever().start()
            }, e.prototype.initBtn = function () {
                var t = this;
                this.oneKeySyn.on(cc.Node.EventType.TOUCH_END, function () {
                    if (!t.isSyn) if (t.isSyn = !0, t.SynArr.length > 0 && (t.SynArr = []), t.initAllEquipArr(), t.allEquipArr.length < 3) t.isSyn = !1; else {
                        t.allEquipArr.sort(function (t, e) {
                            return e.equipId - t.equipId
                        });
                        var e = [], a = [], n = 0, i = t.allEquipArr[t.allEquipArr.length - 1];
                        a.push(i);
                        for (var o = t.allEquipArr.length - 1; o >= 0; o--) if (t.allEquipArr[o].equipId == i.equipId ? (n++, a.push(t.allEquipArr[o])) : (n = 1, a = [], i = t.allEquipArr[o], a.push(i)), 3 == n) {
                            var r = p.DataMgr.getInstance().getEquipCfgById(i.equipId + 1);
                            if (r) {
                                if (t.doSyn(a, r), t.initAllEquipArr(), t.allEquipArr.length < 3) break;
                                t.allEquipArr.sort(function (t, e) {
                                    return e.equipId - t.equipId
                                }), a = [], e.push({
                                    synCfg: r,
                                    oldCfg: p.DataMgr.getInstance().getEquipCfgById(i.equipId)
                                }), n = 0, i = t.allEquipArr[t.allEquipArr.length - 1], a.push(i), o++
                            }
                        }
                        var s = e.length > 0 ? lang.index60eed_447 + e.length + lang.index60eed_448 : lang.index60eed_449;
                        t.showSyn(e, 0), e.length > 0 && h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.equip_quickmerge), t.openUI(l.UIID.UITips, s), t.initAllEquipArr(), t.refreshEquip(), t.isSyn = !1
                    }
                }), this.equipSYNBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    t.SynArr.length < 3 && t.openUI(l.UIID.UITips, lang.index60eed_450)
                })
            }, e.prototype.showSyn = function (t, e) {
                var a = this;
                e >= t.length || this.openUI(l.UIID.UIAgainAward, t[e].synCfg, t[e].oldCfg, function () {
                    a.scheduleOnce(function () {
                        a.showSyn(t, e + 1)
                    }, .01)
                })
            }, e.prototype.initAllEquipArr = function () {
                var t = this;
                if (this.SynArr.length > 0) {
                    var e = this.allEquipArr.filter(function (e) {
                        return e.equipId == t.SynArr[0].equipId
                    }), a = this.allEquipArr.filter(function (e) {
                        return e.equipId != t.SynArr[0].equipId
                    });
                    this.allEquipArr = e.concat(a)
                } else this.allEquipArr = [], this.equipData.getPutOnArr().forEach(function (e) {
                    e && t.allEquipArr.push(e)
                }), this.allEquipArr = this.allEquipArr.concat(this.equipData.getEquipData())
            }, e.prototype.refreshEquip = function () {
                var t = this;
                if (this.equipProp = new y, this.equipData = h.PlayerMgr.getInstance().getEquipData(), this.SynArr.length > 0) if (this.SynArr.forEach(function (e, a) {
                    if (e) {
                        var n = p.DataMgr.getInstance().getEquipCfgById(e.equipId);
                        d.EquipMgr.getInstance().changeEquipSp(t.layoutEquip.children[a], n), e.puton && (t.equipProp.Attack = n.Attack ? t.equipProp.Attack + n.Attack : t.equipProp.Attack, t.equipProp.Speed = n.Speed ? t.equipProp.Speed + n.Speed : t.equipProp.Speed, t.equipProp.Crit = n.Crit ? t.equipProp.Crit + n.Crit : t.equipProp.Crit, t.equipProp.CritDam = n.CritDam ? t.equipProp.CritDam + n.CritDam : t.equipProp.CritDam, t.equipProp.Continuous = n.Continuous ? t.equipProp.Continuous + n.Continuous : t.equipProp.Continuous), t.layoutEquip.children[a].off(cc.Node.EventType.TOUCH_END), t.layoutEquip.children[a].on(cc.Node.EventType.TOUCH_END, function () {
                            t.putOutSyn(e)
                        })
                    }
                }), this.equipSYNBtn.off(cc.Node.EventType.TOUCH_END), this.synCfg = p.DataMgr.getInstance().getEquipCfgById(this.SynArr[0].equipId + 1), this.synCfg && d.EquipMgr.getInstance().changeEquipSp(this.synEquip, this.synCfg), 3 == this.SynArr.length) this.SynArr[0].equipId == this.SynArr[1].equipId && (this.SynArr[1].equipId, this.SynArr[2].equipId), this.oldCfg = p.DataMgr.getInstance().getEquipCfgById(this.SynArr[0].equipId), this.equipSYNBtn.once(cc.Node.EventType.TOUCH_END, function () {
                    t.doSyn(t.SynArr, t.synCfg), t.SynArr = [], t.synSke.setAnimation(0, "ani1", !1), s.AudioMgr.getInstance().playEffect(l.AudioId.Sound_Upgrade), h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.equip_merge)
                }); else for (var e = this.SynArr.length; e < 3; e++) this.layoutEquip.children[e].getChildByName("plus").opacity = 255, d.EquipMgr.getInstance().initEquip(this.layoutEquip.children[e], this.putOnEquipSp); else this.layoutEquip.children.forEach(function (e) {
                    e.getChildByName("plus").opacity = 255, d.EquipMgr.getInstance().initEquip(e, t.putOnEquipSp)
                }), this.loadSpriteFrame("EquipIcon", "zw_zb_zbk", function (e) {
                    d.EquipMgr.getInstance().initEquip(t.synEquip, e)
                });
                if (this.allEquipArr.forEach(function (e, a) {
                    var n = t.content.children[a] ? t.content.children[a] : cc.instantiate(t.content.children[0]);
                    t.SynArr.length > 0 ? (n.getChildByName("mask").active = e.equipId != t.SynArr[0].equipId, n.getChildByName("mask").getComponentInChildren(cc.Label).string = "") : (n.getChildByName("mask").getComponentInChildren(cc.Label).string = lang.index60eed_451, n.getChildByName("mask").active = e.puton);
                    var i = p.DataMgr.getInstance().getEquipCfgById(e.equipId);
                    d.EquipMgr.getInstance().changeEquipSp(n, i), t.content.children[a] || t.content.addChild(n), n.off(cc.Node.EventType.TOUCH_END), n.on(cc.Node.EventType.TOUCH_END, function () {
                        n.getChildByName("mask").active && "" == n.getChildByName("mask").getComponentInChildren(cc.Label).string || t.addSyn(e)
                    })
                }), this.allEquipArr.length < this.content.children.length) {
                    var a = function (t) {
                        var e = n.content.children[t];
                        n.loadSpriteFrame("EquipIcon", "zw_zb_zbk", function (t) {
                            d.EquipMgr.getInstance().initEquip(e, t)
                        })
                    }, n = this;
                    for (e = this.allEquipArr.length; e < this.content.children.length; e++) a(e)
                }
                if (this.content.children.length < this.equipData.getEquipCellNum()) {
                    var i = function () {
                        var t = cc.instantiate(o.content.children[0]);
                        o.loadSpriteFrame("EquipIcon", "zw_zb_zbk", function (e) {
                            d.EquipMgr.getInstance().initEquip(t, e)
                        }), o.content.addChild(t)
                    }, o = this;
                    for (e = this.content.children.length; e < this.equipData.getEquipCellNum(); e++) i()
                }
            }, e.prototype.addSyn = function (t) {
                if (!(this.SynArr.length >= 3)) if (p.DataMgr.getInstance().getEquipCfgById(t.equipId + 1)) {
                    var e = this.allEquipArr.indexOf(t);
                    this.allEquipArr.splice(e, 1), this.SynArr.push(t), this.initAllEquipArr(), this.content.y = 240, this.refreshEquip()
                } else this.openUI(l.UIID.UITips, lang.index60eed_452)
            }, e.prototype.putOutSyn = function (t) {
                var e = this.SynArr.indexOf(t);
                this.SynArr.splice(e, 1), this.SynArr.length > 0 && this.allEquipArr.push(t), this.initAllEquipArr(), this.refreshEquip()
            }, e.prototype.doSyn = function (t, e) {
                var a = !1;
                t.forEach(function (t) {
                    t.puton && (a = t.puton), d.EquipMgr.getInstance().deleteEquipById(t.gainIndex)
                }), d.EquipMgr.getInstance().addEquip(e.ID, a)
            }, o([m({
                type: cc.Node,
                tooltip: lang.index60eed_453
            })], e.prototype, "content", void 0), o([m({
                type: cc.Node,
                tooltip: lang.index60eed_454
            })], e.prototype, "layoutEquip", void 0), o([m({
                type: cc.Node,
                tooltip: lang.index60eed_455
            })], e.prototype, "synEquip", void 0), o([m({
                type: cc.Node,
                tooltip: lang.index60eed_456
            })], e.prototype, "oneKeySyn", void 0), o([m({
                type: cc.Node,
                tooltip: lang.index60eed_457
            })], e.prototype, "equipSYNBtn", void 0), o([m({
                type: cc.Node,
                tooltip: lang.index60eed_458
            })], e.prototype, "tipsLayer", void 0), o([m({
                type: sp.Skeleton,
                tooltip: lang.index60eed_459
            })], e.prototype, "synSke", void 0), o([m({
                type: cc.SpriteFrame,
                tooltip: lang.index60eed_460
            })], e.prototype, "putOnEquipSp", void 0), o([m({
                type: cc.Node,
                tooltip: lang.index60eed_461
            })], e.prototype, "leftArrow", void 0), o([m({
                type: cc.Node,
                tooltip: lang.index60eed_462
            })], e.prototype, "rightArrow", void 0), o([m([cc.SpriteFrame])], e.prototype, "spriteFrameArr", void 0), o([f], e)
        }(r.default);
        a.default = v, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIEquipTips: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "5c9209EIvRKHZ45gkqgh1zG", "UIEquipTips");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/manager/AudioMgr"),
            c = t("../../framework/utils/Utils"), l = t("../config/Config"), u = t("../manager/DataMgr"),
            p = t("../manager/EquipMgr"), d = t("../manager/PlayerMgr"), h = t("./UIGuide"), g = cc._decorator,
            f = g.ccclass, m = g.property, y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tips = null, e.bg = null, e.bgSpArr = [], e.proTypeIcon = [], e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    this.equipData = d.PlayerMgr.getInstance().getEquipData(), this.plantEquipData.puton ? this.showTips() : this.equipData.getPutOnArrByType(this.cfg.Type) ? this.showTips(this.equipData.getPutOnArrByType(this.cfg.Type)) : this.showTips(), this.bg.on(cc.Node.EventType.TOUCH_END, function () {
                        t.closeUI()
                    }), 14 == d.PlayerMgr.getInstance().getGuideData().getCurrentId() && (this.guideCfgArr = u.DataMgr.getInstance().getAllGuideCfg(), this.startGuide())
                }, e.prototype.showTips = function (t) {
                    if (t) {
                        this.ownCfg = u.DataMgr.getInstance().getEquipCfgById(t.equipId);
                        var e = cc.instantiate(this.tips), a = this.changeTips(e, this.plantEquipData, this.cfg, !0);
                        this.tips.parent.addChild(a), this.changeTips(this.tips, t, this.ownCfg, !1)
                    } else this.changeTips(this.tips, this.plantEquipData, this.cfg)
                }, e.prototype.changeTips = function (t, e, a, n) {
                    var i = this;
                    void 0 === n && (n = !1), t.getComponent(cc.Sprite).spriteFrame = 1 == a.Type ? this.bgSpArr[1] : this.bgSpArr[0];
                    var o = t.getChildByName("top"), r = "", u = "";
                    a.Quality <= c.Utils.cumsum(1) ? (u = lang.index60eed_463, r = "#fffdf7") : a.Quality == c.Utils.cumsum(1) + 1 ? (u = lang.index60eed_464, r = "#56ff4e") : a.Quality <= c.Utils.cumsum(2) ? (u = lang.index60eed_465, r = "#56ff4e") : a.Quality == c.Utils.cumsum(2) + 1 ? (u = lang.index60eed_466, r = "#46f0ff") : a.Quality <= c.Utils.cumsum(3) ? (u = lang.index60eed_467, r = "#46f0ff") : a.Quality == c.Utils.cumsum(3) + 1 ? (u = lang.index60eed_468, r = "#fb85ff") : a.Quality <= c.Utils.cumsum(4) ? (u = lang.index60eed_469, r = "#fb85ff") : a.Quality == c.Utils.cumsum(4) + 1 ? (u = lang.index60eed_470, r = "#ff9333") : a.Quality <= c.Utils.cumsum(5) && (u = lang.index60eed_471, r = "#ff9333"), p.EquipMgr.getInstance().changeEquipSp(o.getChildByName("iconBg"), a), o.getChildByName("name").getComponent(cc.Label).string = a.Name, o.getChildByName("name").color = cc.color().fromHEX(r), o.getChildByName("type").getComponent(cc.Label).string = this.getType(a.Type), o.getChildByName("quality").getComponent(cc.Label).string = u, o.getChildByName("quality").color = cc.color().fromHEX(r);
                    var d = t.getChildByName("skill");
                    d.active = 1 == a.Type, d.getComponent(cc.RichText).string = 1 == a.Type ? a.SkillDesc : "";
                    var h = t.getChildByName("property"), g = cc.instantiate(h.children[0]);
                    h.destroyAllChildren();
                    var f = 0;
                    this.scheduleOnce(function () {
                        for (; f < 5;) for (var t = f; t < 5; t++) {
                            var e = !1;
                            switch (t) {
                                case 0:
                                    if (a.Attack) {
                                        e = !0;
                                        var o = n ? i.ownCfg.Attack ? i.cfg.Attack - i.ownCfg.Attack : i.cfg.Attack : 0,
                                            r = i.changeProperty(g, t, lang.index60eed_472, a.Attack, o, n);
                                        h.addChild(r)
                                    }
                                    f = 1;
                                    break;
                                case 1:
                                    if (a.Speed) {
                                        e = !0, o = n ? i.ownCfg.Speed ? i.cfg.Speed - i.ownCfg.Speed : i.cfg.Speed : 0;
                                        var s = i.changeProperty(g, t, lang.index60eed_473, a.Speed, o, n);
                                        h.addChild(s)
                                    }
                                    f = 2;
                                    break;
                                case 2:
                                    if (a.Crit) {
                                        e = !0, o = n ? i.ownCfg.Crit ? i.cfg.Crit - i.ownCfg.Crit : i.cfg.Crit : 0;
                                        var c = i.changeProperty(g, t, lang.index60eed_474, a.Crit, o, n);
                                        h.addChild(c)
                                    }
                                    f = 3;
                                    break;
                                case 3:
                                    if (a.CritDam) {
                                        e = !0, o = n ? i.ownCfg.CritDam ? i.cfg.CritDam - i.ownCfg.CritDam : i.cfg.CritDam : 0;
                                        var l = i.changeProperty(g, t, lang.index60eed_475, a.CritDam, o, n);
                                        h.addChild(l)
                                    }
                                    f = 4;
                                    break;
                                case 4:
                                    if (a.Continuous) {
                                        e = !0, o = n ? i.ownCfg.Continuous ? i.cfg.Continuous - i.ownCfg.Continuous : i.cfg.Continuous : 0;
                                        var u = i.changeProperty(g, t, lang.index60eed_476, a.Continuous, o, n);
                                        h.addChild(u)
                                    }
                                    f = 5
                            }
                            if (e) break
                        }
                    });
                    var m = t.getChildByName("btn");
                    return m.children[1].active = t.parent && t.parent.children.length > 1 && e.puton, m.children[0].active = !m.children[1].active, m.children[0].getChildByName("pass").getComponent(cc.Label).string = e.puton ? lang.index60eed_477 : lang.index60eed_478, m.children[0].active && m.children[0].on(cc.Node.EventType.TOUCH_END, function () {
                        lang.index60eed_479 == m.children[0].getChildByName("pass").getComponent(cc.Label).string ? (s.AudioMgr.getInstance().playEffect(l.AudioId.Sound_Wear), p.EquipMgr.getInstance().putOnEquip(e, a.Type)) : lang.index60eed_480 == m.children[0].getChildByName("pass").getComponent(cc.Label).string && p.EquipMgr.getInstance().disBoardEquip(e), i.closeUI()
                    }), t
                }, e.prototype.getType = function (t) {
                    switch (t) {
                        case 1:
                            return lang.index60eed_481;
                        case 2:
                            return lang.index60eed_482;
                        case 3:
                            return lang.index60eed_483;
                        case 4:
                            return lang.index60eed_484;
                        case 5:
                            return lang.index60eed_485;
                        case 6:
                            return lang.index60eed_486
                    }
                }, e.prototype.changeProperty = function (t, e, a, n, i, o) {
                    var r = cc.instantiate(t);
                    if (r.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.proTypeIcon[e], r.getChildByName("type").getComponent(cc.Label).string = a, r.getChildByName("right").children[0].getComponent(cc.Label).string = e > 0 ? (100 * n).toFixed(0) + "%" : n + "", o) {
                        var s = r.getChildByName("right").children[1];
                        s.active = !0, s.getComponent(cc.Label).string = i < 0 ? "(" : "(+", s.getComponent(cc.Label).string += e > 0 ? (100 * i).toFixed(0) + "%)" : i + ")";
                        var c = i < 0 ? "#ff0606" : "#46f700";
                        s.color = cc.color().fromHEX(c)
                    }
                    return r
                }, e.prototype.init = function (t, e) {
                    this.plantEquipData = t, this.cfg = e
                }, e.prototype.startGuide = function () {
                    var t = d.PlayerMgr.getInstance().getGuideData(), e = this.getCfg(t.getCurrentId() - 1, t);
                    this.openUI(l.UIID.UIGuide, e)
                }, e.prototype.getCfg = function (t, e) {
                    var a = new h.UIGuideData, n = this.guideCfgArr[t];
                    a.clickType = n.GuideType, a.isWeek = 0 == n.GuideObj, a.distNode = a.isWeek ? null : this.tips.getChildByName("btn"), a.tipstring = n.Describe, a.showHand = 1 == n.Finger, a.hideMask = 1 != n.Mask, e.addCurrentId(!0), a.groupLast = !0, a.showPlant = 1 == n.ShowPlant, a.lightType = 1, a.addSize = new cc.Size(0, 0);
                    var i = n.BubbleOffset.split(",");
                    return a.tipsOffest = new cc.Vec2(Number(i[0]), Number(i[1])), a
                }, e.prototype.onClose = function () {
                    15 == d.PlayerMgr.getInstance().getGuideData().getCurrentId() && (this.guideCfgArr = u.DataMgr.getInstance().getAllGuideCfg(), this.startGuide())
                }, o([m({
                    type: cc.Node,
                    tooltip: lang.index60eed_487
                })], e.prototype, "tips", void 0), o([m({
                    type: cc.Node,
                    tooltip: lang.index60eed_488
                })], e.prototype, "bg", void 0), o([m([cc.SpriteFrame])], e.prototype, "bgSpArr", void 0), o([m([cc.SpriteFrame])], e.prototype, "proTypeIcon", void 0), o([f], e)
            }(r.default);
        a.default = y, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../manager/DataMgr": "DataMgr",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./UIGuide": "UIGuide"
    }],
    UIEquip: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "14580F7/TlJBaxgGq4wX86X", "UIEquip");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.equipProperty = void 0;
        var r = t("../../framework/base/BasePlatform"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/manager/AudioMgr"), l = t("../../framework/manager/PlatformManager"),
            u = t("../../framework/manager/TweenMgr"), p = t("../../framework/utils/Utils"), d = t("../config/Config"),
            h = t("../datas/TrackDataEvent"), g = t("../manager/DataMgr"), f = t("../manager/EquipMgr"),
            m = t("../manager/PlayerMgr"), y = t("./UIGuide"), v = cc._decorator, I = v.ccclass, _ = v.property,
            b = function () {
                this.Attack = 0, this.Speed = 1, this.Crit = 0, this.CritDam = 0, this.Continuous = 0, this.weaponSkillID = 0
            };
        a.equipProperty = b;
        var C = function () {
            this.data = null, this.quality = 0
        }, D = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.content = null, e.layoutEquip = null, e.layoutDesc = null, e.oneKeyPutOn = null, e.equipSYNBtn = null, e.tipsLayer = null, e.putOnEquipSp = null, e.spriteFrameArr = [], e.weaponBtn = null, e.synBtn = null, e.randomBtn = null, e.equipProp = new b, e.maxEquip = [new C, new C, new C, new C, new C, new C], e.equipNum = 0, e
            }

            return i(e, t), e.prototype.onEnable = function () {
                this.refreshEquip(), 15 == m.PlayerMgr.getInstance().getGuideData().getCurrentId() && (this.guideCfgArr = g.DataMgr.getInstance().getAllGuideCfg(), this.startGuide())
            }, e.prototype.start = function () {
                l.PlatformManager.currentPlatform == r.Platform.WEB_LINK ? (this.weaponBtn.active = !0, this.synBtn.active = !0, this.randomBtn.active = !0, this.weaponBtn.opacity = 0, this.synBtn.opacity = 0, this.randomBtn.opacity = 0) : (this.weaponBtn.active = !1, this.synBtn.active = !1, this.randomBtn.active = !1), this.equipData = m.PlayerMgr.getInstance().getEquipData(), m.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.enter_equip), this.layoutEquip.children.forEach(function (t) {
                    u.TweenMgr.getInstance().playHeartAni(t.getChildByName("plus"))
                }), this.initListener(), this.initBtn(), 13 == m.PlayerMgr.getInstance().getGuideData().getCurrentId() && (this.guideCfgArr = g.DataMgr.getInstance().getAllGuideCfg(), this.startGuide())
            }, e.prototype.initListener = function () {
                var t = this;
                this.sendEvent(d.EventName.showEquipRed, !1), this.addEvent(d.EventName.closeUI, function (e) {
                    0 != t.node.active && (e(), t.closeUI(), m.PlayerMgr.getInstance().isLock = !1)
                }), this.addEvent(d.EventName.changeEquip, this.refreshEquip), this.addEvent(d.EventName.disBoardEquip, function (e) {
                    f.EquipMgr.getInstance().initEquip(t.layoutEquip.children[e], t.putOnEquipSp), t.layoutEquip.children[e].getChildByName("plus").opacity = 255
                }), this.addEvent(d.EventName.putOnEquip, function (e) {
                    var a = t.layoutEquip.children[e - 1].scale;
                    t.layoutEquip.children[e - 1].scale *= 1.5, cc.tween(t.layoutEquip.children[e - 1]).to(.25, {scale: a}).start()
                })
            }, e.prototype.initBtn = function () {
                var t = this;
                l.PlatformManager.currentPlatform == r.Platform.WEB_LINK ? (this.weaponBtn.active = !0, this.synBtn.active = !0, this.randomBtn.active = !0, this.weaponBtn.opacity = 0, this.synBtn.opacity = 0, this.randomBtn.opacity = 0) : (this.weaponBtn.active = !1, this.synBtn.active = !1, this.randomBtn.active = !1), this.equipSYNBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    t.refreshCollectionRed(t.equipSYNBtn.getChildByName("red"), !1), t.openUI(d.UIID.UIEquipSyn), t.node.active = !1
                }), this.oneKeyPutOn.on(cc.Node.EventType.TOUCH_END, function () {
                    var e = t.equipData.getPutOnArr();
                    t.maxEquip.forEach(function (t, a) {
                        t.data && (!e[a] || e[a].gainIndex != t.data.gainIndex && e[a].equipId != t.data.equipId) && (f.EquipMgr.getInstance().putOnEquip(t.data, a + 1), c.AudioMgr.getInstance().playEffect(d.AudioId.Sound_Wear))
                    }), t.refreshCollectionRed(t.oneKeyPutOn.getChildByName("red"), !1)
                }), this.weaponBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    t.equipData.addEquip(11015), t.equipData.addEquip(12015), t.equipData.addEquip(13015), t.equipData.addEquip(14015), t.equipData.addEquip(15015), t.refreshEquip()
                }), this.synBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    for (var e = 6; e > 0;) t.equipData.addEquip(11003), e--;
                    t.refreshEquip()
                }), this.randomBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    for (var e = 10, a = g.DataMgr.getInstance().getAllEquipCfg(); e > 0;) t.equipData.addEquip(a[p.Utils.randomRang(0, a.length)].ID), e--
                })
            }, e.prototype.refreshEquip = function () {
                var t = this;
                this.equipProp = new b, this.equipData = m.PlayerMgr.getInstance().getEquipData();
                var e = this.equipData.getPutOnArr();
                if (e.length > 0) {
                    var a = 0;
                    e.forEach(function (e) {
                        if (e) {
                            var n = t.content.children[a] ? t.content.children[a] : cc.instantiate(t.content.children[0]);
                            n.getChildByName("mask").active = !0;
                            var i = g.DataMgr.getInstance().getEquipCfgById(e.equipId);
                            f.EquipMgr.getInstance().changeEquipSp(n, i), f.EquipMgr.getInstance().changeEquipSp(t.layoutEquip.children[i.Type - 1], i), e.puton && (t.equipProp.Attack = i.Attack ? t.equipProp.Attack + i.Attack : t.equipProp.Attack, t.equipProp.Speed = i.Speed ? t.equipProp.Speed + i.Speed : t.equipProp.Speed, t.equipProp.Crit = i.Crit ? t.equipProp.Crit + i.Crit : t.equipProp.Crit, t.equipProp.CritDam = i.CritDam ? t.equipProp.CritDam + i.CritDam : t.equipProp.CritDam, t.equipProp.Continuous = i.Continuous ? t.equipProp.Continuous + i.Continuous : t.equipProp.Continuous, t.equipProp.weaponSkillID = i.SkillID ? i.SkillID : t.equipProp.weaponSkillID), t.layoutEquip.children[i.Type - 1].off(cc.Node.EventType.TOUCH_END), t.layoutEquip.children[i.Type - 1].on(cc.Node.EventType.TOUCH_END, function () {
                                t.openUI(d.UIID.UIEquipTips, e, i)
                            }), n.off(cc.Node.EventType.TOUCH_END), n.on(cc.Node.EventType.TOUCH_END, function () {
                                t.openUI(d.UIID.UIEquipTips, e, i)
                            }), t.content.children[a] || t.content.addChild(n), t.maxEquip[i.Type - 1].data = e, t.maxEquip[i.Type - 1].quality = i.Quality, a++
                        }
                    })
                }
                var n = 0, i = this.equipData.getEquipData()[0];
                if (this.equipData.getEquipData().forEach(function (e, a) {
                    var o = t.content.children[a + t.equipData.getEquipNum()] ? t.content.children[a + t.equipData.getEquipNum()] : cc.instantiate(t.content.children[0]);
                    o.getChildByName("mask").active = !1;
                    var r = g.DataMgr.getInstance().getEquipCfgById(e.equipId);
                    f.EquipMgr.getInstance().changeEquipSp(o, r), t.content.children[a + t.equipData.getEquipNum()] || t.content.addChild(o), o.off(cc.Node.EventType.TOUCH_END), o.on(cc.Node.EventType.TOUCH_END, function () {
                        t.openUI(d.UIID.UIEquipTips, e, r)
                    }), e.equipId == i.equipId ? n++ : (n = 1, i = e), n >= 3 && r.Quality < 15 && t.refreshCollectionRed(t.equipSYNBtn.getChildByName("red"), !0), (!t.maxEquip[r.Type - 1].data || e.equipId > t.maxEquip[r.Type - 1].data.equipId && r.Quality > t.maxEquip[r.Type - 1].quality || r.Quality > t.maxEquip[r.Type - 1].quality) && (t.refreshCollectionRed(t.oneKeyPutOn.getChildByName("red"), !0), t.maxEquip[r.Type - 1].data = e, t.maxEquip[r.Type - 1].quality = r.Quality)
                }), this.equipData.getEquipData().length + this.equipData.getEquipNum() < this.content.children.length) for (var o = function (t) {
                    var e = r.content.children[t];
                    r.loadSpriteFrame("EquipIcon", "zw_zb_zbk", function (t) {
                        f.EquipMgr.getInstance().initEquip(e, t)
                    })
                }, r = this, s = this.equipData.getEquipData().length + this.equipData.getEquipNum(); s < this.content.children.length; s++) o(s);
                if (this.content.children.length < this.equipData.getEquipCellNum()) {
                    var c = function () {
                        var t = cc.instantiate(l.content.children[0]);
                        l.loadSpriteFrame("EquipIcon", "zw_zb_zbk", function (e) {
                            f.EquipMgr.getInstance().initEquip(t, e)
                        }), l.content.addChild(t)
                    }, l = this;
                    for (s = this.content.children.length; s < this.equipData.getEquipCellNum(); s++) c()
                }
                var u = null;
                e[0] && (u = g.DataMgr.getInstance().getEquipCfgById(e[0].equipId));
                var p = u ? g.DataMgr.getInstance().getSkillLevelCfgById(u.SkillID) : null;
                for (s = 0; s < 5; s++) {
                    var h = this.layoutDesc.children[s] ? this.layoutDesc.children[s] : cc.instantiate(this.layoutDesc.children[0]);
                    h.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.spriteFrameArr[s];
                    var y = "", v = "";
                    switch (s) {
                        case 0:
                            y = lang.index60eed_489, v = this.equipProp.Attack.toFixed(0);
                            break;
                        case 1:
                            y = lang.index60eed_490, v = p ? (p.LaunchInterval / this.equipProp.Speed).toFixed(1) + "s" : (100 * this.equipProp.Speed).toFixed(0) + "%";
                            break;
                        case 2:
                            y = lang.index60eed_491, v = (100 * this.equipProp.Crit).toFixed(0) + "%";
                            break;
                        case 3:
                            y = lang.index60eed_492, v = (100 * this.equipProp.CritDam).toFixed(0) + "%";
                            break;
                        case 4:
                            y = lang.index60eed_493, v = (100 * this.equipProp.Continuous).toFixed(0) + "%"
                    }
                    h.getChildByName("type").getComponent(cc.Label).string = y, h.getChildByName("num").getComponent(cc.Label).string = v, this.layoutDesc.children[s] || this.layoutDesc.addChild(h)
                }
                f.EquipMgr.getInstance().setEquipProp(this.equipProp)
            }, e.prototype.refreshCollectionRed = function (t, e) {
                e ? (t.active = !0, u.TweenMgr.getInstance().playHeartAni(t)) : (t.active = !1, u.TweenMgr.getInstance().stopTween(t))
            }, e.prototype.startGuide = function () {
                var t = m.PlayerMgr.getInstance().getGuideData(), e = this.getCfg(t.getCurrentId() - 1, t);
                this.openUI(d.UIID.UIGuide, e)
            }, e.prototype.getCfg = function (t, e) {
                var a = this, n = new y.UIGuideData, i = this.guideCfgArr[t];
                n.clickType = i.GuideType, n.isWeek = 0 == i.GuideObj, n.distNode = n.isWeek ? null : this.content.children[0], n.tipstring = i.Describe, n.showHand = 1 == i.Finger, n.hideMask = 1 != i.Mask, this.guideCfgArr[t + 1] && t < 12 ? n.callBack = function () {
                    m.PlayerMgr.getInstance().getGuideData().addCurrentId(!1), a.startGuide()
                } : e.addCurrentId(!0), n.groupLast = !0, n.showPlant = 1 == i.ShowPlant, n.lightType = 1, n.addSize = new cc.Size(-40, -40);
                var o = i.BubbleOffset.split(",");
                return n.tipsOffest = new cc.Vec2(Number(o[0]), Number(o[1])), n
            }, o([_({
                type: cc.Node,
                tooltip: lang.index60eed_494
            })], e.prototype, "content", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_495
            })], e.prototype, "layoutEquip", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_496
            })], e.prototype, "layoutDesc", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_497
            })], e.prototype, "oneKeyPutOn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_498
            })], e.prototype, "equipSYNBtn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_499
            })], e.prototype, "tipsLayer", void 0), o([_({
                type: cc.SpriteFrame,
                tooltip: lang.index60eed_500
            })], e.prototype, "putOnEquipSp", void 0), o([_([cc.SpriteFrame])], e.prototype, "spriteFrameArr", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_501
            })], e.prototype, "weaponBtn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_502
            })], e.prototype, "synBtn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_503
            })], e.prototype, "randomBtn", void 0), o([I], e)
        }(s.default);
        a.default = D, cc._RF.pop()
    }, {
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./UIGuide": "UIGuide"
    }],
    UIGameOver: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "64e561iDJdFaLUP8nBSO4zf", "UIGameOver");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.GDID = void 0;
        var r, s = t("../../framework/base/BaseUI"), c = t("../../framework/manager/ResourceMgr"),
            l = t("../manager/LevelMgr"), u = t("../manager/PlayerMgr"), p = t("../config/Config"),
            d = t("../../framework/manager/AudioMgr"), h = t("../../framework/utils/Utils"),
            g = t("../../framework/manager/SdkMgr"), f = t("../datas/TrackDataEvent"), m = t("../manager/DataMgr"),
            y = t("../manager/EquipMgr"), v = cc._decorator, I = v.ccclass, _ = v.property, b = function () {
            };
        (function (t) {
            t.gold = "51001001", t.diamond = "51001002"
        })(r = a.GDID || (a.GDID = {}));
        var C = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.center = null, e.again = null, e.toLevelUp = null, e.toInborn = null, e.topStar = null, e.showLabel = null, e.showAward = null, e.light = null, e.shareBtn = null, e.getBtn = null, e.doubleGetBtn = null, e.addDesktop = null, e._isClick = !1, e._isRes = !1, e.currentStar = [0, 0, 0], e.finaReward = [], e.dropWeight = [], e
            }

            return i(e, t), e.prototype.start = function () {
                var t = this;
                this.shareBtn.active = u.PlayerMgr.getInstance().getShareData().getCanShare() && g.SdkMgr.getInstance().getShare(), this.userData = u.PlayerMgr.getInstance().getUserData(), this.customsData = u.PlayerMgr.getInstance().getCustomData(), this.again.on(cc.Node.EventType.TOUCH_END, this.againOn.bind(this)), this.toLevelUp.on(cc.Node.EventType.TOUCH_END, this.toLevelUpOn.bind(this)), this.toInborn.on(cc.Node.EventType.TOUCH_END, this.toInbornOn.bind(this)), this.getBtn.on(cc.Node.EventType.TOUCH_END, this.getAward.bind(this)), this.doubleGetBtn.on(cc.Node.EventType.TOUCH_END, this.doubleGet.bind(this)), this.shareBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    u.PlayerMgr.getInstance().getShareData().toShare(!0, function () {
                        t.shareBtn.active = !1
                    })
                }), u.PlayerMgr.getInstance().getShareData().stopRecord(!1), this.changeCenter();
                window.h5api.playMiddleAd();
            }, e.prototype.changeCenter = function () {
                var t = this, e = u.PlayerMgr.getInstance().getSignData();
                this.pass ? (this.scheduleOnce(function () {
                    d.AudioMgr.getInstance().playEffect(p.AudioId.Victory, 6)
                }, .5), u.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.guide7), u.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.win_x, l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level), e.getCurentDay() <= 7 && u.PlayerMgr.getInstance().getTrackData().trackDayz(f.TrackId.dayz_win_x, e.getCurentDay(), l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level), this.currentStar[0] = 1, this.center.getChildByName("win").active = !0, this.center.getChildByName("lose").active = !1, this.center.getChildByName("downLabel").active = !1, this.showLabel.children[1].children[0].getComponent(cc.Label).string = l.LevelMgr.getInstance().levelData.TimeRating + lang.index60eed_504, this.showLabel.children[2].children[0].getComponent(cc.Label).string = lang.index60eed_505 + l.LevelMgr.getInstance().levelData.SunshineRating, this.costTime / 1e3 <= l.LevelMgr.getInstance().levelData.TimeRating && (this.topStar.children[1].children[0].active = !0, this.showLabel.children[1].children[0].color = cc.color().fromHEX("#46f700"), this.currentStar[1] = 1), this.costNum <= l.LevelMgr.getInstance().levelData.SunshineRating && (this.topStar.children[2].children[0].active = !0, this.showLabel.children[2].children[0].color = cc.color().fromHEX("#46f700"), this.showLabel.children[2].children[0].children[0].children[0].active = !0, this.currentStar[2] = 1), this.levelData = l.LevelMgr.getInstance().levelData, this.userData = u.PlayerMgr.getInstance().getUserData(), (this.customsData.getCurrentCustom().currentCustom == this.levelData.LevelId && 0 == this.customsData.getCurrentCustom().passAll ? this.levelData.FirstReward.split(";") : this.levelData.Reward.split(";")).forEach(function (e) {
                    var a = e.split(",");
                    if (h.Utils.randomRang(0, 100) <= Number(a[2])) {
                        var n = new b;
                        if (n.id = a[0], n.num = a[1], n.id != r.gold && n.id != r.diamond) {
                            var i = m.DataMgr.getInstance().getItemCfgById(Number(n.id)),
                                o = m.DataMgr.getInstance().getDropById(i.DropID), s = o.Reward.split(";"),
                                c = o.Weight.split(";");
                            s.forEach(function (e, a) {
                                var n = new b;
                                n.id = e, n.num = "1", n.Weight = Number(c[a]), t.dropWeight.push(n)
                            });
                            for (var l = Number(n.num), u = function () {
                                var e = h.Utils.weight_rand(t.dropWeight), a = t.finaReward.find(function (t) {
                                    return t.id == e.id
                                });
                                a ? a.num = Number(a.num) + 1 + "" : t.finaReward.push(e), l--
                            }; l > 0;) u()
                        } else t.finaReward.push(n)
                    }
                }), this.finaReward.forEach(function (e, a) {
                    if (e.id == r.gold) t.showAward.getChildByName("gold").active = !0, t.showAward.getChildByName("gold").getComponentInChildren(cc.Label).string = e.num; else if (e.id == r.diamond) t.showAward.getChildByName("diamond").active = !0, t.showAward.getChildByName("diamond").getComponentInChildren(cc.Label).string = e.num; else {
                        var n = t.showAward[a] ? t.showAward[a] : cc.instantiate(t.showAward.getChildByName("equip")),
                            i = m.DataMgr.getInstance().getEquipCfgById(Number(e.id));
                        t.loadSpriteFrame("EquipIcon", i.Icon, function (t) {
                            n.getChildByName("eqIcon").getComponent(cc.Sprite).spriteFrame = t
                        }), t.loadSpriteFrame("EquipIcon", i.BottomFrame, function (t) {
                            n.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = t
                        }), n.getChildByName("num").getComponent(cc.Label).string = e.num, t.showAward[a] || t.showAward.addChild(n), n.active = !0
                    }
                }), this.scheduleOnce(function () {
                    t.showAward.x = t.showAward.width < t.showAward.parent.width ? 0 : t.showAward.x
                }), this.customsData.setCustomStar([this.levelData.ChapterId, this.levelData.Level], this.currentStar), this.customsData.getCurrentCustom().currentCustom <= this.levelData.LevelId && this.customsData.setCurrentCustom(this.levelData.NextId), this.sendEvent(p.EventName.winGame)) : (d.AudioMgr.getInstance().playEffect(p.AudioId.Fail, 6), u.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.fail_x, l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level), e.getCurentDay() <= 7 && u.PlayerMgr.getInstance().getTrackData().trackDayz(f.TrackId.dayz_fail_x, e.getCurentDay(), l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level), this.center.getChildByName("win").active = !1, this.center.getChildByName("lose").active = !0, this.center.getChildByName("downLabel").active = !0, this.node.on(cc.Node.EventType.TOUCH_END, function () {
                    1 != t._isClick && (t._isClick = !0, t.closeCombat())
                }))
            }, e.prototype.againOn = function () {
                var t = this;
                1 != this._isClick && (this._isClick = !0, l.LevelMgr.getInstance().setLevel(this.levelData.LevelId), this.scheduleOnce(function () {
                    c.ResourceMgr.getInstance().loadRes("prefabs", "game/combat", cc.Prefab, function (e) {
                        var a = cc.instantiate(e);
                        cc.find("Scene").addChild(a), t.closeCombat(!0)
                    })
                }))
            }, e.prototype.toLevelUpOn = function () {
                var t = this;
                1 != this._isClick && (this._isClick = !0, this.openUI(p.UIID.UIPlantLevelUP, function () {
                    t.closeCombat()
                }))
            }, e.prototype.toInbornOn = function () {
                var t = this;
                1 != this._isClick && (this._isClick = !0, this.openUI(p.UIID.UIInbornUp, function () {
                    t.closeCombat()
                }))
            }, e.prototype.init = function (t, e, a) {
                this.levelData = l.LevelMgr.getInstance().levelData, u.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.finish_x, l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level), u.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.lv_finish_X, l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level);
                var n = u.PlayerMgr.getInstance().getSignData();
                n.getCurentDay() <= 7 && (u.PlayerMgr.getInstance().getTrackData().trackDayz(f.TrackId.dayz_finish_x, n.getCurentDay(), l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level), u.PlayerMgr.getInstance().getTrackData().trackDayz(f.TrackId.dayz_lv_finish_X, n.getCurentDay(), l.LevelMgr.getInstance().levelData.ChapterId + "-" + l.LevelMgr.getInstance().levelData.Level)), this.pass = t, this.costNum = e, this.costTime = a
            }, e.prototype.getAward = function (t) {
                var e = this;
                this.finaReward.forEach(function (a) {
                    if (a.id == r.gold) 1 != t ? e.userData.addGoldNum(Number(a.num)) : e.userData.addGoldNum(2 * Number(a.num)); else if (a.id == r.diamond) 1 != t ? e.userData.addDiamondNum(Number(a.num)) : e.userData.addDiamondNum(2 * Number(a.num)); else for (var n = Number(a.num); n > 0;) y.EquipMgr.getInstance().addEquip(Number(a.id)), 1 == t && y.EquipMgr.getInstance().addEquip(Number(a.id)), n--
                }), this.closeCombat()
            }, e.prototype.doubleGet = function () {
                var t = this;
                g.SdkMgr.getInstance().playVideo(null, function () {
                    var e = u.PlayerMgr.getInstance().getSignData();
                    e.getCurentDay() <= 7 && u.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.dayz_doublegem, e.getCurentDay()), u.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.doublegem), t.getAward(!0)
                })
            }, e.prototype.closeCombat = function (t) {
                var e = cc.find("Scene/combat"), a = cc.find("uiRoot/UIHome");
                e.active = !1, e.destroy(), t || (d.AudioMgr.getInstance().stopMusic(p.AudioId.bgComabt), d.AudioMgr.getInstance().playMusic(p.AudioId.bgMain, "bgMain")), a.active = !t, this.closeUI(), u.PlayerMgr.getInstance().getShareData().clearData(), u.PlayerMgr.getInstance().isLock = !1
            }, e.prototype.update = function (t) {
                this.light.angle += 10 * t
            }, o([_({
                type: cc.Node,
                tooltip: lang.index60eed_506
            })], e.prototype, "center", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_507
            })], e.prototype, "again", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_508
            })], e.prototype, "toLevelUp", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_509
            })], e.prototype, "toInborn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_510
            })], e.prototype, "topStar", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_511
            })], e.prototype, "showLabel", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_512
            })], e.prototype, "showAward", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_513
            })], e.prototype, "light", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_514
            })], e.prototype, "shareBtn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_515
            })], e.prototype, "getBtn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_516
            })], e.prototype, "doubleGetBtn", void 0), o([_({
                type: cc.Node,
                tooltip: lang.index60eed_517
            })], e.prototype, "addDesktop", void 0), o([I], e)
        }(s.default);
        a.default = C, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/ResourceMgr": "ResourceMgr",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/EquipMgr": "EquipMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIGetResource: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "01d94nFYrhPbr1PKH3rtTPm", "UIGetResource");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../commonModel/config/CommonCfg"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/manager/SdkMgr"), l = t("../config/Config"), u = t("../datas/TrackDataEvent"),
            p = t("../manager/DataMgr"), d = t("../manager/LevelMgr"), h = t("../manager/PlayerMgr"), g = cc._decorator,
            f = g.ccclass, m = g.property, y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.show = null, e.cancelBtn = null, e.getBtn = null, e.title = null, e.isClick = !1, e
                }

                return i(e, t), e.prototype.start = function () {
                    this.changePop(), this.addEvent(r.CommonEventName.GetRewardEnd, this.closeUI), this.cancelBtn.on(cc.Node.EventType.TOUCH_END, this.closePop.bind(this)), this.getBtn.on(cc.Node.EventType.TOUCH_END, this.watchAdv.bind(this))
                }, e.prototype.changePop = function () {
                    var t, e = this, a = p.DataMgr.getInstance().getAllParamsCfg();
                    this.currenShow == l.Currency.gold ? (t = 5 - this.resNumData.getNum(l.Currency.gold), this.RewardNum = Number(a[0].value.split(",")[t]) || Number(a[0].value.split(",")[4])) : this.currenShow == l.Currency.diamond && (t = 5 - this.resNumData.getNum(l.Currency.diamond), this.RewardNum = Number(a[1].value.split(",")[t]) || Number(a[1].value.split(",")[4]));
                    var n = this.currenShow == l.Currency.sun ? 100 : this.RewardNum;
                    this.show.children.forEach(function (t) {
                        t.name != e.currenShow ? t.active = !1 : (t.active = !0, e.currenShow != l.Currency.ljf ? (e.cancelBtn.getComponent(cc.Button).enabled = !1, e.getBtn.getComponent(cc.Button).enabled = !1, e.title.string = lang.index60eed_518, t.getChildByName("num").getComponent(cc.Label).string = "x" + n) : (e.cancelBtn.getComponent(cc.Button).enabled = !0, e.getBtn.getComponent(cc.Button).enabled = !0, e.title.string = lang.index60eed_519, e.scheduleOnce(function () {
                            cc.director.pause()
                        })))
                    })
                }, e.prototype.closePop = function () {
                    cc.director.resume(), this.closeUI()
                }, e.prototype.watchAdv = function () {
                    var t = this;
                    if (!this.isClick) {
                        var e;
                        this.isClick = !0;
                        var a = h.PlayerMgr.getInstance().getSignData();
                        switch (this.currenShow) {
                            case l.Currency.gold:
                                if ((e = this.resNumData.getNum(l.Currency.gold)) <= 0) return this.openUI(l.UIID.UITips, lang.index60eed_520), void (this.isClick = !1);
                                c.SdkMgr.getInstance().playVideo(null, function () {
                                    h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.coin), a.getCurentDay() <= 7 && h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.dayz_coin, a.getCurentDay()), t.resNumData.lossNum(l.Currency.gold), t.userData.addGoldNum(t.RewardNum)
                                });
                                break;
                            case l.Currency.diamond:
                                if ((e = this.resNumData.getNum(l.Currency.diamond)) <= 0) return this.openUI(l.UIID.UITips, lang.index60eed_521), void (this.isClick = !1);
                                c.SdkMgr.getInstance().playVideo(null, function () {
                                    h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.gem), a.getCurentDay() <= 7 && h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.dayz_gem, a.getCurentDay()), t.resNumData.lossNum(l.Currency.diamond), t.userData.addDiamondNum(t.RewardNum)
                                });
                                break;
                            case l.Currency.ljf:
                                if (e = d.LevelMgr.getInstance().ljfNum, cc.director.resume(), e <= 0) return this.openUI(l.UIID.UITips, lang.index60eed_522), this.isClick = !1, void this.closeUI();
                                cc.director.pause(), c.SdkMgr.getInstance().playVideo(null, function () {
                                    cc.director.resume(), t.closeUI(), h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.lvskill), d.LevelMgr.getInstance().ljfNum -= 1, h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.lv_lvskill_x_y, d.LevelMgr.getInstance().levelData.ChapterId + "-" + d.LevelMgr.getInstance().levelData.Level, 6 - d.LevelMgr.getInstance().ljfNum), a.getCurentDay() <= 7 && (h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.dayz_lvskill, a.getCurentDay()), h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.dayz_lv_lvskill_x_y, a.getCurentDay(), d.LevelMgr.getInstance().levelData.ChapterId + "-" + d.LevelMgr.getInstance().levelData.Level, 6 - d.LevelMgr.getInstance().ljfNum)), t.sendEvent(l.EventName.getCombatResource, l.Currency.ljf)
                                });
                                break;
                            case l.Currency.sun:
                                c.SdkMgr.getInstance().playVideo(null, function () {
                                    h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.sunsupply), d.LevelMgr.getInstance().getSunNum += 1, h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.lv_sunsupply_x_y, d.LevelMgr.getInstance().levelData.ChapterId + "-" + d.LevelMgr.getInstance().levelData.Level, d.LevelMgr.getInstance().getSunNum), a.getCurentDay() <= 7 && (h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.dayz_sunsupply, a.getCurentDay()), h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.dayz_lv_sunsupply_x_y, a.getCurentDay(), d.LevelMgr.getInstance().levelData.ChapterId + "-" + d.LevelMgr.getInstance().levelData.Level, d.LevelMgr.getInstance().getSunNum)), t.sendEvent(l.EventName.sunChange, 100, !0), t.closeUI()
                                })
                        }
                    }
                }, e.prototype.init = function (t) {
                    this.isClick = !1, this.currenShow = t, this.userData = h.PlayerMgr.getInstance().getUserData(), this.resNumData = h.PlayerMgr.getInstance().getResNumData()
                }, o([m({
                    type: cc.Node,
                    tooltip: lang.index60eed_523
                })], e.prototype, "show", void 0), o([m({
                    type: cc.Node,
                    tooltip: lang.index60eed_524
                })], e.prototype, "cancelBtn", void 0), o([m({
                    type: cc.Node,
                    tooltip: lang.index60eed_525
                })], e.prototype, "getBtn", void 0), o([m({
                    type: cc.Label,
                    tooltip: lang.index60eed_526
                })], e.prototype, "title", void 0), o([f], e)
            }(s.default);
        a.default = y, cc._RF.pop()
    }, {
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIGuide: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "13b341f1+lNtrnOaHjOg+no", "UIGuide");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.UIGuideData = a.DirPos = void 0;
        var r, s = t("../../framework/base/BaseUI"), c = t("../../framework/configs/Appcfg"),
            l = t("../../framework/manager/EventMgr"), u = cc._decorator, p = u.ccclass, d = u.property;
        (function (t) {
            t[t.TopRight = 0] = "TopRight", t[t.TopLeft = 1] = "TopLeft", t[t.BottomLeft = 2] = "BottomLeft", t[t.BottomRight = 3] = "BottomRight"
        })(r = a.DirPos || (a.DirPos = {}));
        a.UIGuideData = function () {
            this.clickType = 0, this.distNode = null, this.tipstring = null, this.dir = r.TopRight, this.isWeek = !1, this.lightType = 0, this.showHand = !0, this.delay = .1, this.startNode = null, this.endNode = null, this.moveTime = 1, this.hideMask = !1, this.addSize = new cc.Size(40, 40), this.callBack = null, this.tipsOffest = cc.Vec2.ZERO, this.maskOffest = cc.Vec2.ZERO, this.groupLast = !1, this.finishMoveEnd = !1, this.showPlant = !0, l.EventMgr.getInstance().emit(c.BaseEventName.blocktouch, !1)
        };
        var h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.mask = null, e.hand = null, e.hand1 = null, e.hand2 = null, e.lightFrame = null, e.tipBg = null, e.tipText = null, e.distNode = null, e.dirPos = r.TopRight, e
            }

            return i(e, t), e.prototype.init = function (t) {
                this.cfg = t
            }, e.prototype.clickTouch = function (t) {
                var e, a = this;
                if (cc.log(lang.index60eed_527), this.hand.active = !1, this.tipBg.active = !1, this.cfg = t, t.dir && (this.dirPos = t.dir), this.distNode = t.distNode, t.distNode) {
                    var n = this.distNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        i = this.mask.node.parent.convertToNodeSpaceAR(n);
                    this.mask.node.setContentSize(900, 900), this.mask.node.setPosition(i), e = t.distNode.getContentSize()
                } else this.mask.node.setContentSize(0, 0), this.mask.node.setPosition(0, 0), e = new cc.Size(0, 0);
                if (this.mask.node.active = !0, this.scheduleOnce(function () {
                    0 == t.lightType ? a.mask.type = cc.Mask.Type.ELLIPSE : a.mask.type = cc.Mask.Type.RECT
                }, .01), t.isWeek && t.hideMask) this.mask.node.active = !1, this.scheduleOnce(function () {
                    l.EventMgr.getInstance().emit(c.BaseEventName.blocktouch, !0)
                }, .1), this.showHand(), this.showTip(t.tipstring); else {
                    var o = .7;
                    0 == e.width && 0 == e.height && (o = 0), cc.tween(this.mask.node).to(o, {
                        width: e.width + this.cfg.addSize.width,
                        height: e.height + this.cfg.addSize.height,
                        x: this.mask.node.x + this.cfg.maskOffest.x,
                        y: this.mask.node.y + this.cfg.maskOffest.y
                    }).call(function () {
                        a.lightFrame.position = a.mask.node.position, a.lightFrame.width = a.mask.node.width, a.lightFrame.height = a.mask.node.height, a.lightFrame.active = !0, a.showHand(), a.showTip(t.tipstring)
                    }).delay(.1).call(function () {
                        l.EventMgr.getInstance().emit(c.BaseEventName.blocktouch, !0)
                    }).start()
                }
            }, e.prototype.moveTouch = function (t) {
                var e = this;
                if (cc.log(lang.index60eed_528), t.startNode && t.endNode) {
                    cc.log(lang.index60eed_529), this.schedule(function () {
                        e.cfg.finishMoveEnd && (e.unscheduleAllCallbacks(), e.cfg.callBack && e.cfg.callBack(), e.closeUI())
                    }), t.hideMask ? this.mask.node.active = !1 : this.mask.node.active = !0;
                    var a = t.startNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        n = t.endNode.convertToWorldSpaceAR(cc.Vec2.ZERO), i = this.hand.parent.convertToNodeSpaceAR(a),
                        o = this.hand.parent.convertToNodeSpaceAR(n);
                    if (this.scheduleOnce(function () {
                        e.hand.getComponent(cc.Animation).stop("handAni")
                    }, .2), this.hand.setPosition(i), this.hand.active = !0, this.moveTween = cc.tween(this.hand).to(t.moveTime, {position: new cc.Vec3(o.x, o.y)}).delay(.5).call(function () {
                        e.hand.setPosition(i)
                    }).union().repeatForever(), this.moveTween.start(), t.hideMask) this.showHand(), this.showTip(t.tipstring); else {
                        var r = Math.abs(o.x - i.x), s = Math.abs(o.y - i.y);
                        s = Math.max(t.startNode.height, t.endNode.height, s), r = Math.max(t.startNode.width, t.endNode.width, r);
                        var c = cc.v2(.5 * (o.x - i.x) + i.x, .5 * (i.y - o.y));
                        cc.log(c), this.mask.node.setContentSize(900, 900), this.mask.node.setPosition(c);
                        var l = cc.size(r + t.startNode.width, s + t.startNode.height);
                        cc.tween(this.mask.node).to(.7, {
                            width: l.width + this.cfg.addSize.width,
                            height: l.height + this.cfg.addSize.height
                        }).call(function () {
                            e.showHand(), e.showTip(t.tipstring)
                        }).start()
                    }
                } else this.closeUI()
            }, e.prototype.start = function () {
                var t = this;
                (!this.cfg.delay || this.cfg.delay < .1) && (this.cfg.delay = .1), this.scheduleOnce(function () {
                    0 == t.cfg.clickType ? t.clickTouch(t.cfg) : t.moveTouch(t.cfg)
                }, this.cfg.delay), this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                    if (t.cfg.isWeek || !t.mask.node.active) return t.cfg.callBack ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1), void t.closeUI();
                    if (t.distNode || t.cfg.startNode) {
                        var a = void 0;
                        a = 0 != t.cfg.clickType ? t.cfg.startNode.getBoundingBoxToWorld() : t.distNode.getBoundingBoxToWorld(), cc.log(a), a.contains(e.getLocation()) ? (0 == t.cfg.clickType && t.cfg.groupLast && t.closeUI(), t.cfg.callBack && 0 == t.cfg.clickType ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1)) : t.node._touchListener.setSwallowTouches(!0)
                    }
                }, this), this.mask.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_START, function (e) {
                    if (t.cfg.isWeek || !t.mask.node.active) return t.cfg.callBack ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1), void t.closeUI();
                    t.distNode && t.distNode.getBoundingBoxToWorld().contains(e.getLocation()) && (t.cfg.callBack ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1), t.closeUI())
                }, this)
            }, e.prototype.showHand = function () {
                this.cfg.showHand && (this.hand.setPosition(this.mask.node.position), this.hand.active = !0)
            }, e.prototype.refreshTips = function (t) {
                this.cfg = t, this.showTip(this.cfg.tipstring)
            }, e.prototype.showTip = function (t) {
                t && t.length > 0 ? (this.tipBg.active = !0, this.tipText.string = t, 0 == this.cfg.clickType ? this.tipBg.setPosition(this.mask.node.position.x + this.mask.node.width / 2, this.mask.node.position.y - this.tipBg.height / 2) : this.tipBg.setPosition(this.cfg.endNode.position.x, this.cfg.endNode.position.y), this.tipText.node.children[0].active = this.cfg.showPlant, this.tipBg.x += this.cfg.tipsOffest.x, this.tipBg.y += this.cfg.tipsOffest.y) : this.tipBg.active = !1
            }, o([d(cc.Mask)], e.prototype, "mask", void 0), o([d(cc.Node)], e.prototype, "hand", void 0), o([d(cc.Node)], e.prototype, "hand1", void 0), o([d(cc.Node)], e.prototype, "hand2", void 0), o([d(cc.Node)], e.prototype, "lightFrame", void 0), o([d(cc.Node)], e.prototype, "tipBg", void 0), o([d(cc.RichText)], e.prototype, "tipText", void 0), o([p], e)
        }(s.default);
        a.default = h, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/EventMgr": "EventMgr"
    }],
    UIHome: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "c7579ljm/FFjKMoISpmDA53", "UIHome");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../Main"), s = t("../../commonModel/config/CommonCfg"),
            c = t("../../framework/base/BasePlatform"), l = t("../../framework/base/BaseUI"),
            u = t("../../framework/manager/LogMgr"), p = t("../../framework/manager/PlatformManager"),
            d = t("../../framework/manager/ResCacheMgr"), h = t("../../framework/manager/ResourceMgr"),
            g = t("../../framework/manager/SdkMgr"), f = t("../../framework/manager/TweenMgr"),
            m = t("../../framework/manager/UIMgr"), y = t("../config/Config"), v = t("../datas/TrackDataEvent"),
            I = t("../global/Global"), _ = t("../manager/AwardMgr"), b = t("../manager/DataMgr"),
            C = t("../manager/PlayerMgr"), D = t("./UIGuide"), M = cc._decorator, k = M.ccclass, N = M.property,
            w = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.inbotnBtn = null, e.lotteryBtn = null, e.levelUpBtn = null, e.settingBtn = null, e.signBtn = null, e.summerBtn = null, e.careBtn = null, e.equipBtn = null, e.sidebarBtn = null, e.addTableBtn = null, e
                }

                return i(e, t), e.prototype.onEnable = function () {
                    if (u.LogMgr.getInstance().debug("onEnable"), C.PlayerMgr.getInstance().getGuideData().getCurrentId() >= 9 && C.PlayerMgr.getInstance().getGuideData().getCurrentId() < 11 && !C.PlayerMgr.getInstance().getGuideData().getGuideEnd() && (this.guideCfgArr = b.DataMgr.getInstance().getAllGuideCfg(), this.startGuide()), I.Global.hasEquip) if (C.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom > b.DataMgr.getInstance().getSystemUnlockById(1).UnlockParam && 12 == C.PlayerMgr.getInstance().getGuideData().getCurrentId()) {
                        for (var t = !1, e = C.PlayerMgr.getInstance().getEquipData().getEquipData(), a = 0; a < e.length; a++) if (1 == b.DataMgr.getInstance().getEquipCfgById(e[a].equipId).Type) {
                            t = !0;
                            break
                        }
                        if (!t) return;
                        this.guideCfgArr = b.DataMgr.getInstance().getAllGuideCfg(), this.startGuide()
                    } else C.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom > b.DataMgr.getInstance().getSystemUnlockById(2).UnlockParam && 19 == C.PlayerMgr.getInstance().getGuideData().getCurrentId() && (this.guideCfgArr = b.DataMgr.getInstance().getAllGuideCfg(), this.startGuide());
                    if (this.equipBtn.active = I.Global.hasEquip, I.Global.hasEquip) {
                        this.equipBtn.getChildByName("lock").active = C.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom <= b.DataMgr.getInstance().getSystemUnlockById(1).UnlockParam;
                        var n = b.DataMgr.getInstance().getLevelCfgById(b.DataMgr.getInstance().getSystemUnlockById(1).UnlockParam);
                        this.equipBtn.getChildByName("lock").getComponentInChildren(cc.Label).string = n.ChapterId + "-" + n.Level + lang.index60eed_530
                    }
                }, e.prototype.start = function () {
                    var t = this;
                    if (p.PlatformManager.currentPlatform == c.Platform.KuaiShou && (this.settingBtn.parent.getComponent(cc.Widget).left = 160), r.default.instance.hideLoading(), this.userData = C.PlayerMgr.getInstance().getUserData(), this.lockData = C.PlayerMgr.getInstance().getLockData(), this.initBtnListener(), this.showRedPoint(), this.addEvent(s.CommonEventName.GetRewardEnd, this.showRedPoint), this.addEvent(y.EventName.showEquipRed, function (e) {
                        t.refreshCollectionRed(t.equipBtn.getChildByName("redPoint"), e)
                    }), this.signBtn.active = I.Global.showSign, this.summerBtn.active = I.Global.showSummer, this.careBtn.active = p.PlatformManager.getInstance().canShare() && p.APPMgr.currentApp == c.AppName.Slay, p.PlatformManager.getInstance().canShare() && p.APPMgr.currentApp == c.AppName.Invincible && (this.sidebarBtn.getComponent(cc.Widget).left = 104.5, this.addTableBtn.getComponent(cc.Widget).left = 175.5), this.sidebarBtn.active = p.PlatformManager.getInstance().canShare(), this.addTableBtn.active = p.PlatformManager.getInstance().canShare(), this.equipBtn.active = I.Global.hasEquip, I.Global.hasEquip) {
                        this.equipBtn.getChildByName("lock").active = C.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom <= b.DataMgr.getInstance().getSystemUnlockById(1).UnlockParam;
                        var e = b.DataMgr.getInstance().getLevelCfgById(b.DataMgr.getInstance().getSystemUnlockById(1).UnlockParam);
                        this.equipBtn.getChildByName("lock").getComponentInChildren(cc.Label).string = e.ChapterId + "-" + e.Level + lang.index60eed_531
                    }
                }, e.prototype.showRedPoint = function () {
                    var t = this, e = this.userData.getGoldNum();
                    if (I.Global.deZSlottery) this.refreshCollectionRed(this.lotteryBtn.getChildByName("redPoint"), !1); else {
                        var a = b.DataMgr.getInstance().getAllDrawCardCfg();
                        this.refreshCollectionRed(this.lotteryBtn.getChildByName("redPoint"), this.userData.getDiamondNum() >= Number(a[0].Consume.split(",")[1]))
                    }
                    var n = !1;
                    if (I.Global.newPlantInborn) {
                        var i = C.PlayerMgr.getInstance().getNewInbornData(),
                            o = b.DataMgr.getInstance().getNewInbornCfgById(i.getCurrentId()),
                            r = b.DataMgr.getInstance().getInbornMultipleCfgById(i.getCurrentJklId()),
                            s = C.PlayerMgr.getInstance().getCustomData().getCurrentCustom();
                        n = s.currentCustom > o.BelongLevel && null != o && e >= Number(o.ActivationConsume.split(",")[1]) || s.currentCustom > r.BelongLevel && null != r && this.userData.getDiamondNum() >= Number(r.ActivationConsume.split(",")[1])
                    } else {
                        var c = this.userData.getinbornData(), l = b.DataMgr.getInstance().getAllParamsCfg(), u = 0;
                        c.forEach(function (t) {
                            u += t.inbornLevel, u -= t.freeNum
                        }), n = e >= u * Number(l[3].value.split(",")[1]) + Number(l[5].value.split(",")[1])
                    }
                    this.refreshCollectionRed(this.inbotnBtn.getChildByName("redPoint"), n), this.refreshCollectionRed(this.signBtn.getChildByName("redPoint"), C.PlayerMgr.getInstance().getSignData().checkTodyCanSign());
                    for (var p = _.AwardMgr.getInstance().getAllStar(), d = b.DataMgr.getInstance().getAllBattlePassCfg(), h = 0; h < d.length && !(d[h].NeedStar > p); h++) {
                        var g = !C.PlayerMgr.getInstance().getAgainData().getSummerGetArrByIndex(h);
                        if (this.refreshCollectionRed(this.summerBtn.getChildByName("redPoint"), g), g) break
                    }
                    if (I.Global.hasEquip && C.PlayerMgr.getInstance().getEquipData().getEquipData().length <= 0) {
                        var f = 0, m = C.PlayerMgr.getInstance().getEquipData().getEquipData()[0];
                        C.PlayerMgr.getInstance().getEquipData().getEquipData().forEach(function (e) {
                            if (e) {
                                var a = b.DataMgr.getInstance().getEquipCfgById(e.equipId),
                                    n = C.PlayerMgr.getInstance().getEquipData().getPutOnArr(),
                                    i = b.DataMgr.getInstance().getEquipCfgById(n[a.Type - 1].equipId).Quality;
                                (!n[a.Type - 1] || n[a.Type - 1].equipId < a.ID && a.Quality > i || a.Quality > i) && t.refreshCollectionRed(t.equipBtn.getChildByName("redPoint"), !0), e.equipId == m.equipId ? f++ : (f = 1, m = e), f >= 3 && a.Quality < 15 && t.refreshCollectionRed(t.equipBtn.getChildByName("redPoint"), !0)
                            }
                        })
                    }
                    var y = this.userData.getPlantData();
                    for (this.userData.getItemData(), h = 0; h < y.length; h++) {
                        var v = b.DataMgr.getInstance().getHeroCfgById(y[h].plantId),
                            D = Number(v.LvScope.split(",")[0]) + y[h].plantLevel - 1,
                            M = b.DataMgr.getInstance().getHeroLevelById(D);
                        if (!(e < M.GoldConsume && (!I.Global.needUnLock || I.Global.needUnLock && this.lockData.getLockDataById(v.ID))) && this.userData.getItemDataById(M.FragmentId) >= M.FragmentNum) return this.refreshCollectionRed(this.levelUpBtn.getChildByName("redPoint"), !0)
                    }
                    this.refreshCollectionRed(this.levelUpBtn.getChildByName("redPoint"), !1)
                }, e.prototype.refreshCollectionRed = function (t, e) {
                    e ? (t.active = !0, f.TweenMgr.getInstance().playHeartAni(t)) : (t.active = !1, f.TweenMgr.getInstance().stopTween(t))
                }, e.prototype.btnOn = function (t) {
                    C.PlayerMgr.getInstance().isLock || (C.PlayerMgr.getInstance().isLock = !0, t == y.UIID.UIInbornUp && I.Global.newPlantInborn && (t = y.UIID.UINewInboren), m.UIMgr.getInstance().openUI(t, y.UIID.UINone))
                }, e.prototype.initBtnListener = function () {
                    var t = this;
                    this.lotteryBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.btnOn(y.UIID.UIPlantLottery)
                    }), this.levelUpBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.btnOn(y.UIID.UIPlantLevelUP)
                    }), this.inbotnBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.btnOn(y.UIID.UIInbornUp)
                    }), this.settingBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.btnOn(y.UIID.UISetting)
                    }), this.signBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.btnOn(y.UIID.UISign)
                    }), this.summerBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.btnOn(y.UIID.UISummerFestival)
                    }), this.sidebarBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.btnOn(y.UIID.UISidebar)
                    }), this.equipBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.equipBtn.getChildByName("lock").active ? t.openUI(y.UIID.UITips, lang.index60eed_532 + t.equipBtn.getChildByName("lock").getComponentInChildren(cc.Label).string) : t.btnOn(y.UIID.UIEquip)
                    }), this.careBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        p.PlatformManager.getInstance().otherFun(null, function () {
                            C.PlayerMgr.getInstance().getTrackData().youmengTrack(v.TrackId.follow)
                        })
                    }), g.SdkMgr.getInstance().checkShortcut(null, function (e) {
                        e || t.userData.getIsAddDesktop() ? t.addTableBtn.active = !1 : t.addTableBtn.on(cc.Node.EventType.TOUCH_END, function () {
                            g.SdkMgr.getInstance().addShortcut(null, function (e) {
                                lang.index60eed_533 == e && t.userData.setIsAddDesktop(!0), C.PlayerMgr.getInstance().getTrackData().youmengTrack(v.TrackId.desktopadd), t.openUI(y.UIID.UITips, e)
                            })
                        })
                    })
                }, e.prototype.startGuide = function () {
                    var t = C.PlayerMgr.getInstance().getGuideData(), e = this.getCfg(t.getCurrentId() - 1, t);
                    m.UIMgr.getInstance().openUI(y.UIID.UIGuide, y.UIID.UINone, e)
                }, e.prototype.getCfg = function (t) {
                    var e = new D.UIGuideData, a = this.guideCfgArr[t];
                    switch (e.clickType = a.GuideType, e.isWeek = 0 == a.GuideObj, t) {
                        case 8:
                            e.distNode = e.isWeek ? null : this.lotteryBtn;
                            break;
                        case 11:
                            e.distNode = this.equipBtn, C.PlayerMgr.getInstance().getGuideData().addCurrentId(!0);
                            break;
                        case 18:
                            e.distNode = e.isWeek ? null : this.lotteryBtn
                    }
                    e.tipstring = a.Describe, e.showHand = 1 == a.Finger, e.hideMask = 1 != a.Mask, (e.isWeek || 18 == t) && C.PlayerMgr.getInstance().getGuideData().addCurrentId(!0), e.groupLast = !0, e.showPlant = 1 == a.ShowPlant, e.lightType = 1, e.addSize = 0 == e.isWeek ? new cc.Size(40, 20) : new cc.Size(0, 0);
                    var n = a.BubbleOffset.split(",");
                    return e.tipsOffest = new cc.Vec2(Number(n[0]), Number(n[1])), e
                }, e.prototype.onCloseUI = function () {
                }, e.prototype.loadResExample = function () {
                    var t = this;
                    this.loadSpriteFrame("comimgs", "goods/dog", function () {
                    }), this.loadResFromBundle("comimgs", "goods/dog", cc.SpriteFrame, function () {
                    }), this.loadResFromBundle("comimgs", "goods/dog", cc.SpriteFrame, function () {
                    }, !0, 15), h.ResourceMgr.getInstance().loadSpriteframe("comimgs", "goods/dog", function () {
                        t.isclose
                    }, "UICacheExmaple"), h.ResourceMgr.getInstance().loadRes("prefabs", "ui/UIHome", cc.Prefab, function () {
                        t.isclose
                    }, "UICacheExmaple"), d.ResCacheMgr.getInstance().releaseAssetsFromMap("UICacheExmaple")
                }, o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_534
                })], e.prototype, "inbotnBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_535
                })], e.prototype, "lotteryBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_536
                })], e.prototype, "levelUpBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_537
                })], e.prototype, "settingBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_538
                })], e.prototype, "signBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_539
                })], e.prototype, "summerBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_540
                })], e.prototype, "careBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_541
                })], e.prototype, "equipBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_542
                })], e.prototype, "sidebarBtn", void 0), o([N({
                    type: cc.Node,
                    tooltip: lang.index60eed_543
                })], e.prototype, "addTableBtn", void 0), o([k], e)
            }(l.default);
        a.default = w, cc._RF.pop()
    }, {
        "../../Main": "Main",
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/ResCacheMgr": "ResCacheMgr",
        "../../framework/manager/ResourceMgr": "ResourceMgr",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../global/Global": "Global",
        "../manager/AwardMgr": "AwardMgr",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./UIGuide": "UIGuide"
    }],
    UIInbornUp: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "c384b5sMFlLTqNHTLz9Dzze", "UIInbornUp");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../commonModel/config/CommonCfg"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/configs/Appcfg"), l = t("../../framework/manager/SdkMgr"),
            u = t("../../framework/manager/TweenMgr"), p = t("../../framework/manager/UIMgr"),
            d = t("../../framework/utils/Utils"), h = t("../config/Config"), g = t("../datas/TrackDataEvent"),
            f = t("../global/Global"), m = t("../manager/DataMgr"), y = t("../manager/PlayerMgr"), v = cc._decorator,
            I = v.ccclass, _ = v.property, b = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.inbornShow = null, e.tips = null, e.returnBtn = null, e.levelUpBtn = null, e.freeLevelUpBtn = null, e.allInbornNumLabel = null, e.inbornCost = null, e.InbornArr = [], e.currentIndex = 0, e.state = 0, e.index = 0, e.repeat = 3, e.i = 0, e.finishNum = 0, e.passed_time = 0, e.walk_time = .2, e.girdIndexNum = 1, e.totalNum = 0, e.oneRepetNum = 10, e.isRuning = !1, e.allInbornNum = 0, e.currentInbornArr = [], e._isFree = !1, e.allFree = 0, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    y.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.enter_develop), this.addEvent(h.EventName.closeUI, function (e) {
                        1 == t.state || t.isRuning ? p.UIMgr.getInstance().openUI(h.UIID.UITips, h.UIID.UINone, lang.index60eed_544) : (y.PlayerMgr.getInstance().isLock = !1, e(), t.closeUI())
                    }), this.addEvent(c.BaseEventName.CloseUI, function () {
                        t._isClick = !1
                    }), this.levelUpBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        1 != t._isClick && (t._isClick = !0, t._isFree = !1, t.startLotty())
                    }), this.freeLevelUpBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        1 != t._isClick && (t._isClick = !0, l.SdkMgr.getInstance().playVideo(null, function () {
                            var e = y.PlayerMgr.getInstance().getSignData();
                            e.getCurentDay() <= 7 && y.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.dayz_develop, e.getCurentDay()), y.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.develop), t._isFree = !0, t.startLotty()
                        }))
                    }), this.InbornArr = m.DataMgr.getInstance().getAllInbornCfg(), this.userData = y.PlayerMgr.getInstance().getUserData(), this.inbornData = this.userData.getinbornData(), this.inbornData.forEach(function (e, a) {
                        t.allInbornNum += e.inbornLevel, t.allFree += e.freeNum || 0, t.inbornShow.children[a].getChildByName("level").color = (new cc.Color).fromHEX("#fffff9"), e.inbornLevel >= t.InbornArr[a].MaxLevel ? (t.inbornShow.children[a].getChildByName("level").getComponent(cc.Label).string = lang.index60eed_545, t.inbornShow.children[a].getChildByName("lock").active = !1) : 0 == e.inbornLevel ? (t.inbornShow.children[a].getChildByName("level").getComponent(cc.Label).string = lang.index60eed_546, t.inbornShow.children[a].getChildByName("lock").active = !0, t.currentInbornArr.push(t.inbornShow.children[a])) : (t.inbornShow.children[a].getChildByName("level").getComponent(cc.Label).string = "Lv." + e.inbornLevel, t.inbornShow.children[a].getChildByName("lock").active = !1, t.currentInbornArr.push(t.inbornShow.children[a]))
                    }), this.currentInbornArr.length <= 0 && (this.levelUpBtn.children[0].active = !0), this.changeCost(), this.oneRepetNum = this.currentInbornArr.length, this.chooseInborn(this.currentIndex), this.inbornShow.children.forEach(function (e, a) {
                        e.on(cc.Node.EventType.TOUCH_END, function () {
                            t.chooseInborn(a)
                        })
                    }), this.addEvent(r.CommonEventName.GetRewardEnd, function () {
                        t.changeCost()
                    })
                }, e.prototype.init = function (t) {
                    t && t()
                }, e.prototype.changeCost = function () {
                    var t = m.DataMgr.getInstance().getAllParamsCfg(),
                        e = this.userData.getGoldNum() < Number(t[3].value.split(",")[1]) * (this.allInbornNum - this.allFree) + Number(t[5].value.split(",")[1]) ? "#f70000" : "#46f700";
                    f.Global.volunInbornBtn && (this.levelUpBtn.active = "#46f700" == e, this.freeLevelUpBtn.active = "#46f700" != e), this.inbornCost.getChildByName("costNum").color = cc.color().fromHEX(e), this.inbornCost.getChildByName("costNum").getComponent(cc.Label).string = "" + (Number(t[3].value.split(",")[1]) * (this.allInbornNum - this.allFree) + +Number(t[5].value.split(",")[1])), this.allInbornNumLabel.string = lang.index60eed_547 + this.allInbornNum + lang.index60eed_548, this.refreshRed(this.levelUpBtn.getChildByName("redPoint"), this.userData.getGoldNum() >= Number(t[3].value.split(",")[1]) * this.allInbornNum + Number(t[5].value.split(",")[1]))
                }, e.prototype.refreshRed = function (t, e) {
                    e ? (t.active = !0, u.TweenMgr.getInstance().playHeartAni(t)) : (t.active = !1, u.TweenMgr.getInstance().stopTween(t))
                }, e.prototype.chooseInborn = function (t) {
                    1 == this.state || this.isRuning ? p.UIMgr.getInstance().openUI(h.UIID.UITips, h.UIID.UINone, lang.index60eed_549) : (this.inbornShow.children[this.currentIndex].getChildByName("choose").active = !1, this.inbornShow.children[t].getChildByName("choose").active = !0, this.currentIndex = t, this.tips.children[0].y = 50, this.tips.children[0].getComponent(cc.RichText).string = "<outline color = #3d240a width = 6><color=#fffff9>" + this.InbornArr[t].Name + "</c> <color=#fffff9>Lv." + this.inbornData[t].inbornLevel + "</c></outline>", this.tips.children[1].getComponent(cc.RichText).string = d.Utils.StringFormat(this.InbornArr[t].Desc, this.InbornArr[t].IncreasePerLevel * this.inbornData[t].inbornLevel))
                }, e.prototype.startLotty = function () {
                    if (this.currentInbornArr.length <= 0) return p.UIMgr.getInstance().openUI(h.UIID.UITips, h.UIID.UINone, lang.index60eed_550), void (this.levelUpBtn.children[0].active = !0);
                    if (1 == this.state || this.isRuning) p.UIMgr.getInstance().openUI(h.UIID.UITips, h.UIID.UINone, lang.index60eed_551); else {
                        if (!this._isFree) {
                            if (this.userData.getGoldNum() < Number(this.inbornCost.getChildByName("costNum").getComponent(cc.Label).string)) return void p.UIMgr.getInstance().openUI(h.UIID.UIGetResource, h.UIID.UINone, h.Currency.gold);
                            var t = y.PlayerMgr.getInstance().getSignData();
                            t.getCurentDay() <= 7 && y.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.dayz_develop_coin, t.getCurentDay()), y.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.develop_coin), this.userData.subGoldNum(Number(this.inbornCost.getChildByName("costNum").getComponent(cc.Label).string))
                        }
                        if (this.state = 1, this.index = d.Utils.randomRang(0, this.currentInbornArr.length), 0 == this.i) this.totalNum = (this.repeat - 1) * this.oneRepetNum + this.index + 1; else {
                            var e;
                            e = this.i > this.index ? this.oneRepetNum - this.i + this.index : this.i == this.index ? this.oneRepetNum : this.index - this.i, this.totalNum = (this.repeat - 1) * this.oneRepetNum + e
                        }
                        this.refreshState()
                    }
                }, e.prototype.refreshState = function () {
                    this.girdIndexNum = 1, this.finishNum = 0, this.passed_time = 0, this.walk_time = .2, this.inbornShow.children.forEach(function (t) {
                        t.getChildByName("choose").active = !1
                    })
                }, e.prototype.selectNode = function () {
                    var t = this.inbornShow.children.indexOf(this.currentInbornArr[this.index]);
                    this.inbornData[t].inbornLevel += 1, this._isFree && (this.allFree += 1, this.userData.setinbornFree(this.inbornData[t].inbornId)), this.currentInbornArr[this.index].getChildByName("lock").active = !1, p.UIMgr.getInstance().openUI(h.UIID.UIAward, h.UIID.UIPlantLevelUP, h.TipType.inborn, this.InbornArr[t], this.inbornData[t].inbornLevel), this.inbornData[t].inbornLevel >= this.InbornArr[t].MaxLevel ? (this.inbornShow.children[t].getChildByName("level").getComponent(cc.Label).string = lang.index60eed_552, this.currentInbornArr.splice(this.index, 1), this.currentInbornArr.length <= 0 && (this.levelUpBtn.children[0].active = !0)) : (this.inbornShow.children[t].getChildByName("level").getComponent(cc.Label).string = "Lv." + this.inbornData[t].inbornLevel, this.userData.setinbornData(this.inbornData[t].inbornId, this.inbornData[t].inbornLevel)), this.allInbornNum += 1, this.changeCost(), this.chooseInborn(t), this.sendEvent(r.CommonEventName.GetRewardEnd)
                }, e.prototype.update = function (t) {
                    if (0 != this.state) {
                        if (1 == this.state && (this.passed_time += t, this.passed_time >= this.walk_time)) {
                            this.i >= this.currentInbornArr.length && (this.i = 0), this.girdIndexNum % this.oneRepetNum == 0 && this.finishNum++, this.currentInbornArr[this.i].getChildByName("choose").active = !0;
                            var e = (this.i - 1 < 0 ? this.currentInbornArr[this.currentInbornArr.length - 1] : this.currentInbornArr[this.i - 1]).getChildByName("choose");
                            if (cc.tween(e).to(.2, {opacity: 0}).call(function () {
                                e.active = !1, e.opacity = 255
                            }).start(), this.girdIndexNum > this.totalNum - 2 && this.i == this.index) return this.state = 2, void this.selectNode();
                            this.passed_time = 0, this.walk_time = .1, this.girdIndexNum < 3 ? this.walk_time = .5 : this.girdIndexNum < 4 ? this.walk_time = .4 : this.girdIndexNum < 6 ? this.walk_time = .3 : this.girdIndexNum > this.totalNum - 1 ? this.walk_time = .8 : this.girdIndexNum > this.totalNum - 2 ? this.walk_time = .6 : this.girdIndexNum > this.totalNum - 3 ? this.walk_time = .5 : this.girdIndexNum > this.totalNum - 4 && (this.walk_time = .3), this.i++, this.girdIndexNum += 1
                        }
                        2 == this.state && (this.state = 0)
                    }
                }, o([_({
                    type: cc.Node,
                    tooltip: lang.index60eed_553
                })], e.prototype, "inbornShow", void 0), o([_({
                    type: cc.Node,
                    tooltip: lang.index60eed_554
                })], e.prototype, "tips", void 0), o([_({
                    type: cc.Node,
                    tooltip: lang.index60eed_555
                })], e.prototype, "returnBtn", void 0), o([_({
                    type: cc.Node,
                    tooltip: lang.index60eed_556
                })], e.prototype, "levelUpBtn", void 0), o([_({
                    type: cc.Node,
                    tooltip: lang.index60eed_557
                })], e.prototype, "freeLevelUpBtn", void 0), o([_({
                    type: cc.RichText,
                    tooltip: lang.index60eed_558
                })], e.prototype, "allInbornNumLabel", void 0), o([_({
                    type: cc.Node,
                    tooltip: lang.index60eed_559
                })], e.prototype, "inbornCost", void 0), o([I], e)
            }(s.default);
        a.default = b, cc._RF.pop()
    }, {
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UILoadCombat: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "599cdt7tXdMYYyN2ur1vE3g", "UILoadCombat");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/manager/ResourceMgr"), s = t("../../framework/manager/UIMgr"),
            c = t("../config/Config"), l = t("../manager/DataMgr"), u = t("../manager/LevelMgr"),
            p = t("../manager/PlayerMgr"), d = t("./UIGuide"), h = cc._decorator, g = h.ccclass, f = h.property,
            m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.progressBar = null, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    r.ResourceMgr.getInstance().preload("prefabs", ["UICombat"]), r.ResourceMgr.getInstance().loadDir("hero", "", function () {
                        t.progressBar.fillRange = 1, t.scheduleOnce(function () {
                            t.node.active = !1, s.UIMgr.getInstance().openUI(c.UIID.UICombat, c.UIID.UINone), p.PlayerMgr.getInstance().getGuideData().getGuideEnd() || 11 != p.PlayerMgr.getInstance().getGuideData().getCurrentId() || 610002 != u.LevelMgr.getInstance().levelData.LevelId ? u.LevelMgr.getInstance().levelData.Superplants && s.UIMgr.getInstance().openUI(c.UIID.UISuperPlant, c.UIID.UINone) : t.startGuide(), t.node.destroy()
                        }, .1)
                    })
                }, e.prototype.startGuide = function (t) {
                    var e = p.PlayerMgr.getInstance().getGuideData(), a = this.getCfg(e.getCurrentId() - 1, t, e);
                    s.UIMgr.getInstance().openUI(c.UIID.UIGuide, c.UIID.UINone, a)
                }, e.prototype.getCfg = function (t, e) {
                    var a = l.DataMgr.getInstance().getAllGuideCfg(), n = new d.UIGuideData, i = a[t];
                    n.clickType = i.GuideType, n.isWeek = 0 == i.GuideObj, 0 == n.clickType && (e = e, n.distNode = 0 == n.isWeek ? e : null), n.tipstring = i.Describe, n.showHand = 1 == i.Finger, n.hideMask = 1 != i.Mask, n.showPlant = 1 == i.ShowPlant, n.lightType = 1, n.addSize = 0 == n.isWeek ? new cc.Size(40, 20) : new cc.Size(0, 0), 7 == t && (n.addSize = new cc.Size(0, 0)), n.callBack = function () {
                        u.LevelMgr.getInstance().levelData.Superplants && s.UIMgr.getInstance().openUI(c.UIID.UISuperPlant, c.UIID.UINone)
                    }, p.PlayerMgr.getInstance().getGuideData().addCurrentId();
                    var o = i.BubbleOffset.split(",");
                    return n.tipsOffest = new cc.Vec2(Number(o[0]), Number(o[1])), n
                }, e.prototype.init = function () {
                }, e.prototype.update = function (t) {
                    this.progressBar.fillRange < .99 && (this.progressBar.fillRange += .3 * t)
                }, o([f(cc.Sprite)], e.prototype, "progressBar", void 0), o([g], e)
            }(cc.Component);
        a.default = m, cc._RF.pop()
    }, {
        "../../framework/manager/ResourceMgr": "ResourceMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../config/Config": "Config",
        "../manager/DataMgr": "DataMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./UIGuide": "UIGuide"
    }],
    UIMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "ce4b5DsRi9JnJiilB/Cdu7a", "UIMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.UIMgr = void 0;
        var n = t("../../game/config/Config"), i = t("../base/BaseUI"), o = t("../configs/Appcfg"), r = t("./EventMgr"),
            s = t("./LogMgr"), c = t("./ResourceMgr"), l = function (t, e, a, n, i, o, r, s, c) {
                this.uid = t, this.callback = n, this.parent = a, this.fromId = e, this.param1 = i, this.param2 = o, this.param3 = r, this.param4 = s, this.param5 = c
            }, u = function () {
                function t() {
                    this.uistatck = new Map, this.uichace = new Map, this.orderMap = new Map, this.popStatck = [], this.logStatck = [], this.watingOpen = [], this.onlyShowOne = [], this.activityOne = [], this.layerNodeMap = new Map, this.otherUIConf = [], this.uiRoot = null, this.UIConf = {}, this.isopening = !1, this.touchTime = -1
                }

                return t.getInstance = function () {
                    return null == this.instance && (this.instance = new t), this.instance
                }, t.prototype.preLoadUI = function (t, e) {
                    var a = this, n = this.getUICnf(t);
                    n ? c.ResourceMgr.getInstance().loadRes(n.bundleName, n.prefab, cc.Prefab, function (o) {
                        var r = cc.instantiate(o);
                        r.name = n.name;
                        var s = r.getComponent(i.default);
                        a.uichace.set(t, s), e && e()
                    }) : s.LogMgr.getInstance().error(lang.index60eed_560, t)
                }, t.prototype.addLayerShowOne = function (t) {
                    this.onlyShowOne.push(t)
                }, t.prototype.addLayerActivityOne = function (t) {
                    this.activityOne.push(t)
                }, t.prototype.addUICnf = function (t) {
                    this.otherUIConf.push(t)
                }, t.prototype.setConf = function (t) {
                    this.UIConf = t
                }, t.prototype.Init = function (t) {
                    this.uiRoot = t, this.UIConf = n.UICF, this.touchTime = -1, this.addTipsNode()
                }, t.prototype.addBlockTouch = function () {
                    this.blockNode = new cc.Node, this.blockNode.height = cc.view.getVisibleSize().height, this.blockNode.width = cc.view.getVisibleSize().width, this.blockNode.parent = this.uiRoot, this.blockNode.zIndex = 99999, this.blockNode.on(cc.Node.EventType.TOUCH_START, function () {
                    })
                }, t.prototype.addTipsNode = function () {
                    var t = this;
                    this.tipsNode && this.tipsNode.destroy(), this.tipsNode = new cc.Node, this.tipsNode.height = cc.view.getVisibleSize().height, this.tipsNode.width = cc.view.getVisibleSize().width;
                    var e = new cc.Node, a = e.addComponent(cc.Label);
                    a.string = lang.index60eed_561, a.fontSize = 20, e.parent = this.tipsNode, e.y = -(cc.view.getVisibleSize().height / 2 - 20), e.active = !1, this.tipsNode.parent = this.uiRoot, this.tipsNode.zIndex = 99999, this.tipsNode.on(cc.Node.EventType.TOUCH_START, function () {
                        var a = (new Date).getTime();
                        -1 != t.touchTime && a - t.touchTime < 200 ? t.touchNum++ : t.touchNum = 0, t.touchNum >= 20 && (e.active = !0, setTimeout(function () {
                            e.active = !1
                        }, 2e3)), t.touchTime = (new Date).getTime()
                    }), this.tipsNode._touchListener.setSwallowTouches(!1)
                }, t.prototype.openUIOfParent = function (t, e, a, n, i, o, r, s) {
                    this.open(t, e, a, n, i, o, r, s)
                }, t.prototype.openUIOfCallback = function (t, e, a, n, i, o, r, s) {
                    this.open(t, e, this.uiRoot, a, n, i, o, r, s)
                }, t.prototype.openUIOfParentAndCallback = function (t, e, a, n, i, o, r, s, c) {
                    this.open(t, e, a, n, i, o, r, s, c)
                }, t.prototype.openUI = function (t, e, a, n, i, o, r) {
                    this.open(t, e, this.uiRoot, null, a, n, i, o, r)
                }, t.prototype.open = function (t, e, a, n, u, p, d, h, g) {
                    var f = this;
                    if (this.isopening) {
                        var m = new l(t, e, a, n, u, p, d, h, g);
                        this.watingOpen.push(m)
                    } else {
                        this.isopening = !0;
                        var y = this.getUICnf(t);
                        if (null == y) return s.LogMgr.getInstance().debug(t + lang.index60eed_562), void (this.isopening = !1);
                        var v = new l(t, e, a, n, u, p, d, h, g);
                        if (this.popCanShow(t, y, v)) {
                            if (this.uistatck.get(t) && !y.showMult) return s.LogMgr.getInstance().debug(t + lang.index60eed_563), this.uistatck.get(t).node.getComponent(i.default).refreshUI(t, e, n, u, p, d, h, g), void (this.isopening = !1);
                            r.EventMgr.getInstance().emit(o.BaseEventName.blocktouch, !1);
                            var I = this.uichace.get(t);
                            if (I) {
                                this.uistatck.set(t, I), I.init && I.init(u, p, d, h, g), this.uichace.delete(t);
                                var _ = a.getChildByName(y.name);
                                null == _ && ((_ = I.node).active = !1, _.name = y.name, a.addChild(_)), _.x = 0, _.y = 0, _.active = !1, I.layer = y.zIndex;
                                var b = y.zIndex;
                                this.orderMap.has(I.layer) && (b = this.orderMap.get(I.layer) + 1), this.orderMap.set(I.layer, b), _.zIndex = b, I.setUid(t), I.fromId = e, this.updateMainUI(t, y);
                                var C = this.layerNodeMap.get(y.zIndex);
                                if (C) C.push(_); else {
                                    var D = [];
                                    D.push(_), this.layerNodeMap.set(y.zIndex, D)
                                }
                                I.openAni(function () {
                                    r.EventMgr.getInstance().emit(o.BaseEventName.blocktouch, !0)
                                }), n && n(_), r.EventMgr.getInstance().emit(o.BaseEventName.OpenUI, t, _), this.isopening = !1, this.openWaiting(), _.active = !0
                            } else c.ResourceMgr.getInstance().loadRes(y.bundleName, y.prefab, cc.Prefab, function (s) {
                                var c = cc.instantiate(s);
                                c.active = !1, c.name = y.name, a.addChild(c);
                                var l = c.getComponent(i.default);
                                f.uistatck.set(t, l), l.init && l.init(u, p, d, h, g), l.setUid(t), l.fromId = e, l.layer = y.zIndex;
                                var m = y.zIndex;
                                f.orderMap.has(l.layer) && (m = f.orderMap.get(l.layer) + 1), f.orderMap.set(l.layer, m), c.zIndex = m, c.x = 0, c.y = 0, f.updateMainUI(t, y);
                                var v = f.layerNodeMap.get(y.zIndex);
                                if (v) v.push(c); else {
                                    var I = [];
                                    I.push(c), f.layerNodeMap.set(y.zIndex, I)
                                }
                                l.openAni(function () {
                                    r.EventMgr.getInstance().emit(o.BaseEventName.blocktouch, !0)
                                }), n && n(c), r.EventMgr.getInstance().emit(o.BaseEventName.OpenUI, t, c), f.isopening = !1, f.openWaiting(), c.active = !0
                            })
                        } else this.isopening = !1
                    }
                }, t.prototype.getChildByName = function (t) {
                    return this.uiRoot.getChildByName(t)
                }, t.prototype.openWaiting = function () {
                    if (this.watingOpen.length > 0) {
                        var t = this.watingOpen.pop();
                        this.openUIOfParentAndCallback(t.uid, t.fromId, t.parent, t.callback, t.param1, t.param2, t.param3, t.param4, t.param5)
                    }
                }, t.prototype.closeUI = function (t, e, a, n, c) {
                    var l = this;
                    if (null != t && t.isValid) {
                        var u = t.getComponent(i.default);
                        u.closeAni(function () {
                            var i = u.getUid(), s = l.getUICnf(i);
                            if (u.onClose(), u.cache ? (t.removeFromParent(), l.uichace.set(i, u)) : t.destroy(), l.uistatck.delete(i), null != s) {
                                var p = l.layerNodeMap.get(s.zIndex);
                                if (p) for (var d = 0; d < p.length; d++) if (p[d].name == t.name) {
                                    p = p.splice(d, 1);
                                    break
                                }
                                var h = u.layer;
                                if (l.orderMap.has(u.layer) && (h = l.orderMap.get(u.layer) - 1) < u.layer && (h = u.layer), l.orderMap.set(u.layer, h), r.EventMgr.getInstance().emit(o.BaseEventName.CloseUI, i, e, a, n, c), s.zIndex == o.OrderLayer.pop) {
                                    if (l.popStatck.length > 0) {
                                        var g = l.popStatck.pop();
                                        l.openUIOfCallback(g.uid, g.fromId, g.callback, g.param1, g.param2, g.param3, g.param4, g.param5)
                                    }
                                } else if (s.zIndex == o.OrderLayer.main) {
                                    var f = l.layerNodeMap.get(s.zIndex);
                                    f && f.length > 0 && (f[f.length - 1].active = !0)
                                } else s.zIndex == o.OrderLayer.Log && l.logStatck.length > 0 && (g = l.logStatck.pop(), l.openUIOfCallback(g.uid, g.fromId, g.callback, g.param1, g.param2, g.param3, g.param4, g.param5));
                                l.checkHomeShow()
                            }
                        })
                    } else s.LogMgr.getInstance().debug(lang.index60eed_564)
                }, t.prototype.checkHomeShow = function () {
                }, t.prototype.checkOtherEmpty = function () {
                    var t = this.layerNodeMap.get(o.OrderLayer.pop), e = this.layerNodeMap.get(o.OrderLayer.pop2);
                    return !(t && t.length > 0 || e && e.length > 0)
                }, t.prototype.updateMainUI = function () {
                }, t.prototype.popCanShow = function (t, e, a) {
                    var n = this.layerNodeMap.get(e.zIndex);
                    if (e.zIndex == o.OrderLayer.pop) {
                        if (n && n.length > 0) {
                            for (var i = 0; i < this.popStatck.length; i++) if (this.popStatck[i].uid == t) return !1;
                            return this.popStatck.push(a), !1
                        }
                    } else if (e.zIndex == o.OrderLayer.Log && n && n.length > 0) return this.logStatck.push(a), !1;
                    return !0
                }, t.prototype.closeById = function (t, e, a, n, i, o) {
                    var r = this.uistatck.get(t);
                    r ? r.node ? this.closeUI(r.node, e, a, n, i, o) : s.LogMgr.getInstance().debug(lang.index60eed_565) : s.LogMgr.getInstance().debug(lang.index60eed_566)
                }, t.prototype.getUIById = function (t) {
                    var e = this.uistatck.get(t);
                    if (e) return e;
                    var a = this.uiRoot.getChildByName(this.getUICnf(t).name);
                    return a ? a.getComponent(i.default) : null
                }, t.prototype.getUIShowNum = function (t) {
                    var e = 0;
                    return this.uistatck.forEach(function (a, n) {
                        n == t && e++
                    }), e
                }, t.prototype.getUIByIdWithNode = function (t, e) {
                    var a = this.uistatck.get(t);
                    if (a) return a;
                    if (null == e) return null;
                    var n = e.getChildByName(this.getUICnf(t).name);
                    return n ? n.getComponent(i.default) : null
                }, t.prototype.getUICnf = function (t) {
                    var e = this.UIConf[t];
                    if (e) return e;
                    for (var a = 0; a < this.otherUIConf.length; a++) {
                        var n = this.otherUIConf[a][t];
                        if (n) return n
                    }
                    return null
                }, t.instance = null, t
            }();
        a.UIMgr = u, cc._RF.pop()
    }, {
        "../../game/config/Config": "Config",
        "../base/BaseUI": "BaseUI",
        "../configs/Appcfg": "Appcfg",
        "./EventMgr": "EventMgr",
        "./LogMgr": "LogMgr",
        "./ResourceMgr": "ResourceMgr"
    }],
    UINewInboren: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "71456dfdZFKD6fR0jZOsR35", "UINewInboren");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/list/List"),
            c = t("../../framework/manager/TweenMgr"), l = t("../config/Config"), u = t("../datas/TrackDataEvent"),
            p = t("../manager/DataMgr"), d = t("../manager/PlayerMgr"), h = t("./UIGameOver"), g = cc._decorator,
            f = g.ccclass, m = g.property, y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.listView = null, e.materials = [], e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    d.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.enter_develop);
                    var e = p.DataMgr.getInstance().getAllInbornMultipleCfg();
                    this.listView.numItems = e.length, this.addEvent(l.EventName.closeUI, function (e) {
                        e(), t.closeUI(), d.PlayerMgr.getInstance().isLock = !1
                    })
                }, e.prototype.renderView = function (t, e) {
                    var a = this;
                    t.name = e + "", this.newInbornData = d.PlayerMgr.getInstance().getNewInbornData(), this.userData = d.PlayerMgr.getInstance().getUserData();
                    var n = d.PlayerMgr.getInstance().getCustomData().getCurrentCustom(),
                        i = p.DataMgr.getInstance().getInbornMultipleCfgById(e),
                        o = p.DataMgr.getInstance().getNewInbornCfgByLevelId(i.BelongLevel),
                        r = t.getChildByName("proBg").getChildByName("pro").getComponent(cc.Sprite);
                    r.fillRange = 0;
                    var s = t.getChildByName("jdtLayer"), g = t.getChildByName("inbornLayer");
                    t.getChildByName("cilckLayer").on(cc.Node.EventType.TOUCH_END, function () {
                        a.sendEvent(l.EventName.cilckInborn)
                    });
                    var f = t.getChildByName("jkl"), m = f.getChildByName("tips");
                    m.active = !1;
                    var y = m.getChildByName("layout");
                    y.getChildByName("desc").getComponent(cc.Label).string = lang.index60eed_567 + i.Multiple;
                    var v = y.getChildByName("freeBtn"), I = i.ActivationConsume.split(","), _ = function () {
                        if (!(1 == y.getChildByName("tip").active || i.BelongLevel >= n.currentCustom && !n.passAll)) if (I[0] == h.GDID.gold ? a.userData.subGoldNum(Number(I[1])) : a.userData.subDiamondNum(Number(I[1]))) {
                            a.scheduleOnce(function () {
                                m.active = !1
                            }, .1), a.sendEvent(l.EventName.cilckInborn), f.getChildByName("ske").active = !0, f.getChildByName("ske").getComponent(sp.Skeleton).setAnimation(0, "1", !1), s.children.forEach(function (n, r) {
                                var s = n.children[0].getComponent(cc.Sprite), c = n.getChildByName("rate");
                                s.fillRange = 0, cc.tween(s).to(.5, {fillRange: -.5}).call(function () {
                                    cc.tween(c).to(.3, {scaleX: 2 * c.scaleX, scaleY: 1}).start()
                                }).to(.5, {fillRange: -1}).call(function () {
                                    cc.tween(c).to(.15, {
                                        scaleX: .5 * c.scaleX,
                                        scaleY: .5
                                    }).start(), a.newInbornData.getCurrentId() > o[r].Id && (g.children[r].getChildByName("ske2").active = !0, g.children[r].getChildByName("ske2").getComponent(sp.Skeleton).setAnimation(0, o[r].Type + "", !1), a.newInbornData.addnewInbornArr(o[r], o[r].Addition * (i.Multiple - 1), !1)), a.renderView(t, e);
                                    var n = e + 1, s = t.parent.getChildByName(n + "");
                                    s && a.renderView(s, n)
                                }).start()
                            }), a.newInbornData.addJklGet(i.Id);
                            var r = n.currentCustom - 61e4,
                                c = r % 10 == 0 ? Math.ceil(r / 10) + "-10" : Math.ceil(r / 10) + "-" + r % 10;
                            d.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.develop_gem_X, i.Id), d.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.develop_gem_X_Y, i.Id, c)
                        } else {
                            var p = I[0] == h.GDID.gold ? l.Currency.gold : l.Currency.diamond;
                            a.openUI(l.UIID.UIGetResource, p)
                        }
                    };
                    this.newInbornData.getCurrentJklId() < i.Id ? (this.initTips(m, y, v, I, !1, _), this.initLimitOver(i, y), f.getChildByName("hd").active = !1) : this.newInbornData.getCurrentJklId() == i.Id ? (this.initTips(m, y, v, I, !0, _), this.initLimitOver(i, y), 0 == y.getChildByName("tip").active && (i.BelongLevel < n.currentCustom || n.passAll) && this.userData.getDiamondNum() >= Number(I[1]) ? (f.getChildByName("hd").active = !0, c.TweenMgr.getInstance().playHeartAni(f.getChildByName("hd"))) : f.getChildByName("hd").active = !1) : (this.initTips(m, y, v, I, !0, _), this.initLimitOver(i, y, !1), f.getChildByName("hd").active = !1), this.addEvent(l.EventName.cilckInborn, function () {
                        m.active = !1
                    }), f.off(cc.Node.EventType.TOUCH_END), f.on(cc.Node.EventType.TOUCH_END, function () {
                        a.sendEvent(l.EventName.cilckInborn), m.active = !0
                    }), o.forEach(function (o, p) {
                        s.children[p].getChildByName("rate").getComponent(cc.Label).string = "x" + i.Multiple;
                        var m = g.children[p].getChildByName("tips");
                        m.active = !1;
                        var y = m.getChildByName("layout");
                        y.getChildByName("desc").getComponent(cc.RichText).string = o.Desc;
                        var v = y.getChildByName("freeBtn"), I = o.ActivationConsume.split(","), _ = function () {
                            if (!(1 == y.getChildByName("tip").active || i.BelongLevel >= n.currentCustom && !n.passAll)) if (I[0] == h.GDID.gold ? a.userData.subGoldNum(Number(I[1])) : a.userData.subDiamondNum(Number(I[1]))) {
                                a.scheduleOnce(function () {
                                    m.active = !1
                                }, .1), g.children[p].getChildByName("ske1").active = !0, g.children[p].getChildByName("ske1").getComponent(sp.Skeleton).setAnimation(0, o.Type + "", !1);
                                var r = a.newInbornData.getCurrentJklId() > i.Id ? i.Multiple * o.Addition : o.Addition;
                                a.newInbornData.addnewInbornArr(o, r);
                                var s = n.currentCustom - 61e4,
                                    c = s % 10 == 0 ? Math.ceil(s / 10) + "-10" : Math.ceil(s / 10) + "-" + s % 10;
                                d.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.develop_coin_X, o.Id), d.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.develop_coin_X_Y, o.Id, c), a.renderView(t, e);
                                var f = e + 1, v = t.parent.getChildByName(f + "");
                                v && a.renderView(v, f)
                            } else {
                                var _ = I[0] == h.GDID.gold ? l.Currency.gold : l.Currency.diamond;
                                a.openUI(l.UIID.UIGetResource, _)
                            }
                        };
                        a.newInbornData.getCurrentId() < o.Id ? (g.children[p].children[0].active = !0, a.initTips(m, y, v, I, !1, _), g.children[p].getChildByName("effect").color = cc.color().fromHEX("#fffff9"), a.initLimitOver(i, y), g.children[p].getChildByName("hd").active = !1) : a.newInbornData.getCurrentId() == o.Id ? (g.children[p].children[0].active = !0, a.initTips(m, y, v, I, !0, _), g.children[p].getChildByName("effect").color = cc.color().fromHEX("#fffff9"), a.initLimitOver(i, y), 0 == y.getChildByName("tip").active && (i.BelongLevel < n.currentCustom || n.passAll) && a.userData.getGoldNum() >= Number(I[1]) ? (g.children[p].getChildByName("hd").active = !0, c.TweenMgr.getInstance().playHeartAni(g.children[p].getChildByName("hd"))) : g.children[p].getChildByName("hd").active = !1) : (r.fillRange = p >= 2 ? 1 : .25 * (p + 1), g.children[p].children[0].active = !1, a.initTips(m, y, v, I, !0, _), g.children[p].getChildByName("effect").color = cc.color().fromHEX("#46f700"), a.initLimitOver(i, y, !1), g.children[p].getChildByName("hd").active = !1), -1 != a.newInbornData.getjklGetById(i.Id) ? (s.children[p].children[0].getComponent(cc.Sprite).fillRange = -1, f.children[0].active = !0) : (s.children[p].children[0].getComponent(cc.Sprite).fillRange = 0, f.children[0].active = !1), a.loadSpriteFrame("common", o.Icon, function (t) {
                            g.children[p].getComponent(cc.Sprite).spriteFrame = t
                        }), a.loadSpriteFrame("common", o.Icon + "_2", function (t) {
                            g.children[p].children[0].getComponent(cc.Sprite).spriteFrame = t
                        }), a.addEvent(l.EventName.cilckInborn, function () {
                            m.active = !1
                        }), g.children[p].off(cc.Node.EventType.TOUCH_END), g.children[p].on(cc.Node.EventType.TOUCH_END, function () {
                            a.sendEvent(l.EventName.cilckInborn), m.active = !0
                        }), g.children[p].getChildByName("effect").getComponent(cc.Label).string = o.DisplayAddition
                    }), t.getChildByName("levelBg").getChildByName("level").getComponent(cc.Label).string = i.Id % 10 == 0 ? Math.ceil(i.Id / 10) + "-10" : Math.ceil(i.Id / 10) + "-" + i.Id % 10
                }, e.prototype.initTips = function (t, e, a, n, i, o) {
                    var r = p.DataMgr.getInstance().getItemCfgById(Number(n[0]));
                    this.loadSpriteFrame(r.bundleName, r.Icon, function (t) {
                        a.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t
                    }), t.children[0].active = i, e.getChildByName("tip").active = !i;
                    var s = i ? this.materials[0] : this.materials[1];
                    a.getComponent(cc.Sprite).setMaterial(0, s), a.getChildByName("icon").getComponent(cc.Sprite).setMaterial(0, s), a.getChildByName("cost").getComponent(cc.Label).string = n[1], a.off(cc.Node.EventType.TOUCH_END), a.on(cc.Node.EventType.TOUCH_END, o)
                }, e.prototype.initLimitOver = function (t, e, a) {
                    void 0 === a && (a = !0);
                    var n = e.getChildByName("freeBtn");
                    if (d.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom <= t.BelongLevel && a) {
                        e.getChildByName("limit").active = !0;
                        var i = t.Id % 10 == 0 ? Math.ceil(t.Id / 10) + "-10" : Math.ceil(t.Id / 10) + "-" + t.Id % 10;
                        e.getChildByName("limit").getComponent(cc.Label).string = lang.index60eed_568 + i + lang.index60eed_569, e.getChildByName("over").active = !1, n.active = !1
                    } else e.getChildByName("over").active = !a, n.active = a, e.getChildByName("limit").active = !1
                }, o([m({
                    type: s.default,
                    tooltip: lang.index60eed_570
                })], e.prototype, "listView", void 0), o([m([cc.Material])], e.prototype, "materials", void 0), o([f], e)
            }(r.default);
        a.default = y, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/list/List": "List",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./UIGameOver": "UIGameOver"
    }],
    UIPlantDrawings: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "00e58wFAERIA4Bb/+LxUIeg", "UIPlantDrawings");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BasePlatform"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/manager/PlatformManager"), l = t("../../framework/manager/UIMgr"),
            u = t("../../framework/utils/UIUtils"), p = t("../config/Config"), d = t("../manager/DataMgr"),
            h = cc._decorator, g = h.ccclass, f = h.property, m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.plantContent = null, e.synShow = null, e.returnBtn = null, e.title = null, e.char = null, e.basePlantArr = [], e.plantIndex = 0, e.Synthesis = [], e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    c.PlatformManager.currentPlatform == r.Platform.KuaiShou && (this.returnBtn.getComponent(cc.Widget).left = 374.4), d.DataMgr.getInstance().getAllHeroCfg().forEach(function (e) {
                        1 == e.Type && t.basePlantArr.push(e)
                    }), this.initPlantPic(), this.returnBtn.on(cc.Node.EventType.TOUCH_END, this.returnBtnOn.bind(this)), this.changeShow(this.plantIndex)
                }, e.prototype.returnBtnOn = function () {
                    this.fromId == p.UIID.UICombat && (cc.find("Scene/combat").active = !0, cc.find("uiRoot/UICombat").active = !0), this.closeUI()
                }, e.prototype.init = function (t) {
                    t && t()
                }, e.prototype.initPlantPic = function () {
                    for (var t = this, e = function (e) {
                        var n = e > 0 ? cc.instantiate(a.plantContent.children[0]) : a.plantContent.children[0];
                        a.loadSpriteFrame("common", "zw_zd_kp" + a.basePlantArr[e].Quality + "_2", function (t) {
                            n.children[0].children[0].getComponent(cc.Sprite).spriteFrame = t
                        }), a.loadSpriteFrame("common", "zw_zd_kp" + a.basePlantArr[e].Quality + "_1", function (t) {
                            n.children[0].children[0].getChildByName("frame").getComponent(cc.Sprite).spriteFrame = t
                        }), a.loadSpriteFrame(a.basePlantArr[e].BunleName, "drawing/" + a.basePlantArr[e].Model, function (a) {
                            n.children[0].children[0].getChildByName("plantPicture").scale = t.basePlantArr[e].ModelScale, n.children[0].children[0].getChildByName("plantPicture").getComponent(cc.Sprite).spriteFrame = a
                        }), n.children[0].children[0].getChildByName("limitNum").getComponent(cc.Label).string = "" + a.basePlantArr[e].Name, n.getComponent(cc.Sprite), n.on(cc.Node.EventType.TOUCH_END, function () {
                            t.plantContent.children[t.plantIndex].getChildByName("choose").active = !1, t.plantIndex = e, t.changeShow(t.plantIndex)
                        }), e > 0 && a.plantContent.addChild(n)
                    }, a = this, n = 0; n < this.basePlantArr.length; n++) e(n)
                }, e.prototype.changeShow = function (t) {
                    var e = this;
                    this.plantContent.children[t].getChildByName("choose").active = !0, this.title.string = "" + this.basePlantArr[t].Name;
                    var a = this.basePlantArr[t].EvolutionaryDisplay.split(",");
                    if (a.forEach(function (a, n) {
                        var i = d.DataMgr.getInstance().getHeroSynthesisBySynId(Number(a)),
                            o = e.synShow.children[n] ? e.synShow.children[n] : cc.instantiate(e.synShow.children[0]),
                            r = d.DataMgr.getInstance().getHeroCfgById(i.BasicHero),
                            s = d.DataMgr.getInstance().getHeroCfgById(i.SyntheticHero),
                            c = d.DataMgr.getInstance().getHeroCfgById(i.SyntheticHeroID);
                        o.getChildByName("tipLabel").getComponent(cc.Label).string = lang.index60eed_571 + (n + 1), e.loadSpriteFrame(r.BunleName, "drawing/" + r.Model, function (t) {
                            o.getChildByName("plant1").getChildByName("sprite").getComponent(cc.Sprite).spriteFrame = t, o.getChildByName("plant1").getChildByName("sprite").scale = r.ICONScale
                        }), o.getChildByName("plant1").getChildByName("name").getComponent(cc.Label).string = r.Name, e.loadSpriteFrame(s.BunleName, "drawing/" + s.Model, function (t) {
                            o.getChildByName("plant2").getChildByName("sprite").getComponent(cc.Sprite).spriteFrame = t, o.getChildByName("plant2").getChildByName("sprite").scale = s.ICONScale
                        }), o.getChildByName("plant2").getChildByName("name").getComponent(cc.Label).string = s.Name, e.loadSpriteFrame(c.BunleName, "drawing/" + c.Model, function (t) {
                            o.getChildByName("synthesisPlant").getChildByName("sprite").getComponent(cc.Sprite).spriteFrame = t, o.getChildByName("synthesisPlant").getChildByName("sprite").scale = c.ICONScale
                        });
                        var h = o.getChildByName("synthesisPlant").getChildByName("tips");
                        h.off(cc.Node.EventType.TOUCH_END), h.on(cc.Node.EventType.TOUCH_END, function () {
                            l.UIMgr.getInstance().openUI(p.UIID.UITedail, p.UIID.UIPlantDrawings, c, e.basePlantArr[t])
                        }), o.getChildByName("describe").getChildByName("name").getComponent(cc.Label).string = c.Name;
                        var g = c.LvScope.split(","), f = d.DataMgr.getInstance().getHeroLevelById(Number(g[0]));
                        o.getChildByName("describe").getChildByName("char").getComponent(cc.RichText).string = u.UIUtils.getSkillString(f), o.active = !0, o != e.synShow.children[n] && e.synShow.addChild(o)
                    }), this.synShow.children.length > a.length) for (var n = a.length; n < this.synShow.children.length; n++) this.synShow.children[n].active = !1
                }, o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_572
                })], e.prototype, "plantContent", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_573
                })], e.prototype, "synShow", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_574
                })], e.prototype, "returnBtn", void 0), o([f({
                    type: cc.Label,
                    tooltip: lang.index60eed_575
                })], e.prototype, "title", void 0), o([f({
                    type: cc.RichText,
                    tooltip: lang.index60eed_576
                })], e.prototype, "char", void 0), o([g], e)
            }(s.default);
        a.default = m, cc._RF.pop()
    }, {
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../config/Config": "Config",
        "../manager/DataMgr": "DataMgr"
    }],
    UIPlantLevelUP: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "09975wLuxdA/JsgKYtOGvz8", "UIPlantLevelUP");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../commonModel/config/CommonCfg"), s = t("../../framework/base/BasePlatform"),
            c = t("../../framework/base/BaseUI"), l = t("../../framework/configs/Appcfg"),
            u = t("../../framework/manager/PlatformManager"), p = t("../../framework/manager/SdkMgr"),
            d = t("../../framework/manager/TweenMgr"), h = t("../../framework/manager/UIMgr"),
            g = t("../../framework/utils/UIUtils"), f = t("../config/Config"), m = t("../datas/TrackDataEvent"),
            y = t("../global/Global"), v = t("../manager/DataMgr"), I = t("../manager/PlayerMgr"), _ = cc._decorator,
            b = _.ccclass, C = _.property, D = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.centerLabel = null, e.levelUpBtn = null, e.returnBtn = null, e.plantContent = null, e.costNum = null, e.propertyLabel = null, e.plantModel = null, e.cost = null, e.skillLabel = null, e.plantName = null, e.tjBtn = null, e.spriteFrameArr = [], e.Occlusion = null, e.basePlantArr = [], e.plantLevel = 0, e.plantIndex = 0, e._isClick = !1, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    I.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.enter_plant), v.DataMgr.getInstance().getAllHeroCfg().forEach(function (e) {
                        1 == e.Type && t.basePlantArr.push(e)
                    }), this.userData = I.PlayerMgr.getInstance().getUserData(), this.lockData = I.PlayerMgr.getInstance().getLockData(), this.plantData = this.userData.getPlantData(), this.initPlantPic(), this.changeShow(this.plantIndex), this.addEvent(f.EventName.closeUI, function (e) {
                        e(), t.closeUI(), I.PlayerMgr.getInstance().isLock = !1
                    }), this.tjBtn.on(cc.Node.EventType.TOUCH_END, this.tjBtnOn.bind(this)), this.levelUpBtn.on(cc.Node.EventType.TOUCH_END, this.levelUp.bind(this)), this.addEvent(r.CommonEventName.GetRewardEnd, function () {
                        var e = t.userData.getGoldNum() < t.plantLevelData.GoldConsume ? "#f70000" : "#fffff9";
                        t.cost.getChildByName("right").children[1].color = cc.color().fromHEX(e), t.changeShow(t.plantIndex), t.initRed()
                    }), this.addEvent(l.BaseEventName.CloseUI, function () {
                        t._isClick = !1
                    }), this.Occlusion.active = p.SdkMgr.getInstance().getCheckVersion(u.SwitchID.ShenHe) && u.APPMgr.currentApp == s.AppName.Invincible
                }, e.prototype.init = function (t) {
                    t && t()
                }, e.prototype.tjBtnOn = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    h.UIMgr.getInstance().openUI(f.UIID.UIPlantDrawings, f.UIID.UIPlantLevelUP)
                }, e.prototype.refreshRed = function (t, e) {
                    e ? (t.active = !0, d.TweenMgr.getInstance().playHeartAni(t)) : (t.active = !1, d.TweenMgr.getInstance().stopTween(t))
                }, e.prototype.levelUp = function () {
                    if (1 != this._isClick) {
                        this._isClick = !0;
                        var t = "", e = Number(this.cost.getChildByName("right").children[1].getComponent(cc.Label).string),
                            a = this.cost.getChildByName("left").children[1].getComponent(cc.RichText).string.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "").split("/");
                        if (v.DataMgr.getInstance().getHeroLevelById(this.plantLevel).HeroId != v.DataMgr.getInstance().getHeroLevelById(this.plantLevel + 1).HeroId) return t += lang.index60eed_577, void h.UIMgr.getInstance().openUI(f.UIID.UITips, f.UIID.UINone, t);
                        if (this.userData.getGoldNum() < this.plantLevelData.GoldConsume && lang.index60eed_578 != this.levelUpBtn.getComponentInChildren(cc.Label).string) h.UIMgr.getInstance().openUI(f.UIID.UIGetResource, f.UIID.UINone, f.Currency.gold); else {
                            if (this.debrisNum < Number(a[1])) return t += lang.index60eed_579, void h.UIMgr.getInstance().openUI(f.UIID.UITips, f.UIID.UINone, t);
                            if (this.userData.setItemData(this.plantLevelData.FragmentId, -Number(a[1])), lang.index60eed_580 == this.levelUpBtn.getComponentInChildren(cc.Label).string) {
                                this.userData.subGoldNum(e);
                                var n = this.basePlantArr[this.plantIndex].LvScope.split(","),
                                    i = v.DataMgr.getInstance().getHeroLevelById(this.plantLevel + Number(n[0]) - 1),
                                    o = v.DataMgr.getInstance().getHeroLevelById(this.plantLevel + Number(n[0]));
                                h.UIMgr.getInstance().openUI(f.UIID.UIAward, f.UIID.UIPlantLevelUP, f.TipType.levelUp, i, o), I.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.plant_levelup_X, this.plantLevel + 1), this.userData.setPlantData(this.basePlantArr[this.plantIndex].ID, this.plantLevel + 1), this.changeShow(this.plantIndex, this.plantLevel + 1)
                            } else this.lockData.setLockDataById(this.plantLevelData.HeroId, !0), this.levelUpBtn.getComponentInChildren(cc.Label).string = lang.index60eed_581, this.changeShow(this.plantIndex, this.plantLevel), this.openUI(f.UIID.UITips, lang.index60eed_582), this.sendEvent(r.CommonEventName.GetRewardEnd);
                            this.initRed()
                        }
                    }
                }, e.prototype.initPlantPic = function () {
                    for (var t = this, e = function (e) {
                        var n = e > 0 ? cc.instantiate(a.plantContent.children[0]) : a.plantContent.children[0];
                        a.loadSpriteFrame("common", "zw_zd_kp" + a.basePlantArr[e].Quality + "_2", function (t) {
                            n.children[0].children[0].getComponent(cc.Sprite).spriteFrame = t
                        }), a.loadSpriteFrame("common", "zw_zd_kp" + a.basePlantArr[e].Quality + "_1", function (t) {
                            n.children[0].children[0].getChildByName("frame").getComponent(cc.Sprite).spriteFrame = t
                        }), a.loadSpriteFrame(a.basePlantArr[e].BunleName, "drawing/" + a.basePlantArr[e].Model, function (a) {
                            n.children[0].children[0].getChildByName("plantPicture").scale = t.basePlantArr[e].ModelScale, n.children[0].children[0].getChildByName("plantPicture").getComponent(cc.Sprite).spriteFrame = a
                        }), n.children[0].children[0].getChildByName("limitNum").getComponent(cc.Label).string = 0 == a.lockData.getLockDataById(a.plantData[e].plantId) && 1 == y.Global.needUnLock ? lang.index60eed_583 : "Lv." + a.plantData[e].plantLevel, a.initRed(n, e), n.on(cc.Node.EventType.TOUCH_END, function () {
                            t.plantContent.children[t.plantIndex].getChildByName("choose").active = !1, t.plantIndex = e, t.changeShow(t.plantIndex)
                        }), e > 0 && a.plantContent.addChild(n)
                    }, a = this, n = 0; n < this.basePlantArr.length; n++) e(n)
                }, e.prototype.initRed = function (t, e) {
                    var a = this;
                    if (null != e && null != t) {
                        var n, i = this.basePlantArr[e],
                            o = Number(i.LvScope.split(",")[0]) + this.plantData[e].plantLevel - 1,
                            r = v.DataMgr.getInstance().getHeroLevelById(o);
                        n = this.userData.getItemDataById(r.FragmentId), (y.Global.needUnLock && !this.lockData.getLockDataById(i.ID) ? r.FragmentNum && n >= r.FragmentNum : r.GoldConsume && this.userData.getGoldNum() >= r.GoldConsume && r.FragmentNum && n >= r.FragmentNum) ? this.refreshRed(t.getChildByName("redPoint"), !0) : this.refreshRed(t.getChildByName("redPoint"), !1)
                    } else this.plantContent.children.forEach(function (t, e) {
                        a.initRed(t, e)
                    })
                }, e.prototype.changeShow = function (t, e) {
                    for (var a = this; this.propertyLabel.children.length < 4;) {
                        var n = cc.instantiate(this.propertyLabel.children[0]);
                        this.propertyLabel.addChild(n)
                    }
                    var i = this.basePlantArr[t];
                    this.plantContent.children[this.plantIndex].getChildByName("choose").active = !0, this.loadResFromBundle(this.basePlantArr[t].BunleName, this.basePlantArr[t].Model + "/" + this.basePlantArr[t].Model, sp.SkeletonData, function (e) {
                        e.scale = 1, a.plantModel.getComponent(sp.Skeleton).skeletonData = e, a.plantModel.getComponent(sp.Skeleton).setAnimation(0, "idle", !0), lang.index60eed_584 == a.basePlantArr[t].Name && a.plantModel.getComponent(sp.Skeleton).setSkin("skin_1")
                    }), this.loadSpriteFrame("common", "zw_ty_pz" + this.basePlantArr[t].Quality, function (t) {
                        a.plantModel.parent.getChildByName("quality").getComponent(cc.Sprite).spriteFrame = t
                    });
                    var o = i.LvScope.split(",");
                    e ? this.plantLevel = e : this.plantData.forEach(function (t) {
                        t.plantId == i.ID && (a.plantLevel = t.plantLevel)
                    }), this.plantLevel % 10 == 0 ? this.levelUpBtn.children[0].active = !0 : this.levelUpBtn.children[0].active = !1, this.plantLevelData = v.DataMgr.getInstance().getHeroLevelById(this.plantLevel + Number(o[0]) - 1), this.skillLabel.string = "<b>" + g.UIUtils.getSkillString(this.plantLevelData) + "</b>";
                    var r,
                        s = v.DataMgr.getInstance().getSkillLevelCfgById(Number(this.plantLevelData.SkillID.split(",")[0]));
                    r = g.UIUtils.getRaceType(i.RaceType);
                    var c, l = s.LaunchInterval ? s.LaunchInterval + "s" : lang.index60eed_585;
                    switch (this.basePlantArr[t].Quality) {
                        case 1:
                            c = "#fffdf7";
                            break;
                        case 3:
                            c = "#46f0ff";
                            break;
                        case 4:
                            c = "#fb85ff";
                            break;
                        case 5:
                            c = "#ff9333"
                    }
                    if (this.plantName.string = "<outline color = #3d240a width = 4><color=" + c + ">" + i.Name + "</c> <color=#fffff9>Lv." + this.plantLevelData.Level + "</c></outline>", this.plantContent.children[t].children[0].children[0].getChildByName("limitNum").getComponent(cc.Label).string = 0 == this.lockData.getLockDataById(i.ID) && 1 == y.Global.needUnLock ? lang.index60eed_586 : "Lv." + this.plantLevelData.Level, this.plantLevelData.Level >= 10) this.cost.active = !1; else {
                        this.cost.active = !0;
                        var u = v.DataMgr.getInstance().getItemCfgById(this.plantLevelData.FragmentId);
                        if (this.loadSpriteFrame(this.basePlantArr[t].BunleName, "debris/" + u.Icon, function (t) {
                            a.cost.getChildByName("left").children[0].getComponent(cc.Sprite).spriteFrame = t
                        }), this.debrisNum, this.debrisNum = this.userData.getItemDataById(u.ItemId), this.lockData.getLockDataById(this.plantData[t].plantId) || 1 != y.Global.needUnLock) {
                            d = this.debrisNum < this.plantLevelData.FragmentNum ? "f70000" : "46f700", this.cost.getChildByName("left").children[1].getComponent(cc.RichText).string = "<outline color = #3d240a width = 4><color=#" + d + ">" + this.debrisNum + "</c>/<color=#fffff9>" + this.plantLevelData.FragmentNum + "</color></outline>", this.cost.getChildByName("right").active = !0;
                            var p = this.userData.getGoldNum() < this.plantLevelData.GoldConsume ? "#f70000" : "46f700";
                            this.cost.getChildByName("right").children[1].color = cc.color().fromHEX(p), this.cost.getChildByName("right").children[1].getComponent(cc.Label).string = this.plantLevelData.GoldConsume + "", this.levelUpBtn.getComponentInChildren(cc.Label).string = lang.index60eed_587, "46f700" == d && "46f700" == p ? (this.refreshRed(this.levelUpBtn.getChildByName("redPoint"), !0), this.refreshRed(this.plantContent.children[this.plantIndex].getChildByName("redPoint"), !0)) : (this.refreshRed(this.levelUpBtn.getChildByName("redPoint"), !1), this.refreshRed(this.plantContent.children[this.plantIndex].getChildByName("redPoint"), !1))
                        } else {
                            var d = this.debrisNum < Number(i.UnlockConsume.split(",")[1]) ? "f70000" : "46f700";
                            this.cost.getChildByName("left").children[1].getComponent(cc.RichText).string = "<outline color = #3d240a width = 4><color=#" + d + ">" + this.debrisNum + "</c>/<color=#fffff9>" + i.UnlockConsume.split(",")[1] + "</color></outline>", this.cost.getChildByName("right").active = !1, this.levelUpBtn.getComponentInChildren(cc.Label).string = lang.index60eed_588, "46f700" == d ? (this.refreshRed(this.levelUpBtn.getChildByName("redPoint"), !0), this.refreshRed(this.plantContent.children[this.plantIndex].getChildByName("redPoint"), !0)) : (this.refreshRed(this.levelUpBtn.getChildByName("redPoint"), !1), this.refreshRed(this.plantContent.children[this.plantIndex].getChildByName("redPoint"), !1))
                        }
                    }
                    this.costNum.string = i.SummonCost, this.propertyLabel.children.forEach(function (t, e) {
                        switch (t.getChildByName("sprite").getComponent(cc.Sprite).spriteFrame = a.spriteFrameArr[e], e) {
                            case 0:
                                t.children[1].getComponent(cc.Label).string = lang.index60eed_589, t.children[2].getComponent(cc.Label).string = r;
                                break;
                            case 1:
                                t.children[1].getComponent(cc.Label).string = lang.index60eed_590, t.children[2].getComponent(cc.Label).string = a.plantLevelData.AttackDisplay + "", t.children[2].getComponent(cc.LabelOutline).enabled = !0;
                                break;
                            case 2:
                                t.children[1].getComponent(cc.Label).string = lang.index60eed_591, t.children[2].getComponent(cc.Label).string = l, t.children[2].getComponent(cc.LabelOutline).enabled = lang.index60eed_592 != l;
                                break;
                            case 3:
                                t.children[1].getComponent(cc.Label).string = lang.index60eed_593, t.children[2].getComponent(cc.Label).string = a.plantLevelData.MaxHp + "", t.children[2].getComponent(cc.LabelOutline).enabled = !0
                        }
                    })
                }, o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_594
                })], e.prototype, "centerLabel", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_595
                })], e.prototype, "levelUpBtn", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_596
                })], e.prototype, "returnBtn", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_597
                })], e.prototype, "plantContent", void 0), o([C({
                    type: cc.Label,
                    tooltip: lang.index60eed_598
                })], e.prototype, "costNum", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_599
                })], e.prototype, "propertyLabel", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_600
                })], e.prototype, "plantModel", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_601
                })], e.prototype, "cost", void 0), o([C({
                    type: cc.RichText,
                    tooltip: lang.index60eed_602
                })], e.prototype, "skillLabel", void 0), o([C({
                    type: cc.RichText,
                    tooltip: lang.index60eed_603
                })], e.prototype, "plantName", void 0), o([C({
                    type: cc.Node,
                    tooltip: lang.index60eed_604
                })], e.prototype, "tjBtn", void 0), o([C([cc.SpriteFrame])], e.prototype, "spriteFrameArr", void 0), o([C(cc.Node)], e.prototype, "Occlusion", void 0), o([b], e)
            }(c.default);
        a.default = D, cc._RF.pop()
    }, {
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIPlantLottery: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "c942cfvU+JDK5WXQXasTS2E", "UIPlantLottery");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0}), a.lotData = void 0;
        var r = t("../../commonModel/config/CommonCfg"), s = t("../../framework/base/BasePlatform"),
            c = t("../../framework/base/BaseUI"), l = t("../../framework/configs/Appcfg"),
            u = t("../../framework/manager/LogMgr"), p = t("../../framework/manager/PlatformManager"),
            d = t("../../framework/manager/SdkMgr"), h = t("../../framework/manager/TweenMgr"),
            g = t("../../framework/manager/UIMgr"), f = t("../../framework/utils/Utils"), m = t("../config/Config"),
            y = t("../datas/TrackDataEvent"), v = t("../global/Global"), I = t("../manager/DataMgr"),
            _ = t("../manager/PlayerMgr"), b = t("./UIGuide"), C = cc._decorator, D = C.ccclass, M = C.property,
            k = function () {
            };
        a.lotData = k;
        var N = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.common = null, e.golden = null, e.returnBtn = null, e.king = null, e.kingBtn = null, e.kingNum = null, e.lotteryLayer = null, e.equipLayer = null, e.cutBtn = null, e.plantBtn = null, e.equipBtn = null, e.equipCommon = null, e.equipGolden = null, e.skeArr = [], e.equipBg = [], e._isClick = !1, e.isPlantGuide = !1, e.isEquipGuide = !1, e
            }

            return i(e, t), e.prototype.onLoad = function () {
                9 != _.PlayerMgr.getInstance().getGuideData().getCurrentId() && 20 != _.PlayerMgr.getInstance().getGuideData().getCurrentId() || (this.guideCfgArr = I.DataMgr.getInstance().getAllGuideCfg(), this.isPlantGuide = 9 == _.PlayerMgr.getInstance().getGuideData().getCurrentId(), this.isEquipGuide = 20 == _.PlayerMgr.getInstance().getGuideData().getCurrentId(), this.startGuide())
            }, e.prototype.start = function () {
                this.lotteryLayer.active = !0, this.equipLayer.active = !1, _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.enter_shop), this.DrawCard = I.DataMgr.getInstance().getAllDrawCardCfg(), this.DrawCardLibrary = I.DataMgr.getInstance().getAllDrawCardLibraryCfg(), this.userData = _.PlayerMgr.getInstance().getUserData(), this.lotteryData = _.PlayerMgr.getInstance().getLotteryData(), this.changeShow(0), this.changeShow(1), this.changeCommon(), this.initBtn(), this.initListener(), d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == s.AppName.Invincible && p.PlatformManager.currentPlatform == s.Platform.WECHAT && (this.equipBtn.active = !1)
            }, e.prototype.initBtn = function () {
                var t = this;
                if (this.cutBtn.active = v.Global.hasEquip, this.cutBtn.active) {
                    if (this.changeShow(4), this.changeShow(5), this.changeCommon(), _.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom > I.DataMgr.getInstance().getSystemUnlockById(2).UnlockParam) this.equipBtn.getComponent(cc.Sprite).spriteFrame = this.equipBg[1], this.equipBtn.getChildByName("lock").active = !1; else {
                        this.equipBtn.getComponent(cc.Sprite).spriteFrame = this.equipBg[0], this.equipBtn.getChildByName("lock").active = !0;
                        var e = I.DataMgr.getInstance().getLevelCfgById(I.DataMgr.getInstance().getSystemUnlockById(2).UnlockParam);
                        this.equipBtn.getChildByName("lock").getComponent(cc.Label).string = e.ChapterId + "-" + e.Level + lang.index60eed_605
                    }
                    this.plantBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.node.getComponent(sp.Skeleton).skeletonData = t.skeArr[0], t.node.getComponent(sp.Skeleton).setAnimation(0, "ani1", !0), t.plantBtn.children[0].active = !0, t.equipBtn.children[0].active = !1, t.lotteryLayer.active = !0, t.equipLayer.active = !1
                    }), this.equipBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.equipBtn.getChildByName("lock").active ? t.openUI(m.UIID.UITips, lang.index60eed_606 + t.equipBtn.getChildByName("lock").getComponent(cc.Label).string) : (t.node.getComponent(sp.Skeleton).skeletonData = t.skeArr[1], t.node.getComponent(sp.Skeleton).setAnimation(0, "ani1", !0), t.plantBtn.children[0].active = !1, t.equipBtn.children[0].active = !0, t.lotteryLayer.active = !1, t.equipLayer.active = !0, 21 == _.PlayerMgr.getInstance().getGuideData().getCurrentId() && (t.guideCfgArr = I.DataMgr.getInstance().getAllGuideCfg(), t.isEquipGuide = !0, t.startGuide()))
                    }), h.TweenMgr.getInstance().playHeartAni(this.equipGolden.getChildByName("goldenBtn"));
                    var a = this.DrawCard[4].Consume.split(","), n = this.equipCommon.getChildByName("consumeNum");
                    this.loadSpriteFrame("common", "" + I.DataMgr.getInstance().getItemCfgById(Number(a[0])).Icon, function (t) {
                        n.children[0].getComponent(cc.Sprite).spriteFrame = t
                    }), this.equipCommon.getChildByName("commonBtn").on(cc.Node.EventType.TOUCH_END, function () {
                        t.commonBtnOn(4)
                    }), this.equipGolden.getChildByName("goldenBtn").on(cc.Node.EventType.TOUCH_END, function () {
                        t.goldenBtnOn(5)
                    })
                }
                var i = this.DrawCard[0].Consume.split(","), o = this.common.getChildByName("consumeNum");
                this.loadSpriteFrame("common", "" + I.DataMgr.getInstance().getItemCfgById(Number(i[0])).Icon, function (t) {
                    o.children[0].getComponent(cc.Sprite).spriteFrame = t
                }), v.Global.deZSlottery && (this.common.active = !1), this.common.getChildByName("commonBtn").on(cc.Node.EventType.TOUCH_END, function () {
                    t.commonBtnOn(0)
                }), this.golden.getChildByName("goldenBtn").on(cc.Node.EventType.TOUCH_END, function () {
                    t.goldenBtnOn(1)
                }), h.TweenMgr.getInstance().playHeartAni(this.golden.getChildByName("goldenBtn")), this.king.active = !(!v.Global.kingLottery || !this.lotteryData.getKingShow()), h.TweenMgr.getInstance().playHeartAni(this.kingBtn), this.kingNum.string = "(" + this.lotteryData.getKingNum() + "/" + v.Global.kingLotteryNum + ")", this.kingBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    1 != t._isClick && d.SdkMgr.getInstance().playVideo(null, function () {
                        var e = t.lotteryData.addKingNum();
                        t.kingNum.string = "(" + e + "/" + v.Global.kingLotteryNum + ")", t.openUI(m.UIID.UITips, lang.index60eed_607);
                        var a = _.PlayerMgr.getInstance().getSignData();
                        if (a.getCurentDay() <= 7 && _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.dayz_legendshop, a.getCurentDay()), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.legendshop), e >= 3) {
                            t.lotteryData.setKingNum(0), t.lotteryData.setGoldenNum(0);
                            var n = _.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom - 61e4,
                                i = n % 10 == 0 ? Math.ceil(n / 10) + "-10" : Math.ceil(n / 10) + "-" + n % 10;
                            _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_legendshop_lv_X, i);
                            var o = t.lotteryData.addgetKingNum();
                            a.getCurentDay() <= 7 && _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.dayz_shop_legendshop_X, a.getCurentDay(), o), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_legendshop_X, o), t.num = 3, t.node.getComponent(sp.Skeleton).setAnimation(0, "ani2", !1), t.zoomCamera(!0), t._isClick = !0
                        }
                    })
                })
            }, e.prototype.initListener = function () {
                var t = this, e = this.DrawCard[0].Consume.split(","), a = this.common.getChildByName("consumeNum"),
                    n = this.DrawCard[4].Consume.split(","), i = this.equipCommon.getChildByName("consumeNum");
                this.addEvent(m.EventName.closeUI, function (e) {
                    d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == s.AppName.Invincible || (t._isClick ? g.UIMgr.getInstance().openUI(m.UIID.UITips, m.UIID.UIPlantLottery, lang.index60eed_608) : (e(), t.closeUI(), _.PlayerMgr.getInstance().isLock = !1))
                }), this.addEvent(r.CommonEventName.GetRewardEnd, function () {
                    var o = t.userData.getDiamondNum() < Number(e[1]) ? "#f70000" : "#46f700",
                        r = t.userData.getDiamondNum() < Number(n[1]) ? "#f70000" : "#46f700";
                    a.children[1].color = cc.color().fromHEX(o), i.children[1].color = cc.color().fromHEX(r), t.refreshRed(t.common.getChildByName("commonBtn").getChildByName("redPoint"), t.userData.getDiamondNum() >= Number(e[1])), t.refreshRed(t.equipCommon.getChildByName("commonBtn").getChildByName("redPoint"), t.userData.getDiamondNum() >= Number(n[1]))
                }), this.addEvent(l.BaseEventName.CloseUI, function () {
                    t._isClick = !1
                }), this.node.getComponent(sp.Skeleton).setCompleteListener(function (e) {
                    "ani2" == e.animation.name && (t._isClick = !1, t.node.getComponent(sp.Skeleton).setAnimation(0, "ani1", !0))
                }), this.node.getComponent(sp.Skeleton).setEventListener(function (e, a) {
                    if ("start" == a.data.name) {
                        if (t.isPlantGuide && 0 == t.num) return void t.doLottery(t.DrawCard[2].RoutineLibrary, 2);
                        if (3 == t.num) return void t.doLottery(t.DrawCard[3].RoutineLibrary, 3);
                        lang.index60eed_609 != t.lotteryNum ? t.doLottery(t.DrawCard[t.num].RoutineLibrary, t.num) : t.doLottery(t.DrawCard[t.num].ProtectLibrary, t.num)
                    }
                })
            }, e.prototype.changeCommon = function () {
                var t = this.isPlantGuide && 10 == _.PlayerMgr.getInstance().getGuideData().getCurrentId() ? this.DrawCard[2].Consume.split(",") : this.DrawCard[0].Consume.split(","),
                    e = this.common.getChildByName("consumeNum"),
                    a = this.userData.getDiamondNum() < Number(t[1]) && (!d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) || p.APPMgr.currentApp != s.AppName.Invincible) ? "#f70000" : "#46f700";
                this.refreshRed(this.common.getChildByName("commonBtn").getChildByName("redPoint"), this.userData.getDiamondNum() >= Number(t[1])), e.children[1].color = cc.color().fromHEX(a), e.children[1].getComponent(cc.Label).string = this.isPlantGuide || d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == s.AppName.Invincible ? lang.index60eed_610 : t[1], this.isPlantGuide && (cc.log(_.PlayerMgr.getInstance().getGuideData().getCurrentId()), 10 == _.PlayerMgr.getInstance().getGuideData().getCurrentId() && (this.common.getChildByName("lotteryNum").getComponent(cc.RichText).string = lang.index60eed_611));
                var n = this.DrawCard[4].Consume.split(","), i = this.equipCommon.getChildByName("consumeNum"),
                    o = this.userData.getDiamondNum() < Number(n[1]) && (!d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) || p.APPMgr.currentApp != s.AppName.Invincible) ? "#f70000" : "#46f700";
                i.children[1].color = this.isEquipGuide && 21 == _.PlayerMgr.getInstance().getGuideData().getCurrentId() ? cc.color().fromHEX("#46f700") : cc.color().fromHEX(o), this.refreshRed(this.equipCommon.getChildByName("commonBtn").getChildByName("redPoint"), this.userData.getDiamondNum() >= Number(n[1])), i.children[1].getComponent(cc.Label).string = this.isEquipGuide || d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == s.AppName.Invincible ? lang.index60eed_612 : n[1]
            }, e.prototype.commonBtnOn = function (t) {
                this.changeShow(t, !0)
            }, e.prototype.goldenBtnOn = function (t) {
                var e = this, a = function () {
                    if (!e.isPlantGuide) {
                        var a = _.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom - 61e4,
                            n = a % 10 == 0 ? Math.ceil(a / 10) + "-10" : Math.ceil(a / 10) + "-" + a % 10;
                        if (1 == t) {
                            _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_X, n);
                            var i = _.PlayerMgr.getInstance().getSignData();
                            i.getCurentDay() <= 7 && _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.dayz_shop, i.getCurentDay()), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop)
                        } else 5 == t && (_.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_equip_X, n), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.equip))
                    }
                    e.changeShow(t, !0)
                };
                this.isPlantGuide ? a() : d.SdkMgr.getInstance().playVideo(null, a)
            }, e.prototype.refreshRed = function (t, e) {
                e ? (t.active = !0, h.TweenMgr.getInstance().playHeartAni(t)) : (t.active = !1, h.TweenMgr.getInstance().stopTween(t))
            }, e.prototype.init = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            }, e.prototype.doLottery = function (t, e) {
                var a, n = this, i = I.DataMgr.getInstance().getDrawCardLibraryCfgById(t), o = f.Utils.weight_rand(i);
                if (a = e < 2 ? e : e > 3 ? e - 2 : e, e < 2 || e > 3) if (this.lotteryData.getLotteryData()[a].lotteryNum = this.lotteryData.getLotteryData()[a].lotteryNum - 1 < 0 ? 4 : this.lotteryData.getLotteryData()[a].lotteryNum - 1, 1 == e && this.lotteryData.addGoldenNum(), this.lotteryData.setLotteryData(this.lotteryData.getLotteryData()[a].lotteryId, this.lotteryData.getLotteryData()[a].lotteryNum), 0 == e) {
                    var r = _.PlayerMgr.getInstance().getSignData();
                    r.getCurentDay() <= 7 && _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.dayz_shop_normalplant, r.getCurentDay()), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_normalplant)
                } else 4 == e && _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_normalequip); else 2 == e && (e = v.Global.deZSlottery ? 1 : 0);
                var s = I.DataMgr.getInstance().getDrawCardLibraryCfgById(82002), c = f.Utils.weight_rand(s),
                    l = I.DataMgr.getInstance().getDrawCardLibraryCfgById(82004), p = f.Utils.weight_rand(l);
                u.LogMgr.getInstance().debug(lang.index60eed_613, [o, c, p]);
                var h = new k;
                h.lotteryId = e, (1 == e || 0 == e || e > 3) && (h.lotteryNum = this.lotteryData.getLotteryData()[a].lotteryNum), g.UIMgr.getInstance().openUI(m.UIID.UIAward, m.UIID.UIPlantLottery, m.TipType.lottery, o, h, function (t) {
                    n.golden.getChildByName("goldenBtn").children[0].active = !0, n._isClick = !1, (n.isPlantGuide || n.isEquipGuide) && (n.isPlantGuide = !1, n.isEquipGuide = !1, n.startGuide(), n.changeCommon()), n.scheduleOnce(function () {
                        0 == e || 4 == e ? n.changeShow(e, t) : 3 == e ? (n.kingNum.string = "(0/" + v.Global.kingLotteryNum + ")", n.king.active = !1) : (n.lotteryData.getGoldenNum() >= Number(I.DataMgr.getInstance().getAllParamsCfg()[6].value) && v.Global.kingLottery && (n.king.active = !0), 1 == t ? d.SdkMgr.getInstance().playVideo(null, function () {
                            var t = _.PlayerMgr.getInstance().getCustomData().getCurrentCustom().currentCustom - 61e4,
                                a = t % 10 == 0 ? Math.ceil(t / 10) + "-10" : Math.ceil(t / 10) + "-" + t % 10;
                            if (1 == n.num) {
                                _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_X, a);
                                var i = _.PlayerMgr.getInstance().getSignData();
                                i.getCurentDay() <= 7 && _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.dayz_shop, i.getCurentDay()), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop)
                            } else _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.shop_equip_X, a), _.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.equip);
                            n.changeShow(e, !0)
                        }) : n.changeShow(e, !1))
                    })
                }, function () {
                    n.zoomCamera(!1)
                }), this.changeShow(e)
            }, e.prototype.changeShow = function (t, e) {
                if (!(t >= 2 && t < 4)) {
                    var a = t <= 2 ? 0 == t ? this.common : this.golden : 4 == t ? this.equipCommon : this.equipGolden;
                    if (t <= 2 ? this.lotteryNum = this.lotteryData.getLotteryData()[t].lotteryNum > 0 ? this.lotteryData.getLotteryData()[t].lotteryNum + "" : lang.index60eed_614 : t >= 4 && (this.lotteryNum = this.lotteryData.getLotteryData()[t - 2].lotteryNum > 0 ? this.lotteryData.getLotteryData()[t - 2].lotteryNum + "" : lang.index60eed_615), a.getChildByName("lotteryNum").getComponent(cc.RichText).string = "<outline color = #3d240a width =4><color=#46f701><size=72>" + this.lotteryNum + "</color></outline>", 1 == e) {
                        if (this._isClick) return;
                        if (this._isClick = !0, !(0 != t && 4 != t || d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == s.AppName.Invincible)) {
                            var n = void 0;
                            if (0 == t ? n = this.isPlantGuide ? Number(this.DrawCard[2].Consume.split(",")[1]) : Number(this.DrawCard[t].Consume.split(",")[1]) : 4 == t && (n = this.isEquipGuide ? 0 : Number(this.DrawCard[t].Consume.split(",")[1])), this.userData.getDiamondNum() < n) return void g.UIMgr.getInstance().openUI(m.UIID.UIGetResource, m.UIID.UINone, m.Currency.diamond);
                            this.userData.subDiamondNum(n)
                        }
                        this.num = t, this.node.getComponent(sp.Skeleton).setAnimation(0, "ani2", !1), this.zoomCamera(!0)
                    }
                }
            }, e.prototype.zoomCamera = function (t) {
                var e = cc.find("uiRoot/Main Camera").getComponent(cc.Camera), a = t ? 1.2 : 1, n = t ? 0 : 255,
                    i = t ? 1 : .3;
                cc.tween(e).to(i, {zoomRatio: a}).start(), cc.tween(this.cutBtn).to(i, {opacity: n}).start(), cc.tween(this.lotteryLayer).to(i, {opacity: n}).start(), cc.tween(this.equipLayer).to(i, {opacity: n}).start()
            }, e.prototype.startGuide = function () {
                var t = _.PlayerMgr.getInstance().getGuideData(), e = this.getCfg(t.getCurrentId() - 1, t);
                g.UIMgr.getInstance().openUI(m.UIID.UIGuide, m.UIID.UINone, e)
            }, e.prototype.getCfg = function (t) {
                var e = new b.UIGuideData, a = this.guideCfgArr[t];
                switch (e.clickType = a.GuideType, e.isWeek = 0 == a.GuideObj, t) {
                    case 8:
                        e.isWeek || (e.distNode = v.Global.deZSlottery ? this.golden.getChildByName("goldenBtn") : this.common.getChildByName("commonBtn"), this.golden.getChildByName("goldenBtn").children[0].active = !v.Global.deZSlottery);
                        break;
                    case 19:
                        e.distNode = this.cutBtn.getChildByName("equip");
                        break;
                    case 20:
                        e.distNode = this.equipCommon.getChildByName("commonBtn")
                }
                if (e.tipstring = a.Describe, e.showHand = 1 == a.Finger, e.hideMask = 1 != a.Mask, _.PlayerMgr.getInstance().getGuideData().addCurrentId(!0), e.groupLast = !0, e.showPlant = 1 == a.ShowPlant, e.lightType = 1, e.addSize = 0 == e.isWeek ? new cc.Size(40, 20) : new cc.Size(0, 0), 19 == t && (e.maskOffest = cc.v2(80, 0), e.addSize = new cc.Size(40, 20)), a.BubbleOffset) {
                    var n = a.BubbleOffset.split(",");
                    e.tipsOffest = new cc.Vec2(Number(n[0]), Number(n[1]))
                } else e.tipsOffest = new cc.Vec2(0, 0);
                return e
            }, o([M({
                type: cc.Node,
                tooltip: lang.index60eed_616
            })], e.prototype, "common", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_617
            })], e.prototype, "golden", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_618
            })], e.prototype, "returnBtn", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_619
            })], e.prototype, "king", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_620
            })], e.prototype, "kingBtn", void 0), o([M({
                type: cc.Label,
                tooltip: lang.index60eed_621
            })], e.prototype, "kingNum", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_622
            })], e.prototype, "lotteryLayer", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_623
            })], e.prototype, "equipLayer", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_624
            })], e.prototype, "cutBtn", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_625
            })], e.prototype, "plantBtn", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_626
            })], e.prototype, "equipBtn", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_627
            })], e.prototype, "equipCommon", void 0), o([M({
                type: cc.Node,
                tooltip: lang.index60eed_628
            })], e.prototype, "equipGolden", void 0), o([M([sp.SkeletonData])], e.prototype, "skeArr", void 0), o([M([cc.SpriteFrame])], e.prototype, "equipBg", void 0), o([D], e)
        }(c.default);
        a.default = N, cc._RF.pop()
    }, {
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./UIGuide": "UIGuide"
    }],
    UISetting: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "bdda0lgWB9D0p4JvsTut03C", "UISetting");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BasePlatform"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/manager/AudioMgr"), l = t("../../framework/manager/PlatformManager"),
            u = t("../../framework/utils/CacheUtils"), p = t("../config/Config"), d = t("../manager/PlayerMgr"),
            h = cc._decorator, g = h.ccclass, f = h.property, m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bgm = null, e.voice = null, e.closeBtn = null, e.banbenLabel = null, e.btn_yinsi = null, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    l.PlatformManager.currentPlatform == r.Platform.OPPO && (this.btn_yinsi.active = !0), this.changeStatus(this.bgm, u.CacheUtils.canPlayMusin()), this.changeStatus(this.voice, u.CacheUtils.canPlayEffect()), this.bgm.getChildByName("switch").on(cc.Node.EventType.TOUCH_END, function () {
                        var e = !u.CacheUtils.canPlayMusin();
                        t.changeStatus(t.bgm, e), u.CacheUtils.setPlayMusic(e), 1 == e ? c.AudioMgr.getInstance().playMusic(p.AudioId.bgMain, "bgMain") : c.AudioMgr.getInstance().stopAll()
                    }), this.voice.getChildByName("switch").on(cc.Node.EventType.TOUCH_END, function () {
                        t.changeStatus(t.voice, !u.CacheUtils.canPlayEffect()), u.CacheUtils.setPlayEffect(!u.CacheUtils.canPlayEffect())
                    }), this.btn_yinsi.on(cc.Node.EventType.TOUCH_END, function () {
                        t.openUI(p.UIID.PopUserPrivacy)
                    }), this.banbenLabel.node.active = !0, this.banbenLabel.string = d.PlayerMgr.getInstance().getTrackData().getVersionConf() + "_" + d.PlayerMgr.getInstance().getTrackData().getAbType()
                }, e.prototype.closeBtnOn = function () {
                    d.PlayerMgr.getInstance().isLock = !1, this.closeUI()
                }, e.prototype.changeStatus = function (t, e) {
                    t.getChildByName("switch").children[0].active = e, t.getChildByName("label").color = cc.color().fromHEX(this.getColor(e))
                }, e.prototype.getColor = function (t) {
                    return 1 == t ? "#FFFFF9" : "#CFC5C2"
                }, e.prototype.init = function (t) {
                    t && t()
                }, o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_629
                })], e.prototype, "bgm", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_630
                })], e.prototype, "voice", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_631
                })], e.prototype, "closeBtn", void 0), o([f({
                    type: cc.Label,
                    tooltip: lang.index60eed_632
                })], e.prototype, "banbenLabel", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_633
                })], e.prototype, "btn_yinsi", void 0), o([g], e)
            }(s.default);
        a.default = m, cc._RF.pop()
    }, {
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/utils/CacheUtils": "CacheUtils",
        "../config/Config": "Config",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UISidebar: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "2b6fc1XZVVHzb1nvesmM1xg", "UISidebar");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BasePlatform"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/manager/PlatformManager"), l = t("../config/Config"),
            u = t("../datas/TrackDataEvent"), p = t("../manager/PlayerMgr"), d = cc._decorator, h = d.ccclass,
            g = d.property, f = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.closeBtn = null, e.getBtn = null, e.rwLabel = null, e.showSprite = null, e.spArr = [], e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    this.showSprite.spriteFrame = c.APPMgr.currentApp == r.AppName.Slay ? this.spArr[0] : this.spArr[1], this.rwLabel.string = lang.index60eed_634 + c.AdConfig[r.Platform.BYTEDANCE][c.APPMgr.currentApp].APPName + lang.index60eed_635, this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.closeUI()
                    }), this.getBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        p.PlayerMgr.getInstance().isSidebar ? p.PlayerMgr.getInstance().getSignData().getisGetSid() ? t.openUI(l.UIID.UITips, lang.index60eed_636) : (p.PlayerMgr.getInstance().getUserData().addGoldNum(1500), p.PlayerMgr.getInstance().getUserData().addDiamondNum(30), p.PlayerMgr.getInstance().getSignData().setisGetSid(!0), p.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.gift), console.log(lang.index60eed_637), t.closeUI()) : t.openUI(l.UIID.UITips, lang.index60eed_638)
                    })
                }, o([g({
                    type: cc.Node,
                    tooltip: lang.index60eed_639
                })], e.prototype, "closeBtn", void 0), o([g({
                    type: cc.Node,
                    tooltip: lang.index60eed_640
                })], e.prototype, "getBtn", void 0), o([g({
                    type: cc.Label,
                    tooltip: lang.index60eed_641
                })], e.prototype, "rwLabel", void 0), o([g({
                    type: cc.Sprite,
                    tooltip: lang.index60eed_642
                })], e.prototype, "showSprite", void 0), o([g([cc.SpriteFrame])], e.prototype, "spArr", void 0), o([h], e)
            }(s.default);
        a.default = f, cc._RF.pop()
    }, {
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UISign: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "3b743v2eDdNaa6nOOHuKBy8", "UISign");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BasePlatform"), s = t("../../framework/base/BaseUI"),
            c = t("../../framework/manager/FeedCardMgr"), l = t("../../framework/manager/PlatformManager"),
            u = t("../../framework/manager/SdkMgr"), p = t("../config/Config"), d = t("../datas/TrackDataEvent"),
            h = t("../manager/AwardMgr"), g = t("../manager/DataMgr"), f = t("../manager/PlayerMgr"),
            m = t("./UIGameOver"), y = cc._decorator, v = y.ccclass, I = y.property, _ = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnClose = null, e.signLayout = null, e.btnSign = null, e.btnAgain = null, e.allGet = null, e.signCfg = [], e.itemCfg = [], e.signDay = 0, e.chooseDay = 0, e
                }

                return i(e, t), e.prototype.start = function () {
                    this.signData = f.PlayerMgr.getInstance().getSignData(), this.userData = f.PlayerMgr.getInstance().getUserData(), this.againData = f.PlayerMgr.getInstance().getAgainData(), this.signCfg = g.DataMgr.getInstance().getAllLoginRewards(), this.itemCfg = g.DataMgr.getInstance().getAllItemCfg(), this.signDay = this.signData.getCurentDay(), this.refreshSign(), this.initBtn()
                }, e.prototype.init = function (t) {
                    t && t()
                }, e.prototype.refreshSign = function () {
                    var t = this;
                    this.signLayout.children.forEach(function (e, a) {
                        e.getChildByName("choose").active = !1;
                        var n = t.signCfg[a].Reward.split(","), i = g.DataMgr.getInstance().getItemCfgById(Number(n[0])),
                            o = e.getChildByName("none"), r = "", s = "";
                        if (3 == i.type) {
                            var c = g.DataMgr.getInstance().getHeroCfgById(i.HeroID);
                            r = c.BunleName, s = "drawing/" + c.Model
                        } else 1 == i.type ? (r = i.bundleName, n[0] == m.GDID.gold ? s = "zw_zjm_qd_jbd" : n[0] == m.GDID.diamond && (s = "zw_ty_bs2")) : (r = i.bundleName, s = i.rewardIcon ? i.rewardIcon + i.Icon : i.Icon);
                        t.loadSpriteFrame(r, s, function (t) {
                            o.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t, 3 == i.type && 6 != a || 9 == i.type ? o.getChildByName("icon").scale = .45 : i.type
                        });
                        var l = o.getChildByName("namePz");
                        l.getChildByName("name").getComponent(cc.Label).string = 1 == i.type || 9 == i.type ? "x" + n[1] : i.Name, l.getChildByName("name").getComponent(cc.Label).string == i.Name ? t.loadSpriteFrame("common", "zw_ty_pz" + i.Quality, function (t) {
                            l.getChildByName("pz").getComponent(cc.Sprite).spriteFrame = t
                        }) : l.getChildByName("pz").active = !1, a < t.signData.getAlredySign().length ? t.againData.getSignAgainDataById(a) < t.signCfg[a].AgainReciveVideoNum ? (e.getChildByName("end").active = !1, l.getChildByName("name").getComponent(cc.Label).string = 1 == i.type || 9 == i.type ? "x" + t.signCfg[a].AgainRecive.split(",")[1] : i.Name) : e.getChildByName("end").active = !0 : a == t.signData.getAlredySign().length ? e.getChildByName("end").active = !1 : a > t.signData.getAlredySign().length && (e.getChildByName("end").active = !1), e.on(cc.Node.EventType.TOUCH_END, function () {
                            t.showBtn(a), t.signLayout.children.forEach(function (t) {
                                t.getChildByName("choose").active = !1
                            }), e.getChildByName("choose").active = !0
                        })
                    });
                    var e = 0;
                    this.signData.checkTodyCanSign() ? e = this.signData.getAlredySign().length : (e = this.signData.getAlredySign().length - 1, this.btnSign.active = !1), this.showBtn(e), this.signLayout.children[e].getChildByName("choose").active = !0
                }, e.prototype.showBtn = function (t) {
                    this.chooseDay = t, this.signData.checkTodyCanSign() && t == this.signData.getAlredySign().length ? (this.btnSign.active = !0, this.btnAgain.active = !1) : (cc.log(t, this.signData.getAlredySign().length, this.againData.getSignAgainDataById(t), this.signCfg[t].AgainReciveVideoNum), t >= this.signData.getAlredySign().length ? (this.openUI(p.UIID.UITips, lang.index60eed_643), this.btnSign.active = !1, this.btnAgain.active = !1) : this.againData.getSignAgainDataById(t) < this.signCfg[t].AgainReciveVideoNum ? this.againData.getSignAgainDataById(t) >= this.signCfg[t].AgainReciveVideoNum ? (this.allGet.active = !0, this.signLayout.children[t].getChildByName("end").active = !0) : (this.btnAgain.active = !0, this.btnAgain.getChildByName("adNum").getComponent(cc.Label).string = "(" + this.againData.getSignAgainDataById(t) + "/" + this.signCfg[t].AgainReciveVideoNum + ")") : (this.btnAgain.active = !1, this.signLayout.children[t].getChildByName("end").active = !0))
                }, e.prototype.startSign = function () {
                    var t = this;
                    if (this.signData.checkTodyCanSign()) {
                        var e = this.signData.getAlredySign().length, a = this.signCfg[e].Reward.split(","),
                            n = g.DataMgr.getInstance().getItemCfgById(Number(a[0]));
                        if(this.signData.getAlredySign().length === 1 ){
                            window.h5api.showReview();
                        }
                        f.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.sign_X, this.signData.getAlredySign().length + 1), this.signData.getCurentDay() <= 7 && f.PlayerMgr.getInstance().getTrackData().trackDayz(d.TrackId.dayz_sign_X, this.signData.getCurentDay(), this.signData.getAlredySign().length + 1), h.AwardMgr.getInstance().getAward(n, a), this.btnSign.active = !1, this.btnAgain.active = !0, this.btnAgain.getChildByName("adNum").getComponent(cc.Label).string = "(" + this.againData.getSignAgainDataById(e) + "/" + this.signCfg[e].AgainReciveVideoNum + ")", this.signData.startSign(this.signDay), l.PlatformManager.currentPlatform == r.Platform.BYTEDANCE && (c.FeedCardMgr.instance.getTaskTarget(function (e) {
                            switch (t.signData.getAlredySign().length) {
                                case 1:
                                    c.FeedCardMgr.instance.sendTask(e[0].id), t.signData.addFeedCard(e[0].id), t.scheduleOnce(function () {
                                        t.sendEvent(p.EventName.openFeedCardSub)
                                    });
                                    break;
                                case 2:
                                    c.FeedCardMgr.instance.sendTask(e[1].id), t.signData.addFeedCard(e[1].id);
                                    break;
                                case 4:
                                    c.FeedCardMgr.instance.sendTask(e[2].id), t.signData.addFeedCard(e[2].id);
                                    break;
                                case 5:
                                    c.FeedCardMgr.instance.sendTask(e[3].id), t.signData.addFeedCard(e[3].id);
                                    break;
                                case 6:
                                    c.FeedCardMgr.instance.sendTask(e[4].id), t.signData.addFeedCard(e[4].id)
                            }
                        }), this.scheduleOnce(function () {
                            t.refreshSign()
                        }))
                    }
                }, e.prototype.againSign = function () {
                    var t = this;
                    u.SdkMgr.getInstance().playVideo(null, function () {
                        t.againData.setSignAgainDataById(t.chooseDay);
                        var e = t.againData.getSignAgainDataById(t.chooseDay);
                        t.btnAgain.getChildByName("adNum").getComponent(cc.Label).string = "(" + e + "/" + t.signCfg[t.chooseDay].AgainReciveVideoNum + ")", f.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.sign);
                        var a = f.PlayerMgr.getInstance().getSignData();
                        if (a.getCurentDay() <= 7 && f.PlayerMgr.getInstance().getTrackData().trackDayz(d.TrackId.dayz_sign, t.signData.getCurentDay()), e >= t.signCfg[t.chooseDay].AgainReciveVideoNum) {
                            var n = t.signCfg[t.chooseDay].AgainRecive.split(","),
                                i = g.DataMgr.getInstance().getItemCfgById(Number(n[0]));
                            cc.log(t.chooseDay), f.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.sign_double_X, t.chooseDay + 1), a.getCurentDay() <= 7 && f.PlayerMgr.getInstance().getTrackData().trackDayz(d.TrackId.dayz_sign_double_X, t.signData.getCurentDay(), t.chooseDay + 1), h.AwardMgr.getInstance().getAward(i, n), t.btnAgain.active = !1, t.signLayout.children[t.chooseDay].getChildByName("end").active = !0
                        } else t.openUI(p.UIID.UITips, lang.index60eed_644)
                    })
                }, e.prototype.initBtn = function () {
                    this.btnClose.on(cc.Node.EventType.TOUCH_END, this.closeUI.bind(this)), this.btnSign.on(cc.Node.EventType.TOUCH_END, this.startSign.bind(this)), this.btnAgain.on(cc.Node.EventType.TOUCH_END, this.againSign.bind(this))
                }, o([I(cc.Node)], e.prototype, "btnClose", void 0), o([I(cc.Node)], e.prototype, "signLayout", void 0), o([I(cc.Node)], e.prototype, "btnSign", void 0), o([I(cc.Node)], e.prototype, "btnAgain", void 0), o([I(cc.Node)], e.prototype, "allGet", void 0), o([v], e)
            }(s.default);
        a.default = _, cc._RF.pop()
    }, {
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/FeedCardMgr": "FeedCardMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/AwardMgr": "AwardMgr",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr",
        "./UIGameOver": "UIGameOver"
    }],
    UISummerFestival: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "c42932ZgbZH9YDrtaD7EqGv", "UISummerFestival");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/manager/SdkMgr"),
            c = t("../../framework/manager/TweenMgr"), l = t("../config/Config"), u = t("../datas/TrackDataEvent"),
            p = t("../manager/AwardMgr"), d = t("../manager/DataMgr"), h = t("../manager/PlayerMgr"), g = cc._decorator,
            f = g.ccclass, m = g.property, y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.summerLayout = null, e.allStarNum = null, e.pointSp = [], e.battlePassCfg = [], e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    this.userData = h.PlayerMgr.getInstance().getUserData(), this.againData = h.PlayerMgr.getInstance().getAgainData(), this.battlePassCfg = d.DataMgr.getInstance().getAllBattlePassCfg(), this.addEvent(l.EventName.closeUI, function (e) {
                        t.closeUI(), e && e()
                    }), this.showLayout()
                }, e.prototype.showLayout = function () {
                    var t = this, e = p.AwardMgr.getInstance().getAllStar();
                    this.allStarNum.string = e + "", e > this.battlePassCfg[0].NeedStar ? this.summerLayout.children[0].getChildByName("pro").getComponent(cc.Sprite).fillRange = 1 : this.summerLayout.children[0].getChildByName("pro").getComponent(cc.Sprite).fillRange = Number((e / this.battlePassCfg[0].NeedStar).toFixed(1));
                    for (var a = this.summerLayout.children[1], n = function (n) {
                        var o = cc.instantiate(a);
                        o.active = !0;
                        var r = i.battlePassCfg[n];
                        o.getChildByName("pro").getComponent(cc.Sprite).fillRange = r.NeedStar > e ? 0 : e - r.NeedStar >= 6 ? 1 : Number(((e - r.NeedStar) / i.battlePassCfg[0].NeedStar).toFixed(1)), o.getChildByName("point").getChildByName("starNum").getComponent(cc.Label).string = "" + r.NeedStar;
                        var s = o.getChildByName("item").getChildByName("frame");
                        n % 2 != 0 && (o.getChildByName("item").y *= -1);
                        var l = r.Reward.split(","), g = d.DataMgr.getInstance().getItemCfgById(Number(l[0]));
                        i.loadSpriteFrame(g.bundleName, g.Icon, function (t) {
                            s.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t, 9 == g.type && (s.getChildByName("icon").scale = .4)
                        }), s.getChildByName("num").getComponent(cc.Label).string = "x" + l[1];
                        var f = o.getChildByName("item").getChildByName("state");
                        if (r.NeedStar > e) o.getChildByName("point").getComponent(cc.Sprite).spriteFrame = i.pointSp[0], f.getChildByName("lock").active = !0; else if (o.getChildByName("point").getComponent(cc.Sprite).spriteFrame = i.pointSp[1], i.againData.getSummerGetArrByIndex(n)) i.againData.getSummerAgainDataById(r.ID) < r.AgainReciveVideoNum ? (l = r.AgainRecive.split(","), s.getChildByName("num").getComponent(cc.Label).string = "x" + l[1], s.getChildByName("light").active = !1, f.getChildByName("again").active = !0, f.getChildByName("again").getChildByName("adNum").getComponent(cc.Label).string = "(" + i.againData.getSummerAgainDataById(r.ID) + "/" + r.AgainReciveVideoNum + ")", i.setAgainBtn(f.getChildByName("again"), l, r, g, s, f, n)) : (s.getChildByName("light").active = !1, s.getChildByName("lock").active = !0, f.getChildByName("end").active = !0); else {
                            var m = h.PlayerMgr.getInstance().getSignData();
                            m.getCurentDay() <= 7 && h.PlayerMgr.getInstance().getTrackData().trackDayz(u.TrackId.dayz_summer_unlock_X, m.getCurentDay(), n + 1), h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.summer_unlock_X, n + 1), s.getChildByName("light").active = !0, f.getChildByName("can").active = !0, c.TweenMgr.getInstance().playHeartAni(f.getChildByName("can")), s.getChildByName("light").on(cc.Node.EventType.TOUCH_END, function () {
                                p.AwardMgr.getInstance().getAward(g, l), h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.summer_get_X, n + 1), m.getCurentDay() <= 7 && h.PlayerMgr.getInstance().getTrackData().trackDayz(u.TrackId.dayz_summer_get_X, m.getCurentDay(), n + 1), l = r.AgainRecive.split(","), t.againData.setSummerGetArrByIndex(n), s.getChildByName("light").active = !1, f.getChildByName("can").active = !1, f.getChildByName("again").active = !0, s.getChildByName("num").getComponent(cc.Label).string = "x" + l[1], t.setAgainBtn(f.getChildByName("again"), l, r, g, s, f, n), f.getChildByName("again").getChildByName("adNum").getComponent(cc.Label).string = "(" + t.againData.getSummerAgainDataById(r.ID) + "/" + r.AgainReciveVideoNum + ")"
                            })
                        }
                        i.summerLayout.addChild(o)
                    }, i = this, o = 0; o < this.battlePassCfg.length; o++) n(o)
                }, e.prototype.setAgainBtn = function (t, e, a, n, i, o, r) {
                    var c = this;
                    t.on(cc.Node.EventType.TOUCH_END, function () {
                        s.SdkMgr.getInstance().playVideo(null, function () {
                            var s = c.againData.setSummerAgainDataById(a.ID);
                            t.getChildByName("adNum").getComponent(cc.Label).string = "(" + s + "/" + a.AgainReciveVideoNum + ")";
                            var d = h.PlayerMgr.getInstance().getSignData();
                            h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.summerget), d.getCurentDay() <= 7 && h.PlayerMgr.getInstance().getTrackData().trackDayz(u.TrackId.dayz_summerget, d.getCurentDay()), s >= a.AgainReciveVideoNum ? (h.PlayerMgr.getInstance().getTrackData().youmengTrack(u.TrackId.summer_doubleget_X, r + 1), d.getCurentDay() <= 7 && h.PlayerMgr.getInstance().getTrackData().trackDayz(u.TrackId.dayz_summer_doubleget_X, d.getCurentDay(), r + 1), p.AwardMgr.getInstance().getAward(n, e), t.active = !1, i.getChildByName("lock").active = !0, o.getChildByName("end").active = !0) : c.openUI(l.UIID.UITips, lang.index60eed_645)
                        })
                    })
                }, o([m(cc.Node)], e.prototype, "summerLayout", void 0), o([m(cc.Label)], e.prototype, "allStarNum", void 0), o([m([cc.SpriteFrame])], e.prototype, "pointSp", void 0), o([f], e)
            }(r.default);
        a.default = y, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/manager/TweenMgr": "TweenMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/AwardMgr": "AwardMgr",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UISuperPlant: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "3b6cbsx6LRDpKLJf8ptAxz8", "UISuperPlant");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/manager/SdkMgr"), c = t("../config/Config"),
            l = t("../datas/TrackDataEvent"), u = t("../manager/DataMgr"), p = t("../manager/LevelMgr"),
            d = t("../manager/PlayerMgr"), h = cc._decorator, g = h.ccclass, f = h.property, m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ske = null, e.light = null, e.cancelBtn = null, e.getBtn = null, e.debrisGetLabel = null, e.preShow = null, e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this, e = d.PlayerMgr.getInstance().getSignData();
                    this.cancelBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        t.closeUI()
                    }), this.getBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        s.SdkMgr.getInstance().playVideo(null, function () {
                            e.getCurentDay() <= 7 && d.PlayerMgr.getInstance().getTrackData().youmengTrack(l.TrackId.dayz_lv_superplant_x_get, e.getCurentDay(), t.plantHero.ID), d.PlayerMgr.getInstance().getTrackData().youmengTrack(l.TrackId.lv_superplant_x_get, t.plantHero.ID), t.sendEvent(c.EventName.getSuperPlant, t.plantHero, t.plantLevelData, t.plantSkill, t.ske.skeletonData), t.closeUI()
                        })
                    }), d.PlayerMgr.getInstance().getTrackData().youmengTrack(l.TrackId.lv_superplant_x_show, this.plantHero.ID), e.getCurentDay() <= 7 && d.PlayerMgr.getInstance().getTrackData().youmengTrack(l.TrackId.dayz_lv_superplant_x_show, e.getCurentDay(), this.plantHero.ID), this.changeRoot()
                }, e.prototype.changeRoot = function () {
                    var t = this;
                    this.loadResFromBundle(this.plantHero.BunleName, this.plantHero.Model + "/" + this.plantHero.Model, sp.SkeletonData, function (e) {
                        t.ske.skeletonData = e, t.ske.setAnimation(0, "idle", !0), e.skeletonJson.skins.length > 1 && t.ske.setSkin("skin_1")
                    }), this.debrisGetLabel.string = p.LevelMgr.getInstance().levelData.SuperplantsDesc, this.preShow.getChildByName("hp").getChildByName("num").getComponent(cc.Label).string = this.plantLevelData.MaxHp + "", this.preShow.getChildByName("attack").getChildByName("num").getComponent(cc.Label).string = this.plantLevelData.AttackDisplay + "", this.preShow.getChildByName("attackSpeed").getChildByName("num").getComponent(cc.Label).string = 1 == this.plantSkill.AttackType ? lang.index60eed_646 : this.plantSkill.LaunchInterval + "s"
                }, e.prototype.init = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this.plantHero = u.DataMgr.getInstance().getHeroCfgById(Number(p.LevelMgr.getInstance().levelData.Superplants));
                    var a = this.plantHero.LvScope.split(",");
                    this.plantLevelData = u.DataMgr.getInstance().getHeroLevelById(Number(a[1])), this.plantSkill = u.DataMgr.getInstance().getSkillLevelCfgById(Number(this.plantLevelData.SkillID.split(",")[0]))
                }, e.prototype.update = function (t) {
                    this.light.angle += 10 * t
                }, o([f({
                    type: sp.Skeleton,
                    tooltip: lang.index60eed_647
                })], e.prototype, "ske", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_648
                })], e.prototype, "light", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_649
                })], e.prototype, "cancelBtn", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_650
                })], e.prototype, "getBtn", void 0), o([f({
                    type: cc.Label,
                    tooltip: lang.index60eed_651
                })], e.prototype, "debrisGetLabel", void 0), o([f({
                    type: cc.Node,
                    tooltip: lang.index60eed_652
                })], e.prototype, "preShow", void 0), o([g], e)
            }(r.default);
        a.default = m, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/DataMgr": "DataMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UITedail: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "88931kThyhCn4fkX7FiyHvj", "UITedail");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = t("../../framework/utils/UIUtils"), c = t("../manager/DataMgr"),
            l = t("../manager/PlayerMgr"), u = cc._decorator, p = u.ccclass, d = u.property, h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.plantName = null, e.propertyLabel = null, e.costNum = null, e.closeBtn = null, e.spriteFrameArr = [], e
                }

                return i(e, t), e.prototype.start = function () {
                    this.changePop()
                }, e.prototype.changePop = function () {
                    for (var t = this; this.propertyLabel.children.length < 4;) {
                        var e = cc.instantiate(this.propertyLabel.children[0]);
                        this.propertyLabel.addChild(e)
                    }
                    var a = l.PlayerMgr.getInstance().getUserData().getPlantData(), n = 0;
                    a.forEach(function (e) {
                        e.plantId == t.basePlantHeroCfg.ID && (n = e.plantLevel)
                    });
                    var i = this.synPlantHeroCfg.LvScope.split(","), o = n - 1 + Number(i[0]),
                        r = c.DataMgr.getInstance().getHeroLevelById(o),
                        u = c.DataMgr.getInstance().getSkillLevelCfgById(Number(r.SkillID.split(",")[0]));
                    this.plantName.string = "<outline color = #3d240a width = 4><color=#fffff9>" + this.synPlantHeroCfg.Name + "</c> <color=#fffff9>Lv." + r.Level + "</c></outline>", this.costNum.string = this.synPlantHeroCfg.SummonCost, this.propertyLabel.children.forEach(function (e, a) {
                        switch (e.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t.spriteFrameArr[a], a) {
                            case 0:
                                e.children[1].getComponent(cc.Label).string = lang.index60eed_653, e.children[2].children[0].getComponent(cc.Label).string = s.UIUtils.getRaceType(t.synPlantHeroCfg.RaceType);
                                break;
                            case 1:
                                e.children[1].getComponent(cc.Label).string = lang.index60eed_654, e.children[2].children[0].getComponent(cc.Label).string = r.AttackDisplay + "", e.children[2].children[0].getComponent(cc.LabelOutline).enabled = !0;
                                break;
                            case 2:
                                e.children[1].getComponent(cc.Label).string = lang.index60eed_655, e.children[2].children[0].getComponent(cc.Label).string = u.LaunchInterval ? u.LaunchInterval + "s" : lang.index60eed_656, lang.index60eed_657 != e.children[2].children[0].getComponent(cc.Label).string ? e.children[2].children[0].getComponent(cc.LabelOutline).enabled = !0 : e.children[2].children[0].getComponent(cc.LabelOutline).enabled = !1;
                                break;
                            case 3:
                                e.children[1].getComponent(cc.Label).string = lang.index60eed_658, e.children[2].children[0].getComponent(cc.Label).string = r.MaxHp + "", e.children[2].children[0].getComponent(cc.LabelOutline).enabled = !0
                        }
                    })
                }, e.prototype.init = function (t, e) {
                    this.synPlantHeroCfg = t, this.basePlantHeroCfg = e
                }, o([d({
                    type: cc.RichText,
                    tooltip: lang.index60eed_659
                })], e.prototype, "plantName", void 0), o([d({
                    type: cc.Node,
                    tooltip: lang.index60eed_660
                })], e.prototype, "propertyLabel", void 0), o([d({
                    type: cc.Label,
                    tooltip: lang.index60eed_661
                })], e.prototype, "costNum", void 0), o([d({
                    type: cc.Node,
                    tooltip: lang.index60eed_662
                })], e.prototype, "closeBtn", void 0), o([d([cc.SpriteFrame])], e.prototype, "spriteFrameArr", void 0), o([p], e)
            }(r.default);
        a.default = h, cc._RF.pop()
    }, {
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/utils/UIUtils": "UIUtils",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UITips: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "b8ba3ngR21FuYdxTm0/H8bV", "UITips");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../../scripts/framework/base/BaseUI"), s = cc._decorator, c = s.ccclass, l = s.property,
            u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tipsNode = null, e.tips = null, e
                }

                return i(e, t), e.prototype.init = function (t) {
                    this.str = this.T(t)
                }, e.prototype.uiRefresh = function (t) {
                    this.str = this.T(t), this.tweenAction.stop(), this.tipsNode.setPosition(0, 200), this.tipsNode.scaleY = 0, this.tips.string = t, this.tweenAction.start()
                }, e.prototype.onLoad = function () {
                    var t = this;
                    this.tweenAction = cc.tween(this.tipsNode).to(.2, {scaleY: 1}).delay(1).by(2, {position: new cc.Vec3(0, 100)}).call(function () {
                        t.closeUI()
                    })
                }, e.prototype.start = function () {
                    this.tipsNode.opacity = 255, this.tweenAction.stop(), this.tipsNode.setPosition(0, 200), this.tipsNode.scaleY = 0, this.tips.string = this.str, this.tweenAction.start()
                }, o([l({
                    type: cc.Node,
                    tooltip: lang.index60eed_663
                })], e.prototype, "tipsNode", void 0), o([l({
                    type: cc.Label,
                    tooltip: lang.index60eed_664
                })], e.prototype, "tips", void 0), o([c], e)
            }(r.default);
        a.default = u, cc._RF.pop()
    }, {"../../../scripts/framework/base/BaseUI": "BaseUI"}],
    UITop: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "11a8dapgTpGr6BtdcJA1ZM7", "UITop");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../commonModel/config/CommonCfg"), s = t("../../framework/base/BasePlatform"),
            c = t("../../framework/base/BaseUI"), l = t("../../framework/configs/Appcfg"),
            u = t("../../framework/manager/AudioMgr"), p = t("../../framework/manager/PlatformManager"),
            d = t("../../framework/manager/SdkMgr"), h = t("../../framework/manager/UIMgr"),
            g = t("../../framework/utils/UIUtils"), f = t("../../framework/utils/Utils"), m = t("../config/Config"),
            y = t("../manager/PlayerMgr"), v = cc._decorator, I = v.ccclass, _ = v.property, b = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.goldNum = null, e.goldIcon = null, e.goldLayout = null, e.goldAddBtn = null, e.diamondNum = null, e.diamondIcon = null, e.diamondLayout = null, e.diamondAddBtn = null, e.returnBtn = null, e.leveleUp = null, e.goldPosArr = [], e.diamondPosArr = [], e
                }

                return i(e, t), e.prototype.start = function () {
                    var t = this;
                    this.goldIcon.parent.getComponent(cc.Widget).left = cc.winSize.width / 2 - 260, this.goldIcon.parent.getComponent(cc.Widget).updateAlignment(), this.diamondIcon.parent.getComponent(cc.Widget).left = cc.winSize.width / 2 + 30, this.diamondIcon.parent.getComponent(cc.Widget).updateAlignment(), p.PlatformManager.currentPlatform == s.Platform.KuaiShou && (this.returnBtn.parent.getComponent(cc.Widget).left = 160), this.addEvent(m.EventName.RefreshGold, this.refreshGold), this.addEvent(l.BaseEventName.OpenUI, function (e) {
                        if (t.nowId = e, e == m.UIID.UICombat && (t.goldIcon.parent.active = !1, t.diamondIcon.parent.active = !1, t.returnBtn.active = !0), e == m.UIID.UIInbornUp || e == m.UIID.UIPlantDrawings || e == m.UIID.UIPlantLevelUP || e == m.UIID.UIPlantLottery || e == m.UIID.UISummerFestival || e == m.UIID.UINewInboren || e == m.UIID.UIEquip) {
                            if (p.APPMgr.currentApp == s.AppName.Invincible && d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe)) return void (e == m.UIID.UIPlantLevelUP ? (t.leveleUp.active = !1, t.returnBtn.active = !0) : (t.leveleUp.active = !0, t.returnBtn.active = !1));
                            y.PlayerMgr.getInstance().isLock = !1, t.returnBtn.active = !0
                        }
                        e == m.UIID.UIGameOver && (t.goldIcon.parent.getComponent(cc.Widget).left = cc.winSize.width / 2 - 260, t.goldIcon.parent.getComponent(cc.Widget).updateAlignment(), t.goldIcon.parent.active = !0, t.goldIcon.parent.getChildByName("zw_ty_+").active = !0, t.diamondIcon.parent.getComponent(cc.Widget).left = cc.winSize.width / 2 + 30, t.diamondIcon.parent.getComponent(cc.Widget).updateAlignment(), t.diamondIcon.parent.active = !0, t.returnBtn.active = !1)
                    }), this.addEvent(m.EventName.startGame, function () {
                        t.goldIcon.parent.getComponent(cc.Widget).left = 140, t.goldIcon.parent.active = !0, t.goldIcon.parent.getChildByName("zw_ty_+").active = !1
                    }), this.addEvent(l.BaseEventName.CloseUI, function () {
                        y.PlayerMgr.getInstance().isLock = !1
                    }), this.userData = y.PlayerMgr.getInstance().getUserData(), this.goldNum.string = this.userData.getGoldNum() + "", this.diamondNum.string = this.userData.getDiamondNum() + "", this.calcItemPos(), this.returnBtn.on(cc.Node.EventType.TOUCH_END, this.returnBtnOn.bind(this)), this.goldAddBtn.on(cc.Node.EventType.TOUCH_END, this.goldAddBtnOn.bind(this)), this.diamondAddBtn.on(cc.Node.EventType.TOUCH_END, this.diamondAddBtnOn.bind(this)), this.leveleUp.active = d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == s.AppName.Invincible, this.leveleUp.on(cc.Node.EventType.TOUCH_END, function () {
                        t.openUI(m.UIID.UIPlantLevelUP)
                    })
                }, e.prototype.onEnable = function () {
                    var t = this.goldIcon.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    this.goldPos = this.goldLayout.convertToNodeSpaceAR(t);
                    var e = this.diamondIcon.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    this.diamondPos = this.diamondLayout.convertToNodeSpaceAR(e)
                }, e.prototype.returnBtnOn = function () {
                    var t = this;
                    this.sendEvent(m.EventName.closeUI, function () {
                        t.leveleUp.active = d.SdkMgr.getInstance().getCheckVersion(p.SwitchID.ShenHe) && p.APPMgr.currentApp == s.AppName.Invincible, t.node.active = !0, t.returnBtn.active = !1, t.goldIcon.parent.getComponent(cc.Widget).left = cc.winSize.width / 2 - 260, t.goldIcon.parent.active = !0, t.goldIcon.parent.getChildByName("zw_ty_+").active = !0, t.diamondIcon.parent.getComponent(cc.Widget).left = cc.winSize.width / 2 + 30, t.diamondIcon.parent.getComponent(cc.Widget).updateAlignment(), t.diamondIcon.parent.active = !0
                    })
                }, e.prototype.goldAddBtnOn = function () {
                    1 != y.PlayerMgr.getInstance().isLock && (y.PlayerMgr.getInstance().isLock = !0, h.UIMgr.getInstance().openUI(m.UIID.UIGetResource, m.UIID.UINone, m.Currency.gold))
                }, e.prototype.diamondAddBtnOn = function () {
                    1 != y.PlayerMgr.getInstance().isLock && (y.PlayerMgr.getInstance().isLock = !0, h.UIMgr.getInstance().openUI(m.UIID.UIGetResource, m.UIID.UINone, m.Currency.diamond))
                }, e.prototype.calcItemPos = function () {
                    for (var t = 0; t < this.goldLayout.childrenCount; t++) {
                        var e = this.goldLayout.children[t];
                        this.goldPosArr.push(e.position)
                    }
                    for (t = 0; t < this.diamondLayout.childrenCount; t++) {
                        var a = this.diamondLayout.children[t];
                        this.diamondPosArr.push(a.position)
                    }
                }, e.prototype.refreshGold = function (t, e, a, n) {
                    var i, o, s, c, l = this;
                    switch (a) {
                        case m.Currency.gold:
                            i = this.goldLayout, o = this.goldIcon, s = this.userData.getGoldNum(), c = this.goldNum;
                            break;
                        case m.Currency.diamond:
                            i = this.diamondLayout, o = this.diamondIcon, s = this.userData.getDiamondNum(), c = this.diamondNum
                    }
                    if (e) {
                        if (n) {
                            var u = i.parent.convertToNodeSpaceAR(n);
                            i.setPosition(u)
                        } else i.setPosition(0, 0);
                        var p = o.convertToWorldSpaceAR(cc.Vec2.ZERO);
                        this.goldPos = i.convertToNodeSpaceAR(p), this.flyGoldAni(a)
                    }
                    g.UIUtils.rollNumLabelAtlas(e, c, t, s, function () {
                        a == m.Currency.gold ? c.string = l.userData.getGoldNum() + "" : a == m.Currency.diamond && (c.string = l.userData.getDiamondNum() + ""), l.sendEvent(r.CommonEventName.GetRewardEnd)
                    }, 3)
                }, e.prototype.flyGoldAni = function (t) {
                    var e, a, n, i, o = 0, r = 0;
                    switch (t) {
                        case m.Currency.gold:
                            n = this.goldLayout, i = this.goldIcon, e = this.goldPos, a = this.goldPosArr;
                            break;
                        case m.Currency.diamond:
                            n = this.diamondLayout, i = this.diamondIcon, e = this.diamondPos, a = this.diamondPosArr
                    }
                    for (var s = function (t) {
                        var s = n.children[t];
                        s.active = !0, s.position = new cc.Vec3(0, 0, 0);
                        var c = f.Utils.randomRang(1.8, 3);
                        s.scale = .5, cc.tween(s).delay(o).show().to(.2, {position: a[t]}).to(.03, {scale: c}).to(.02, {scale: 1}).delay(.2).delay(o).call(function () {
                            cc.tween(s).to(o + .05, {position: new cc.Vec3(e.x, e.y)}).hide().call(function () {
                                s.position = a[t], u.AudioMgr.getInstance().playEffect(m.AudioId.goldEffect), cc.tween(i).to(.05, {scale: 1.5}).to(.1, {scale: 1}).start(), ++r >= n.children.length - 1 && (r = 0)
                            }).start()
                        }).start(), o += .04
                    }, c = 0; c < n.children.length; c++) s(c)
                }, o([_(cc.Label)], e.prototype, "goldNum", void 0), o([_(cc.Node)], e.prototype, "goldIcon", void 0), o([_(cc.Node)], e.prototype, "goldLayout", void 0), o([_(cc.Node)], e.prototype, "goldAddBtn", void 0), o([_(cc.Label)], e.prototype, "diamondNum", void 0), o([_(cc.Node)], e.prototype, "diamondIcon", void 0), o([_(cc.Node)], e.prototype, "diamondLayout", void 0), o([_(cc.Node)], e.prototype, "diamondAddBtn", void 0), o([_(cc.Node)], e.prototype, "returnBtn", void 0), o([_(cc.Node)], e.prototype, "leveleUp", void 0), o([I], e)
            }(c.default);
        a.default = b, cc._RF.pop()
    }, {
        "../../commonModel/config/CommonCfg": "CommonCfg",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/base/BaseUI": "BaseUI",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/UIUtils": "UIUtils",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UITouch: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "6efe8537FJKFoMtDV9psOIv", "UITouch");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../../scripts/framework/base/BaseUI"), s = t("../../framework/configs/Appcfg"),
            c = t("../../framework/manager/FeedCardMgr"), l = t("../../framework/manager/PlatformManager"),
            u = t("../../framework/manager/SdkMgr"), p = t("../config/Config"), d = t("../datas/TrackDataEvent"),
            h = t("../manager/PlayerMgr"), g = cc._decorator, f = g.ccclass, m = g.property, y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.touchNode = null, e.needEffect = !0, e.touchNodes = [], e
                }

                return i(e, t), e.prototype.onLoad = function () {
                    var t = this;
                    this.addEvent(s.BaseEventName.blocktouch, this.onBlockTouch), this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                        if (t.needEffect) {
                            var a;
                            t.touchNodes.length > 0 ? ((a = t.touchNodes.pop()).active = !0, a.getComponent(cc.Animation).play()) : ((a = cc.instantiate(t.touchNode)).active = !0, a.parent = t.node);
                            var n = t.node.convertToNodeSpaceAR(e.getLocation());
                            a.setPosition(n), t.scheduleOnce(function () {
                                a.active = !1, t.touchNodes.push(a)
                            }, .5)
                        }
                    }), this.node._touchListener.setSwallowTouches(!1), this.addEvent(p.EventName.openFeedCardSub, function () {
                        u.SdkMgr.getInstance().getCheckVersion(l.SwitchID.ShenHe) || h.PlayerMgr.getInstance().getSignData().getSubActive() || t.node.once(cc.Node.EventType.TOUCH_END, function () {
                            console.log(lang.index60eed_665), l.PlatformManager.getInstance().youmengTrack("error", h.PlayerMgr.getInstance().getTrackData().getAbType(), lang.index60eed_666, null), c.FeedCardMgr.instance.openSubscribe(["MSG1446630748257266353423522662711"], function (t) {
                                console.log(lang.index60eed_667, t), null != t && (console.log(lang.index60eed_668), l.PlatformManager.getInstance().youmengTrack("error", h.PlayerMgr.getInstance().getTrackData().getAbType(), lang.index60eed_669, null), h.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.subscribe), h.PlayerMgr.getInstance().getSignData().setSubActive(!0))
                            })
                        })
                    })
                }, e.prototype.onBlockTouch = function (t) {
                    this.node._touchListener.setSwallowTouches(!t)
                }, o([m(cc.Node)], e.prototype, "touchNode", void 0), o([m({displayName: lang.index60eed_670})], e.prototype, "needEffect", void 0), o([f], e)
            }(r.default);
        a.default = y, cc._RF.pop()
    }, {
        "../../../scripts/framework/base/BaseUI": "BaseUI",
        "../../framework/configs/Appcfg": "Appcfg",
        "../../framework/manager/FeedCardMgr": "FeedCardMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../../framework/manager/SdkMgr": "SdkMgr",
        "../config/Config": "Config",
        "../datas/TrackDataEvent": "TrackDataEvent",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    UIUtils: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "02b4f3KsDZMT7SinMRf3crw", "UIUtils"), Object.defineProperty(a, "__esModule", {value: !0}), a.UIUtils = void 0;
        var n = t("../../game/config/Config"), i = t("../../game/manager/DataMgr"), o = t("../manager/AudioMgr"),
            r = t("./Utils"), s = function () {
                function t() {
                }

                return t.rollNumLabelAtlas = function (t, e, a, n, i, o) {
                    void 0 === o && (o = 6);
                    var r = a, s = 10 * o, c = 0, l = r / s + 1;
                    r <= s ? (s = r, l = 1) : s += 1;
                    var u = function () {
                        if (t) {
                            if (c != r) {
                                (c += l) > r && (l -= c - r, c = r);
                                var a = Number(e.string), i = Math.floor(a + l).toFixed(0) + "";
                                e.string = i
                            }
                        } else c != r && ((c += l) > r && (l = 0, c = r), (a = Number(e.string)) > n) && (i = Math.floor(a - l).toFixed(0) + "", Number(i) < n && (i = n + ""), e.string = i)
                    };
                    s > 0 ? cc.tween(e.node).call(function () {
                        u()
                    }).delay(.05).union().repeat(s).call(function () {
                        i()
                    }).start() : i()
                }, t.scheduleOnce = function (t, e, a) {
                    cc.director.getScheduler().enableForTarget(e), cc.director.getScheduler().schedule(t, e, 1, 0, a, !1)
                }, t.schedule = function (t, e, a) {
                    cc.director.getScheduler().enableForTarget(e), cc.director.getScheduler().schedule(t, e, a, cc.macro.REPEAT_FOREVER, 0, !1)
                }, t.unSchedule = function (t, e) {
                    cc.director.getScheduler().enableForTarget(e), cc.director.getScheduler().isScheduled(t, e) && cc.director.getScheduler().unschedule(t, e)
                }, t.getRaceType = function (t) {
                    switch (t) {
                        case 1:
                            return lang.index60eed_671;
                        case 2:
                            return lang.index60eed_672;
                        case 3:
                            return lang.index60eed_673;
                        case 4:
                            return lang.index60eed_674;
                        case 5:
                            return lang.index60eed_675
                    }
                }, t.buttonAni = function (t, e, a) {
                    e && o.AudioMgr.getInstance().playEffect(n.AudioId.btnClick);
                    var i = e ? .8 : 1;
                    cc.tween(t).to(.1, {scale: i}).call(function () {
                        a && a()
                    }).start()
                }, t.setButtonAni = function (t, e) {
                    var a = this;
                    t.on(cc.Node.EventType.TOUCH_START, function () {
                        a.buttonAni(t, !0)
                    }), t.on(cc.Node.EventType.TOUCH_CANCEL, function () {
                        a.buttonAni(t, !1)
                    }), t.on(cc.Node.EventType.TOUCH_END, function () {
                        a.buttonAni(t, !1, e)
                    })
                }, t.getSkillString = function (t) {
                    var e = this, a = i.DataMgr.getInstance().getSkillLevelCfgById(Number(t.SkillID.split(",")[0])),
                        n = i.DataMgr.getInstance().getSkillLevelCfgDescribeById(Number(t.SkillID.split(",")[0])), o = "";
                    return n.forEach(function (t) {
                        var n = i.DataMgr.getInstance().getDescribeById(Number(t)), s = n.Describe;
                        if (n.FieldName) {
                            var c = a[n.FieldName].split(","), l = "", u = "";
                            switch (n.FieldName) {
                                case"HabitusAddAttack":
                                    c.forEach(function (t, e) {
                                        if (t > 0) {
                                            switch (e) {
                                                case 0:
                                                    l += lang.index60eed_676;
                                                    break;
                                                case 1:
                                                    l += "" == l ? lang.index60eed_677 : lang.index60eed_678;
                                                    break;
                                                case 2:
                                                    l += "" == l ? lang.index60eed_679 : lang.index60eed_680
                                            }
                                            u = t
                                        }
                                    });
                                    break;
                                case"RaceAddAttack":
                                    l = e.getRaceType(Number(c[0])), u = c[1];
                                    break;
                                case"Frost":
                                    l = c[1], u = c[2];
                                    break;
                                case"DeathExplosion":
                                    switch (Number(c[0])) {
                                        case 1:
                                            l = lang.index60eed_681;
                                            break;
                                        case 2:
                                            l = lang.index60eed_682;
                                            break;
                                        case 3:
                                            l = lang.index60eed_683
                                    }
                                    u = c[1];
                                    break;
                                case"Swallow":
                                    l = c[4], u = c[5];
                                    break;
                                case"ProbabilityStun":
                                    l = c[0];
                                    break;
                                case"DeathCall":
                                    l = i.DataMgr.getInstance().getHeroCfgById(Number(c[0])).Name;
                                    break;
                                case"":
                                    l = u = "";
                                    break;
                                default:
                                    l = c[0], u = c[1]
                            }
                            o += r.Utils.StringFormat(s, l, u)
                        } else o += s
                    }), o
                }, t
            }();
        a.UIUtils = s, cc._RF.pop()
    }, {
        "../../game/config/Config": "Config",
        "../../game/manager/DataMgr": "DataMgr",
        "../manager/AudioMgr": "AudioMgr",
        "./Utils": "Utils"
    }],
    UIZombieTip: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "5fdc4+ouslLC7NYt2TUILHl", "UIZombieTip");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/base/BaseUI"), s = cc._decorator, c = s.ccclass, l = s.property, u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.zombieName = null, e.habitus = null, e.hp = null, e.attack = null, e.desc = null, e.sprite = null, e.doBtn = null, e
            }

            return i(e, t), e.prototype.start = function () {
                this.changePop()
            }, e.prototype.changePop = function () {
                var t = this;
                switch (this.sprite.node.scale = this.zombieData.ModeScale2, this.loadSpriteFrame("zombie", "main/" + this.zombieData.ModelID, function (e) {
                    t.sprite.spriteFrame = e, t.scheduleOnce(function () {
                        cc.director.pause()
                    })
                }), this.zombieName.string = this.zombieData.Name, this.zombieData.HabitusType) {
                    case 1:
                        this.habitus.string = lang.index60eed_684;
                        break;
                    case 2:
                        this.habitus.string = lang.index60eed_685;
                        break;
                    case 3:
                        this.habitus.string = lang.index60eed_686
                }
                this.hp.string = lang.index60eed_687 + this.zombieData.LifeDisplay, this.attack.string = lang.index60eed_688 + this.zombieData.AttackDisplay, this.desc.string = this.zombieData.Desc
            }, e.prototype.init = function (t) {
                this.zombieData = t
            }, e.prototype.doBtnOn = function () {
                cc.director.resume(), this.closeUI()
            }, o([l({
                type: cc.Label,
                tooltip: lang.index60eed_689
            })], e.prototype, "zombieName", void 0), o([l({
                type: cc.Label,
                tooltip: lang.index60eed_690
            })], e.prototype, "habitus", void 0), o([l({
                type: cc.Label,
                tooltip: lang.index60eed_691
            })], e.prototype, "hp", void 0), o([l({
                type: cc.Label,
                tooltip: lang.index60eed_692
            })], e.prototype, "attack", void 0), o([l({
                type: cc.Label,
                tooltip: lang.index60eed_693
            })], e.prototype, "desc", void 0), o([l({
                type: cc.Sprite,
                tooltip: lang.index60eed_694
            })], e.prototype, "sprite", void 0), o([l({
                type: cc.Node,
                tooltip: lang.index60eed_695
            })], e.prototype, "doBtn", void 0), o([c], e)
        }(r.default);
        a.default = u, cc._RF.pop()
    }, {"../../framework/base/BaseUI": "BaseUI"}],
    UI_move_effect_start: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "e4038H3IplHXLdew8CejbaD", "UI_move_effect_start");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = cc._decorator, s = r.ccclass, c = r.property, l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.canvas = null, e.t_b = null, e.t_b_num = 200, e.b_t = null, e.b_t_num = 30, e.l_r = null, e
            }

            return i(e, t), e.prototype.start = function () {
                var t = -this.canvas.width / 2, e = (this.canvas.width, this.canvas.height / 2),
                    a = -this.canvas.height / 2, n = e - this.t_b.height / 2 - this.t_b_num;
                this.t_b.y = e + this.t_b.height / 2;
                var i = cc.moveTo(.7, cc.v2(0, n)).easing(cc.easeBackOut());
                this.t_b.runAction(i);
                var o = a + this.b_t.height / 2 + this.b_t_num;
                this.b_t.y = a - this.b_t.height / 2;
                var r = cc.moveTo(1.2, cc.v2(0, o)).easing(cc.easeBackOut());
                this.b_t.runAction(r), this.l_r.x = t - this.l_r.height / 2;
                var s = cc.moveTo(1.5, cc.v2(0, 0)).easing(cc.easeBackOut());
                this.l_r.runAction(s)
            }, o([c(cc.Node)], e.prototype, "canvas", void 0), o([c({
                type: cc.Node,
                displayName: lang.index60eed_696,
                tooltip: lang.index60eed_697
            })], e.prototype, "t_b", void 0), o([c({
                type: cc.Float,
                displayName: lang.index60eed_698,
                tooltip: lang.index60eed_699
            })], e.prototype, "t_b_num", void 0), o([c({
                type: cc.Node,
                displayName: lang.index60eed_700,
                tooltip: lang.index60eed_701
            })], e.prototype, "b_t", void 0), o([c({
                type: cc.Float,
                displayName: lang.index60eed_702,
                tooltip: lang.index60eed_703
            })], e.prototype, "b_t_num", void 0), o([c({
                type: cc.Node,
                displayName: lang.index60eed_704,
                tooltip: lang.index60eed_705
            })], e.prototype, "l_r", void 0), o([s], e)
        }(cc.Component);
        a.default = l, cc._RF.pop()
    }, {}],
    UserData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "b1a7cBMu6FI4byGElcDxX5r", "UserData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.UserData = a.zombieData = a.customsData = a.lotteryData = a.itemData = a.inbornData = a.plantData = a.ThirdUserInfo = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../../framework/base/BasePlatform"),
            s = t("../../framework/manager/EventMgr"), c = t("../../framework/manager/LanguageMgr"),
            l = t("../../framework/manager/PlatformManager"), u = t("../config/Config"), p = t("../global/Global"),
            d = t("../manager/DataMgr"), h = t("../manager/PlayerMgr");
        a.ThirdUserInfo = function () {
        };
        var g = function () {
            this.goldNum = 0, this.diamondNum = 0, this.newItData = [], this.newPLData = [], this.newZombieData = [], this.isAddDesktop = !1, this.nowCellNum = p.Global.initCellNum, this.heartNum = 5, this.heartTime = -1, this.infiniteHeart = !1, this.accumulatedHeart = 0
        };
        a.plantData = function () {
            this.plantId = 0, this.plantLevel = 1
        };
        a.inbornData = function () {
            this.freeNum = 0, this.inbornId = 0, this.inbornLevel = 0
        };
        a.itemData = function () {
            this.itemId = 0, this.itemNum = 0
        };
        a.lotteryData = function () {
            this.lotteryId = 0, this.lotteryNum = 0
        };
        a.customsData = function () {
            this.currentCustom = 0, this.passAll = !1, this.customStar = []
        };
        a.zombieData = function () {
            this.hasShow = !1
        };
        var f = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = u.GameConfig.AppCacheName + "udata", e.isNewUser = !1, e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new g, l.APPMgr.currentApp == r.AppName.Invincible && (this.data.heartTime = -1, this.data.goldNum = 1e3), this.data
            }, e.prototype.initData = function (t) {
                var e = this;
                t && (this.isNewUser = !0), this.data.isAddDesktop || (this.data.isAddDesktop = !1), this.data.nowCellNum && 8 == this.data.nowCellNum || (this.data.nowCellNum = 8), p.Global.newPlantInborn && (this.data.inbornData = null), this.data.heartNum || null != this.data.heartNum && null != this.data.heartNum || (this.data.heartNum = 5), this.data.heartTime || null != this.data.heartTime && null != this.data.heartTime || (this.data.heartTime = -1), this.data.accumulatedHeart || (this.data.accumulatedHeart = 0), this.data.newZombieData || (this.data.newZombieData = []), this.data.zombieData && this.data.zombieData.length > 0 && (this.data.zombieData.forEach(function (t, a) {
                    e.data.newZombieData[a] = t.hasShow ? 1 : 0
                }), this.data.zombieData = null), this.data.newItData && 0 != this.data.newItData.length || (this.data.newItData = [], d.DataMgr.getInstance().getAllItemCfg().forEach(function (t) {
                    "51002" == t.ItemId.toString().substr(0, 5) && e.data.newItData.push(0)
                })), this.data.itemData && this.data.itemData.length > 0 && (this.data.itemData.forEach(function (t, a) {
                    e.data.newItData[a] = t.itemNum
                }), this.data.itemData = null), this.saveData()
            }, e.prototype.getDdd = function () {
                if (this.isNewUser) return null;
                var t = this.data.lotteryData;
                return this.data.lotteryData = null, this.saveData(), t
            }, e.prototype.getCustomDdd = function () {
                if (this.isNewUser) return null;
                var t = this.data.customsData;
                return this.data.customsData = null, this.saveData(), t
            }, e.prototype.getplantDdd = function () {
                if (this.isNewUser) return null;
                var t = this.data.plantData;
                return this.data.plantData = null, this.saveData(), t
            }, e.prototype.getIsNewUser = function () {
                return this.isNewUser
            }, e.prototype.getGoldNum = function () {
                return this.data.goldNum
            }, e.prototype.addGoldNum = function (t, e) {
                this.data.goldNum += t, this.saveData(), s.EventMgr.getInstance().emit(u.EventName.RefreshGold, t, !0, u.Currency.gold, e)
            }, e.prototype.subGoldNum = function (t) {
                return !(this.data.goldNum < t || (this.data.goldNum -= t, s.EventMgr.getInstance().emit(u.EventName.RefreshGold, t, !1, u.Currency.gold), this.saveData(), 0))
            }, e.prototype.getDiamondNum = function () {
                return this.data.diamondNum || (this.data.diamondNum = 0, this.saveData()), this.data.diamondNum
            }, e.prototype.addDiamondNum = function (t, e) {
                this.data.diamondNum += t, this.saveData(), s.EventMgr.getInstance().emit(u.EventName.RefreshGold, t, !0, u.Currency.diamond, e)
            }, e.prototype.subDiamondNum = function (t) {
                return !(this.data.diamondNum < t || (this.data.diamondNum -= t, s.EventMgr.getInstance().emit(u.EventName.RefreshGold, t, !1, u.Currency.diamond), this.saveData(), 0))
            }, e.prototype.getPlayerName = function () {
                return c.LanguageMgr.getInstance().T(this.data.playerName)
            }, e.prototype.setPlayerName = function (t) {
                this.data.playerName = t, this.saveData()
            }, e.prototype.getThirdInfo = function () {
                return this.data.thridUserInfo
            }, e.prototype.setThirdInfo = function (t) {
                this.data.thridUserInfo = t, this.saveData()
            }, e.prototype.setPlantData = function (t, e) {
                h.PlayerMgr.getInstance().getplantLevelData().setPlantData(t, e)
            }, e.prototype.getPlantData = function () {
                return h.PlayerMgr.getInstance().getplantLevelData().getPlantData()
            }, e.prototype.setinbornFree = function (t) {
                for (var e = 0; e < this.data.inbornData.length; e++) if (this.data.inbornData[e].inbornId == t) {
                    this.data.inbornData[e].freeNum ? this.data.inbornData[e].freeNum += 1 : this.data.inbornData[e].freeNum = 1;
                    break
                }
                this.saveData()
            }, e.prototype.setinbornData = function (t, e) {
                for (var a = 0; a < this.data.inbornData.length; a++) if (this.data.inbornData[a].inbornId == t) {
                    this.data.inbornData[a].inbornLevel = e;
                    break
                }
                this.saveData()
            }, e.prototype.getinbornData = function () {
                return this.data.inbornData || (this.initGameData(), this.saveData()), this.data.inbornData
            }, e.prototype.setItemData = function (t, e) {
                this.data.newItData[t - 51002001] || (this.data.newItData[t - 51002001] = 0), this.data.newItData[t - 51002001] += e, this.saveData()
            }, e.prototype.getItemData = function () {
                return this.data.newItData
            }, e.prototype.getItemDataById = function (t) {
                return this.data.newItData[t - 51002001] || (this.data.newItData[t - 51002001] = 0), this.data.newItData[t - 51002001]
            }, e.prototype.setCurrentCustom = function (t) {
                t ? (this.data.customsData.passAll = !1, this.data.customsData.currentCustom = t) : this.data.customsData.passAll = !0, this.saveData()
            }, e.prototype.getCurrentCustom = function () {
                return this.data.customsData || (this.initGameData(), this.saveData()), this.data.customsData
            }, e.prototype.setCustomStar = function (t, e) {
                if (this.data.customsData.customStar.length < t[0]) for (var a = this.data.customsData.customStar.length; a < t[0]; a++) this.data.customsData.customStar.push([[]]);
                var n = this.data.customsData.customStar[t[0] - 1][t[1] - 1];
                n[0] = 0 == n[0] ? e[0] : n[0], n[1] = 0 == n[1] ? e[1] : n[1], n[2] = 0 == n[2] ? e[2] : n[2], this.saveData()
            }, e.prototype.getCurrentStar = function (t) {
                return this.data.customsData || (this.initGameData(), this.saveData()), this.data.customsData.customStar[t[0] - 1][t[1] - 1]
            }, e.prototype.setZombieData = function (t) {
                this.data.newZombieData[t - 310001] = 1, this.saveData()
            }, e.prototype.getZombieData = function () {
                return this.data.zombieData
            }, e.prototype.getZombieDataById = function (t) {
                return 1 == this.data.newZombieData[t - 310001]
            }, e.prototype.initGameData = function () {
            }, e.prototype.setIsAddDesktop = function (t) {
                this.data.isAddDesktop = t, this.saveData()
            }, e.prototype.getIsAddDesktop = function () {
                return this.data.isAddDesktop
            }, e.prototype.addNowCellNum = function () {
                this.data.nowCellNum += 1, this.saveData()
            }, e.prototype.getNowCellNum = function () {
                return this.data.nowCellNum
            }, e.prototype.getHeartNum = function () {
                return this.data.heartNum
            }, e.prototype.modifiedHeartNum = function (t, e) {
                void 0 === e && (e = !0), this.data.heartNum += t, this.saveData(), t > 0 ? s.EventMgr.getInstance().emit(u.EventName.RefHeart, !0, e) : s.EventMgr.getInstance().emit(u.EventName.RefHeart, !1, !1)
            }, e.prototype.addAccumulatedHeartNum = function (t) {
                this.data.accumulatedHeart += Math.abs(t), this.saveData()
            }, e.prototype.getAccumulatedHeartNum = function () {
                return this.data.accumulatedHeart
            }, e.prototype.setHeartNum = function (t) {
                this.data.heartNum = t, this.saveData(), s.EventMgr.getInstance().emit(u.EventName.RefHeart, !0)
            }, e.prototype.getInfiniteHeart = function () {
                return this.data.infiniteHeart
            }, e.prototype.setInfiniteHeart = function (t) {
                this.data.infiniteHeart = t, this.saveData()
            }, e.prototype.getRecoverHeartTime = function () {
                return this.data.heartTime
            }, e.prototype.setRecoverHeartTime = function (t) {
                this.data.heartTime = t, this.saveData()
            }, e
        }(o.BaseData);
        a.UserData = f, cc._RF.pop()
    }, {
        "../../framework/base/BaseData": "BaseData",
        "../../framework/base/BasePlatform": "BasePlatform",
        "../../framework/manager/EventMgr": "EventMgr",
        "../../framework/manager/LanguageMgr": "LanguageMgr",
        "../../framework/manager/PlatformManager": "PlatformManager",
        "../config/Config": "Config",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/PlayerMgr": "PlayerMgr"
    }],
    Utils: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "c3094hfLydDo5f53IYbb0ej", "Utils"), Object.defineProperty(a, "__esModule", {value: !0}), a.Utils = void 0;
        var n = function () {
            function t() {
            }

            return t.formatStr = function (t) {
                for (var e = [], a = 1; a < arguments.length; a++) e[a - 1] = arguments[a];
                return cc.js.formatStr(t, e)
            }, t.StringFormat = function (t) {
                for (var e = [], a = 1; a < arguments.length; a++) e[a - 1] = arguments[a];
                for (var n = 0; n < e.length; n++) {
                    var i = new RegExp("\\{" + n + "\\}", "gm");
                    t = t.replace(i, arguments[n + 1])
                }
                return t
            }, t.formatGold = function (t) {
                return (t + "").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
            }, t.randomRang = function (t, e) {
                return Math.floor(Math.random() * (e - t)) + t
            }, t.getRange = function (t, e) {
                for (var a = [], n = t; n < e + 1; n++) a.push(n);
                return a
            }, t.weight_rand = function (t) {
                for (var e, a = 0, n = !1, i = function (t, e) {
                    var a = Math.min(t, e), n = Math.max(t, e), i = 1;
                    if (0 === t || 0 === e) return n;
                    for (var o = a; o >= 1; o--) if (a % o == 0 && n % o == 0) {
                        i = o;
                        break
                    }
                    return i
                }, o = new Array, r = 0; r < t.length; r++) void 0 !== t[r].Weight ? -1 !== t[r].Weight.toString().indexOf("%") ? (e = Math.floor(t[r].Weight.toString().replace("%", "")), n = !0) : e = Math.floor(100 * t[r].Weight) : e = 0, o[r] = e, a = i(a, e);
                var s = new Array, c = 0, l = 0;
                if (n) {
                    for (r = 0; r < t.length; r++) {
                        l = o[r];
                        for (var u = 0; u < l && !(c >= 100); u++) s.push(r), c++
                    }
                    for (; c < 100;) s.push(t.length - 1), c++
                } else for (r = 0; r < t.length; r++) {
                    for (l = o[r] / a, u = 0; u < l; u++) s.push(r);
                    c += l
                }
                return t[s[Math.floor(Math.random() * c)]]
            }, t.encrypt = function (t, e) {
                if (null == e || e.length <= 0) return null;
                for (var a = "", n = 0; n < e.length; n++) a += e.charCodeAt(n).toString();
                var i = Math.floor(a.length / 5),
                    o = parseInt(a.charAt(i) + a.charAt(2 * i) + a.charAt(3 * i) + a.charAt(4 * i) + a.charAt(5 * i)),
                    r = Math.ceil(e.length / 2), s = Math.pow(2, 31) - 1;
                if (o < 2) return null;
                var c = Math.round(1e9 * Math.random()) % 1e8;
                for (a += c; a.length > 10;) a = (parseInt(a.substring(0, 10)) + parseInt(a.substring(10, a.length))).toString();
                a = (o * a + r) % s;
                var l = "", u = "";
                for (n = 0; n < t.length; n++) {
                    var p = (t.charCodeAt(n) ^ Math.floor(a / s * 255)) + "";
                    u += (l = parseInt(p)) < 16 ? "0" + l.toString(16) : l.toString(16), a = (o * a + r) % s
                }
                for (c = c.toString(16); c.length < 8;) c = "0" + c;
                return u + c
            }, t.decrypt = function (t, e) {
                if (!(null == t || t.length < 8 || null == e || e.length <= 0)) {
                    for (var a = "", n = 0; n < e.length; n++) a += e.charCodeAt(n).toString();
                    var i = Math.floor(a.length / 5),
                        o = parseInt(a.charAt(i) + a.charAt(2 * i) + a.charAt(3 * i) + a.charAt(4 * i) + a.charAt(5 * i)),
                        r = Math.round(e.length / 2), s = Math.pow(2, 31) - 1,
                        c = parseInt(t.substring(t.length - 8, t.length), 16);
                    for (t = t.substring(0, t.length - 8), a += c; a.length > 10;) a = (parseInt(a.substring(0, 10)) + parseInt(a.substring(10, a.length))).toString();
                    a = (o * a + r) % s;
                    var l = "", u = "";
                    for (n = 0; n < t.length; n += 2) l = parseInt((parseInt(t.substring(n, n + 2), 16) ^ Math.floor(a / s * 255)) + ""), u += String.fromCharCode(l), a = (o * a + r) % s;
                    return u
                }
            }, t.randomDiffIndex = function (t, e, a) {
                var n = this.randomRang(0, t);
                this.checkExist(n, a) ? this.randomDiffIndex(t, e, a) : (a.push(n), a.length < e && this.randomDiffIndex(t, e, a))
            }, t.checkExist = function (t, e) {
                for (var a = 0; a < e.length; a++) if (e[a] == t) return !0;
                return !1
            }, t.mapToJson = function (t) {
                return this.MapTOJson(t)
            }, t.jsonToMap = function (t) {
                for (var e = JSON.parse(t), a = new Map, n = 0, i = Object.keys(e); n < i.length; n++) {
                    var o = i[n];
                    a.set(Number(o), Number(e[o]))
                }
                return a
            }, t.MapTOJson = function (t) {
                var e = "{", a = 1;
                return t.forEach(function (t, n, i) {
                    i.size == a ? e += '"' + n + '":"' + t + '"' : e += '"' + n + '":"' + t + '",', a++
                }), e += "}"
            }, t.isCardID = function (t) {
                var e = 0;
                if (!/^\d{17}(\d|x)$/i.test(t)) return -1;
                if (t = t.replace(/x$/i, "a"), null == {
                    11: lang.index60eed_706,
                    12: lang.index60eed_707,
                    13: lang.index60eed_708,
                    14: lang.index60eed_709,
                    15: lang.index60eed_710,
                    21: lang.index60eed_711,
                    22: lang.index60eed_712,
                    23: lang.index60eed_713,
                    31: lang.index60eed_714,
                    32: lang.index60eed_715,
                    33: lang.index60eed_716,
                    34: lang.index60eed_717,
                    35: lang.index60eed_718,
                    36: lang.index60eed_719,
                    37: lang.index60eed_720,
                    41: lang.index60eed_721,
                    42: lang.index60eed_722,
                    43: lang.index60eed_723,
                    44: lang.index60eed_724,
                    45: lang.index60eed_725,
                    46: lang.index60eed_726,
                    50: lang.index60eed_727,
                    51: lang.index60eed_728,
                    52: lang.index60eed_729,
                    53: lang.index60eed_730,
                    54: lang.index60eed_731,
                    61: lang.index60eed_732,
                    62: lang.index60eed_733,
                    63: lang.index60eed_734,
                    64: lang.index60eed_735,
                    65: lang.index60eed_736,
                    71: lang.index60eed_737,
                    81: lang.index60eed_738,
                    82: lang.index60eed_739,
                    91: lang.index60eed_740
                }[parseInt(t.substr(0, 2))]) return -2;
                var a = t.substr(6, 4) + "-" + Number(t.substr(10, 2)) + "-" + Number(t.substr(12, 2)),
                    n = new Date(a.replace(/-/g, "/"));
                if (a != n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate()) return -3;
                for (var i = 17; i >= 0; i--) e += Math.pow(2, i) % 11 * parseInt(t.charAt(17 - i), 11);
                return e % 11 != 1 ? -4 : 0
            }, t.checkAdult = function (t) {
                var e = parseInt(t.substring(6, 14)) + 18e4, a = new Date, n = a.getFullYear(), i = a.getMonth() + 1,
                    o = a.getDate();
                return parseInt(n + this.getFormatDate(i) + this.getFormatDate(o)) >= e
            }, t.getFormatDate = function (t) {
                if (void 0 === t || "" === t) return "";
                var e = t + "";
                return e.length < 2 && (e = "0" + e), e
            }, t.guid = function () {
                function t() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                }

                return t() + t() + "" + t() + t() + t() + t() + t() + t()
            }, t.saveJsonFile = function (t, e) {
                var a = new Blob([JSON.stringify(e)], {type: "application/json"});
                a = (a.slice || a.webkitSlice || a.mozSlice).call(a, 0, a.size, "application/octet-stream")
            }, t.digitChange = function (t, e, a, n) {
                for (var i = n - a, o = cc.tween(t), r = function (n) {
                    o.delay(e / 10).call(function () {
                        var e = Number(a) + Math.floor(i * n / 10);
                        t.string = e + ""
                    })
                }, s = 0; s < 10; s++) r(s);
                o.delay(e / 10).call(function () {
                    t.string = n + ""
                }).start()
            }, t.factorial = function (t) {
                for (var e = 1; t >= 1;) e *= t, t--;
                return e
            }, t.cumsum = function (t) {
                for (var e = 0; t >= 1;) e += t, t--;
                return e
            }, t
        }();
        a.Utils = n, cc._RF.pop()
    }, {}],
    WechatData: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "e1707ngUHRIFpGhf6c1FLsQ", "WechatData");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        });
        Object.defineProperty(a, "__esModule", {value: !0}), a.WechatData = void 0;
        var o = t("../../framework/base/BaseData"), r = t("../config/Config"), s = function () {
            this.videoAdCount = 0, this.gameingTime = 0
        }, c = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ecrypt = !1, e.gameKey = r.GameConfig.AppCacheName + "wechatdata", e.isNewUser = !1, e
            }

            return i(e, t), e.prototype.createData = function () {
                return this.data = new s, this.data
            }, e.prototype.initData = function (t) {
                t && (this.isNewUser = !0)
            }, e.prototype.getIsNewUser = function () {
                return this.isNewUser
            }, e.prototype.getOpenId = function () {
                return this.data.openId
            }, e.prototype.setOpenId = function () {
                this.data.openId, this.saveData()
            }, e.prototype.getGameingTime = function () {
                return this.data.gameingTime || (this.data.gameingTime = 0), this.data.gameingTime
            }, e.prototype.setGameingTime = function (t) {
                this.data.gameingTime = t, this.saveData()
            }, e.prototype.getVideoCount = function () {
                return this.data.videoAdCount
            }, e.prototype.addVideoCount = function () {
                return this.data.videoAdCount || (this.data.videoAdCount = 0), this.data.videoAdCount++, this.saveData(), this.data.videoAdCount
            }, e
        }(o.BaseData);
        a.WechatData = c, cc._RF.pop()
    }, {"../../framework/base/BaseData": "BaseData", "../config/Config": "Config"}],
    WechatEventMgr: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "46780C2g9tBS7AO1LEb9okY", "WechatEventMgr"), Object.defineProperty(a, "__esModule", {value: !0}), a.WechatEventMgr = void 0;
        var n = t("../../game/config/Config"), i = t("../../game/manager/PlayerMgr"), o = t("../base/BasePlatform"),
            r = t("../utils/UIUtils"), s = t("./PlatformManager"), c = function () {
                function t() {
                    this.gameId = s.AdConfig[s.PlatformManager.currentPlatform][s.APPMgr.currentApp].ServerID, this.gameingTime = 0
                }

                return t.getInstance = function () {
                    return null == this.instance && (this.instance = new t), this.instance
                }, t.prototype.init = function () {
                    s.PlatformManager.currentPlatform == o.Platform.WECHAT && (this.gameingTime = i.PlayerMgr.getInstance().getWechatData().getGameingTime(), r.UIUtils.schedule(this.calcGameingTime, this, 1))
                }, t.prototype.calcGameingTime = function () {
                    this.gameingTime++, cc.sys.localStorage.setItem(n.GameConfig.AppCacheName + "_onLine", this.gameingTime), this.gameingTime > 600 ? r.UIUtils.unSchedule(this.calcGameingTime, this) : 60 == this.gameingTime || 180 == this.gameingTime || 300 == this.gameingTime || 420 == this.gameingTime && r.UIUtils.unSchedule(this.calcGameingTime, this)
                }, t.prototype.getOpenId = function (t) {
                    if (this.openId = i.PlayerMgr.getInstance().getWechatData().getOpenId(), s.PlatformManager.currentPlatform == o.Platform.EDITOR && (this.openId = "test_openId"), this.openId && "" != this.openId && "undefined" != this.openId) return console.log(lang.index60eed_741 + this.openId), void (t && t(this.openId));
                    var e = this;
                    wx.login({
                        success: function (a) {
                            a.code ? (a.code, e.gameId) : (t && t(null), console.log(lang.index60eed_742 + a.errMsg))
                        }
                    })
                }, t.prototype.getOnlineTime = function () {
                    return Math.floor(this.gameingTime / 60)
                }, t.prototype.trackVideoEvent = function () {
                    i.PlayerMgr.getInstance().getWechatData().addVideoCount()
                }, t.prototype.startTrack = function (t) {
                    this.getOpenId(function (e) {
                        e && i.PlayerMgr.getInstance().getTrackData().youmengTrack(t, e)
                    })
                }, t
            }();
        a.WechatEventMgr = c, cc._RF.pop()
    }, {
        "../../game/config/Config": "Config",
        "../../game/manager/PlayerMgr": "PlayerMgr",
        "../base/BasePlatform": "BasePlatform",
        "../utils/UIUtils": "UIUtils",
        "./PlatformManager": "PlatformManager"
    }],
    Zombie: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "fa018IQXaZJDa2jrG6gigQQ", "Zombie");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r = t("../../framework/manager/LogMgr"), s = t("../../framework/manager/PoolMgr"),
            c = t("../config/Config"), l = t("./CombatUnitCtrl"), u = t("../manager/MapMgr"), p = t("./Plants"),
            d = t("../../framework/utils/Utils"), h = t("../manager/LevelMgr"), g = t("../manager/DataMgr"),
            f = t("../../framework/manager/AudioMgr"), m = t("./Gold"), y = t("../../framework/manager/UIMgr"),
            v = t("../global/Global"), I = t("./BoxDrop"), _ = t("../../framework/manager/ResourceMgr"),
            b = cc._decorator, C = b.ccclass, D = (b.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isAttack = !1, e.attackTagtePos = cc.Vec3.ZERO, e.nowCall = null, e.callTime = -1, e.isDie = !1, e.offsetArr = [], e.notMA = !1, e.isCall = !1, e.isFrist = !0, e.boxDrop = !1, e
                }

                var a;
                return i(e, t), a = e, e.prototype.start = function () {
                    var e = this;
                    this.node.getComponent(sp.Skeleton).setCompleteListener(function (a) {
                        if ("die" == a.animation.name || "die2" == a.animation.name || a.animation.name == l.zombieAni.ani1_2 || a.animation.name == l.zombieAni.ani2_2 || a.animation.name == l.zombieAni.ani3_2) {
                            e.isCall && (h.LevelMgr.getInstance().littleZombieNum -= 1, e.isCall = !1);
                            var n = e.node.parent, i = s.PoolMgr.getInstance().getNode("gold");
                            i.active = !0, i.x = e.node.x - e.node.parent.width / 2, i.y = e.node.parent.y + e.node.y, i.getComponent(m.default).goldNum = Number(h.LevelMgr.getInstance().levelData.BattleDrop.split(",")[1]), cc.find("Scene/combat/goldLayer").insertChild(i, 0);
                            var o = d.Utils.randomRang(0, 5);
                            cc.tween(i).bezierTo(.4, new cc.Vec2(i.x, i.y + 50), new cc.Vec2(i.x - 25, i.y + 100), new cc.Vec2(i.x - 50, i.y - (100 + i.height / 2 * o))).call(function () {
                                i.getComponent(m.default).flyAni()
                            }).start(), e.node.getComponent(sp.Skeleton).skeletonData = null, t.prototype.unitDie.call(e, 2), e.attackTagtePos = cc.Vec3.ZERO, 0 == n.children.length && (console.log(lang.index60eed_743), e.sendEvent(c.EventName.WaveEnd))
                        } else "switch" == a.animation.name ? (e.Status = e.beforeStatus, e.findNearPlant()) : "call" == a.animation.name ? (310012 == e.unitData.ID && e.node.getComponent(sp.Skeleton).setSkin("skin_2"), e.Status = e.beforeStatus, e.findNearPlant()) : "attack1" != a.animation.name && "attack2" != a.animation.name && "attack3" != a.animation.name || 310013 != e.unitData.ID || e.node.getComponent(sp.Skeleton).setAnimation(0, "idle", !0)
                    }), this.node.getComponent(sp.Skeleton).setEventListener(function (t, a) {
                        if ("call" == a.data.name) {
                            if (e.Status == l.UnitStatus.Die || e.Status == l.UnitStatus.Prepare || 1 == e.isDie) return;
                            e.callZombie()
                        }
                    }), this.addEvent(c.EventName.unitDie, function (t) {
                        1 == t.type && e.findNearPlant()
                    })
                }, e.prototype.setBoxDrop = function (t) {
                    this.boxDrop = t
                }, e.prototype.setProperty = function (e, a) {
                    var n = this;
                    if (this.unitType = 2, t.prototype.setProperty.call(this, e, a), this.speed = this.unitData.MovingSpeed * this.double, this.plantLayer = u.MapMgr.getInstance().plantLayer, this.addEvent(c.EventName.plantReborn, function () {
                        n.findNearPlant()
                    }), 310013 == e.ID && (this.attackSpeed = -1), this.skillData.Call) {
                        var i = this.skillData.Call.split(";");
                        this.nowCall = i[d.Utils.randomRang(0, i.length)].split(","), this.callTime = Number(this.nowCall[1])
                    }
                }, e.prototype.onEnable = function () {
                    this.Status != l.UnitStatus.Call && this.findNearPlant()
                }, e.prototype.findNearPlant = function () {
                    var t = this;
                    if (this.Status != l.UnitStatus.Die && this.Status != l.UnitStatus.End && 1 != this.isDie && this.node.parent) {
                        this.attackTagte = new cc.Node, this.attackTagte.x = -this.node.width / 2;
                        for (var e = 0; e < this.plantLayer.children.length; e++) if (this.plantLayer.children[e].y == this.node.parent.y) for (var a = 0; a < this.plantLayer.children[e].children.length; a++) {
                            var n = this.plantLayer.children[e].children[a];
                            if (!(this.node.x < n.x || 0 == n.children.length || n.children[0].getComponent(p.default) && (n.children[0].getComponent(p.default).Status == l.UnitStatus.Die || n.children[0].getComponent(p.default).Status == l.UnitStatus.Prepare)) && n.children[0].getComponent(p.default) && n.children[0].getComponent(p.default).getSkill() && Math.abs(n.x - this.node.x) < Math.abs(this.attackTagte.x - this.node.x)) {
                                if (n.children[0].getComponent(p.default).getSkill().NotBeTargeted) continue;
                                this.attackTagte = n.children[0];
                                break
                            }
                        }
                        var i = this.isLoseShield ? this.offsetArr[1] : this.offsetArr[0],
                            o = this.attackTagte.parent ? this.attackTagte.parent.x + this.attackTagte.parent.width / 2 + i : -this.node.width / 2;
                        this.attackTagtePos.x = o, this.Status = l.UnitStatus.Move, this.zombieNowAni == l.zombieAni.move || this.zombieNowAni == l.zombieAni.move2 || this.notMA || (this.zombieNowAni = this.isLoseShield ? l.zombieAni.move2 : l.zombieAni.move, this.node.getComponent(sp.Skeleton).setAnimation(0, this.zombieNowAni, !0), this.UnDamage = .5);
                        var r = this.node.x;
                        this.isFrist && (this.isFrist = !1, this.scheduleOnce(function () {
                            if (t.node.x - r < 15) {
                                if (t.Status == l.UnitStatus.Die || 1 == t.isDie) return;
                                t.findNearPlant()
                            }
                        }, 1))
                    }
                }, e.prototype.detectionDamage = function () {
                    !this.attackTagte.getComponent(p.default) || this.attackTagte.getComponent(p.default).Status == l.UnitStatus.Die && this.attackTagte.getComponent(p.default).Status == l.UnitStatus.Prepare ? this.findNearPlant() : this.doDamage(this.attackTagte)
                }, e.prototype.doDamage = function (t) {
                    if (this.attackTagte.getComponent(p.default) && this.attackTagte.getComponent(p.default).Status != l.UnitStatus.Die && this.attackTagte.getComponent(p.default).Status != l.UnitStatus.Prepare) {
                        this.Status = l.UnitStatus.Attack;
                        var e = t.getComponent(p.default);
                        e.getSkill(), this.zombieNowAni == l.zombieAni.attack2 || this.zombieNowAni == l.zombieAni.attack || this.notMA || (this.zombieNowAni = this.isLoseShield ? l.zombieAni.attack2 : l.zombieAni.attack, this.node.getComponent(sp.Skeleton).setAnimation(0, this.zombieNowAni, !0)), this.plantSkillDamage(e);
                        var a = this.countCrit(this.attack);
                        e.damageReceive(a, this.skillData)
                    } else this.findNearPlant()
                }, e.prototype.loseBoold = function (e, a, n, i) {
                    var o = this;
                    if (!(this.UnDamage > 0 || this.Status == l.UnitStatus.Die || this.Status == l.UnitStatus.Prepare || 1 == this.isDie)) {
                        if (this.currentBoold = this.currentBoold ? this.currentBoold : 0, this.currentBoold - e <= 0 && (this.isDie = !0, a && a.KillTrigger && this.scheduleOnce(function () {
                            i.killSuccess()
                        }, 1.01)), a && a.SelfRangeDamage && (this.node.getChildByName("burn").active = 2 == a.Attribute, this.node.getChildByName("paralysis").active = 4 == a.Attribute, this.scheduleOnce(function () {
                            var t = !1;
                            o.burnArray.burn.forEach(function (e) {
                                e && (t = !0)
                            }), o.node.getChildByName("burn").active = t, o.node.getChildByName("paralysis").active = !1
                        }, .9)), a && a.RepelDistance && 1 != this.isDie) {
                            var r = this.node.x + Number(a.RepelDistance) >= this.node.parent.width ? this.node.parent.width : this.node.x + Number(a.RepelDistance);
                            this.Status = l.UnitStatus.Stop, cc.tween(this.node).to(.5, {x: r}).call(function () {
                                o.Status == l.UnitStatus.Die || 1 == o.isDie ? (o.node.getComponent(sp.Skeleton).paused = !1, o.zombieDie()) : (o.node.getComponent(sp.Skeleton).paused = !1, o.findNearPlant(), o.Status = l.UnitStatus.Move)
                            }).start()
                        }
                        this.currentShield > 0 && a && !a.LgnoreShield && n && !this.isDie ? t.prototype.loseBoold.call(this, e) : (this.currentBoold -= e, this.currentBoold <= 0 && this.zombieDie())
                    }
                }, e.prototype.plantSkillDamage = function (t) {
                    if (t.Status != l.UnitStatus.Die && t.Status != l.UnitStatus.Prepare) {
                        var e = t.getSkill();
                        e.Counterattack && this.loseBoold(this.unitData.MaxHp * Number(e.Counterattack) / 100, e, !e.LgnoreShield, t), e.DeathExplosion && t.explode(this.node.getComponent(a))
                    } else this.findNearPlant()
                }, e.prototype.callZombie = function () {
                    var t, e, n = this, i = this.skillData.CallType.split(","),
                        o = s.PoolMgr.getInstance().getNode("zombie"), r = o.getComponent(a);
                    r.Status = l.UnitStatus.Call, t = g.DataMgr.getInstance().getMonsterCfgById(Number(this.nowCall[0])), e = g.DataMgr.getInstance().getSkillLevelCfgById(t.SkillID);
                    var c = u.MapMgr.getInstance().zombieOffset[t.ID];
                    if (310012 != this.unitData.ID) {
                        var p = this.skillData.Call.split(";");
                        this.nowCall = p[d.Utils.randomRang(0, p.length)].split(","), this.callTime = Number(this.nowCall[1])
                    }
                    var f, m, y = this.getEndPos(i, c);
                    switch (this.loadResFromBundle("zombie", t.ModelID + "/" + t.ModelID, sp.SkeletonData, function (a) {
                        switch (o.getComponent(sp.Skeleton).skeletonData = a, o.active = !0, a.skeletonJson.skins.length > 1 && o.getComponent(sp.Skeleton).setSkin("skin_3"), n.unitData.ID) {
                            case 310012:
                                for (var s = new cc.Vec2(n.node.x - n.offsetArr[0] / 2, .6 * n.node.height), u = 0; s.x < y.x;) y = n.getEndPos(i, c), ++u >= 10 && (y.x = s.x - 10, y.y = -40);
                                o.x = s.x, o.y = s.y, o.angle = 90, cc.tween(o).parallel(cc.tween().bezierTo(1, new cc.Vec2(s.x, s.y), new cc.Vec2(y.x + .65 * (s.x - y.x), s.y + 200), y), cc.tween().to(1, {angle: 360})).call(function () {
                                    for (var a = 0; a < m.children.length; a++) if (o.x < m.children[a].x || a == m.children.length - 1) {
                                        r.offsetArr = c, r.isCall = !0, h.LevelMgr.getInstance().littleZombieNum += 1, 0 == a ? m.children.unshift(o) : m.insertChild(o, 0), r.setProperty(t, e), o.setPosition(y), n.Status = l.UnitStatus.Move, n.scheduleOnce(function () {
                                            r.findNearPlant()
                                        }, .01);
                                        break
                                    }
                                }).start();
                                break;
                            case 310013:
                                switch (o.x = y.x, o.y = y.y, o.parent = m, t.ID) {
                                    case 310015:
                                        r.zombieNowAni = l.zombieAni.ani1_1;
                                        break;
                                    case 310016:
                                        r.zombieNowAni = l.zombieAni.ani2_1;
                                        break;
                                    case 310017:
                                        r.zombieNowAni = l.zombieAni.ani3_1
                                }
                                r.notMA = !0, r.offsetArr = c, r.setProperty(t, e), r.findNearPlant(), o.getComponent(sp.Skeleton).setAnimation(0, r.zombieNowAni, !0);
                                break;
                            case 310014:
                                o.x = y.x, o.y = y.y, o.parent = m, r.offsetArr = c, r.setProperty(t, e), r.findNearPlant(), n.Status = n.beforeStatus, n.findNearPlant()
                        }
                    }), Number(i[0])) {
                        case 1:
                            var v = d.Utils.randomRang(0, this.zombieLayer.children.length);
                            f = u.MapMgr.getInstance().callLayer.children[v], m = this.zombieLayer.children[v];
                            break;
                        case 2:
                            m = this.node.parent, u.MapMgr.getInstance().callLayer.children.forEach(function (t) {
                                t.y == m.y && (f = t)
                            })
                    }
                    o.parent = f
                }, e.prototype.getEndPos = function (t, e) {
                    var a = this, n = new cc.Vec2;
                    switch (n.y = -40, Number(t[1])) {
                        case 1:
                            n.x = this.node.x - this.offsetArr[0] - e[0] - 10;
                            break;
                        case 2:
                            var i, o = this.plantLayer.children[d.Utils.randomRang(0, this.plantLayer.children.length)],
                                r = [];
                            o.children.forEach(function (t) {
                                t.children.length > 0 && t.x < a.node.x - a.offsetArr[0] && r.push(t)
                            }), i = r.length > 0 ? r[d.Utils.randomRang(0, r.length)] : o.children[7], n.x = i.x + i.width / 2 + e[0] + 30 + u.MapMgr.getInstance().plantLayer.x
                    }
                    return n
                }, e.prototype.zombieDie = function (e) {
                    var a = this;
                    if (this.node.getComponent(sp.Skeleton).paused = !1, 1 != e) {
                        switch (this.zombieNowAni) {
                            case l.zombieAni.ani1_1:
                                this.zombieNowAni = l.zombieAni.ani1_2;
                                break;
                            case l.zombieAni.ani2_1:
                                this.zombieNowAni = l.zombieAni.ani2_2;
                                break;
                            case l.zombieAni.ani3_1:
                                this.zombieNowAni = l.zombieAni.ani3_2;
                                break;
                            default:
                                this.zombieNowAni = this.isLoseShield ? l.zombieAni.die2 : l.zombieAni.die
                        }
                        v.Global.boxDrop && this.boxDrop && _.ResourceMgr.getInstance().loadRes("prefabs", "game/boxDrop", cc.Prefab, function (t) {
                            var e = cc.instantiate(t);
                            e.active = !0, e.x = a.node.x - a.node.parent.width / 2, e.y = a.node.parent.y + a.node.y, cc.find("Scene/combat/goldLayer").insertChild(e, v.Global.boxDropNum), cc.tween(e).bezierTo(.4, new cc.Vec2(e.x, e.y + 50), new cc.Vec2(e.x - 25, e.y + 100), new cc.Vec2(e.x - 50, e.y - 200)).call(function () {
                                e.getComponent(I.default).playAni()
                            }).start()
                        }), this.Status = l.UnitStatus.Die, this.node.getComponent(sp.Skeleton).setAnimation(0, this.zombieNowAni, !1), this.node.parent.children.indexOf(this.node), f.AudioMgr.getInstance().playEffect(c.AudioId.MonsterDeath, 6), this.callTime = -1, this.UnDamage = .5, this.isDie = !1, this.notMA = !1, this.isFrist = !0, this.boxDrop = !1
                    } else t.prototype.unitDie.call(this, 2)
                }, e.prototype.update = function (e) {
                    var a = this;
                    if (t.prototype.update.call(this, e), this.Status == l.UnitStatus.Move && (this.node.x -= this.speed * e, this.node.x <= this.attackTagtePos.x + 30 && this.detectionDamage()), this.node.x < this.node.parent.children[0].x - 20) {
                        var n = this.node.parent.children.indexOf(this.node);
                        this.node.parent.children.unshift(this.node.parent.children.splice(n, 1)[0])
                    }
                    if (this.Status != l.UnitStatus.Prepare && (this.node.x < this.node.parent.width / 2 - this.node.width && h.LevelMgr.getInstance().ljfNum > 0 && 0 == h.LevelMgr.getInstance().zombieFrist4 && (h.LevelMgr.getInstance().zombieFrist4 = !0, y.UIMgr.getInstance().openUI(c.UIID.UIGetResource, c.UIID.UICombat, c.Currency.ljf)), this.node.x < 5 - this.node.width / 2 && (r.LogMgr.getInstance().debug(lang.index60eed_744), this.sendEvent(c.EventName.endGame), this.zombieDie(!0)), this.Status != l.UnitStatus.Stop && -1 != this.callTime && this.Status != l.UnitStatus.End && (this.callTime -= e, this.callTime <= 0))) if (this.callTime = -1, this.beforeStatus = this.Status, this.Status = l.UnitStatus.Call, 310012 == this.unitData.ID) this.zombieNowAni = l.zombieAni.call, this.node.getComponent(sp.Skeleton).setAnimation(0, "call", !1); else if (310013 == this.unitData.ID) switch (this.nowCall[0]) {
                        case"310015":
                            this.node.getComponent(sp.Skeleton).setAnimation(0, "attack1", !1);
                            break;
                        case"310016":
                            this.node.getComponent(sp.Skeleton).setAnimation(0, "attack2", !1);
                            break;
                        case"310017":
                            this.node.getComponent(sp.Skeleton).setAnimation(0, "attack3", !1)
                    } else 310014 == this.unitData.ID && this.loadPrefab("prefabs", "game/callTornado", function (t) {
                        u.MapMgr.getInstance().callLayer.children.forEach(function (e) {
                            if (e.y == a.node.parent.y) {
                                var n = cc.instantiate(t);
                                n.y = -40, n.x = a.node.x - a.offsetArr[0] - n.width / 4 - 10, n.parent = e, a.scheduleOnce(function () {
                                    a.callZombie(), n.active = !1, n.destroy()
                                }, .5)
                            }
                        })
                    })
                }, a = o([C], e)
            }(l.default));
        a.default = D, cc._RF.pop()
    }, {
        "../../framework/manager/AudioMgr": "AudioMgr",
        "../../framework/manager/LogMgr": "LogMgr",
        "../../framework/manager/PoolMgr": "PoolMgr",
        "../../framework/manager/ResourceMgr": "ResourceMgr",
        "../../framework/manager/UIMgr": "UIMgr",
        "../../framework/utils/Utils": "Utils",
        "../config/Config": "Config",
        "../global/Global": "Global",
        "../manager/DataMgr": "DataMgr",
        "../manager/LevelMgr": "LevelMgr",
        "../manager/MapMgr": "MapMgr",
        "./BoxDrop": "BoxDrop",
        "./CombatUnitCtrl": "CombatUnitCtrl",
        "./Gold": "Gold",
        "./Plants": "Plants"
    }],
    floatTips: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "2343bs5065M2ZhH2ZUdMqhS", "floatTips");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            })(t, e)
        }, function (t, e) {
            function a() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }), o = this && this.__decorate || function (t, e, a, n) {
            var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, a) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, a, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, a, r) : i(e, a)) || r);
            return o > 3 && r && Object.defineProperty(e, a, r), r
        };
        Object.defineProperty(a, "__esModule", {value: !0});
        var r, s = cc._decorator, c = s.ccclass, l = s.property;
        (function (t) {
            t[t.top = 0] = "top", t[t.down = 1] = "down", t[t.left = 2] = "left", t[t.right = 3] = "right"
        })(r || (r = {}));
        var u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.sign = null, e.label = null, e.view = null, e.content = null, e
            }

            return i(e, t), e.prototype.onEnable = function () {
                this.node.parent.x + this.content.x - this.view.x > this.view.width - this.node.parent.width / 2 ? (this.node.x = this.view.width - (this.node.parent.x + this.content.x) - this.node.parent.width / 2 - 20, this.nowDire = r.right, this.playAni()) : this.node.parent.x + this.content.x - this.view.x < this.view.x ? (this.node.x = this.view.x - (this.node.parent.x + this.content.x) + this.node.parent.width / 2 + 20, this.nowDire = r.left, this.playAni()) : (this.node.x = 0, this.nowDire = r.down, this.playAni())
            }, e.prototype.playAni = function () {
                var t;
                cc.Tween.stopAllByTarget(this.sign);
                var e = 0 == this.node.y ? 145 : 115;
                switch (this.nowDire) {
                    case r.top:
                        this.sign.setPosition(0, 145), this.sign.angle = 180, this.label.y = 115, t = cc.tween(this.sign).sequence(cc.tween().to(.5, {y: 155}), cc.tween().to(.5, {y: 145}));
                        break;
                    case r.down:
                        this.sign.setPosition(0, 85), this.sign.angle = 0, this.label.y = 115, t = cc.tween(this.sign).sequence(cc.tween().to(.5, {y: 75}), cc.tween().to(.5, {y: 85}));
                        break;
                    case r.left:
                        this.sign.setPosition(-55, e), this.sign.angle = -90, this.label.y = e, t = cc.tween(this.sign).sequence(cc.tween().to(.5, {x: -65}), cc.tween().to(.5, {x: -55}));
                        break;
                    case r.right:
                        this.sign.setPosition(55, e), this.sign.angle = 90, this.label.y = e, t = cc.tween(this.sign).sequence(cc.tween().to(.5, {x: 65}), cc.tween().to(.5, {x: 55}))
                }
                t.repeatForever().start()
            }, e.prototype.update = function () {
                this.node.parent.x + this.content.x - this.view.x > this.view.width - this.node.parent.width / 2 ? (this.node.x = this.view.width - (this.node.parent.x + this.content.x) - this.node.parent.width / 2 - 20, this.nextDire = r.right) : this.node.parent.x + this.content.x - this.view.x < this.view.x ? (this.node.x = this.view.x - (this.node.parent.x + this.content.x) + this.node.parent.width / 2 + 20, this.nextDire = r.left) : (this.node.x = 0, this.nextDire = r.down), this.nextDire != this.nowDire && (this.nowDire = this.nextDire, this.playAni())
            }, o([l(cc.Node)], e.prototype, "sign", void 0), o([l(cc.Node)], e.prototype, "label", void 0), o([l(cc.Node)], e.prototype, "view", void 0), o([l(cc.Node)], e.prototype, "content", void 0), o([c], e)
        }(cc.Component);
        a.default = u, cc._RF.pop()
    }, {}],
    "use_v2.1-2.2.1_cc.Toggle_event": [function (t, e) {
        "use strict";
        cc._RF.push(e, "1a067N1OblLAaJQue+SH9NO", "use_v2.1-2.2.1_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0), cc._RF.pop()
    }, {}]
}, {}, ["use_v2.1-2.2.1_cc.Toggle_event", "Loading", "Main", "CommonBirge", "CommonModel", "CommonCfg", "ComCollectionData", "ComFreeTimeData", "ComLottyData", "ComSignData", "ComGameData", "ComDataMgr", "ComPlayerMgr", "BaseCtrl", "BaseData", "BaseMgr", "BasePlatform", "BaseUI", "BaseButton", "LabelPlus", "ScrollCard", "TranstaLabel", "TranstanImg", "Appcfg", "List", "ListItem", "AudioMgr", "CityMgr", "EventMgr", "FeedCardMgr", "HttpMgr", "LanguageMgr", "LogMgr", "PlatformManager", "PoolMgr", "ResCacheMgr", "ResourceMgr", "SdkMgr", "TweenMgr", "UIMgr", "WechatEventMgr", "EditorManager", "Platform4399Manager", "ArgsParseUtils", "CacheUtils", "SpineUtils", "TimeUtils", "UIUtils", "Utils", "BoxDrop", "Bullets", "Choose", "Combat", "CombatUnitCtrl", "Customs", "Daifu", "Gold", "PieceCtrl", "Plants", "Tornado", "Zombie", "floatTips", "Config", "AgainData", "CustomData", "EquipData", "GuideData", "HeartData", "LockData", "LotteryData", "NewInbornData", "PlantLevelData", "PutOnData", "ResNumData", "ShareData", "SignData", "StemData", "TrackData", "TrackDataEvent", "UserData", "WechatData", "GameData", "StemCfg", "Global", "AwardMgr", "DataMgr", "EquipMgr", "LevelMgr", "MapMgr", "PlayerMgr", "StemDataMgr", "PopUserPrivacy", "SDF", "UIAgainAward", "UIAward", "UIBox", "UICombat", "UIEquip", "UIEquipSyn", "UIEquipTips", "UIGameOver", "UIGetResource", "UIGuide", "UIHome", "UIInbornUp", "UILoadCombat", "UINewInboren", "UIPlantDrawings", "UIPlantLevelUP", "UIPlantLottery", "UISetting", "UISidebar", "UISign", "UISummerFestival", "UISuperPlant", "UITedail", "UITips", "UITop", "UITouch", "UIZombieTip", "Barrier", "Btn_Scale", "Buff", "Bullet", "GameController", "Game_Menu", "Music", "Prop_control", "Start", "UI_move_effect_start"]);
