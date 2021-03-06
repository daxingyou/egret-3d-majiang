//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var eui;
(function (eui) {
    /**
     * The VSlider (vertical slider) control lets users select a value
     * by moving a slider thumb between the end points of the slider track.
     * The current value of the slider is determined by the relative location of the thumb between
     * the end points of the slider, corresponding to the slider's minimum and maximum values.
     *
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample  extension/eui/components/VSliderExample.ts
     * @language en_US
     */
    /**
     * 使用 VSlider（垂直滑块）控件，用户可通过在滑块轨道的端点之间移动滑块来选择值。
     * 滑块的当前值由滑块端点（对应于滑块的最小值和最大值）之间滑块的相对位置确定。
     *
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample  extension/eui/components/VSliderExample.ts
     * @language zh_CN
     */
    var VSlider = (function (_super) {
        __extends(VSlider, _super);
        /**
         * Constructor.
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 构造函数。
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        function VSlider() {
            return _super.call(this) || this;
        }
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        VSlider.prototype.pointToValue = function (x, y) {
            if (!this.thumb || !this.track)
                return 0;
            var values = this.$Range;
            var range = values[0 /* maximum */] - values[2 /* minimum */];
            var thumbRange = this.getThumbRange();
            return values[2 /* minimum */] + ((thumbRange != 0) ? ((thumbRange - y) / thumbRange) * range : 0);
        };
        /**
         * @private
         *
         * @returns
         */
        VSlider.prototype.getThumbRange = function () {
            var bounds = egret.$TempRectangle;
            this.track.getLayoutBounds(bounds);
            var thumbRange = bounds.height;
            this.thumb.getLayoutBounds(bounds);
            return thumbRange - bounds.height;
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        VSlider.prototype.updateSkinDisplayList = function () {
            if (!this.thumb || !this.track)
                return;
            var values = this.$Range;
            var thumbRange = this.getThumbRange();
            var range = values[0 /* maximum */] - values[2 /* minimum */];
            var thumbPosTrackY = (range > 0) ? thumbRange - (((this.pendingValue - values[2 /* minimum */]) / range) * thumbRange) : 0;
            var thumbPos = this.track.localToGlobal(0, thumbPosTrackY, egret.$TempPoint);
            var thumbPosX = thumbPos.x;
            var thumbPosY = thumbPos.y;
            var thumbPosParentY = this.thumb.$parent.globalToLocal(thumbPosX, thumbPosY, egret.$TempPoint).y;
            var bounds = egret.$TempRectangle;
            var thumbHeight = bounds.height;
            this.thumb.getLayoutBounds(bounds);
            this.thumb.setLayoutBoundsPosition(bounds.x, Math.round(thumbPosParentY));
            if (this.trackHighlight) {
                var trackHighlightY = this.trackHighlight.$parent.globalToLocal(thumbPosX, thumbPosY, egret.$TempPoint).y;
                this.trackHighlight.y = Math.round(trackHighlightY + thumbHeight);
                this.trackHighlight.height = Math.round(thumbRange - trackHighlightY);
            }
        };
        return VSlider;
    }(eui.SliderBase));
    eui.VSlider = VSlider;
    __reflect(VSlider.prototype, "eui.VSlider");
})(eui || (eui = {}));
//# sourceMappingURL=VSlider.js.map