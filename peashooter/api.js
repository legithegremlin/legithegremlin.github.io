/**
 * H5API客户端对接接口
 */
window.h5api = {
    /**
     * 设置进度条进度
     * @param {int} num 范围1~100，进度值
     */
    progress: function (num) {
        parent.h5api.progress(num);
    },

    /**
     * 提交分数
     * @param {int} score 分数
     * @param {func} callback 回调函数
     */
    submitScore: function (score, callback) {
        parent.h5api.submitScore(score, callback);
    },

    /**
     * 获得排行榜
     * @param {func} callback 回调函数
     */
    getRank: function (callback) {
        parent.h5api.getRank(callback);
    },

    showReview(){
        if (typeof cordova !== 'undefined') {
            cordova.exec(function (data) {
            }, function (errMsg) {
                console.error("get local data error", errMsg)
            }, "FzPlugins", "showReview", "")
        }
    },

    /**
     * 是否能播放广告
     * @param {func} callback 回调函数
     * @returns {boolean} 是否能播放广告
     */
    canPlayAd: function (callback) {
        callback({canPlayAd: true, remain: 1000})
    },

    /**
     * 播放广告
     * @param {func} callback 回调函数
     */
    playAd: function (callback) {
        console.log('%c[aaaaaaaaa] 广告开始', 'color:blue' + window.adManager);
        if (window.adManager) {
            window.adManager.showRewardedAd((success) => {
                    console.info("====> show RewardedVideo success")
                    if (success) {
                        callback({code: 10001})
                    } else {
                        callback({code: 10003})
                    }

                }
            )
        } else {
            console.log('%c[wangy] 广告无法播放', 'color:blue');
            // setTimeout(() => {
            callback({code: 10001})
            // }, 1000)
        }
    },

    playMiddleAd: function () {
        console.log('%c[aaaaaaaaa] 广告开始', 'color:blue' + window.adManager);
        if (window.adManager) {
            window.adManager.showInterstitial()
        } else {
            console.log('%c[wangy] 广告无法播放', 'color:blue');
        }
    },

    showBanner: function (){
            console.log('%c[aaaaaaaaa] 展示banner', 'color:blue' + window.adManager);
            if (window.adManager) {
                window.adManager.showBanner()
            }
        },

    hideBanner: function (){
            console.log('%c[aaaaaaaaa] 隐藏banner', 'color:blue' + window.adManager);
            if (window.adManager) {
                window.adManager.hideBanner()
            }
        },


    /**
     * 调用分享功能
     */
    share: function () {
        parent.h5api.share();
    },

    /**
     * 获得用户当前是否登录
     */
    isLogin: function () {
        return true
    },

    /**
     * 用户登录
     * @param {func} callback 回调函数
     */
    login: function (callback) {
        callback({uId: 1111, userName: "jack"})
    },

    /**
     * 获得用户头像地址，高宽为120*120像素
     *
     * @param {String} uid 用户编号
     * @param {String} size 头像大小
     * @return 用户头像地址
     */
    getUserAvatar: function (uid, size) {
        return 'https://a.3304399.net/' + uid + '/' + (size || 'middle');
    },

    /**
     * 获得用户小头像地址，高宽为48*48像素
     */
    getUserSmallAvatar: function (uid) {
        return this.getUserAvatar(uid, 'small');
    },

    /**
     * 获得用户大头像地址，高宽为200*200像素
     */
    getUserBigAvatar: function (uid) {
        return this.getUserAvatar(uid, 'big');
    },

    /**
     * 提交排名
     *
     * @param {int} score 分数
     * @param {func} callback 回调函数
     */
    submitRanking: function (score, callback) {
        parent.h5api.submitRanking(score, callback);
    },

    /**
     * 新版提交排名
     * @param {*} rankId 排行榜id
     * @param {*} score 分数
     * @param {*} callback 回调函数
     */
    submitRankScore: function (rankId, score, callback) {
        parent.h5api.submitRankScore(rankId, score, callback);
    },

    /**
     * 获得我的排名
     *
     * @param {func} callback 回调函数
     */
    getMyRanking: function (callback) {
        parent.h5api.getMyRanking(callback);
    },

    /**
     * 获得排名列表
     *
     * @param {func} callback 回调函数
     * @param {int} page 页码 从1开始
     * @param {int} step 每页条数
     */
    getRanking: function (callback, page, step) {
        parent.h5api.getRanking(callback, page, step);
    },

    /**
     * 展示排行榜列表面板
     */
    showRanking: function () {
        parent.h5api.showRanking();
    },

    /**
     * 展示新版排行榜面板
     */
    showRankList: function () {
        parent.h5api.showRankList();
    },

    /**
     * 获得我附近排名列表
     *
     * @param {func} callback 回调函数
     * @param {int} step 需要条数
     */
    getNearRanking: function (callback, step) {
        parent.h5api.getNearRanking(callback, step);
    },

    /**
     * 敏感词检查
     *
     * @param {*} word
     * @param {*} callback
     */
    checkWord: function (word, callback) {
        parent.h5api.checkWord(word, callback);
    },
    /*
     * 展示推荐面板
     */
    showRecommend: function () {
        parent.h5api.showRecommend();
    },
    /**
     * 存档
     * @param {*} params.more 是否是多档 true | false
     * @param {*} params.type 操作类型 write | read
     * @param {*} params.title 存档标题 type为write时必填
     * @param {*} params.data 存档数据 type为write时必填
     * @param {*} params.callback 回调函数
     */
    save: function (params) {
        params.callback(10001)
        // parent.h5api.save(params);
    },
    /**
     * 游戏模式
     * @param {*} mode 1 游客 2 账户，不传则打开面板
     */
    gameMode: function (mode) {
        parent.h5api.gameMode(mode);
    },
    /**
     * 显示引导面板
     * @param {*} callback 领取按钮回调
     */
    showGuide: function (callback, index) {
        parent.h5api.showGuide(callback, index);
    },
    /**
     * 检查API是否能使用
     */
    checkAPI: function () {

        console.log(" check ai =")
        if (parent === window) {
            console.error('不支持本地测试，请尽快提交游戏到原创平台预览');
        } else if (document.domain !== '4399.com') {
            try {
                document.domain = '4399.com';
            } catch (e) {
                if (
                    document.domain.indexOf('4399.com') === -1 &&
                    document.domain.indexOf('devh5.com') === -1 &&
                    document.domain.indexOf('4399api.com') === -1
                ) {
                    console.error(
                        '当前地址并非在4399域下，可能导致部分API接口产生异常。'
                    );
                }
            }
        }
    }
};
window.h5api.checkAPI();
