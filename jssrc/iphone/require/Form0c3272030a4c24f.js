define("Form0c3272030a4c24f", function() {
    return function(controller) {
        function addWidgetsForm0c3272030a4c24f() {
            this.setDefaultUnit(kony.flex.DP);
            var Button0gf3174496c054a = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "50dp",
                "id": "Button0gf3174496c054a",
                "isVisible": true,
                "left": "49dp",
                "skin": "slButtonGlossBlue",
                "text": "Button",
                "top": "34dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var TabPane0bb1b9bc4336b40 = new kony.ui.TabPane({
                "activeSkin": "tabCanvas",
                "activeTabs": [0],
                "height": "220dp",
                "id": "TabPane0bb1b9bc4336b40",
                "inactiveSkin": "tabCanvasInactive",
                "isVisible": true,
                "layoutType": constants.CONTAINER_LAYOUT_BOX,
                "left": "44dp",
                "top": "124dp",
                "viewConfig": {
                    "collapsibleViewConfig": {
                        "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                        "imageposition": "right",
                        "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                        "tabnamealignment": "left",
                        "toggleTabs": false,
                        "toggletabs": false
                    },
                    "collapsibleviewconfig": {
                        "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                        "imageposition": "right",
                        "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                        "tabnamealignment": "left",
                        "toggleTabs": false,
                        "toggletabs": false
                    },
                    "pageViewConfig": {
                        "needPageIndicator": true
                    },
                    "tabViewConfig": {
                        "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                        "image1": "tableftarrow.png",
                        "image2": "tabrightarrow.png"
                    },
                },
                "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
                "width": "100%",
                "zIndex": 1
            }, {
                "layoutType": constants.CONTAINER_LAYOUT_BOX,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var Tab0cba1bb47ac2742 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "150dp",
                "id": "Tab0cba1bb47ac2742",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "orientation": constants.BOX_LAYOUT_VERTICAL,
                "skin": "slTab",
                "tabName": "Tab1",
                "width": "100%"
            }, {
                "layoutType": kony.flex.FREE_FORM,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Tab0cba1bb47ac2742.setDefaultUnit(kony.flex.DP);
            var Calendar0b3cdf4aa33dd4d = new kony.ui.Calendar({
                "calendarIcon": "calbtn.png",
                "dateComponents": [30, 4, 2018, 0, 0, 0],
                "dateFormat": "dd/MM/yyyy",
                "day": 30,
                "formattedDate": "30/04/2018",
                "height": "40dp",
                "hour": 0,
                "id": "Calendar0b3cdf4aa33dd4d",
                "isVisible": true,
                "left": "88dp",
                "minutes": 0,
                "month": 4,
                "seconds": 0,
                "skin": "slCalendar",
                "top": "56dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "260dp",
                "year": 2018,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Tab0cba1bb47ac2742.add(Calendar0b3cdf4aa33dd4d);
            TabPane0bb1b9bc4336b40.addTab("Tab0cba1bb47ac2742", "Tab1", null, Tab0cba1bb47ac2742, null);
            this.add(Button0gf3174496c054a, TabPane0bb1b9bc4336b40);
        };
        return [{
            "addWidgets": addWidgetsForm0c3272030a4c24f,
            "enabledForIdleTimeout": false,
            "id": "Form0c3272030a4c24f",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarConfig": {
                "renderTitleText": true,
                "prevFormTitle": false,
                "titleBarLeftSideView": "button",
                "labelLeftSideView": "Back",
                "titleBarRightSideView": "button",
                "labelRightSideView": "Edit"
            },
            "titleBarSkin": "slTitleBar"
        }]
    }
});