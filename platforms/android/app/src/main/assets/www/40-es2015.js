(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal", function() { return Modal; });
/* harmony import */ var _core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-5ba38749.js */ "./node_modules/@ionic/core/dist/esm/core-5ba38749.js");
/* harmony import */ var _config_6ccf652f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-6ccf652f.js */ "./node_modules/@ionic/core/dist/esm/config-6ccf652f.js");
/* harmony import */ var _animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-d0becaea.js */ "./node_modules/@ionic/core/dist/esm/animation-d0becaea.js");
/* harmony import */ var _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-94c4865f.js */ "./node_modules/@ionic/core/dist/esm/constants-94c4865f.js");
/* harmony import */ var _overlays_6ea64c21_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-6ea64c21.js */ "./node_modules/@ionic/core/dist/esm/overlays-6ea64c21.js");
/* harmony import */ var _theme_353a032e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-353a032e.js */ "./node_modules/@ionic/core/dist/esm/theme-353a032e.js");
/* harmony import */ var _framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework-delegate-00265c49.js */ "./node_modules/@ionic/core/dist/esm/framework-delegate-00265c49.js");
/* harmony import */ var _index_84f27767_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-84f27767.js */ "./node_modules/@ionic/core/dist/esm/index-84f27767.js");









/**
 * iOS Modal Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const backdropAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const wrapperAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.4);
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Animations for modals
 */
// export function modalSlideIn(rootEl: HTMLElement) {
// }
// export class ModalSlideOut {
//   constructor(el: HTMLElement) {
//     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
//     let wrapperEleRect = wrapperEle.getBoundingClientRect();
//     let wrapper = new Animation(this.plt, wrapperEle);
//     // height of the screen - top of the container tells us how much to scoot it down
//     // so it's off-screen
//     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     this
//       .element(this.leavingView.pageRef())
//       .easing('ease-out')
//       .duration(250)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideIn {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.01, 0.4);
//     wrapper.fromTo('translateY', '40px', '0px');
//     wrapper.fromTo('opacity', 0.01, 1);
//     const DURATION = 280;
//     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
//     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideOut {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     wrapper.fromTo('translateY', '0px', '40px');
//     wrapper.fromTo('opacity', 0.99, 0);
//     this
//       .element(this.leavingView.pageRef())
//       .duration(200)
//       .easing('cubic-bezier(0.47,0,0.745,0.715)')
//       .add(wrapper)
//       .add(backdrop);
//   }
// }

/**
 * iOS Modal Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const backdropAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const wrapperAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const wrapperEl = baseEl.querySelector('.modal-wrapper');
    const wrapperElRect = wrapperEl.getBoundingClientRect();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.4, 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0%)', `translateY(${baseEl.ownerDocument.defaultView.innerHeight - wrapperElRect.top}px)`);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-out')
        .duration(250)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const backdropAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const wrapperAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Modal Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const backdropAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const wrapperAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    const wrapperEl = baseEl.querySelector('.modal-wrapper');
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
        { offset: 1, opacity: 0, transform: 'translateY(40px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Modal = class {
    constructor(hostRef) {
        Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            this.dismiss(undefined, _overlays_6ea64c21_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
        };
        this.onDismiss = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.dismiss();
        };
        this.onLifecycle = (modalEvent) => {
            const el = this.usersElement;
            const name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                const ev = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(ev);
            }
        };
        Object(_overlays_6ea64c21_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalDidPresent", 7);
        this.willPresent = Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalWillPresent", 7);
        this.willDismiss = Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalWillDismiss", 7);
        this.didDismiss = Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalDidDismiss", 7);
    }
    /**
     * Present the modal overlay after it has been created.
     */
    async present() {
        if (this.presented) {
            return;
        }
        const container = this.el.querySelector(`.modal-wrapper`);
        if (!container) {
            throw new Error('container is undefined');
        }
        const componentProps = Object.assign({}, this.componentProps, { modal: this.el });
        this.usersElement = await Object(_framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps);
        await Object(_index_84f27767_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this.usersElement);
        return Object(_overlays_6ea64c21_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation);
    }
    /**
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     */
    async dismiss(data, role) {
        const dismissed = await Object(_overlays_6ea64c21_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation);
        if (dismissed) {
            await Object(_framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.delegate, this.usersElement);
        }
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_6ea64c21_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionModalDidDismiss');
    }
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */
    onWillDismiss() {
        return Object(_overlays_6ea64c21_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionModalWillDismiss');
    }
    render() {
        const mode = Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "no-router": true, "aria-modal": "true", class: Object.assign({ [mode]: true }, Object(_theme_353a032e_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "dialog", class: {
                [`modal-wrapper`]: true,
                [mode]: true,
            } })));
    }
    get el() { return Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"; }
};
const LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillLeave',
    'ionModalDidDismiss': 'ionViewDidLeave',
};




/***/ })

}]);
//# sourceMappingURL=40-es2015.js.map