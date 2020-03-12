define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/firststop/models/User', 'packages/flutter/src/painting/_network_image_web', 'packages/firebase/firebase', 'packages/firststop/utils/centered_view', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__firststop__models__User, packages__flutter__src__painting___network_image_web, packages__firebase__firebase, packages__firststop__utils__centered_view, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const User = packages__firststop__models__User.models__User;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const top_level = packages__firebase__firebase.src__top_level;
  const centered_view = packages__firststop__utils__centered_view.utils__centered_view;
  const text_formatter = packages__flutter__src__gestures__arena.src__services__text_formatter;
  var data_page = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  var GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  var JSArrayOfTextInputFormatter = () => (JSArrayOfTextInputFormatter = dart.constFn(_interceptors.JSArray$(text_formatter.TextInputFormatter)))();
  var StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  var DropdownButtonOfString = () => (DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  var DropdownMenuItemOfString = () => (DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))();
  var StringToDropdownMenuItemOfString = () => (StringToDropdownMenuItemOfString = dart.constFn(dart.fnType(DropdownMenuItemOfString(), [core.String])))();
  var FormFieldStateToInputDecorator = () => (FormFieldStateToInputDecorator = dart.constFn(dart.fnType(input_decorator.InputDecorator, [form.FormFieldState])))();
  var dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294962158.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294954450.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293892762.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293227379.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293874512.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294198070.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293212469.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292030255.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291176488.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290190364.0
      });
    },
    get C1() {
      return C1 = dart.constMap(core.int, ui.Color, [50, C2 || CT.C2, 100, C3 || CT.C3, 200, C4 || CT.C4, 300, C5 || CT.C5, 400, C6 || CT.C6, 500, C7 || CT.C7, 600, C8 || CT.C8, 700, C9 || CT.C9, 800, C10 || CT.C10, 900, C11 || CT.C11]);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4294198070.0,
        [ColorSwatch__swatch]: C1 || CT.C1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 76,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 71,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 34,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 58,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 53,
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
        [_Location_column]: 20,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 54,
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
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: input_decorator.FloatingLabelBehavior.prototype,
        [_name]: "FloatingLabelBehavior.auto",
        index: 1
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59391
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C30 || CT.C30
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelBehavior]: C28 || CT.C28,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "First Name",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "First Name",
        [InputDecoration_icon]: C29 || CT.C29
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelBehavior]: C28 || CT.C28,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Last Name",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Last Name",
        [InputDecoration_icon]: C29 || CT.C29
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 60227
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C43 || CT.C43
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 27,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 23,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 40
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C71() {
      return C71 = dart.const({
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
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C72 || CT.C72,
        [TextStyle_inherit]: true
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C71 || CT.C71,
        [Text_textSpan]: null,
        [Text_data]: "Submit"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 21,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 21,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autovalidate",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 63,
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
        [_Location_column]: 22,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    }
  });
  var loginCallback$ = dart.privateName(data_page, "UserData.loginCallback");
  var userId$ = dart.privateName(data_page, "UserData.userId");
  data_page.UserData = class UserData extends framework.StatefulWidget {
    get loginCallback() {
      return this[loginCallback$];
    }
    set loginCallback(value) {
      super.loginCallback = value;
    }
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      super.userId = value;
    }
    createState() {
      return new data_page._UserDataState.new();
    }
  };
  (data_page.UserData.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let loginCallback = opts && 'loginCallback' in opts ? opts.loginCallback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[userId$] = userId;
    this[loginCallback$] = loginCallback;
    data_page.UserData.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = data_page.UserData.prototype;
  dart.addTypeTests(data_page.UserData);
  dart.setMethodSignature(data_page.UserData, () => ({
    __proto__: dart.getMethods(data_page.UserData.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(data_page.UserData, "package:firststop/pages/data_page.dart");
  dart.setFieldSignature(data_page.UserData, () => ({
    __proto__: dart.getFields(data_page.UserData.__proto__),
    loginCallback: dart.finalFieldType(dart.fnType(dart.void, [])),
    userId: dart.finalFieldType(core.String)
  }));
  var _formKey = dart.privateName(data_page, "_formKey");
  var _scaffoldKey = dart.privateName(data_page, "_scaffoldKey");
  var _roles = dart.privateName(data_page, "_roles");
  var _role = dart.privateName(data_page, "_role");
  var Color_value = dart.privateName(ui, "Color.value");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C1;
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C14;
  var C13;
  var C12;
  var C17;
  var C18;
  var C16;
  var C15;
  var C21;
  var C20;
  var C19;
  var C24;
  var C25;
  var C23;
  var C22;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C26;
  var InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  var InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  var InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  var InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  var InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  var InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  var InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  var InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  var InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  var InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  var InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  var InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  var InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  var InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  var InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  var InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  var InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  var InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  var InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  var InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  var InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  var InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  var InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  var InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  var InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  var InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  var InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  var _name = dart.privateName(input_decorator, "_name");
  var C28;
  var InputDecoration_floatingLabelBehavior = dart.privateName(input_decorator, "InputDecoration.floatingLabelBehavior");
  var InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  var InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  var InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  var InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  var InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  var InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  var InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  var InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  var InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  var InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  var InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  var InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var C30;
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var C29;
  var InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  var C27;
  var C33;
  var C34;
  var C35;
  var C32;
  var C31;
  var C36;
  var C39;
  var C40;
  var C41;
  var C38;
  var C37;
  var C43;
  var C42;
  var C46;
  var C45;
  var C44;
  var C49;
  var C50;
  var C48;
  var C47;
  var C53;
  var C54;
  var C55;
  var C56;
  var C52;
  var C51;
  var C59;
  var C58;
  var C57;
  var C62;
  var C63;
  var C64;
  var C61;
  var C60;
  var C67;
  var C68;
  var C66;
  var C65;
  var C69;
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
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
  var C72;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C71;
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var C70;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C74;
  var C73;
  var C82;
  var C83;
  var C81;
  var C80;
  var C86;
  var C87;
  var C85;
  var C84;
  var C90;
  var C91;
  var C92;
  var C89;
  var C88;
  var C95;
  var C96;
  var C97;
  var C94;
  var C93;
  var C100;
  var C99;
  var C98;
  var C103;
  var C104;
  var C105;
  var C102;
  var C101;
  data_page._UserDataState = class _UserDataState extends framework.State$(data_page.UserData) {
    showMessage(message, color = C0 || CT.C0) {
      this[_scaffoldKey].currentState.showSnackBar(new snack_bar.SnackBar.new({backgroundColor: color, content: new text.Text.new(message, {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}));
    }
    submitForm() {
      return async.async(dart.void, (function* submitForm() {
        let form = this[_formKey].currentState;
        if (!dart.test(form.validate())) {
          this.showMessage("Some form entries are not valid!");
        } else {
          form.save();
          let ref = top_level.database().ref("users/" + dart.notNull(this.widget.userId));
          let map = new (IdentityMapOfString$String()).from(["completeSignUp", "true", "firstName", this.newUser.firstName, "lastName", this.newUser.lastName, "role", this.newUser.role]);
          yield ref.set(map);
          this.widget.loginCallback();
        }
      }).bind(this));
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: new text.Text.new("Get Started", {$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), elevation: 1.0, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), body: new centered_view.CenteredView.new({child: new safe_area.SafeArea.new({top: false, bottom: false, child: new form.Form.new({key: this[_formKey], autovalidate: true, child: new scroll_view.ListView.new({padding: C26 || CT.C26, children: JSArrayOfWidget().of([new text_form_field.TextFormField.new({decoration: C27 || CT.C27, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" + "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.firstName = val, StringToString()), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new text_form_field.TextFormField.new({decoration: C36 || CT.C36, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" + "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.lastName = val, StringToString()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new form.FormField.new({builder: dart.fn(state => new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({icon: C42 || CT.C42, labelText: "Role"}), isEmpty: this[_role] === "", child: new dropdown.DropdownButtonHideUnderline.new({child: new (DropdownButtonOfString()).new({value: this[_role], isDense: true, onChanged: dart.fn(newValue => {
                            this.setState(dart.fn(() => {
                              this.newUser.role = newValue;
                              this[_role] = newValue;
                              state.didChange(newValue);
                            }, VoidToNull()));
                          }, StringToNull()), items: this[_roles][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), FormFieldStateToInputDecorator()), validator: dart.fn(val => !dart.equals(val, "") ? null : "Please select an option", dynamicToString()), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new container.Container.new({padding: C69 || CT.C69, child: new raised_button.RaisedButton.new({elevation: 1.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), color: colors.Colors.blue, child: C70 || CT.C70, onPressed: dart.bind(this, 'submitForm'), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80})]), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101});
    }
  };
  (data_page._UserDataState.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this.newUser = new User.User.new();
    this[_roles] = JSArrayOfString().of(["", "Student", "Advisor"]);
    this[_role] = "";
    data_page._UserDataState.__proto__.new.call(this);
    ;
  }).prototype = data_page._UserDataState.prototype;
  dart.addTypeTests(data_page._UserDataState);
  dart.setMethodSignature(data_page._UserDataState, () => ({
    __proto__: dart.getMethods(data_page._UserDataState.__proto__),
    showMessage: dart.fnType(dart.void, [core.String], [colors.MaterialColor]),
    submitForm: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(data_page._UserDataState, "package:firststop/pages/data_page.dart");
  dart.setFieldSignature(data_page._UserDataState, () => ({
    __proto__: dart.getFields(data_page._UserDataState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    newUser: dart.fieldType(User.User),
    [_roles]: dart.fieldType(core.List$(core.String)),
    [_role]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/firststop/pages/data_page", {
    "package:firststop/pages/data_page.dart": data_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["data_page.dart"],"names":[],"mappings":"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","file":"data_page.ddc.js"}');
  // Exports:
  return {
    pages__data_page: data_page
  };
});

//# sourceMappingURL=data_page.ddc.js.map
