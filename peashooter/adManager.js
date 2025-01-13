var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');

var missAmount = -1;
var interstitialCoolTime = 180;
var interstitialFirstCoolTime = 60;
//var interstitialFirstCoolTime = 10;
//var interstitialCoolTime = 60;


var interFirstShow  = false;

var BANNER_AD_UNIT_ID  = '';
var REWARDED_AD_UNIT_ID = 'f1728e3a8930871e';
var INTER_AD_UNIT_ID = '78790406cc45e4ad';
    // Assume Android

var adManager = {};

var applovinInit = false;

adManager.init = function () {
    console.log("开始初始化AppLovinMAX");
//    5TQ9bRz4qfosao53N7CAv_q_CcdwEQI7dTTnrleOrMt6J_qEqSB34J5R2Q8XnAFuFwOgetQAKKUpT0hpsp83E6
//    9s4XoALeGhvX2_yHFGIHpIT5PrSwFk5LfDGfT8ABFxrn0KqKTnSv1crxfHwMir6wwJRwiyUX4iho5GrTIGMOdR
    AppLovinMAX.initialize("9s4XoALeGhvX2_yHFGIHpIT5PrSwFk5LfDGfT8ABFxrn0KqKTnSv1crxfHwMir6wwJRwiyUX4iho5GrTIGMOdR", function (configuration) {
        console.log("AppLovinMAX inited");
        //AppLovinMAX.showMediationDebugger();
        adManager.loadAds();
        applovinInit = true;
    });
};

adManager.loadAds = function () {
    if(REWARDED_AD_UNIT_ID === ''){
    }else{
        this.initializeRewardedAds();
    }

    if(INTER_AD_UNIT_ID === ''){
    }else{
        this.initializeInterstitialAds();
    }

        if(BANNER_AD_UNIT_ID === ''){
        }else{
            this.initializeBannerAds();
        }
//    this.initializeBannerAds();
};

adManager.onAdImpression = function(adInfo)
{
//    console.log("ad info ")
//    var data ={
//        ad_platform : "appLovin",
//        ad_source : adInfo.networkName,
//        ad_format : adInfo.adFormat,
//        ad_unit_name : adInfo.adUnitId,
//        value : adInfo.revenue,
//        currency : "USD",
//    };
//    console.log(JSON.stringify(data));
//    FirebasePlugin.logEvent("ad_impression", data, function() {
//       console.log("log ad_impression event success", data)
//    }, function(err){
//        console.log("error is ", err)
//    })
}

adManager.initializeInterstitialAds = function () {
    var loadInterstitial = function () {
        AppLovinMAX.loadInterstitial(INTER_AD_UNIT_ID);
    };

    window.addEventListener('OnInterstitialLoadedEvent', function (adInfo) {
    });
    window.addEventListener('OnInterstitialLoadFailedEvent', function (adInfo) {
        setTimeout(function () {
            loadInterstitial();
        }, 30000);
    });
    window.addEventListener('OnInterstitialClickedEvent', function (adInfo) {
    });
    window.addEventListener('OnInterstitialDisplayedEvent', function (adInfo) {
    });
    window.addEventListener('OnInterstitialAdFailedToDisplayEvent', function (adInfo) {
        loadInterstitial();
//        cloudShowInterstitial = true
        adManager.coolTime();
    });
    window.addEventListener('OnInterstitialHiddenEvent', function (adInfo) {
        loadInterstitial();
        adManager.coolTime();
        adManager.onAdImpression(adInfo)
    });
    loadInterstitial();
    adManager.coolTime();
};


adManager.showInterstitial = function () {
//    if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID) && cloudShowInterstitial) {
    console.log("cloudShowInterstitial is ",cloudShowInterstitial )
    if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID) && cloudShowInterstitial) {
        cloudShowInterstitial = false;
        AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);
    }
};

var coolTimer = -1;
var cloudShowInterstitial = false;
adManager.coolTime = function () {

    console.log(" cool down ======================")
    if (coolTimer >= 0) {
        clearTimeout(coolTimer);
    }
    if (interstitialCoolTime < 0) {
        interstitialCoolTime = firebaseManager.interstitialConfig.interstitialCoolTime;
    }
    var finalCoolTime = 0;
    if( interFirstShow){
        finalCoolTime = interstitialCoolTime
    }else{
        finalCoolTime = interstitialFirstCoolTime
        interFirstShow = true
    }
  console.log(" final cool time  down ======================", finalCoolTime)
  console.log(" cloudShowInterstitial ======================", cloudShowInterstitial)
    coolTimer = setTimeout(() => {
        cloudShowInterstitial = true;
    }, finalCoolTime * 1000);
}


adManager.initializeRewardedAds = function () {
    var loadRewardedAd = function () {
        AppLovinMAX.loadRewardedAd(REWARDED_AD_UNIT_ID);
    };

    window.addEventListener('OnRewardedAdLoadedEvent', function (adInfo) {
    });

    window.addEventListener('OnRewardedAdLoadFailedEvent', function (adInfo) {
        setTimeout(function () {
            loadRewardedAd();
        }, 30);
    });

    window.addEventListener('OnRewardedAdClickedEvent', function (adInfo) {
    });
    window.addEventListener('OnRewardedAdDisplayedEvent', function (adInfo) {
    });
    window.addEventListener('OnRewardedAdFailedToDisplayEvent', function (adInfo) {
        loadRewardedAd();
        if (adManager.onComplete != null) {
            adManager.onComplete(adManager.receivedReward);
            if( adManager.receivedReward){
                console.log("ad info is " , adInfo)
                adManager.onAdImpression(adInfo)
            }
        }
    });
    window.addEventListener('OnRewardedAdHiddenEvent', function (adInfo) {
        loadRewardedAd();
        if (adManager.onComplete != null) {
            adManager.onComplete(adManager.receivedReward);
            if( adManager.receivedReward){
             console.log("ad info is " , adInfo)
             adManager.onAdImpression(adInfo)

             }
        }
//        adManager.coolTime();
    });
    window.addEventListener('OnRewardedAdReceivedRewardEvent', function (adInfo) {
        // Rewarded ad was displayed and user should receive the reward
        adManager.receivedReward = true;
    });

    loadRewardedAd();
};

adManager.receivedReward = false;
adManager.onComplete = null;
adManager.showRewardedAd = function (onComplete) {
    if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {
        AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID, () => {
        });
        this.onComplete = onComplete;
        this.receivedReward = false;
    }else{
        onComplete(false)
    }
};
adManager.isRewardedAdReady = function () {
    return AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID);
};


adManager.initializeBannerAds = function () {
    AppLovinMAX.createBanner(BANNER_AD_UNIT_ID, AppLovinMAX.AdViewPosition.BOTTOM_CENTER);

//    AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#000000');
};

adManager.showBanner = function () {
    if(!applovinInit){
        return;
    }
    AppLovinMAX.showBanner(BANNER_AD_UNIT_ID, function () {

    });
};

adManager.hideBanner = function () {
    AppLovinMAX.hideBanner(BANNER_AD_UNIT_ID, function () {
    });
};


window.adManager = adManager;

adManager.init();