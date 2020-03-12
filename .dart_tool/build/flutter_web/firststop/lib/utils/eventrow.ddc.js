define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/intl/intl', 'packages/flutter/src/rendering/animated_size', 'packages/firststop/models/Event'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__intl__intl, packages__flutter__src__rendering__animated_size, packages__firststop__models__Event) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const fractional_offset = packages__flutter__src__painting___network_image_web.src__painting__fractional_offset;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const colors = packages__flutter__material.src__material__colors;
  const intl = packages__intl__intl.intl;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const Event = packages__firststop__models__Event.models__Event;
  var eventrow = Object.create(dart.library);
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var DateTimeToWidget = () => (DateTimeToWidget = dart.constFn(dart.fnType(framework.Widget, [core.DateTime])))();
  var JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Poppins",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 46,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 36,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 34,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 34,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 24
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/eventrow.dart"
      });
    }
  });
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C1;
  var C0;
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C4;
  var C7;
  var C8;
  var C6;
  var C5;
  var C11;
  var C10;
  var C9;
  var C14;
  var C15;
  var C13;
  var C12;
  var C18;
  var C17;
  var C16;
  var C21;
  var C20;
  var C19;
  var C24;
  var C25;
  var C23;
  var C22;
  var C28;
  var C27;
  var C26;
  var C31;
  var C32;
  var C30;
  var C29;
  var C35;
  var C36;
  var C37;
  var C38;
  var C34;
  var C33;
  var C41;
  var C42;
  var C40;
  var C39;
  var C45;
  var C44;
  var C43;
  var C48;
  var C47;
  var C46;
  var C51;
  var C50;
  var C49;
  var C54;
  var C55;
  var C53;
  var C52;
  var C58;
  var C57;
  var C56;
  var C61;
  var C60;
  var C59;
  var C64;
  var C63;
  var C62;
  var C67;
  var C66;
  var C65;
  var C70;
  var C69;
  var C68;
  var C73;
  var C74;
  var C72;
  var C71;
  var C77;
  var C78;
  var C79;
  var C76;
  var C75;
  var C82;
  var C83;
  var C84;
  var C81;
  var C80;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C85;
  var C88;
  var C87;
  var C86;
  var C91;
  var C92;
  var C93;
  var C90;
  var C89;
  var event$ = dart.privateName(eventrow, "EventRow.event");
  eventrow.EventRow = class EventRow extends framework.StatelessWidget {
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let eventThumbnail = new container.Container.new({margin: new edge_insets.EdgeInsets.symmetric({vertical: 16.0}), alignment: fractional_offset.FractionalOffset.centerLeft, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      let baseTextStyle = C4 || CT.C4;
      let regularTextStyle = baseTextStyle.copyWith({color: colors.Colors.white, fontSize: 12.0, fontWeight: ui.FontWeight.w400});
      let subHeaderTextStyle = regularTextStyle.copyWith({fontSize: 14.0});
      let headerTextStyle = baseTextStyle.copyWith({color: colors.Colors.white, fontSize: 16.0, fontWeight: ui.FontWeight.w500});
      function date(value) {
        let dateFormat = new intl.DateFormat.yMd();
        let ret = null;
        if (value == null) {
          ret = "N/A";
        } else {
          ret = dateFormat.format(value);
        }
        return new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new(ret, {style: regularTextStyle, $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
      }
      dart.fn(date, DateTimeToWidget());
      function time(value) {
        let dateFormat = new intl.DateFormat.jm();
        let ret = null;
        if (value == null) {
          ret = "N/A";
        } else {
          ret = dateFormat.format(value);
        }
        return new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new(ret, {style: regularTextStyle, $creationLocationd_0dea112b090073317d4: C12 || CT.C12})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
      }
      dart.fn(time, DateTimeToWidget());
      let planetCardContent = new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(30.0, 16.0, 16.0, 16.0), constraints: new box.BoxConstraints.expand(), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({height: 4.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new text.Text.new((t0 = this.event.summary, t0 == null ? "N/A" : t0), {style: headerTextStyle, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new container.Container.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new text.Text.new(this.event.status, {style: subHeaderTextStyle, $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new container.Container.new({margin: new edge_insets.EdgeInsets.symmetric({vertical: 8.0}), height: 2.0, width: 18.0, color: new ui.Color.new(4278241023), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new basic.Expanded.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("Start: ", {style: regularTextStyle, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new basic.Expanded.new({child: new basic.Row.new({children: JSArrayOfWidget().of([date((t0$ = this.event.start, t0$ == null ? null : t0$)), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), time((t0$0 = this.event.start, t0$0 == null ? null : t0$0))]), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new text.Text.new("End: ", {style: regularTextStyle, $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new basic.Expanded.new({child: new basic.Row.new({children: JSArrayOfWidget().of([date((t0$1 = this.event.end, t0$1 == null ? null : t0$1)), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), time((t0$2 = this.event.end, t0$2 == null ? null : t0$2))]), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62})]), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75});
      let eventCard = new container.Container.new({child: planetCardContent, height: 126.0, decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4278203238), shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(8.0), boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.black12, blurRadius: 10.0, offset: new ui.Offset.new(0.0, 10.0)})])}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
      return new container.Container.new({height: 120.0, margin: C85 || CT.C85, child: new basic.Stack.new({children: JSArrayOfWidget().of([eventCard, eventThumbnail]), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89});
    }
  };
  (eventrow.EventRow.new = function(event, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[event$] = event;
    eventrow.EventRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = eventrow.EventRow.prototype;
  dart.addTypeTests(eventrow.EventRow);
  dart.setMethodSignature(eventrow.EventRow, () => ({
    __proto__: dart.getMethods(eventrow.EventRow.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(eventrow.EventRow, "package:firststop/utils/eventrow.dart");
  dart.setFieldSignature(eventrow.EventRow, () => ({
    __proto__: dart.getFields(eventrow.EventRow.__proto__),
    event: dart.finalFieldType(Event.Event)
  }));
  dart.trackLibraries("packages/firststop/utils/eventrow", {
    "package:firststop/utils/eventrow.dart": eventrow
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["eventrow.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMc;;;;;;UAKc;;AAClB,2BAAqB,qCACb,gDACA,mBAEgB;AAQxB;AAGA,6BAAmB,AAAc,aAAD,kBACtB,+BACJ,kBACa;AAEnB,+BAAqB,AAAiB,gBAAD,qBAC/B;AAEN,4BAAkB,AAAc,aAAD,kBACrB,+BACJ,kBACa;AAGzB,eAAO,KAAc;AACR,yBAAkB;AACtB;AACP,YAAI,AAAM,KAAD,IAAI;AACA,UAAX,MAAM;;AAEwB,UAA9B,MAAM,AAAW,UAAD,QAAQ,KAAK;;AAG/B,cAAW,8BACS,sBACZ,kBAAK,GAAG,UAAS,gBAAgB;;;AAK3C,eAAO,KAAc;AACR,yBAAkB;AACtB;AAEP,YAAI,AAAM,KAAD,IAAI;AACA,UAAX,MAAM;;AAEwB,UAA9B,MAAM,AAAW,UAAD,QAAQ,KAAK;;AAE/B,cAAW,8BACS,sBACZ,kBAAK,GAAG,UAAS,gBAAgB;;;AAMrC,8BAAwB,qCAChB,oCAAoB,MAAM,MAAM,MAAM,oBACjC,wCACN,0CACgC,yCACrB,sBACZ,qCAAkB,8DAClB,mBAAmB,KAAd,AAAM,0BAAA,OAAW,qBAAc,eAAe,2DACnD,qCAAkB,+DAClB,kBAAK,AAAM,2BAAe,kBAAkB,2DAC5C,qCACU,gDAA+B,eACnC,YACD,aACI,iBAAM,sEAEnB,+BACyB,6BACH,sBACZ,kBAAK,mBAAkB,gBAAgB,2DACvC,+BACK,6BACa,sBAChB,AAAI,IAAA,EAAa,MAAZ,AAAM,yBAAA,OAAS,cACpB,+BAAgB,8DAChB,AAAI,IAAA,EAAa,OAAZ,AAAM,0BAAA,OAAS,mIAItB,kBAAK,iBAAgB,gBAAgB,2DACrC,+BACK,6BACa,sBAChB,AAAI,IAAA,EAAW,OAAV,AAAM,wBAAA,OAAO,eAClB,+BAAgB,8DAChB,AAAI,IAAA,EAAW,OAAV,AAAM,wBAAA,OAAO;AAYhC,sBAAgB,oCACb,iBAAiB,UAChB,mBACQ,6CACH,iBAAM,oBACD,6CACE,wCAAsB,iBAClB,yBAChB,qCACY,mCACF,cACA,kBAAO,KAAK;AAOhC,YAAW,sCACD,qCAKG,+BACS,sBAChB,SAAS,EACT,cAAc;IAItB;;oCAhJc;;;AAAd;;EAAoB","file":"eventrow.ddc.js"}');
  // Exports:
  return {
    utils__eventrow: eventrow
  };
});

//# sourceMappingURL=eventrow.ddc.js.map
