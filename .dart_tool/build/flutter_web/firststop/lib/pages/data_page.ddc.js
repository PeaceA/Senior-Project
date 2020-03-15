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
        [_Location_line]: 33,
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
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 34,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 58,
        [_Location_line]: 33,
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
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 67,
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
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 68,
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
        [_Location_line]: 66,
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
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 91,
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
        [_Location_line]: 80,
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
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 104,
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
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59404
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C44 || CT.C44
      });
    },
    get C42() {
      return C42 = dart.const({
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
        [InputDecoration_hintText]: "Id",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Id",
        [InputDecoration_icon]: C43 || CT.C43
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57534
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C52 || CT.C52
      });
    },
    get C50() {
      return C50 = dart.const({
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
        [InputDecoration_hintText]: "Email",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Email",
        [InputDecoration_icon]: C51 || CT.C51
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57549
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C60 || CT.C60
      });
    },
    get C58() {
      return C58 = dart.const({
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
        [InputDecoration_hintText]: "Phone Number",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Phone Number",
        [InputDecoration_icon]: C59 || CT.C59
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 60227
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C67 || CT.C67
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 165,
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
        [_Location_column]: 42,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 165,
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
        [_Location_column]: 40,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 27,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 23,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58699
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C94 || CT.C94
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 27,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 23,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58714
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C121 || CT.C121
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 27,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 23,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58729
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C148 || CT.C148
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 27,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159, C160 || CT.C160, C161 || CT.C161], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 251,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 23,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 243,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 40
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C176() {
      return C176 = dart.const({
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
        [TextStyle_color]: C177 || CT.C177,
        [TextStyle_inherit]: true
      });
    },
    get C175() {
      return C175 = dart.const({
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
        [Text_style]: C176 || CT.C176,
        [Text_textSpan]: null,
        [Text_data]: "Submit"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 21,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 21,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180, C181 || CT.C181, C182 || CT.C182, C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 278,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 278,
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
        [_Location_column]: 21,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autovalidate",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.constList([C195 || CT.C195, C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C194 || CT.C194,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200, C201 || CT.C201, C202 || CT.C202], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.constList([C205 || CT.C205], widget_inspector._Location);
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C204 || CT.C204,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/data_page.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208, C209 || CT.C209, C210 || CT.C210], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C207 || CT.C207,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 64,
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
  var _semesters = dart.privateName(data_page, "_semesters");
  var _classifications = dart.privateName(data_page, "_classifications");
  var _majors = dart.privateName(data_page, "_majors");
  var _role = dart.privateName(data_page, "_role");
  var _major = dart.privateName(data_page, "_major");
  var _classification = dart.privateName(data_page, "_classification");
  var _semester = dart.privateName(data_page, "_semester");
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
  var C44;
  var C43;
  var C42;
  var C47;
  var C48;
  var C49;
  var C46;
  var C45;
  var C52;
  var C51;
  var C50;
  var C55;
  var C56;
  var C57;
  var C54;
  var C53;
  var C60;
  var C59;
  var C58;
  var C63;
  var C64;
  var C65;
  var C62;
  var C61;
  var C67;
  var C66;
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
  var C80;
  var C76;
  var C75;
  var C83;
  var C82;
  var C81;
  var C86;
  var C87;
  var C88;
  var C85;
  var C84;
  var C91;
  var C92;
  var C90;
  var C89;
  var C94;
  var C93;
  var C97;
  var C96;
  var C95;
  var C100;
  var C101;
  var C99;
  var C98;
  var C104;
  var C105;
  var C106;
  var C107;
  var C103;
  var C102;
  var C110;
  var C109;
  var C108;
  var C113;
  var C114;
  var C115;
  var C112;
  var C111;
  var C118;
  var C119;
  var C117;
  var C116;
  var C121;
  var C120;
  var C124;
  var C123;
  var C122;
  var C127;
  var C128;
  var C126;
  var C125;
  var C131;
  var C132;
  var C133;
  var C134;
  var C130;
  var C129;
  var C137;
  var C136;
  var C135;
  var C140;
  var C141;
  var C142;
  var C139;
  var C138;
  var C145;
  var C146;
  var C144;
  var C143;
  var C148;
  var C147;
  var C151;
  var C150;
  var C149;
  var C154;
  var C155;
  var C153;
  var C152;
  var C158;
  var C159;
  var C160;
  var C161;
  var C157;
  var C156;
  var C164;
  var C163;
  var C162;
  var C167;
  var C168;
  var C169;
  var C166;
  var C165;
  var C172;
  var C173;
  var C171;
  var C170;
  var C174;
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
  var C177;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C176;
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var C175;
  var C180;
  var C181;
  var C182;
  var C183;
  var C184;
  var C179;
  var C178;
  var C187;
  var C188;
  var C186;
  var C185;
  var C191;
  var C192;
  var C190;
  var C189;
  var C195;
  var C196;
  var C197;
  var C194;
  var C193;
  var C200;
  var C201;
  var C202;
  var C199;
  var C198;
  var C205;
  var C204;
  var C203;
  var C208;
  var C209;
  var C210;
  var C207;
  var C206;
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
          let map = new (IdentityMapOfString$String()).from(["completeSignUp", "true", "firstName", this.newUser.firstName, "lastName", this.newUser.lastName, "id", this.newUser.id, "email", this.newUser.email, "phoneNumber", this.newUser.phoneNumber, "role", this.newUser.role, "classification", this.student.classification, "startSemester", this.student.startSemester, "major", this.student.major]);
          yield ref.set(map);
          this.widget.loginCallback();
        }
      }).bind(this));
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: new text.Text.new("Get Started", {$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), elevation: 1.0, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), body: new centered_view.CenteredView.new({child: new safe_area.SafeArea.new({top: false, bottom: false, child: new form.Form.new({key: this[_formKey], autovalidate: true, child: new scroll_view.ListView.new({padding: C26 || CT.C26, children: JSArrayOfWidget().of([new text_form_field.TextFormField.new({decoration: C27 || CT.C27, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" + "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.firstName = val, StringToString()), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new text_form_field.TextFormField.new({decoration: C36 || CT.C36, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" + "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.lastName = val, StringToString()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new text_form_field.TextFormField.new({decoration: C42 || CT.C42, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[@0123456789]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.id = val, StringToString()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new text_form_field.TextFormField.new({decoration: C50 || CT.C50, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" + "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-@]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.email = val, StringToString()), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new text_form_field.TextFormField.new({decoration: C58 || CT.C58, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[+-0123456789()]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.phoneNumber = val, StringToString()), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new form.FormField.new({builder: dart.fn(state => new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({icon: C66 || CT.C66, labelText: "Role"}), isEmpty: this[_role] === "", child: new dropdown.DropdownButtonHideUnderline.new({child: new (DropdownButtonOfString()).new({value: this[_role], isDense: true, onChanged: dart.fn(newValue => {
                            this.setState(dart.fn(() => {
                              this.newUser.role = newValue;
                              this[_role] = newValue;
                              state.didChange(newValue);
                            }, VoidToNull()));
                          }, StringToNull()), items: this[_roles][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), FormFieldStateToInputDecorator()), validator: dart.fn(val => !dart.equals(val, "") ? null : "Please select an option", dynamicToString()), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), new form.FormField.new({builder: dart.fn(state => new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({icon: C93 || CT.C93, labelText: "Major"}), isEmpty: this[_major] === "", child: new dropdown.DropdownButtonHideUnderline.new({child: new (DropdownButtonOfString()).new({value: this[_major], isDense: true, onChanged: dart.fn(newValue => {
                            this.setState(dart.fn(() => {
                              this.student.major = newValue;
                              this[_major] = newValue;
                              state.didChange(newValue);
                            }, VoidToNull()));
                          }, StringToNull()), items: this[_majors][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), FormFieldStateToInputDecorator()), validator: dart.fn(val => !dart.equals(val, "") ? null : "Please select an option", dynamicToString()), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), new form.FormField.new({builder: dart.fn(state => new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({icon: C120 || CT.C120, labelText: "Classification"}), isEmpty: this[_classification] === "", child: new dropdown.DropdownButtonHideUnderline.new({child: new (DropdownButtonOfString()).new({value: this[_classification], isDense: true, onChanged: dart.fn(newValue => {
                            this.setState(dart.fn(() => {
                              this.student.classification = newValue;
                              this[_classification] = newValue;
                              state.didChange(newValue);
                            }, VoidToNull()));
                          }, StringToNull()), items: this[_classifications][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), FormFieldStateToInputDecorator()), validator: dart.fn(val => !dart.equals(val, "") ? null : "Please select an option", dynamicToString()), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), new form.FormField.new({builder: dart.fn(state => new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({icon: C147 || CT.C147, labelText: "Start Semester"}), isEmpty: this[_semester] === "", child: new dropdown.DropdownButtonHideUnderline.new({child: new (DropdownButtonOfString()).new({value: this[_semester], isDense: true, onChanged: dart.fn(newValue => {
                            this.setState(dart.fn(() => {
                              this.student.startSemester = newValue;
                              this[_semester] = newValue;
                              state.didChange(newValue);
                            }, VoidToNull()));
                          }, StringToNull()), items: this[_semesters][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C149 || CT.C149}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), FormFieldStateToInputDecorator()), validator: dart.fn(val => !dart.equals(val, "") ? null : "Please select an option", dynamicToString()), $creationLocationd_0dea112b090073317d4: C170 || CT.C170}), new container.Container.new({padding: C174 || CT.C174, child: new raised_button.RaisedButton.new({elevation: 1.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), color: colors.Colors.blue, child: C175 || CT.C175, onPressed: dart.bind(this, 'submitForm'), $creationLocationd_0dea112b090073317d4: C178 || CT.C178}), $creationLocationd_0dea112b090073317d4: C185 || CT.C185})]), $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), $creationLocationd_0dea112b090073317d4: C193 || CT.C193}), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}), $creationLocationd_0dea112b090073317d4: C203 || CT.C203}), $creationLocationd_0dea112b090073317d4: C206 || CT.C206});
    }
  };
  (data_page._UserDataState.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this.newUser = new User.User.new();
    this.student = new User.Student.new();
    this[_roles] = JSArrayOfString().of(["", "Student", "Advisor"]);
    this[_semesters] = JSArrayOfString().of(["", "Fall", "Spring"]);
    this[_classifications] = JSArrayOfString().of(["", "Freshman", "Sophomore", "Junior", "Senior"]);
    this[_majors] = JSArrayOfString().of(["", "Computer Science", "Computer Engineering", "Mechanical Engineering", "Civil Engineering"]);
    this[_role] = "";
    this[_major] = "";
    this[_classification] = "";
    this[_semester] = "";
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
    student: dart.fieldType(User.Student),
    [_roles]: dart.fieldType(core.List$(core.String)),
    [_semesters]: dart.fieldType(core.List$(core.String)),
    [_classifications]: dart.fieldType(core.List$(core.String)),
    [_majors]: dart.fieldType(core.List$(core.String)),
    [_role]: dart.fieldType(core.String),
    [_major]: dart.fieldType(core.String),
    [_classification]: dart.fieldType(core.String),
    [_semester]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/firststop/pages/data_page", {
    "package:firststop/pages/data_page.dart": data_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["data_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASsB;;;;;;IACN;;;;;;;AAGyB;IAAgB;;;QANxC;QAAU;QAAa;;IAAb;IAAa;AAAkB,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBAuB/C,SAAwB;AAEmC,MADjF,AAAa,AACV,6CAAiB,6CAA0B,KAAK,WAAe,kBAAK,OAAO;IAChF;;AAEe;AACG,mBAAO,AAAS;AAChC,uBAAK,AAAK,IAAD;AACwC,UAA/C,iBAAY;;AAGD,UAAX,AAAK,IAAD;AACuB,oBAAM,AAAc,yBAAI,AAAS,wBAAE,AAAO;AACjE,oBAAM,yCACR,kBAAkB,QAClB,aAAa,AAAQ,wBACrB,YAAY,AAAQ,uBACpB,MAAM,AAAQ,iBACd,SAAS,AAAQ,oBACjB,eAAe,AAAQ,0BACvB,QAAQ,AAAQ,mBAChB,kBAAkB,AAAQ,6BAC1B,iBAAiB,AAAQ,4BACzB,SAAS,AAAQ;AAGD,UAAlB,MAAM,AAAI,GAAD,KAAK,GAAG;AACK,UAAtB,AAAO;;MAEX;;UAG0B;AACxB,YAAW,iCACJ,4BACO,+BACC,kBAAK,oFACL,oEAEP,2CACa,iCACV,eACG,cACG,wBACJ,8BACS,aACH,gEAES,sBACZ,mFAMe,kCACf,sDAA+B,gBAAO,AAA4D,8DAChG,qDACF,wDAAiC,gBAE1B,QAAC,OAAQ,AAAQ,yBAAY,GAAG,8EAEvC,mFAMe,kCACf,sDAA+B,gBAAO,AAA4D,8DAChG,qDACF,wDAAiC,gBAE1B,QAAC,OAAQ,AAAQ,wBAAW,GAAG,8EAEtC,mFAMe,kCACf,sDAA+B,gBAAO,mBACtC,wDAAiC,gBAE1B,QAAC,OAAQ,AAAQ,kBAAK,GAAG,8EAEhC,mFAMe,kCACf,sDAA+B,gBAAO,AAA4D,8DAChG,sDACF,wDAAiC,gBAE1B,QAAC,OAAQ,AAAQ,qBAAQ,GAAG,8EAEnC,mFAMe,kCACf,sDAA+B,gBAAO,sBACtC,wDAAiC,gBAE1B,QAAC,OAAQ,AAAQ,2BAAc,GAAG,8EAEzC,iCACO,QAAgB,SAChB,oDACO,yEAEC,mBAEJ,AAAM,gBAAG,WACP,qDACE,2CACF,sBACE,iBACE,QAAQ;AAKf,4BAJF,cAAS;AACgB,8BAAvB,AAAQ,oBAAO,QAAQ;AACP,8BAAhB,cAAQ,QAAQ;AACS,8BAAzB,AAAM,KAAD,WAAW,QAAQ;;qDAGrB,AAAO,AAKX,+CALe,QAAQ,SACb,6CACF,KAAK,SACD,kBAAK,KAAK,+XAOtB,QAAC,OACC,aAAJ,GAAG,EAAI,MAAK,OAAO,wGAI1B,iCACO,QAAgB,SAChB,oDACO,yEAEC,oBAEJ,AAAO,iBAAG,WACR,qDACE,2CACF,uBACE,iBACE,QAAQ;AAKf,4BAJF,cAAS;AACiB,8BAAxB,AAAQ,qBAAQ,QAAQ;AACP,8BAAjB,eAAS,QAAQ;AACQ,8BAAzB,AAAM,KAAD,WAAW,QAAQ;;qDAGrB,AAAQ,AAKZ,gDALgB,QAAQ,SACd,6CACF,KAAK,SACD,kBAAK,KAAK,qYAOtB,QAAC,OACC,aAAJ,GAAG,EAAI,MAAK,OAAO,0GAG1B,iCACO,QAAgB,SAChB,oDACO,2EAEC,6BAEJ,AAAgB,0BAAG,WACjB,qDACE,2CACF,gCACE,iBACE,QAAQ;AAKf,4BAJF,cAAS;AAC0B,8BAAjC,AAAQ,8BAAiB,QAAQ;AACP,8BAA1B,wBAAkB,QAAQ;AACD,8BAAzB,AAAM,KAAD,WAAW,QAAQ;;qDAGrB,AAAiB,AAKrB,yDALyB,QAAQ,SACvB,6CACF,KAAK,SACD,kBAAK,KAAK,yYAOtB,QAAC,OACC,aAAJ,GAAG,EAAI,MAAK,OAAO,0GAG1B,iCACO,QAAgB,SAChB,oDACO,2EAEC,6BAEJ,AAAU,oBAAG,WACX,qDACE,2CACF,0BACE,iBACE,QAAQ;AAKf,4BAJF,cAAS;AACyB,8BAAhC,AAAQ,6BAAgB,QAAQ;AACZ,8BAApB,kBAAY,QAAQ;AACK,8BAAzB,AAAM,KAAD,WAAW,QAAQ;;qDAGrB,AAAW,AAKf,mDALmB,QAAQ,SACjB,6CACF,KAAK,SACD,kBAAK,KAAK,yYAOtB,QAAC,OACC,aAAJ,GAAG,EAAI,MAAK,OAAO,0GAG1B,8DAES,+CACE,YACA,uEACW,wCAAsB,gBAC9B,iEAEH;IAS7B;;;IApR2B,iBAAe;IACX,qBAAmB;IAE7C,eAAc;IACX,eAAc;IACT,eAAiB,sBAAC,IAAI,WAAW;IACjC,mBAAqB,sBAAC,IAAI,QAAQ;IAClC,yBAA2B,sBAAC,IAAI,YAAY,aAAa,UAAU;IACnE,gBAAkB,sBAAC,IAAI,oBAAoB,wBAAwB,0BAA0B;IACnG,cAAQ;IACR,eAAS;IACT,wBAAkB;IAClB,kBAAY;;;EAmXrB","file":"data_page.ddc.js"}');
  // Exports:
  return {
    pages__data_page: data_page
  };
});

//# sourceMappingURL=data_page.ddc.js.map
