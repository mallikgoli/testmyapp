define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("Form0c3272030a4c24f", "Form0c3272030a4c24f", "Form0c3272030a4c24fController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form0c3272030a4c24f").navigate();
    }
});