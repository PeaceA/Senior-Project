define(['dart_sdk', 'packages/flutter/src/rendering/animated_size', 'packages/simple_gesture_detector/simple_gesture_detector', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions', 'packages/intl/intl', 'packages/flutter/src/animation/animation', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__rendering__animated_size, packages__simple_gesture_detector__simple_gesture_detector, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions, packages__intl__intl, packages__flutter__src__animation__animation, packages__flutter__src__foundation___bitfield_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const table = packages__flutter__src__rendering__animated_size.src__rendering__table;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const simple_gesture_detector = packages__simple_gesture_detector__simple_gesture_detector.simple_gesture_detector;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const decoration = packages__flutter__src__painting___network_image_web.src__painting__decoration;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const dismissible = packages__flutter__src__widgets__actions.src__widgets__dismissible;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const animated_size = packages__flutter__src__widgets__actions.src__widgets__animated_size;
  const animated_switcher = packages__flutter__src__widgets__actions.src__widgets__animated_switcher;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const table$ = packages__flutter__src__widgets__actions.src__widgets__table;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const intl = packages__intl__intl.intl;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const ink_well = packages__flutter__material.src__material__ink_well;
  var table_calendar = Object.create(dart.library);
  var $keys = dartx.keys;
  var $contains = dartx.contains;
  var $length = dartx.length;
  var $isNotEmpty = dartx.isNotEmpty;
  var $every = dartx.every;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $insert = dartx.insert;
  var $skip = dartx.skip;
  var $take = dartx.take;
  var $toList = dartx.toList;
  var $map = dartx.map;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  var $where = dartx.where;
  var $entries = dartx.entries;
  var $first = dartx.first;
  var $last = dartx.last;
  var $indexOf = dartx.indexOf;
  var $modulo = dartx['%'];
  var $firstWhere = dartx.firstWhere;
  var intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  var WidgetAndAnimationOfdoubleToSizeTransition = () => (WidgetAndAnimationOfdoubleToSizeTransition = dart.constFn(dart.fnType(transitions.SizeTransition, [framework.Widget, AnimationOfdouble()])))();
  var ValueKeyOfCalendarFormat = () => (ValueKeyOfCalendarFormat = dart.constFn(key.ValueKey$(table_calendar.CalendarFormat)))();
  var SwipeDirectionToNull = () => (SwipeDirectionToNull = dart.constFn(dart.fnType(core.Null, [simple_gesture_detector.SwipeDirection])))();
  var TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  var WidgetAndAnimationOfdoubleToSlideTransition = () => (WidgetAndAnimationOfdoubleToSlideTransition = dart.constFn(dart.fnType(transitions.SlideTransition, [framework.Widget, AnimationOfdouble()])))();
  var ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  var WidgetAndListOfWidgetToWidget = () => (WidgetAndListOfWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.Widget, ListOfWidget()])))();
  var ValueKeyOfint = () => (ValueKeyOfint = dart.constFn(key.ValueKey$(core.int)))();
  var JSArrayOfTableRow = () => (JSArrayOfTableRow = dart.constFn(_interceptors.JSArray$(table$.TableRow)))();
  var DateTimeToWidget = () => (DateTimeToWidget = dart.constFn(dart.fnType(framework.Widget, [core.DateTime])))();
  var BuildContextAndBoxConstraintsToConstrainedBox = () => (BuildContextAndBoxConstraintsToConstrainedBox = dart.constFn(dart.fnType(basic.ConstrainedBox, [framework.BuildContext, box.BoxConstraints])))();
  var dynamicToWidget = () => (dynamicToWidget = dart.constFn(dart.fnType(framework.Widget, [dart.dynamic])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DateTimeTobool = () => (DateTimeTobool = dart.constFn(dart.fnType(core.bool, [core.DateTime])))();
  var LinkedMapOfDateTime$List = () => (LinkedMapOfDateTime$List = dart.constFn(_js_helper.LinkedMap$(core.DateTime, core.List)))();
  var MapOfDateTime$List = () => (MapOfDateTime$List = dart.constFn(core.Map$(core.DateTime, core.List)))();
  var MapEntryOfDateTime$List = () => (MapEntryOfDateTime$List = dart.constFn(core.MapEntry$(core.DateTime, core.List)))();
  var MapEntryOfDateTime$ListTobool = () => (MapEntryOfDateTime$ListTobool = dart.constFn(dart.fnType(core.bool, [MapEntryOfDateTime$List()])))();
  var ValueNotifierOfCalendarFormat = () => (ValueNotifierOfCalendarFormat = dart.constFn(change_notifier.ValueNotifier$(table_calendar.CalendarFormat)))();
  var ListOfDateTime = () => (ListOfDateTime = dart.constFn(core.List$(core.DateTime)))();
  var ValueNotifierOfListOfDateTime = () => (ValueNotifierOfListOfDateTime = dart.constFn(change_notifier.ValueNotifier$(ListOfDateTime())))();
  var SyncIterableOfDateTime = () => (SyncIterableOfDateTime = dart.constFn(_js_helper.SyncIterable$(core.DateTime)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: table_calendar.CalendarFormat.prototype,
        [_name$]: "CalendarFormat.month",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: table_calendar.CalendarFormat.prototype,
        [_name$]: "CalendarFormat.twoWeeks",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: table_calendar.CalendarFormat.prototype,
        [_name$]: "CalendarFormat.week",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], table_calendar.CalendarFormat);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: table_calendar.FormatAnimation.prototype,
        [_name$]: "FormatAnimation.slide",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: table_calendar.FormatAnimation.prototype,
        [_name$]: "FormatAnimation.scale",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.constList([C4 || CT.C4, C5 || CT.C5], table_calendar.FormatAnimation);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: table_calendar.StartingDayOfWeek.prototype,
        [_name$]: "StartingDayOfWeek.monday",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: table_calendar.StartingDayOfWeek.prototype,
        [_name$]: "StartingDayOfWeek.tuesday",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: table_calendar.StartingDayOfWeek.prototype,
        [_name$]: "StartingDayOfWeek.wednesday",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: table_calendar.StartingDayOfWeek.prototype,
        [_name$]: "StartingDayOfWeek.thursday",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: table_calendar.StartingDayOfWeek.prototype,
        [_name$]: "StartingDayOfWeek.friday",
        index: 4
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: table_calendar.StartingDayOfWeek.prototype,
        [_name$]: "StartingDayOfWeek.saturday",
        index: 5
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: table_calendar.StartingDayOfWeek.prototype,
        [_name$]: "StartingDayOfWeek.sunday",
        index: 6
      });
    },
    get C14() {
      return C14 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], table_calendar.StartingDayOfWeek);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: table_calendar.AvailableGestures.prototype,
        [_name$]: "AvailableGestures.none",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: table_calendar.AvailableGestures.prototype,
        [_name$]: "AvailableGestures.verticalSwipe",
        index: 1
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: table_calendar.AvailableGestures.prototype,
        [_name$]: "AvailableGestures.horizontalSwipe",
        index: 2
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: table_calendar.AvailableGestures.prototype,
        [_name$]: "AvailableGestures.all",
        index: 3
      });
    },
    get C19() {
      return C19 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], table_calendar.AvailableGestures);
    },
    get C20() {
      return C20 = dart.constMap(core.DateTime, core.List, []);
    },
    get C21() {
      return C21 = dart.constList([6, 7], core.int);
    },
    get C22() {
      return C22 = dart.constMap(table_calendar.CalendarFormat, core.String, [C0 || CT.C0, "Month", C1 || CT.C1, "2 weeks", C2 || CT.C2, "Week"]);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_name]: "HitTestBehavior.deferToChild",
        index: 0
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: simple_gesture_detector.SwipeDetectionBehavior.prototype,
        [_name$0]: "SwipeDetectionBehavior.continuousDistinct",
        index: 3
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: simple_gesture_detector.SimpleSwipeConfig.prototype,
        [SimpleSwipeConfig_swipeDetectionBehavior]: C25 || CT.C25,
        [SimpleSwipeConfig_horizontalThreshold]: 50,
        [SimpleSwipeConfig_verticalThreshold]: 25
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280693304.0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288653530.0
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284246976.0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290756543.0
      });
    },
    get C32() {
      return C32 = dart.const({
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
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C33 || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293892762.0
      });
    },
    get C34() {
      return C34 = dart.const({
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
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C35 || CT.C35,
        [TextStyle_inherit]: true
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288585374.0
      });
    },
    get C36() {
      return C36 = dart.const({
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
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C37 || CT.C37,
        [TextStyle_inherit]: true
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C38() {
      return C38 = dart.const({
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
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C39 || CT.C39,
        [TextStyle_inherit]: true
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294198070.0
      });
    },
    get C40() {
      return C40 = dart.const({
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
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C41 || CT.C41,
        [TextStyle_inherit]: true
      });
    },
    get C42() {
      return C42 = dart.const({
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
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: table_calendar.CalendarStyle.prototype,
        [CalendarStyle_highlightToday]: true,
        [CalendarStyle_highlightSelected]: true,
        [CalendarStyle_canEventMarkersOverflow]: false,
        [CalendarStyle_contentPadding]: C27 || CT.C27,
        [CalendarStyle_renderDaysOfWeek]: true,
        [CalendarStyle_renderSelectedFirst]: true,
        [CalendarStyle_outsideDaysVisible]: true,
        [CalendarStyle_markersMaxAmount]: 4,
        [CalendarStyle_markersPositionRight]: null,
        [CalendarStyle_markersPositionLeft]: null,
        [CalendarStyle_markersPositionBottom]: 5,
        [CalendarStyle_markersPositionTop]: null,
        [CalendarStyle_markersAlignment]: C28 || CT.C28,
        [CalendarStyle_markersColor]: C29 || CT.C29,
        [CalendarStyle_todayColor]: C30 || CT.C30,
        [CalendarStyle_selectedColor]: C31 || CT.C31,
        [CalendarStyle_unavailableStyle]: C32 || CT.C32,
        [CalendarStyle_outsideHolidayStyle]: C34 || CT.C34,
        [CalendarStyle_outsideWeekendStyle]: C34 || CT.C34,
        [CalendarStyle_outsideStyle]: C36 || CT.C36,
        [CalendarStyle_todayStyle]: C38 || CT.C38,
        [CalendarStyle_selectedStyle]: C38 || CT.C38,
        [CalendarStyle_holidayStyle]: C40 || CT.C40,
        [CalendarStyle_weekendStyle]: C40 || CT.C40,
        [CalendarStyle_weekdayStyle]: C42 || CT.C42
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284572001.0
      });
    },
    get C44() {
      return C44 = dart.const({
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
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C45 || CT.C45,
        [TextStyle_inherit]: true
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: table_calendar.DaysOfWeekStyle.prototype,
        [DaysOfWeekStyle_weekendStyle]: C40 || CT.C40,
        [DaysOfWeekStyle_weekdayStyle]: C44 || CT.C44,
        [DaysOfWeekStyle_dowTextBuilder]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$1]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C48 || CT.C48,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58828
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C50 || CT.C50,
        [Icon_size]: null,
        [Icon_icon]: C51 || CT.C51
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58827
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C50 || CT.C50,
        [Icon_size]: null,
        [Icon_icon]: C53 || CT.C53
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 12
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 10
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 0
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 12,
        [Radius_x]: 12
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C60 || CT.C60,
        [BorderRadius_bottomLeft]: C60 || CT.C60,
        [BorderRadius_topRight]: C60 || CT.C60,
        [BorderRadius_topLeft]: C60 || CT.C60
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$2]: "BorderStyle.solid",
        index: 1
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C63 || CT.C63,
        [BorderSide_width]: 1,
        [BorderSide_color]: C50 || CT.C50
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C62 || CT.C62,
        [Border_bottom]: C62 || CT.C62,
        [Border_right]: C62 || CT.C62,
        [Border_top]: C62 || CT.C62
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C48 || CT.C48,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: C59 || CT.C59,
        [BoxDecoration_border]: C61 || CT.C61,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C64() {
      return C64 = dart.const({
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
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: table_calendar.HeaderStyle.prototype,
        [HeaderStyle_decoration]: C47 || CT.C47,
        [HeaderStyle_rightChevronIcon]: C49 || CT.C49,
        [HeaderStyle_leftChevronIcon]: C52 || CT.C52,
        [HeaderStyle_rightChevronMargin]: C54 || CT.C54,
        [HeaderStyle_leftChevronMargin]: C54 || CT.C54,
        [HeaderStyle_rightChevronPadding]: C55 || CT.C55,
        [HeaderStyle_leftChevronPadding]: C55 || CT.C55,
        [HeaderStyle_formatButtonPadding]: C56 || CT.C56,
        [HeaderStyle_headerMargin]: null,
        [HeaderStyle_headerPadding]: C57 || CT.C57,
        [HeaderStyle_formatButtonDecoration]: C58 || CT.C58,
        [HeaderStyle_formatButtonTextStyle]: C42 || CT.C42,
        [HeaderStyle_titleTextStyle]: C64 || CT.C64,
        [HeaderStyle_titleTextBuilder]: null,
        [HeaderStyle_formatButtonShowsNext]: true,
        [HeaderStyle_formatButtonVisible]: true,
        [HeaderStyle_centerHeaderTitle]: false
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: table_calendar.CalendarBuilders.prototype,
        [CalendarBuilders_dowWeekendBuilder]: null,
        [CalendarBuilders_dowWeekdayBuilder]: null,
        [CalendarBuilders_singleMarkerBuilder]: null,
        [CalendarBuilders_markersBuilder]: null,
        [CalendarBuilders_unavailableDayBuilder]: null,
        [CalendarBuilders_outsideHolidayDayBuilder]: null,
        [CalendarBuilders_outsideWeekendDayBuilder]: null,
        [CalendarBuilders_outsideDayBuilder]: null,
        [CalendarBuilders_weekendDayBuilder]: null,
        [CalendarBuilders_holidayDayBuilder]: null,
        [CalendarBuilders_todayDayBuilder]: null,
        [CalendarBuilders_selectedDayBuilder]: null,
        [CalendarBuilders_dayBuilder]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 337,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 333,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 332,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 348,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 13,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLongPress",
        [_Location_column]: 11,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 355,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 354,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 367,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 8
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 380,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 397,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 397,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 394,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 392,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 408,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 9,
        [_Location_line]: 409,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vsync",
        [_Location_column]: 9,
        [_Location_line]: 411,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 407,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 350000
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 15,
        [_Location_line]: 421,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 420,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sizeFactor",
        [_Location_column]: 13,
        [_Location_line]: 419,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 418,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 416,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transitionBuilder",
        [_Location_column]: 9,
        [_Location_line]: 417,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 426,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 415,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 459,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 460,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 458,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalSwipe",
        [_Location_column]: 7,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "swipeConfig",
        [_Location_column]: 7,
        [_Location_line]: 472,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 465,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 11,
        [_Location_line]: 482,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 484,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 481,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 489,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeDuration",
        [_Location_column]: 9,
        [_Location_line]: 490,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDismissed",
        [_Location_column]: 9,
        [_Location_line]: 491,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 9,
        [_Location_line]: 492,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 488,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 7,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchInCurve",
        [_Location_column]: 7,
        [_Location_line]: 479,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transitionBuilder",
        [_Location_column]: 7,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "layoutBuilder",
        [_Location_column]: 7,
        [_Location_line]: 487,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 488,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170, C171 || CT.C171, C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 477,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultColumnWidth",
        [_Location_column]: 7,
        [_Location_line]: 512,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176, C177 || CT.C177], widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C175 || CT.C175,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 510,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 533,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 534,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180, C181 || CT.C181], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 532,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 532,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 531,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 549,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 553,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 548,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 548,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 547,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C193() {
      return C193 = dart.constList([], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 562,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 17,
        [_Location_line]: 594,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 595,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 593,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 589,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 15,
        [_Location_line]: 590,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 15,
        [_Location_line]: 591,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 15,
        [_Location_line]: 592,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 593,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200, C201 || CT.C201, C202 || CT.C202, C203 || CT.C203, C204 || CT.C204], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 588,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 607,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 608,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 11,
        [_Location_line]: 609,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208, C209 || CT.C209], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 606,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 615,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 616,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLongPress",
        [_Location_column]: 7,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.constList([C212 || CT.C212, C213 || CT.C213, C214 || CT.C214, C215 || CT.C215], widget_inspector._Location);
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C211 || CT.C211,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 614,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 664,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isUnavailable",
        [_Location_column]: 9,
        [_Location_line]: 665,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isSelected",
        [_Location_column]: 9,
        [_Location_line]: 666,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isToday",
        [_Location_column]: 9,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isWeekend",
        [_Location_column]: 9,
        [_Location_line]: 668,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isOutsideMonth",
        [_Location_column]: 9,
        [_Location_line]: 669,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isHoliday",
        [_Location_column]: 9,
        [_Location_line]: 670,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calendarStyle",
        [_Location_column]: 9,
        [_Location_line]: 671,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.constList([C218 || CT.C218, C219 || CT.C219, C220 || CT.C220, C221 || CT.C221, C222 || CT.C222, C223 || CT.C223, C224 || CT.C224, C225 || CT.C225], widget_inspector._Location);
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C217 || CT.C217,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 663,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0.3,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0.3
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 681,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 682,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 683,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 684,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230, C231 || CT.C231, C232 || CT.C232], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 680,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/calendar.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 604800000000.0
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 86400000000.0
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 6,
        [EdgeInsets_right]: 6,
        [EdgeInsets_top]: 6,
        [EdgeInsets_left]: 6
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C240 || CT.C240], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C238 || CT.C238,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/widgets/cell_widget.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243, C244 || CT.C244, C245 || CT.C245, C246 || CT.C246, C247 || CT.C247], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/widgets/cell_widget.dart"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.constList([C250 || CT.C250, C251 || CT.C251], widget_inspector._Location);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C249 || CT.C249,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/widgets/custom_icon_button.dart"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.constList([C254 || CT.C254, C255 || CT.C255, C256 || CT.C256], widget_inspector._Location);
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C253 || CT.C253,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/widgets/custom_icon_button.dart"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.constList([C259 || CT.C259, C260 || CT.C260], widget_inspector._Location);
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C258 || CT.C258,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/table_calendar/src/widgets/custom_icon_button.dart"
      });
    }
  });
  var _name$ = dart.privateName(table_calendar, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  table_calendar.CalendarFormat = class CalendarFormat extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (table_calendar.CalendarFormat.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = table_calendar.CalendarFormat.prototype;
  dart.addTypeTests(table_calendar.CalendarFormat);
  dart.setLibraryUri(table_calendar.CalendarFormat, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.CalendarFormat, () => ({
    __proto__: dart.getFields(table_calendar.CalendarFormat.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(table_calendar.CalendarFormat, ['toString']);
  table_calendar.CalendarFormat.month = C0 || CT.C0;
  table_calendar.CalendarFormat.twoWeeks = C1 || CT.C1;
  table_calendar.CalendarFormat.week = C2 || CT.C2;
  table_calendar.CalendarFormat.values = C3 || CT.C3;
  var C4;
  var C5;
  var C6;
  table_calendar.FormatAnimation = class FormatAnimation extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (table_calendar.FormatAnimation.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = table_calendar.FormatAnimation.prototype;
  dart.addTypeTests(table_calendar.FormatAnimation);
  dart.setLibraryUri(table_calendar.FormatAnimation, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.FormatAnimation, () => ({
    __proto__: dart.getFields(table_calendar.FormatAnimation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(table_calendar.FormatAnimation, ['toString']);
  table_calendar.FormatAnimation.slide = C4 || CT.C4;
  table_calendar.FormatAnimation.scale = C5 || CT.C5;
  table_calendar.FormatAnimation.values = C6 || CT.C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  table_calendar.StartingDayOfWeek = class StartingDayOfWeek extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (table_calendar.StartingDayOfWeek.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = table_calendar.StartingDayOfWeek.prototype;
  dart.addTypeTests(table_calendar.StartingDayOfWeek);
  dart.setLibraryUri(table_calendar.StartingDayOfWeek, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.StartingDayOfWeek, () => ({
    __proto__: dart.getFields(table_calendar.StartingDayOfWeek.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(table_calendar.StartingDayOfWeek, ['toString']);
  table_calendar.StartingDayOfWeek.monday = C7 || CT.C7;
  table_calendar.StartingDayOfWeek.tuesday = C8 || CT.C8;
  table_calendar.StartingDayOfWeek.wednesday = C9 || CT.C9;
  table_calendar.StartingDayOfWeek.thursday = C10 || CT.C10;
  table_calendar.StartingDayOfWeek.friday = C11 || CT.C11;
  table_calendar.StartingDayOfWeek.saturday = C12 || CT.C12;
  table_calendar.StartingDayOfWeek.sunday = C13 || CT.C13;
  table_calendar.StartingDayOfWeek.values = C14 || CT.C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  table_calendar.AvailableGestures = class AvailableGestures extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (table_calendar.AvailableGestures.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = table_calendar.AvailableGestures.prototype;
  dart.addTypeTests(table_calendar.AvailableGestures);
  dart.setLibraryUri(table_calendar.AvailableGestures, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.AvailableGestures, () => ({
    __proto__: dart.getFields(table_calendar.AvailableGestures.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(table_calendar.AvailableGestures, ['toString']);
  table_calendar.AvailableGestures.none = C15 || CT.C15;
  table_calendar.AvailableGestures.verticalSwipe = C16 || CT.C16;
  table_calendar.AvailableGestures.horizontalSwipe = C17 || CT.C17;
  table_calendar.AvailableGestures.all = C18 || CT.C18;
  table_calendar.AvailableGestures.values = C19 || CT.C19;
  var C20;
  var C21;
  var C22;
  var _name = dart.privateName(proxy_box, "_name");
  var C23;
  var _name$0 = dart.privateName(simple_gesture_detector, "_name");
  var C25;
  var SimpleSwipeConfig_swipeDetectionBehavior = dart.privateName(simple_gesture_detector, "SimpleSwipeConfig.swipeDetectionBehavior");
  var SimpleSwipeConfig_horizontalThreshold = dart.privateName(simple_gesture_detector, "SimpleSwipeConfig.horizontalThreshold");
  var SimpleSwipeConfig_verticalThreshold = dart.privateName(simple_gesture_detector, "SimpleSwipeConfig.verticalThreshold");
  var C24;
  var CalendarStyle_highlightToday = dart.privateName(table_calendar, "CalendarStyle.highlightToday");
  var CalendarStyle_highlightSelected = dart.privateName(table_calendar, "CalendarStyle.highlightSelected");
  var CalendarStyle_canEventMarkersOverflow = dart.privateName(table_calendar, "CalendarStyle.canEventMarkersOverflow");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C27;
  var CalendarStyle_contentPadding = dart.privateName(table_calendar, "CalendarStyle.contentPadding");
  var CalendarStyle_renderDaysOfWeek = dart.privateName(table_calendar, "CalendarStyle.renderDaysOfWeek");
  var CalendarStyle_renderSelectedFirst = dart.privateName(table_calendar, "CalendarStyle.renderSelectedFirst");
  var CalendarStyle_outsideDaysVisible = dart.privateName(table_calendar, "CalendarStyle.outsideDaysVisible");
  var CalendarStyle_markersMaxAmount = dart.privateName(table_calendar, "CalendarStyle.markersMaxAmount");
  var CalendarStyle_markersPositionRight = dart.privateName(table_calendar, "CalendarStyle.markersPositionRight");
  var CalendarStyle_markersPositionLeft = dart.privateName(table_calendar, "CalendarStyle.markersPositionLeft");
  var CalendarStyle_markersPositionBottom = dart.privateName(table_calendar, "CalendarStyle.markersPositionBottom");
  var CalendarStyle_markersPositionTop = dart.privateName(table_calendar, "CalendarStyle.markersPositionTop");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C28;
  var CalendarStyle_markersAlignment = dart.privateName(table_calendar, "CalendarStyle.markersAlignment");
  var Color_value = dart.privateName(ui, "Color.value");
  var C29;
  var CalendarStyle_markersColor = dart.privateName(table_calendar, "CalendarStyle.markersColor");
  var C30;
  var CalendarStyle_todayColor = dart.privateName(table_calendar, "CalendarStyle.todayColor");
  var C31;
  var CalendarStyle_selectedColor = dart.privateName(table_calendar, "CalendarStyle.selectedColor");
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
  var C33;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C32;
  var CalendarStyle_unavailableStyle = dart.privateName(table_calendar, "CalendarStyle.unavailableStyle");
  var C35;
  var C34;
  var CalendarStyle_outsideHolidayStyle = dart.privateName(table_calendar, "CalendarStyle.outsideHolidayStyle");
  var CalendarStyle_outsideWeekendStyle = dart.privateName(table_calendar, "CalendarStyle.outsideWeekendStyle");
  var C37;
  var C36;
  var CalendarStyle_outsideStyle = dart.privateName(table_calendar, "CalendarStyle.outsideStyle");
  var C39;
  var C38;
  var CalendarStyle_todayStyle = dart.privateName(table_calendar, "CalendarStyle.todayStyle");
  var CalendarStyle_selectedStyle = dart.privateName(table_calendar, "CalendarStyle.selectedStyle");
  var C41;
  var C40;
  var CalendarStyle_holidayStyle = dart.privateName(table_calendar, "CalendarStyle.holidayStyle");
  var CalendarStyle_weekendStyle = dart.privateName(table_calendar, "CalendarStyle.weekendStyle");
  var C42;
  var CalendarStyle_weekdayStyle = dart.privateName(table_calendar, "CalendarStyle.weekdayStyle");
  var C26;
  var DaysOfWeekStyle_weekendStyle = dart.privateName(table_calendar, "DaysOfWeekStyle.weekendStyle");
  var C45;
  var C44;
  var DaysOfWeekStyle_weekdayStyle = dart.privateName(table_calendar, "DaysOfWeekStyle.weekdayStyle");
  var DaysOfWeekStyle_dowTextBuilder = dart.privateName(table_calendar, "DaysOfWeekStyle.dowTextBuilder");
  var C43;
  var _name$1 = dart.privateName(box_border, "_name");
  var C48;
  var BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  var BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  var BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  var BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  var BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  var BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  var BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  var BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  var C47;
  var HeaderStyle_decoration = dart.privateName(table_calendar, "HeaderStyle.decoration");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var C50;
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var C51;
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var C49;
  var HeaderStyle_rightChevronIcon = dart.privateName(table_calendar, "HeaderStyle.rightChevronIcon");
  var C53;
  var C52;
  var HeaderStyle_leftChevronIcon = dart.privateName(table_calendar, "HeaderStyle.leftChevronIcon");
  var C54;
  var HeaderStyle_rightChevronMargin = dart.privateName(table_calendar, "HeaderStyle.rightChevronMargin");
  var HeaderStyle_leftChevronMargin = dart.privateName(table_calendar, "HeaderStyle.leftChevronMargin");
  var C55;
  var HeaderStyle_rightChevronPadding = dart.privateName(table_calendar, "HeaderStyle.rightChevronPadding");
  var HeaderStyle_leftChevronPadding = dart.privateName(table_calendar, "HeaderStyle.leftChevronPadding");
  var C56;
  var HeaderStyle_formatButtonPadding = dart.privateName(table_calendar, "HeaderStyle.formatButtonPadding");
  var HeaderStyle_headerMargin = dart.privateName(table_calendar, "HeaderStyle.headerMargin");
  var C57;
  var HeaderStyle_headerPadding = dart.privateName(table_calendar, "HeaderStyle.headerPadding");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C60;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C59;
  var _name$2 = dart.privateName(borders, "_name");
  var C63;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C62;
  var Border_left = dart.privateName(box_border, "Border.left");
  var Border_bottom = dart.privateName(box_border, "Border.bottom");
  var Border_right = dart.privateName(box_border, "Border.right");
  var Border_top = dart.privateName(box_border, "Border.top");
  var C61;
  var C58;
  var HeaderStyle_formatButtonDecoration = dart.privateName(table_calendar, "HeaderStyle.formatButtonDecoration");
  var HeaderStyle_formatButtonTextStyle = dart.privateName(table_calendar, "HeaderStyle.formatButtonTextStyle");
  var C64;
  var HeaderStyle_titleTextStyle = dart.privateName(table_calendar, "HeaderStyle.titleTextStyle");
  var HeaderStyle_titleTextBuilder = dart.privateName(table_calendar, "HeaderStyle.titleTextBuilder");
  var HeaderStyle_formatButtonShowsNext = dart.privateName(table_calendar, "HeaderStyle.formatButtonShowsNext");
  var HeaderStyle_formatButtonVisible = dart.privateName(table_calendar, "HeaderStyle.formatButtonVisible");
  var HeaderStyle_centerHeaderTitle = dart.privateName(table_calendar, "HeaderStyle.centerHeaderTitle");
  var C46;
  var CalendarBuilders_dowWeekendBuilder = dart.privateName(table_calendar, "CalendarBuilders.dowWeekendBuilder");
  var CalendarBuilders_dowWeekdayBuilder = dart.privateName(table_calendar, "CalendarBuilders.dowWeekdayBuilder");
  var CalendarBuilders_singleMarkerBuilder = dart.privateName(table_calendar, "CalendarBuilders.singleMarkerBuilder");
  var CalendarBuilders_markersBuilder = dart.privateName(table_calendar, "CalendarBuilders.markersBuilder");
  var CalendarBuilders_unavailableDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.unavailableDayBuilder");
  var CalendarBuilders_outsideHolidayDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.outsideHolidayDayBuilder");
  var CalendarBuilders_outsideWeekendDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.outsideWeekendDayBuilder");
  var CalendarBuilders_outsideDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.outsideDayBuilder");
  var CalendarBuilders_weekendDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.weekendDayBuilder");
  var CalendarBuilders_holidayDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.holidayDayBuilder");
  var CalendarBuilders_todayDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.todayDayBuilder");
  var CalendarBuilders_selectedDayBuilder = dart.privateName(table_calendar, "CalendarBuilders.selectedDayBuilder");
  var CalendarBuilders_dayBuilder = dart.privateName(table_calendar, "CalendarBuilders.dayBuilder");
  var C65;
  var calendarController$ = dart.privateName(table_calendar, "TableCalendar.calendarController");
  var locale$ = dart.privateName(table_calendar, "TableCalendar.locale");
  var events$ = dart.privateName(table_calendar, "TableCalendar.events");
  var holidays$ = dart.privateName(table_calendar, "TableCalendar.holidays");
  var onDaySelected$ = dart.privateName(table_calendar, "TableCalendar.onDaySelected");
  var onDayLongPressed$ = dart.privateName(table_calendar, "TableCalendar.onDayLongPressed");
  var onUnavailableDaySelected$ = dart.privateName(table_calendar, "TableCalendar.onUnavailableDaySelected");
  var onUnavailableDayLongPressed$ = dart.privateName(table_calendar, "TableCalendar.onUnavailableDayLongPressed");
  var onHeaderTapped$ = dart.privateName(table_calendar, "TableCalendar.onHeaderTapped");
  var onHeaderLongPressed$ = dart.privateName(table_calendar, "TableCalendar.onHeaderLongPressed");
  var onVisibleDaysChanged$ = dart.privateName(table_calendar, "TableCalendar.onVisibleDaysChanged");
  var initialSelectedDay$ = dart.privateName(table_calendar, "TableCalendar.initialSelectedDay");
  var startDay$ = dart.privateName(table_calendar, "TableCalendar.startDay");
  var endDay$ = dart.privateName(table_calendar, "TableCalendar.endDay");
  var weekendDays$ = dart.privateName(table_calendar, "TableCalendar.weekendDays");
  var initialCalendarFormat$ = dart.privateName(table_calendar, "TableCalendar.initialCalendarFormat");
  var availableCalendarFormats$ = dart.privateName(table_calendar, "TableCalendar.availableCalendarFormats");
  var headerVisible$ = dart.privateName(table_calendar, "TableCalendar.headerVisible");
  var enabledDayPredicate$ = dart.privateName(table_calendar, "TableCalendar.enabledDayPredicate");
  var rowHeight$ = dart.privateName(table_calendar, "TableCalendar.rowHeight");
  var formatAnimation$ = dart.privateName(table_calendar, "TableCalendar.formatAnimation");
  var startingDayOfWeek$ = dart.privateName(table_calendar, "TableCalendar.startingDayOfWeek");
  var dayHitTestBehavior$ = dart.privateName(table_calendar, "TableCalendar.dayHitTestBehavior");
  var availableGestures$ = dart.privateName(table_calendar, "TableCalendar.availableGestures");
  var simpleSwipeConfig$ = dart.privateName(table_calendar, "TableCalendar.simpleSwipeConfig");
  var calendarStyle$ = dart.privateName(table_calendar, "TableCalendar.calendarStyle");
  var daysOfWeekStyle$ = dart.privateName(table_calendar, "TableCalendar.daysOfWeekStyle");
  var headerStyle$ = dart.privateName(table_calendar, "TableCalendar.headerStyle");
  var builders$ = dart.privateName(table_calendar, "TableCalendar.builders");
  table_calendar.TableCalendar = class TableCalendar extends framework.StatefulWidget {
    get calendarController() {
      return this[calendarController$];
    }
    set calendarController(value) {
      super.calendarController = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get events() {
      return this[events$];
    }
    set events(value) {
      super.events = value;
    }
    get holidays() {
      return this[holidays$];
    }
    set holidays(value) {
      super.holidays = value;
    }
    get onDaySelected() {
      return this[onDaySelected$];
    }
    set onDaySelected(value) {
      super.onDaySelected = value;
    }
    get onDayLongPressed() {
      return this[onDayLongPressed$];
    }
    set onDayLongPressed(value) {
      super.onDayLongPressed = value;
    }
    get onUnavailableDaySelected() {
      return this[onUnavailableDaySelected$];
    }
    set onUnavailableDaySelected(value) {
      super.onUnavailableDaySelected = value;
    }
    get onUnavailableDayLongPressed() {
      return this[onUnavailableDayLongPressed$];
    }
    set onUnavailableDayLongPressed(value) {
      super.onUnavailableDayLongPressed = value;
    }
    get onHeaderTapped() {
      return this[onHeaderTapped$];
    }
    set onHeaderTapped(value) {
      super.onHeaderTapped = value;
    }
    get onHeaderLongPressed() {
      return this[onHeaderLongPressed$];
    }
    set onHeaderLongPressed(value) {
      super.onHeaderLongPressed = value;
    }
    get onVisibleDaysChanged() {
      return this[onVisibleDaysChanged$];
    }
    set onVisibleDaysChanged(value) {
      super.onVisibleDaysChanged = value;
    }
    get initialSelectedDay() {
      return this[initialSelectedDay$];
    }
    set initialSelectedDay(value) {
      super.initialSelectedDay = value;
    }
    get startDay() {
      return this[startDay$];
    }
    set startDay(value) {
      super.startDay = value;
    }
    get endDay() {
      return this[endDay$];
    }
    set endDay(value) {
      super.endDay = value;
    }
    get weekendDays() {
      return this[weekendDays$];
    }
    set weekendDays(value) {
      super.weekendDays = value;
    }
    get initialCalendarFormat() {
      return this[initialCalendarFormat$];
    }
    set initialCalendarFormat(value) {
      super.initialCalendarFormat = value;
    }
    get availableCalendarFormats() {
      return this[availableCalendarFormats$];
    }
    set availableCalendarFormats(value) {
      super.availableCalendarFormats = value;
    }
    get headerVisible() {
      return this[headerVisible$];
    }
    set headerVisible(value) {
      super.headerVisible = value;
    }
    get enabledDayPredicate() {
      return this[enabledDayPredicate$];
    }
    set enabledDayPredicate(value) {
      super.enabledDayPredicate = value;
    }
    get rowHeight() {
      return this[rowHeight$];
    }
    set rowHeight(value) {
      super.rowHeight = value;
    }
    get formatAnimation() {
      return this[formatAnimation$];
    }
    set formatAnimation(value) {
      super.formatAnimation = value;
    }
    get startingDayOfWeek() {
      return this[startingDayOfWeek$];
    }
    set startingDayOfWeek(value) {
      super.startingDayOfWeek = value;
    }
    get dayHitTestBehavior() {
      return this[dayHitTestBehavior$];
    }
    set dayHitTestBehavior(value) {
      super.dayHitTestBehavior = value;
    }
    get availableGestures() {
      return this[availableGestures$];
    }
    set availableGestures(value) {
      super.availableGestures = value;
    }
    get simpleSwipeConfig() {
      return this[simpleSwipeConfig$];
    }
    set simpleSwipeConfig(value) {
      super.simpleSwipeConfig = value;
    }
    get calendarStyle() {
      return this[calendarStyle$];
    }
    set calendarStyle(value) {
      super.calendarStyle = value;
    }
    get daysOfWeekStyle() {
      return this[daysOfWeekStyle$];
    }
    set daysOfWeekStyle(value) {
      super.daysOfWeekStyle = value;
    }
    get headerStyle() {
      return this[headerStyle$];
    }
    set headerStyle(value) {
      super.headerStyle = value;
    }
    get builders() {
      return this[builders$];
    }
    set builders(value) {
      super.builders = value;
    }
    createState() {
      return new table_calendar._TableCalendarState.new();
    }
  };
  (table_calendar.TableCalendar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let calendarController = opts && 'calendarController' in opts ? opts.calendarController : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let events = opts && 'events' in opts ? opts.events : C20 || CT.C20;
    let holidays = opts && 'holidays' in opts ? opts.holidays : C20 || CT.C20;
    let onDaySelected = opts && 'onDaySelected' in opts ? opts.onDaySelected : null;
    let onDayLongPressed = opts && 'onDayLongPressed' in opts ? opts.onDayLongPressed : null;
    let onUnavailableDaySelected = opts && 'onUnavailableDaySelected' in opts ? opts.onUnavailableDaySelected : null;
    let onUnavailableDayLongPressed = opts && 'onUnavailableDayLongPressed' in opts ? opts.onUnavailableDayLongPressed : null;
    let onHeaderTapped = opts && 'onHeaderTapped' in opts ? opts.onHeaderTapped : null;
    let onHeaderLongPressed = opts && 'onHeaderLongPressed' in opts ? opts.onHeaderLongPressed : null;
    let onVisibleDaysChanged = opts && 'onVisibleDaysChanged' in opts ? opts.onVisibleDaysChanged : null;
    let initialSelectedDay = opts && 'initialSelectedDay' in opts ? opts.initialSelectedDay : null;
    let startDay = opts && 'startDay' in opts ? opts.startDay : null;
    let endDay = opts && 'endDay' in opts ? opts.endDay : null;
    let weekendDays = opts && 'weekendDays' in opts ? opts.weekendDays : C21 || CT.C21;
    let initialCalendarFormat = opts && 'initialCalendarFormat' in opts ? opts.initialCalendarFormat : C0 || CT.C0;
    let availableCalendarFormats = opts && 'availableCalendarFormats' in opts ? opts.availableCalendarFormats : C22 || CT.C22;
    let headerVisible = opts && 'headerVisible' in opts ? opts.headerVisible : true;
    let enabledDayPredicate = opts && 'enabledDayPredicate' in opts ? opts.enabledDayPredicate : null;
    let rowHeight = opts && 'rowHeight' in opts ? opts.rowHeight : null;
    let formatAnimation = opts && 'formatAnimation' in opts ? opts.formatAnimation : C4 || CT.C4;
    let startingDayOfWeek = opts && 'startingDayOfWeek' in opts ? opts.startingDayOfWeek : C13 || CT.C13;
    let dayHitTestBehavior = opts && 'dayHitTestBehavior' in opts ? opts.dayHitTestBehavior : C23 || CT.C23;
    let availableGestures = opts && 'availableGestures' in opts ? opts.availableGestures : C18 || CT.C18;
    let simpleSwipeConfig = opts && 'simpleSwipeConfig' in opts ? opts.simpleSwipeConfig : C24 || CT.C24;
    let calendarStyle = opts && 'calendarStyle' in opts ? opts.calendarStyle : C26 || CT.C26;
    let daysOfWeekStyle = opts && 'daysOfWeekStyle' in opts ? opts.daysOfWeekStyle : C43 || CT.C43;
    let headerStyle = opts && 'headerStyle' in opts ? opts.headerStyle : C46 || CT.C46;
    let builders = opts && 'builders' in opts ? opts.builders : C65 || CT.C65;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[calendarController$] = calendarController;
    this[locale$] = locale;
    this[events$] = events;
    this[holidays$] = holidays;
    this[onDaySelected$] = onDaySelected;
    this[onDayLongPressed$] = onDayLongPressed;
    this[onUnavailableDaySelected$] = onUnavailableDaySelected;
    this[onUnavailableDayLongPressed$] = onUnavailableDayLongPressed;
    this[onHeaderTapped$] = onHeaderTapped;
    this[onHeaderLongPressed$] = onHeaderLongPressed;
    this[onVisibleDaysChanged$] = onVisibleDaysChanged;
    this[initialSelectedDay$] = initialSelectedDay;
    this[startDay$] = startDay;
    this[endDay$] = endDay;
    this[weekendDays$] = weekendDays;
    this[initialCalendarFormat$] = initialCalendarFormat;
    this[availableCalendarFormats$] = availableCalendarFormats;
    this[headerVisible$] = headerVisible;
    this[enabledDayPredicate$] = enabledDayPredicate;
    this[rowHeight$] = rowHeight;
    this[formatAnimation$] = formatAnimation;
    this[startingDayOfWeek$] = startingDayOfWeek;
    this[dayHitTestBehavior$] = dayHitTestBehavior;
    this[availableGestures$] = availableGestures;
    this[simpleSwipeConfig$] = simpleSwipeConfig;
    this[calendarStyle$] = calendarStyle;
    this[daysOfWeekStyle$] = daysOfWeekStyle;
    this[headerStyle$] = headerStyle;
    this[builders$] = builders;
    if (!(calendarController != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/calendar.dart", 196, 16, "calendarController != null");
    if (!dart.test(availableCalendarFormats[$keys][$contains](initialCalendarFormat))) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/calendar.dart", 197, 16, "availableCalendarFormats.keys.contains(initialCalendarFormat)");
    if (!(dart.notNull(availableCalendarFormats[$length]) <= dart.notNull(table_calendar.CalendarFormat.values[$length]))) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/calendar.dart", 198, 16, "availableCalendarFormats.length <= CalendarFormat.values.length");
    if (!(weekendDays != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/calendar.dart", 199, 16, "weekendDays != null");
    if (!dart.test(dart.test(weekendDays[$isNotEmpty]) ? weekendDays[$every](dart.fn(day => dart.notNull(day) >= 1 && dart.notNull(day) <= 7, intTobool())) : true)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/calendar.dart", 200, 16, "weekendDays.isNotEmpty\n            ? weekendDays.every((day) => day >= DateTime.monday && day <= DateTime.sunday)\n            : true");
    table_calendar.TableCalendar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = table_calendar.TableCalendar.prototype;
  dart.addTypeTests(table_calendar.TableCalendar);
  dart.setMethodSignature(table_calendar.TableCalendar, () => ({
    __proto__: dart.getMethods(table_calendar.TableCalendar.__proto__),
    createState: dart.fnType(table_calendar._TableCalendarState, [])
  }));
  dart.setLibraryUri(table_calendar.TableCalendar, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.TableCalendar, () => ({
    __proto__: dart.getFields(table_calendar.TableCalendar.__proto__),
    calendarController: dart.finalFieldType(table_calendar.CalendarController),
    locale: dart.finalFieldType(dart.dynamic),
    events: dart.finalFieldType(core.Map$(core.DateTime, core.List)),
    holidays: dart.finalFieldType(core.Map$(core.DateTime, core.List)),
    onDaySelected: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime, core.List])),
    onDayLongPressed: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime, core.List])),
    onUnavailableDaySelected: dart.finalFieldType(dart.fnType(dart.void, [])),
    onUnavailableDayLongPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    onHeaderTapped: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    onHeaderLongPressed: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    onVisibleDaysChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime, core.DateTime, table_calendar.CalendarFormat])),
    initialSelectedDay: dart.finalFieldType(core.DateTime),
    startDay: dart.finalFieldType(core.DateTime),
    endDay: dart.finalFieldType(core.DateTime),
    weekendDays: dart.finalFieldType(core.List$(core.int)),
    initialCalendarFormat: dart.finalFieldType(table_calendar.CalendarFormat),
    availableCalendarFormats: dart.finalFieldType(core.Map$(table_calendar.CalendarFormat, core.String)),
    headerVisible: dart.finalFieldType(core.bool),
    enabledDayPredicate: dart.finalFieldType(dart.fnType(core.bool, [core.DateTime])),
    rowHeight: dart.finalFieldType(core.double),
    formatAnimation: dart.finalFieldType(table_calendar.FormatAnimation),
    startingDayOfWeek: dart.finalFieldType(table_calendar.StartingDayOfWeek),
    dayHitTestBehavior: dart.finalFieldType(proxy_box.HitTestBehavior),
    availableGestures: dart.finalFieldType(table_calendar.AvailableGestures),
    simpleSwipeConfig: dart.finalFieldType(simple_gesture_detector.SimpleSwipeConfig),
    calendarStyle: dart.finalFieldType(table_calendar.CalendarStyle),
    daysOfWeekStyle: dart.finalFieldType(table_calendar.DaysOfWeekStyle),
    headerStyle: dart.finalFieldType(table_calendar.HeaderStyle),
    builders: dart.finalFieldType(table_calendar.CalendarBuilders)
  }));
  var _selectedDayCallback = dart.privateName(table_calendar, "_selectedDayCallback");
  var _init = dart.privateName(table_calendar, "_init");
  var _events = dart.privateName(table_calendar, "_events");
  var _holidays = dart.privateName(table_calendar, "_holidays");
  var _getEventKey = dart.privateName(table_calendar, "_getEventKey");
  var _selectPrevious = dart.privateName(table_calendar, "_selectPrevious");
  var _selectNext = dart.privateName(table_calendar, "_selectNext");
  var _selectDay = dart.privateName(table_calendar, "_selectDay");
  var _onDayLongPressed = dart.privateName(table_calendar, "_onDayLongPressed");
  var _toggleCalendarFormat = dart.privateName(table_calendar, "_toggleCalendarFormat");
  var _onHorizontalSwipe = dart.privateName(table_calendar, "_onHorizontalSwipe");
  var _onUnavailableDaySelected = dart.privateName(table_calendar, "_onUnavailableDaySelected");
  var _onUnavailableDayLongPressed = dart.privateName(table_calendar, "_onUnavailableDayLongPressed");
  var _onHeaderTapped = dart.privateName(table_calendar, "_onHeaderTapped");
  var _onHeaderLongPressed = dart.privateName(table_calendar, "_onHeaderLongPressed");
  var _normalizeDate = dart.privateName(table_calendar, "_normalizeDate");
  var _isDayEnabled = dart.privateName(table_calendar, "_isDayEnabled");
  var _isDayUnavailable = dart.privateName(table_calendar, "_isDayUnavailable");
  var _getHolidayKey = dart.privateName(table_calendar, "_getHolidayKey");
  var _buildHeader = dart.privateName(table_calendar, "_buildHeader");
  var _buildCalendarContent = dart.privateName(table_calendar, "_buildCalendarContent");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C68;
  var C69;
  var C67;
  var C66;
  var C72;
  var C73;
  var C71;
  var C70;
  var C76;
  var C75;
  var C74;
  var C79;
  var C80;
  var C81;
  var C82;
  var C78;
  var C77;
  var C85;
  var C86;
  var C87;
  var C84;
  var C83;
  var C90;
  var C91;
  var C92;
  var C89;
  var C88;
  var C95;
  var C94;
  var C93;
  var C98;
  var C99;
  var C100;
  var C101;
  var C97;
  var C96;
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var C102;
  var _buildFormatButton = dart.privateName(table_calendar, "_buildFormatButton");
  var C105;
  var C106;
  var C104;
  var C103;
  var C109;
  var C110;
  var C111;
  var C112;
  var C108;
  var C107;
  var _getFormatButtonText = dart.privateName(table_calendar, "_getFormatButtonText");
  var C115;
  var C116;
  var C114;
  var C113;
  var C119;
  var C120;
  var C121;
  var C118;
  var C117;
  var C124;
  var C125;
  var C123;
  var C122;
  var _buildWrapper = dart.privateName(table_calendar, "_buildWrapper");
  var C128;
  var C129;
  var C130;
  var C131;
  var C132;
  var C127;
  var C126;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C133;
  var C136;
  var C137;
  var C135;
  var C134;
  var C140;
  var C141;
  var C139;
  var C138;
  var C144;
  var C145;
  var C146;
  var C143;
  var C142;
  var _buildTable = dart.privateName(table_calendar, "_buildTable");
  var _buildHorizontalSwipeWrapper = dart.privateName(table_calendar, "_buildHorizontalSwipeWrapper");
  var _buildVerticalSwipeWrapper = dart.privateName(table_calendar, "_buildVerticalSwipeWrapper");
  var C149;
  var C150;
  var C148;
  var C147;
  var C153;
  var C154;
  var C155;
  var C152;
  var C151;
  var _dx = dart.privateName(table_calendar, "_dx");
  var C158;
  var C159;
  var C157;
  var C156;
  var _pageId = dart.privateName(table_calendar, "_pageId");
  var C162;
  var C163;
  var C164;
  var C165;
  var C166;
  var C161;
  var C160;
  var C169;
  var C170;
  var C171;
  var C172;
  var C173;
  var C168;
  var C167;
  var _buildDaysOfWeek = dart.privateName(table_calendar, "_buildDaysOfWeek");
  var _visibleDays = dart.privateName(table_calendar, "_visibleDays");
  var _buildTableRow = dart.privateName(table_calendar, "_buildTableRow");
  var C176;
  var C177;
  var C175;
  var C174;
  var _isWeekend = dart.privateName(table_calendar, "_isWeekend");
  var C180;
  var C181;
  var C179;
  var C178;
  var C184;
  var C183;
  var C182;
  var _buildTableCell = dart.privateName(table_calendar, "_buildTableCell");
  var _buildCell = dart.privateName(table_calendar, "_buildCell");
  var C187;
  var C188;
  var C186;
  var C185;
  var C191;
  var C190;
  var C189;
  var _isExtraDay = dart.privateName(table_calendar, "_isExtraDay");
  var C193;
  var C192;
  var _buildCellContent = dart.privateName(table_calendar, "_buildCellContent");
  var _buildMarker = dart.privateName(table_calendar, "_buildMarker");
  var C196;
  var C197;
  var C195;
  var C194;
  var C200;
  var C201;
  var C202;
  var C203;
  var C204;
  var C199;
  var C198;
  var C207;
  var C208;
  var C209;
  var C206;
  var C205;
  var C212;
  var C213;
  var C214;
  var C215;
  var C211;
  var C210;
  var C218;
  var C219;
  var C220;
  var C221;
  var C222;
  var C223;
  var C224;
  var C225;
  var C217;
  var C216;
  var C226;
  var C229;
  var C230;
  var C231;
  var C232;
  var C228;
  var C227;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(table_calendar.TableCalendar) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(table_calendar.TableCalendar)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(table_calendar.TableCalendar));
  table_calendar._TableCalendarState = class _TableCalendarState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this.widget.calendarController[_init]({events: this.widget.events, holidays: this.widget.holidays, initialDay: this.widget.initialSelectedDay, initialFormat: this.widget.initialCalendarFormat, availableCalendarFormats: this.widget.availableCalendarFormats, useNextCalendarFormat: this.widget.headerStyle.formatButtonShowsNext, startingDayOfWeek: this.widget.startingDayOfWeek, selectedDayCallback: dart.bind(this, _selectedDayCallback), onVisibleDaysChanged: this.widget.onVisibleDaysChanged, includeInvisibleDays: this.widget.calendarStyle.outsideDaysVisible});
    }
    didUpdateWidget(oldWidget) {
      table_calendar.TableCalendar._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(oldWidget.events, this.widget.events)) {
        this.widget.calendarController[_events] = this.widget.events;
      }
      if (!dart.equals(oldWidget.holidays, this.widget.holidays)) {
        this.widget.calendarController[_holidays] = this.widget.holidays;
      }
    }
    [_selectedDayCallback](day) {
      let t0;
      if (this.widget.onDaySelected != null) {
        this.widget.onDaySelected(day, (t0 = this.widget.calendarController.visibleEvents[$_get](this[_getEventKey](day)), t0 == null ? [] : t0));
      }
    }
    [_selectPrevious]() {
      this.setState(dart.fn(() => {
        this.widget.calendarController[_selectPrevious]();
      }, VoidToNull()));
    }
    [_selectNext]() {
      this.setState(dart.fn(() => {
        this.widget.calendarController[_selectNext]();
      }, VoidToNull()));
    }
    [_selectDay](day) {
      this.setState(dart.fn(() => {
        this.widget.calendarController.setSelectedDay(day, {isProgrammatic: false});
        this[_selectedDayCallback](day);
      }, VoidToNull()));
    }
    [_onDayLongPressed](day) {
      let t0;
      if (this.widget.onDayLongPressed != null) {
        this.widget.onDayLongPressed(day, (t0 = this.widget.calendarController.visibleEvents[$_get](this[_getEventKey](day)), t0 == null ? [] : t0));
      }
    }
    [_toggleCalendarFormat]() {
      this.setState(dart.fn(() => {
        this.widget.calendarController.toggleCalendarFormat();
      }, VoidToNull()));
    }
    [_onHorizontalSwipe](direction) {
      if (dart.equals(direction, dismissible.DismissDirection.startToEnd)) {
        this[_selectPrevious]();
      } else {
        this[_selectNext]();
      }
    }
    [_onUnavailableDaySelected]() {
      if (this.widget.onUnavailableDaySelected != null) {
        this.widget.onUnavailableDaySelected();
      }
    }
    [_onUnavailableDayLongPressed]() {
      if (this.widget.onUnavailableDayLongPressed != null) {
        this.widget.onUnavailableDayLongPressed();
      }
    }
    [_onHeaderTapped]() {
      if (this.widget.onHeaderTapped != null) {
        this.widget.onHeaderTapped(this.widget.calendarController.focusedDay);
      }
    }
    [_onHeaderLongPressed]() {
      if (this.widget.onHeaderLongPressed != null) {
        this.widget.onHeaderLongPressed(this.widget.calendarController.focusedDay);
      }
    }
    [_isDayUnavailable](day) {
      return this.widget.startDay != null && dart.test(day.isBefore(this.widget.calendarController[_normalizeDate](this.widget.startDay))) || this.widget.endDay != null && dart.test(day.isAfter(this.widget.calendarController[_normalizeDate](this.widget.endDay))) || !dart.test(this[_isDayEnabled](day));
    }
    [_isDayEnabled](day) {
      return this.widget.enabledDayPredicate == null ? true : this.widget.enabledDayPredicate(day);
    }
    [_getEventKey](day) {
      return this.widget.calendarController[_getEventKey](day);
    }
    [_getHolidayKey](day) {
      return this.widget.calendarController[_getHolidayKey](day);
    }
    build(context) {
      return new basic.ClipRect.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            if (dart.test(this.widget.headerVisible)) t0[$add](this[_buildHeader]());
            t0[$add](new basic.Padding.new({padding: this.widget.calendarStyle.contentPadding, child: this[_buildCalendarContent](), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74});
    }
    [_buildHeader]() {
      let children = JSArrayOfWidget().of([new table_calendar._CustomIconButton.new({icon: this.widget.headerStyle.leftChevronIcon, onTap: dart.bind(this, _selectPrevious), margin: this.widget.headerStyle.leftChevronMargin, padding: this.widget.headerStyle.leftChevronPadding, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new basic.Expanded.new({child: new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _onHeaderTapped), onLongPress: dart.bind(this, _onHeaderLongPressed), child: new text.Text.new(this.widget.headerStyle.titleTextBuilder != null ? this.widget.headerStyle.titleTextBuilder(this.widget.calendarController.focusedDay, this.widget.locale) : new intl.DateFormat.yMMMM(this.widget.locale).format(this.widget.calendarController.focusedDay), {style: this.widget.headerStyle.titleTextStyle, textAlign: dart.test(this.widget.headerStyle.centerHeaderTitle) ? ui.TextAlign.center : ui.TextAlign.start, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new table_calendar._CustomIconButton.new({icon: this.widget.headerStyle.rightChevronIcon, onTap: dart.bind(this, _selectNext), margin: this.widget.headerStyle.rightChevronMargin, padding: this.widget.headerStyle.rightChevronPadding, $creationLocationd_0dea112b090073317d4: C96 || CT.C96})]);
      if (dart.test(this.widget.headerStyle.formatButtonVisible) && dart.notNull(this.widget.availableCalendarFormats[$length]) > 1) {
        children[$insert](2, C102 || CT.C102);
        children[$insert](3, this[_buildFormatButton]());
      }
      return new container.Container.new({decoration: this.widget.headerStyle.decoration, margin: this.widget.headerStyle.headerMargin, padding: this.widget.headerStyle.headerPadding, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, children: children, $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107});
    }
    [_buildFormatButton]() {
      return new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _toggleCalendarFormat), child: new container.Container.new({decoration: this.widget.headerStyle.formatButtonDecoration, padding: this.widget.headerStyle.formatButtonPadding, child: new text.Text.new(this.widget.calendarController[_getFormatButtonText](), {style: this.widget.headerStyle.formatButtonTextStyle, $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122});
    }
    [_buildCalendarContent]() {
      if (dart.equals(this.widget.formatAnimation, table_calendar.FormatAnimation.slide)) {
        return new animated_size.AnimatedSize.new({duration: new core.Duration.new({milliseconds: dart.equals(this.widget.calendarController.calendarFormat, table_calendar.CalendarFormat.month) ? 330 : 220}), curve: curves.Curves.fastOutSlowIn, alignment: new alignment.Alignment.new(0.0, -1.0), vsync: this, child: this[_buildWrapper](), $creationLocationd_0dea112b090073317d4: C126 || CT.C126});
      } else {
        return new animated_switcher.AnimatedSwitcher.new({duration: C133 || CT.C133, transitionBuilder: dart.fn((child, animation) => new transitions.SizeTransition.new({sizeFactor: animation, child: new transitions.ScaleTransition.new({scale: animation, child: child, $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), WidgetAndAnimationOfdoubleToSizeTransition()), child: this[_buildWrapper]({key: new (ValueKeyOfCalendarFormat()).new(this.widget.calendarController.calendarFormat)}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142});
      }
    }
    [_buildWrapper](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let wrappedChild = this[_buildTable]();
      switch (this.widget.availableGestures) {
        case C18 || CT.C18:
        {
          wrappedChild = this[_buildVerticalSwipeWrapper]({child: this[_buildHorizontalSwipeWrapper]({child: wrappedChild})});
          break;
        }
        case C16 || CT.C16:
        {
          wrappedChild = this[_buildVerticalSwipeWrapper]({child: wrappedChild});
          break;
        }
        case C17 || CT.C17:
        {
          wrappedChild = this[_buildHorizontalSwipeWrapper]({child: wrappedChild});
          break;
        }
        case C15 || CT.C15:
        {
          break;
        }
      }
      return new container.Container.new({key: key, child: wrappedChild, $creationLocationd_0dea112b090073317d4: C147 || CT.C147});
    }
    [_buildVerticalSwipeWrapper](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new simple_gesture_detector.SimpleGestureDetector.new({child: child, onVerticalSwipe: dart.fn(direction => {
          this.setState(dart.fn(() => {
            this.widget.calendarController.swipeCalendarFormat({isSwipeUp: dart.equals(direction, simple_gesture_detector.SwipeDirection.up)});
          }, VoidToNull()));
        }, SwipeDirectionToNull()), swipeConfig: this.widget.simpleSwipeConfig, $creationLocationd_0dea112b090073317d4: C151 || CT.C151});
    }
    [_buildHorizontalSwipeWrapper](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new animated_switcher.AnimatedSwitcher.new({duration: C133 || CT.C133, switchInCurve: curves.Curves.decelerate, transitionBuilder: dart.fn((child, animation) => new transitions.SlideTransition.new({position: new (TweenOfOffset()).new({begin: new ui.Offset.new(this.widget.calendarController[_dx], 0.0), end: new ui.Offset.new(0.0, 0.0)}).animate(animation), child: child, $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), WidgetAndAnimationOfdoubleToSlideTransition()), layoutBuilder: dart.fn((currentChild, _) => currentChild, WidgetAndListOfWidgetToWidget()), child: new dismissible.Dismissible.new({key: new (ValueKeyOfint()).new(this.widget.calendarController[_pageId]), resizeDuration: null, onDismissed: dart.bind(this, _onHorizontalSwipe), direction: dismissible.DismissDirection.horizontal, child: child, $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), $creationLocationd_0dea112b090073317d4: C167 || CT.C167});
    }
    [_buildTable]() {
      let daysInWeek = 7;
      let children = (() => {
        let t1 = JSArrayOfTableRow().of([]);
        if (dart.test(this.widget.calendarStyle.renderDaysOfWeek)) t1[$add](this[_buildDaysOfWeek]());
        return t1;
      })();
      let x = 0;
      while (x < dart.notNull(this.widget.calendarController[_visibleDays].value[$length])) {
        children[$add](this[_buildTableRow](this.widget.calendarController[_visibleDays].value[$skip](x)[$take](daysInWeek)[$toList]()));
        x = x + daysInWeek;
      }
      return new table$.Table.new({defaultColumnWidth: new table.FractionColumnWidth.new(1.0 / daysInWeek), children: children, $creationLocationd_0dea112b090073317d4: C174 || CT.C174});
    }
    [_buildDaysOfWeek]() {
      return new table$.TableRow.new({children: this.widget.calendarController[_visibleDays].value[$take](7)[$map](framework.Widget, dart.fn(date => {
          let weekdayString = this.widget.daysOfWeekStyle.dowTextBuilder != null ? this.widget.daysOfWeekStyle.dowTextBuilder(date, this.widget.locale) : new intl.DateFormat.E(this.widget.locale).format(date);
          let isWeekend = this.widget.calendarController[_isWeekend](date, this.widget.weekendDays);
          if (dart.test(isWeekend) && this.widget.builders.dowWeekendBuilder != null) {
            return this.widget.builders.dowWeekendBuilder(this.context, weekdayString);
          }
          if (this.widget.builders.dowWeekdayBuilder != null) {
            return this.widget.builders.dowWeekdayBuilder(this.context, weekdayString);
          }
          return new basic.Center.new({child: new text.Text.new(weekdayString, {style: dart.test(isWeekend) ? this.widget.daysOfWeekStyle.weekendStyle : this.widget.daysOfWeekStyle.weekdayStyle, $creationLocationd_0dea112b090073317d4: C178 || CT.C178}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182});
        }, DateTimeToWidget()))[$toList]()});
    }
    [_buildTableRow](days) {
      return new table$.TableRow.new({children: days[$map](framework.Widget, dart.fn(date => this[_buildTableCell](date), DateTimeToWidget()))[$toList]()});
    }
    [_buildTableCell](date) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t2, t2$;
          return new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({maxHeight: (t2 = this.widget.rowHeight, t2 == null ? constraints.maxWidth : t2), minHeight: (t2$ = this.widget.rowHeight, t2$ == null ? constraints.maxWidth : t2$)}), child: this[_buildCell](date), $creationLocationd_0dea112b090073317d4: C185 || CT.C185});
        }, BuildContextAndBoxConstraintsToConstrainedBox()), $creationLocationd_0dea112b090073317d4: C189 || CT.C189});
    }
    [_buildCell](date) {
      let t2;
      if (!dart.test(this.widget.calendarStyle.outsideDaysVisible) && dart.test(this.widget.calendarController[_isExtraDay](date)) && dart.equals(this.widget.calendarController.calendarFormat, table_calendar.CalendarFormat.month)) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C192 || CT.C192});
      }
      let content = this[_buildCellContent](date);
      let eventKey = this[_getEventKey](date);
      let holidayKey = this[_getHolidayKey](date);
      let key = (t2 = eventKey, t2 == null ? holidayKey : t2);
      if (key != null) {
        let children = JSArrayOfWidget().of([content]);
        let events = eventKey != null ? this.widget.calendarController.visibleEvents[$_get](eventKey) : [];
        let holidays = holidayKey != null ? this.widget.calendarController.visibleHolidays[$_get](holidayKey) : [];
        if (!dart.test(this[_isDayUnavailable](date))) {
          if (this.widget.builders.markersBuilder != null) {
            children[$addAll](this.widget.builders.markersBuilder(this.context, key, events, holidays));
          } else {
            children[$add](new basic.Positioned.new({top: this.widget.calendarStyle.markersPositionTop, bottom: this.widget.calendarStyle.markersPositionBottom, left: this.widget.calendarStyle.markersPositionLeft, right: this.widget.calendarStyle.markersPositionRight, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: events[$take](this.widget.calendarStyle.markersMaxAmount)[$map](framework.Widget, dart.fn(event => this[_buildMarker](eventKey, event), dynamicToWidget()))[$toList](), $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}));
          }
        }
        if (dart.notNull(children[$length]) > 1) {
          content = new basic.Stack.new({alignment: this.widget.calendarStyle.markersAlignment, children: children, overflow: dart.test(this.widget.calendarStyle.canEventMarkersOverflow) ? stack.Overflow.visible : stack.Overflow.clip, $creationLocationd_0dea112b090073317d4: C205 || CT.C205});
        }
      }
      return new gesture_detector.GestureDetector.new({behavior: this.widget.dayHitTestBehavior, onTap: dart.fn(() => dart.test(this[_isDayUnavailable](date)) ? this[_onUnavailableDaySelected]() : this[_selectDay](date), VoidTovoid()), onLongPress: dart.fn(() => dart.test(this[_isDayUnavailable](date)) ? this[_onUnavailableDayLongPressed]() : this[_onDayLongPressed](date), VoidTovoid()), child: content, $creationLocationd_0dea112b090073317d4: C210 || CT.C210});
    }
    [_buildCellContent](date) {
      let eventKey = this[_getEventKey](date);
      let tIsUnavailable = this[_isDayUnavailable](date);
      let tIsSelected = this.widget.calendarController.isSelected(date);
      let tIsToday = this.widget.calendarController.isToday(date);
      let tIsOutside = this.widget.calendarController[_isExtraDay](date);
      let tIsHoliday = this.widget.calendarController.visibleHolidays[$containsKey](this[_getHolidayKey](date));
      let tIsWeekend = this.widget.calendarController[_isWeekend](date, this.widget.weekendDays);
      let isUnavailable = this.widget.builders.unavailableDayBuilder != null && dart.test(tIsUnavailable);
      let isSelected = this.widget.builders.selectedDayBuilder != null && dart.test(tIsSelected);
      let isToday = this.widget.builders.todayDayBuilder != null && dart.test(tIsToday);
      let isOutsideHoliday = this.widget.builders.outsideHolidayDayBuilder != null && dart.test(tIsOutside) && dart.test(tIsHoliday);
      let isHoliday = this.widget.builders.holidayDayBuilder != null && !dart.test(tIsOutside) && dart.test(tIsHoliday);
      let isOutsideWeekend = this.widget.builders.outsideWeekendDayBuilder != null && dart.test(tIsOutside) && dart.test(tIsWeekend) && !dart.test(tIsHoliday);
      let isOutside = this.widget.builders.outsideDayBuilder != null && dart.test(tIsOutside) && !dart.test(tIsWeekend) && !dart.test(tIsHoliday);
      let isWeekend = this.widget.builders.weekendDayBuilder != null && !dart.test(tIsOutside) && dart.test(tIsWeekend) && !dart.test(tIsHoliday);
      if (isUnavailable) {
        return this.widget.builders.unavailableDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isSelected && dart.test(this.widget.calendarStyle.renderSelectedFirst)) {
        return this.widget.builders.selectedDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isToday) {
        return this.widget.builders.todayDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isSelected) {
        return this.widget.builders.selectedDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isOutsideHoliday) {
        return this.widget.builders.outsideHolidayDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isHoliday) {
        return this.widget.builders.holidayDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isOutsideWeekend) {
        return this.widget.builders.outsideWeekendDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isOutside) {
        return this.widget.builders.outsideDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (isWeekend) {
        return this.widget.builders.weekendDayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else if (this.widget.builders.dayBuilder != null) {
        return this.widget.builders.dayBuilder(this.context, date, this.widget.calendarController.visibleEvents[$_get](eventKey));
      } else {
        return new table_calendar._CellWidget.new({text: dart.str(date.day), isUnavailable: tIsUnavailable, isSelected: tIsSelected, isToday: tIsToday, isWeekend: tIsWeekend, isOutsideMonth: tIsOutside, isHoliday: tIsHoliday, calendarStyle: this.widget.calendarStyle, $creationLocationd_0dea112b090073317d4: C216 || CT.C216});
      }
    }
    [_buildMarker](date, event) {
      if (this.widget.builders.singleMarkerBuilder != null) {
        return this.widget.builders.singleMarkerBuilder(this.context, date, event);
      } else {
        return new container.Container.new({width: 8.0, height: 8.0, margin: C226 || CT.C226, decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.calendarStyle.markersColor}), $creationLocationd_0dea112b090073317d4: C227 || CT.C227});
      }
    }
  };
  (table_calendar._TableCalendarState.new = function() {
    table_calendar._TableCalendarState.__proto__.new.call(this);
    ;
  }).prototype = table_calendar._TableCalendarState.prototype;
  dart.addTypeTests(table_calendar._TableCalendarState);
  dart.setMethodSignature(table_calendar._TableCalendarState, () => ({
    __proto__: dart.getMethods(table_calendar._TableCalendarState.__proto__),
    [_selectedDayCallback]: dart.fnType(dart.void, [core.DateTime]),
    [_selectPrevious]: dart.fnType(dart.void, []),
    [_selectNext]: dart.fnType(dart.void, []),
    [_selectDay]: dart.fnType(dart.void, [core.DateTime]),
    [_onDayLongPressed]: dart.fnType(dart.void, [core.DateTime]),
    [_toggleCalendarFormat]: dart.fnType(dart.void, []),
    [_onHorizontalSwipe]: dart.fnType(dart.void, [dismissible.DismissDirection]),
    [_onUnavailableDaySelected]: dart.fnType(dart.void, []),
    [_onUnavailableDayLongPressed]: dart.fnType(dart.void, []),
    [_onHeaderTapped]: dart.fnType(dart.void, []),
    [_onHeaderLongPressed]: dart.fnType(dart.void, []),
    [_isDayUnavailable]: dart.fnType(core.bool, [core.DateTime]),
    [_isDayEnabled]: dart.fnType(core.bool, [core.DateTime]),
    [_getEventKey]: dart.fnType(core.DateTime, [core.DateTime]),
    [_getHolidayKey]: dart.fnType(core.DateTime, [core.DateTime]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildHeader]: dart.fnType(framework.Widget, []),
    [_buildFormatButton]: dart.fnType(framework.Widget, []),
    [_buildCalendarContent]: dart.fnType(framework.Widget, []),
    [_buildWrapper]: dart.fnType(framework.Widget, [], {key: key.Key}, {}),
    [_buildVerticalSwipeWrapper]: dart.fnType(framework.Widget, [], {child: framework.Widget}, {}),
    [_buildHorizontalSwipeWrapper]: dart.fnType(framework.Widget, [], {child: framework.Widget}, {}),
    [_buildTable]: dart.fnType(framework.Widget, []),
    [_buildDaysOfWeek]: dart.fnType(table$.TableRow, []),
    [_buildTableRow]: dart.fnType(table$.TableRow, [core.List$(core.DateTime)]),
    [_buildTableCell]: dart.fnType(framework.Widget, [core.DateTime]),
    [_buildCell]: dart.fnType(framework.Widget, [core.DateTime]),
    [_buildCellContent]: dart.fnType(framework.Widget, [core.DateTime]),
    [_buildMarker]: dart.fnType(framework.Widget, [core.DateTime, dart.dynamic])
  }));
  dart.setLibraryUri(table_calendar._TableCalendarState, "package:table_calendar/table_calendar.dart");
  var _focusedDay = dart.privateName(table_calendar, "_focusedDay");
  var _selectedDay = dart.privateName(table_calendar, "_selectedDay");
  var _startingDayOfWeek = dart.privateName(table_calendar, "_startingDayOfWeek");
  var _calendarFormat = dart.privateName(table_calendar, "_calendarFormat");
  var _availableCalendarFormats = dart.privateName(table_calendar, "_availableCalendarFormats");
  var _previousFirstDay = dart.privateName(table_calendar, "_previousFirstDay");
  var _previousLastDay = dart.privateName(table_calendar, "_previousLastDay");
  var _useNextCalendarFormat = dart.privateName(table_calendar, "_useNextCalendarFormat");
  var _includeInvisibleDays = dart.privateName(table_calendar, "_includeInvisibleDays");
  var _isSameDay = dart.privateName(table_calendar, "_isSameDay");
  var _getVisibleDays = dart.privateName(table_calendar, "_getVisibleDays");
  var _getFirstDay = dart.privateName(table_calendar, "_getFirstDay");
  var _getLastDay = dart.privateName(table_calendar, "_getLastDay");
  var _nextFormat = dart.privateName(table_calendar, "_nextFormat");
  var _clamp = dart.privateName(table_calendar, "_clamp");
  var _decrementPage = dart.privateName(table_calendar, "_decrementPage");
  var _incrementPage = dart.privateName(table_calendar, "_incrementPage");
  var _updateVisibleDays = dart.privateName(table_calendar, "_updateVisibleDays");
  var _selectPreviousMonth = dart.privateName(table_calendar, "_selectPreviousMonth");
  var _selectPreviousTwoWeeks = dart.privateName(table_calendar, "_selectPreviousTwoWeeks");
  var _selectPreviousWeek = dart.privateName(table_calendar, "_selectPreviousWeek");
  var _selectNextMonth = dart.privateName(table_calendar, "_selectNextMonth");
  var _selectNextTwoWeeks = dart.privateName(table_calendar, "_selectNextTwoWeeks");
  var _selectNextWeek = dart.privateName(table_calendar, "_selectNextWeek");
  var _previousMonth = dart.privateName(table_calendar, "_previousMonth");
  var _nextMonth = dart.privateName(table_calendar, "_nextMonth");
  var _previousWeek = dart.privateName(table_calendar, "_previousWeek");
  var C233;
  var _nextWeek = dart.privateName(table_calendar, "_nextWeek");
  var _firstDayOfMonth = dart.privateName(table_calendar, "_firstDayOfMonth");
  var _lastDayOfMonth = dart.privateName(table_calendar, "_lastDayOfMonth");
  var _daysInMonth = dart.privateName(table_calendar, "_daysInMonth");
  var _daysInWeek = dart.privateName(table_calendar, "_daysInWeek");
  var _getDaysBefore = dart.privateName(table_calendar, "_getDaysBefore");
  var _getDaysAfter = dart.privateName(table_calendar, "_getDaysAfter");
  var _daysInRange = dart.privateName(table_calendar, "_daysInRange");
  var _firstDayOfWeek = dart.privateName(table_calendar, "_firstDayOfWeek");
  var _lastDayOfWeek = dart.privateName(table_calendar, "_lastDayOfWeek");
  var C234;
  var _isExtraDayBefore = dart.privateName(table_calendar, "_isExtraDayBefore");
  var _isExtraDayAfter = dart.privateName(table_calendar, "_isExtraDayAfter");
  table_calendar.CalendarController = class CalendarController extends core.Object {
    get focusedDay() {
      return this[_focusedDay];
    }
    get selectedDay() {
      return this[_selectedDay];
    }
    get calendarFormat() {
      return this[_calendarFormat].value;
    }
    get visibleDays() {
      return dart.equals(this.calendarFormat, table_calendar.CalendarFormat.month) && !dart.test(this[_includeInvisibleDays]) ? this[_visibleDays].value[$where](dart.fn(day => !dart.test(this[_isExtraDay](day)), DateTimeTobool()))[$toList]() : this[_visibleDays].value;
    }
    get visibleEvents() {
      if (this[_events] == null) {
        return new (LinkedMapOfDateTime$List()).new();
      }
      return MapOfDateTime$List().fromEntries(this[_events][$entries][$where](dart.fn(entry => {
        for (let day of this.visibleDays) {
          if (dart.test(this[_isSameDay](day, entry.key))) {
            return true;
          }
        }
        return false;
      }, MapEntryOfDateTime$ListTobool())));
    }
    get visibleHolidays() {
      if (this[_holidays] == null) {
        return new (LinkedMapOfDateTime$List()).new();
      }
      return MapOfDateTime$List().fromEntries(this[_holidays][$entries][$where](dart.fn(entry => {
        for (let day of this.visibleDays) {
          if (dart.test(this[_isSameDay](day, entry.key))) {
            return true;
          }
        }
        return false;
      }, MapEntryOfDateTime$ListTobool())));
    }
    [_init](opts) {
      let t2;
      let events = opts && 'events' in opts ? opts.events : null;
      let holidays = opts && 'holidays' in opts ? opts.holidays : null;
      let initialDay = opts && 'initialDay' in opts ? opts.initialDay : null;
      let initialFormat = opts && 'initialFormat' in opts ? opts.initialFormat : null;
      let availableCalendarFormats = opts && 'availableCalendarFormats' in opts ? opts.availableCalendarFormats : null;
      let useNextCalendarFormat = opts && 'useNextCalendarFormat' in opts ? opts.useNextCalendarFormat : null;
      let startingDayOfWeek = opts && 'startingDayOfWeek' in opts ? opts.startingDayOfWeek : null;
      let selectedDayCallback = opts && 'selectedDayCallback' in opts ? opts.selectedDayCallback : null;
      let onVisibleDaysChanged = opts && 'onVisibleDaysChanged' in opts ? opts.onVisibleDaysChanged : null;
      let includeInvisibleDays = opts && 'includeInvisibleDays' in opts ? opts.includeInvisibleDays : null;
      this[_events] = events;
      this[_holidays] = holidays;
      this[_availableCalendarFormats] = availableCalendarFormats;
      this[_startingDayOfWeek] = startingDayOfWeek;
      this[_useNextCalendarFormat] = useNextCalendarFormat;
      this[_selectedDayCallback] = selectedDayCallback;
      this[_includeInvisibleDays] = includeInvisibleDays;
      this[_pageId] = 0;
      this[_dx] = 0.0;
      let now = new core.DateTime.now();
      this[_focusedDay] = (t2 = initialDay, t2 == null ? this[_normalizeDate](now) : t2);
      this[_selectedDay] = this[_focusedDay];
      this[_calendarFormat] = new (ValueNotifierOfCalendarFormat()).new(initialFormat);
      this[_visibleDays] = new (ValueNotifierOfListOfDateTime()).new(this[_getVisibleDays]());
      this[_previousFirstDay] = this[_visibleDays].value[$first];
      this[_previousLastDay] = this[_visibleDays].value[$last];
      this[_calendarFormat].addListener(dart.fn(() => {
        this[_visibleDays].value = this[_getVisibleDays]();
      }, VoidToNull()));
      if (onVisibleDaysChanged != null) {
        this[_visibleDays].addListener(dart.fn(() => {
          if (!dart.test(this[_isSameDay](this[_visibleDays].value[$first], this[_previousFirstDay])) || !dart.test(this[_isSameDay](this[_visibleDays].value[$last], this[_previousLastDay]))) {
            this[_previousFirstDay] = this[_visibleDays].value[$first];
            this[_previousLastDay] = this[_visibleDays].value[$last];
            onVisibleDaysChanged(this[_getFirstDay]({includeInvisible: this[_includeInvisibleDays]}), this[_getLastDay]({includeInvisible: this[_includeInvisibleDays]}), this[_calendarFormat].value);
          }
        }, VoidToNull()));
      }
    }
    dispose() {
      let t2, t2$;
      t2 = this[_calendarFormat];
      t2 == null ? null : t2.dispose();
      t2$ = this[_visibleDays];
      t2$ == null ? null : t2$.dispose();
    }
    toggleCalendarFormat() {
      this[_calendarFormat].value = this[_nextFormat]();
    }
    swipeCalendarFormat(opts) {
      let isSwipeUp = opts && 'isSwipeUp' in opts ? opts.isSwipeUp : null;
      if (!(isSwipeUp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/calendar_controller.dart", 167, 12, "isSwipeUp != null");
      let formats = this[_availableCalendarFormats][$keys][$toList]();
      let id = formats[$indexOf](this[_calendarFormat].value);
      if (dart.test(isSwipeUp)) {
        id = this[_clamp](0, dart.notNull(formats[$length]) - 1, dart.notNull(id) + 1);
      } else {
        id = this[_clamp](0, dart.notNull(formats[$length]) - 1, dart.notNull(id) - 1);
      }
      this[_calendarFormat].value = formats[$_get](id);
    }
    setCalendarFormat(value) {
      this[_calendarFormat].value = value;
    }
    setSelectedDay(value, opts) {
      let isProgrammatic = opts && 'isProgrammatic' in opts ? opts.isProgrammatic : true;
      let animate = opts && 'animate' in opts ? opts.animate : true;
      let runCallback = opts && 'runCallback' in opts ? opts.runCallback : false;
      let normalizedDate = this[_normalizeDate](value);
      if (dart.test(animate)) {
        if (dart.test(normalizedDate.isBefore(this[_getFirstDay]({includeInvisible: false})))) {
          this[_decrementPage]();
        } else if (dart.test(normalizedDate.isAfter(this[_getLastDay]({includeInvisible: false})))) {
          this[_incrementPage]();
        }
      }
      this[_selectedDay] = normalizedDate;
      this[_focusedDay] = normalizedDate;
      this[_updateVisibleDays](isProgrammatic);
      if (dart.test(isProgrammatic) && dart.test(runCallback) && this[_selectedDayCallback] != null) {
        this[_selectedDayCallback](normalizedDate);
      }
    }
    setFocusedDay(value) {
      this[_focusedDay] = this[_normalizeDate](value);
      this[_updateVisibleDays](true);
    }
    [_updateVisibleDays](isProgrammatic) {
      if (!dart.equals(this.calendarFormat, table_calendar.CalendarFormat.twoWeeks) || dart.test(isProgrammatic)) {
        this[_visibleDays].value = this[_getVisibleDays]();
      }
    }
    [_nextFormat]() {
      let formats = this[_availableCalendarFormats][$keys][$toList]();
      let id = formats[$indexOf](this[_calendarFormat].value);
      id = (dart.notNull(id) + 1)[$modulo](formats[$length]);
      return formats[$_get](id);
    }
    [_getFormatButtonText]() {
      return dart.test(this[_useNextCalendarFormat]) ? this[_availableCalendarFormats][$_get](this[_nextFormat]()) : this[_availableCalendarFormats][$_get](this[_calendarFormat].value);
    }
    [_selectPrevious]() {
      if (dart.equals(this.calendarFormat, table_calendar.CalendarFormat.month)) {
        this[_selectPreviousMonth]();
      } else if (dart.equals(this.calendarFormat, table_calendar.CalendarFormat.twoWeeks)) {
        this[_selectPreviousTwoWeeks]();
      } else {
        this[_selectPreviousWeek]();
      }
      this[_visibleDays].value = this[_getVisibleDays]();
      this[_decrementPage]();
    }
    [_selectNext]() {
      if (dart.equals(this.calendarFormat, table_calendar.CalendarFormat.month)) {
        this[_selectNextMonth]();
      } else if (dart.equals(this.calendarFormat, table_calendar.CalendarFormat.twoWeeks)) {
        this[_selectNextTwoWeeks]();
      } else {
        this[_selectNextWeek]();
      }
      this[_visibleDays].value = this[_getVisibleDays]();
      this[_incrementPage]();
    }
    [_selectPreviousMonth]() {
      this[_focusedDay] = this[_previousMonth](this[_focusedDay]);
    }
    [_selectNextMonth]() {
      this[_focusedDay] = this[_nextMonth](this[_focusedDay]);
    }
    [_selectPreviousTwoWeeks]() {
      if (dart.test(this[_visibleDays].value[$take](7)[$contains](this[_focusedDay]))) {
        this[_focusedDay] = this[_previousWeek](this[_focusedDay]);
      } else {
        this[_focusedDay] = this[_previousWeek](this[_focusedDay].subtract(C233 || CT.C233));
      }
    }
    [_selectNextTwoWeeks]() {
      if (!dart.test(this[_visibleDays].value[$skip](7)[$contains](this[_focusedDay]))) {
        this[_focusedDay] = this[_nextWeek](this[_focusedDay]);
      }
    }
    [_selectPreviousWeek]() {
      this[_focusedDay] = this[_previousWeek](this[_focusedDay]);
    }
    [_selectNextWeek]() {
      this[_focusedDay] = this[_nextWeek](this[_focusedDay]);
    }
    [_getFirstDay](opts) {
      let includeInvisible = opts && 'includeInvisible' in opts ? opts.includeInvisible : null;
      if (dart.equals(this[_calendarFormat].value, table_calendar.CalendarFormat.month) && !dart.test(includeInvisible)) {
        return this[_firstDayOfMonth](this[_focusedDay]);
      } else {
        return this[_visibleDays].value[$first];
      }
    }
    [_getLastDay](opts) {
      let includeInvisible = opts && 'includeInvisible' in opts ? opts.includeInvisible : null;
      if (dart.equals(this[_calendarFormat].value, table_calendar.CalendarFormat.month) && !dart.test(includeInvisible)) {
        return this[_lastDayOfMonth](this[_focusedDay]);
      } else {
        return this[_visibleDays].value[$last];
      }
    }
    [_getVisibleDays]() {
      let t2;
      if (dart.equals(this.calendarFormat, table_calendar.CalendarFormat.month)) {
        return this[_daysInMonth](this[_focusedDay]);
      } else if (dart.equals(this.calendarFormat, table_calendar.CalendarFormat.twoWeeks)) {
        t2 = this[_daysInWeek](this[_focusedDay]);
        t2[$addAll](this[_daysInWeek](this[_focusedDay].add(C233 || CT.C233)));
        return t2;
      } else {
        return this[_daysInWeek](this[_focusedDay]);
      }
    }
    [_decrementPage]() {
      this[_pageId] = dart.notNull(this[_pageId]) - 1;
      this[_dx] = -1.2;
    }
    [_incrementPage]() {
      this[_pageId] = dart.notNull(this[_pageId]) + 1;
      this[_dx] = 1.2;
    }
    [_daysInMonth](month) {
      let first = this[_firstDayOfMonth](month);
      let daysBefore = this[_getDaysBefore](first);
      let firstToDisplay = first.subtract(new core.Duration.new({days: daysBefore}));
      let last = this[_lastDayOfMonth](month);
      let daysAfter = this[_getDaysAfter](last);
      let lastToDisplay = last.add(new core.Duration.new({days: daysAfter}));
      return this[_daysInRange](firstToDisplay, lastToDisplay)[$toList]();
    }
    [_getDaysBefore](firstDay) {
      return (dart.notNull(firstDay.weekday) + 7 - dart.notNull(table_calendar._getWeekdayNumber(this[_startingDayOfWeek])))[$modulo](7);
    }
    [_getDaysAfter](lastDay) {
      let invertedStartingWeekday = 8 - dart.notNull(table_calendar._getWeekdayNumber(this[_startingDayOfWeek]));
      let daysAfter = 7 - (dart.notNull(lastDay.weekday) + invertedStartingWeekday)[$modulo](7) + 1;
      if (daysAfter === 8) {
        daysAfter = 1;
      }
      return daysAfter;
    }
    [_daysInWeek](week) {
      let first = this[_firstDayOfWeek](week);
      let last = this[_lastDayOfWeek](week);
      return this[_daysInRange](first, last)[$toList]();
    }
    [_firstDayOfWeek](day) {
      day = this[_normalizeDate](day);
      let decreaseNum = this[_getDaysBefore](day);
      return day.subtract(new core.Duration.new({days: decreaseNum}));
    }
    [_lastDayOfWeek](day) {
      day = this[_normalizeDate](day);
      let increaseNum = this[_getDaysBefore](day);
      return day.add(new core.Duration.new({days: 7 - dart.notNull(increaseNum)}));
    }
    [_firstDayOfMonth](month) {
      return new core.DateTime.utc(month.year, month.month, 1, 12);
    }
    [_lastDayOfMonth](month) {
      let date = dart.notNull(month.month) < 12 ? new core.DateTime.utc(month.year, dart.notNull(month.month) + 1, 1, 12) : new core.DateTime.utc(dart.notNull(month.year) + 1, 1, 1, 12);
      return date.subtract(C234 || CT.C234);
    }
    [_previousWeek](week) {
      return week.subtract(C233 || CT.C233);
    }
    [_nextWeek](week) {
      return week.add(C233 || CT.C233);
    }
    [_previousMonth](month) {
      if (month.month === 1) {
        return new core.DateTime.new(dart.notNull(month.year) - 1, 12);
      } else {
        return new core.DateTime.new(month.year, dart.notNull(month.month) - 1);
      }
    }
    [_nextMonth](month) {
      if (month.month === 12) {
        return new core.DateTime.new(dart.notNull(month.year) + 1, 1);
      } else {
        return new core.DateTime.new(month.year, dart.notNull(month.month) + 1);
      }
    }
    [_daysInRange](firstDay, lastDay) {
      return new (SyncIterableOfDateTime()).new((function* _daysInRange() {
        let temp = firstDay;
        while (dart.test(temp.isBefore(lastDay))) {
          yield this[_normalizeDate](temp);
          temp = temp.add(C234 || CT.C234);
        }
      }).bind(this));
    }
    [_normalizeDate](value) {
      return new core.DateTime.utc(value.year, value.month, value.day, 12);
    }
    [_getEventKey](day) {
      return this.visibleEvents[$keys][$firstWhere](dart.fn(it => this[_isSameDay](it, day), DateTimeTobool()), {orElse: dart.fn(() => null, VoidToNull())});
    }
    [_getHolidayKey](day) {
      return this.visibleHolidays[$keys][$firstWhere](dart.fn(it => this[_isSameDay](it, day), DateTimeTobool()), {orElse: dart.fn(() => null, VoidToNull())});
    }
    isSelected(day) {
      return this[_isSameDay](day, this.selectedDay);
    }
    isToday(day) {
      return this[_isSameDay](day, new core.DateTime.now());
    }
    [_isSameDay](dayA, dayB) {
      return dayA.year == dayB.year && dayA.month == dayB.month && dayA.day == dayB.day;
    }
    [_isWeekend](day, weekendDays) {
      return weekendDays[$contains](day.weekday);
    }
    [_isExtraDay](day) {
      return dart.test(this[_isExtraDayBefore](day)) || dart.test(this[_isExtraDayAfter](day));
    }
    [_isExtraDayBefore](day) {
      return dart.notNull(day.month) < dart.notNull(this[_focusedDay].month);
    }
    [_isExtraDayAfter](day) {
      return dart.notNull(day.month) > dart.notNull(this[_focusedDay].month);
    }
    [_clamp](min, max, value) {
      if (dart.notNull(value) > dart.notNull(max)) {
        return max;
      } else if (dart.notNull(value) < dart.notNull(min)) {
        return min;
      } else {
        return value;
      }
    }
  };
  (table_calendar.CalendarController.new = function() {
    this[_events] = null;
    this[_holidays] = null;
    this[_focusedDay] = null;
    this[_selectedDay] = null;
    this[_startingDayOfWeek] = null;
    this[_calendarFormat] = null;
    this[_visibleDays] = null;
    this[_availableCalendarFormats] = null;
    this[_previousFirstDay] = null;
    this[_previousLastDay] = null;
    this[_pageId] = null;
    this[_dx] = null;
    this[_useNextCalendarFormat] = null;
    this[_includeInvisibleDays] = null;
    this[_selectedDayCallback] = null;
    ;
  }).prototype = table_calendar.CalendarController.prototype;
  dart.addTypeTests(table_calendar.CalendarController);
  dart.setMethodSignature(table_calendar.CalendarController, () => ({
    __proto__: dart.getMethods(table_calendar.CalendarController.__proto__),
    [_init]: dart.fnType(dart.void, [], {availableCalendarFormats: core.Map$(table_calendar.CalendarFormat, core.String), events: core.Map$(core.DateTime, core.List), holidays: core.Map$(core.DateTime, core.List), includeInvisibleDays: core.bool, initialDay: core.DateTime, initialFormat: table_calendar.CalendarFormat, onVisibleDaysChanged: dart.fnType(dart.void, [core.DateTime, core.DateTime, table_calendar.CalendarFormat]), selectedDayCallback: dart.fnType(dart.void, [core.DateTime]), startingDayOfWeek: table_calendar.StartingDayOfWeek, useNextCalendarFormat: core.bool}, {}),
    dispose: dart.fnType(dart.void, []),
    toggleCalendarFormat: dart.fnType(dart.void, []),
    swipeCalendarFormat: dart.fnType(dart.void, [], {isSwipeUp: core.bool}, {}),
    setCalendarFormat: dart.fnType(dart.void, [table_calendar.CalendarFormat]),
    setSelectedDay: dart.fnType(dart.void, [core.DateTime], {animate: core.bool, isProgrammatic: core.bool, runCallback: core.bool}, {}),
    setFocusedDay: dart.fnType(dart.void, [core.DateTime]),
    [_updateVisibleDays]: dart.fnType(dart.void, [core.bool]),
    [_nextFormat]: dart.fnType(table_calendar.CalendarFormat, []),
    [_getFormatButtonText]: dart.fnType(core.String, []),
    [_selectPrevious]: dart.fnType(dart.void, []),
    [_selectNext]: dart.fnType(dart.void, []),
    [_selectPreviousMonth]: dart.fnType(dart.void, []),
    [_selectNextMonth]: dart.fnType(dart.void, []),
    [_selectPreviousTwoWeeks]: dart.fnType(dart.void, []),
    [_selectNextTwoWeeks]: dart.fnType(dart.void, []),
    [_selectPreviousWeek]: dart.fnType(dart.void, []),
    [_selectNextWeek]: dart.fnType(dart.void, []),
    [_getFirstDay]: dart.fnType(core.DateTime, [], {includeInvisible: core.bool}, {}),
    [_getLastDay]: dart.fnType(core.DateTime, [], {includeInvisible: core.bool}, {}),
    [_getVisibleDays]: dart.fnType(core.List$(core.DateTime), []),
    [_decrementPage]: dart.fnType(dart.void, []),
    [_incrementPage]: dart.fnType(dart.void, []),
    [_daysInMonth]: dart.fnType(core.List$(core.DateTime), [core.DateTime]),
    [_getDaysBefore]: dart.fnType(core.int, [core.DateTime]),
    [_getDaysAfter]: dart.fnType(core.int, [core.DateTime]),
    [_daysInWeek]: dart.fnType(core.List$(core.DateTime), [core.DateTime]),
    [_firstDayOfWeek]: dart.fnType(core.DateTime, [core.DateTime]),
    [_lastDayOfWeek]: dart.fnType(core.DateTime, [core.DateTime]),
    [_firstDayOfMonth]: dart.fnType(core.DateTime, [core.DateTime]),
    [_lastDayOfMonth]: dart.fnType(core.DateTime, [core.DateTime]),
    [_previousWeek]: dart.fnType(core.DateTime, [core.DateTime]),
    [_nextWeek]: dart.fnType(core.DateTime, [core.DateTime]),
    [_previousMonth]: dart.fnType(core.DateTime, [core.DateTime]),
    [_nextMonth]: dart.fnType(core.DateTime, [core.DateTime]),
    [_daysInRange]: dart.fnType(core.Iterable$(core.DateTime), [core.DateTime, core.DateTime]),
    [_normalizeDate]: dart.fnType(core.DateTime, [core.DateTime]),
    [_getEventKey]: dart.fnType(core.DateTime, [core.DateTime]),
    [_getHolidayKey]: dart.fnType(core.DateTime, [core.DateTime]),
    isSelected: dart.fnType(core.bool, [core.DateTime]),
    isToday: dart.fnType(core.bool, [core.DateTime]),
    [_isSameDay]: dart.fnType(core.bool, [core.DateTime, core.DateTime]),
    [_isWeekend]: dart.fnType(core.bool, [core.DateTime, core.List$(core.int)]),
    [_isExtraDay]: dart.fnType(core.bool, [core.DateTime]),
    [_isExtraDayBefore]: dart.fnType(core.bool, [core.DateTime]),
    [_isExtraDayAfter]: dart.fnType(core.bool, [core.DateTime]),
    [_clamp]: dart.fnType(core.int, [core.int, core.int, core.int])
  }));
  dart.setGetterSignature(table_calendar.CalendarController, () => ({
    __proto__: dart.getGetters(table_calendar.CalendarController.__proto__),
    focusedDay: core.DateTime,
    selectedDay: core.DateTime,
    calendarFormat: table_calendar.CalendarFormat,
    visibleDays: core.List$(core.DateTime),
    visibleEvents: core.Map$(core.DateTime, core.List),
    visibleHolidays: core.Map$(core.DateTime, core.List)
  }));
  dart.setLibraryUri(table_calendar.CalendarController, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.CalendarController, () => ({
    __proto__: dart.getFields(table_calendar.CalendarController.__proto__),
    [_events]: dart.fieldType(core.Map$(core.DateTime, core.List)),
    [_holidays]: dart.fieldType(core.Map$(core.DateTime, core.List)),
    [_focusedDay]: dart.fieldType(core.DateTime),
    [_selectedDay]: dart.fieldType(core.DateTime),
    [_startingDayOfWeek]: dart.fieldType(table_calendar.StartingDayOfWeek),
    [_calendarFormat]: dart.fieldType(change_notifier.ValueNotifier$(table_calendar.CalendarFormat)),
    [_visibleDays]: dart.fieldType(change_notifier.ValueNotifier$(core.List$(core.DateTime))),
    [_availableCalendarFormats]: dart.fieldType(core.Map$(table_calendar.CalendarFormat, core.String)),
    [_previousFirstDay]: dart.fieldType(core.DateTime),
    [_previousLastDay]: dart.fieldType(core.DateTime),
    [_pageId]: dart.fieldType(core.int),
    [_dx]: dart.fieldType(core.double),
    [_useNextCalendarFormat]: dart.fieldType(core.bool),
    [_includeInvisibleDays]: dart.fieldType(core.bool),
    [_selectedDayCallback]: dart.fieldType(dart.fnType(dart.void, [core.DateTime]))
  }));
  table_calendar.CalendarBuilders = class CalendarBuilders extends core.Object {
    get dayBuilder() {
      return this[dayBuilder$];
    }
    set dayBuilder(value) {
      super.dayBuilder = value;
    }
    get selectedDayBuilder() {
      return this[selectedDayBuilder$];
    }
    set selectedDayBuilder(value) {
      super.selectedDayBuilder = value;
    }
    get todayDayBuilder() {
      return this[todayDayBuilder$];
    }
    set todayDayBuilder(value) {
      super.todayDayBuilder = value;
    }
    get holidayDayBuilder() {
      return this[holidayDayBuilder$];
    }
    set holidayDayBuilder(value) {
      super.holidayDayBuilder = value;
    }
    get weekendDayBuilder() {
      return this[weekendDayBuilder$];
    }
    set weekendDayBuilder(value) {
      super.weekendDayBuilder = value;
    }
    get outsideDayBuilder() {
      return this[outsideDayBuilder$];
    }
    set outsideDayBuilder(value) {
      super.outsideDayBuilder = value;
    }
    get outsideWeekendDayBuilder() {
      return this[outsideWeekendDayBuilder$];
    }
    set outsideWeekendDayBuilder(value) {
      super.outsideWeekendDayBuilder = value;
    }
    get outsideHolidayDayBuilder() {
      return this[outsideHolidayDayBuilder$];
    }
    set outsideHolidayDayBuilder(value) {
      super.outsideHolidayDayBuilder = value;
    }
    get unavailableDayBuilder() {
      return this[unavailableDayBuilder$];
    }
    set unavailableDayBuilder(value) {
      super.unavailableDayBuilder = value;
    }
    get markersBuilder() {
      return this[markersBuilder$];
    }
    set markersBuilder(value) {
      super.markersBuilder = value;
    }
    get singleMarkerBuilder() {
      return this[singleMarkerBuilder$];
    }
    set singleMarkerBuilder(value) {
      super.singleMarkerBuilder = value;
    }
    get dowWeekdayBuilder() {
      return this[dowWeekdayBuilder$];
    }
    set dowWeekdayBuilder(value) {
      super.dowWeekdayBuilder = value;
    }
    get dowWeekendBuilder() {
      return this[dowWeekendBuilder$];
    }
    set dowWeekendBuilder(value) {
      super.dowWeekendBuilder = value;
    }
  };
  (table_calendar.CalendarBuilders.new = function(opts) {
    let dayBuilder = opts && 'dayBuilder' in opts ? opts.dayBuilder : null;
    let selectedDayBuilder = opts && 'selectedDayBuilder' in opts ? opts.selectedDayBuilder : null;
    let todayDayBuilder = opts && 'todayDayBuilder' in opts ? opts.todayDayBuilder : null;
    let holidayDayBuilder = opts && 'holidayDayBuilder' in opts ? opts.holidayDayBuilder : null;
    let weekendDayBuilder = opts && 'weekendDayBuilder' in opts ? opts.weekendDayBuilder : null;
    let outsideDayBuilder = opts && 'outsideDayBuilder' in opts ? opts.outsideDayBuilder : null;
    let outsideWeekendDayBuilder = opts && 'outsideWeekendDayBuilder' in opts ? opts.outsideWeekendDayBuilder : null;
    let outsideHolidayDayBuilder = opts && 'outsideHolidayDayBuilder' in opts ? opts.outsideHolidayDayBuilder : null;
    let unavailableDayBuilder = opts && 'unavailableDayBuilder' in opts ? opts.unavailableDayBuilder : null;
    let markersBuilder = opts && 'markersBuilder' in opts ? opts.markersBuilder : null;
    let singleMarkerBuilder = opts && 'singleMarkerBuilder' in opts ? opts.singleMarkerBuilder : null;
    let dowWeekdayBuilder = opts && 'dowWeekdayBuilder' in opts ? opts.dowWeekdayBuilder : null;
    let dowWeekendBuilder = opts && 'dowWeekendBuilder' in opts ? opts.dowWeekendBuilder : null;
    this[dayBuilder$] = dayBuilder;
    this[selectedDayBuilder$] = selectedDayBuilder;
    this[todayDayBuilder$] = todayDayBuilder;
    this[holidayDayBuilder$] = holidayDayBuilder;
    this[weekendDayBuilder$] = weekendDayBuilder;
    this[outsideDayBuilder$] = outsideDayBuilder;
    this[outsideWeekendDayBuilder$] = outsideWeekendDayBuilder;
    this[outsideHolidayDayBuilder$] = outsideHolidayDayBuilder;
    this[unavailableDayBuilder$] = unavailableDayBuilder;
    this[markersBuilder$] = markersBuilder;
    this[singleMarkerBuilder$] = singleMarkerBuilder;
    this[dowWeekdayBuilder$] = dowWeekdayBuilder;
    this[dowWeekendBuilder$] = dowWeekendBuilder;
    if (!!(singleMarkerBuilder != null && markersBuilder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/customization/calendar_builders.dart", 90, 15, "!(singleMarkerBuilder != null && markersBuilder != null)");
    ;
  }).prototype = table_calendar.CalendarBuilders.prototype;
  dart.addTypeTests(table_calendar.CalendarBuilders);
  const dayBuilder$ = CalendarBuilders_dayBuilder;
  const selectedDayBuilder$ = CalendarBuilders_selectedDayBuilder;
  const todayDayBuilder$ = CalendarBuilders_todayDayBuilder;
  const holidayDayBuilder$ = CalendarBuilders_holidayDayBuilder;
  const weekendDayBuilder$ = CalendarBuilders_weekendDayBuilder;
  const outsideDayBuilder$ = CalendarBuilders_outsideDayBuilder;
  const outsideWeekendDayBuilder$ = CalendarBuilders_outsideWeekendDayBuilder;
  const outsideHolidayDayBuilder$ = CalendarBuilders_outsideHolidayDayBuilder;
  const unavailableDayBuilder$ = CalendarBuilders_unavailableDayBuilder;
  const markersBuilder$ = CalendarBuilders_markersBuilder;
  const singleMarkerBuilder$ = CalendarBuilders_singleMarkerBuilder;
  const dowWeekdayBuilder$ = CalendarBuilders_dowWeekdayBuilder;
  const dowWeekendBuilder$ = CalendarBuilders_dowWeekendBuilder;
  dart.setLibraryUri(table_calendar.CalendarBuilders, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.CalendarBuilders, () => ({
    __proto__: dart.getFields(table_calendar.CalendarBuilders.__proto__),
    dayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    selectedDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    todayDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    holidayDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    weekendDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    outsideDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    outsideWeekendDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    outsideHolidayDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    unavailableDayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.List])),
    markersBuilder: dart.finalFieldType(dart.fnType(core.List$(framework.Widget), [framework.BuildContext, core.DateTime, core.List, core.List])),
    singleMarkerBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, dart.dynamic])),
    dowWeekdayBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.String])),
    dowWeekendBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.String]))
  }));
  table_calendar.CalendarStyle = class CalendarStyle extends core.Object {
    get weekdayStyle() {
      return this[weekdayStyle$];
    }
    set weekdayStyle(value) {
      super.weekdayStyle = value;
    }
    get weekendStyle() {
      return this[weekendStyle$];
    }
    set weekendStyle(value) {
      super.weekendStyle = value;
    }
    get holidayStyle() {
      return this[holidayStyle$];
    }
    set holidayStyle(value) {
      super.holidayStyle = value;
    }
    get selectedStyle() {
      return this[selectedStyle$];
    }
    set selectedStyle(value) {
      super.selectedStyle = value;
    }
    get todayStyle() {
      return this[todayStyle$];
    }
    set todayStyle(value) {
      super.todayStyle = value;
    }
    get outsideStyle() {
      return this[outsideStyle$];
    }
    set outsideStyle(value) {
      super.outsideStyle = value;
    }
    get outsideWeekendStyle() {
      return this[outsideWeekendStyle$];
    }
    set outsideWeekendStyle(value) {
      super.outsideWeekendStyle = value;
    }
    get outsideHolidayStyle() {
      return this[outsideHolidayStyle$];
    }
    set outsideHolidayStyle(value) {
      super.outsideHolidayStyle = value;
    }
    get unavailableStyle() {
      return this[unavailableStyle$];
    }
    set unavailableStyle(value) {
      super.unavailableStyle = value;
    }
    get selectedColor() {
      return this[selectedColor$];
    }
    set selectedColor(value) {
      super.selectedColor = value;
    }
    get todayColor() {
      return this[todayColor$];
    }
    set todayColor(value) {
      super.todayColor = value;
    }
    get markersColor() {
      return this[markersColor$];
    }
    set markersColor(value) {
      super.markersColor = value;
    }
    get markersAlignment() {
      return this[markersAlignment$];
    }
    set markersAlignment(value) {
      super.markersAlignment = value;
    }
    get markersPositionTop() {
      return this[markersPositionTop$];
    }
    set markersPositionTop(value) {
      super.markersPositionTop = value;
    }
    get markersPositionBottom() {
      return this[markersPositionBottom$];
    }
    set markersPositionBottom(value) {
      super.markersPositionBottom = value;
    }
    get markersPositionLeft() {
      return this[markersPositionLeft$];
    }
    set markersPositionLeft(value) {
      super.markersPositionLeft = value;
    }
    get markersPositionRight() {
      return this[markersPositionRight$];
    }
    set markersPositionRight(value) {
      super.markersPositionRight = value;
    }
    get markersMaxAmount() {
      return this[markersMaxAmount$];
    }
    set markersMaxAmount(value) {
      super.markersMaxAmount = value;
    }
    get outsideDaysVisible() {
      return this[outsideDaysVisible$];
    }
    set outsideDaysVisible(value) {
      super.outsideDaysVisible = value;
    }
    get renderSelectedFirst() {
      return this[renderSelectedFirst$];
    }
    set renderSelectedFirst(value) {
      super.renderSelectedFirst = value;
    }
    get renderDaysOfWeek() {
      return this[renderDaysOfWeek$];
    }
    set renderDaysOfWeek(value) {
      super.renderDaysOfWeek = value;
    }
    get contentPadding() {
      return this[contentPadding$];
    }
    set contentPadding(value) {
      super.contentPadding = value;
    }
    get canEventMarkersOverflow() {
      return this[canEventMarkersOverflow$];
    }
    set canEventMarkersOverflow(value) {
      super.canEventMarkersOverflow = value;
    }
    get highlightSelected() {
      return this[highlightSelected$];
    }
    set highlightSelected(value) {
      super.highlightSelected = value;
    }
    get highlightToday() {
      return this[highlightToday$];
    }
    set highlightToday(value) {
      super.highlightToday = value;
    }
  };
  (table_calendar.CalendarStyle.new = function(opts) {
    let weekdayStyle = opts && 'weekdayStyle' in opts ? opts.weekdayStyle : C42 || CT.C42;
    let weekendStyle = opts && 'weekendStyle' in opts ? opts.weekendStyle : C40 || CT.C40;
    let holidayStyle = opts && 'holidayStyle' in opts ? opts.holidayStyle : C40 || CT.C40;
    let selectedStyle = opts && 'selectedStyle' in opts ? opts.selectedStyle : C38 || CT.C38;
    let todayStyle = opts && 'todayStyle' in opts ? opts.todayStyle : C38 || CT.C38;
    let outsideStyle = opts && 'outsideStyle' in opts ? opts.outsideStyle : C36 || CT.C36;
    let outsideWeekendStyle = opts && 'outsideWeekendStyle' in opts ? opts.outsideWeekendStyle : C34 || CT.C34;
    let outsideHolidayStyle = opts && 'outsideHolidayStyle' in opts ? opts.outsideHolidayStyle : C34 || CT.C34;
    let unavailableStyle = opts && 'unavailableStyle' in opts ? opts.unavailableStyle : C32 || CT.C32;
    let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : C31 || CT.C31;
    let todayColor = opts && 'todayColor' in opts ? opts.todayColor : C30 || CT.C30;
    let markersColor = opts && 'markersColor' in opts ? opts.markersColor : C29 || CT.C29;
    let markersAlignment = opts && 'markersAlignment' in opts ? opts.markersAlignment : C28 || CT.C28;
    let markersPositionTop = opts && 'markersPositionTop' in opts ? opts.markersPositionTop : null;
    let markersPositionBottom = opts && 'markersPositionBottom' in opts ? opts.markersPositionBottom : 5;
    let markersPositionLeft = opts && 'markersPositionLeft' in opts ? opts.markersPositionLeft : null;
    let markersPositionRight = opts && 'markersPositionRight' in opts ? opts.markersPositionRight : null;
    let markersMaxAmount = opts && 'markersMaxAmount' in opts ? opts.markersMaxAmount : 4;
    let outsideDaysVisible = opts && 'outsideDaysVisible' in opts ? opts.outsideDaysVisible : true;
    let renderSelectedFirst = opts && 'renderSelectedFirst' in opts ? opts.renderSelectedFirst : true;
    let renderDaysOfWeek = opts && 'renderDaysOfWeek' in opts ? opts.renderDaysOfWeek : true;
    let contentPadding = opts && 'contentPadding' in opts ? opts.contentPadding : C27 || CT.C27;
    let canEventMarkersOverflow = opts && 'canEventMarkersOverflow' in opts ? opts.canEventMarkersOverflow : false;
    let highlightSelected = opts && 'highlightSelected' in opts ? opts.highlightSelected : true;
    let highlightToday = opts && 'highlightToday' in opts ? opts.highlightToday : true;
    this[weekdayStyle$] = weekdayStyle;
    this[weekendStyle$] = weekendStyle;
    this[holidayStyle$] = holidayStyle;
    this[selectedStyle$] = selectedStyle;
    this[todayStyle$] = todayStyle;
    this[outsideStyle$] = outsideStyle;
    this[outsideWeekendStyle$] = outsideWeekendStyle;
    this[outsideHolidayStyle$] = outsideHolidayStyle;
    this[unavailableStyle$] = unavailableStyle;
    this[selectedColor$] = selectedColor;
    this[todayColor$] = todayColor;
    this[markersColor$] = markersColor;
    this[markersAlignment$] = markersAlignment;
    this[markersPositionTop$] = markersPositionTop;
    this[markersPositionBottom$] = markersPositionBottom;
    this[markersPositionLeft$] = markersPositionLeft;
    this[markersPositionRight$] = markersPositionRight;
    this[markersMaxAmount$] = markersMaxAmount;
    this[outsideDaysVisible$] = outsideDaysVisible;
    this[renderSelectedFirst$] = renderSelectedFirst;
    this[renderDaysOfWeek$] = renderDaysOfWeek;
    this[contentPadding$] = contentPadding;
    this[canEventMarkersOverflow$] = canEventMarkersOverflow;
    this[highlightSelected$] = highlightSelected;
    this[highlightToday$] = highlightToday;
    ;
  }).prototype = table_calendar.CalendarStyle.prototype;
  dart.addTypeTests(table_calendar.CalendarStyle);
  const weekdayStyle$ = CalendarStyle_weekdayStyle;
  const weekendStyle$ = CalendarStyle_weekendStyle;
  const holidayStyle$ = CalendarStyle_holidayStyle;
  const selectedStyle$ = CalendarStyle_selectedStyle;
  const todayStyle$ = CalendarStyle_todayStyle;
  const outsideStyle$ = CalendarStyle_outsideStyle;
  const outsideWeekendStyle$ = CalendarStyle_outsideWeekendStyle;
  const outsideHolidayStyle$ = CalendarStyle_outsideHolidayStyle;
  const unavailableStyle$ = CalendarStyle_unavailableStyle;
  const selectedColor$ = CalendarStyle_selectedColor;
  const todayColor$ = CalendarStyle_todayColor;
  const markersColor$ = CalendarStyle_markersColor;
  const markersAlignment$ = CalendarStyle_markersAlignment;
  const markersPositionTop$ = CalendarStyle_markersPositionTop;
  const markersPositionBottom$ = CalendarStyle_markersPositionBottom;
  const markersPositionLeft$ = CalendarStyle_markersPositionLeft;
  const markersPositionRight$ = CalendarStyle_markersPositionRight;
  const markersMaxAmount$ = CalendarStyle_markersMaxAmount;
  const outsideDaysVisible$ = CalendarStyle_outsideDaysVisible;
  const renderSelectedFirst$ = CalendarStyle_renderSelectedFirst;
  const renderDaysOfWeek$ = CalendarStyle_renderDaysOfWeek;
  const contentPadding$ = CalendarStyle_contentPadding;
  const canEventMarkersOverflow$ = CalendarStyle_canEventMarkersOverflow;
  const highlightSelected$ = CalendarStyle_highlightSelected;
  const highlightToday$ = CalendarStyle_highlightToday;
  dart.setLibraryUri(table_calendar.CalendarStyle, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.CalendarStyle, () => ({
    __proto__: dart.getFields(table_calendar.CalendarStyle.__proto__),
    weekdayStyle: dart.finalFieldType(text_style.TextStyle),
    weekendStyle: dart.finalFieldType(text_style.TextStyle),
    holidayStyle: dart.finalFieldType(text_style.TextStyle),
    selectedStyle: dart.finalFieldType(text_style.TextStyle),
    todayStyle: dart.finalFieldType(text_style.TextStyle),
    outsideStyle: dart.finalFieldType(text_style.TextStyle),
    outsideWeekendStyle: dart.finalFieldType(text_style.TextStyle),
    outsideHolidayStyle: dart.finalFieldType(text_style.TextStyle),
    unavailableStyle: dart.finalFieldType(text_style.TextStyle),
    selectedColor: dart.finalFieldType(ui.Color),
    todayColor: dart.finalFieldType(ui.Color),
    markersColor: dart.finalFieldType(ui.Color),
    markersAlignment: dart.finalFieldType(alignment.Alignment),
    markersPositionTop: dart.finalFieldType(core.double),
    markersPositionBottom: dart.finalFieldType(core.double),
    markersPositionLeft: dart.finalFieldType(core.double),
    markersPositionRight: dart.finalFieldType(core.double),
    markersMaxAmount: dart.finalFieldType(core.int),
    outsideDaysVisible: dart.finalFieldType(core.bool),
    renderSelectedFirst: dart.finalFieldType(core.bool),
    renderDaysOfWeek: dart.finalFieldType(core.bool),
    contentPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    canEventMarkersOverflow: dart.finalFieldType(core.bool),
    highlightSelected: dart.finalFieldType(core.bool),
    highlightToday: dart.finalFieldType(core.bool)
  }));
  table_calendar.DaysOfWeekStyle = class DaysOfWeekStyle extends core.Object {
    get dowTextBuilder() {
      return this[dowTextBuilder$];
    }
    set dowTextBuilder(value) {
      super.dowTextBuilder = value;
    }
    get weekdayStyle() {
      return this[weekdayStyle$0];
    }
    set weekdayStyle(value) {
      super.weekdayStyle = value;
    }
    get weekendStyle() {
      return this[weekendStyle$0];
    }
    set weekendStyle(value) {
      super.weekendStyle = value;
    }
  };
  (table_calendar.DaysOfWeekStyle.new = function(opts) {
    let dowTextBuilder = opts && 'dowTextBuilder' in opts ? opts.dowTextBuilder : null;
    let weekdayStyle = opts && 'weekdayStyle' in opts ? opts.weekdayStyle : C44 || CT.C44;
    let weekendStyle = opts && 'weekendStyle' in opts ? opts.weekendStyle : C40 || CT.C40;
    this[dowTextBuilder$] = dowTextBuilder;
    this[weekdayStyle$0] = weekdayStyle;
    this[weekendStyle$0] = weekendStyle;
    ;
  }).prototype = table_calendar.DaysOfWeekStyle.prototype;
  dart.addTypeTests(table_calendar.DaysOfWeekStyle);
  const dowTextBuilder$ = DaysOfWeekStyle_dowTextBuilder;
  const weekdayStyle$0 = DaysOfWeekStyle_weekdayStyle;
  const weekendStyle$0 = DaysOfWeekStyle_weekendStyle;
  dart.setLibraryUri(table_calendar.DaysOfWeekStyle, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.DaysOfWeekStyle, () => ({
    __proto__: dart.getFields(table_calendar.DaysOfWeekStyle.__proto__),
    dowTextBuilder: dart.finalFieldType(dart.fnType(core.String, [core.DateTime, dart.dynamic])),
    weekdayStyle: dart.finalFieldType(text_style.TextStyle),
    weekendStyle: dart.finalFieldType(text_style.TextStyle)
  }));
  table_calendar.HeaderStyle = class HeaderStyle extends core.Object {
    get centerHeaderTitle() {
      return this[centerHeaderTitle$];
    }
    set centerHeaderTitle(value) {
      super.centerHeaderTitle = value;
    }
    get formatButtonVisible() {
      return this[formatButtonVisible$];
    }
    set formatButtonVisible(value) {
      super.formatButtonVisible = value;
    }
    get formatButtonShowsNext() {
      return this[formatButtonShowsNext$];
    }
    set formatButtonShowsNext(value) {
      super.formatButtonShowsNext = value;
    }
    get titleTextBuilder() {
      return this[titleTextBuilder$];
    }
    set titleTextBuilder(value) {
      super.titleTextBuilder = value;
    }
    get titleTextStyle() {
      return this[titleTextStyle$];
    }
    set titleTextStyle(value) {
      super.titleTextStyle = value;
    }
    get formatButtonTextStyle() {
      return this[formatButtonTextStyle$];
    }
    set formatButtonTextStyle(value) {
      super.formatButtonTextStyle = value;
    }
    get formatButtonDecoration() {
      return this[formatButtonDecoration$];
    }
    set formatButtonDecoration(value) {
      super.formatButtonDecoration = value;
    }
    get headerPadding() {
      return this[headerPadding$];
    }
    set headerPadding(value) {
      super.headerPadding = value;
    }
    get headerMargin() {
      return this[headerMargin$];
    }
    set headerMargin(value) {
      super.headerMargin = value;
    }
    get formatButtonPadding() {
      return this[formatButtonPadding$];
    }
    set formatButtonPadding(value) {
      super.formatButtonPadding = value;
    }
    get leftChevronPadding() {
      return this[leftChevronPadding$];
    }
    set leftChevronPadding(value) {
      super.leftChevronPadding = value;
    }
    get rightChevronPadding() {
      return this[rightChevronPadding$];
    }
    set rightChevronPadding(value) {
      super.rightChevronPadding = value;
    }
    get leftChevronMargin() {
      return this[leftChevronMargin$];
    }
    set leftChevronMargin(value) {
      super.leftChevronMargin = value;
    }
    get rightChevronMargin() {
      return this[rightChevronMargin$];
    }
    set rightChevronMargin(value) {
      super.rightChevronMargin = value;
    }
    get leftChevronIcon() {
      return this[leftChevronIcon$];
    }
    set leftChevronIcon(value) {
      super.leftChevronIcon = value;
    }
    get rightChevronIcon() {
      return this[rightChevronIcon$];
    }
    set rightChevronIcon(value) {
      super.rightChevronIcon = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
  };
  (table_calendar.HeaderStyle.new = function(opts) {
    let centerHeaderTitle = opts && 'centerHeaderTitle' in opts ? opts.centerHeaderTitle : false;
    let formatButtonVisible = opts && 'formatButtonVisible' in opts ? opts.formatButtonVisible : true;
    let formatButtonShowsNext = opts && 'formatButtonShowsNext' in opts ? opts.formatButtonShowsNext : true;
    let titleTextBuilder = opts && 'titleTextBuilder' in opts ? opts.titleTextBuilder : null;
    let titleTextStyle = opts && 'titleTextStyle' in opts ? opts.titleTextStyle : C64 || CT.C64;
    let formatButtonTextStyle = opts && 'formatButtonTextStyle' in opts ? opts.formatButtonTextStyle : C42 || CT.C42;
    let formatButtonDecoration = opts && 'formatButtonDecoration' in opts ? opts.formatButtonDecoration : C58 || CT.C58;
    let headerMargin = opts && 'headerMargin' in opts ? opts.headerMargin : null;
    let headerPadding = opts && 'headerPadding' in opts ? opts.headerPadding : C57 || CT.C57;
    let formatButtonPadding = opts && 'formatButtonPadding' in opts ? opts.formatButtonPadding : C56 || CT.C56;
    let leftChevronPadding = opts && 'leftChevronPadding' in opts ? opts.leftChevronPadding : C55 || CT.C55;
    let rightChevronPadding = opts && 'rightChevronPadding' in opts ? opts.rightChevronPadding : C55 || CT.C55;
    let leftChevronMargin = opts && 'leftChevronMargin' in opts ? opts.leftChevronMargin : C54 || CT.C54;
    let rightChevronMargin = opts && 'rightChevronMargin' in opts ? opts.rightChevronMargin : C54 || CT.C54;
    let leftChevronIcon = opts && 'leftChevronIcon' in opts ? opts.leftChevronIcon : C52 || CT.C52;
    let rightChevronIcon = opts && 'rightChevronIcon' in opts ? opts.rightChevronIcon : C49 || CT.C49;
    let decoration = opts && 'decoration' in opts ? opts.decoration : C47 || CT.C47;
    this[centerHeaderTitle$] = centerHeaderTitle;
    this[formatButtonVisible$] = formatButtonVisible;
    this[formatButtonShowsNext$] = formatButtonShowsNext;
    this[titleTextBuilder$] = titleTextBuilder;
    this[titleTextStyle$] = titleTextStyle;
    this[formatButtonTextStyle$] = formatButtonTextStyle;
    this[formatButtonDecoration$] = formatButtonDecoration;
    this[headerMargin$] = headerMargin;
    this[headerPadding$] = headerPadding;
    this[formatButtonPadding$] = formatButtonPadding;
    this[leftChevronPadding$] = leftChevronPadding;
    this[rightChevronPadding$] = rightChevronPadding;
    this[leftChevronMargin$] = leftChevronMargin;
    this[rightChevronMargin$] = rightChevronMargin;
    this[leftChevronIcon$] = leftChevronIcon;
    this[rightChevronIcon$] = rightChevronIcon;
    this[decoration$] = decoration;
    ;
  }).prototype = table_calendar.HeaderStyle.prototype;
  dart.addTypeTests(table_calendar.HeaderStyle);
  const centerHeaderTitle$ = HeaderStyle_centerHeaderTitle;
  const formatButtonVisible$ = HeaderStyle_formatButtonVisible;
  const formatButtonShowsNext$ = HeaderStyle_formatButtonShowsNext;
  const titleTextBuilder$ = HeaderStyle_titleTextBuilder;
  const titleTextStyle$ = HeaderStyle_titleTextStyle;
  const formatButtonTextStyle$ = HeaderStyle_formatButtonTextStyle;
  const formatButtonDecoration$ = HeaderStyle_formatButtonDecoration;
  const headerPadding$ = HeaderStyle_headerPadding;
  const headerMargin$ = HeaderStyle_headerMargin;
  const formatButtonPadding$ = HeaderStyle_formatButtonPadding;
  const leftChevronPadding$ = HeaderStyle_leftChevronPadding;
  const rightChevronPadding$ = HeaderStyle_rightChevronPadding;
  const leftChevronMargin$ = HeaderStyle_leftChevronMargin;
  const rightChevronMargin$ = HeaderStyle_rightChevronMargin;
  const leftChevronIcon$ = HeaderStyle_leftChevronIcon;
  const rightChevronIcon$ = HeaderStyle_rightChevronIcon;
  const decoration$ = HeaderStyle_decoration;
  dart.setLibraryUri(table_calendar.HeaderStyle, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar.HeaderStyle, () => ({
    __proto__: dart.getFields(table_calendar.HeaderStyle.__proto__),
    centerHeaderTitle: dart.finalFieldType(core.bool),
    formatButtonVisible: dart.finalFieldType(core.bool),
    formatButtonShowsNext: dart.finalFieldType(core.bool),
    titleTextBuilder: dart.finalFieldType(dart.fnType(core.String, [core.DateTime, dart.dynamic])),
    titleTextStyle: dart.finalFieldType(text_style.TextStyle),
    formatButtonTextStyle: dart.finalFieldType(text_style.TextStyle),
    formatButtonDecoration: dart.finalFieldType(decoration.Decoration),
    headerPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    headerMargin: dart.finalFieldType(edge_insets.EdgeInsets),
    formatButtonPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    leftChevronPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    rightChevronPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    leftChevronMargin: dart.finalFieldType(edge_insets.EdgeInsets),
    rightChevronMargin: dart.finalFieldType(edge_insets.EdgeInsets),
    leftChevronIcon: dart.finalFieldType(icon.Icon),
    rightChevronIcon: dart.finalFieldType(icon.Icon),
    decoration: dart.finalFieldType(box_decoration.BoxDecoration)
  }));
  var C235;
  var _buildCellDecoration = dart.privateName(table_calendar, "_buildCellDecoration");
  var C236;
  var _buildCellTextStyle = dart.privateName(table_calendar, "_buildCellTextStyle");
  var C239;
  var C240;
  var C238;
  var C237;
  var C243;
  var C244;
  var C245;
  var C246;
  var C247;
  var C242;
  var C241;
  var text$ = dart.privateName(table_calendar, "_CellWidget.text");
  var isUnavailable$ = dart.privateName(table_calendar, "_CellWidget.isUnavailable");
  var isSelected$ = dart.privateName(table_calendar, "_CellWidget.isSelected");
  var isToday$ = dart.privateName(table_calendar, "_CellWidget.isToday");
  var isWeekend$ = dart.privateName(table_calendar, "_CellWidget.isWeekend");
  var isOutsideMonth$ = dart.privateName(table_calendar, "_CellWidget.isOutsideMonth");
  var isHoliday$ = dart.privateName(table_calendar, "_CellWidget.isHoliday");
  var calendarStyle$0 = dart.privateName(table_calendar, "_CellWidget.calendarStyle");
  table_calendar._CellWidget = class _CellWidget extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get isUnavailable() {
      return this[isUnavailable$];
    }
    set isUnavailable(value) {
      super.isUnavailable = value;
    }
    get isSelected() {
      return this[isSelected$];
    }
    set isSelected(value) {
      super.isSelected = value;
    }
    get isToday() {
      return this[isToday$];
    }
    set isToday(value) {
      super.isToday = value;
    }
    get isWeekend() {
      return this[isWeekend$];
    }
    set isWeekend(value) {
      super.isWeekend = value;
    }
    get isOutsideMonth() {
      return this[isOutsideMonth$];
    }
    set isOutsideMonth(value) {
      super.isOutsideMonth = value;
    }
    get isHoliday() {
      return this[isHoliday$];
    }
    set isHoliday(value) {
      super.isHoliday = value;
    }
    get calendarStyle() {
      return this[calendarStyle$0];
    }
    set calendarStyle(value) {
      super.calendarStyle = value;
    }
    build(context) {
      return new implicit_animations.AnimatedContainer.new({duration: C235 || CT.C235, decoration: this[_buildCellDecoration](), margin: C236 || CT.C236, alignment: alignment.Alignment.center, child: new text.Text.new(this.text, {style: this[_buildCellTextStyle](), $creationLocationd_0dea112b090073317d4: C237 || CT.C237}), $creationLocationd_0dea112b090073317d4: C241 || CT.C241});
    }
    [_buildCellDecoration]() {
      if (dart.test(this.isSelected) && dart.test(this.calendarStyle.renderSelectedFirst) && dart.test(this.calendarStyle.highlightSelected)) {
        return new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.calendarStyle.selectedColor});
      } else if (dart.test(this.isToday) && dart.test(this.calendarStyle.highlightToday)) {
        return new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.calendarStyle.todayColor});
      } else if (dart.test(this.isSelected) && dart.test(this.calendarStyle.highlightSelected)) {
        return new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.calendarStyle.selectedColor});
      } else {
        return new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle});
      }
    }
    [_buildCellTextStyle]() {
      if (dart.test(this.isUnavailable)) {
        return this.calendarStyle.unavailableStyle;
      } else if (dart.test(this.isSelected) && dart.test(this.calendarStyle.renderSelectedFirst) && dart.test(this.calendarStyle.highlightSelected)) {
        return this.calendarStyle.selectedStyle;
      } else if (dart.test(this.isToday) && dart.test(this.calendarStyle.highlightToday)) {
        return this.calendarStyle.todayStyle;
      } else if (dart.test(this.isSelected) && dart.test(this.calendarStyle.highlightSelected)) {
        return this.calendarStyle.selectedStyle;
      } else if (dart.test(this.isOutsideMonth) && dart.test(this.isHoliday)) {
        return this.calendarStyle.outsideHolidayStyle;
      } else if (dart.test(this.isHoliday)) {
        return this.calendarStyle.holidayStyle;
      } else if (dart.test(this.isOutsideMonth) && dart.test(this.isWeekend)) {
        return this.calendarStyle.outsideWeekendStyle;
      } else if (dart.test(this.isOutsideMonth)) {
        return this.calendarStyle.outsideStyle;
      } else if (dart.test(this.isWeekend)) {
        return this.calendarStyle.weekendStyle;
      } else {
        return this.calendarStyle.weekdayStyle;
      }
    }
  };
  (table_calendar._CellWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let isUnavailable = opts && 'isUnavailable' in opts ? opts.isUnavailable : false;
    let isSelected = opts && 'isSelected' in opts ? opts.isSelected : false;
    let isToday = opts && 'isToday' in opts ? opts.isToday : false;
    let isWeekend = opts && 'isWeekend' in opts ? opts.isWeekend : false;
    let isOutsideMonth = opts && 'isOutsideMonth' in opts ? opts.isOutsideMonth : false;
    let isHoliday = opts && 'isHoliday' in opts ? opts.isHoliday : false;
    let calendarStyle = opts && 'calendarStyle' in opts ? opts.calendarStyle : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[isUnavailable$] = isUnavailable;
    this[isSelected$] = isSelected;
    this[isToday$] = isToday;
    this[isWeekend$] = isWeekend;
    this[isOutsideMonth$] = isOutsideMonth;
    this[isHoliday$] = isHoliday;
    this[calendarStyle$0] = calendarStyle;
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/widgets/cell_widget.dart", 26, 16, "text != null");
    if (!(calendarStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/widgets/cell_widget.dart", 27, 16, "calendarStyle != null");
    table_calendar._CellWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = table_calendar._CellWidget.prototype;
  dart.addTypeTests(table_calendar._CellWidget);
  dart.setMethodSignature(table_calendar._CellWidget, () => ({
    __proto__: dart.getMethods(table_calendar._CellWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildCellDecoration]: dart.fnType(decoration.Decoration, []),
    [_buildCellTextStyle]: dart.fnType(text_style.TextStyle, [])
  }));
  dart.setLibraryUri(table_calendar._CellWidget, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar._CellWidget, () => ({
    __proto__: dart.getFields(table_calendar._CellWidget.__proto__),
    text: dart.finalFieldType(core.String),
    isUnavailable: dart.finalFieldType(core.bool),
    isSelected: dart.finalFieldType(core.bool),
    isToday: dart.finalFieldType(core.bool),
    isWeekend: dart.finalFieldType(core.bool),
    isOutsideMonth: dart.finalFieldType(core.bool),
    isHoliday: dart.finalFieldType(core.bool),
    calendarStyle: dart.finalFieldType(table_calendar.CalendarStyle)
  }));
  var C250;
  var C251;
  var C249;
  var C248;
  var C254;
  var C255;
  var C256;
  var C253;
  var C252;
  var C259;
  var C260;
  var C258;
  var C257;
  var icon$ = dart.privateName(table_calendar, "_CustomIconButton.icon");
  var onTap$ = dart.privateName(table_calendar, "_CustomIconButton.onTap");
  var margin$ = dart.privateName(table_calendar, "_CustomIconButton.margin");
  var padding$ = dart.privateName(table_calendar, "_CustomIconButton.padding");
  table_calendar._CustomIconButton = class _CustomIconButton extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    build(context) {
      return new basic.Padding.new({padding: this.margin, child: new ink_well.InkWell.new({onTap: this.onTap, borderRadius: new border_radius.BorderRadius.circular(100.0), child: new basic.Padding.new({padding: this.padding, child: this.icon, $creationLocationd_0dea112b090073317d4: C248 || CT.C248}), $creationLocationd_0dea112b090073317d4: C252 || CT.C252}), $creationLocationd_0dea112b090073317d4: C257 || CT.C257});
    }
  };
  (table_calendar._CustomIconButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[onTap$] = onTap;
    this[margin$] = margin;
    this[padding$] = padding;
    if (!(icon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/widgets/custom_icon_button.dart", 18, 16, "icon != null");
    if (!(onTap != null)) dart.assertFailed(null, "org-dartlang-app:///packages/table_calendar/src/widgets/custom_icon_button.dart", 19, 16, "onTap != null");
    table_calendar._CustomIconButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = table_calendar._CustomIconButton.prototype;
  dart.addTypeTests(table_calendar._CustomIconButton);
  dart.setMethodSignature(table_calendar._CustomIconButton, () => ({
    __proto__: dart.getMethods(table_calendar._CustomIconButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(table_calendar._CustomIconButton, "package:table_calendar/table_calendar.dart");
  dart.setFieldSignature(table_calendar._CustomIconButton, () => ({
    __proto__: dart.getFields(table_calendar._CustomIconButton.__proto__),
    icon: dart.finalFieldType(icon.Icon),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    margin: dart.finalFieldType(edge_insets.EdgeInsets),
    padding: dart.finalFieldType(edge_insets.EdgeInsets)
  }));
  table_calendar._getWeekdayNumber = function _getWeekdayNumber(weekday) {
    return dart.notNull(table_calendar.StartingDayOfWeek.values[$indexOf](weekday)) + 1;
  };
  dart.defineLazy(table_calendar, {
    /*table_calendar._dxMax*/get _dxMax() {
      return 1.2;
    },
    /*table_calendar._dxMin*/get _dxMin() {
      return -1.2;
    }
  });
  dart.trackLibraries("packages/table_calendar/table_calendar", {
    "package:table_calendar/table_calendar.dart": table_calendar
  }, {
    "package:table_calendar/table_calendar.dart": ["src/calendar.dart", "src/calendar_controller.dart", "src/customization/calendar_builders.dart", "src/customization/calendar_style.dart", "src/customization/days_of_week_style.dart", "src/customization/header_style.dart", "src/widgets/cell_widget.dart", "src/widgets/custom_icon_button.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/calendar.dart","src/calendar_controller.dart","src/customization/calendar_builders.dart","src/customization/calendar_style.dart","src/customization/days_of_week_style.dart","src/customization/header_style.dart","src/widgets/cell_widget.dart","src/widgets/custom_icon_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"table_calendar.ddc.js"}');
  // Exports:
  return {
    table_calendar: table_calendar
  };
});

//# sourceMappingURL=table_calendar.ddc.js.map
