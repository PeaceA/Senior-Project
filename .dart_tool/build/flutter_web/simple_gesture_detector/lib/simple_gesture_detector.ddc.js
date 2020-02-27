define(['dart_sdk', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__rendering__animated_size, packages__flutter__src__widgets__actions, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  var simple_gesture_detector = Object.create(dart.library);
  var $abs = dartx.abs;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: simple_gesture_detector.SwipeDirection.prototype,
        [_name$]: "SwipeDirection.left",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: simple_gesture_detector.SwipeDirection.prototype,
        [_name$]: "SwipeDirection.right",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: simple_gesture_detector.SwipeDirection.prototype,
        [_name$]: "SwipeDirection.up",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: simple_gesture_detector.SwipeDirection.prototype,
        [_name$]: "SwipeDirection.down",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], simple_gesture_detector.SwipeDirection);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: simple_gesture_detector.SwipeDetectionBehavior.prototype,
        [_name$]: "SwipeDetectionBehavior.singularOnEnd",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: simple_gesture_detector.SimpleSwipeConfig.prototype,
        [SimpleSwipeConfig_swipeDetectionBehavior]: C6 || CT.C6,
        [SimpleSwipeConfig_horizontalThreshold]: 50,
        [SimpleSwipeConfig_verticalThreshold]: 50
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_name]: "HitTestBehavior.deferToChild",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLongPress",
        [_Location_column]: 7,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDoubleTap",
        [_Location_column]: 7,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragStart",
        [_Location_column]: 7,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragEnd",
        [_Location_column]: 7,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragStart",
        [_Location_column]: 7,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragEnd",
        [_Location_column]: 7,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/simple_gesture_detector/simple_gesture_detector.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: simple_gesture_detector.SwipeDetectionBehavior.prototype,
        [_name$]: "SwipeDetectionBehavior.singular",
        index: 0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: simple_gesture_detector.SwipeDetectionBehavior.prototype,
        [_name$]: "SwipeDetectionBehavior.continuous",
        index: 2
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: simple_gesture_detector.SwipeDetectionBehavior.prototype,
        [_name$]: "SwipeDetectionBehavior.continuousDistinct",
        index: 3
      });
    },
    get C24() {
      return C24 = dart.constList([C21 || CT.C21, C6 || CT.C6, C22 || CT.C22, C23 || CT.C23], simple_gesture_detector.SwipeDetectionBehavior);
    }
  });
  var _name$ = dart.privateName(simple_gesture_detector, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  simple_gesture_detector.SwipeDirection = class SwipeDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (simple_gesture_detector.SwipeDirection.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = simple_gesture_detector.SwipeDirection.prototype;
  dart.addTypeTests(simple_gesture_detector.SwipeDirection);
  dart.setLibraryUri(simple_gesture_detector.SwipeDirection, "package:simple_gesture_detector/simple_gesture_detector.dart");
  dart.setFieldSignature(simple_gesture_detector.SwipeDirection, () => ({
    __proto__: dart.getFields(simple_gesture_detector.SwipeDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(simple_gesture_detector.SwipeDirection, ['toString']);
  simple_gesture_detector.SwipeDirection.left = C0 || CT.C0;
  simple_gesture_detector.SwipeDirection.right = C1 || CT.C1;
  simple_gesture_detector.SwipeDirection.up = C2 || CT.C2;
  simple_gesture_detector.SwipeDirection.down = C3 || CT.C3;
  simple_gesture_detector.SwipeDirection.values = C4 || CT.C4;
  var C6;
  var SimpleSwipeConfig_swipeDetectionBehavior = dart.privateName(simple_gesture_detector, "SimpleSwipeConfig.swipeDetectionBehavior");
  var SimpleSwipeConfig_horizontalThreshold = dart.privateName(simple_gesture_detector, "SimpleSwipeConfig.horizontalThreshold");
  var SimpleSwipeConfig_verticalThreshold = dart.privateName(simple_gesture_detector, "SimpleSwipeConfig.verticalThreshold");
  var C5;
  var _name = dart.privateName(proxy_box, "_name");
  var C7;
  var child$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.child");
  var swipeConfig$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.swipeConfig");
  var behavior$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.behavior");
  var onVerticalSwipe$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.onVerticalSwipe");
  var onHorizontalSwipe$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.onHorizontalSwipe");
  var onTap$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.onTap");
  var onDoubleTap$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.onDoubleTap");
  var onLongPress$ = dart.privateName(simple_gesture_detector, "SimpleGestureDetector.onLongPress");
  simple_gesture_detector.SimpleGestureDetector = class SimpleGestureDetector extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get swipeConfig() {
      return this[swipeConfig$];
    }
    set swipeConfig(value) {
      super.swipeConfig = value;
    }
    get behavior() {
      return this[behavior$];
    }
    set behavior(value) {
      super.behavior = value;
    }
    get onVerticalSwipe() {
      return this[onVerticalSwipe$];
    }
    set onVerticalSwipe(value) {
      super.onVerticalSwipe = value;
    }
    get onHorizontalSwipe() {
      return this[onHorizontalSwipe$];
    }
    set onHorizontalSwipe(value) {
      super.onHorizontalSwipe = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onDoubleTap() {
      return this[onDoubleTap$];
    }
    set onDoubleTap(value) {
      super.onDoubleTap = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    createState() {
      return new simple_gesture_detector._SimpleGestureDetectorState.new();
    }
  };
  (simple_gesture_detector.SimpleGestureDetector.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let swipeConfig = opts && 'swipeConfig' in opts ? opts.swipeConfig : C5 || CT.C5;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C7 || CT.C7;
    let onVerticalSwipe = opts && 'onVerticalSwipe' in opts ? opts.onVerticalSwipe : null;
    let onHorizontalSwipe = opts && 'onHorizontalSwipe' in opts ? opts.onHorizontalSwipe : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onDoubleTap = opts && 'onDoubleTap' in opts ? opts.onDoubleTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[swipeConfig$] = swipeConfig;
    this[behavior$] = behavior;
    this[onVerticalSwipe$] = onVerticalSwipe;
    this[onHorizontalSwipe$] = onHorizontalSwipe;
    this[onTap$] = onTap;
    this[onDoubleTap$] = onDoubleTap;
    this[onLongPress$] = onLongPress;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/simple_gesture_detector/simple_gesture_detector.dart", 50, 16, "child != null");
    if (!(swipeConfig != null)) dart.assertFailed(null, "org-dartlang-app:///packages/simple_gesture_detector/simple_gesture_detector.dart", 51, 16, "swipeConfig != null");
    simple_gesture_detector.SimpleGestureDetector.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple_gesture_detector.SimpleGestureDetector.prototype;
  dart.addTypeTests(simple_gesture_detector.SimpleGestureDetector);
  dart.setMethodSignature(simple_gesture_detector.SimpleGestureDetector, () => ({
    __proto__: dart.getMethods(simple_gesture_detector.SimpleGestureDetector.__proto__),
    createState: dart.fnType(simple_gesture_detector._SimpleGestureDetectorState, [])
  }));
  dart.setLibraryUri(simple_gesture_detector.SimpleGestureDetector, "package:simple_gesture_detector/simple_gesture_detector.dart");
  dart.setFieldSignature(simple_gesture_detector.SimpleGestureDetector, () => ({
    __proto__: dart.getFields(simple_gesture_detector.SimpleGestureDetector.__proto__),
    child: dart.finalFieldType(framework.Widget),
    swipeConfig: dart.finalFieldType(simple_gesture_detector.SimpleSwipeConfig),
    behavior: dart.finalFieldType(proxy_box.HitTestBehavior),
    onVerticalSwipe: dart.finalFieldType(dart.fnType(dart.void, [simple_gesture_detector.SwipeDirection])),
    onHorizontalSwipe: dart.finalFieldType(dart.fnType(dart.void, [simple_gesture_detector.SwipeDirection])),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDoubleTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onLongPress: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  var _initialSwipeOffset = dart.privateName(simple_gesture_detector, "_initialSwipeOffset");
  var _finalSwipeOffset = dart.privateName(simple_gesture_detector, "_finalSwipeOffset");
  var _previousDirection = dart.privateName(simple_gesture_detector, "_previousDirection");
  var _onVerticalDragStart = dart.privateName(simple_gesture_detector, "_onVerticalDragStart");
  var _onVerticalDragUpdate = dart.privateName(simple_gesture_detector, "_onVerticalDragUpdate");
  var _onVerticalDragEnd = dart.privateName(simple_gesture_detector, "_onVerticalDragEnd");
  var _onHorizontalDragStart = dart.privateName(simple_gesture_detector, "_onHorizontalDragStart");
  var _onHorizontalDragUpdate = dart.privateName(simple_gesture_detector, "_onHorizontalDragUpdate");
  var _onHorizontalDragEnd = dart.privateName(simple_gesture_detector, "_onHorizontalDragEnd");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C9;
  var C8;
  simple_gesture_detector._SimpleGestureDetectorState = class _SimpleGestureDetectorState extends framework.State$(simple_gesture_detector.SimpleGestureDetector) {
    [_onVerticalDragStart](details) {
      this[_initialSwipeOffset] = details.globalPosition;
    }
    [_onVerticalDragUpdate](details) {
      this[_finalSwipeOffset] = details.globalPosition;
      if (dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.singularOnEnd)) {
        return;
      }
      if (this[_initialSwipeOffset] != null) {
        let offsetDifference = dart.notNull(this[_initialSwipeOffset].dy) - dart.notNull(this[_finalSwipeOffset].dy);
        if (offsetDifference[$abs]() > dart.notNull(this.widget.swipeConfig.verticalThreshold)) {
          this[_initialSwipeOffset] = dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.singular) ? null : this[_finalSwipeOffset];
          let direction = offsetDifference > 0 ? simple_gesture_detector.SwipeDirection.up : simple_gesture_detector.SwipeDirection.down;
          if (dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.continuous) || this[_previousDirection] == null || !dart.equals(direction, this[_previousDirection])) {
            this[_previousDirection] = direction;
            this.widget.onVerticalSwipe(direction);
          }
        }
      }
    }
    [_onVerticalDragEnd](details) {
      if (dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.singularOnEnd)) {
        if (this[_initialSwipeOffset] != null) {
          let offsetDifference = dart.notNull(this[_initialSwipeOffset].dy) - dart.notNull(this[_finalSwipeOffset].dy);
          if (offsetDifference[$abs]() > dart.notNull(this.widget.swipeConfig.verticalThreshold)) {
            let direction = offsetDifference > 0 ? simple_gesture_detector.SwipeDirection.up : simple_gesture_detector.SwipeDirection.down;
            this.widget.onVerticalSwipe(direction);
          }
        }
      }
      this[_initialSwipeOffset] = null;
      this[_previousDirection] = null;
    }
    [_onHorizontalDragStart](details) {
      this[_initialSwipeOffset] = details.globalPosition;
    }
    [_onHorizontalDragUpdate](details) {
      this[_finalSwipeOffset] = details.globalPosition;
      if (dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.singularOnEnd)) {
        return;
      }
      if (this[_initialSwipeOffset] != null) {
        let offsetDifference = dart.notNull(this[_initialSwipeOffset].dx) - dart.notNull(this[_finalSwipeOffset].dx);
        if (offsetDifference[$abs]() > dart.notNull(this.widget.swipeConfig.horizontalThreshold)) {
          this[_initialSwipeOffset] = dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.singular) ? null : this[_finalSwipeOffset];
          let direction = offsetDifference > 0 ? simple_gesture_detector.SwipeDirection.left : simple_gesture_detector.SwipeDirection.right;
          if (dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.continuous) || this[_previousDirection] == null || !dart.equals(direction, this[_previousDirection])) {
            this[_previousDirection] = direction;
            this.widget.onHorizontalSwipe(direction);
          }
        }
      }
    }
    [_onHorizontalDragEnd](details) {
      if (dart.equals(this.widget.swipeConfig.swipeDetectionBehavior, simple_gesture_detector.SwipeDetectionBehavior.singularOnEnd)) {
        if (this[_initialSwipeOffset] != null) {
          let offsetDifference = dart.notNull(this[_initialSwipeOffset].dx) - dart.notNull(this[_finalSwipeOffset].dx);
          if (offsetDifference[$abs]() > dart.notNull(this.widget.swipeConfig.horizontalThreshold)) {
            let direction = offsetDifference > 0 ? simple_gesture_detector.SwipeDirection.left : simple_gesture_detector.SwipeDirection.right;
            this.widget.onHorizontalSwipe(direction);
          }
        }
      }
      this[_initialSwipeOffset] = null;
      this[_previousDirection] = null;
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({behavior: this.widget.behavior, child: this.widget.child, onTap: this.widget.onTap, onLongPress: this.widget.onLongPress, onDoubleTap: this.widget.onDoubleTap, onVerticalDragStart: this.widget.onVerticalSwipe != null ? dart.bind(this, _onVerticalDragStart) : null, onVerticalDragUpdate: this.widget.onVerticalSwipe != null ? dart.bind(this, _onVerticalDragUpdate) : null, onVerticalDragEnd: this.widget.onVerticalSwipe != null ? dart.bind(this, _onVerticalDragEnd) : null, onHorizontalDragStart: this.widget.onHorizontalSwipe != null ? dart.bind(this, _onHorizontalDragStart) : null, onHorizontalDragUpdate: this.widget.onHorizontalSwipe != null ? dart.bind(this, _onHorizontalDragUpdate) : null, onHorizontalDragEnd: this.widget.onHorizontalSwipe != null ? dart.bind(this, _onHorizontalDragEnd) : null, $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (simple_gesture_detector._SimpleGestureDetectorState.new = function() {
    this[_initialSwipeOffset] = null;
    this[_finalSwipeOffset] = null;
    this[_previousDirection] = null;
    simple_gesture_detector._SimpleGestureDetectorState.__proto__.new.call(this);
    ;
  }).prototype = simple_gesture_detector._SimpleGestureDetectorState.prototype;
  dart.addTypeTests(simple_gesture_detector._SimpleGestureDetectorState);
  dart.setMethodSignature(simple_gesture_detector._SimpleGestureDetectorState, () => ({
    __proto__: dart.getMethods(simple_gesture_detector._SimpleGestureDetectorState.__proto__),
    [_onVerticalDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    [_onVerticalDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_onVerticalDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    [_onHorizontalDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    [_onHorizontalDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_onHorizontalDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple_gesture_detector._SimpleGestureDetectorState, "package:simple_gesture_detector/simple_gesture_detector.dart");
  dart.setFieldSignature(simple_gesture_detector._SimpleGestureDetectorState, () => ({
    __proto__: dart.getFields(simple_gesture_detector._SimpleGestureDetectorState.__proto__),
    [_initialSwipeOffset]: dart.fieldType(ui.Offset),
    [_finalSwipeOffset]: dart.fieldType(ui.Offset),
    [_previousDirection]: dart.fieldType(simple_gesture_detector.SwipeDirection)
  }));
  var C21;
  var C22;
  var C23;
  var C24;
  simple_gesture_detector.SwipeDetectionBehavior = class SwipeDetectionBehavior extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (simple_gesture_detector.SwipeDetectionBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = simple_gesture_detector.SwipeDetectionBehavior.prototype;
  dart.addTypeTests(simple_gesture_detector.SwipeDetectionBehavior);
  dart.setLibraryUri(simple_gesture_detector.SwipeDetectionBehavior, "package:simple_gesture_detector/simple_gesture_detector.dart");
  dart.setFieldSignature(simple_gesture_detector.SwipeDetectionBehavior, () => ({
    __proto__: dart.getFields(simple_gesture_detector.SwipeDetectionBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(simple_gesture_detector.SwipeDetectionBehavior, ['toString']);
  simple_gesture_detector.SwipeDetectionBehavior.singular = C21 || CT.C21;
  simple_gesture_detector.SwipeDetectionBehavior.singularOnEnd = C6 || CT.C6;
  simple_gesture_detector.SwipeDetectionBehavior.continuous = C22 || CT.C22;
  simple_gesture_detector.SwipeDetectionBehavior.continuousDistinct = C23 || CT.C23;
  simple_gesture_detector.SwipeDetectionBehavior.values = C24 || CT.C24;
  simple_gesture_detector.SimpleSwipeConfig = class SimpleSwipeConfig extends core.Object {
    get verticalThreshold() {
      return this[verticalThreshold$];
    }
    set verticalThreshold(value) {
      super.verticalThreshold = value;
    }
    get horizontalThreshold() {
      return this[horizontalThreshold$];
    }
    set horizontalThreshold(value) {
      super.horizontalThreshold = value;
    }
    get swipeDetectionBehavior() {
      return this[swipeDetectionBehavior$];
    }
    set swipeDetectionBehavior(value) {
      super.swipeDetectionBehavior = value;
    }
  };
  (simple_gesture_detector.SimpleSwipeConfig.new = function(opts) {
    let verticalThreshold = opts && 'verticalThreshold' in opts ? opts.verticalThreshold : 50;
    let horizontalThreshold = opts && 'horizontalThreshold' in opts ? opts.horizontalThreshold : 50;
    let swipeDetectionBehavior = opts && 'swipeDetectionBehavior' in opts ? opts.swipeDetectionBehavior : C6 || CT.C6;
    this[verticalThreshold$] = verticalThreshold;
    this[horizontalThreshold$] = horizontalThreshold;
    this[swipeDetectionBehavior$] = swipeDetectionBehavior;
    if (!(verticalThreshold != null)) dart.assertFailed(null, "org-dartlang-app:///packages/simple_gesture_detector/simple_gesture_detector.dart", 203, 16, "verticalThreshold != null");
    if (!(horizontalThreshold != null)) dart.assertFailed(null, "org-dartlang-app:///packages/simple_gesture_detector/simple_gesture_detector.dart", 204, 16, "horizontalThreshold != null");
    if (!(swipeDetectionBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/simple_gesture_detector/simple_gesture_detector.dart", 205, 16, "swipeDetectionBehavior != null");
    ;
  }).prototype = simple_gesture_detector.SimpleSwipeConfig.prototype;
  dart.addTypeTests(simple_gesture_detector.SimpleSwipeConfig);
  const verticalThreshold$ = SimpleSwipeConfig_verticalThreshold;
  const horizontalThreshold$ = SimpleSwipeConfig_horizontalThreshold;
  const swipeDetectionBehavior$ = SimpleSwipeConfig_swipeDetectionBehavior;
  dart.setLibraryUri(simple_gesture_detector.SimpleSwipeConfig, "package:simple_gesture_detector/simple_gesture_detector.dart");
  dart.setFieldSignature(simple_gesture_detector.SimpleSwipeConfig, () => ({
    __proto__: dart.getFields(simple_gesture_detector.SimpleSwipeConfig.__proto__),
    verticalThreshold: dart.finalFieldType(core.double),
    horizontalThreshold: dart.finalFieldType(core.double),
    swipeDetectionBehavior: dart.finalFieldType(simple_gesture_detector.SwipeDetectionBehavior)
  }));
  dart.trackLibraries("packages/simple_gesture_detector/simple_gesture_detector", {
    "package:simple_gesture_detector/simple_gesture_detector.dart": simple_gesture_detector
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple_gesture_detector.dart"],"names":[],"mappings":"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","file":"simple_gesture_detector.ddc.js"}');
  // Exports:
  return {
    simple_gesture_detector: simple_gesture_detector
  };
});

//# sourceMappingURL=simple_gesture_detector.ddc.js.map
