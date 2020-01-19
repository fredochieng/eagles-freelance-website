(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<!-- Start Preloader Area -->\n\t<app-preloader></app-preloader>\n\t<!-- End Preloader Area -->\n\n\t<!-- Start Navbar Area -->\n\t<app-header></app-header>\n\t<!-- End Navbar Area -->\n\n\t<!-- Start Page Title Area -->\n\t<app-page-title></app-page-title>\n\t<!-- End page Title Area -->\n\n\t<!-- Start About Us Area -->\n\t<app-about></app-about>\n\t<!-- End About Us Area -->\n\n\t<!-- Start Team Area -->\n\t<app-writers></app-writers>\n\t<!-- End Team Area -->\n\n\t<!-- Start Footer-->\n\t<app-footer></app-footer>\n\t<!-- End Footer-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/includes/page-title/page-title.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/includes/page-title/page-title.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Page Title Area -->\n<div class=\"page-title-area item-bg-1\">\n  <div class=\"container\">\n    <div class=\"page-title-content\">\n      <h2>About Us</h2>\n      <ul>\n        <li>\n          <a href=\"home\">\n            Home\n            <i class=\"fa fa-chevron-right\"></i>\n          </a>\n        </li>\n        <li>About Us</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Page Title Area -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assignments/assignments.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assignments/assignments.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("    \t<!-- Start Preloader Area -->\n    \t<app-preloader></app-preloader>\n    \t<!-- End Preloader Area -->\n\n    \t<!-- Start Navbar Area -->\n    \t<app-header></app-header>\n    \t<!-- End Navbar Area -->\n    \t<!-- Start Page Title Area -->\n    \t<div class=\"page-title-area item-bg-1\">\n    \t  <div class=\"container\">\n    \t    <div class=\"page-title-content\">\n    \t      <h2>Sample Assignments</h2>\n    \t      <ul>\n    \t        <li>\n    \t          <a href=\"home\">\n    \t            Home\n    \t            <i class=\"fa fa-chevron-right\"></i>\n    \t          </a>\n    \t        </li>\n    \t        <li>Sample Assignments</li>\n    \t      </ul>\n    \t    </div>\n    \t  </div>\n    \t</div>\n    \t<!-- End Page Title Area -->\n\n    \t<!--  Start Project Area -->\n    \t<div class=\"project-area pt-100 pb-70\">\n    \t  <div class=\"container\">\n    \t    <div class=\"sorting-menu\">\n    \t      <ul>\n    \t        <li class=\"filter active\" data-filter=\"all\">All</li>\n    \t        <li class=\"filter\" data-filter=\".1\">Academic Essays</li>\n    \t        <li class=\"filter\" data-filter=\".2\">Research Proposals</li>\n    \t        <li class=\"filter\" data-filter=\".3\">Research Papers</li>\n    \t        <li class=\"filter\" data-filter=\".4\">English Translations</li>\n    \t        <li class=\"filter\" data-filter=\".5\">Presentations</li>\n    \t      </ul>\n    \t    </div>\n    \t    <!-- /.sorting-menu -->\n    \t    <div id=\"Container\" class=\"row\">\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 1 5 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/1.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 2 3 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/2.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 3 5 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/3.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 4 1 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/4.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 5 2 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/5.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 1 3 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/6.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 3 1 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/7.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 1 2 3 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/8.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t      <div class=\"single-portfolio-item col-lg-4 col-sm-6 1 5 3 mix\">\n    \t        <div class=\"portfolio-inner\">\n    \t          <img class=\"portfolio-img\" src=\"assets/img/project/9.jpg\" alt=\"portfolio-img\">\n    \t          <div class=\"portfolio-hover\">\n    \t            <div class=\"hover-text\">\n    \t              <a href=\"portfolio-details.html\">\n    \t                <h4>Causes of Hyperlori</h4>\n    \t                <span>Health</span>\n    \t              </a>\n    \t            </div>\n    \t          </div>\n    \t        </div>\n    \t      </div>\n    \t    </div>\n    \t  </div>\n    \t</div>\n    \t<!--  End Project Area -->\n\n    \t<!-- Start Footer-->\n    \t<app-footer></app-footer>\n    \t<!-- End Footer-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<!-- Start Preloader Area -->\n\t<app-preloader></app-preloader>\n\t<!-- End Preloader Area -->\n\n\t<!-- Start Navbar Area -->\n\t<app-header></app-header>\n\t<!-- End Navbar Area -->\n\n\t<!-- Start Page Title Area -->\n\t<div class=\"page-title-area item-bg-1\">\n\t  <div class=\"container\">\n\t    <div class=\"page-title-content\">\n\t      <h2>Contact Us</h2>\n\t      <ul>\n\t        <li>\n\t          <a href=\"contact\">\n\t            Home\n\t            <i class=\"fa fa-chevron-right\"></i>\n\t          </a>\n\t        </li>\n\t        <li>Contact Us</li>\n\t      </ul>\n\t    </div>\n\t  </div>\n\t</div>\n\t<!-- End Page Title Area -->\n\n\t<!-- Start Contact Box Area -->\n\t<section class=\"contact-box pt-100 pb-70\">\n\t  <div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-contact-box\">\n\t          <i class=\"fa fa-map-marker\"></i>\n\t          <div class=\"content-title\">\n\t            <h3>Address</h3>\n\t            <p>Nairobi</p>\n\t          </div>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-contact-box\">\n\t          <i class=\"fa fa-envelope\"></i>\n\t          <div class=\"content-title\">\n\t            <h3>Email</h3>\n\t            <a href=\"#\">support@eaglefreelance.com</a>\n\t          </div>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6 offset-md-3 offset-lg-0\">\n\t        <div class=\"single-contact-box\">\n\t          <i class=\"fa fa-phone\"></i>\n\t          <div class=\"content-title\">\n\t            <h3>Phone</h3>\n\t            <a href=\"#\"> +254 713 396 266</a>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n\t<!-- End Contact Box Area -->\n\n\t<!-- Start Contact Area -->\n\t<section class=\"contact-area pb-100\">\n\t  <div class=\"container\">\n\t    <div class=\"section-title\">\n\t      <h2>Drop us a message & we will get back to you.</h2>\n\t      <p>If you have any query, we would love to hear about it.</p>\n\t    </div>\n\n\t    <div class=\"row align-items-center\">\n\t      <div class=\"col-lg-6\">\n\t        <div class=\"contact-form\">\n\t          <form id=\"contactForm\">\n\t            <div class=\"row\">\n\t              <div class=\"col-lg-12\">\n\t                <div class=\"form-group\">\n\t                  <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" required\n\t                    data-error=\"Please enter your name\" placeholder=\"Name\">\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-12\">\n\t                <div class=\"form-group\">\n\t                  <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" required\n\t                    data-error=\"Please enter your email\" placeholder=\"Email\">\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-12\">\n\t                <div class=\"form-group\">\n\t                  <input type=\"text\" name=\"phone_number\" id=\"phone_number\" required\n\t                    data-error=\"Please enter your number\" class=\"form-control\" placeholder=\"Phone\">\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-12\">\n\t                <div class=\"form-group\">\n\t                  <input type=\"text\" name=\"msg_subject\" id=\"msg_subject\" class=\"form-control\" required\n\t                    data-error=\"Please enter your subject\" placeholder=\"Subject\">\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-12\">\n\t                <div class=\"form-group\">\n\t                  <textarea name=\"message\" class=\"form-control\" id=\"message\" cols=\"30\" rows=\"6\" required\n\t                    data-error=\"Write your message\" placeholder=\"Your Message\"></textarea>\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-12\">\n\t                <button type=\"submit\" class=\"default-btn\">Send Message</button>\n\t              </div>\n\t            </div>\n\t          </form>\n\t        </div>\n\t      </div>\n\n\t      <div class=\"col-lg-6\">\n\t        <div id=\"map\"></div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n\t<!-- End Contact Area -->\n\n\t<!-- Start Footer-->\n\t<app-footer></app-footer>\n\t<!-- End Footer-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<!-- Start Preloader Area -->\n\t<app-preloader></app-preloader>\n\t<!-- End Preloader Area -->\n\n\t<!-- Start Navbar Area -->\n\t<app-header></app-header>\n\t<!-- End Navbar Area -->\n\n\t<!-- Start Hero Slider Area -->\n\t<app-slider></app-slider>\n\t<!-- End Hero Slider Area -->\n\n\t<!-- Start Box Area -->\n\t<app-start-box></app-start-box>\n\t<!-- End Box Area -->\n\n\t<!-- Start About Us Area -->\n\t<app-about></app-about>\n\t<!-- End About Us Area -->\n\n\t<!-- Start Process Area -->\n\t<app-process></app-process>\n\t<!-- End Process Area -->\n\n\t<!-- Start Best Service Area -->\n\t<app-homepage-services></app-homepage-services>\n\t<!-- End Best Service Area -->\n\n\t<!-- Start Choose Area -->\n\t<app-choose-us></app-choose-us>\n\t<!-- End Choose Area -->\n\n\t<!-- Start Client Area -->\n\t<!-- <app-testimonials></app-testimonials> -->\n\t<!-- End Client Area -->\n\n\t<!-- Start FAQ Area -->\n\t<!-- <app-faqs></app-faqs> -->\n\t<!-- End FAQ Area -->\n\n\t<!-- Start Footer-->\n\t<app-footer></app-footer>\n\t<!-- End Footer-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/about/about.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/about/about.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<section class=\"about-us-area about-us-area-2 ptb-100\">\n\t  <div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-6\">\n\t        <div class=\"about-title\">\n\t          <span>About Us</span>\n\t          <h2>We Take Freelancing To The Next Level</h2>\n\t          <p>We offer professional freelancing services such as academic writing & software/web development. As such,\n\t            we write descriptive essays, analytic\n\t            papers, persuasive papers as well as critical assignments on health and history for as low as $5 per page.\n\t            We also have experts\n\t            developers who will take\n\t            care of your software/web development needs</p>\n\t          <ul>\n\t            <li>\n\t              <i class=\"flaticon-right-arrow\"></i>\n\t              Academic Writing e.g Descriptive essays, analytical papers.\n\t            </li>\n\t            <li>\n\t              <i class=\"flaticon-right-arrow\"></i>\n\t              Software Development - get your customised software today.\n\t            </li>\n\t            <li>\n\t              <i class=\"flaticon-right-arrow\"></i>\n\t              Website Development using modern programming technologies.\n\t            </li>\n\t          </ul>\n\t          <a class=\"default-btn\" href=\"about\">Read More</a>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-6\">\n\t        <div class=\"about-us-img\">\n\t          <img src=\"assets/img/about-1.jpg\" alt=\"About Us\">\n\t          <div class=\"about-img-2\">\n\t            <img src=\"assets/img/about-2.jpg\" alt=\"About Us\">\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/choose-us/choose-us.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/choose-us/choose-us.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"choose-area ptb-100\">\n  <div class=\"container-fluid\">\n    <div class=\"section-title\">\n      <span>You Have Every Reason To Choose Us</span>\n      <h2>We Guarantee The Best For Our Clients</h2>\n    </div>\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-7 pl-0\">\n        <div class=\"choose-bg-area\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 pr-0\">\n              <div class=\"single-box choose-1\">\n                <i class=\"flaticon-shield\"></i>\n                <h3>Professional Experts</h3>\n                <p>We guarantee you original quality work free from plagiarism done by our professional freelancers.</p>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 pl-0\">\n              <div class=\"single-box choose-2\">\n                <i class=\"flaticon-development\"></i>\n                <h3>Friendly Rates</h3>\n                <p>Don't worry about our charges/rates when dealing with Eagle freelance, we have your back</p>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 pr-0\">\n              <div class=\"single-box choose-3\">\n                <i class=\"flaticon-content\"></i>\n                <h3>Timely Submission</h3>\n                <p>We know how to work within the deadline. You get your work done and submitted before the deadline.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 pl-0\">\n              <div class=\"single-box choose-4\">\n                <i class=\"flaticon-help\"></i>\n                <h3>We're Available 24/7</h3>\n                <p>Eagle is here for you, anything from answering any questions to resolving any issues, at any time.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-5 pr-0\">\n        <div class=\"choose-img\">\n          <img src=\"assets/img/choose-img.jpg\" alt=\"\">\n          <div class=\"video-wrap\">\n            <div class=\"video-btn-wrap\">\n              <a href=\"play-video.html\" class=\"video-btn\"\n                data-ilb2-video='{\"controls\":\"controls\", \"autoplay\":false, \"sources\":[{\"src\":\"assets/img/business.mp4\", \"type\":\"video/mp4\"}]}'\n                data-imagelightbox=\"video\">\n                <i class=\"fa fa-play\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/faqs/faqs.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/faqs/faqs.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"questions-area two pb-100\">\n  <div class=\"container-fluid\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-7 pl-0\">\n        <div class=\"questions-bg-area\">\n          <div class=\"section-title\">\n            <span>FAQ</span>\n            <h2>Frequently Asked Questions</h2>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"faq-accordion\">\n                <ul class=\"accordion\">\n                  <li class=\"accordion-item\">\n                    <a class=\"accordion-title active\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                      How to change partner gray image to color?\n                    </a>\n                    <p class=\"accordion-content show\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis\n                      deleniti nisi necessitatibus, dolores voluptates quam blanditiis fugiat doloremque? Excepturi,\n                      minus rem error aut necessitatibus quasi voluptates assumenda ipsum provident tenetur? Lorem\n                      ipsum dolor, sit amet consectetur adipisicing elit. Magni nesciunt consectetur sed, tempore,\n                      corporis ea maiores libero.</p>\n                  </li>\n                  <li class=\"accordion-item\">\n                    <a class=\"accordion-title\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                      Where do I add my email address in the caldera form?\n                    </a>\n                    <p class=\"accordion-content\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis\n                      deleniti nisi necessitatibus, dolores voluptates quam blanditiis fugiat doloremque? Excepturi,\n                      minus rem error aut necessitatibus quasi voluptates assumenda ipsum provident tenetur? Lorem\n                      ipsum dolor, sit amet consectetur adipisicing elit. Magni nesciunt consectetur sed, tempore,\n                      corporis ea maiores libero.</p>\n                  </li>\n                  <li class=\"accordion-item\">\n                    <a class=\"accordion-title\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                      Page showing 404 but this page still there?\n                    </a>\n                    <p class=\"accordion-content\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis\n                      deleniti nisi necessitatibus, dolores voluptates quam blanditiis fugiat doloremque? Excepturi,\n                      minus rem error aut necessitatibus quasi voluptates assumenda ipsum provident tenetur? Lorem\n                      ipsum dolor, sit amet consectetur adipisicing elit. Magni nesciunt consectetur sed, tempore,\n                      corporis ea maiores libero.</p>\n                  </li>\n                  <li class=\"accordion-item\">\n                    <a class=\"accordion-title\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                      How to increase upload_max_filesize?\n                    </a>\n                    <p class=\"accordion-content\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis\n                      deleniti nisi necessitatibus, dolores voluptates quam blanditiis fugiat doloremque? Excepturi,\n                      minus rem error aut necessitatibus quasi voluptates assumenda ipsum provident tenetur? Lorem\n                      ipsum dolor, sit amet consectetur adipisicing elit. Magni nesciunt consectetur sed, tempore,\n                      corporis ea maiores libero.</p>\n                  </li>\n                  <li class=\"accordion-item\">\n                    <a class=\"accordion-title\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                      How to change partner gray image to color?\n                    </a>\n                    <p class=\"accordion-content\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis\n                      deleniti nisi necessitatibus, dolores voluptates quam blanditiis fugiat doloremque? Excepturi,\n                      minus rem error aut necessitatibus quasi voluptates assumenda ipsum provident tenetur? Lorem\n                      ipsum dolor, sit amet consectetur adipisicing elit. Magni nesciunt consectetur sed, tempore,\n                      corporis ea maiores libero.</p>\n                  </li>\n                  <li class=\"accordion-item\">\n                    <a class=\"accordion-title\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                      Where do I add my email address in the caldera form?\n                    </a>\n                    <p class=\"accordion-content\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis\n                      deleniti nisi necessitatibus, dolores voluptates quam blanditiis fugiat doloremque? Excepturi,\n                      minus rem error aut necessitatibus quasi voluptates assumenda ipsum provident tenetur? Lorem\n                      ipsum dolor, sit amet consectetur adipisicing elit. Magni nesciunt consectetur sed, tempore,\n                      corporis ea maiores libero.</p>\n                  </li>\n                  <li class=\"accordion-item\">\n                    <a class=\"accordion-title\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                      Page showing 404 but this page still there?\n                    </a>\n                    <p class=\"accordion-content\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis\n                      deleniti nisi necessitatibus, dolores voluptates quam blanditiis fugiat doloremque? Excepturi,\n                      minus rem error aut necessitatibus quasi voluptates assumenda ipsum provident tenetur? Lorem\n                      ipsum dolor, sit amet consectetur adipisicing elit. Magni nesciunt consectetur sed, tempore,\n                      corporis ea maiores libero.</p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-5 pr-0\">\n        <div class=\"questions\">\n          <div class=\"contact-form\">\n            <form id=\"contactForm\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\">\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\">\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <label>Website</label>\n                    <input type=\"text\" name=\"website\" id=\"website\" class=\"form-control\">\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <label>Message</label>\n                    <textarea name=\"message\" class=\"form-control\" id=\"message\" cols=\"30\" rows=\"6\"></textarea>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                  <button type=\"submit\" class=\"default-btn\">Send Message</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/footer/footer.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/footer/footer.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Footer Top Area -->\n<section class=\"footer-top-area pt-100 pb-70\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-6 col-md-6\">\n        <div class=\"single-widget\">\n          <a href=\"home\">\n            <h3>Eagle Freelances</h3>\n            <!-- <img src=\"assets/img/white-logo.png\" alt=\"White-Logo\" /> -->\n          </a>\n          <p>\n            We offer professional freelancing services such as academic writing\n            & software and web development.\n          </p>\n          <ul class=\"address\">\n            <li>\n              <i class=\"fa fa-map-marker\"></i>\n              Nairobi, 00100 Kenya\n            </li>\n            <li>\n              <i class=\"fa fa-phone\"></i>\n              <a href=\"tel:+254 713 396 266\">+254 713 396 266</a>\n            </li>\n            <li>\n              <i class=\"fa fa-envelope\"></i>\n              <a href=\"mailto:support@eaglefreelance.com\">support@eaglefreelance.com</a>\n            </li>\n            <li>\n              <i class=\"fa fa-envelope\"></i>\n              <a href=\"mailto:info@eaglefreelance.com\">info@eaglefreelance.com</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 col-md-6\">\n        <div class=\"single-widget\">\n          <h3>Quick Links</h3>\n          <ul class=\"links\">\n            <li>\n              <a href=\"home\">Home</a>\n            </li>\n            <li>\n              <a href=\"about\">About Us</a>\n            </li>\n            <li>\n              <a href=\"services\">Services</a>\n            </li>\n            <li>\n              <a href=\"assignments\">Assignments</a>\n            </li>\n            <li>\n              <a href=\"reviews\">Reviews</a>\n            </li>\n            <li>\n              <a href=\"contact\">Contact Us</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6 col-md-6\">\n        <div class=\"single-widget\">\n          <h3>Quick Links</h3>\n          <ul class=\"links\">\n            <li>\n              <a href=\"home\">Home</a>\n            </li>\n            <li>\n              <a href=\"about\">About Us</a>\n            </li>\n            <li>\n              <a href=\"services\">Services</a>\n            </li>\n            <li>\n              <a href=\"assignments\">Assignments</a>\n            </li>\n            <li>\n              <a href=\"reviews\">Reviews</a>\n            </li>\n            <li>\n              <a href=\"contact\">Contact Us</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End Footer Top Area -->\n\n<!-- Start Footer Bottom Area -->\n<footer class=\"footer-bottom-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-8\">\n        <div>\n          <p>\n            Copyright © {{ currentDdate }}. All Rights Reserved. Designed &\n            Developed\n            <a href=\"https://brikesystems.co.ke/\" target=\"_blank\">Brike Systems Ltd</a>\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4\">\n        <ul class=\"social-icon\">\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-pinterest-p\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- End Footer Bottom Area -->\n\n<!-- Start Go Top Area -->\n<div class=\"go-top\">\n  <i class=\"fa fa-angle-double-up\"></i>\n  <i class=\"fa fa-angle-double-up\"></i>\n</div>\n<!-- End Go Top Area -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/header/header.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/header/header.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"peru-nav\">\n  <div class=\"navbar-area fixed-top\">\n    <!-- Menu For Mobile Device -->\n    <div class=\"mobile-nav\">\n      <a href=\"home\" class=\"logo\">\n        <h3>Eagle Freelance</h3>\n        <!-- <img src=\"assets/img/peru-logos.png\" alt=\"Peru Logo\"> -->\n      </a>\n    </div>\n\n    <!-- Menu For Desktop Device -->\n    <div class=\"main-nav peru-nav-style\">\n      <nav class=\"navbar navbar-expand-md navbar-light\">\n        <div class=\"container\">\n          <a class=\"navbar-brand\" href=\"home\">\n            <h3>Eagle Freelance</h3>\n            <!-- <img src=\"assets/img/peru-logos.png\" alt=\"peru Logo\"> -->\n          </a>\n\n          <div class=\"collapse navbar-collapse mean-menu\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\">\n                <a href=\"home\" class=\"nav-link\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"about\" class=\"nav-link\">About</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"services\" class=\"nav-link\">Services</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"assignments\" class=\"nav-link\">Sample Assignments</a>\n              </li>\n              <!-- <li class=\"nav-item\">\n                <a href=\"services\" class=\"nav-link\">Projects</a>\n              </li> -->\n              <li class=\"nav-item\">\n                <a href=\"reviews\" class=\"nav-link\">Reviews & Ratings</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"contact\" class=\"nav-link\">Contact</a>\n              </li>\n            </ul>\n            <div class=\"others-option\">\n              <a href=\"tel:+800-987-65-43\" class=\"contact-number\">\n                <i class=\"fa fa-phone\"></i>\n                +254 713 396 266\n              </a>\n            </div>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/homepage-services/homepage-services.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/homepage-services/homepage-services.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<!-- <section class=\"best-services-area ptb-100\">\n\t  <div class=\"container\">\n\t    <div class=\"section-title\">\n\t      <span>What We do</span>\n\t      <h2>Our Best Services</h2>\n\t    </div>\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-12\">\n\t        <div class=\"tabs-area\">\n\t          <ul class=\"nav nav-pills d-sm-flex d-block text-center justify-content-between pt-15\" id=\"pills-tab\"\n\t            role=\"tablist\">\n\t            <li class=\"nav-item\">\n\t              <i class=\"flaticon-steering-wheel\"></i>\n\t              <a class=\"nav-link active\" id=\"pills-1-tab\" data-toggle=\"pill\" href=\"#pills-1\" role=\"tab\"\n\t                aria-controls=\"pills-1\" aria-selected=\"true\">\n\t                <i class=\"flaticon-pie-chart\"></i>\n\t                Best Consulting\n\t              </a>\n\t            </li>\n\n\t            <li class=\"nav-item\">\n\t              <a class=\"nav-link\" id=\"pills-2-tab\" data-toggle=\"pill\" href=\"#pills-2\" role=\"tab\"\n\t                aria-controls=\"pills-2\" aria-selected=\"false\">\n\t                <i class=\"flaticon-hand\"></i>\n\t                Market Growth\n\t              </a>\n\t            </li>\n\n\t            <li class=\"nav-item\">\n\t              <i class=\"flaticon-tracking\"></i>\n\t              <a class=\"nav-link\" id=\"pills-3-tab\" data-toggle=\"pill\" href=\"#pills-3\" role=\"tab\"\n\t                aria-controls=\"pills-3\" aria-selected=\"false\">\n\t                <i class=\"flaticon-strategy\"></i>\n\t                Saving Strategy\n\t              </a>\n\t            </li>\n\n\t            <li class=\"nav-item\">\n\t              <a class=\"nav-link\" id=\"pills-4-tab\" data-toggle=\"pill\" href=\"#pills-4\" role=\"tab\"\n\t                aria-controls=\"pills-4\" aria-selected=\"false\">\n\t                <i class=\"flaticon-consultant\"></i>\n\t                Consultant\n\t              </a>\n\t            </li>\n\n\t            <li class=\"nav-item\">\n\t              <i class=\"flaticon-van\"></i>\n\t              <a class=\"nav-link\" id=\"pills-5-tab\" data-toggle=\"pill\" href=\"#pills-5\" role=\"tab\"\n\t                aria-controls=\"pills-5\" aria-selected=\"false\">\n\t                <i class=\"flaticon-interview\"></i>\n\t                Best service\n\t              </a>\n\t            </li>\n\t          </ul>\n\t        </div>\n\n\t        <div class=\"tab-content\" id=\"pills-tabContent\">\n\t          <div class=\"tab-pane fade show active\" id=\"pills-1\" role=\"tabpanel\" aria-labelledby=\"pills-1-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/4.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Solution For Your Financial help</h3>\n\t                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra\n\t                    maecenas accumsan lacus vel facilisis.</p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Investment Service\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Advisory Finance\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Global SME Finance Facility\n\t                    </li>\n\t                  </ul>\n\t                  <a class=\"default-btn\" href=\"#\">Discover More</a>\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\n\t          <div class=\"tab-pane fade\" id=\"pills-2\" role=\"tabpanel\" aria-labelledby=\"pills-2-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Solution For Your Financial help</h3>\n\t                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra\n\t                    maecenas accumsan lacus vel facilisis.</p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Investment Service\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Advisory Finance\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Global SME Finance Facility\n\t                    </li>\n\t                  </ul>\n\t                  <a class=\"default-btn\" href=\"#\">Discover More</a>\n\t                </div>\n\t              </div>\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/3.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\n\t          <div class=\"tab-pane fade\" id=\"pills-3\" role=\"tabpanel\" aria-labelledby=\"pills-3-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/1.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Solution For Your Financial help</h3>\n\t                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra\n\t                    maecenas accumsan lacus vel facilisis.</p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Investment Service\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Advisory Finance\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Global SME Finance Facility\n\t                    </li>\n\t                  </ul>\n\t                  <a class=\"default-btn\" href=\"#\">Discover More</a>\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\n\t          <div class=\"tab-pane fade\" id=\"pills-4\" role=\"tabpanel\" aria-labelledby=\"pills-4-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Solution For Your Financial help</h3>\n\t                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra\n\t                    maecenas accumsan lacus vel facilisis.</p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Investment Service\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Advisory Finance\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Global SME Finance Facility\n\t                    </li>\n\t                  </ul>\n\t                  <a class=\"default-btn\" href=\"#\">Discover More</a>\n\t                </div>\n\t              </div>\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/2.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\t          <div class=\"tab-pane fade\" id=\"pills-5\" role=\"tabpanel\" aria-labelledby=\"pills-5-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/1.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Solution For Your Financial help</h3>\n\t                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra\n\t                    maecenas accumsan lacus vel facilisis.</p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Investment Service\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Advisory Finance\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Global SME Finance Facility\n\t                    </li>\n\t                  </ul>\n\t                  <a class=\"default-btn\" href=\"#\">Discover More</a>\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\n\t  </div>\n  </section> -->\n\n\t<!-- Start Services Area -->\n\t<section class=\"services-area pb-100\">\n\t  <div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-6\">\n\t        <div class=\"services-title\">\n\t          <span>Our Services</span>\n\t          <h2>Overview Of our Services</h2>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-6\">\n\t        <div class=\"services-title\">\n\t          <p>Get an overview of the kind of services we offer at Eagle Freelance.\n\t            We make sure our clients get the best services ever. Contact us today\n\t            and discuss with us your assignment or project.\n\t          </p>\n\t        </div>\n\t      </div>\n\t    </div>\n\t    <div class=\"row\">\n\t      <div class=\"service-wrap owl-carousel owl-theme\">\n\t        <div class=\"single-services\">\n\t          <img src=\"assets/img/services/1.jpg\" alt=\"\">\n\t          <div class=\"service-text\">\n\t            <h3>\n\t              <a href=\"#\">Academic Writing<i class=\"flaticon-strategy\"></i></a>\n\t            </h3>\n\t          </div>\n\t        </div>\n\t        <div class=\"single-services\">\n\t          <img src=\"assets/img/services/3.jpg\" alt=\"\">\n\t          <div class=\"service-text\">\n\t            <h3>\n\t              <a href=\"#\">Academic Research <i class=\"flaticon-strategy\"></i></a>\n\t            </h3>\n\t          </div>\n\t        </div>\n\t        <div class=\"single-services\">\n\t          <img src=\"assets/img/services/3.jpg\" alt=\"\">\n\t          <div class=\"service-text\">\n\t            <h3>\n\t              <a href=\"#\">Software Development<i class=\"flaticon-strategy\"></i></a>\n\t            </h3>\n\t          </div>\n\t        </div>\n\t        <div class=\"single-services\">\n\t          <img src=\"assets/img/services/2.jpg\" alt=\"\">\n\t          <div class=\"service-text\">\n\t            <h3>\n\t              <a href=\"#\">Website Development<i class=\"flaticon-strategy\"></i></a>\n\t            </h3>\n\t          </div>\n\t        </div>\n\t      </div>\n\t      <a class=\"default-btn\" href=\"services\">Read More</a>\n\t    </div>\n\t  </div>\n\t</section>\n\t<!-- End Services Area -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/preloader/preloader.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/preloader/preloader.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<div class=\"preloader\">\n\t  <div class=\"lds-ripple\">\n\t    <div></div>\n\t    <div></div>\n\t  </div>\n\t</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/process/process.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/process/process.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<!-- Start Processing Area -->\n\t<section class=\"processing-areac ptb-100\">\n\t  <div class=\"container\">\n\t    <div class=\"section-title\">\n\t      <span>Our Steps</span>\n\t      <h2>Our Steps Are Simple as 123...</h2>\n\t    </div>\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-3 col-sm-6 icon-color\">\n\t        <div class=\"single-processing\">\n\t          <span>1</span>\n\t          <div class=\"processing-icon\">\n\t            <i class=\"flaticon-interview\"></i>\n\t          </div>\n\t          <h3>Engage Us</h3>\n\t          <p>Let's know detailed information about your assignment/project</p>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-3 col-sm-6 icon-color\">\n\t        <div class=\"single-processing\">\n\t          <span>2</span>\n\t          <div class=\"processing-icon\">\n\t            <i class=\"flaticon-target\"></i>\n\t          </div>\n\t          <h3>Place Order</h3>\n\t          <p>Place your order and let's work on your assignment/project</p>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-3 col-sm-6 icon-color\">\n\t        <div class=\"single-processing\">\n\t          <span>3</span>\n\t          <div class=\"processing-icon\">\n\t            <i class=\"flaticon-target\"></i>\n\t          </div>\n\t          <h3>Make Down Payment</h3>\n\t          <p>Commit yourself by making an initial payment</p>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-3 col-sm-6 icon-color\">\n\t        <div class=\"single-processing\">\n\t          <span>4</span>\n\t          <div class=\"processing-icon\">\n\t            <i class=\"flaticon-money\"></i>\n\t          </div>\n\t          <h3>Complete Payment</h3>\n\t          <p>Everything looks good? Now pay the remaining amount</p>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n\t<!-- End Processing Area -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/slider/slider.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/slider/slider.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<section class=\"hero-slider-area\">\n\t  <div class=\"hero-slider owl-carousel owl-theme\">\n\t    <div class=\"hero-slider-item slider-item-bg-2\">\n\t      <div class=\"d-table\">\n\t        <div class=\"d-table-cell\">\n\t          <div class=\"container\">\n\t            <div class=\"hero-slider-text\">\n\t              <h1>Welcome To Eagle Freelance</h1>\n\t              <p>We are a freelance academic writing & software/web development agency...</p>\n\t              <div class=\"banner-button\">\n\t                <a class=\"default-btn\" href=\"contact\">\n\t                  Get Started\n\t                </a>\n\t              </div>\n\t            </div>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t    <div class=\"hero-slider-item slider-item-bg-1\">\n\t      <div class=\"d-table\">\n\t        <div class=\"d-table-cell\">\n\t          <div class=\"container\">\n\t            <div class=\"hero-slider-text\">\n\t              <h1>Get Your Assignments & Projects Done</h1>\n\t              <p>Let's work together....</p>\n\t              <div class=\"banner-button\">\n\t                <a class=\"default-btn\" href=\"contact\">\n\t                  Get Started\n\t                </a>\n\t              </div>\n\t            </div>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t  <div class=\"shape shape-1\">\n\t    <img src=\"assets/img/shape/1.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-3\">\n\t    <img src=\"assets/img/shape/3.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-4\">\n\t    <img src=\"assets/img/shape/4.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-5\">\n\t    <img src=\"assets/img/shape/5.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-6\">\n\t    <img src=\"assets/img/shape/6.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-7\">\n\t    <img src=\"assets/img/shape/7.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-8\">\n\t    <img src=\"assets/img/shape/1.png\" alt=\"Shape\">\n\t  </div>\n\t</section>\n\n\t<!-- <section class=\"banner-area\">\n\t  <div class=\"d-table\">\n\t    <div class=\"d-table-cell\">\n\t      <div class=\"container\">\n\t        <div class=\"row align-items-center\">\n\t          <div class=\"col-lg-8 col-md-8\">\n\t            <div class=\"banner-text\">\n\t              <h1>Welcome To Eagle Freelance Agency</h1>\n\t              <p>We are a freelance academic writing & software/web development agency...</p>\n\t              <div class=\"banner-button\">\n\t                <a class=\"default-btn\" href=\"book-table.html\">\n\t                  Let's Start\n\t                </a>\n\t              </div>\n\t            </div>\n\t          </div>\n\t          <div class=\"col-lg-4 col-md-4\">\n\t            <div class=\"video-wrap\">\n\t              <div class=\"video-btn-wrap\">\n\t                <a href=\"play-video.html\" class=\"video-btn\"\n\t                  data-ilb2-video='{\"controls\":\"controls\", \"autoplay\":false, \"sources\":[{\"src\":\"assets/img/business.mp4\", \"type\":\"video/mp4\"}]}'\n\t                  data-imagelightbox=\"video\">\n\t                  <i class=\"fa fa-play\"></i>\n\t                </a>\n\t              </div>\n\t            </div>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t  <div class=\"shape shape-1\">\n\t    <img src=\"assets/img/shape/1.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-3\">\n\t    <img src=\"assets/img/shape/3.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-4\">\n\t    <img src=\"assets/img/shape/4.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-5\">\n\t    <img src=\"assets/img/shape/5.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-9\">\n\t    <img src=\"assets/img/shape/5.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-6\">\n\t    <img src=\"assets/img/shape/6.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-10\">\n\t    <img src=\"assets/img/shape/6.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-7\">\n\t    <img src=\"assets/img/shape/7.png\" alt=\"Shape\">\n\t  </div>\n\t  <div class=\"shape shape-11\">\n\t    <img src=\"assets/img/shape/7.png\" alt=\"Shape\">\n\t  </div>\n\t</section> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/start-box/start-box.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/start-box/start-box.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<section class=\"box-area pb-70\">\n\t  <div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box bg-1\">\n\t          <i class=\"flaticon-statistics\"></i>\n\t          <h3>Professional Work</h3>\n\t          <p>Get your assignment or project done by a team of expert freelancers.</p>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box bg-2\">\n\t          <i class=\"flaticon-creativity\"></i>\n\t          <h3>Timely Feedback</h3>\n\t          <p>You get qaulity work done & submitted before the deadline.</p>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6 offset-md-3 offset-lg-0\">\n\t        <div class=\"single-box bg-3\">\n\t          <i class=\"flaticon-mortarboard\"></i>\n\t          <h3>Constant Communication</h3>\n\t          <p>We guarantee efficient communication between the freelances & the clients.</p>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n\n\n\t<!-- <section class=\"box-area pt-100 m-0 pb-70\">\n\t  <div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-4\">\n\t          <i class=\"flaticon-statistics\"></i>\n\t          <h3>Business Growth</h3>\n\t          <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt labore.</p>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-5\">\n\t          <i class=\"flaticon-creativity\"></i>\n\t          <h3>Strategy Process</h3>\n\t          <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt labore.</p>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6 offset-md-3 offset-lg-0\">\n\t        <div class=\"single-box single-box-2 bg-6\">\n\t          <i class=\"flaticon-mortarboard\"></i>\n\t          <h3>Finance Manage</h3>\n\t          <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt labore.</p>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/testimonials/testimonials.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/testimonials/testimonials.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"client-area client-page pt-100 pb-70\">\n  <!-- <section class=\"client-area ptb-100\"> -->\n  <div class=\"container\">\n    <div class=\"section-title\">\n      <span>Sample Reviews</span>\n      <h2>Hear What Our Clients Have To Say</h2>\n    </div>\n    <div class=\"row align-items-center client-bg\">\n      <div class=\"col-lg-6 p-0\">\n        <div class=\"client-img\">\n          <img src=\"assets/img/client-img/client-img.jpg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 p-0\">\n        <div class=\"client-details-wrap owl-carousel owl-theme\">\n          <div class=\"client-details\">\n            <img src=\"assets/img/client-img/1.jpg\" alt=\"\">\n            <h3>James Mwangi</h3>\n            <span>University Student</span>\n            <i class=\"flaticon-quote\"></i>\n            <p>Through the web development team of Eagle Freelance, we’ve been able to easily gain subscribers and\n              customers through the rich & robust\n              website they built for us. It’s thrilling to watch the numbers roll in.</p>\n            <ul>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n            </ul>\n          </div>\n          <div class=\"client-details\">\n            <img src=\"assets/img/client-img/2.jpg\" alt=\"\">\n            <h3>Ruth Opiyo</h3>\n            <span>University Student</span>\n            <i class=\"flaticon-quote\"></i>\n            <p>Through the web development team of Eagle Freelance, we’ve been able to easily gain subscribers and\n              customers through the rich & robust\n              website they built for us. It’s thrilling to watch the numbers roll in.</p>\n            <ul>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n            </ul>\n          </div>\n          <div class=\"client-details\">\n            <img src=\"assets/img/client-img/3.jpg\" alt=\"\">\n            <h3>Michael Mohamed</h3>\n            <span>Sales Manager</span>\n            <i class=\"flaticon-quote\"></i>\n            <p>Through the web development team of Eagle Freelance, we’ve been able to easily gain subscribers and\n              customers through the rich & robust\n              website they built for us. It’s thrilling to watch the numbers roll in.</p>\n            <ul>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n              <li>\n                <i class=\"fa fa-star\"></i>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/writers/writers.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/writers/writers.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<section class=\"team-area pt-100 pb-70\">\n\t  <div class=\"container\">\n\t    <div class=\"section-title\">\n\t      <span>Team Member</span>\n\t      <h2>Our Expert Team</h2>\n\t    </div>\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t        <div class=\"single-team\">\n\t          <div class=\"team-img\">\n\t            <img src=\"assets/img/team/1.jpg\" alt=\"\">\n\t            <ul class=\"team-icon\">\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-facebook\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-twitter\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-instagram \"></i>\n\t                </a>\n\t              </li>\n\t            </ul>\n\t          </div>\n\t          <div class=\"team-text\">\n\t            <h3>Alvin Pillar</h3>\n\t            <span>SR.Product Engineer</span>\n\t          </div>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t        <div class=\"single-team\">\n\t          <div class=\"team-img\">\n\t            <img src=\"assets/img/team/2.jpg\" alt=\"\">\n\t            <ul class=\"team-icon\">\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-facebook\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-twitter\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-instagram \"></i>\n\t                </a>\n\t              </li>\n\t            </ul>\n\t          </div>\n\t          <div class=\"team-text\">\n\t            <h3>Frazer Diamond</h3>\n\t            <span>Founder & CEO</span>\n\t          </div>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t        <div class=\"single-team\">\n\t          <div class=\"team-img\">\n\t            <img src=\"assets/img/team/3.jpg\" alt=\"\">\n\t            <ul class=\"team-icon\">\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-facebook\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-twitter\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-instagram \"></i>\n\t                </a>\n\t              </li>\n\t            </ul>\n\t          </div>\n\t          <div class=\"team-text\">\n\t            <h3>Frazer Diamond</h3>\n\t            <span>SR.Product Engineer</span>\n\t          </div>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t        <div class=\"single-team\">\n\t          <div class=\"team-img\">\n\t            <img src=\"assets/img/team/4.jpg\" alt=\"\">\n\t            <ul class=\"team-icon\">\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-facebook\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-twitter\"></i>\n\t                </a>\n\t              </li>\n\t              <li>\n\t                <a href=\"#\">\n\t                  <i class=\"fa fa-instagram \"></i>\n\t                </a>\n\t              </li>\n\t            </ul>\n\t          </div>\n\t          <div class=\"team-text\">\n\t            <h3>Denial Peterson</h3>\n\t            <span>Founder & CEO</span>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviews/reviews.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviews/reviews.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("    \t<!-- Start Preloader Area -->\n    \t<app-preloader></app-preloader>\n    \t<!-- End Preloader Area -->\n\n    \t<!-- Start Navbar Area -->\n    \t<app-header></app-header>\n    \t<!-- End Navbar Area -->\n    \t<!-- Start Page Title Area -->\n    \t<div class=\"page-title-area item-bg-1\">\n    \t  <div class=\"container\">\n    \t    <div class=\"page-title-content\">\n    \t      <h2>Reviews & Ratings</h2>\n    \t      <ul>\n    \t        <li>\n    \t          <a href=\"home\">\n    \t            Home\n    \t            <i class=\"fa fa-chevron-right\"></i>\n    \t          </a>\n    \t        </li>\n    \t        <li>Reviews & Ratings</li>\n    \t      </ul>\n    \t    </div>\n    \t  </div>\n    \t</div>\n    \t<!-- End Page Title Area -->\n\n    \t<!-- Start Client Area -->\n    \t<app-testimonials></app-testimonials>\n    \t<!-- End Client Area -->\n\n    \t<!-- Start Footer-->\n    \t<app-footer></app-footer>\n    \t<!-- End Footer-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/includes/academic-services/academic-services.component.html": 
        /*!***************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/includes/academic-services/academic-services.component.html ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<!-- Start Box Area -->\n\t<section class=\"box-area m-0 pt-100 pb-70\">\n\t  <div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-5\">\n\t          <i class=\"flaticon-creativity\"></i>\n\t          <h3>Academic Essays</h3>\n\t          <p>We write quality academic essays free from plagiarism from high school essays to PHD dessertation.</p>\n\t          <a class=\"default-btn\" href=\"services-details.html\">Read More</a>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-5\">\n\t          <i class=\"flaticon-pie-chart\"></i>\n\t          <h3>Research Proposals</h3>\n\t          <p>We write comprehensive and award winning research proposals to students for their projects.</p>\n\t          <a class=\"default-btn\" href=\"services-details.html\">Read More</a>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-5\">\n\t          <i class=\"flaticon-hand\"></i>\n\t          <h3>Research Papers</h3>\n\t          <p>We guarantee quality, original and comprehensive research papers to students.</p>\n\t          <a class=\"default-btn\" href=\"services-details.html\">Read More</a>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-5\">\n\t          <i class=\"flaticon-strategy\"></i>\n\t          <h3>English - Kiswahili Translations</h3>\n\t          <p>English to Kiswahili/Kiswahili to English translations made easy by our expert translation freelancers.\n\t          </p>\n\t          <a class=\"default-btn\" href=\"services-details.html\">Read More</a>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-6\">\n\t          <i class=\"flaticon-mortarboard\"></i>\n\t          <h3>Powerpoint Presentations</h3>\n\t          <p>We produce quality Powerpoint/Word presentations with nice animations and effects.</p>\n\t          <a class=\"default-btn\" href=\"services-details.html\">Read More</a>\n\t        </div>\n\t      </div>\n\t      <div class=\"col-lg-4 col-md-6\">\n\t        <div class=\"single-box single-box-2 bg-4\">\n\t          <i class=\"flaticon-statistics\"></i>\n\t          <h3>Proofreading Services</h3>\n\t          <p>Our freelancers are well equipped with advanced proofreading skills to handle your next assignment.</p>\n\t          <a class=\"default-btn\" href=\"services-details.html\">Read More</a>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n\t<!-- End Box Area -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/includes/software-services/software-services.component.html": 
        /*!***************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/includes/software-services/software-services.component.html ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\t<!-- Start Best Service Area -->\n\t<section class=\"best-services-area ptb-100\">\n\t  <div class=\"container\">\n\t    <div class=\"section-title\">\n\t      <span>Don't Miss Out</span>\n\t      <h2>Software & Website Development Services</h2>\n\t    </div>\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-12\">\n\t        <div class=\"tabs-area\">\n\t          <ul class=\"nav nav-pills d-sm-flex d-block text-center justify-content-between pt-15\" id=\"pills-tab\"\n\t            role=\"tablist\">\n\t            <li class=\"nav-item\">\n\t              <i class=\"flaticon-steering-wheel\"></i>\n\t              <a class=\"nav-link active\" id=\"pills-1-tab\" data-toggle=\"pill\" href=\"#pills-1\" role=\"tab\"\n\t                aria-controls=\"pills-1\" aria-selected=\"true\">\n\t                <i class=\"flaticon-pie-chart\"></i>\n\t                Software Development\n\t              </a>\n\t            </li>\n\n\t            <li class=\"nav-item\">\n\t              <a class=\"nav-link\" id=\"pills-2-tab\" data-toggle=\"pill\" href=\"#pills-2\" role=\"tab\"\n\t                aria-controls=\"pills-2\" aria-selected=\"false\">\n\t                <i class=\"flaticon-hand\"></i>\n\t                Website Development\n\t              </a>\n\t            </li>\n\n\t            <li class=\"nav-item\">\n\t              <i class=\"flaticon-tracking\"></i>\n\t              <a class=\"nav-link\" id=\"pills-3-tab\" data-toggle=\"pill\" href=\"#pills-3\" role=\"tab\"\n\t                aria-controls=\"pills-3\" aria-selected=\"false\">\n\t                <i class=\"flaticon-strategy\"></i>\n\t                Wordpress Development\n\t              </a>\n\t            </li>\n\n\t            <li class=\"nav-item\">\n\t              <a class=\"nav-link\" id=\"pills-4-tab\" data-toggle=\"pill\" href=\"#pills-4\" role=\"tab\"\n\t                aria-controls=\"pills-4\" aria-selected=\"false\">\n\t                <i class=\"flaticon-consultant\"></i>\n\t                Programming Assignments\n\t              </a>\n\t            </li>\n\n\t            <!-- <li class=\"nav-item\">\n\t              <i class=\"flaticon-van\"></i>\n\t              <a class=\"nav-link\" id=\"pills-5-tab\" data-toggle=\"pill\" href=\"#pills-5\" role=\"tab\"\n\t                aria-controls=\"pills-5\" aria-selected=\"false\">\n\t                <i class=\"flaticon-interview\"></i>\n\t                Best service\n\t              </a>\n\t            </li> -->\n\t          </ul>\n\t        </div>\n\n\t        <div class=\"tab-content\" id=\"pills-tabContent\">\n\t          <div class=\"tab-pane fade show active\" id=\"pills-1\" role=\"tabpanel\" aria-labelledby=\"pills-1-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/4.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Solutions For Your Software Needs</h3>\n\t                  <p>Our software development freelancers design & develop custom made software for your needs.\n\t                    The team has seen development of various software within the past 5 years. Talk to us today\n\t                    , share with us what you need to be built and we'll take care of it.\n\t                  </p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Point of Sale (POS) System\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      School Management System\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Hotel Booking System\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Project & CRM Management System\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Beauty Parlor Management System\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      HR Recruitment Management System\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Fleet Management System\n\t                    </li>\n\t                  </ul>\n\t                  <!-- <a class=\"default-btn\" href=\"services-details.html\">Discover More</a> -->\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\n\t          <div class=\"tab-pane fade\" id=\"pills-2\" role=\"tabpanel\" aria-labelledby=\"pills-2-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Get A Website For Your Brand</h3>\n\t                  <p>Our experts in web design & development always give the best to the clients in terms of\n\t                    corporate,personal websites are concerned. You get a well designed website that will convert\n\t                    visitors to customers.</p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Ecommerce Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Corporate Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Blogging Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Personal Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Information Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Banking Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      News & Magazine Websites\n\t                    </li>\n\t                  </ul>\n\t                  <!-- <a class=\"default-btn\" href=\"services-details.html\">Discover More</a> -->\n\t                </div>\n\t              </div>\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/3.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\n\t          <div class=\"tab-pane fade\" id=\"pills-3\" role=\"tabpanel\" aria-labelledby=\"pills-3-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/1.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Get A Wordpress Website With No Hustle</h3>\n\t                  <p>We use Wordpress to develop rich & robust websites for our clients within a span of 2 days. Our\n\t                    Wordpress\n\t                    freelancers are always on time when it comes to developing these websites as well as offering\n\t                    support to the clients.\n\t                  </p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Ecommerce Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Corporate Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Blogging Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Personal Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Information Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Banking Websites\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      News & Magazine Websites\n\t                    </li>\n\t                  </ul>\n\t                  <!-- <a class=\"default-btn\" href=\"services-details.html\">Discover More</a> -->\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\n\t          <div class=\"tab-pane fade\" id=\"pills-4\" role=\"tabpanel\" aria-labelledby=\"pills-4-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Get Help With Your Programming Assignment</h3>\n\t                  <p>Trouble with your programming assignment? Don't worry, we're here for you. Our expert programming\n\t                    freelancers are ready to help you.\n\t                    We have experts in PHP, Laravel, Codeigniter, Java, HTML, Python, Angular, React and many more.\n\t                  </p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      PHP Programming Assignments\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Database Assignments\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      HTML Assignments\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      CodeIgniter Assignments\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Laravel Assignments\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Angular Assignments\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      React Assignments\n\t                    </li>\n\t                  </ul>\n\t                  <!-- <a class=\"default-btn\" href=\"services-details.html\">Discover More</a> -->\n\t                </div>\n\t              </div>\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/2.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\t          <div class=\"tab-pane fade\" id=\"pills-5\" role=\"tabpanel\" aria-labelledby=\"pills-5-tab\">\n\t            <div class=\"row align-items-center\">\n\t              <div class=\"col-lg-4\">\n\t                <div class=\"best-service-img\">\n\t                  <img src=\"assets/img/best-service/1.jpg\" alt=\"Service\">\n\t                </div>\n\t              </div>\n\t              <div class=\"col-lg-8\">\n\t                <div class=\"best-service-area\">\n\t                  <h3>Solution For Your Finanacial help</h3>\n\t                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra\n\t                    maecenas accumsan lacus vel facilisis.</p>\n\t                  <ul>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Investment Service\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      SME Finance Advisory Finance\n\t                    </li>\n\t                    <li>\n\t                      <i class=\"flaticon-check-mark\"></i>\n\t                      Global SME Finance Facility\n\t                    </li>\n\t                  </ul>\n\t                  <a class=\"default-btn\" href=\"services-details.html\">Discover More</a>\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\n\t  </div>\n\t</section>\n\t<!-- End Best Service Area -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  \t<!-- Start Preloader Area -->\n  \t<app-preloader></app-preloader>\n  \t<!-- End Preloader Area -->\n\n  \t<!-- Start Navbar Area -->\n  \t<app-header></app-header>\n  \t<!-- End Navbar Area -->\n\n  \t<!-- Start Page Title Area -->\n  \t<div class=\"page-title-area item-bg-1\">\n  \t  <div class=\"container\">\n  \t    <div class=\"page-title-content\">\n  \t      <h2>Services</h2>\n  \t      <ul>\n  \t        <li>\n  \t          <a href=\"home\">\n  \t            Home\n  \t            <i class=\"fa fa-chevron-right\"></i>\n  \t          </a>\n  \t        </li>\n  \t        <li>Our Services</li>\n  \t      </ul>\n  \t    </div>\n  \t  </div>\n  \t</div>\n  \t<!-- End Page Title Area -->\n\n  \t<!-- Start Box Area -->\n  \t<app-academic-services></app-academic-services>\n  \t<!-- End Box Area -->\n\n  \t<!-- Start Box Area -->\n  \t<app-software-services></app-software-services>\n  \t<!-- End Box Area -->\n\n  \t<!-- Start Footer-->\n  \t<app-footer></app-footer>\n  \t<!-- End Footer-->\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
            /* harmony import */ var _components_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/assignments/assignments.component */ "./src/app/components/assignments/assignments.component.ts");
            /* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
            /* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            var routes = [
                { path: "", redirectTo: "/home", pathMatch: "full" },
                { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                { path: "about", component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
                { path: "services", component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"] },
                { path: "assignments", component: _components_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_2__["AssignmentsComponent"] },
                { path: "reviews", component: _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_1__["ReviewsComponent"] },
                { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'angular-project';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_home_includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/includes/footer/footer.component */ "./src/app/components/home/includes/footer/footer.component.ts");
            /* harmony import */ var _components_home_includes_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/includes/header/header.component */ "./src/app/components/home/includes/header/header.component.ts");
            /* harmony import */ var _components_home_includes_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/includes/slider/slider.component */ "./src/app/components/home/includes/slider/slider.component.ts");
            /* harmony import */ var _components_home_includes_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/includes/about/about.component */ "./src/app/components/home/includes/about/about.component.ts");
            /* harmony import */ var _components_home_includes_homepage_services_homepage_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/includes/homepage-services/homepage-services.component */ "./src/app/components/home/includes/homepage-services/homepage-services.component.ts");
            /* harmony import */ var _components_home_includes_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/includes/choose-us/choose-us.component */ "./src/app/components/home/includes/choose-us/choose-us.component.ts");
            /* harmony import */ var _components_home_includes_writers_writers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/includes/writers/writers.component */ "./src/app/components/home/includes/writers/writers.component.ts");
            /* harmony import */ var _components_home_includes_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/includes/testimonials/testimonials.component */ "./src/app/components/home/includes/testimonials/testimonials.component.ts");
            /* harmony import */ var _components_home_includes_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/includes/faqs/faqs.component */ "./src/app/components/home/includes/faqs/faqs.component.ts");
            /* harmony import */ var _components_home_includes_start_box_start_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/includes/start-box/start-box.component */ "./src/app/components/home/includes/start-box/start-box.component.ts");
            /* harmony import */ var _components_home_includes_process_process_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/includes/process/process.component */ "./src/app/components/home/includes/process/process.component.ts");
            /* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
            /* harmony import */ var _components_home_includes_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/includes/preloader/preloader.component */ "./src/app/components/home/includes/preloader/preloader.component.ts");
            /* harmony import */ var _components_about_us_includes_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/about-us/includes/page-title/page-title.component */ "./src/app/components/about-us/includes/page-title/page-title.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            /* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
            /* harmony import */ var _components_services_includes_academic_services_academic_services_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/services/includes/academic-services/academic-services.component */ "./src/app/components/services/includes/academic-services/academic-services.component.ts");
            /* harmony import */ var _components_services_includes_software_services_software_services_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/services/includes/software-services/software-services.component */ "./src/app/components/services/includes/software-services/software-services.component.ts");
            /* harmony import */ var _components_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/assignments/assignments.component */ "./src/app/components/assignments/assignments.component.ts");
            /* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_home_includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_home_includes_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_home_includes_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__["SliderComponent"], _components_home_includes_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _components_home_includes_homepage_services_homepage_services_component__WEBPACK_IMPORTED_MODULE_10__["HomepageServicesComponent"], _components_home_includes_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_11__["ChooseUsComponent"], _components_home_includes_writers_writers_component__WEBPACK_IMPORTED_MODULE_12__["WritersComponent"], _components_home_includes_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialsComponent"], _components_home_includes_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_home_includes_start_box_start_box_component__WEBPACK_IMPORTED_MODULE_15__["StartBoxComponent"], _components_home_includes_process_process_component__WEBPACK_IMPORTED_MODULE_16__["ProcessComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_17__["AboutUsComponent"], _components_home_includes_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_18__["PreloaderComponent"], _components_about_us_includes_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_19__["PageTitleComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_21__["ServicesComponent"], _components_services_includes_academic_services_academic_services_component__WEBPACK_IMPORTED_MODULE_22__["AcademicServicesComponent"], _components_services_includes_software_services_software_services_component__WEBPACK_IMPORTED_MODULE_23__["SoftwareServicesComponent"], _components_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_24__["AssignmentsComponent"], _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_25__["ReviewsComponent"]],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/about-us/about-us.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/about-us/about-us.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/about-us/about-us.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/about-us/about-us.component.ts ***!
          \***********************************************************/
        /*! exports provided: AboutUsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () { return AboutUsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutUsComponent = /** @class */ (function () {
                function AboutUsComponent() {
                }
                AboutUsComponent.prototype.ngOnInit = function () {
                };
                return AboutUsComponent;
            }());
            AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about-us',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")).default]
                })
            ], AboutUsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/about-us/includes/page-title/page-title.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/about-us/includes/page-title/page-title.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvaW5jbHVkZXMvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/about-us/includes/page-title/page-title.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/about-us/includes/page-title/page-title.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: PageTitleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function () { return PageTitleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageTitleComponent = /** @class */ (function () {
                function PageTitleComponent() {
                }
                PageTitleComponent.prototype.ngOnInit = function () {
                };
                return PageTitleComponent;
            }());
            PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-title',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/includes/page-title/page-title.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-title.component.css */ "./src/app/components/about-us/includes/page-title/page-title.component.css")).default]
                })
            ], PageTitleComponent);
            /***/ 
        }),
        /***/ "./src/app/components/assignments/assignments.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/assignments/assignments.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzaWdubWVudHMvYXNzaWdubWVudHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/assignments/assignments.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/assignments/assignments.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AssignmentsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function () { return AssignmentsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AssignmentsComponent = /** @class */ (function () {
                function AssignmentsComponent() {
                }
                AssignmentsComponent.prototype.ngOnInit = function () {
                };
                return AssignmentsComponent;
            }());
            AssignmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-assignments',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assignments/assignments.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assignments.component.css */ "./src/app/components/assignments/assignments.component.css")).default]
                })
            ], AssignmentsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/contact/contact.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/contact/contact.component.ts ***!
          \*********************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/about/about.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/home/includes/about/about.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/about/about.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/home/includes/about/about.component.ts ***!
          \*******************************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/home/includes/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/choose-us/choose-us.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/home/includes/choose-us/choose-us.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9jaG9vc2UtdXMvY2hvb3NlLXVzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/choose-us/choose-us.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/home/includes/choose-us/choose-us.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ChooseUsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseUsComponent", function () { return ChooseUsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ChooseUsComponent = /** @class */ (function () {
                function ChooseUsComponent() {
                }
                ChooseUsComponent.prototype.ngOnInit = function () {
                };
                return ChooseUsComponent;
            }());
            ChooseUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-choose-us',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choose-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/choose-us/choose-us.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choose-us.component.css */ "./src/app/components/home/includes/choose-us/choose-us.component.css")).default]
                })
            ], ChooseUsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/faqs/faqs.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/home/includes/faqs/faqs.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9mYXFzL2ZhcXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/faqs/faqs.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/home/includes/faqs/faqs.component.ts ***!
          \*****************************************************************/
        /*! exports provided: FaqsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function () { return FaqsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FaqsComponent = /** @class */ (function () {
                function FaqsComponent() {
                }
                FaqsComponent.prototype.ngOnInit = function () {
                };
                return FaqsComponent;
            }());
            FaqsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-faqs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faqs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/faqs/faqs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faqs.component.css */ "./src/app/components/home/includes/faqs/faqs.component.css")).default]
                })
            ], FaqsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/footer/footer.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/home/includes/footer/footer.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/footer/footer.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/home/includes/footer/footer.component.ts ***!
          \*********************************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                    this.currentDdate = new Date().getFullYear();
                }
                FooterComponent.prototype.ngOnInit = function () { };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-footer",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/home/includes/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/header/header.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/home/includes/header/header.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/header/header.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/home/includes/header/header.component.ts ***!
          \*********************************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/home/includes/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/homepage-services/homepage-services.component.css": 
        /*!********************************************************************************************!*\
          !*** ./src/app/components/home/includes/homepage-services/homepage-services.component.css ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9ob21lcGFnZS1zZXJ2aWNlcy9ob21lcGFnZS1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/homepage-services/homepage-services.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/components/home/includes/homepage-services/homepage-services.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: HomepageServicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageServicesComponent", function () { return HomepageServicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomepageServicesComponent = /** @class */ (function () {
                function HomepageServicesComponent() {
                }
                HomepageServicesComponent.prototype.ngOnInit = function () {
                };
                return HomepageServicesComponent;
            }());
            HomepageServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-homepage-services',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/homepage-services/homepage-services.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage-services.component.css */ "./src/app/components/home/includes/homepage-services/homepage-services.component.css")).default]
                })
            ], HomepageServicesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/preloader/preloader.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/home/includes/preloader/preloader.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9wcmVsb2FkZXIvcHJlbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/preloader/preloader.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/home/includes/preloader/preloader.component.ts ***!
          \***************************************************************************/
        /*! exports provided: PreloaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function () { return PreloaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PreloaderComponent = /** @class */ (function () {
                function PreloaderComponent() {
                }
                PreloaderComponent.prototype.ngOnInit = function () {
                };
                return PreloaderComponent;
            }());
            PreloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-preloader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preloader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/preloader/preloader.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preloader.component.css */ "./src/app/components/home/includes/preloader/preloader.component.css")).default]
                })
            ], PreloaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/process/process.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/home/includes/process/process.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9wcm9jZXNzL3Byb2Nlc3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/process/process.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/home/includes/process/process.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ProcessComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function () { return ProcessComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProcessComponent = /** @class */ (function () {
                function ProcessComponent() {
                }
                ProcessComponent.prototype.ngOnInit = function () {
                };
                return ProcessComponent;
            }());
            ProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-process',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/process/process.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process.component.css */ "./src/app/components/home/includes/process/process.component.css")).default]
                })
            ], ProcessComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/slider/slider.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/home/includes/slider/slider.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/slider/slider.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/home/includes/slider/slider.component.ts ***!
          \*********************************************************************/
        /*! exports provided: SliderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function () { return SliderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SliderComponent = /** @class */ (function () {
                function SliderComponent() {
                }
                SliderComponent.prototype.ngOnInit = function () {
                };
                return SliderComponent;
            }());
            SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-slider',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/slider/slider.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.css */ "./src/app/components/home/includes/slider/slider.component.css")).default]
                })
            ], SliderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/start-box/start-box.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/home/includes/start-box/start-box.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy9zdGFydC1ib3gvc3RhcnQtYm94LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/start-box/start-box.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/home/includes/start-box/start-box.component.ts ***!
          \***************************************************************************/
        /*! exports provided: StartBoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartBoxComponent", function () { return StartBoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StartBoxComponent = /** @class */ (function () {
                function StartBoxComponent() {
                }
                StartBoxComponent.prototype.ngOnInit = function () {
                };
                return StartBoxComponent;
            }());
            StartBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-start-box',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/start-box/start-box.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start-box.component.css */ "./src/app/components/home/includes/start-box/start-box.component.css")).default]
                })
            ], StartBoxComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/testimonials/testimonials.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/home/includes/testimonials/testimonials.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/testimonials/testimonials.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/home/includes/testimonials/testimonials.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: TestimonialsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function () { return TestimonialsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TestimonialsComponent = /** @class */ (function () {
                function TestimonialsComponent() {
                }
                TestimonialsComponent.prototype.ngOnInit = function () {
                };
                return TestimonialsComponent;
            }());
            TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-testimonials',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/testimonials/testimonials.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testimonials.component.css */ "./src/app/components/home/includes/testimonials/testimonials.component.css")).default]
                })
            ], TestimonialsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/writers/writers.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/home/includes/writers/writers.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbmNsdWRlcy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/home/includes/writers/writers.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/home/includes/writers/writers.component.ts ***!
          \***********************************************************************/
        /*! exports provided: WritersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritersComponent", function () { return WritersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WritersComponent = /** @class */ (function () {
                function WritersComponent() {
                }
                WritersComponent.prototype.ngOnInit = function () {
                };
                return WritersComponent;
            }());
            WritersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-writers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./writers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/includes/writers/writers.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./writers.component.css */ "./src/app/components/home/includes/writers/writers.component.css")).default]
                })
            ], WritersComponent);
            /***/ 
        }),
        /***/ "./src/app/components/reviews/reviews.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/reviews/reviews.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/reviews/reviews.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/reviews/reviews.component.ts ***!
          \*********************************************************/
        /*! exports provided: ReviewsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function () { return ReviewsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ReviewsComponent = /** @class */ (function () {
                function ReviewsComponent() {
                }
                ReviewsComponent.prototype.ngOnInit = function () {
                };
                return ReviewsComponent;
            }());
            ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-reviews',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reviews.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviews/reviews.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reviews.component.css */ "./src/app/components/reviews/reviews.component.css")).default]
                })
            ], ReviewsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/services/includes/academic-services/academic-services.component.css": 
        /*!************************************************************************************************!*\
          !*** ./src/app/components/services/includes/academic-services/academic-services.component.css ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvaW5jbHVkZXMvYWNhZGVtaWMtc2VydmljZXMvYWNhZGVtaWMtc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/services/includes/academic-services/academic-services.component.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/components/services/includes/academic-services/academic-services.component.ts ***!
          \***********************************************************************************************/
        /*! exports provided: AcademicServicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicServicesComponent", function () { return AcademicServicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AcademicServicesComponent = /** @class */ (function () {
                function AcademicServicesComponent() {
                }
                AcademicServicesComponent.prototype.ngOnInit = function () {
                };
                return AcademicServicesComponent;
            }());
            AcademicServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-academic-services',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./academic-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/includes/academic-services/academic-services.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./academic-services.component.css */ "./src/app/components/services/includes/academic-services/academic-services.component.css")).default]
                })
            ], AcademicServicesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/services/includes/software-services/software-services.component.css": 
        /*!************************************************************************************************!*\
          !*** ./src/app/components/services/includes/software-services/software-services.component.css ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvaW5jbHVkZXMvc29mdHdhcmUtc2VydmljZXMvc29mdHdhcmUtc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/services/includes/software-services/software-services.component.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/components/services/includes/software-services/software-services.component.ts ***!
          \***********************************************************************************************/
        /*! exports provided: SoftwareServicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareServicesComponent", function () { return SoftwareServicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SoftwareServicesComponent = /** @class */ (function () {
                function SoftwareServicesComponent() {
                }
                SoftwareServicesComponent.prototype.ngOnInit = function () {
                };
                return SoftwareServicesComponent;
            }());
            SoftwareServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-software-services',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./software-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/includes/software-services/software-services.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./software-services.component.css */ "./src/app/components/services/includes/software-services/software-services.component.css")).default]
                })
            ], SoftwareServicesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/services/services.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/services/services.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/services/services.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/services/services.component.ts ***!
          \***********************************************************/
        /*! exports provided: ServicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () { return ServicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ServicesComponent = /** @class */ (function () {
                function ServicesComponent() {
                }
                ServicesComponent.prototype.ngOnInit = function () {
                };
                return ServicesComponent;
            }());
            ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-services',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")).default]
                })
            ], ServicesComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/wananchigroup/AngularProjects/angular-project/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map